# Azure Policy Definitions - Azure Data Explorer

* [Azure Data Explorer encryption at rest should use a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Azure%20Data%20Explorer/ADX_CMK.json)  
  Enabling encryption at rest using a customer-managed key on your Azure Data Explorer cluster provides additional control over the key being used by the encryption at rest. This feature is oftentimes applicable to customers with special compliance requirements and requires a Key Vault to managing the keys. 
  * Resource Types 
    * `Microsoft.Kusto/Clusters` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Virtual network injection should be enabled for Azure Data Explorer](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Azure%20Data%20Explorer/ADX_VNET_configured.json)  
  Secure your network perimeter with virtual network injection which allows you to enforce network security group rules, connect on-premises and secure your data connection sources with service endpoints. 
  * Resource Types 
    * `Microsoft.Kusto/Clusters` 
* [Disk encryption should be enabled on Azure Data Explorer](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Azure%20Data%20Explorer/ADX_disk_encrypted.json)  
  Enabling disk encryption helps protect and safeguard your data to meet your organizational security and compliance commitments. 
  * Resource Types 
    * `Microsoft.Kusto/Clusters` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Double encryption should be enabled on Azure Data Explorer](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Azure%20Data%20Explorer/ADX_doubleEncryption.json)  
  Enabling double encryption helps protect and safeguard your data to meet your organizational security and compliance commitments. When double encryption has been enabled, data in the storage account is encrypted twice, once at the service level and once at the infrastructure level, using two different encryption algorithms and two different keys. 
  * Resource Types 
    * `Microsoft.Kusto/Clusters` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
