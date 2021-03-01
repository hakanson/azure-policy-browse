# Azure Policy Definitions - Cosmos DB

* [Deploy Advanced Threat Protection for Cosmos DB Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/CosmosDbAdvancedThreatProtection_Deploy.json)  
  This policy enables Advanced Threat Protection across Cosmos DB accounts. 
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Azure Cosmos DB accounts should use customer-managed keys to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/Cosmos_CMK_Deny.json)  
  Use customer-managed keys to manage the encryption at rest of your Azure Cosmos DB. By default, the data is encrypted at rest with service-managed keys, but customer-managed keys are commonly required to meet regulatory compliance standards. Customer-managed keys enable the data to be encrypted with an Azure Key Vault key created and owned by you. You have full control and responsibility for the key lifecycle, including rotation and management. Learn more at https://aka.ms/cosmosdb-cmk. 
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Cosmos DB key based metadata write access should be disabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/Cosmos_DisableMetadata_Append.json)  
  This policy enables you to ensure all Azure Cosmos DB accounts disable key based metadata write access. 
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
  * Policy Set Definitions (1)  
    * [Enable Azure Cosmos DB throughput policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Cosmos%20DB/Cosmos_Throughput.json)  
* [Azure Cosmos DB allowed locations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/Cosmos_Locations_Deny.json)  
  This policy enables you to restrict the locations your organization can specify when deploying Azure Cosmos DB resources. Use to enforce your geo-compliance requirements. 
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
* [Azure Cosmos DB throughput should be limited](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/Cosmos_MaxThroughput_Deny.json)  
  This policy enables you to restrict the maximum throughput your organization can specify when creating Azure Cosmos DB databases and containers through the resource provider. It blocks the creation of autoscale resources. 
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts/*/throughputSettings` 
    * `Microsoft.DocumentDB/databaseAccounts/sqlDatabases` 
    * `Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers` 
    * `Microsoft.DocumentDB/databaseAccounts/mongodbDatabases` 
    * `Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections` 
    * `Microsoft.DocumentDB/databaseAccounts/gremlinDatabases` 
    * `Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs` 
    * `Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces` 
    * `Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables` 
    * `Microsoft.DocumentDB/databaseAccounts/tables` 
  * Policy Set Definitions (1)  
    * [Enable Azure Cosmos DB throughput policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Cosmos%20DB/Cosmos_Throughput.json)  
* [Azure Cosmos DB accounts should have firewall rules](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/Cosmos_NetworkRulesExist_Audit.json)  
  Firewall rules should be defined on your Azure Cosmos DB accounts to prevent traffic from unauthorized sources. Accounts that have at least one IP rule defined with the virtual network filter enabled are deemed compliant. Accounts disabling public access are also deemed compliant. 
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
