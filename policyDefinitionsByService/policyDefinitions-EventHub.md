# Azure Policy Definitions - Event Hub

* [Resource logs in Event Hub should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Hub/EventHub_AuditDiagnosticLog_Audit.json)  
  Audit enabling of resource logs. This enables you to recreate activity trails to use for investigation purposes; when a security incident occurs or when your network is compromised 
  * Resource Types 
    * `Microsoft.EventHub/namespaces` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Authorization rules on the Event Hub instance should be defined](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Hub/EventHub_AuditEventHubAccessRules_Audit.json)  
  Audit existence of authorization rules on Event Hub entities to grant least-privileged access 
  * Resource Types 
    * `Microsoft.EventHub/namespaces/eventhubs` 
* [All authorization rules except RootManageSharedAccessKey should be removed from Event Hub namespace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Hub/EventHub_AuditNamespaceAccessRules_Audit.json)  
  Event Hub clients should not use a namespace level access policy that provides access to all queues and topics in a namespace. To align with the least privilege security model, you should create access policies at the entity level for queues and topics to provide access to only the specific entity 
  * Resource Types 
    * `Microsoft.EventHub/namespaces/authorizationRules` 
* [Event Hub namespaces should use a customer-managed key for encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Event%20Hub/EventHub_CustomerManagedKeyEnabled_Audit.json)  
  Azure Event Hubs supports the option of encrypting data at rest with either Microsoft-managed keys (default) or customer-managed keys. Choosing to encrypt data using customer-managed keys enables you to assign, rotate, disable, and revoke access to the keys that Event Hub will use to encrypt data in your namespace. Note that Event Hub only supports encryption with customer-managed keys for namespaces in dedicated clusters. 
  * Resource Types 
    * `Microsoft.EventHub/namespaces` 
