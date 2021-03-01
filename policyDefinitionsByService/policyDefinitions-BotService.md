# Azure Policy Definitions - Bot Service

* [Bot Service should be encrypted with a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Bot%20Service/BotService_CMKEnabled_Audit.json)  
  Azure Bot Service automatically encrypts your resource to protect your data and meet organizational security and compliance commitments. By default, Microsoft-managed encryption keys are used. For greater flexibility in managing keys or controlling access to your subscription, select customer-managed keys, also known as bring your own key (BYOK). Learn more about Azure Bot Service encryption: https://docs.microsoft.com/azure/bot-service/bot-service-encryption. 
  * Resource Types 
    * `Microsoft.BotService/botServices` 
* [Bot Service endpoint should be a valid HTTPS URI](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Bot%20Service/BotService_ValidEndpoint_Audit.json)  
  Data can be tampered with during transmission. Protocols exist that provide encryption to address problems of misuse and tampering. To ensure your bots are communicating only over encrypted channels, set the endpoint to a valid HTTPS URI. This ensures the HTTPS protocol is used to encrypt your data in transit and is also often a requirement for compliance with regulatory or industry standards. Please visit: https://docs.microsoft.com/azure/bot-service/bot-builder-security-guidelines. 
  * Resource Types 
    * `Microsoft.BotService/botServices` 
