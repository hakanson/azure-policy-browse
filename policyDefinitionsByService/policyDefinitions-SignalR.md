# Azure Policy Definitions - SignalR

* [Azure SignalR Service should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SignalR/SignalR_PrivateEndpointEnabled_Audit.json)  
  Azure Private Link lets you connect your virtual network to Azure services without a public IP address at the source or destination. The private link platform handles the connectivity between the consumer and services over the Azure backbone network. By mapping private endpoints to your  SignalR resources instead of the entire service, you'll also be protected against data leakage risks .Learn more at: https://aka.ms/asrs/privatelink. 
  * Resource Types 
    * `Microsoft.SignalRService/SignalR` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
