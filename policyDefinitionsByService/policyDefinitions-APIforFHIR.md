# Azure Policy Definitions - API for FHIR

* [Azure API for FHIR should use a customer-managed key to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/API%20for%20FHIR/HealthcareAPIs_EnableByok_Audit.json)  
  Use a customer-managed key to control the encryption at rest of the data stored in Azure API for FHIR when this is a regulatory or compliance requirement. Customer-managed keys also deliver double encryption by adding a second layer of encryption on top of the default one done with service-managed keys. 
  * Resource Types 
    * `Microsoft.HealthcareApis/services` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Azure API for FHIR should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/API%20for%20FHIR/HealthcareAPIs_PrivateLink_Audit.json)  
  Azure API for FHIR should have at least one approved private endpoint connection. Clients in a virtual network can securely access resources that have private endpoint connections through private links. For more information, visit: https://aka.ms/fhir-privatelink. 
  * Resource Types 
    * `Microsoft.HealthcareApis/services` 
* [CORS should not allow every domain to access your API for FHIR](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/API%20for%20FHIR/HealthcareAPIs_RestrictCORSAccess_Audit.json)  
  Cross-Origin Resource Sharing (CORS) should not allow all domains to access your API for FHIR. To protect your API for FHIR, remove access for all domains and explicitly define the domains allowed to connect. 
  * Resource Types 
    * `Microsoft.HealthcareApis/services` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
