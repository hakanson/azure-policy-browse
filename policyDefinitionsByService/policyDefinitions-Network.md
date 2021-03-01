# Azure Policy Definitions - Network

* [All Internet traffic should be routed via your deployed Azure Firewall](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/ASC_All_Internet_traffic_should_be_routed_via_Azure_Firewall.json)  
  Azure Security Center has identified that some of your subnets aren't protected with a next generation firewall. Protect your subnets from potential threats by restricting access to them with Azure Firewall or a supported next generation firewall 
  * Resource Types 
    * `Microsoft.Network/virtualNetworks` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Virtual machines should be connected to an approved virtual network](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/ApprovedVirtualNetwork_Audit.json)  
  This policy audits any virtual machine connected to a virtual network that is not approved. 
  * Resource Types 
    * `Microsoft.Network/networkInterfaces` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Web Application Firewall should be enabled for Azure Front Door Service or Application Gateway](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/EnabledWAF_Deny.json)  
  Requires Web Application Firewall on any Azure Front Door Service or Application Gateway. A Web Application Firewall provides greater security for your other Azure resources. 
  * Resource Types 
    * `Microsoft.Network/frontdoors` 
    * `Microsoft.Network/applicationGateways` 
* [Web Application Firewall should be a set mode for Application Gateway and Azure Front Door Service](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/ModeWAF_Deny.json)  
  Mandates detect or prevent mode to be active on all Web Application Firewall policies for Azure Front Door and Application Gateway. Web Application Firewall policies can have a consistent mode configuration across a resource group. 
  * Resource Types 
    * `Microsoft.Network/frontdoorwebapplicationfirewallpolicies` 
    * `Microsoft.Network/applicationGatewayWebApplicationFirewallPolicies` 
* [Network interfaces should disable IP forwarding](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkIPForwardingNic_Deny.json)  
  This policy denies the network interfaces which enabled IP forwarding. The setting of IP forwarding disables Azure's check of the source and destination for a network interface. This should be reviewed by the network security team. 
  * Resource Types 
    * `Microsoft.Network/networkInterfaces` 
  * Policy Set Definitions (1)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Network interfaces should not have public IPs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkPublicIPNic_Deny.json)  
  This policy denies the network interfaces which are configured with any public IP. Public IP addresses allow internet resources to communicate inbound to Azure resources, and Azure resources to communicate outbound to the internet. This should be reviewed by the network security team. 
  * Resource Types 
    * `Microsoft.Network/networkInterfaces` 
* [Gateway subnets should not be configured with a network security group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkSecurityGroupOnGatewaySubnet_Deny.json)  
  This policy denies if a gateway subnet is configured with a network security group. Assigning a network security group to a gateway subnet will cause the gateway to stop functioning. 
  * Resource Types 
    * `Microsoft.Network/virtualNetworks/subnets` 
  * Policy Set Definitions (1)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Flow log should be configured for every network security group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkSecurityGroup_FlowLog_Audit.json)  
  Audit for network security groups to verify if flow log resource is configured. Flow log allows to log information about IP traffic flowing through network security group. It can be used for optimizing network flows, monitoring throughput, verifying compliance, detecting intrusions and more. 
  * Resource Types 
    * `Microsoft.Network/networkSecurityGroups` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Deploy a flow log resource with target network security group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkSecurityGroup_FlowLog_Deploy.json)  
  Configures flow log for specific network security group. It will allow to log information about IP traffic flowing through an network security group. Flow log helps to identify unknown or undesired traffic, verify network isolation and compliance with enterprise access rules, analyze network flows from compromised IPs and network interfaces. 
  * Resource Types 
    * `Microsoft.Network/networkSecurityGroups` 
* [RDP access from the Internet should be blocked](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkSecurityGroup_RDPAccess_Audit.json)  
  This policy audits any network security rule that allows RDP access from Internet 
  * Resource Types 
    * `Microsoft.Network/networkSecurityGroups/securityRules` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [SSH access from the Internet should be blocked](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkSecurityGroup_SSHAccess_Audit.json)  
  This policy audits any network security rule that allows SSH access from Internet 
  * Resource Types 
    * `Microsoft.Network/networkSecurityGroups/securityRules` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Deploy network watcher when virtual networks are created](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkWatcher_Deploy.json)  
  This policy creates a network watcher resource in regions with virtual networks. You need to ensure existence of a resource group named networkWatcherRG, which will be used to deploy network watcher instances. 
  * Resource Types 
    * `Microsoft.Network/virtualNetworks` 
  * Policy Set Definitions (1)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Network Watcher should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/NetworkWatcher_Enabled_Audit.json)  
  Network Watcher is a regional service that enables you to monitor and diagnose conditions at a network scenario level in, to, and from Azure. Scenario level monitoring enables you to diagnose problems at an end to end network level view. Network diagnostic and visualization tools available with Network Watcher help you understand, diagnose, and gain insights to your network in Azure. 
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
  This policy ensures that VPN gateways do not use 'basic' SKU. 
  * Resource Types 
    * `Microsoft.Network/virtualNetworkGateways` 
