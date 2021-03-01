# Azure Policy Definitions - General

* [Allowed locations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/AllowedLocations_Deny.json)  
  This policy enables you to restrict the locations your organization can specify when deploying resources. Use to enforce your geo-compliance requirements. Excludes resource groups, Microsoft.AzureActiveDirectory/b2cDirectories, and resources that use the 'global' region. 
  * Policy Set Definitions (2)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Allowed resource types](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/AllowedResourceTypes_Deny.json)  
  This policy enables you to specify the resource types that your organization can deploy. Only resource types that support 'tags' and 'location' will be affected by this policy. To restrict all resources please duplicate this policy and change the 'mode' to 'All'. 
* [Allow resource creation only in Asia data centers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/AsiaRegionsOnly_Deny.json)  
  Allows resource creation in the following locations only: East Asia, Southeast Asia, West India, South India, Central India, Japan East, Japan West 
* [Custom subscription owner roles should not exist](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/CustomSubscription_OwnerRole_Audit.json)  
  This policy ensures that no custom subscription owner roles exist. 
  * Resource Types 
    * `Microsoft.Authorization/roleDefinitions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Allow resource creation only in European data centers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/EuropeanRegionsOnly_Deny.json)  
  Allows resource creation in the following locations only: North Europe, West Europe 
* [Allow resource creation only in India data centers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/IndiaRegionsOnly_Deny.json)  
  Allows resource creation in the following locations only: West India, South India, Central India 
* [Not allowed resource types](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/InvalidResourceTypes_Deny.json)  
  This policy enables you to specify the resource types that your organization cannot deploy. 
* [Allowed locations for resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/ResourceGroupAllowedLocations_Deny.json)  
  This policy enables you to restrict the locations your organization can create resource groups in. Use to enforce your geo-compliance requirements. 
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (2)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Audit resource location matches resource group location](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/ResourcesInResourceGroupLocation_Audit.json)  
  Audit that the resource location matches its resource group location 
* [Audit usage of custom RBAC rules](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/Subscription_AuditCustomRBACRoles_Audit.json)  
  Audit built-in roles such as 'Owner, Contributer, Reader' instead of custom RBAC roles, which are error prone. Using custom roles is treated as an exception and requires a rigorous review and threat modeling 
  * Resource Types 
    * `Microsoft.Authorization/roleDefinitions` 
  * Policy Set Definitions (13)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Allow resource creation only in United States data centers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/USRegionsOnly_Deny.json)  
  Allows resource creation in the following locations only: Central US, East US, East US2, North Central US, South Central US, West US 
