# Azure Policy Definitions - App Configuration

* [App Configuration should use a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Configuration/CustomerManagedKey_Audit.json)  
  Customer-managed keys provide enhanced data protection by allowing you to manage your encryption keys. This is often required to meet compliance requirements. 
  * Resource Types 
    * `Microsoft.AppConfiguration/configurationStores` 
* [App Configuration should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Configuration/PrivateLink_Audit.json)  
  Azure Private Link lets you connect your virtual network to Azure services without a public IP address at the source or destination. The private link platform handles the connectivity between the consumer and services over the Azure backbone network. By mapping private endpoints to your app configuration instances instead of the entire service, you'll also be protected against data leakage risks. Learn more at: https://aka.ms/appconfig/private-endpoint. 
  * Resource Types 
    * `Microsoft.AppConfiguration/configurationStores` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
