const path = require('path');
const fs = require('fs');

function findResourceTypes(node, foundTypes = []) {
    for (const property in node) {
        let rules = node[property];
        if (property == "field" && node.field == "type") {
            rules = [node];
        }
        if (Array.isArray(rules)) {
            rules.forEach(function (rule) {
                if (rule.value == "[field('type')]") {
                    foundTypes.push(rule.equals);
                } else if (rule.field == "type") {
                    if (rule.equals) {
                        foundTypes.push(rule.equals);
                    } else if (rule.like) {
                        foundTypes.push(rule.like);
                    } else if (rule.in && Array.isArray(rule.in)) {
                        foundTypes.push(...rule.in);
                    }
                } else if (typeof rule == "object") {
                    return findResourceTypes(rule, foundTypes)
                }
            });
        } else {
            if (typeof node[property] == "object") {
                return findResourceTypes(node[property], foundTypes)
            }
        }    
    }

    return foundTypes;
}

let rulesByResourceType = {'*': []};
let policyDefinitionIdsMD = {};
policySetDefinitionIdsMD = {}

let mdBody = '';
let mdBody2 = '';
let mdToc = '';
let mdFilename = '';

let policyDir = '../azure-policy/built-in-policies/policyDefinitions';
let policyBase = 'https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions';
let policySetDir = '../azure-policy/built-in-policies/policySetDefinitions';
let policySetBase = 'https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions';
let subdir = 'policyDefinitionsByService';
if (!fs.existsSync(subdir)){
    fs.mkdirSync(subdir);
}

// loop through all directories

const getdirnames = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());

let dirs = getdirnames(policySetDir);
dirs.forEach(function (item, index) {

    if (item != "Azure Government") {
        let files = fs.readdirSync(path.join(policySetDir,item));
        files.forEach(function (file) {
            if (file.endsWith('.json')) {
                try {
                    let policySetJson = fs.readFileSync(path.join(policySetDir,item, file), {encoding : 'utf8'});
                    let policySetData = JSON.parse(policySetJson.replace(/^\uFEFF/, ""));
                    let name = policySetData.properties.displayName
                    let policySetMD = `* [${name}](${policySetBase}/${encodeURIComponent(item)}/${file})  \n`;
                    policySetData.properties.policyDefinitions.forEach(pdid => {
                        if (!policySetDefinitionIdsMD[pdid.policyDefinitionId]) {
                            policySetDefinitionIdsMD[pdid.policyDefinitionId] = [policySetMD];
                        } else {
                            policySetDefinitionIdsMD[pdid.policyDefinitionId].push(policySetMD);
                        }
                    });
                        
                } catch (error) {
                    console.error('*** -> ' + file + '\t' + error);
                }
            }
        });
    }
});

dirs = getdirnames(policyDir);
dirs.forEach(function (item, index) {
    console.log(item, index);
    mdFilename = `policyDefinitions-${item.replace(/\s+/g, '')}.md`;
    mdBody += `\n### ${item}\n[(details)](${subdir}/${mdFilename})\n\n`;
    mdToc += `* [${item}](#${item.replace(/\s+/g, '-').toLowerCase()}) \n`
    mdBody2 = `# Azure Policy Definitions - ${item}\n\n`;
    

    let files = fs.readdirSync(path.join(policyDir,item));
    files.forEach(function (file) {
        //console.log(file)
        if (file.endsWith('.json')) {
            try {
                let policyJson = fs.readFileSync(path.join(policyDir,item, file), {encoding : 'utf8'});
                let policyData = JSON.parse(policyJson.replace(/^\uFEFF/, ""));
                let name = policyData.properties.displayName
                //console.log(name);
                let policyMD = `* [${name}](${policyBase}/${encodeURIComponent(item)}/${file})  \n`;
                mdBody += policyMD;
                mdBody2 += policyMD;
                mdBody2 += `  ${policyData.properties.description} \n`;
                let resourceTypes = new Set(findResourceTypes(policyData.properties.policyRule.if || {}));
                policyDefinitionIdsMD[policyData.id] = policyMD;
                if (resourceTypes.size == 0) {
                    rulesByResourceType['*'].push(policyMD);
                } else {
                    mdBody += `  * Resource Types \n`;
                    mdBody2 += `  * Resource Types \n`;
                }
                resourceTypes.forEach(t => {
                    mdBody += `    * \`${t}\` \n`;
                    mdBody2 += `    * \`${t}\` \n`;
    
                    if (!rulesByResourceType[t]) {
                        rulesByResourceType[t] = [policyMD];
                    } else {
                        rulesByResourceType[t].push(policyMD);
                    }
                });
                if (policySetDefinitionIdsMD[policyData.id]) {
                    mdBody += `  * Policy Set Definitions (${policySetDefinitionIdsMD[policyData.id].length})  \n`;
                    mdBody2 += `  * Policy Set Definitions (${policySetDefinitionIdsMD[policyData.id].length})  \n`;
                    policySetDefinitionIdsMD[policyData.id].forEach(ps => {
                        mdBody += ('    ' + ps);
                        mdBody2 += ('    ' + ps);
                    });
                }                
            } catch (error) {
                console.error('*** -> ' + file + '\t' + error);
            }

        }
    });


    fs.writeFileSync(subdir + path.sep + mdFilename, mdBody2);
});


