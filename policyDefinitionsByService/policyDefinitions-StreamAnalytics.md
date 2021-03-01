# Azure Policy Definitions - Stream Analytics

* [Resource logs in Azure Stream Analytics should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Stream%20Analytics/StreamAnalytics_AuditDiagnosticLog_Audit.json)  
  Audit enabling of resource logs. This enables you to recreate activity trails to use for investigation purposes; when a security incident occurs or when your network is compromised 
  * Resource Types 
    * `Microsoft.StreamAnalytics/streamingJobs` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Stream Analytics jobs should use customer-managed keys to encrypt data](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Stream%20Analytics/StreamAnalytics_CMK_Audit.json)  
  Use customer-managed keys when you want to securely store any metadata and private data assets of your Stream Analytics jobs in your storage account. This gives you total control over how your Stream Analytics data is encrypted. 
  * Resource Types 
    * `Microsoft.StreamAnalytics/streamingJobs` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