* [A custom IPsec/IKE policy must be applied to all Azure virtual network gateway connections](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VPNGateways_CustomIpSecPolicies_Audit.json)  
  This policy ensures that all Azure virtual network gateway connections use a custom Internet Protocol Security(Ipsec)/Internet Key Exchange(IKE) policy. Supported algorithms and key strengths - https://aka.ms/AA62kb0 
  * Resource Types 
    * `Microsoft.Network/connections` 
* [App Service should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_AppService_AuditIfNotExists.json)  
  This policy audits any App Service not configured to use a virtual network service endpoint. 
  * Resource Types 
    * `Microsoft.Web/sites` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Container Registry should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_ContainerRegistry_Audit.json)  
  This policy audits any Container Registry not configured to use a virtual network service endpoint. 
  * Resource Types 
    * `Microsoft.ContainerRegistry/registries` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Cosmos DB should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_CosmosDB_Audit.json)  
  This policy audits any Cosmos DB not configured to use a virtual network service endpoint. 
  * Resource Types 
    * `Microsoft.DocumentDB/databaseAccounts` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Event Hub should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_EventHub_AuditIfNotExists.json)  
  This policy audits any Event Hub not configured to use a virtual network service endpoint. 
  * Resource Types 
    * `Microsoft.EventHub/namespaces` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Key Vault should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_KeyVault_Audit.json)  
  This policy audits any Key Vault not configured to use a virtual network service endpoint. 
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [SQL Server should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_SQLServer_AuditIfNotExists.json)  
  This policy audits any SQL Server not configured to use a virtual network service endpoint. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Service Bus should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_ServiceBus_AuditIfNotExists.json)  
  This policy audits any Service Bus not configured to use a virtual network service endpoint. 
  * Resource Types 
    * `Microsoft.ServiceBus/namespaces` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Storage Accounts should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetworkServiceEndpoint_StorageAccount_Audit.json)  
  This policy audits any Storage Account not configured to use a virtual network service endpoint. 
  * Resource Types 
    * `Microsoft.Storage/storageAccounts` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Virtual networks should use specified virtual network gateway](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/VirtualNetwork_ApprovedVirtualNetworkGateway_AuditIfNotExists.json)  
  This policy audits any virtual network if the default route does not point to the specified virtual network gateway. 
  * Resource Types 
    * `Microsoft.Network/virtualNetworks` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Web Application Firewall (WAF) should be enabled for Azure Front Door Service service](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/WAF_AFD_Enabled_Audit.json)  
  Deploy Azure Web Application Firewall (WAF) in front of public facing web applications for additional inspection of incoming traffic. Web Application Firewall (WAF) provides centralized protection of your web applications from common exploits and vulnerabilities such as SQL injections, Cross-Site Scripting, local and remote file executions. You can also restrict access to your web applications by countries, IP address ranges, and other http(s) parameters via custom rules. 
  * Resource Types 
    * `Microsoft.Network/frontdoors` 
  * Policy Set Definitions (4)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Web Application Firewall (WAF) should use the specified mode for Azure Front Door Service](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/WAF_AFD_Mode_Audit.json)  
  Mandates the use of 'Detection' or 'Prevention' mode to be active on all Web Application Firewall policies for Azure Front Door Service. 
  * Resource Types 
    * `Microsoft.Network/frontdoorwebapplicationfirewallpolicies` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Web Application Firewall (WAF) should be enabled for Application Gateway](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/WAF_AppGatewayEnabled_Audit.json)  
  Deploy Azure Web Application Firewall (WAF) in front of public facing web applications for additional inspection of incoming traffic. Web Application Firewall (WAF) provides centralized protection of your web applications from common exploits and vulnerabilities such as SQL injections, Cross-Site Scripting, local and remote file executions. You can also restrict access to your web applications by countries, IP address ranges, and other http(s) parameters via custom rules. 
  * Resource Types 
    * `Microsoft.Network/applicationGateways` 
  * Policy Set Definitions (4)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Web Application Firewall (WAF) should use the specified mode for Application Gateway](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Network/WAF_AppGatewayMode_Audit.json)  
  Mandates the use of 'Detection' or 'Prevention' mode to be active on all Web Application Firewall policies for Application Gateway. 
  * Resource Types 
    * `Microsoft.Network/applicationGatewayWebApplicationFirewallPolicies` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