let policyDefinitionsMD =  `
# Azure Policy Definitions

A list of Azure Policy Definitions, grouped by category with the list of applicable Resource Types and
links to each of the Azure Policy Set Definitions in which this is included.

## Table of Contents
${mdToc}
---
${mdBody}
`;

fs.writeFileSync('policyDefinitions.md', policyDefinitionsMD);

// ---

let rbrtBody = '';

Object.keys(rulesByResourceType).sort().forEach(rbrt => {
    rbrtBody += `## \`${rbrt}\` (${rulesByResourceType[rbrt].length}) \n`;
    rulesByResourceType[rbrt].forEach( name => {
        rbrtBody += name;
    });
});

let policyByResourceTypeMD =  `
# Azure Policy Definitions by Resource Type

A list of Azure Policy Definitions group by applicable Resource Type.

---
${rbrtBody}
`;

fs.writeFileSync('policyDefinitionsByResourceType.md', policyByResourceTypeMD);

// ---

mdToc = '';
mdBody = '';
dirs = getdirnames(policySetDir);
dirs.forEach(function (item, index) {
    if (item != "Azure Government") {
        console.log(item, index);
        mdBody += `\n### ${item}\n\n`;
        mdToc += `* [${item}](#${item.replace(/\s+/g, '-').toLowerCase()}) \n`

        let files = fs.readdirSync(path.join(policySetDir,item));
        files.forEach(function (file) {
            //console.log(file)
            if (file.endsWith('.json')) {
                try {
                    let policySetJson = fs.readFileSync(path.join(policySetDir,item, file), {encoding : 'utf8'});
                    let policySetData = JSON.parse(policySetJson.replace(/^\uFEFF/, ""));
                    let name = policySetData.properties.displayName
                    //console.log(name);
                    let policySetMD = `* [${name}](${policySetBase}/${encodeURIComponent(item)}/${file}) (${policySetData.properties.policyDefinitions.length})  \n`;
                    mdBody += policySetMD;
                    mdBody += `  ${policySetData.properties.description}  \n`;
                    policySetData.properties.policyDefinitions.forEach(pdid => {
                        mdBody += ('  ' + policyDefinitionIdsMD[pdid.policyDefinitionId]);
                    });                    
                } catch (error) {
                    console.error('*** -> ' + file + '\t' + error);
                }
            }
        });
    }
});

dirs = getdirnames(policySetDir);
dirs.forEach(function (item, index) {
    if (item != "Azure Government") {
        let files = fs.readdirSync(path.join(policySetDir,item));
        files.forEach(function (file) {
            if (file.endsWith('.json')) {
                try {
                    let policySetJson = fs.readFileSync(path.join(policySetDir,item, file), {encoding : 'utf8'});
                    let policySetData = JSON.parse(policySetJson.replace(/^\uFEFF/, ""));
                    let name = policySetData.properties.displayName
                    let policySetMD = `* [${name}](${policySetBase}/${encodeURIComponent(item)}/${file})  \n`;
                    policySetData.properties.policyDefinitions.forEach(pdid => {
                        policySetDefinitionIdsMD[pdid.policyDefinitionId] = policySetMD
                    });
                        
                } catch (error) {
                    console.error('*** -> ' + file + '\t' + error);
                }
            }
        });
    }
});


let policySetDefinitionsMD =  `
# Azure Policy Set Definitions

A list of Azure Policy Set Definitions, grouped by category with links to each of the included Azure Policy Definitions.

## Table of Contents
${mdToc}
---
${mdBody}
`;

fs.writeFileSync('policySetDefinitions.md', policySetDefinitionsMD);
