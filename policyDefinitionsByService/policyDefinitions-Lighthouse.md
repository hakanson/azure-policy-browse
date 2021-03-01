# Azure Policy Definitions - Lighthouse

* [Allow managing tenant ids to onboard through Azure Lighthouse](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Lighthouse/AllowCertainManagingTenantIds_Deny.json)  
  Restricting Azure Lighthouse delegations to specific managing tenants increases security by limiting those who can manage your Azure resources. 
  * Resource Types 
    * `Microsoft.ManagedServices/registrationDefinitions` 
* [Audit delegation of scopes to a managing tenant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Lighthouse/Lighthouse_Delegations_Audit.json)  
  Audit delegation of scopes to a managing tenant via Azure Lighthouse. 
  * Resource Types 
    * `Microsoft.ManagedServices/registrationAssignments` 
