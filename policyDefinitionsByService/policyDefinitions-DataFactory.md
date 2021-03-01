# Azure Policy Definitions - Data Factory

* [Azure data factories should be encrypted with a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/DataFactory_CustomerManagedKey_Audit.json)  
  Use customer-managed keys to manage the encryption at rest of your Azure Data Factory. By default, customer data is encrypted with service-managed keys, but customer-managed keys are commonly required to meet regulatory compliance standards. Customer-managed keys enable the data to be encrypted with an Azure Key Vault key created and owned by you. You have full control and responsibility for the key lifecycle, including rotation and management. Learn more at https://aka.ms/adf-cmk. 
  * Resource Types 
    * `Microsoft.DataFactory/factories` 
* [Public network access on Azure Data Factory should be disabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/DataFactory_PublicNetworkAccess_Audit.json)  
  Disabling the public network access property improves security by ensuring your Azure Data Factory can only be accessed from a private endpoint. 
  * Resource Types 
    * `Microsoft.DataFactory/factories` 
* [Azure Data Factory should use a Git repository for source control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/Factory_None_GIT_Audit.json)  
  Enable source control on data factories, to gain capabilities such as change tracking, collaboration, continuous integration, and deployment. 
  * Resource Types 
    * `Microsoft.DataFactory/factories` 
* [Azure Data Factory integration runtime should have a limit for number of cores](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/IR_Core_Count_Exceeds_Audit.json)  
  To manage your resources and costs, limit the number of cores for an integration runtime. 
  * Resource Types 
    * `Microsoft.DataFactory/factories/integrationRuntimes` 
* [Azure Data Factory linked services should use system-assigned managed identity authentication when it is supported](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/LinkedService_All_Auth_Audit_except_MSI.json)  
  Using system-assigned managed identity when communicating with data stores via linked services avoids the use of less secured credentials such as passwords or connection strings. 
  * Resource Types 
    * `Microsoft.DataFactory/factories/linkedservices` 
* [Azure Data Factory linked services should use Key Vault for storing secrets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/LinkedService_InlineSecrets_Audit.json)  
  To ensure secrets (such as connection strings) are managed securely, require users to provide secrets using an Azure Key Vault instead of specifying them inline in linked services. 
  * Resource Types 
    * `Microsoft.DataFactory/factories/linkedservices` 
* [Azure Data Factory linked service resource type should be in allow list](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/LinkedService_ResourceType_Audit.json)  
  Define the allow list of Azure Data Factory linked service types. Restricting allowed resource types enables control over the boundary of data movement. For example, restrict a scope to only allow blob storage with Data Lake Storage Gen1 and Gen2 for analytics or a scope to only allow SQL and Kusto access for real-time queries. 
  * Resource Types 
    * `Microsoft.DataFactory/factories/linkedservices` 
