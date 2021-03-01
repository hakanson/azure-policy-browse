# Azure Policy Definitions - App Platform

* [Audit Azure Spring Cloud instances where distributed tracing is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Platform/Spring_DistributedTracing_Audit.json)  
  Distributed tracing tools in Azure Spring Cloud allow debugging and monitoring the complex interconnections between microservices in an application. Distributed tracing tools should be enabled and in a healthy state. 
  * Resource Types 
    * `Microsoft.AppPlatform/Spring` 
* [Azure Spring Cloud should use network injection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Platform/Spring_VNETEnabled_Audit.json)  
  Azure Spring Cloud instances should use virtual network injection for the following purposes: 1. Isolate Azure Spring Cloud from Internet. 2. Enable Azure Spring Cloud to interact with systems in either on premises data centers or Azure service in other virtual networks. 3. Empower customers to control inbound and outbound network communications for Azure Spring Cloud. 
  * Resource Types 
    * `Microsoft.AppPlatform/Spring` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
