# Azure Policy Definitions - VM Image Builder

* [VM Image Builder templates should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/VM%20Image%20Builder/PrivateLinkEnabled_Audit.json)  
  Audit VM Image Builder templates that do not have a virtual network configured. When a virtual network is not configured, a public IP is created and used instead which may directly expose resources to the internet and increase the potential attack surface. 
  * Resource Types 
    * `Microsoft.VirtualMachineImages/imageTemplates` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
