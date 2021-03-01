# Azure Policy Definitions - Synapse

* [Vulnerability assessment should be enabled on your Synapse workspaces](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/ASC_SQLVulnerabilityAssessmentOnSynapse_Audit.json)  
  Discover, track, and remediate potential vulnerabilities by configuring recurring SQL vulnerability assessment scans on your Synapse workspaces. 
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 
* [Azure Synapse workspaces should use customer-managed keys to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/SynapseWorkspaceCMK_Audit.json)  
  Use customer-managed keys to control the encryption at rest of the data stored in Azure Synapse workspaces. Customer-managed keys deliver double encryption by adding a second layer of encryption on top of the default encryption with service-managed keys. 
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [IP firewall rules on Azure Synapse workspaces should be removed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/SynapseWorkspaceFirewallRules_Audit.json)  
  Removing all IP firewall rules improves security by ensuring your Azure Synapse workspace can only be accessed from a private endpoint. This configuration audits creation of firewall rules that allow public network access on the workspace. 
  * Resource Types 
    * `Microsoft.Synapse/workspaces/firewallrules` 
* [Managed workspace virtual network on Azure Synapse workspaces should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/SynapseWorkspaceManagedVnet_Audit.json)  
  Enabling a managed workspace virtual network ensures that your workspace is network isolated from other workspaces. Data integration and Spark resources deployed in this virtual network also provides user level isolation for Spark activities. 
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 
* [Private endpoint connections on Azure Synapse workspaces should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/SynapseWorkspaceUsePrivateLinks_Audit.json)  
  Private endpoints can be configured to connect privately to an Azure Synapse workspace. This is used to enforce a secure communication channel to Azure Synapse workspace. 
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 
* [Synapse managed private endpoints should only connect to resources in approved Azure Active Directory tenants](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/Workspace_DataExfiltrationPrevention_Deny.json)  
  Protect your Synapse workspace by only allowing connections to resources in approved Azure Active Directory (Azure AD) tenants. The approved Azure AD tenants can be defined during policy assignment. 
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 
* [Azure Synapse workspaces should allow outbound data traffic only to approved targets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Synapse/Workspace_RestrictOutboundDataTraffic_Audit.json)  
  Increase security of your Synapse workspace by allowing outbound data traffic only to approved targets. This helps prevention against data exfiltration by validating the target before sending data. 
  * Resource Types 
    * `Microsoft.Synapse/workspaces` 
