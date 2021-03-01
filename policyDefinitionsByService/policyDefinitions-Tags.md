# Azure Policy Definitions - Tags

* [Add or replace a tag on resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddOrReplaceTag_Modify.json)  
  Adds or replaces the specified tag and value when any resource is created or updated. Existing resources can be remediated by triggering a remediation task. Does not modify tags on resource groups. 
* [Add or replace a tag on resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddOrReplaceTag_ResourceGroup_Modify.json)  
  Adds or replaces the specified tag and value when any resource group is created or updated. Existing resource groups can be remediated by triggering a remediation task. 
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
* [Add or replace a tag on subscriptions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddOrReplaceTag_Subscription_Modify.json)  
  Adds or replaces the specified tag and value on subscriptions via a remediation task. Existing resource groups can be remediated by triggering a remediation task. See https://aka.ms/azurepolicyremediation for more information on policy remediation. 
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Add a tag to resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddTag_Modify.json)  
  Adds the specified tag and value when any resource missing this tag is created or updated. Existing resources can be remediated by triggering a remediation task. If the tag exists with a different value it will not be changed. Does not modify tags on resource groups. 
* [Add a tag to resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddTag_ResourceGroup_Modify.json)  
  Adds the specified tag and value when any resource group missing this tag is created or updated. Existing resource groups can be remediated by triggering a remediation task. If the tag exists with a different value it will not be changed. 
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
* [Add a tag to subscriptions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddTag_Subscription_Modify.json)  
  Adds the specified tag and value to subscriptions via a remediation task. If the tag exists with a different value it will not be changed. See https://aka.ms/azurepolicyremediation for more information on policy remediation. 
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Append a tag and its value to resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/ApplyTag_Append.json)  
  Appends the specified tag and value when any resource which is missing this tag is created or updated. Does not modify the tags of resources created before this policy was applied until those resources are changed. Does not apply to resource groups. New 'modify' effect policies are available that support remediation of tags on existing resources (see https://aka.ms/modifydoc). 
* [Allow resource creation if 'department' tag set](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/DepartmentTagRequired_Deny.json)  
  Allows resource creation only if the 'department' tag is set 
* [Allow resource creation if 'environment' tag value in allowed values](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/EnvironmentTagValues_Deny.json)  
  Allows resource creation if the 'environment' tag is set to one of the following values: production, dev, test, staging 
* [Inherit a tag from the subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/InheritTag_AddOrReplace_FromSubscription.json)  
  Adds or replaces the specified tag and value from the containing subscription when any resource is created or updated. Existing resources can be remediated by triggering a remediation task. 
* [Inherit a tag from the resource group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/InheritTag_AddOrReplace_Modify.json)  
  Adds or replaces the specified tag and value from the parent resource group when any resource is created or updated. Existing resources can be remediated by triggering a remediation task. 
* [Inherit a tag from the subscription if missing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/InheritTag_Add_FromSubscription.json)  
  Adds the specified tag with its value from the containing subscription when any resource missing this tag is created or updated. Existing resources can be remediated by triggering a remediation task. If the tag exists with a different value it will not be changed. 
* [Inherit a tag from the resource group if missing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/InheritTag_Add_Modify.json)  
  Adds the specified tag with its value from the parent resource group when any resource missing this tag is created or updated. Existing resources can be remediated by triggering a remediation task. If the tag exists with a different value it will not be changed. 
* [Append a tag and its value from the resource group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/InheritTag_Append.json)  
  Appends the specified tag with its value from the resource group when any resource which is missing this tag is created or updated. Does not modify the tags of resources created before this policy was applied until those resources are changed. New 'modify' effect policies are available that support remediation of tags on existing resources (see https://aka.ms/modifydoc). 
* [Require a tag and its value on resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/RequireTagAndValue_Deny.json)  
  Enforces a required tag and its value. Does not apply to resource groups. 
* [Require a tag on resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/RequireTag_Deny.json)  
  Enforces existence of a tag. Does not apply to resource groups. 
* [Append a tag and its value to resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/ResourceGroupApplyTag_Append.json)  
  Appends the specified tag and value when any resource group which is missing this tag is created or updated. Does not modify the tags of resource groups created before this policy was applied until those resource groups are changed. New 'modify' effect policies are available that support remediation of tags on existing resources (see https://aka.ms/modifydoc). 
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
* [Require a tag and its value on resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/ResourceGroupRequireTagAndValue_Deny.json)  
  Enforces a required tag and its value on resource groups. 
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
* [Require a tag on resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/ResourceGroupRequireTag_Deny.json)  
  Enforces existence of a tag on resource groups. 
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
