# Azure Policy Definitions - Key Vault

* [Firewall should be enabled on Key Vault](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/AzureKeyVaultFirewallEnabled_Audit.json)  
  Key vault's firewall prevents unauthorized traffic from reaching your key vault and provides an additional layer of protection for your secrets. Enable the firewall to make sure that only traffic from allowed networks can access your key vault. 
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Private endpoint should be configured for Key Vault](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/AzureKeyVaultPrivateEndpointEnabled_Audit.json)  
  Private link provides a way to connect Key Vault to your Azure resources without sending traffic over the public internet. Private link provides defense in depth protection against data exfiltration. 
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Certificates should use allowed key types](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_AllowedKeyTypes.json)  
  Manage your organizational compliance requirements by restricting the key types allowed for certificates. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates using elliptic curve cryptography should have allowed curve names](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_EC_AllowedCurveNames.json)  
  Manage the allowed elliptic curve names for ECC Certificates stored in key vault. More information can be found at https://aka.ms/akvpolicy. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates should not expire within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_Expiry_ByDays.json)  
  Manage certificates that will expire within a specified number of days to ensure your organization has sufficient time to rotate the certificate prior to expiration. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates should be issued by the specified non-integrated certificate authority](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_Issuers_CustomCAs.json)  
  Manage your organizational compliance requirements by specifying the custom or internal certificate authorities that can issue certificates in your key vault. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates should be issued by the specified integrated certificate authority](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_Issuers_SupportedCAs.json)  
  Manage your organizational compliance requirements by specifying the Azure integrated certificate authorities that can issue certificates in your key vault such as Digicert or GlobalSign. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates should have the specified lifetime action triggers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_LifetimeAction.json)  
  Manage your organizational compliance requirements by specifying whether a certificate lifetime action is triggered at a specific percentage of its lifetime or at a certain number of days prior to its expiration. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
* [Certificates using RSA cryptography should have the specified minimum key size](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_RSA_MinimumKeySize.json)  
  Manage your organizational compliance requirements by specifying a minimum key size for RSA certificates stored in your key vault. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Certificates should have the specified maximum validity period](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Certificates_ValidityPeriod.json)  
  Manage your organizational compliance requirements by specifying the maximum amount of time that a certificate can be valid within your key vault. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/certificates` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Resource logs in Key Vault should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/KeyVault_AuditDiagnosticLog_Audit.json)  
  Audit enabling of resource logs. This enables you to recreate activity trails to use for investigation purposes when a security incident occurs or when your network is compromised 
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
  Deploys the diagnostic settings for Key Vault to stream to a regional Event Hub when any Key Vault which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
* [Key vaults should have purge protection enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/KeyVault_Recoverable_Audit.json)  
  Malicious deletion of a key vault can lead to permanent data loss. A malicious insider in your organization can potentially delete and purge key vaults. Purge protection protects you from insider attacks by enforcing a mandatory retention period for soft deleted key vaults. No one inside your organization or Microsoft will be able to purge your key vaults during the soft delete retention period. 
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
  Deleting a key vault without soft delete enabled permanently deletes all secrets, keys, and certificates stored in the key vault. Accidental deletion of a key vault can lead to permanent data loss. Soft delete allows you to recover an accidentally deleted key vault for a configurable retention period. 
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Keys should not be active for longer than the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_ActivePeriod.json)  
  Specify the number of days that a key should be active. Keys that are used for an extended period of time increase the probability that an attacker could compromise the key. As a good security practice, make sure that your keys have not been active longer than two years. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
* [Keys should be the specified cryptographic type RSA or EC](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_AllowedKeyTypes.json)  
  Some applications require the use of keys backed by a specific cryptographic type. Enforce a particular cryptographic key type, RSA or EC, in your environment. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Keys using elliptic curve cryptography should have the specified curve names](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_EC_AllowedCurveNames.json)  
  Keys backed by elliptic curve cryptography can have different curve names. Some applications are only compatible with specific elliptic curve keys. Enforce the types of elliptic curve keys that are allowed to be created in your environment. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Key Vault keys should have an expiration date](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_ExpirationSet.json)  
  Cryptographic keys should have a defined expiration date and not be permanent. Keys that are valid forever provide a potential attacker with more time to compromise the key. It is a recommended security practice to set expiration dates on cryptographic keys. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Keys should have more than the specified number of days before expiration](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_Expiry_ByDays.json)  
  If a key is too close to expiration, an organizational delay to rotate the key may result in an outage. Keys should be rotated at a specified number of days prior to expiration to provide sufficient time to react to a failure. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
* [Keys should be backed by a hardware security module (HSM)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_HSMBacked.json)  
  An HSM is a hardware security module that stores keys. An HSM provides a physical layer of protection for cryptographic keys. The cryptographic key cannot leave a physical HSM which provides a greater level of security than a software key. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
* [Keys using RSA cryptography should have a specified minimum key size](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_RSA_MinimumKeySize.json)  
  Set the minimum allowed key size for use with your key vaults. Use of RSA keys with small key sizes is not a secure practice and doesn't meet many industry certification requirements. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Keys should have the specified maximum validity period](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Keys_ValidityPeriod.json)  
  Manage your organizational compliance requirements by specifying the maximum amount of time in days that a key can be valid within your key vault. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/keys` 
