
# Azure Policy Definitions

A list of Azure Policy Definitions, grouped by category with the list of applicable Resource Types and
links to each of the Azure Policy Set Definitions in which this is included.

## Table of Contents
* [API Management](#api-management) 
* [API for FHIR](#api-for-fhir) 
* [App Configuration](#app-configuration) 
* [App Platform](#app-platform) 
* [App Service](#app-service) 
* [Attestation](#attestation) 
* [Automanage](#automanage) 
* [Automation](#automation) 
* [Azure Data Explorer](#azure-data-explorer) 
* [Azure Government](#azure-government) 
* [Azure Stack Edge](#azure-stack-edge) 
* [Backup](#backup) 
* [Batch](#batch) 
* [Bot Service](#bot-service) 
* [Cache](#cache) 
* [Cognitive Services](#cognitive-services) 
* [Compute](#compute) 
* [Container Registry](#container-registry) 
* [Cosmos DB](#cosmos-db) 
* [Custom Provider](#custom-provider) 
* [Data Box](#data-box) 
* [Data Factory](#data-factory) 
* [Data Lake](#data-lake) 
* [Event Grid](#event-grid) 
* [Event Hub](#event-hub) 
* [General](#general) 
* [Guest Configuration](#guest-configuration) 
* [HDInsight](#hdinsight) 
* [Internet of Things](#internet-of-things) 
* [Key Vault](#key-vault) 
* [Kubernetes](#kubernetes) 
* [Kubernetes service](#kubernetes-service) 
* [Lighthouse](#lighthouse) 
* [Logic Apps](#logic-apps) 
* [Machine Learning](#machine-learning) 
* [Managed Application](#managed-application) 
* [Monitoring](#monitoring) 
* [Network](#network) 
* [Portal](#portal) 
* [Regulatory Compliance](#regulatory-compliance) 
* [SQL](#sql) 
* [Search](#search) 
* [Security Center](#security-center) 
* [Service Bus](#service-bus) 
* [Service Fabric](#service-fabric) 
* [SignalR](#signalr) 
* [Storage](#storage) 
* [Stream Analytics](#stream-analytics) 
* [Synapse](#synapse) 
* [Tags](#tags) 
* [VM Image Builder](#vm-image-builder) 

---

### API Management
[(details)](policyDefinitionsByService/policyDefinitions-APIManagement.md)

* [API Management services should use a virtual network](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/API%20Management/ApiManagement_VNETEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.ApiManagement/service` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  

### API for FHIR
[(details)](policyDefinitionsByService/policyDefinitions-APIforFHIR.md)

* [Azure API for FHIR should use a customer-managed key to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/API%20for%20FHIR/HealthcareAPIs_EnableByok_Audit.json)  
  * Resource Types 
    * `Microsoft.HealthcareApis/services` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Azure API for FHIR should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/API%20for%20FHIR/HealthcareAPIs_PrivateLink_Audit.json)  
  * Resource Types 
    * `Microsoft.HealthcareApis/services` 
* [CORS should not allow every domain to access your API for FHIR](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/API%20for%20FHIR/HealthcareAPIs_RestrictCORSAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.HealthcareApis/services` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  

### App Configuration
[(details)](policyDefinitionsByService/policyDefinitions-AppConfiguration.md)

* [App Configuration should use a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Configuration/CustomerManagedKey_Audit.json)  
  * Resource Types 
    * `Microsoft.AppConfiguration/configurationStores` 
* [App Configuration should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Configuration/PrivateLink_Audit.json)  
  * Resource Types 
    * `Microsoft.AppConfiguration/configurationStores` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### App Platform
[(details)](policyDefinitionsByService/policyDefinitions-AppPlatform.md)

* [Audit Azure Spring Cloud instances where distributed tracing is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Platform/Spring_DistributedTracing_Audit.json)  
  * Resource Types 
    * `Microsoft.AppPlatform/Spring` 
* [Azure Spring Cloud should use network injection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Platform/Spring_VNETEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.AppPlatform/Spring` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### App Service
[(details)](policyDefinitionsByService/policyDefinitions-AppService.md)

* [API App should only be accessible over HTTPS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppServiceApiApp_AuditHTTP_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
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
* [Function App should only be accessible over HTTPS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppServiceFunctionApp_AuditHTTP_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
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
* [Web Application should only be accessible over HTTPS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppServiceWebapp_AuditHTTP_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (20)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
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
* [Ensure that Register with Azure Active Directory is enabled on API app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_ApiApp_Audit_AD_Enabled.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
* [Ensure API app has 'Client Certificates (Incoming client certificates)' set to 'On'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_ApiApp_Audit_ClientCert.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (3)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Ensure that 'HTTP Version' is the latest, if used to run the API app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_ApiApp_Audit_HTTP_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
* [Ensure that '.NET Framework' version is the latest, if used as a part of the API app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_ApiApp_Audit_NETFrameWork_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
* [Ensure that 'PHP version' is the latest, if used as a part of the API app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_ApiApp_Audit_PHP_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (8)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure that 'Java version' is the latest, if used as a part of the API app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_ApiApp_Audit_java_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (8)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure that 'Python version' is the latest, if used as a part of the API app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_ApiApp_Audit_python_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (8)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [FTPS only should be required in your API App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_AuditFTPS_ApiApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [FTPS only should be required in your Function App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_AuditFTPS_FunctionApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [FTPS should be required in your Web App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_AuditFTPS_WebApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Diagnostic logs in App Services should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_AuditLoggingMonitoring_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [[Deprecated]: Audit enabling of diagnostic logs in App Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_AuditLoggingMonitoring_Audit_Deprecated.json)  
  * Resource Types 
    * `Microsoft.Web/sites/config` 
* [Authentication should be enabled on your API app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_Authentication_ApiApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Authentication should be enabled on your web app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_Authentication_WebApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Authentication should be enabled on your Function app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_Authentication_functionapp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Remote debugging should be turned off for API Apps](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_DisableRemoteDebugging_ApiApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (16)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Remote debugging should be turned off for Function Apps](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_DisableRemoteDebugging_FunctionApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (16)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Remote debugging should be turned off for Web Applications](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_DisableRemoteDebugging_WebApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (16)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure that Register with Azure Active Directory is enabled on Function App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_FunctionApp_Audit_AD_Enabled.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
* [Function apps should have 'Client Certificates (Incoming client certificates)' enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_FunctionApp_Audit_ClientCert.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure that 'HTTP Version' is the latest, if used to run the Function app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_FunctionApp_Audit_HTTP_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
* [Ensure that '.NET Framework' version is the latest, if used as a part of the Function App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_FunctionApp_Audit_NETFrameWork_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
* [Ensure that 'PHP version' is the latest, if used as a part of the Function app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_FunctionApp_Audit_PHP_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
* [Ensure Function app is using the latest version of TLS encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_FunctionApp_Audit_Tls_Ver.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
* [Ensure that 'Java version' is the latest, if used as a part of the Function app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_FunctionApp_Audit_java_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (8)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure that 'Python version' is the latest, if used as a part of the Function app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_FunctionApp_Audit_python_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (8)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Latest TLS version should be used in your API App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_RequireLatestTls_ApiApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (11)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Latest TLS version should be used in your Function App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_RequireLatestTls_FunctionApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (11)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Latest TLS version should be used in your Web App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_RequireLatestTls_WebApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (11)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Resource logs in App Services should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_ResourceLoggingMonitoring_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
* [CORS should not allow every resource to access your API App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_RestrictCORSAccess_ApiApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [CORS should not allow every resource to access your Function Apps](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_RestrictCORSAccess_FuntionApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [CORS should not allow every resource to access your Web Applications](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_RestrictCORSAccess_WebApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (14)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Managed identity should be used in your API App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_UseManagedIdentity_ApiApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Managed identity should be used in your Function App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_UseManagedIdentity_FunctionApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Managed identity should be used in your Web App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_UseManagedIdentity_WebApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure that 'HTTP Version' is the latest, if used to run the Web app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_WebApp_Audit_HTTP_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
* [Ensure that 'Java version' is the latest, if used as a part of the Web app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_WebApp_Audit_java_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (8)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure that 'Python version' is the latest, if used as a part of the Web app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_WebApp_Audit_python_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (8)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure that Register with Azure Active Directory is enabled on WEB App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_Webapp_Audit_AD_Enabled.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
* [Ensure WEB app has 'Client Certificates (Incoming client certificates)' set to 'On'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_Webapp_Audit_ClientCert.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure that '.NET Framework' version is the latest, if used as a part of the Web app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_Webapp_Audit_NETFrameWork_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
* [Ensure that 'PHP version' is the latest, if used as a part of the WEB app](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_Webapp_Audit_PHP_Latest.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (8)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure WEB app is using the latest version of TLS encryption ](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/App%20Service/AppService_Webapp_Audit_Tls_Ver.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 

### Attestation
[(details)](policyDefinitionsByService/policyDefinitions-Attestation.md)

* [Azure Attestation providers should use private endpoints](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Attestation/Attestation_PrivateLink_AuditIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Attestation/attestationProviders` 

### Automanage
[(details)](policyDefinitionsByService/policyDefinitions-Automanage.md)

* [Enable Automanage - Azure virtual machine best practices](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Automanage/Automanage_Windows_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 

### Automation
[(details)](policyDefinitionsByService/policyDefinitions-Automation.md)

* [Azure Automation accounts should use customer-managed keys to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Automation/AutomationAccount_CMK_Audit.json)  
  * Resource Types 
    * `Microsoft.Automation/automationAccounts` 
* [Automation account variables should be encrypted](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Automation/Automation_AuditUnencryptedVars_Audit.json)  
  * Resource Types 
    * `Microsoft.Automation/automationAccounts/variables` 
  * Policy Set Definitions (8)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Azure Data Explorer
[(details)](policyDefinitionsByService/policyDefinitions-AzureDataExplorer.md)

* [Azure Data Explorer encryption at rest should use a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Azure%20Data%20Explorer/ADX_CMK.json)  
  * Resource Types 
    * `Microsoft.Kusto/Clusters` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Virtual network injection should be enabled for Azure Data Explorer](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Azure%20Data%20Explorer/ADX_VNET_configured.json)  
  * Resource Types 
    * `Microsoft.Kusto/Clusters` 
* [Disk encryption should be enabled on Azure Data Explorer](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Azure%20Data%20Explorer/ADX_disk_encrypted.json)  
  * Resource Types 
    * `Microsoft.Kusto/Clusters` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Double encryption should be enabled on Azure Data Explorer](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Azure%20Data%20Explorer/ADX_doubleEncryption.json)  
  * Resource Types 
    * `Microsoft.Kusto/Clusters` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  

### Azure Government
[(details)](policyDefinitionsByService/policyDefinitions-AzureGovernment.md)


### Azure Stack Edge
[(details)](policyDefinitionsByService/policyDefinitions-AzureStackEdge.md)

* [Azure Stack Edge devices should use double-encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Azure%20Stack%20Edge/AzureStackEdge_DoubleEncryption_Audit.json)  
  * Resource Types 
    * `Microsoft.DataBoxEdge/DataBoxEdgeDevices` 

### Backup
[(details)](policyDefinitionsByService/policyDefinitions-Backup.md)

* [Deploy Diagnostic Settings for Recovery Services Vault to Log Analytics workspace for resource specific categories.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/EnableRecoveryServiceVaultDiagnosticSetting_Backup_DeployIfNotExist.json)  
  * Resource Types 
    * `Microsoft.RecoveryServices/vaults` 
* [Configure backup on VMs without a given tag to a new recovery services vault with a default policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/VirtualMachineApplicationCentricBackup_Backup_Deploy_WithOutTag.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Configure backup on VMs with a given tag to a new recovery services vault with a default policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/VirtualMachineApplicationCentricBackup_Backup_Deploy_WithTag.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Configure backup on VMs without a given tag to an existing recovery services vault in the same location](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/VirtualMachineBackup_Backup_DeployIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Configure backup on VMs with a given tag to an existing recovery services vault in the same location](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/VirtualMachineWithTag_Backup_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Azure Backup should be enabled for Virtual Machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/VirtualMachines_EnableAzureBackup_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Batch
[(details)](policyDefinitionsByService/policyDefinitions-Batch.md)

* [Resource logs in Batch accounts should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Batch/Batch_AuditDiagnosticLog_Audit.json)  
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Metric alert rules should be configured on Batch accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Batch/Batch_AuditMetricAlerts_Audit.json)  
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 
  * Policy Set Definitions (1)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Azure Batch account should use customer-managed keys to encrypt data](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Batch/Batch_CustomerManagedKey_Audit.json)  
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 
* [Public network access should be disabled for Batch accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Batch/Batch_DisablePublicNetworkAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 

### Bot Service
[(details)](policyDefinitionsByService/policyDefinitions-BotService.md)

* [Bot Service should be encrypted with a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Bot%20Service/BotService_CMKEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.BotService/botServices` 
* [Bot Service endpoint should be a valid HTTPS URI](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Bot%20Service/BotService_ValidEndpoint_Audit.json)  
  * Resource Types 
    * `Microsoft.BotService/botServices` 

### Cache
[(details)](policyDefinitionsByService/policyDefinitions-Cache.md)

* [Only secure connections to your Azure Cache for Redis should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cache/RedisCache_AuditSSLPort_Audit.json)  
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
  * Resource Types 
    * `Microsoft.Cache/redis` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Cognitive Services
[(details)](policyDefinitionsByService/policyDefinitions-CognitiveServices.md)

* [Cognitive Services accounts should use customer owned storage or enable data encryption.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_BYOX_Audit.json)  
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Cognitive Services accounts should enable data encryption with a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_CustomerManagedKey_Audit.json)  
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Public network access should be disabled for Cognitive Services accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_DisablePublicNetworkAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Cognitive Services accounts should enable data encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_Encryption_Audit.json)  
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Cognitive Services accounts should restrict network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_NetworkAcls_Audit.json)  
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Cognitive Services accounts should use customer owned storage](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cognitive%20Services/CognitiveServices_UserOwnedStorage_Audit.json)  
  * Resource Types 
    * `Microsoft.CognitiveServices/accounts` 

### Compute
[(details)](policyDefinitionsByService/policyDefinitions-Compute.md)

* [Deploy - Configure disaster recovery on virtual machines by enabling replication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/AzureSiteRecovery-Replication-Policy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Virtual machines should be migrated to new Azure Resource Manager resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/ClassicCompute_Audit.json)  
  * Resource Types 
    * `Microsoft.ClassicCompute/virtualMachines` 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (8)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Audit virtual machines without disaster recovery configured](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/RecoveryServices_DisasterRecovery_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (11)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Resource logs in Virtual Machine Scale Sets should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/ServiceFabric_and_VMSS_AuditVMSSDiagnostics.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Unattached disks should be encrypted](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/UnattachedDisk_Encryption_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/disks` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Deploy default Microsoft IaaSAntimalware extension for Windows Server](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VMAntimalwareExtension_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Deploy default Log Analytics Agent for Ubuntu VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VMOMSExtensionUbuntu_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Audit VMs that do not use managed disks](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VMRequireManagedDisk_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.Compute/VirtualMachineScaleSets` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Require automatic OS image patching on Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VMSSOSUpgradeHealthCheck_Deny.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
* [Allowed virtual machine size SKUs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VMSkusAllowed_Deny.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Microsoft Antimalware for Azure should be configured to automatically update protection signatures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VirtualMachines_AntiMalwareAutoUpdate_AuditIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Only approved VM extensions should be installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VirtualMachines_ApprovedExtensions_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines/extensions` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Microsoft IaaSAntimalware extension should be deployed on Windows servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/WindowsServers_AntiMalware_AuditIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  

### Container Registry
[(details)](policyDefinitionsByService/policyDefinitions-ContainerRegistry.md)

* [Container registries should be encrypted with a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Container%20Registry/ACR_CMKEncryptionEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.ContainerRegistry/registries` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Container registries should not allow unrestricted network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Container%20Registry/ACR_NetworkRulesExist_Audit.json)  
  * Resource Types 
    * `Microsoft.ContainerRegistry/registries` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Container registries should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Container%20Registry/ACR_PrivateEndpointEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.ContainerRegistry/registries` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Cosmos DB
[(details)](policyDefinitionsByService/policyDefinitions-CosmosDB.md)

* [Deploy Advanced Threat Protection for Cosmos DB Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/CosmosDbAdvancedThreatProtection_Deploy.json)  
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Azure Cosmos DB accounts should use customer-managed keys to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/Cosmos_CMK_Deny.json)  
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Cosmos DB key based metadata write access should be disabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/Cosmos_DisableMetadata_Append.json)  
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
  * Policy Set Definitions (1)  
    * [Enable Azure Cosmos DB throughput policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Cosmos%20DB/Cosmos_Throughput.json)  
* [Azure Cosmos DB allowed locations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/Cosmos_Locations_Deny.json)  
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
* [Azure Cosmos DB throughput should be limited](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/Cosmos_MaxThroughput_Deny.json)  
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts/*/throughputSettings` 
    * `Microsoft.DocumentDB/databaseAccounts/sqlDatabases` 
    * `Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers` 
    * `Microsoft.DocumentDB/databaseAccounts/mongodbDatabases` 
    * `Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections` 
    * `Microsoft.DocumentDB/databaseAccounts/gremlinDatabases` 
    * `Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs` 
    * `Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces` 
    * `Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables` 
    * `Microsoft.DocumentDB/databaseAccounts/tables` 
  * Policy Set Definitions (1)  
    * [Enable Azure Cosmos DB throughput policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Cosmos%20DB/Cosmos_Throughput.json)  
* [Azure Cosmos DB accounts should have firewall rules](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Cosmos%20DB/Cosmos_NetworkRulesExist_Audit.json)  
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  

### Custom Provider
[(details)](policyDefinitionsByService/policyDefinitions-CustomProvider.md)

* [Deploy associations for a custom provider](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Custom%20Provider/AssociationForCustomProvider_Deploy.json)  

### Data Box
[(details)](policyDefinitionsByService/policyDefinitions-DataBox.md)

* [Azure Data Box jobs should use a customer-managed key to encrypt the device unlock password](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Box/DataBox_CMK_Audit.json)  
  * Resource Types 
    * `Microsoft.DataBox/jobs` 
* [Azure Data Box jobs should enable double encryption for data at rest on the device](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Box/DataBox_DoubleEncryption_Audit.json)  
  * Resource Types 
    * `Microsoft.DataBox/jobs` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  

### Data Factory
[(details)](policyDefinitionsByService/policyDefinitions-DataFactory.md)

* [Azure data factories should be encrypted with a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/DataFactory_CustomerManagedKey_Audit.json)  
  * Resource Types 
    * `Microsoft.DataFactory/factories` 
* [Public network access on Azure Data Factory should be disabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/DataFactory_PublicNetworkAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.DataFactory/factories` 
* [Azure Data Factory should use a Git repository for source control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/Factory_None_GIT_Audit.json)  
  * Resource Types 
    * `Microsoft.DataFactory/factories` 
* [Azure Data Factory integration runtime should have a limit for number of cores](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/IR_Core_Count_Exceeds_Audit.json)  
  * Resource Types 
    * `Microsoft.DataFactory/factories/integrationRuntimes` 
* [Azure Data Factory linked services should use system-assigned managed identity authentication when it is supported](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/LinkedService_All_Auth_Audit_except_MSI.json)  
  * Resource Types 
    * `Microsoft.DataFactory/factories/linkedservices` 
* [Azure Data Factory linked services should use Key Vault for storing secrets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/LinkedService_InlineSecrets_Audit.json)  
  * Resource Types 
    * `Microsoft.DataFactory/factories/linkedservices` 
* [Azure Data Factory linked service resource type should be in allow list](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Factory/LinkedService_ResourceType_Audit.json)  
  * Resource Types 
    * `Microsoft.DataFactory/factories/linkedservices` 

### Data Lake
[(details)](policyDefinitionsByService/policyDefinitions-DataLake.md)

* [Resource logs in Data Lake Analytics should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Lake/DataLakeAnalytics_AuditDiagnosticLog_Audit.json)  
  * Resource Types 
    * `Microsoft.DataLakeAnalytics/accounts` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Require encryption on Data Lake Store accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Lake/DataLakeStoreEncryption_Deny.json)  
  * Resource Types 
    * `Microsoft.DataLakeStore/accounts` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Resource logs in Azure Data Lake Store should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Lake/DataLakeStore_AuditDiagnosticLog_Audit.json)  
  * Resource Types 
    * `Microsoft.DataLakeStore/accounts` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Event Grid
[(details)](policyDefinitionsByService/policyDefinitions-EventGrid.md)

* [Deploy - Configure Azure Event Grid domains to use private DNS zones](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Domains_PrivateDNSZone_DeployIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Network/privateEndpoints` 
* [Azure Event Grid domains should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Domains_PrivateEndpoint_Audit.json)  
  * Resource Types 
    * `Microsoft.EventGrid/domains` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy - Configure Azure Event Grid domains with private endpoints](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Domains_PrivateEndpoint_DeployIfNotExists.json)  
  * Resource Types 
    * `Microsoft.EventGrid/domains` 
* [Azure Event Grid domains should disable public network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Domains_PublicNetworkAccess_AuditDeny.json)  
  * Resource Types 
    * `Microsoft.EventGrid/domains` 
* [Modify - Configure Azure Event Grid domains to disable public network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Domains_PublicNetworkAccess_Modify.json)  
  * Resource Types 
    * `Microsoft.EventGrid/domains` 
* [Deploy - Configure Azure Event Grid topics to use private DNS zones](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Topics_PrivateDNSZone_DeployIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Network/privateEndpoints` 
* [Azure Event Grid topics should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Topics_PrivateEndpoint_Audit.json)  
  * Resource Types 
    * `Microsoft.EventGrid/topics` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy - Configure Azure Event Grid topics with private endpoints](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Topics_PrivateEndpoint_DeployIfNotExists.json)  
  * Resource Types 
    * `Microsoft.EventGrid/topics` 
* [Azure Event Grid topics should disable public network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Topics_PublicNetworkAccess_AuditDeny.json)  
  * Resource Types 
    * `Microsoft.EventGrid/topics` 
* [Modify - Configure Azure Event Grid topics to disable public network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Grid/Topics_PublicNetworkAccess_Modify.json)  
  * Resource Types 
    * `Microsoft.EventGrid/topics` 

### Event Hub
[(details)](policyDefinitionsByService/policyDefinitions-EventHub.md)

* [Resource logs in Event Hub should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Hub/EventHub_AuditDiagnosticLog_Audit.json)  
  * Resource Types 
    * `Microsoft.EventHub/namespaces` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Authorization rules on the Event Hub instance should be defined](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Hub/EventHub_AuditEventHubAccessRules_Audit.json)  
  * Resource Types 
    * `Microsoft.EventHub/namespaces/eventhubs` 
* [All authorization rules except RootManageSharedAccessKey should be removed from Event Hub namespace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Hub/EventHub_AuditNamespaceAccessRules_Audit.json)  
  * Resource Types 
    * `Microsoft.EventHub/namespaces/authorizationRules` 
* [Event Hub namespaces should use a customer-managed key for encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Hub/EventHub_CustomerManagedKeyEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.EventHub/namespaces` 

### General
[(details)](policyDefinitionsByService/policyDefinitions-General.md)

* [Allowed locations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/AllowedLocations_Deny.json)  
  * Policy Set Definitions (2)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Allowed resource types](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/AllowedResourceTypes_Deny.json)  
* [Allow resource creation only in Asia data centers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/AsiaRegionsOnly_Deny.json)  
* [Custom subscription owner roles should not exist](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/CustomSubscription_OwnerRole_Audit.json)  
  * Resource Types 
    * `Microsoft.Authorization/roleDefinitions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Allow resource creation only in European data centers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/EuropeanRegionsOnly_Deny.json)  
* [Allow resource creation only in India data centers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/IndiaRegionsOnly_Deny.json)  
* [Not allowed resource types](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/InvalidResourceTypes_Deny.json)  
* [Allowed locations for resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/ResourceGroupAllowedLocations_Deny.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (2)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Audit resource location matches resource group location](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/ResourcesInResourceGroupLocation_Audit.json)  
* [Audit usage of custom RBAC rules](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/Subscription_AuditCustomRBACRoles_Audit.json)  
  * Resource Types 
    * `Microsoft.Authorization/roleDefinitions` 
  * Policy Set Definitions (13)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Allow resource creation only in United States data centers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/General/USRegionsOnly_Deny.json)  

### Guest Configuration
[(details)](policyDefinitionsByService/policyDefinitions-GuestConfiguration.md)

* [Add system-assigned managed identity to enable Guest Configuration assignments on virtual machines with no identities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AddSystemIdentityWhenNone_Prerequisite.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (17)  
    * [Deploy prerequisites to enable Guest Configuration policies on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_Prerequisites.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Add system-assigned managed identity to enable Guest Configuration assignments on VMs with a user-assigned identity](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AddSystemIdentityWhenUser_Prerequisite.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (17)  
    * [Deploy prerequisites to enable Guest Configuration policies on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_Prerequisites.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Windows machines should meet requirements for 'Administrative Templates - Control Panel'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesControlPanel_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Administrative Templates - Control Panel'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesControlPanel_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Administrative Templates - Control Panel'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesControlPanel_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Administrative Templates - MSS (Legacy)'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesMSSLegacy_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Windows machines should meet requirements for 'Administrative Templates - Network'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesNetwork_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Show audit results from Windows VMs configurations in 'Administrative Templates - Network'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesNetwork_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Administrative Templates - Network'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesNetwork_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Administrative Templates - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesSystem_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Administrative Templates - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesSystem_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Administrative Templates - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesSystem_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Audit Windows machines that have the specified members in the Administrators group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToExclude_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (12)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Show audit results from Windows VMs if the Administrators group contains any of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToExclude_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group contains any of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToExclude.json)  
* [Deploy prerequisites to audit Windows VMs if the Administrators group contains any of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToExclude_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group contains any of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToExclude.json)  
* [Audit Windows machines missing any of specified members in the Administrators group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToInclude_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (12)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Show audit results from Windows VMs if the Administrators group doesn't contain all of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToInclude_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group does not contain all of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToInclude.json)  
* [Deploy prerequisites to audit Windows VMs if the Administrators group doesn't contain all the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToInclude_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group does not contain all of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToInclude.json)  
* [Audit Windows machines that have extra accounts in the Administrators group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembers_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Show audit results from Windows VMs if the Administrators group doesn't contain only specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembers_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group does not contain only the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembers.json)  
* [Deploy prerequisites to audit Windows VMs if the Administrators group doesn't contain only specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembers_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group does not contain only the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembers.json)  
* [Show audit results from Windows VMs configurations in 'Administrative Templates - MSS (Legacy)'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdminstrativeTemplatesMSSLegacy_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Administrative Templates - MSS (Legacy)'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdminstrativeTemplatesMSSLegacy_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Audit Linux virtual machines on which the Linux Guest Configuration extension is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AuditExtensionLinux_Prerequisite.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Audit Windows virtual machines on which the Windows Guest Configuration extension is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AuditExtensionWindows_Prerequisite.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Linux machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AzureLinuxBaseline_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Windows machines should meet requirements of the Azure Security Center baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AzureWindowsBaseline_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Audit Windows machines that contain certificates expiring within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_CertificateExpiration_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs that contain certificates expiring within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_CertificateExpiration_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that contain certificates expiring within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_CertificateExpiration.json)  
* [Deploy prerequisites to audit Windows VMs that contain certificates expiring within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_CertificateExpiration_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that contain certificates expiring within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_CertificateExpiration.json)  
* [Deploy the Linux Guest Configuration extension to enable Guest Configuration assignments on Linux VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_DeployExtensionLinux_Prerequisite.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (15)  
    * [Deploy prerequisites to enable Guest Configuration policies on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_Prerequisites.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Deploy the Windows Guest Configuration extension to enable Guest Configuration assignments on Windows VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_DeployExtensionWindows_Prerequisite.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (18)  
    * [Deploy prerequisites to enable Guest Configuration policies on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_Prerequisites.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Show audit results from Windows VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApp.json)  
* [Deploy prerequisites to audit Windows VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApp_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApp.json)  
* [Audit Linux machines that don't have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationForLinux_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Audit Windows machines that don't have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationForWindows_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Show audit results from Linux VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationLinux_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Linux VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationLinux.json)  
* [Deploy prerequisites to audit Linux VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationLinux_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Linux VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationLinux.json)  
* [Authentication to Linux machines should require SSH keys](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxNoPasswordForSSH_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Audit Linux machines that allow remote connections from accounts without passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword110_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (15)  
    * [Audit machines with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettingsAINE.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Show audit results from Linux VMs that allow remote connections from accounts without passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword110_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Linux VMs that allow remote connections from accounts without passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword110_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Linux machines that do not have the passwd file permissions set to 0644](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword121_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (13)  
    * [Audit machines with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettingsAINE.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Show audit results from Linux VMs that do not have the passwd file permissions set to 0644](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword121_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Linux VMs that do not have the passwd file permissions set to 0644](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword121_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Linux machines that have accounts without passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword232_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (14)  
    * [Audit machines with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettingsAINE.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Show audit results from Linux VMs that have accounts without passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword232_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Linux VMs that have accounts without passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword232_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that have not restarted within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_MachineLastBootUpTime_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs that have not restarted within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_MachineLastBootUpTime_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that have not restarted within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_MachineLastBootUpTime.json)  
* [Deploy prerequisites to audit Windows VMs that have not restarted within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_MachineLastBootUpTime_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that have not restarted within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_MachineLastBootUpTime.json)  
* [Show audit results from Windows VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApp_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApp.json)  
* [Deploy prerequisites to audit Windows VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApp_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApp.json)  
* [Audit Linux machines that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationForLinux_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Audit Windows machines that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationForWindows_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Linux VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationLinux_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Linux VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationLinux.json)  
* [Deploy prerequisites to audit Linux VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationLinux_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Linux VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationLinux.json)  
* [Deploy prerequisites to enable Guest Configuration Policy on Linux VMs.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_PrerequisitePolicyLinux_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Deploy prerequisites to enable Guest Configuration Policy on Windows VMs.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_PrerequisitePolicyWindows_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Windows web servers should be configured to use secure communication protocols](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecureWebProtocol_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (13)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Windows machines should meet requirements for 'Security Options - Accounts'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsAccounts_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Accounts'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsAccounts_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Accounts'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsAccounts_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Audit'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsAudit_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Audit'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsAudit_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Audit'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsAudit_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Devices'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsDevices_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Devices'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsDevices_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Devices'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsDevices_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Interactive Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsInteractiveLogon_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Interactive Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsInteractiveLogon_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Interactive Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsInteractiveLogon_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Microsoft Network Client'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkClient_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Microsoft Network Client'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkClient_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Microsoft Network Client'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkClient_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Microsoft Network Server'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkServer_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Microsoft Network Server'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkServer_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Microsoft Network Server'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkServer_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Network Access'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsNetworkAccess_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (5)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Network Access'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsNetworkAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Network Access'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsNetworkAccess_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Network Security'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsNetworkSecurity_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (4)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Network Security'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsNetworkSecurity_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Network Security'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsNetworkSecurity_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Recovery console'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsRecoveryconsole_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Recovery console'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsRecoveryconsole_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Recovery console'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsRecoveryconsole_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Shutdown'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsShutdown_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Shutdown'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsShutdown_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Shutdown'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsShutdown_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - System objects'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemobjects_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - System objects'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemobjects_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - System objects'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemobjects_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - System settings'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemsettings_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - System settings'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemsettings_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - System settings'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemsettings_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - User Account Control'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsUserAccountControl_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - User Account Control'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsUserAccountControl_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - User Account Control'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsUserAccountControl_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Settings - Account Policies'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecuritySettingsAccountPolicies_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Show audit results from Windows VMs configurations in 'Security Settings - Account Policies'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecuritySettingsAccountPolicies_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Settings - Account Policies'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecuritySettingsAccountPolicies_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Configure time zone on Windows machines.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SetWindowsTimeZone_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Windows machines should meet requirements for 'System Audit Policies - Account Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountLogon_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Account Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountLogon_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Account Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountLogon_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Account Management'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountManagement_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Account Management'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountManagement_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Account Management'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountManagement_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Detailed Tracking'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesDetailedTracking_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Detailed Tracking'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesDetailedTracking_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Detailed Tracking'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesDetailedTracking_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Logon-Logoff'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesLogonLogoff_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Logon-Logoff'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesLogonLogoff_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Logon-Logoff'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesLogonLogoff_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Object Access'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesObjectAccess_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Object Access'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesObjectAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Object Access'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesObjectAccess_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Policy Change'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPolicyChange_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Policy Change'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPolicyChange_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Policy Change'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPolicyChange_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Privilege Use'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPrivilegeUse_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Privilege Use'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPrivilegeUse_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Privilege Use'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPrivilegeUse_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesSystem_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesSystem_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesSystem_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'User Rights Assignment'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_UserRightsAssignment_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (4)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'User Rights Assignment'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_UserRightsAssignment_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'User Rights Assignment'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_UserRightsAssignment_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Audit Windows machines that do not contain the specified certificates in Trusted Root](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsCertificateInTrustedRoot_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs that do not contain the specified certificates in Trusted Root](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsCertificateInTrustedRoot_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not contain the specified certificates in Trusted Root](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsCertificateInTrustedRoot.json)  
* [Deploy prerequisites to audit Windows VMs that do not contain the specified certificates in Trusted Root](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsCertificateInTrustedRoot_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not contain the specified certificates in Trusted Root](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsCertificateInTrustedRoot.json)  
* [Windows machines should meet requirements for 'Windows Components'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsComponents_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Windows Components'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsComponents_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Windows Components'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsComponents_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows Defender Exploit Guard should be enabled on your machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDefenderExploitGuard_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Show audit results from Windows VMs on which Windows Defender Exploit Guard is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDefenderExploitGuard_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which Windows Defender Exploit Guard is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDefenderExploitGuard.json)  
* [Deploy prerequisites to audit Windows VMs on which Windows Defender Exploit Guard is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDefenderExploitGuard_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which Windows Defender Exploit Guard is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDefenderExploitGuard.json)  
* [Audit Windows machines that are not joined to the specified domain](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDomainMembership_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
* [Show audit results from Windows VMs that are not joined to the specified domain](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDomainMembership_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that are not joined to the specified domain](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDomainMembership.json)  
* [Deploy prerequisites to audit Windows VMs that are not joined to the specified domain](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDomainMembership_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that are not joined to the specified domain](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDomainMembership.json)  
* [Audit Windows machines on which the DSC configuration is not compliant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDscConfiguration_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs on which the DSC configuration is not compliant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDscConfiguration_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the DSC configuration is not compliant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDscConfiguration.json)  
* [Deploy prerequisites to audit Windows VMs on which the DSC configuration is not compliant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDscConfiguration_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the DSC configuration is not compliant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDscConfiguration.json)  
* [Windows machines should meet requirements for 'Windows Firewall Properties'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsFirewallProperties_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'Windows Firewall Properties'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsFirewallProperties_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Windows Firewall Properties'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsFirewallProperties_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Audit Windows machines on which the Log Analytics agent is not connected as expected](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsLogAnalyticsAgentConnection_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Show audit results from Windows VMs on which the Log Analytics agent is not connected as expected](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsLogAnalyticsAgentConnection_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the Log Analytics agent is not connected as expected](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsLogAnalyticsAgentConnection.json)  
* [Deploy prerequisites to audit Windows VMs on which the Log Analytics agent is not connected as expected](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsLogAnalyticsAgentConnection_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the Log Analytics agent is not connected as expected](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsLogAnalyticsAgentConnection.json)  
* [Audit Windows machines that do not have a maximum password age of 70 days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsMaximumPassword_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (11)  
    * [Audit machines with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettingsAINE.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Show audit results from Windows VMs that do not have a maximum password age of 70 days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsMaximumPassword_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that do not have a maximum password age of 70 days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsMaximumPassword_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that do not have a minimum password age of 1 day](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsMinimumPassword_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (10)  
    * [Audit machines with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettingsAINE.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Show audit results from Windows VMs that do not have a minimum password age of 1 day](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsMinimumPassword_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that do not have a minimum password age of 1 day](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsMinimumPassword_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that do not have the password complexity setting enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordComplexity_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (13)  
    * [Audit machines with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettingsAINE.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Show audit results from Windows VMs that do not have the password complexity setting enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordComplexity_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that do not have the password complexity setting enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordComplexity_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that do not store passwords using reversible encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordEncryption_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (10)  
    * [Audit machines with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettingsAINE.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
* [Show audit results from Windows VMs that do not store passwords using reversible encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordEncryption_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that do not store passwords using reversible encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordEncryption_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that allow re-use of the previous 24 passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordEnforce_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (13)  
    * [Audit machines with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettingsAINE.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Show audit results from Windows VMs that allow re-use of the previous 24 passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordEnforce_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that allow re-use of the previous 24 passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordEnforce_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that do not restrict the minimum password length to 14 characters](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordLength_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (14)  
    * [Audit machines with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettingsAINE.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Show audit results from Windows VMs that do not restrict the minimum password length to 14 characters](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordLength_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that do not restrict the minimum password length to 14 characters](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordLength_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows VMs with a pending reboot](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPendingReboot_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs with a pending reboot](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPendingReboot_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs with a pending reboot](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPendingReboot.json)  
* [Deploy prerequisites to audit Windows VMs with a pending reboot](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPendingReboot_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs with a pending reboot](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPendingReboot.json)  
* [Audit Windows machines that do not have the specified Windows PowerShell execution policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellExecutionPolicy_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs that do not have the specified Windows PowerShell execution policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellExecutionPolicy_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified Windows PowerShell execution policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellExecutionPolicy.json)  
* [Deploy prerequisites to audit Windows VMs that do not have the specified Windows PowerShell execution policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellExecutionPolicy_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified Windows PowerShell execution policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellExecutionPolicy.json)  
* [Audit Windows machines that do not have the specified Windows PowerShell modules installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellModules_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs that do not have the specified Windows PowerShell modules installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellModules_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified Windows PowerShell modules installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellModules.json)  
* [Deploy prerequisites to audit Windows VMs that do not have the specified Windows PowerShell modules installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellModules_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified Windows PowerShell modules installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellModules.json)  
* [Audit Windows machines network connectivity](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsRemoteConnection_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs on which the remote connection status does not match the specified one](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsRemoteConnection_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the remote host connection status does not match the specified one](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsRemoteConnection.json)  
* [Deploy prerequisites to audit Windows VMs on which the remote connection status does not match the specified one](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsRemoteConnection_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the remote host connection status does not match the specified one](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsRemoteConnection.json)  
* [Audit Windows machines on which Windows Serial Console is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsSerialConsole_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows Server VMs on which Windows Serial Console is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsSerialConsole_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows Server VMs on which Windows Serial Console is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsSerialConsole.json)  
* [Deploy prerequisites to audit Windows Server VMs on which Windows Serial Console is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsSerialConsole_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows Server VMs on which Windows Serial Console is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsSerialConsole.json)  
* [Audit Windows machines on which the specified services are not installed and 'Running'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsServiceStatus_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs on which the specified services are not installed and 'Running'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsServiceStatus_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the specified services are not installed and 'Running'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsServiceStatus.json)  
* [Deploy prerequisites to audit Windows VMs on which the specified services are not installed and 'Running'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsServiceStatus_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the specified services are not installed and 'Running'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsServiceStatus.json)  
* [Show audit results from Windows web servers that are not using secure communication protocols](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTLS_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows web servers that are not using secure communication protocols](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_TLS.json)  
* [Deploy prerequisites to audit Windows web servers that are not using secure communication protocols](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTLS_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows web servers that are not using secure communication protocols](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_TLS.json)  
* [Audit Windows machines that are not set to the specified time zone](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTimeZone_AINE.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs that are not set to the specified time zone](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTimeZone_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that are not set to the specified time zone](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTimeZone.json)  
* [Deploy prerequisites to audit Windows VMs that are not set to the specified time zone](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTimeZone_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that are not set to the specified time zone](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTimeZone.json)  

### HDInsight
[(details)](policyDefinitionsByService/policyDefinitions-HDInsight.md)

* [Azure HDInsight clusters should use customer-managed keys to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/HDInsight/HDInsight_CMK_Audit.json)  
  * Resource Types 
    * `Microsoft.HDInsight/clusters` 
* [Azure HDInsight clusters should use encryption at host to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/HDInsight/HDInsight_EncryptionAtHost_Audit.json)  
  * Resource Types 
    * `Microsoft.HDInsight/clusters` 
* [Azure HDInsight clusters should use encryption in transit to encrypt communication between Azure HDInsight cluster nodes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/HDInsight/HDInsight_EncryptionInTransit_Audit.json)  
  * Resource Types 
    * `Microsoft.HDInsight/clusters` 

### Internet of Things
[(details)](policyDefinitionsByService/policyDefinitions-InternetofThings.md)

* [Resource logs in IoT Hub should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Internet%20of%20Things/IoTHub_AuditDiagnosticLog_Audit.json)  
  * Resource Types 
    * `Microsoft.Devices/IotHubs` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Key Vault
[(details)](policyDefinitionsByService/policyDefinitions-KeyVault.md)

* [Firewall should be enabled on Key Vault](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/AzureKeyVaultFirewallEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Private endpoint should be configured for Key Vault](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/AzureKeyVaultPrivateEndpointEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Certificates should use allowed key types](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_AllowedKeyTypes.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates using elliptic curve cryptography should have allowed curve names](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_EC_AllowedCurveNames.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates should not expire within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_Expiry_ByDays.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates should be issued by the specified non-integrated certificate authority](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_Issuers_CustomCAs.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates should be issued by the specified integrated certificate authority](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_Issuers_SupportedCAs.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates should have the specified lifetime action triggers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_LifetimeAction.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates using RSA cryptography should have the specified minimum key size](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_RSA_MinimumKeySize.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Certificates should have the specified maximum validity period](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_ValidityPeriod.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Resource logs in Key Vault should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/KeyVault_AuditDiagnosticLog_Audit.json)  
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy Diagnostic Settings for Key Vault to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/KeyVault_DiagnosticLog_Deploy.json)  
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
* [Key vaults should have purge protection enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/KeyVault_Recoverable_Audit.json)  
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
  * Policy Set Definitions (7)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Key vaults should have soft delete enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/KeyVault_SoftDeleteMustBeEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Keys should not be active for longer than the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_ActivePeriod.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
* [Keys should be the specified cryptographic type RSA or EC](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_AllowedKeyTypes.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Keys using elliptic curve cryptography should have the specified curve names](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_EC_AllowedCurveNames.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Key Vault keys should have an expiration date](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_ExpirationSet.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Keys should have more than the specified number of days before expiration](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_Expiry_ByDays.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
* [Keys should be backed by a hardware security module (HSM)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_HSMBacked.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
* [Keys using RSA cryptography should have a specified minimum key size](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_RSA_MinimumKeySize.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Keys should have the specified maximum validity period](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_ValidityPeriod.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
* [Resource logs in Azure Key Vault Managed HSM should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/ManagedHsm_AuditDiagnosticLog_Audit.json)  
  * Resource Types 
    * `Microsoft.KeyVault/managedHsms` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Deploy - Configure diagnostic settings to an Event Hub to be enabled on Azure Key Vault Managed HSM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/ManagedHsm_DiagnosticLog_Deploy.json)  
  * Resource Types 
    * `Microsoft.KeyVault/managedHsms` 
* [Azure Key Vault Managed HSM should have purge protection enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/ManagedHsm_Recoverable_Audit.json)  
  * Resource Types 
    * `Microsoft.KeyVault/managedHsms` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Secrets should not be active for longer than the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Secrets_ActivePeriod.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/secrets` 
* [Secrets should have content type set](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Secrets_ContentTypeSet.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/secrets` 
* [Key Vault secrets should have an expiration date](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Secrets_ExpirationSet.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/secrets` 
  * Policy Set Definitions (3)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Secrets should have more than the specified number of days before expiration](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Secrets_Expiry_ByDays.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/secrets` 
* [Secrets should have the specified maximum validity period](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Secrets_ValidityPeriod.json)  
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/secrets` 

### Kubernetes
[(details)](policyDefinitionsByService/policyDefinitions-Kubernetes.md)

* [Azure Policy Add-on for Kubernetes service (AKS) should be installed and enabled on your clusters](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AKS_AzurePolicyAddOn_Audit.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy Azure Policy Add-on to Azure Kubernetes Service clusters](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AKS_AzurePolicyAddOn_Deploy.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Both operating systems and data disks in Azure Kubernetes Service clusters should be encrypted by customer-managed keys](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AKS_CMK_Deny.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Temp disks and cache for agent node pools in Azure Kubernetes Service clusters should be encrypted at host](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AKS_EncryptionAtHost_Deny.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster services should only use allowed external IPs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedExternalIPs.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster pod hostPath volumes should only use allowed host paths](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedHostPaths.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (3)  
    * [Kubernetes cluster pod security baseline standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPBaselineStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes cluster containers should only use allowed ProcMountType](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedProcMountType.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
* [Kubernetes cluster containers should only use allowed seccomp profiles](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedSeccompProfile.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (1)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
* [Kubernetes cluster pods and containers should only run with approved user and group IDs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedUsersGroups.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (3)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes cluster pods should only use allowed volume types](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedVolumeTypes.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (1)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
* [Kubernetes clusters should disable automounting API credentials](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/BlockAutomountToken.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes clusters should not use the default namespace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/BlockDefaultNamespace.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster containers should not share host process ID or host IPC namespace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/BlockHostNamespace.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (4)  
    * [Kubernetes cluster pod security baseline standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPBaselineStandard.json)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes cluster containers should only use allowed capabilities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerAllowedCapabilities.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (4)  
    * [Kubernetes cluster pod security baseline standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPBaselineStandard.json)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure only allowed container images in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerAllowedImages.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure containers listen only on allowed ports in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerAllowedPorts.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes clusters should not use specific security capabilities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerDisallowedCapabilities.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes clusters should not grant CAP_SYS_ADMIN security capabilities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerDisallowedSysAdminCapability.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Do not allow privileged containers in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerNoPrivilege.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (4)  
    * [Kubernetes cluster pod security baseline standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPBaselineStandard.json)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes clusters should not allow container privilege escalation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerNoPrivilegeEscalation.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (3)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure container CPU and memory resource limits do not exceed the specified limits in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerResourceLimits.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy GitOps to Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/Deploy-GitOps-to-Kubernetes-cluster_DINE.json)  
  * Resource Types 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster containers should only use allowed AppArmor profiles](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/EnforceAppArmorProfile.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes cluster pod FlexVolume volumes should only use allowed drivers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/FlexVolumeDrivers.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster containers should not use forbidden sysctl interfaces](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ForbiddenSysctlInterfaces.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
* [Kubernetes cluster pods should only use approved host network and port range](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/HostNetworkPorts.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (5)  
    * [Kubernetes cluster pod security baseline standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPBaselineStandard.json)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Enforce unique ingress hostnames across namespaces in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/IngressHostnamesConflict.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
* [Kubernetes clusters should be accessible only over HTTPS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/IngressHttpsOnly.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Enforce internal load balancers in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/LoadbalancerNoPublicIPs.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Enforce labels on pods in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/PodEnforceLabels.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster containers should run with a read only root file system](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ReadOnlyRootFileSystem.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes cluster pods and containers should only use allowed SELinux options](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/SELinux.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
* [Ensure services listen only on allowed ports in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ServiceAllowedPorts.json)  
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Kubernetes service
[(details)](policyDefinitionsByService/policyDefinitions-Kubernetesservice.md)

* [Ensure only allowed container images in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/ContainerAllowedImages_EnforceRegoPolicy.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Ensure containers listen only on allowed ports in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/ContainerAllowedPorts_EnforceRegoPolicy.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Do not allow privileged containers in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/ContainerNoPrivilege_EnforceRegoPolicy.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Ensure CPU and memory resource limits defined on containers in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/ContainerResourceLimits_EnforceRegoPolicy.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Enforce unique ingress hostnames across namespaces in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/IngressHostnamesConflict_EnforceRegoPolicy.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Enforce HTTPS ingress in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/IngressHttpsOnly_EnforceRegoPolicy.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Enforce internal load balancers in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/LoadbalancerNoPublicIPs_EnforceRegoPolicy.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Enforce labels on pods in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/PodEnforceLabels_EnforceRegoPolicy.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Ensure services listen only on allowed ports in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/ServiceAllowedPorts_EnforceRegoPolicy.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 

### Lighthouse
[(details)](policyDefinitionsByService/policyDefinitions-Lighthouse.md)

* [Allow managing tenant ids to onboard through Azure Lighthouse](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Lighthouse/AllowCertainManagingTenantIds_Deny.json)  
  * Resource Types 
    * `Microsoft.ManagedServices/registrationDefinitions` 
* [Audit delegation of scopes to a managing tenant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Lighthouse/Lighthouse_Delegations_Audit.json)  
  * Resource Types 
    * `Microsoft.ManagedServices/registrationAssignments` 

### Logic Apps
[(details)](policyDefinitionsByService/policyDefinitions-LogicApps.md)

* [Resource logs in Logic Apps should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Logic%20Apps/LogicApps_AuditDiagnosticLog_Audit.json)  
  * Resource Types 
    * `Microsoft.Logic/workflows` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Machine Learning
[(details)](policyDefinitionsByService/policyDefinitions-MachineLearning.md)

* [Configure allowed registries for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/AllowedACRs_EnforceSetting.json)  
* [Configure log filter expressions and datastore to be used for full logs for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/AllowedLogFilter_EnforceSetting.json)  
* [Configure allowed module authors for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/AllowedModuleAuthors_EnforceSetting.json)  
* [Configure allowed Python packages for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/AllowedPythonPackageChannels_EnforceSetting.json)  
* [Configure code signing for training code for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/AllowedSigningKey_EnforceSetting.json)  
* [Configure an approval endpoint called prior to jobs running for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/ApprovalEndpoint_EnforceSetting.json)  
* [Azure Machine Learning workspaces should be encrypted with a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/Workspace_CMKEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.MachineLearningServices/workspaces` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Machine Learning workspaces should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/Workspace_PrivateLinkEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.MachineLearningServices/workspaces` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Managed Application
[(details)](policyDefinitionsByService/policyDefinitions-ManagedApplication.md)

* [Application definition for Managed Application should use customer provided storage account](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Managed%20Application/ApplicationDefinition_Missing_StorageAccount_Deny.json)  
  * Resource Types 
    * `Microsoft.Solutions/applicationDefinitions` 
* [Deploy associations for a managed application](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Managed%20Application/AssociationForManagedApplication_Deploy.json)  

### Monitoring
[(details)](policyDefinitionsByService/policyDefinitions-Monitoring.md)

* [Network traffic data collection agent should be installed on Linux virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ASC_Dependency_Agent_Audit_Linux.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (3)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Network traffic data collection agent should be installed on Windows virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ASC_Dependency_Agent_Audit_Windows.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (3)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Activity log should be retained for at least one year](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLogRetention_365orGreater.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (3)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [An activity log alert should exist for specific Administrative operations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLog_AdministrativeOperations_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (18)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Azure Monitor log profile should collect logs for categories 'write,' 'delete,' and 'action'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLog_CaptureAllCategories.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Azure Monitor should collect activity logs from all regions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLog_CaptureAllRegions.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [An activity log alert should exist for specific Policy operations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLog_PolicyOperations_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [An activity log alert should exist for specific Security operations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLog_SecurityOperations_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Storage account containing the container with activity logs must be encrypted with BYOK](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLog_StorageAccountBYOK_Audit.json)  
  * Resource Types 
    * `Microsoft.Insights/logProfiles` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Azure Monitor Logs for Application Insights should be linked to a Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ApplicationInsightsComponent_WorkspaceAssociation_Deny.json)  
  * Resource Types 
    * `Microsoft.Insights/components` 
* [Log Analytics agent should be installed on your Linux Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Arc_Linux_LogAnalytics_Audit.json)  
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Log Analytics agent should be installed on your Windows Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Arc_Windows_LogAnalytics_Audit.json)  
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [[ASC Private Preview] Deploy - Configure system-assigned managed identity to enable Azure Monitor assignments on VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/AzureMonitoring_AddSystemIdentity_Prerequisite.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Deploy - Configure prerequisites to enable Azure Monitor and Azure Security agents on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitoring_Prerequisites.json)  
* [Deploy - Configure Linux Azure Monitor agent to enable Azure Monitor assignments on Linux virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/AzureMonitoring_DeployExtensionLinux_Prerequisite.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Deploy - Configure prerequisites to enable Azure Monitor and Azure Security agents on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitoring_Prerequisites.json)  
* [Deploy - Configure Windows Azure Monitor agent to enable Azure Monitor assignments on Windows virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/AzureMonitoring_DeployExtensionWindows_Prerequisite.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Deploy - Configure prerequisites to enable Azure Monitor and Azure Security agents on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitoring_Prerequisites.json)  
* [Deploy Diagnostic Settings for Batch Account to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Batch_DeployDiagnosticLog_Deploy_EventHub.json)  
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 
* [Deploy Diagnostic Settings for Batch Account to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Batch_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 
* [Deploy Diagnostic Settings for Data Lake Analytics to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DataLakeAnalytics_DeployDiagnosticLog_Deploy_EventHub.json)  
  * Resource Types 
    * `Microsoft.DataLakeAnalytics/accounts` 
* [Deploy Diagnostic Settings for Data Lake Analytics to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DataLakeAnalytics_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  * Resource Types 
    * `Microsoft.DataLakeAnalytics/accounts` 
* [Deploy Diagnostic Settings for Data Lake Storage Gen1 to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DataLakeStorage_DeployDiagnosticLog_Deploy_EventHub.json)  
  * Resource Types 
    * `Microsoft.DataLakeStore/accounts` 
* [Deploy Diagnostic Settings for Data Lake Storage Gen1 to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DataLakeStorage_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  * Resource Types 
    * `Microsoft.DataLakeStore/accounts` 
* [Deploy Dependency agent to hybrid Linux Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Linux_HybridVM_Deploy.json)  
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Dependency agent for Linux virtual machine scale sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Linux_VMSS_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VMSS.json)  
* [Deploy Dependency agent for Linux virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Linux_VM_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Dependency agent to Windows Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Windows_HybridVM_Deploy.json)  
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Dependency agent for Windows virtual machine scale sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Windows_VMSS_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (2)  
    * [Enable Azure Monitor for Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VMSS.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Deploy Dependency agent for Windows virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Windows_VM_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (2)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Audit Dependency agent deployment - VM Image (OS) unlisted](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgent_OSImage_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (2)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
* [Audit Dependency agent deployment in virtual machine scale sets - VM Image (OS) unlisted](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgent_OSImage_VMSS_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (3)  
    * [Enable Azure Monitor for Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VMSS.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
* [Deploy Diagnostic Settings for Network Security Groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DiagnosticSettingsForNSG_Deploy.json)  
  * Resource Types 
    * `Microsoft.Network/networkSecurityGroups` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Audit diagnostic setting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DiagnosticSettingsForTypes_Audit.json)  
  * Policy Set Definitions (16)  
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
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Deploy Diagnostic Settings for Event Hub to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/EventHub_DeployDiagnosticLog_Deploy_EventHub.json)  
  * Resource Types 
    * `Microsoft.EventHub/namespaces` 
* [Deploy Diagnostic Settings for Event Hub to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/EventHub_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  * Resource Types 
    * `Microsoft.EventHub/namespaces` 
* [Deploy Diagnostic Settings for Key Vault to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/KeyVault_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
* [Azure Monitor Logs clusters should be created with infrastructure-encryption enabled (double encryption)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsClusters_CMKDoubleEncryptionEnabled_Deny.json)  
  * Resource Types 
    * `Microsoft.OperationalInsights/clusters` 
* [Azure Monitor Logs clusters should be encrypted with customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsClusters_CMKEnabled_Deny.json)  
  * Resource Types 
    * `Microsoft.OperationalInsights/clusters` 
* [Deploy Log Analytics agent to Linux Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Linux_HybridVM_Deploy.json)  
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Log Analytics agent for Linux virtual machine scale sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Linux_VMSS_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VMSS.json)  
* [Deploy Log Analytics agent for Linux VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Linux_VM_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Log Analytics agent to Windows Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Windows_HybridVM_Deploy.json)  
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Log Analytics agent for Windows virtual machine scale sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Windows_VMSS_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VMSS.json)  
* [Deploy Log Analytics agent for Windows VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Windows_VM_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Saved-queries in Azure Monitor should be saved in customer storage account for logs encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsWorkspaces_CMKBYOSQueryEnabled_Deny.json)  
  * Resource Types 
    * `Microsoft.OperationalInsights/workspaces` 
* [[Preview]: Audit Log Analytics Agent Deployment - VM Image (OS) unlisted](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalytics_OSImage_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (12)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Audit Log Analytics agent deployment in virtual machine scale sets - VM Image (OS) unlisted](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalytics_OSImage_VMSS_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (12)  
    * [Enable Azure Monitor for Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VMSS.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Audit Log Analytics workspace for VM - Report Mismatch](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalytics_WorkspaceMismatch_VM_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines/extensions` 
  * Policy Set Definitions (10)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Deploy Diagnostic Settings for Logic Apps to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogicApps_DeployDiagnosticLog_Deploy_EventHub.json)  
  * Resource Types 
    * `Microsoft.Logic/workflows` 
* [Deploy Diagnostic Settings for Logic Apps to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogicApps_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  * Resource Types 
    * `Microsoft.Logic/workflows` 
* [Azure subscriptions should have a log profile for Activity Log](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Logprofile_activityLogs_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Deploy - Configure diagnostic settings to a Log Analytics workspace to be enabled on Azure Key Vault Managed HSM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ManagedHsm_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  * Resource Types 
    * `Microsoft.KeyVault/managedHsms` 
* [Deploy Diagnostic Settings for Search Services to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Search_DeployDiagnosticLog_Deploy_EventHub.json)  
  * Resource Types 
    * `Microsoft.Search/searchServices` 
* [Deploy Diagnostic Settings for Search Services to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Search_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  * Resource Types 
    * `Microsoft.Search/searchServices` 
* [Azure Monitor solution 'Security and Audit' must be deployed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Security_Audit_MustBeDeployed.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Deploy Diagnostic Settings for Service Bus to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ServiceBus_DeployDiagnosticLog_Deploy_EventHub.json)  
  * Resource Types 
    * `Microsoft.ServiceBus/namespaces` 
* [Deploy Diagnostic Settings for Service Bus to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ServiceBus_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  * Resource Types 
    * `Microsoft.ServiceBus/namespaces` 
* [Deploy Diagnostic Settings for Stream Analytics to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/StreamAnalytics_DeployDiagnosticLog_Deploy_EventHub.json)  
  * Resource Types 
    * `Microsoft.StreamAnalytics/streamingjobs` 
* [Deploy Diagnostic Settings for Stream Analytics to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/StreamAnalytics_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  * Resource Types 
    * `Microsoft.StreamAnalytics/streamingjobs` 
* [The Log Analytics agent should be installed on Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/VMSS_LogAnalyticsAgent_AuditIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [The Log Analytics agent should be installed on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/VirtualMachines_LogAnalyticsAgent_AuditIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Workbooks should be saved to storage accounts that you control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Workbooks_BYOSEnabled_Audit.json)  
  * Resource Types 
    * `microsoft.insights/workbooks` 

### Network
[(details)](policyDefinitionsByService/policyDefinitions-Network.md)

* [All Internet traffic should be routed via your deployed Azure Firewall](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/ASC_All_Internet_traffic_should_be_routed_via_Azure_Firewall.json)  
  * Resource Types 
    * `Microsoft.Network/virtualNetworks` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Virtual machines should be connected to an approved virtual network](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/ApprovedVirtualNetwork_Audit.json)  
  * Resource Types 
    * `Microsoft.Network/networkInterfaces` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Web Application Firewall should be enabled for Azure Front Door Service or Application Gateway](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/EnabledWAF_Deny.json)  
  * Resource Types 
    * `Microsoft.Network/frontdoors` 
    * `Microsoft.Network/applicationGateways` 
* [Web Application Firewall should be a set mode for Application Gateway and Azure Front Door Service](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/ModeWAF_Deny.json)  
  * Resource Types 
    * `Microsoft.Network/frontdoorwebapplicationfirewallpolicies` 
    * `Microsoft.Network/applicationGatewayWebApplicationFirewallPolicies` 
* [Network interfaces should disable IP forwarding](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkIPForwardingNic_Deny.json)  
  * Resource Types 
    * `Microsoft.Network/networkInterfaces` 
  * Policy Set Definitions (1)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Network interfaces should not have public IPs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkPublicIPNic_Deny.json)  
  * Resource Types 
    * `Microsoft.Network/networkInterfaces` 
* [Gateway subnets should not be configured with a network security group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkSecurityGroupOnGatewaySubnet_Deny.json)  
  * Resource Types 
    * `Microsoft.Network/virtualNetworks/subnets` 
  * Policy Set Definitions (1)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Flow log should be configured for every network security group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkSecurityGroup_FlowLog_Audit.json)  
  * Resource Types 
    * `Microsoft.Network/networkSecurityGroups` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Deploy a flow log resource with target network security group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkSecurityGroup_FlowLog_Deploy.json)  
  * Resource Types 
    * `Microsoft.Network/networkSecurityGroups` 
* [RDP access from the Internet should be blocked](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkSecurityGroup_RDPAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.Network/networkSecurityGroups/securityRules` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [SSH access from the Internet should be blocked](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkSecurityGroup_SSHAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.Network/networkSecurityGroups/securityRules` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Deploy network watcher when virtual networks are created](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkWatcher_Deploy.json)  
  * Resource Types 
    * `Microsoft.Network/virtualNetworks` 
  * Policy Set Definitions (1)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Network Watcher should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkWatcher_Enabled_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (8)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Azure VPN gateways should not use 'basic' SKU](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VPNGateways_BasicSKU_Audit.json)  
  * Resource Types 
    * `Microsoft.Network/virtualNetworkGateways` 
* [A custom IPsec/IKE policy must be applied to all Azure virtual network gateway connections](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VPNGateways_CustomIpSecPolicies_Audit.json)  
  * Resource Types 
    * `Microsoft.Network/connections` 
* [App Service should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_AppService_AuditIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Container Registry should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_ContainerRegistry_Audit.json)  
  * Resource Types 
    * `Microsoft.ContainerRegistry/registries` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Cosmos DB should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_CosmosDB_Audit.json)  
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Event Hub should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_EventHub_AuditIfNotExists.json)  
  * Resource Types 
    * `Microsoft.EventHub/namespaces` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Key Vault should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_KeyVault_Audit.json)  
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [SQL Server should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_SQLServer_AuditIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Service Bus should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_ServiceBus_AuditIfNotExists.json)  
  * Resource Types 
    * `Microsoft.ServiceBus/namespaces` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Storage Accounts should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_StorageAccount_Audit.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Virtual networks should use specified virtual network gateway](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetwork_ApprovedVirtualNetworkGateway_AuditIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Network/virtualNetworks` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Web Application Firewall (WAF) should be enabled for Azure Front Door Service service](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/WAF_AFD_Enabled_Audit.json)  
  * Resource Types 
    * `Microsoft.Network/frontdoors` 
  * Policy Set Definitions (4)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Web Application Firewall (WAF) should use the specified mode for Azure Front Door Service](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/WAF_AFD_Mode_Audit.json)  
  * Resource Types 
    * `Microsoft.Network/frontdoorwebapplicationfirewallpolicies` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Web Application Firewall (WAF) should be enabled for Application Gateway](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/WAF_AppGatewayEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.Network/applicationGateways` 
  * Policy Set Definitions (4)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Web Application Firewall (WAF) should use the specified mode for Application Gateway](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/WAF_AppGatewayMode_Audit.json)  
  * Resource Types 
    * `Microsoft.Network/applicationGatewayWebApplicationFirewallPolicies` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  

### Portal
[(details)](policyDefinitionsByService/policyDefinitions-Portal.md)

* [Shared dashboards should not have markdown tiles with inline content](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Portal/SharedDashboardInlineContent_Deny.json)  
  * Resource Types 
    * `Microsoft.Portal/dashboards` 

### Regulatory Compliance
[(details)](policyDefinitionsByService/policyDefinitions-RegulatoryCompliance.md)

* [Microsoft Managed Control 1000 - Access Control Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1000.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1001 - Access Control Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1001.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1002 - Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1002.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1003 - Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1003.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1004 - Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1004.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1005 - Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1005.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1006 - Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1006.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1007 - Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1007.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1008 - Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1008.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1009 - Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1009.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1010 - Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1010.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1011 - Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1011.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1012 - Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1012.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1013 - Account Management | Automated System Account Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1013.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1014 - Account Management | Removal Of Temporary / Emergency Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1014.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1015 - Account Management | Disable Inactive Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1015.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1016 - Account Management | Automated Audit Actions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1016.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1017 - Account Management | Inactivity Logout](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1017.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1018 - Account Management | Role-Based Schemes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1018.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1019 - Account Management | Role-Based Schemes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1019.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1020 - Account Management | Role-Based Schemes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1020.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1021 - Account Management | Restrictions On Use Of Shared / Group Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1021.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1022 - Account Management | Shared / Group Account Credential Termination](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1022.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1023 - Account Management | Usage Conditions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1023.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1024 - Account Management | Account Monitoring / Atypical Usage](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1024.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1025 - Account Management | Account Monitoring / Atypical Usage](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1025.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1026 - Account Management | Disable Accounts For High-Risk Individuals](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1026.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1027 - Access Enforcement](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1027.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1028 - Information Flow Enforcement](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1028.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1029 - Information Flow Enforcement | Security Policy Filters](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1029.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1030 - Information Flow Enforcement | Physical / Logical Separation Of Information Flows](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1030.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1031 - Separation Of Duties](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1031.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1032 - Separation Of Duties](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1032.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1033 - Separation Of Duties](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1033.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1034 - Least Privilege](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1034.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1035 - Least Privilege | Authorize Access To Security Functions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1035.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1036 - Least Privilege | Non-Privileged Access For Nonsecurity Functions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1036.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1037 - Least Privilege | Network Access To Privileged Commands](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1037.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1038 - Least Privilege | Privileged Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1038.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1039 - Least Privilege | Review Of User Privileges](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1039.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1040 - Least Privilege | Review Of User Privileges](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1040.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1041 - Least Privilege | Privilege Levels For Code Execution](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1041.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1042 - Least Privilege | Auditing Use Of Privileged Functions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1042.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1043 - Least Privilege | Prohibit Non-Privileged Users From Executing Privileged Functions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1043.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1044 - Unsuccessful Logon Attempts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1044.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1045 - Unsuccessful Logon Attempts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1045.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1046 - Automatic Account Lock | Purge / Wipe Mobile Device](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1046.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1047 - System Use Notification](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1047.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1048 - System Use Notification](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1048.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1049 - System Use Notification](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1049.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1050 - Concurrent Session Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1050.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1051 - Session Lock](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1051.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1052 - Session Lock](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1052.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1053 - Session Lock | Pattern-Hiding Displays](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1053.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1054 - Session Termination](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1054.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1055 - Session Termination| User-Initiated Logouts / Message Displays](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1055.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1056 - Session Termination | User-Initiated Logouts / Message Displays](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1056.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1057 - Permitted Actions Without Identification Or Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1057.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1058 - Permitted Actions Without Identification Or Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1058.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1059 - Remote Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1059.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1060 - Remote Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1060.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1061 - Remote Access | Automated Monitoring / Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1061.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1062 - Remote Access | Protection Of Confidentiality / Integrity Using Encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1062.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1063 - Remote Access | Managed Access Control Points](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1063.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1064 - Remote Access | Privileged Commands / Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1064.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1065 - Remote Access | Privileged Commands / Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1065.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1066 - Remote Access | Disconnect / Disable Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1066.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1067 - Wireless Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1067.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1068 - Wireless Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1068.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1069 - Wireless Access | Authentication And Encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1069.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1070 - Wireless Access | Disable Wireless Networking](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1070.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1071 - Wireless Access | Restrict Configurations By Users](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1071.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1072 - Wireless Access | Antennas / Transmission Power Levels](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1072.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1073 - Access Control For Mobile Devices](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1073.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1074 - Access Control For Mobile Devices](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1074.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1075 - Access Control For Mobile Devices | Full Device / Container-Based  Encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1075.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1076 - Use Of External Information Systems](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1076.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1077 - Use Of External Information Systems](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1077.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1078 - Use Of External Information Systems | Limits On Authorized Use](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1078.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1079 - Use Of External Information Systems | Limits On Authorized Use](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1079.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1080 - Use Of External Information Systems | Portable Storage Devices](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1080.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1081 - Information Sharing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1081.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1082 - Information Sharing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1082.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1083 - Publicly Accessible Content](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1083.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1084 - Publicly Accessible Content](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1084.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1085 - Publicly Accessible Content](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1085.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1086 - Publicly Accessible Content](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1086.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1087 - Security Awareness And Training Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1087.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1088 - Security Awareness And Training Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1088.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1089 - Security Awareness Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1089.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1090 - Security Awareness Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1090.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1091 - Security Awareness Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1091.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1092 - Security Awareness Training | Insider Threat](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1092.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1093 - Role-Based Security Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1093.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1094 - Role-Based Security Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1094.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1095 - Role-Based Security Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1095.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1096 - Role-Based Security Training | Practical Exercises](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1096.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1097 - Role-Based Security Training | Suspicious Communications And Anomalous System Behavior](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1097.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1098 - Security Training Records](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1098.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1099 - Security Training Records](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1099.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1100 - Audit And Accountability Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1100.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1101 - Audit And Accountability Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1101.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1102 - Audit Events](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1102.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1103 - Audit Events](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1103.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1104 - Audit Events](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1104.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1105 - Audit Events](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1105.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1106 - Audit Events | Reviews And Updates](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1106.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1107 - Content Of Audit Records](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1107.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1108 - Content Of Audit Records | Additional Audit Information](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1108.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1109 - Content Of Audit Records | Centralized Management Of Planned Audit Record Content](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1109.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1110 - Audit Storage Capacity](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1110.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1111 - Response To Audit Processing Failures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1111.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1112 - Response To Audit Processing Failures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1112.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1113 - Response To Audit Processing Failures | Audit Storage Capacity](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1113.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1114 - Response To Audit Processing Failures | Real-Time Alerts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1114.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1115 - Audit Review, Analysis, And Reporting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1115.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1116 - Audit Review, Analysis, And Reporting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1116.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1117 - Audit Review, Analysis, And Reporting | Process Integration](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1117.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1118 - Audit Review, Analysis, And Reporting | Correlate Audit Repositories](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1118.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1119 - Audit Review, Analysis, And Reporting | Central Review And Analysis](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1119.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1120 - Audit Review, Analysis, And Reporting | Integration / Scanning And Monitoring Capabilities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1120.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1121 - Audit Review, Analysis, And Reporting | Correlation With Physical Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1121.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1122 - Audit Review, Analysis, And Reporting | Permitted Actions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1122.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1123 - Audit Review, Analysis, And Reporting | Audit Level Adjustment](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1123.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1124 - Audit Reduction And Report Generation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1124.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1125 - Audit Reduction And Report Generation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1125.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1126 - Audit Reduction And Report Generation | Automatic Processing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1126.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1127 - Time Stamps](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1127.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1128 - Time Stamps](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1128.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1129 - Time Stamps | Synchronization With Authoritative Time Source](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1129.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1130 - Time Stamps | Synchronization With Authoritative Time Source](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1130.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1131 - Protection Of Audit Information](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1131.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1132 - Protection Of Audit Information | Audit Backup On Separate Physical Systems / Components](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1132.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1133 - Protection Of Audit Information | Cryptographic Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1133.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1134 - Protection Of Audit Information | Access By Subset Of Privileged Users](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1134.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1135 - Non-Repudiation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1135.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1136 - Audit Record Retention](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1136.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1137 - Audit Generation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1137.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1138 - Audit Generation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1138.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1139 - Audit Generation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1139.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1140 - Audit Generation | System-Wide / Time-Correlated Audit Trail](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1140.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1141 - Audit Generation | Changes By Authorized Individuals](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1141.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1142 - Security Assessment And Authorization Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1142.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1143 - Security Assessment And Authorization Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1143.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1144 - Security Assessments](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1144.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1145 - Security Assessments](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1145.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1146 - Security Assessments](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1146.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1147 - Security Assessments](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1147.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1148 - Security Assessments | Independent Assessors](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1148.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1149 - Security Assessments | Specialized Assessments](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1149.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1150 - Security Assessments | External Organizations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1150.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1151 - System Interconnections](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1151.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1152 - System Interconnections](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1152.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1153 - System Interconnections](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1153.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1154 - System Interconnections | Unclassified Non-National Security System Connections](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1154.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1155 - System Interconnections | Restrictions On External System Connections](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1155.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1156 - Plan Of Action And Milestones](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1156.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1157 - Plan Of Action And Milestones](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1157.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1158 - Security Authorization](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1158.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1159 - Security Authorization](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1159.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1160 - Security Authorization](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1160.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1161 - Continuous Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1161.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1162 - Continuous Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1162.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1163 - Continuous Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1163.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1164 - Continuous Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1164.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1165 - Continuous Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1165.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1166 - Continuous Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1166.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1167 - Continuous Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1167.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1168 - Continuous Monitoring | Independent Assessment](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1168.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1169 - Continuous Monitoring | Trend Analyses](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1169.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1170 - Penetration Testing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1170.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1171 - Penetration Testing | Independent Penetration Agent Or Team](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1171.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1172 - Internal System Connections](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1172.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1173 - Internal System Connections](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1173.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1174 - Configuration Management Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1174.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1175 - Configuration Management Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1175.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1176 - Baseline Configuration](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1176.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1177 - Baseline Configuration | Reviews And Updates](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1177.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1178 - Baseline Configuration | Reviews And Updates](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1178.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1179 - Baseline Configuration | Reviews And Updates](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1179.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1180 - Baseline Configuration | Automation Support For Accuracy / Currency](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1180.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1181 - Baseline Configuration | Retention Of Previous Configurations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1181.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1182 - Baseline Configuration | Configure Systems, Components, Or Devices For High-Risk Areas](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1182.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1183 - Baseline Configuration | Configure Systems, Components, Or Devices For High-Risk Areas](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1183.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1184 - Configuration Change Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1184.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1185 - Configuration Change Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1185.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1186 - Configuration Change Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1186.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1187 - Configuration Change Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1187.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1188 - Configuration Change Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1188.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1189 - Configuration Change Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1189.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1190 - Configuration Change Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1190.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1191 - Configuration Change Control | Automated Document / Notification / Prohibition Of Changes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1191.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1192 - Configuration Change Control | Automated Document / Notification / Prohibition Of Changes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1192.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1193 - Configuration Change Control | Automated Document / Notification / Prohibition Of Changes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1193.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1194 - Configuration Change Control | Automated Document / Notification / Prohibition Of Changes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1194.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1195 - Configuration Change Control | Automated Document / Notification / Prohibition Of Changes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1195.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1196 - Configuration Change Control | Automated Document / Notification / Prohibition Of Changes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1196.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1197 - Configuration Change Control | Test / Validate / Document Changes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1197.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1198 - Configuration Change Control | Security Representative](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1198.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1199 - Configuration Change Control | Cryptography Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1199.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1200 - Security Impact Analysis](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1200.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1201 - Security Impact Analysis | Separate Test Environments](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1201.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1202 - Access Restrictions For Change](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1202.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1203 - Access Restrictions For Change | Automated Access Enforcement / Auditing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1203.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1204 - Access Restrictions For Change | Review System Changes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1204.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1205 - Access Restrictions For Change | Signed Components](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1205.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1206 - Access Restrictions For Change | Limit Production / Operational Privileges](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1206.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1207 - Access Restrictions For Change | Limit Production / Operational Privileges](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1207.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1208 - Configuration Settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1208.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1209 - Configuration Settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1209.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1210 - Configuration Settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1210.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1211 - Configuration Settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1211.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1212 - Configuration Settings | Automated Central Management / Application / Verification](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1212.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1213 - Configuration Settings | Respond To Unauthorized Changes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1213.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1214 - Least Functionality](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1214.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1215 - Least Functionality](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1215.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1216 - Least Functionality | Periodic Review](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1216.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1217 - Least Functionality | Periodic Review](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1217.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1218 - Least Functionality | Prevent Program Execution](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1218.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1219 - Least Functionality | Authorized Software / Whitelisting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1219.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1220 - Least Functionality | Authorized Software / Whitelisting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1220.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1221 - Least Functionality | Authorized Software / Whitelisting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1221.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1222 - Information System Component Inventory](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1222.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1223 - Information System Component Inventory](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1223.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1224 - Information System Component Inventory | Updates During Installations / Removals](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1224.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1225 - Information System Component Inventory | Automated Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1225.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1226 - Information System Component Inventory | Automated Unauthorized Component Detection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1226.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1227 - Information System Component Inventory | Automated Unauthorized Component Detection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1227.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1228 - Information System Component Inventory | Accountability Information](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1228.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1229 - Information System Component Inventory | No Duplicate Accounting Of Components](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1229.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1230 - Configuration Management Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1230.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1231 - Configuration Management Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1231.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1232 - Configuration Management Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1232.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1233 - Configuration Management Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1233.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1234 - Software Usage Restrictions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1234.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1235 - Software Usage Restrictions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1235.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1236 - Software Usage Restrictions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1236.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1237 - Software Usage Restrictions | Open Source Software](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1237.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1238 - User-Installed Software](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1238.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1239 - User-Installed Software](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1239.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1240 - User-Installed Software](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1240.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1241 - User-Installed Software | Alerts For Unauthorized Installations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1241.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1242 - Contingency Planning Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1242.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1243 - Contingency Planning Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1243.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1244 - Contingency Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1244.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1245 - Contingency Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1245.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1246 - Contingency Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1246.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1247 - Contingency Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1247.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1248 - Contingency Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1248.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1249 - Contingency Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1249.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1250 - Contingency Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1250.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1251 - Contingency Plan | Coordinate With Related Plans](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1251.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1252 - Contingency Plan | Capacity Planning](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1252.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1253 - Contingency Plan | Resume Essential Missions / Business Functions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1253.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1254 - Contingency Plan | Resume All Missions / Business Functions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1254.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1255 - Contingency Plan | Continue  Essential Missions / Business Functions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1255.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1256 - Contingency Plan | Identify Critical Assets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1256.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1257 - Contingency Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1257.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1258 - Contingency Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1258.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1259 - Contingency Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1259.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1260 - Contingency Training | Simulated Events](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1260.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1261 - Contingency Plan Testing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1261.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1262 - Contingency Plan Testing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1262.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1263 - Contingency Plan Testing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1263.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1264 - Contingency Plan Testing | Coordinate With Related Plans](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1264.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1265 - Contingency Plan Testing | Alternate Processing Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1265.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1266 - Contingency Plan Testing | Alternate Processing Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1266.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1267 - Alternate Storage Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1267.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1268 - Alternate Storage Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1268.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1269 - Alternate Storage Site | Separation From Primary Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1269.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1270 - Alternate Storage Site | Recovery Time / Point Objectives](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1270.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1271 - Alternate Storage Site | Accessibility](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1271.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1272 - Alternate Processing Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1272.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1273 - Alternate Processing Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1273.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1274 - Alternate Processing Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1274.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1275 - Alternate Processing Site | Separation From Primary Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1275.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1276 - Alternate Processing Site | Accessibility](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1276.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1277 - Alternate Processing Site | Priority Of Service](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1277.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1278 - Alternate Processing Site | Preparation For Use](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1278.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1279 - Telecommunications Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1279.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1280 - Telecommunications Services | Priority Of Service Provisions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1280.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1281 - Telecommunications Services | Priority Of Service Provisions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1281.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1282 - Telecommunications Services | Single Points Of Failure](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1282.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1283 - Telecommunications Services | Separation Of Primary / Alternate Providers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1283.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1284 - Telecommunications Services | Provider Contingency Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1284.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1285 - Telecommunications Services | Provider Contingency Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1285.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1286 - Telecommunications Services | Provider Contingency Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1286.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1287 - Information System Backup](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1287.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1288 - Information System Backup](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1288.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1289 - Information System Backup](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1289.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1290 - Information System Backup](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1290.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1291 - Information System Backup | Testing For Reliability / Integrity](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1291.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1292 - Information System Backup | Test Restoration Using Sampling](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1292.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1293 - Information System Backup | Separate Storage For Critical Information](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1293.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1294 - Information System Backup | Transfer To Alternate Storage Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1294.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1295 - Information System Recovery And Reconstitution](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1295.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1296 - Information System Recovery And Reconstitution | Transaction Recovery](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1296.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1297 - Information System Recovery And Reconstitution | Restore Within Time Period](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1297.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1298 - Identification And Authentication Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1298.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1299 - Identification And Authentication Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1299.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1300 - Identification And Authentication (Organizational Users)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1300.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1301 - Identification And Authentication (Org. Users) | Network Access To Privileged Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1301.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1302 - Identification And Authentication (Org. Users) | Network Access To Non-Privileged Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1302.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1303 - Identification And Authentication (Org. Users) | Local Access To Privileged Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1303.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1304 - Identification And Authentication (Org. Users) | Local Access To Non-Privileged Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1304.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1305 - Identification And Authentication (Org. Users) | Group Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1305.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1306 - Identification And Authentication (Org. Users) | Net. Access To Priv. Accts. - Replay](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1306.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1307 - Identification And Authentication (Org. Users) | Net. Access To Non-Priv. Accts. - Replay](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1307.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1308 - Identification And Authentication (Org. Users) | Remote Access  - Separate Device](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1308.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1309 - Identification And Authentication (Org. Users) | Acceptance Of Piv Credentials](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1309.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1310 - Device Identification And Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1310.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1311 - Identifier Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1311.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1312 - Identifier Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1312.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1313 - Identifier Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1313.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1314 - Identifier Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1314.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1315 - Identifier Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1315.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1316 - Identifier Management | Identify User Status](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1316.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1317 - Authenticator Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1317.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1318 - Authenticator Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1318.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1319 - Authenticator Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1319.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1320 - Authenticator Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1320.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1321 - Authenticator Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1321.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1322 - Authenticator Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1322.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1323 - Authenticator Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1323.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1324 - Authenticator Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1324.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1325 - Authenticator Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1325.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1326 - Authenticator Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1326.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1327 - Authenticator Management | Password-Based Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1327.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1328 - Authenticator Management | Password-Based Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1328.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1329 - Authenticator Management | Password-Based Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1329.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1330 - Authenticator Management | Password-Based Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1330.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1331 - Authenticator Management | Password-Based Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1331.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1332 - Authenticator Management | Password-Based Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1332.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1333 - Authenticator Management | Pki-Based Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1333.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1334 - Authenticator Management | Pki-Based Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1334.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1335 - Authenticator Management | Pki-Based Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1335.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1336 - Authenticator Management | Pki-Based Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1336.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1337 - Authenticator Management | In-Person Or Trusted Third-Party Registration](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1337.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1338 - Authenticator Management | Automated Support  For Password Strength Determination](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1338.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1339 - Authenticator Management | Protection Of Authenticators](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1339.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1340 - Authenticator Management | No Embedded Unencrypted Static Authenticators](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1340.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1341 - Authenticator Management | Multiple Information System Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1341.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1342 - Authenticator Management | Hardware Token-Based Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1342.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1343 - Authenticator Management | Expiration Of Cached Authenticators](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1343.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1344 - Authenticator Feedback](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1344.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1345 - Cryptographic Module Authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1345.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1346 - Identification And Authentication (Non-Organizational Users)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1346.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1347 - Identification And Authentication (Non-Org. Users) | Acceptance Of PIV Creds. From Other Agys.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1347.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1348 - Identification And Authentication (Non-Org. Users) | Acceptance Of Third-Party Credentials](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1348.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1349 - Identification And Authentication (Non-Org. Users) | Use Of FICAM-Approved Products](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1349.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1350 - Identification And Authentication (Non-Org. Users) | Use Of FICAM-Issued Profiles](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1350.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1351 - Incident Response Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1351.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1352 - Incident Response Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1352.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1353 - Incident Response Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1353.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1354 - Incident Response Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1354.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1355 - Incident Response Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1355.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1356 - Incident Response Training | Simulated Events](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1356.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1357 - Incident Response Training | Automated Training Environments](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1357.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1358 - Incident Response Testing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1358.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1359 - Incident Response Testing | Coordination With Related Plans](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1359.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1360 - Incident Handling](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1360.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1361 - Incident Handling](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1361.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1362 - Incident Handling](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1362.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1363 - Incident Handling | Automated Incident Handling Processes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1363.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1364 - Incident Handling | Dynamic Reconfiguration](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1364.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1365 - Incident Handling | Continuity Of Operations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1365.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1366 - Incident Handling | Information Correlation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1366.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1367 - Incident Handling | Insider Threats - Specific Capabilities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1367.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1368 - Incident Handling | Correlation With External Organizations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1368.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1369 - Incident Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1369.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1370 - Incident Monitoring | Automated Tracking / Data Collection / Analysis](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1370.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1371 - Incident Reporting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1371.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1372 - Incident Reporting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1372.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1373 - Incident Reporting | Automated Reporting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1373.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1374 - Incident Response Assistance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1374.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1375 - Incident Response Assistance | Automation Support For Availability Of Information / Support](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1375.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1376 - Incident Response Assistance | Coordination With External Providers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1376.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1377 - Incident Response Assistance | Coordination With External Providers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1377.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1378 - Incident Response Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1378.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1379 - Incident Response Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1379.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1380 - Incident Response Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1380.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1381 - Incident Response Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1381.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1382 - Incident Response Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1382.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1383 - Incident Response Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1383.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1384 - Information Spillage Response](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1384.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1385 - Information Spillage Response](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1385.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1386 - Information Spillage Response](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1386.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1387 - Information Spillage Response](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1387.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1388 - Information Spillage Response](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1388.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1389 - Information Spillage Response](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1389.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1390 - Information Spillage Response | Responsible Personnel](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1390.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1391 - Information Spillage Response | Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1391.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1392 - Information Spillage Response | Post-Spill Operations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1392.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1393 - Information Spillage Response | Exposure To Unauthorized Personnel](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1393.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1394 - System Maintenance Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1394.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1395 - System Maintenance Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1395.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1396 - Controlled Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1396.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1397 - Controlled Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1397.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1398 - Controlled Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1398.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1399 - Controlled Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1399.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1400 - Controlled Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1400.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1401 - Controlled Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1401.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1402 - Controlled Maintenance | Automated Maintenance Activities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1402.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1403 - Controlled Maintenance | Automated Maintenance Activities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1403.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1404 - Maintenance Tools](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1404.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1405 - Maintenance Tools | Inspect Tools](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1405.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1406 - Maintenance Tools | Inspect Media](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1406.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1407 - Maintenance Tools | Prevent Unauthorized Removal](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1407.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1408 - Maintenance Tools | Prevent Unauthorized Removal](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1408.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1409 - Maintenance Tools | Prevent Unauthorized Removal](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1409.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1410 - Maintenance Tools | Prevent Unauthorized Removal](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1410.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1411 - Nonlocal Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1411.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1412 - Nonlocal Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1412.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1413 - Nonlocal Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1413.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1414 - Nonlocal Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1414.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1415 - Nonlocal Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1415.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1416 - Nonlocal Maintenance | Document Nonlocal Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1416.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1417 - Nonlocal Maintenance | Comparable Security / Sanitization](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1417.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1418 - Nonlocal Maintenance | Comparable Security / Sanitization](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1418.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1419 - Nonlocal Maintenance | Cryptographic Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1419.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1420 - Maintenance Personnel](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1420.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1421 - Maintenance Personnel](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1421.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1422 - Maintenance Personnel](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1422.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1423 - Maintenance Personnel | Individuals Without Appropriate Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1423.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1424 - Maintenance Personnel | Individuals Without Appropriate Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1424.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1425 - Timely Maintenance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1425.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1426 - Media Protection Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1426.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1427 - Media Protection Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1427.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1428 - Media Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1428.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1429 - Media Marking](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1429.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1430 - Media Marking](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1430.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1431 - Media Storage](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1431.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1432 - Media Storage](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1432.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1433 - Media Transport](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1433.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1434 - Media Transport](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1434.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1435 - Media Transport](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1435.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1436 - Media Transport](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1436.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1437 - Media Transport | Cryptographic Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1437.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1438 - Media Sanitization](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1438.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1439 - Media Sanitization](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1439.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1440 - Media Sanitization | Review / Approve / Track / Document / Verify](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1440.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1441 - Media Sanitization | Equipment Testing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1441.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1442 - Media Sanitization | Nondestructive Techniques](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1442.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1443 - Media Use](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1443.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1444 - Media Use | Prohibit Use Without Owner](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1444.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1445 - Physical And Environmental Protection Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1445.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1446 - Physical And Environmental Protection Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1446.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1447 - Physical Access Authorizations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1447.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1448 - Physical Access Authorizations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1448.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1449 - Physical Access Authorizations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1449.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1450 - Physical Access Authorizations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1450.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1451 - Physical Access Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1451.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1452 - Physical Access Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1452.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1453 - Physical Access Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1453.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1454 - Physical Access Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1454.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1455 - Physical Access Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1455.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1456 - Physical Access Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1456.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1457 - Physical Access Control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1457.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1458 - Physical Access Control | Information System Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1458.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1459 - Access Control For Transmission Medium](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1459.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1460 - Access Control For Output Devices](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1460.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1461 - Monitoring Physical Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1461.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1462 - Monitoring Physical Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1462.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1463 - Monitoring Physical Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1463.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1464 - Monitoring Physical Access | Intrusion Alarms / Surveillance Equipment](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1464.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1465 - Monitoring Physical Access | Monitoring Physical Access To Information Systems](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1465.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1466 - Visitor Access Records](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1466.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1467 - Visitor Access Records](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1467.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1468 - Visitor Access Records | Automated Records Maintenance / Review](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1468.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1469 - Power Equipment And Cabling](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1469.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1470 - Emergency Shutoff](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1470.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1471 - Emergency Shutoff](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1471.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1472 - Emergency Shutoff](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1472.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1473 - Emergency Power](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1473.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1474 - Emergency Power | Long-Term Alternate Power Supply - Minimal Operational Capability](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1474.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1475 - Emergency Lighting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1475.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1476 - Fire Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1476.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1477 - Fire Protection | Detection Devices / Systems](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1477.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1478 - Fire Protection | Suppression Devices / Systems](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1478.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1479 - Fire Protection | Automatic Fire Suppression](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1479.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1480 - Temperature And Humidity Controls](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1480.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1481 - Temperature And Humidity Controls](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1481.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1482 - Temperature And Humidity Controls | Monitoring With Alarms / Notifications](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1482.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1483 - Water Damage Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1483.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1484 - Water Damage Protection | Automation Support](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1484.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1485 - Delivery And Removal](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1485.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1486 - Alternate Work Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1486.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1487 - Alternate Work Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1487.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1488 - Alternate Work Site](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1488.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1489 - Location Of Information System Components](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1489.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1490 - Security Planning Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1490.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1491 - Security Planning Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1491.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1492 - System Security Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1492.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1493 - System Security Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1493.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1494 - System Security Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1494.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1495 - System Security Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1495.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1496 - System Security Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1496.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1497 - System Security Plan | Plan / Coordinate With Other Organizational Entities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1497.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1498 - Rules Of Behavior](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1498.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1499 - Rules Of Behavior](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1499.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1500 - Rules Of Behavior](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1500.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1501 - Rules Of Behavior](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1501.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1502 - Rules Of Behavior | Social Media And Networking Restrictions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1502.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1503 - Information Security Architecture](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1503.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1504 - Information Security Architecture](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1504.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1505 - Information Security Architecture](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1505.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1506 - Personnel Security Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1506.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1507 - Personnel Security Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1507.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1508 - Position Risk Designation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1508.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1509 - Position Risk Designation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1509.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1510 - Position Risk Designation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1510.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1511 - Personnel Screening](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1511.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1512 - Personnel Screening](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1512.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1513 - Personnel Screening | Information With Special Protection Measures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1513.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1514 - Personnel Screening | Information With Special Protection Measures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1514.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1515 - Personnel Termination](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1515.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1516 - Personnel Termination](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1516.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1517 - Personnel Termination](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1517.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1518 - Personnel Termination](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1518.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1519 - Personnel Termination](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1519.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1520 - Personnel Termination](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1520.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1521 - Personnel Termination | Automated Notification](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1521.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1522 - Personnel Transfer](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1522.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1523 - Personnel Transfer](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1523.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1524 - Personnel Transfer](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1524.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1525 - Personnel Transfer](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1525.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1526 - Access Agreements](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1526.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1527 - Access Agreements](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1527.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1528 - Access Agreements](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1528.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1529 - Third-Party Personnel Security](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1529.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1530 - Third-Party Personnel Security](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1530.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1531 - Third-Party Personnel Security](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1531.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1532 - Third-Party Personnel Security](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1532.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1533 - Third-Party Personnel Security](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1533.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1534 - Personnel Sanctions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1534.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1535 - Personnel Sanctions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1535.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1536 - Risk Assessment Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1536.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1537 - Risk Assessment Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1537.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1538 - Security Categorization](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1538.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1539 - Security Categorization](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1539.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1540 - Security Categorization](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1540.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1541 - Risk Assessment](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1541.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1542 - Risk Assessment](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1542.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1543 - Risk Assessment](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1543.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1544 - Risk Assessment](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1544.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1545 - Risk Assessment](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1545.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1546 - Vulnerability Scanning](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1546.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1547 - Vulnerability Scanning](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1547.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1548 - Vulnerability Scanning](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1548.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1549 - Vulnerability Scanning](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1549.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1550 - Vulnerability Scanning](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1550.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1551 - Vulnerability Scanning | Update Tool Capability](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1551.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1552 - Vulnerability Scanning | Update By Frequency / Prior To New Scan / When Identified](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1552.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1553 - Vulnerability Scanning | Breadth / Depth Of Coverage](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1553.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1554 - Vulnerability Scanning | Discoverable Information](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1554.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1555 - Vulnerability Scanning | Privileged Access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1555.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1556 - Vulnerability Scanning | Automated Trend Analyses](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1556.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1557 - Vulnerability Scanning | Review Historic Audit Logs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1557.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1558 - Vulnerability Scanning | Correlate Scanning Information](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1558.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1559 - System And Services Acquisition Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1559.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1560 - System And Services Acquisition Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1560.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1561 - Allocation Of Resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1561.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1562 - Allocation Of Resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1562.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1563 - Allocation Of Resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1563.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1564 - System Development Life Cycle](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1564.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1565 - System Development Life Cycle](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1565.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1566 - System Development Life Cycle](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1566.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1567 - System Development Life Cycle](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1567.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1568 - Acquisition Process](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1568.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1569 - Acquisition Process](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1569.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1570 - Acquisition Process](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1570.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1571 - Acquisition Process](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1571.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1572 - Acquisition Process](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1572.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1573 - Acquisition Process](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1573.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1574 - Acquisition Process](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1574.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1575 - Acquisition Process | Functional Properties Of Security Controls](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1575.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1576 - Acquisition Process | Design / Implementation Information For Security Controls](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1576.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1577 - Acquisition Process | Continuous Monitoring Plan](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1577.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1578 - Acquisition Process | Functions / Ports / Protocols / Services In Use](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1578.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1579 - Acquisition Process | Use Of Approved Piv Products](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1579.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1580 - Information System Documentation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1580.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1581 - Information System Documentation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1581.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1582 - Information System Documentation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1582.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1583 - Information System Documentation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1583.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1584 - Information System Documentation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1584.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1585 - Security Engineering Principles](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1585.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1586 - External Information System Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1586.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1587 - External Information System Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1587.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1588 - External Information System Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1588.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1589 - External Information System Services | Risk Assessments / Organizational Approvals](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1589.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1590 - External Information System Services | Risk Assessments / Organizational Approvals](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1590.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1591 - External Information System Services | Ident. Of Functions / Ports / Protocols / Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1591.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1592 - External Information System Services | Consistent Interests Of Consumers And Providers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1592.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1593 - External Information System Services | Processing, Storage, And Service Location](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1593.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1594 - Developer Configuration Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1594.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1595 - Developer Configuration Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1595.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1596 - Developer Configuration Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1596.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1597 - Developer Configuration Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1597.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1598 - Developer Configuration Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1598.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1599 - Developer Configuration Management | Software / Firmware Integrity Verification](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1599.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1600 - Developer Security Testing And Evaluation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1600.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1601 - Developer Security Testing And Evaluation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1601.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1602 - Developer Security Testing And Evaluation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1602.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1603 - Developer Security Testing And Evaluation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1603.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1604 - Developer Security Testing And Evaluation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1604.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1605 - Developer Security Testing And Evaluation | Static Code Analysis](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1605.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1606 - Developer Security Testing And Evaluation | Threat And Vulnerability Analyses](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1606.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1607 - Developer Security Testing And Evaluation | Dynamic Code Analysis](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1607.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1608 - Supply Chain Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1608.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1609 - Development Process, Standards, And Tools](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1609.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1610 - Development Process, Standards, And Tools](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1610.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1611 - Developer-Provided Training](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1611.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1612 - Developer Security Architecture And Design](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1612.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1613 - Developer Security Architecture And Design](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1613.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1614 - Developer Security Architecture And Design](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1614.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1615 - System And Communications Protection Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1615.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1616 - System And Communications Protection Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1616.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1617 - Application Partitioning](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1617.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1618 - Security Function Isolation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1618.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1619 - Information In Shared Resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1619.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1620 - Denial Of Service Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1620.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1621 - Resource Availability](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1621.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1622 - Boundary Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1622.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1623 - Boundary Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1623.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1624 - Boundary Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1624.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1625 - Boundary Protection | Access Points](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1625.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1626 - Boundary Protection | External Telecommunications Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1626.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1627 - Boundary Protection | External Telecommunications Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1627.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1628 - Boundary Protection | External Telecommunications Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1628.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1629 - Boundary Protection | External Telecommunications Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1629.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1630 - Boundary Protection | External Telecommunications Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1630.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1631 - Boundary Protection | Deny By Default / Allow By Exception](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1631.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1632 - Boundary Protection | Prevent Split Tunneling For Remote Devices](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1632.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1633 - Boundary Protection | Route Traffic To Authenticated Proxy Servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1633.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1634 - Boundary Protection | Prevent Unauthorized Exfiltration](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1634.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1635 - Boundary Protection | Host-Based Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1635.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1636 - Boundary Protection | Isolation Of Security Tools / Mechanisms / Support Components](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1636.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1637 - Boundary Protection | Fail Secure](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1637.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1638 - Boundary Protection | Dynamic Isolation / Segregation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1638.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1639 - Boundary Protection | Isolation Of Information System Components](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1639.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1640 - Transmission Confidentiality And Integrity](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1640.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1641 - Transmission Confidentiality And Integrity | Cryptographic Or Alternate Physical Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1641.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1642 - Network Disconnect](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1642.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1643 - Cryptographic Key Establishment And Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1643.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1644 - Cryptographic Key Establishment And Management | Availability](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1644.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1645 - Cryptographic Key Establishment And Management | Symmetric Keys](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1645.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1646 - Cryptographic Key Establishment And Management | Asymmetric Keys](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1646.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1647 - Cryptographic Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1647.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1648 - Collaborative Computing Devices](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1648.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1649 - Collaborative Computing Devices](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1649.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1650 - Public Key Infrastructure Certificates](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1650.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1651 - Mobile Code](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1651.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1652 - Mobile Code](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1652.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1653 - Mobile Code](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1653.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1654 - Voice Over Internet Protocol](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1654.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1655 - Voice Over Internet Protocol](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1655.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1656 - Secure Name / Address Resolution Service (Authoritative Source)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1656.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1657 - Secure Name / Address Resolution Service (Authoritative Source)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1657.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1658 - Secure Name / Address Resolution Service (Recursive Or Caching Resolver)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1658.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1659 - Architecture And Provisioning For Name / Address Resolution Service](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1659.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1660 - Session Authenticity](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1660.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1661 - Session Authenticity | Invalidate Session Identifiers At Logout](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1661.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1662 - Fail In Known State](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1662.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1663 - Protection Of Information At Rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1663.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1664 - Protection Of Information At Rest | Cryptographic Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1664.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1665 - Process Isolation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1665.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1666 - System And Information Integrity Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1666.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1667 - System And Information Integrity Policy And Procedures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1667.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1668 - Flaw Remediation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1668.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1669 - Flaw Remediation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1669.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1670 - Flaw Remediation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1670.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1671 - Flaw Remediation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1671.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1672 - Flaw Remediation | Central Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1672.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1673 - Flaw Remediation | Automated Flaw Remediation Status](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1673.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1674 - Flaw Remediation | Time To Remediate Flaws / Benchmarks For Corrective Actions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1674.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1675 - Flaw Remediation | Time To Remediate Flaws / Benchmarks For Corrective Actions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1675.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1676 - Malicious Code Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1676.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1677 - Malicious Code Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1677.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1678 - Malicious Code Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1678.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1679 - Malicious Code Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1679.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1680 - Malicious Code Protection | Central Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1680.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1681 - Malicious Code Protection | Automatic Updates](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1681.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1682 - Malicious Code Protection | Nonsignature-Based Detection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1682.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1683 - Information System Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1683.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1684 - Information System Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1684.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1685 - Information System Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1685.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1686 - Information System Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1686.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1687 - Information System Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1687.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1688 - Information System Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1688.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1689 - Information System Monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1689.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1690 - Information System Monitoring | System-Wide Intrusion Detection System](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1690.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1691 - Information System Monitoring | Automated Tools For Real-Time Analysis](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1691.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1692 - Information System Monitoring | Inbound And Outbound Communications Traffic](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1692.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1693 - Information System Monitoring | System-Generated Alerts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1693.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1694 - Information System Monitoring | Analyze Communications Traffic Anomalies](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1694.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1695 - Information System Monitoring | Wireless Intrusion Detection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1695.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1696 - Information System Monitoring | Correlate Monitoring Information](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1696.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1697 - Information System Monitoring | Analyze Traffic / Covert Exfiltration](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1697.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1698 - Information System Monitoring | Individuals Posing Greater Risk](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1698.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1699 - Information System Monitoring | Privileged Users](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1699.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1700 - Information System Monitoring | Unauthorized Network Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1700.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1701 - Information System Monitoring | Host-Based Devices](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1701.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1702 - Information System Monitoring | Indicators Of Compromise](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1702.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1703 - Security Alerts, Advisories, And Directives](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1703.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1704 - Security Alerts, Advisories, And Directives](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1704.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1705 - Security Alerts, Advisories, And Directives](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1705.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1706 - Security Alerts, Advisories, And Directives](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1706.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1707 - Security Alerts, Advisories, And Directives | Automated Alerts And Advisories](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1707.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1708 - Security Function Verification](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1708.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1709 - Security Function Verification](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1709.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1710 - Security Function Verification](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1710.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1711 - Security Function Verification](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1711.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1712 - Software, Firmware, And Information Integrity](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1712.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1713 - Software, Firmware, And Information Integrity | Integrity Checks](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1713.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1714 - Software, Firmware, And Information Integrity | Automated Notifications Of Integrity Violations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1714.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1715 - Software, Firmware, And Information Integrity | Automated Response To Integrity Violations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1715.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1716 - Software, Firmware, And Information Integrity | Integration Of Detection And Response](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1716.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1717 - Software, Firmware, And Information Integrity | Binary Or Machine Executable Code](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1717.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1718 - Software, Firmware, And Information Integrity | Binary Or Machine Executable Code](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1718.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1719 - Spam Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1719.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1720 - Spam Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1720.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1721 - Spam Protection | Central Management](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1721.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1722 - Spam Protection | Automatic Updates](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1722.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1723 - Information Input Validation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1723.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1724 - Error Handling](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1724.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1725 - Error Handling](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1725.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1726 - Information Handling And Retention](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1726.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
* [Microsoft Managed Control 1727 - Memory Protection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Regulatory%20Compliance/MicrosoftManagedControl1727.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
  * Policy Set Definitions (1)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  

### SQL
[(details)](policyDefinitionsByService/policyDefinitions-SQL.md)

* [Deploy - Configure diagnostic settings for Azure SQL Database server to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/DataConnectosSqServerLogs_PolicyAssignment.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Deploy - Configure diagnostic settings for SQL Databases to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/DataConnectosSqlLogs_PolicyAssignment.json)  
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
* [Deploy Threat Detection on SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/DeployTdOnSqlServers_Deploy.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (2)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [[Preview]: Enable Data Protection Suite](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/ASC_DataProtection.json)  
* [Geo-redundant backup should be enabled for Azure Database for MariaDB](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/GeoRedundant_DBForMariaDB_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMariaDB/servers` 
  * Policy Set Definitions (7)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Geo-redundant backup should be enabled for Azure Database for MySQL](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/GeoRedundant_DBForMySQL_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (7)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Geo-redundant backup should be enabled for Azure Database for PostgreSQL](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/GeoRedundant_DBForPostgreSQL_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (7)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Long-term geo-redundant backup should be enabled for Azure SQL Databases](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/GeoRedundant_SQLDatabase_AuditIfNotExists.json)  
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
  * Policy Set Definitions (6)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Public network access should be disabled for MariaDB servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MariaDB_DisablePublicNetworkAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMariaDB/servers` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Private endpoint should be enabled for MariaDB servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MariaDB_EnablePrivateEndPoint_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMariaDB/servers` 
  * Policy Set Definitions (3)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [MariaDB server should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MariaDB_VirtualNetworkServiceEndpoint_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMariaDB/servers` 
* [Public network access should be disabled for MySQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_DisablePublicNetworkAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Bring your own key data protection should be enabled for MySQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_EnableByok_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Private endpoint should be enabled for MySQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_EnablePrivateEndPoint_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (3)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Enforce SSL connection should be enabled for MySQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_EnableSSL_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (7)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Public network access should be disabled for MySQL flexible servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_FlexibleServers_DisablePublicNetworkAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMySQL/flexibleServers` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Infrastructure encryption should be enabled for Azure Database for MySQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_InfrastructureEncryption_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [MySQL server should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_VirtualNetworkServiceEndpoint_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
* [Connection throttling should be enabled for PostgreSQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_ConnectionThrottling_Enabled_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Public network access should be disabled for PostgreSQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_DisablePublicNetworkAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Bring your own key data protection should be enabled for PostgreSQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableByok_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Log checkpoints should be enabled for PostgreSQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableLogCheckpoint_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Log connections should be enabled for PostgreSQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableLogConnections_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Disconnections should be logged for PostgreSQL database servers.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableLogDisconnections_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Log duration should be enabled for PostgreSQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableLogDuration_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
* [Private endpoint should be enabled for PostgreSQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnablePrivateEndPoint_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (3)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Enforce SSL connection should be enabled for PostgreSQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableSSL_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (7)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Public network access should be disabled for PostgreSQL flexible servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_FlexibleServers_DisablePublicNetworkAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/flexibleServers` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Infrastructure encryption should be enabled for Azure Database for PostgreSQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_InfrastructureEncryption_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [PostgreSQL server should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_VirtualNetworkServiceEndpoint_Audit.json)  
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
* [An Azure Active Directory administrator should be provisioned for SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SQL_DB_AuditServerADAdmins_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (18)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Audit SQL DB Level Audit Setting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlDBAuditing_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
* [Transparent Data Encryption on SQL databases should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlDBEncryption_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
  * Policy Set Definitions (23)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy SQL DB transparent data encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlDBEncryption_Deploy.json)  
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
* [Deploy Diagnostic Settings for Azure SQL Database to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlDB_DiagnosticsLog_Deploy.json)  
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
* [SQL Database should avoid using GRS backup redundancy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlDb_BlockGrsBackupRedundancy_Deny.json)  
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
* [Email notifications to admins should be enabled in SQL Managed Instance advanced data security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_AdvancedDataSecurityEmailAdmins_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
* [Advanced data security settings for SQL Managed Instance should contain an email address for security alerts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_AdvancedDataSecurityEmails_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
* [Advanced data security should be enabled on SQL Managed Instance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_AdvancedDataSecurity_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
  * Policy Set Definitions (16)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [SQL Managed Instances should avoid using GRS backup redundancy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_BlockGrsBackupRedundancy_Deny.json)  
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
* [SQL managed instances should use customer-managed keys to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_EnsureServerTDEisEncryptedWithYourOwnKey_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
  * Policy Set Definitions (7)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Advanced Threat Protection types should be set to 'All' in SQL Managed Instance advanced data security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_EnsureThreatDetectionTypes_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
* [SQL Managed Instance should have the minimal TLS version of 1.2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_MiniumTLSVersion_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
* [Deploy Advanced Data Security on SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServerAdvancedDataSecurity_Deploy.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [SQL servers should be configured with 90 days auditing retention or higher](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServerAuditingRetentionDays_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [SQL Auditing settings should have Action-Groups configured to capture critical activities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServerAuditing_ActionsAndGroups_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Auditing on SQL server should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServerAuditing_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (20)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy Auditing on SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServerAuditing_Deploy.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Email notifications to admins should be enabled in SQL server advanced data security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_AdvancedDataSecurityEmailAdmins_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Advanced data security settings for SQL server should contain an email address to receive security alerts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_AdvancedDataSecurityEmails_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Advanced data security should be enabled on your SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_AdvancedDataSecurity_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (16)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [SQL servers should use customer-managed keys to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_EnsureServerTDEisEncryptedWithYourOwnKey_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (7)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Advanced Threat Protection types should be set to 'All' in SQL server Advanced Data Security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_EnsureThreatDetectionTypes_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Azure SQL Database should have the minimal TLS version of 1.2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_MiniumTLSVersion_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Private endpoint connections on Azure SQL Database should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_PrivateEndpoint_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Public network access on Azure SQL Database should be disabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_PublicNetworkAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Virtual network firewall rule on Azure SQL Database should be enabled to allow traffic from the specified subnet](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_VNetRules_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Vulnerability Assessment settings for SQL server should contain an email address to receive scan reports](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_VulnerabilityAssessmentEmails_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Require SQL Server version 12.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlVersion12_Deny.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Vulnerability assessment should be enabled on SQL Managed Instance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/VulnerabilityAssessmentOnManagedInstance_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
  * Policy Set Definitions (11)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Vulnerability assessment should be enabled on your SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/VulnerabilityAssessmentOnServer_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (11)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Search
[(details)](policyDefinitionsByService/policyDefinitions-Search.md)

* [Resource logs in Search services should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Search/Search_AuditDiagnosticLog_Audit.json)  
  * Resource Types 
    * `Microsoft.Search/searchServices` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Security Center
[(details)](policyDefinitionsByService/policyDefinitions-SecurityCenter.md)

* [Allowlist rules in your adaptive application control policy should be updated](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_AdaptiveApplicationControlsUpdate_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Adaptive application controls for defining safe applications should be enabled on your machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_AdaptiveApplicationControls_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (18)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
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
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Adaptive network hardening recommendations should be applied on internet facing virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_AdaptiveNetworkHardenings_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (17)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Auto provisioning of the Log Analytics agent should be enabled on your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_Automatic_provisioning_log_analytics_monitoring_agent.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy - Configure Linux machines to automatically install the Azure Security agent](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_AzureSecurityLinuxAgent_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Deploy - Configure prerequisites to enable Azure Monitor and Azure Security agents on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitoring_Prerequisites.json)  
* [Deploy - Configure Windows machines to automatically install the Azure Security agent](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_AzureSecurityWindowsAgent_Deploy.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Deploy - Configure prerequisites to enable Azure Monitor and Azure Security agents on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitoring_Prerequisites.json)  
* [[Deprecated]: Audit missing blob encryption for storage accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_BlobEncryption_Audit_Deprecated.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
* [[Deprecated]: Audit IP restrictions configuration for an API App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_ConfigureIPRestrictions_ApiApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit IP restrictions configuration for a Function App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_ConfigureIPRestrictions_FunctionApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit IP restrictions configuration for a Web Application](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_ConfigureIPRestrictions_WebApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [Vulnerabilities in container security configurations should be remediated](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_ContainerBenchmark_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (9)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Vulnerabilities in Azure Container Registry images should be remediated](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_ContainerRegistryVulnerabilityAssessment_Audit.json)  
  * Resource Types 
    * `Microsoft.ContainerRegistry/registries` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Enable Security Center's auto provisioning of the Log Analytics agent on your subscriptions with custom workspace.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_Deploy_auto_provisioning_log_analytics_monitoring_agent_custom_workspace.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Enable Security Center's auto provisioning of the Log Analytics agent on your subscriptions with default workspace.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_Deploy_auto_provisioning_log_analytics_monitoring_agent_default_workspace.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [A maximum of 3 owners should be designated for your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_DesignateLessThanXOwners_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (17)  
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
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [There should be more than one owner assigned to your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_DesignateMoreThanOneOwner_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (17)  
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
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [[Deprecated]: Audit Web Sockets state for an API App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_DisableWebSockets_ApiApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit Web Sockets state for a Function App](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_DisableWebSockets_FunctionApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit Web Sockets state for a Web Application](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_DisableWebSockets_WebApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [Email notification for high severity alerts should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_Email_notification.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Email notification to subscription owner for high severity alerts should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_Email_notification_to_subscription_owner.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Defender for SQL servers on machines should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableAdvancedDataSecurityOnSqlServerVirtualMachines_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Defender for Azure SQL Database servers should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableAdvancedDataSecurityOnSqlServers_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Defender for App Service should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableAdvancedThreatProtectionOnAppServices_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Defender for container registries should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableAdvancedThreatProtectionOnContainerRegistry_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Defender for Key Vault should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableAdvancedThreatProtectionOnKeyVaults_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Defender for Kubernetes should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableAdvancedThreatProtectionOnKubernetesService_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Defender for Storage should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableAdvancedThreatProtectionOnStorageAccounts_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Defender for servers should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableAdvancedThreatProtectionOnVM_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure DDoS Protection Standard should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableDDoSProtection_Audit.json)  
  * Resource Types 
    * `microsoft.network/virtualNetworks` 
  * Policy Set Definitions (13)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Authorized IP ranges should be defined on Kubernetes Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableIpRanges_KubernetesService_Audit.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (3)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [MFA should be enabled on accounts with owner permissions on your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableMFAForOwnerPermissions_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (20)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
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
* [MFA should be enabled on accounts with read permissions on your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableMFAForReadPermissions_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (18)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [MFA should be enabled accounts with write permissions on your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableMFAForWritePermissions_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (21)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Pod Security Policies should be defined on Kubernetes Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnablePSP_KubernetesService_Audit_Deprecated.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Role-Based Access Control (RBAC) should be used on Kubernetes Services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnableRBAC_KubernetesService_Audit.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (8)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [[Deprecated]: API App should only be accessible over HTTPS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnforceHttps_ApiApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Function App should only be accessible over HTTPS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnforceHttps_FunctionApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Web Application should only be accessible over HTTPS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_EnforceHttps_WebApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [Deploy export to Event Hub for Azure Security Center data](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_ExportToEventHubAzureSecurityCenterAlertsAndRecommendations_Deploy.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Deploy export to Log Analytics workspace for Azure Security Center data](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_ExportToLogAnalyticsWorkspaceAzureSecurityCenterAlertsAndRecommendations_Deploy.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Guest Configuration extension should be installed on your machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_GCExtOnVm.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Virtual machines' Guest Configuration extension should be deployed with system-assigned managed identity](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_GCExtOnVmWithNoSAMI.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines/extensions` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [IP Forwarding on your virtual machine should be disabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_IPForwardingOnVirtualMachines_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (4)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Log Analytics agent should be installed on your virtual machine for Azure Security Center monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_InstallLaAgentOnVm.json)  
  * Resource Types 
    * `Microsoft.ClassicCompute/virtualMachines` 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Log Analytics agent should be installed on your virtual machine scale sets for Azure Security Center monitoring](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_InstallLaAgentOnVmss.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Management ports of virtual machines should be protected with just-in-time network access control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_JITNetworkAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (16)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Monitor missing Endpoint Protection in Azure Security Center](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_MissingEndpointProtection_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (20)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
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
* [System updates should be installed on your machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_MissingSystemUpdates_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (21)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Non-internet-facing virtual machines should be protected with network security groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_NetworkSecurityGroupsOnInternalVirtualMachines_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Internet-facing virtual machines should be protected with network security groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_NetworkSecurityGroupsOnInternetFacingVirtualMachines_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (9)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Subnets should be associated with a Network Security Group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_NetworkSecurityGroupsOnSubnets_Audit.json)  
  * Resource Types 
    * `Microsoft.Network/virtualNetworks/subnets` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Vulnerabilities in security configuration on your machines should be remediated](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_OSVulnerabilities_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (19)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
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
* [Management ports should be closed on your virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_OpenManagementPortsOnVirtualMachines_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (4)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Access to App Services should be restricted](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_PermissiveNetworkAccessToAppServices_Audit_deprecated.json)  
  * Resource Types 
    * `Microsoft.Web/sites` 
* [[Deprecated]: Monitor permissive network access in Azure Security Center](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_PermissiveNetworkAccess_Audit_Deprecated.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
* [Enable Azure Security Center on your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_Register_To_Azure_Security_Center_Deploy.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Deprecated accounts with owner permissions should be removed from your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_RemoveDeprecatedAccountsWithOwnerPermissions_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
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
* [Deprecated accounts should be removed from your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_RemoveDeprecatedAccounts_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (17)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
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
* [External accounts with read permissions should be removed from your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_RemoveExternalAccountsReadPermissions_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (16)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [External accounts with owner permissions should be removed from your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_RemoveExternalAccountsWithOwnerPermissions_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (21)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [External accounts with write permissions should be removed from your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_RemoveExternalAccountsWritePermissions_Audit.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (19)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
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
* [Log Analytics agent health issues should be resolved on your machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_ResolveLaHealthIssues.json)  
  * Resource Types 
    * `Microsoft.ClassicCompute/virtualMachines` 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Sensitive data in your SQL databases should be classified](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_SQLDbDataClassification_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
    * `Microsoft.Sql/managedInstances/databases` 
  * Policy Set Definitions (3)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Vulnerabilities on your SQL databases should be remediated](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_SQLDbVulnerabilities_Audit.json)  
  * Resource Types 
    * `Microsoft.Sql/servers` 
    * `Microsoft.Sql/managedinstances` 
  * Policy Set Definitions (19)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Automatic provisioning of security monitoring agent](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_SecurityMonitoringAgent_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
* [Subscriptions should have a contact email address for security issues](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_Security_contact_email.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (8)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [A security contact phone number should be provided for your subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_Security_contact_phone_number.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Vulnerabilities on your SQL servers on machine should be remediated](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_ServerSQLVulnerabilityAssessment_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [A vulnerability assessment solution should be enabled on your virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_ServerVulnerabilityAssessment_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (19)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Security Center standard pricing tier should be selected](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_Standard_pricing_tier.json)  
  * Resource Types 
    * `Microsoft.Security/pricings` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Deploy - Configure suppression rules for Azure Security Center alerts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_SuppressionRulesForAlerts_Deploy.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Monitor unaudited SQL servers in Azure Security Center](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UnauditedSqlServer_Audit_Deprecated.json)  
  * Resource Types 
    * `Microsoft.SQL/servers` 
* [Monitor unencrypted SQL databases in Azure Security Center](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UnencryptedSqlDB_Audit_Deprecated.json)  
  * Resource Types 
    * `Microsoft.SQL/servers/databases` 
* [Disk encryption should be applied on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UnencryptedVMDisks_Audit.json)  
  * Resource Types 
    * `Microsoft.ClassicCompute/virtualMachines` 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (20)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [All network ports should be restricted on network security groups associated to your virtual machine](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UnprotectedEndpoints_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
  * Policy Set Definitions (14)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Web ports should be restricted on Network Security Groups associated to your VM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UnprotectedWebApps_Audit_deprecated.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
* [Operating system version should be the most current version for your cloud service roles](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UpdateOsVersion.json)  
  * Resource Types 
    * `Microsoft.ClassicCompute/domainNames/slots/roles` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes Services should be upgraded to a non-vulnerable Kubernetes version](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UpgradeVersion_KubernetesService_Audit.json)  
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (6)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [[Deprecated]: Audit API Applications that are not using latest supported .NET Framework](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UseLatestDotNet_ApiApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit Web Applications that are not using latest supported .NET Framework](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UseLatestDotNet_WebApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit API Applications that are not using latest supported Java Framework](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UseLatestJava_ApiApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit Web Applications that are not using latest supported Java Framework](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UseLatestJava_WebApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit Web Applications that are not using latest supported Node.js Framework](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UseLatestNodeJS_WebApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit API Applications that are not using latest supported PHP Framework](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UseLatestPHP_ApiApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit Web Applications that are not using latest supported PHP Framework](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UseLatestPHP_WebApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit API Applications that are not using latest supported Python Framework](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UseLatestPython_ApiApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit Web Applications that are not using latest supported Python Framework](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UseLatestPython_WebApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [Service principals should be used to protect your subscriptions instead of management certificates](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UseServicePrincipalToProtectSubscriptions.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [[Deprecated]: Audit API Apps that are not using custom domains](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UsedCustomDomains_ApiApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit Function Apps that are not using custom domains](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UsedCustomDomains_FunctionApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [[Deprecated]: Audit Web Applications that are not using custom domains](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_UsedCustomDomains_WebApp_Audit_Deprecated.json)  
  * Resource Types 
    * `microsoft.Web/sites` 
* [Vulnerabilities should be remediated by a Vulnerability Assessment solution](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_VMVulnerabilities_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.ClassicCompute/virtualMachines` 
* [Endpoint protection solution should be installed on virtual machine scale sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_VmssMissingEndpointProtection_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (16)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [System updates on virtual machine scale sets should be installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_VmssMissingSystemUpdates_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (16)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Vulnerabilities in security configuration on your virtual machine scale sets should be remediated](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_VmssOSVulnerabilities_Audit.json)  
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (17)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy Workflow Automation for Azure Security Center alerts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_WorkflowAutomationAzureSecurityCenterAlerts_Deploy.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Deploy Workflow Automation for Azure Security Center recommendations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_WorkflowAutomationAzureSecurityCenterRecommendations_Deploy.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Deploy Workflow Automation for Azure Security Center regulatory compliance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Security%20Center/ASC_WorkflowAutomationAzureSecurityCenterRegulatoryCompliance_Deploy.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 

### Service Bus
[(details)](policyDefinitionsByService/policyDefinitions-ServiceBus.md)

* [Resource logs in Service Bus should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Service%20Bus/ServiceBus_AuditDiagnosticLog_Audit.json)  
  * Resource Types 
    * `Microsoft.ServiceBus/namespaces` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [All authorization rules except RootManageSharedAccessKey should be removed from Service Bus namespace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Service%20Bus/ServiceBus_AuditNamespaceAccessRules_Audit.json)  
  * Resource Types 
    * `Microsoft.ServiceBus/namespaces/authorizationRules` 
  * Policy Set Definitions (1)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Service Bus Premium namespaces should use a customer-managed key for encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Service%20Bus/ServiceBus_CustomerManagedKeyEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.ServiceBus/namespaces` 

### Service Fabric
[(details)](policyDefinitionsByService/policyDefinitions-ServiceFabric.md)

* [Service Fabric clusters should only use Azure Active Directory for client authentication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Service%20Fabric/ServiceFabric_AuditADAuth_Audit.json)  
  * Resource Types 
    * `Microsoft.ServiceFabric/clusters` 
  * Policy Set Definitions (14)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Service Fabric clusters should have the ClusterProtectionLevel property set to EncryptAndSign](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Service%20Fabric/ServiceFabric_AuditClusterProtectionLevel_Audit.json)  
  * Resource Types 
    * `Microsoft.ServiceFabric/clusters` 
  * Policy Set Definitions (7)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### SignalR
[(details)](policyDefinitionsByService/policyDefinitions-SignalR.md)

* [Azure SignalR Service should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SignalR/SignalR_PrivateEndpointEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.SignalRService/SignalR` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Storage
[(details)](policyDefinitionsByService/policyDefinitions-Storage.md)

* [Storage account public access should be disallowed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/ASC_Storage_DisallowPublicBlobAccess_Audit.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (6)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Allowed storage account SKUs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/AllowedStorageSkus_Deny.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
* [Storage accounts should be migrated to new Azure Resource Manager resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/Classic_AuditForClassicStorages_Audit.json)  
  * Resource Types 
    * `Microsoft.ClassicStorage/storageAccounts` 
    * `Microsoft.Storage/StorageAccounts` 
  * Policy Set Definitions (7)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Geo-redundant storage should be enabled for Storage Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/GeoRedundant_StorageAccounts_Audit.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (2)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
* [Storage accounts should allow access from trusted Microsoft services](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/StorageAccess_TrustedMicrosoftServices_Audit.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (3)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Storage accounts should use customer-managed key for encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/StorageAccountCustomerManagedKeyEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Storage accounts should have infrastructure encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/StorageAccountInfrastructureEncryptionEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Storage accounts should restrict network access using virtual network rules](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/StorageAccountOnlyVnetRulesEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (3)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Storage account should use a private link connection](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/StorageAccountPrivateEndpointEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy Advanced Threat Protection on Storage Accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/StorageAdvancedThreatProtection_Deploy.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [[Deprecated]: Require blob encryption for storage accounts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/StorageBlobEncryption_Deny.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
* [Secure transfer to storage accounts should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/Storage_AuditForHTTPSEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (21)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
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
* [Storage accounts should restrict network access](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Storage/Storage_NetworkAcls_Audit.json)  
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (21)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

### Stream Analytics
[(details)](policyDefinitionsByService/policyDefinitions-StreamAnalytics.md)

* [Resource logs in Azure Stream Analytics should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Stream%20Analytics/StreamAnalytics_AuditDiagnosticLog_Audit.json)  
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
  * Resource Types 
    * `Microsoft.StreamAnalytics/streamingJobs` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  

### Synapse
[(details)](policyDefinitionsByService/policyDefinitions-Synapse.md)

* [Vulnerability assessment should be enabled on your Synapse workspaces](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/ASC_SQLVulnerabilityAssessmentOnSynapse_Audit.json)  
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 
* [Azure Synapse workspaces should use customer-managed keys to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/SynapseWorkspaceCMK_Audit.json)  
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [IP firewall rules on Azure Synapse workspaces should be removed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/SynapseWorkspaceFirewallRules_Audit.json)  
  * Resource Types 
    * `Microsoft.Synapse/workspaces/firewallrules` 
* [Managed workspace virtual network on Azure Synapse workspaces should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/SynapseWorkspaceManagedVnet_Audit.json)  
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 
* [Private endpoint connections on Azure Synapse workspaces should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/SynapseWorkspaceUsePrivateLinks_Audit.json)  
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 
* [Synapse managed private endpoints should only connect to resources in approved Azure Active Directory tenants](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/Workspace_DataExfiltrationPrevention_Deny.json)  
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 
* [Azure Synapse workspaces should allow outbound data traffic only to approved targets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/Workspace_RestrictOutboundDataTraffic_Audit.json)  
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 

### Tags
[(details)](policyDefinitionsByService/policyDefinitions-Tags.md)

* [Add or replace a tag on resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddOrReplaceTag_Modify.json)  
* [Add or replace a tag on resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddOrReplaceTag_ResourceGroup_Modify.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
* [Add or replace a tag on subscriptions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddOrReplaceTag_Subscription_Modify.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Add a tag to resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddTag_Modify.json)  
* [Add a tag to resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddTag_ResourceGroup_Modify.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
* [Add a tag to subscriptions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/AddTag_Subscription_Modify.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Append a tag and its value to resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/ApplyTag_Append.json)  
* [Allow resource creation if 'department' tag set](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/DepartmentTagRequired_Deny.json)  
* [Allow resource creation if 'environment' tag value in allowed values](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/EnvironmentTagValues_Deny.json)  
* [Inherit a tag from the subscription](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/InheritTag_AddOrReplace_FromSubscription.json)  
* [Inherit a tag from the resource group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/InheritTag_AddOrReplace_Modify.json)  
* [Inherit a tag from the subscription if missing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/InheritTag_Add_FromSubscription.json)  
* [Inherit a tag from the resource group if missing](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/InheritTag_Add_Modify.json)  
* [Append a tag and its value from the resource group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/InheritTag_Append.json)  
* [Require a tag and its value on resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/RequireTagAndValue_Deny.json)  
* [Require a tag on resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/RequireTag_Deny.json)  
* [Append a tag and its value to resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/ResourceGroupApplyTag_Append.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
* [Require a tag and its value on resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/ResourceGroupRequireTagAndValue_Deny.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 
* [Require a tag on resource groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Tags/ResourceGroupRequireTag_Deny.json)  
  * Resource Types 
    * `Microsoft.Resources/subscriptions/resourceGroups` 

### VM Image Builder
[(details)](policyDefinitionsByService/policyDefinitions-VMImageBuilder.md)

* [VM Image Builder templates should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/VM%20Image%20Builder/PrivateLinkEnabled_Audit.json)  
  * Resource Types 
    * `Microsoft.VirtualMachineImages/imageTemplates` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  

