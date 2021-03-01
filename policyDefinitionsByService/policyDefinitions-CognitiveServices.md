# Azure Policy Definitions - Cognitive Services

* [Cognitive Services accounts should use customer owned storage or enable data encryption.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_BYOX_Audit.json)  
  This policy audits any Cognitive Services account not using customer owned storage nor data encryption. For each Cognitive Services account with storage, use either customer owned storage or enable data encryption. 
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Cognitive Services accounts should enable data encryption with a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_CustomerManagedKey_Audit.json)  
  Customer-managed keys are commonly required to meet regulatory compliance standards. Customer-managed keys enable the data stored in Cognitive Services to be encrypted with an Azure Key Vault key created and owned by you. You have full control and responsibility for the key lifecycle, including rotation and management. Learn more about customer-managed keys at https://go.microsoft.com/fwlink/?linkid=2121321. 
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Public network access should be disabled for Cognitive Services accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_DisablePublicNetworkAccess_Audit.json)  
  This policy audits any Cognitive Services account in your environment with public network access enabled. Public network access should be disabled so that only connections from private endpoints are allowed. 
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Cognitive Services accounts should enable data encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_Encryption_Audit.json)  
  This policy audits any Cognitive Services account not using data encryption. For each Cognitive Services account with storage, should enable data encryption with either customer managed or Microsoft managed key. 
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Cognitive Services accounts should restrict network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_NetworkAcls_Audit.json)  
  Network access to Cognitive Services accounts should be restricted. Configure network rules so only applications from allowed networks can access the Cognitive Services account. To allow connections from specific internet or on-premises clients, access can be granted to traffic from specific Azure virtual networks or to public internet IP address ranges. 
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Cognitive Services accounts should use customer owned storage](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_UserOwnedStorage_Audit.json)  
  This policy audits any Cognitive Services account not using customer owned storage. 
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 