* [Resource logs in Azure Key Vault Managed HSM should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/ManagedHsm_AuditDiagnosticLog_Audit.json)  
  To recreate activity trails for investigation purposes when a security incident occurs or when your network is compromised, you may want to audit by enabling resource logs on Managed HSMs. Please follow the instructions here: https://docs.microsoft.com/azure/key-vault/managed-hsm/logging. 
  * Resource Types 
    * `Microsoft.KeyVault/managedHsms` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Deploy - Configure diagnostic settings to an Event Hub to be enabled on Azure Key Vault Managed HSM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/ManagedHsm_DiagnosticLog_Deploy.json)  
  Deploys the diagnostic settings for Azure Key Vault Managed HSM to stream to a regional Event Hub when any Azure Key Vault Managed HSM which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.KeyVault/managedHsms` 
* [Azure Key Vault Managed HSM should have purge protection enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/ManagedHsm_Recoverable_Audit.json)  
  Malicious deletion of an Azure Key Vault Managed HSM can lead to permanent data loss. A malicious insider in your organization can potentially delete and purge Azure Key Vault Managed HSM. Purge protection protects you from insider attacks by enforcing a mandatory retention period for soft deleted Azure Key Vault Managed HSM. No one inside your organization or Microsoft will be able to purge your Azure Key Vault Managed HSM during the soft delete retention period. 
  * Resource Types 
    * `Microsoft.KeyVault/managedHsms` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Secrets should not be active for longer than the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Secrets_ActivePeriod.json)  
  If your secrets were created with an activation date set in the future, you must ensure that your secrets have not been active for longer than the specified duration. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/secrets` 
* [Secrets should have content type set](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Secrets_ContentTypeSet.json)  
  A content type tag helps identify whether a secret is a password, connection string, etc. Different secrets have different rotation requirements. Content type tag should be set on secrets. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/secrets` 
* [Key Vault secrets should have an expiration date](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Secrets_ExpirationSet.json)  
  Secrets should have a defined expiration date and not be permanent. Secrets that are valid forever provide a potential attacker with more time to compromise them. It is a recommended security practice to set expiration dates on secrets. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/secrets` 
  * Policy Set Definitions (3)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Secrets should have more than the specified number of days before expiration](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Secrets_Expiry_ByDays.json)  
  If a secret is too close to expiration, an organizational delay to rotate the secret may result in an outage. Secrets should be rotated at a specified number of days prior to expiration to provide sufficient time to react to a failure. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/secrets` 
* [Secrets should have the specified maximum validity period](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Key%20Vault/Secrets_ValidityPeriod.json)  
  Manage your organizational compliance requirements by specifying the maximum amount of time in days that a secret can be valid within your key vault. 
  * Resource Types 
    * `Microsoft.KeyVault.Data/vaults/secrets` 
