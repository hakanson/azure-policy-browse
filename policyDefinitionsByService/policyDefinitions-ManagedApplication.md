# Azure Policy Definitions - Managed Application

* [Application definition for Managed Application should use customer provided storage account](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Managed%20Application/ApplicationDefinition_Missing_StorageAccount_Deny.json)  
  Use your own storage account to control the application definition data when this is a regulatory or compliance requirement. You can choose to store your managed application definition within a storage account provided by you during creation, so that its location and access can be fully managed by you to fulfill regulatory compliance requirements. 
  * Resource Types 
    * `Microsoft.Solutions/applicationDefinitions` 
* [Deploy associations for a managed application](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Managed%20Application/AssociationForManagedApplication_Deploy.json)  
  Deploys an association resource that associates selected resource types to the specified managed application.  This policy deployment does not support nested resource types. 
