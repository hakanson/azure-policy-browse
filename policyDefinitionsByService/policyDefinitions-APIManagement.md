# Azure Policy Definitions - API Management

* [API Management services should use a virtual network](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/API%20Management/ApiManagement_VNETEnabled_Audit.json)  
  Azure Virtual Network deployment provides enhanced security, isolation and allows you to place your API Management service in a non-internet routable network that you control access to. These networks can then be connected to your on-premises networks using various VPN technologies, which enables access to your backend services within the network and/or on-premises. The developer portal and API gateway, can be configured to be accessible either from the Internet or only within the virtual network. 
  * Resource Types 
    * `Microsoft.ApiManagement/service` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
