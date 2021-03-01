# Azure Policy Definitions - Event Grid

* [Deploy - Configure Azure Event Grid domains to use private DNS zones](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Domains_PrivateDNSZone_DeployIfNotExists.json)  
  Use private DNS zones to override the DNS resolution for a private endpoint. Learn more at: https://aka.ms/privatednszone. 
  * Resource Types 
    * `Microsoft.Network/privateEndpoints` 
* [Azure Event Grid domains should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Domains_PrivateEndpoint_Audit.json)  
  Azure Private Link lets you connect your virtual network to Azure services without a public IP address at the source or destination. The Private Link platform handles the connectivity between the consumer and services over the Azure backbone network. By mapping private endpoints to your Event Grid domain instead of the entire service, you'll also be protected against data leakage risks. Learn more at: https://aka.ms/privateendpoints. 
  * Resource Types 
    * `Microsoft.EventGrid/domains` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy - Configure Azure Event Grid domains with private endpoints](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Domains_PrivateEndpoint_DeployIfNotExists.json)  
  Private endpoints lets you connect your virtual network to Azure services without a public IP address at the source or destination. By mapping private endpoints to your resources, they'll be protected against data leakage risks. Learn more at: https://aka.ms/privateendpoints. 
  * Resource Types 
    * `Microsoft.EventGrid/domains` 
* [Azure Event Grid domains should disable public network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Domains_PublicNetworkAccess_AuditDeny.json)  
  Disabling public network access improves security by ensuring that the resource isn't exposed on the public internet. You can limit exposure of your resources by creating private endpoints instead. Learn more at: https://aka.ms/privateendpoints. 
  * Resource Types 
    * `Microsoft.EventGrid/domains` 
* [Modify - Configure Azure Event Grid domains to disable public network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Domains_PublicNetworkAccess_Modify.json)  
  Disable public network access for Azure Event Grid resource so that it isn't accessible over the public internet. This will help protect them against data leakage risks. You can limit exposure of the your resources by creating private endpoints instead. Learn more at: https://aka.ms/privateendpoints. 
  * Resource Types 
    * `Microsoft.EventGrid/domains` 
* [Deploy - Configure Azure Event Grid topics to use private DNS zones](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Topics_PrivateDNSZone_DeployIfNotExists.json)  
  Use private DNS zones to override the DNS resolution for a private endpoint. Learn more at: https://aka.ms/privatednszone. 
  * Resource Types 
    * `Microsoft.Network/privateEndpoints` 
* [Azure Event Grid topics should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Topics_PrivateEndpoint_Audit.json)  
  Azure Private Link lets you connect your virtual network to Azure services without a public IP address at the source or destination. The Private Link platform handles the connectivity between the consumer and services over the Azure backbone network. By mapping private endpoints to your Event Grid topic instead of the entire service, you'll also be protected against data leakage risks. Learn more at: https://aka.ms/privateendpoints. 
  * Resource Types 
    * `Microsoft.EventGrid/topics` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy - Configure Azure Event Grid topics with private endpoints](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Topics_PrivateEndpoint_DeployIfNotExists.json)  
  Private endpoints lets you connect your virtual network to Azure services without a public IP address at the source or destination. By mapping private endpoints to your resources, they'll be protected against data leakage risks. Learn more at: https://aka.ms/privateendpoints. 
  * Resource Types 
    * `Microsoft.EventGrid/topics` 
* [Azure Event Grid topics should disable public network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Topics_PublicNetworkAccess_AuditDeny.json)  
  Disabling public network access improves security by ensuring that the resource isn't exposed on the public internet. You can limit exposure of your resources by creating private endpoints instead. Learn more at: https://aka.ms/privateendpoints. 
  * Resource Types 
    * `Microsoft.EventGrid/topics` 
* [Modify - Configure Azure Event Grid topics to disable public network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Topics_PublicNetworkAccess_Modify.json)  
  Disable public network access for Azure Event Grid resource so that it isn't accessible over the public internet. This will help protect them against data leakage risks. You can limit exposure of the your resources by creating private endpoints instead. Learn more at: https://aka.ms/privateendpoints. 
  * Resource Types 
    * `Microsoft.EventGrid/topics` 
