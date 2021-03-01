# Azure Policy Definitions - Attestation

* [Azure Attestation providers should use private endpoints](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Attestation/Attestation_PrivateLink_AuditIfNotExists.json)  
  Private endpoints provide a way to connect Azure Attestation providers to your Azure resources without sending traffic over the public internet. By preventing public access, private endpoints help protect against undesired anonymous access. 
  * Resource Types 
    * `Microsoft.Attestation/attestationProviders` 
