# Azure Policy Definitions - Batch

* [Resource logs in Batch accounts should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Batch/Batch_AuditDiagnosticLog_Audit.json)  
  Audit enabling of resource logs. This enables you to recreate activity trails to use for investigation purposes; when a security incident occurs or when your network is compromised 
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Metric alert rules should be configured on Batch accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Batch/Batch_AuditMetricAlerts_Audit.json)  
  Audit configuration of metric alert rules on Batch account to enable the required metric 
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 
  * Policy Set Definitions (1)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Azure Batch account should use customer-managed keys to encrypt data](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Batch/Batch_CustomerManagedKey_Audit.json)  
  Use customer-managed keys to manage the encryption at rest of your Batch account's data. By default, customer data is encrypted with service-managed keys, but customer-managed keys are commonly required to meet regulatory compliance standards. Customer-managed keys enable the data to be encrypted with an Azure Key Vault key created and owned by you. You have full control and responsibility for the key lifecycle, including rotation and management. Learn more at https://aka.ms/Batch-CMK. 
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 
* [Public network access should be disabled for Batch accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Batch/Batch_DisablePublicNetworkAccess_Audit.json)  
  Disabling public network access on a Batch account improves security by ensuring your Batch account can only be accessed from a private endpoint. Learn more about disabling public network access at https://docs.microsoft.com/azure/batch/private-connectivity. 
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 
