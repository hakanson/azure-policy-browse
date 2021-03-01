# Azure Policy Definitions - Cache

* [Only secure connections to your Azure Cache for Redis should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cache/RedisCache_AuditSSLPort_Audit.json)  
  Audit enabling of only connections via SSL to Azure Cache for Redis. Use of secure connections ensures authentication between the server and the service and protects data in transit from network layer attacks such as man-in-the-middle, eavesdropping, and session-hijacking 
  * Resource Types 
    * `Microsoft.Cache/redis` 
  * Policy Set Definitions (18)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Cache for Redis should reside within a virtual network](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cache/RedisCache_CacheInVnet_Audit.json)  
  Azure Virtual Network deployment provides enhanced security and isolation for your Azure Cache for Redis, as well as subnets, access control policies, and other features to further restrict access.When an Azure Cache for Redis instance is configured with a virtual network, it is not publicly addressable and can only be accessed from virtual machines and applications within the virtual network. 
  * Resource Types 
    * `Microsoft.Cache/redis` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
