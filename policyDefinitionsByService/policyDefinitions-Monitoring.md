# Azure Policy Definitions - Monitoring

* [Network traffic data collection agent should be installed on Linux virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ASC_Dependency_Agent_Audit_Linux.json)  
  Security Center uses the Microsoft Dependency agent to collect network traffic data from your Azure virtual machines to enable advanced network protection features such as traffic visualization on the network map, network hardening recommendations and specific network threats. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (3)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Network traffic data collection agent should be installed on Windows virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ASC_Dependency_Agent_Audit_Windows.json)  
  Security Center uses the Microsoft Dependency agent to collect network traffic data from your Azure virtual machines to enable advanced network protection features such as traffic visualization on the network map, network hardening recommendations and specific network threats. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (3)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Activity log should be retained for at least one year](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLogRetention_365orGreater.json)  
  This policy audits the activity log if the retention is not set for 365 days or forever (retention days set to 0). 
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (3)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [An activity log alert should exist for specific Administrative operations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLog_AdministrativeOperations_Audit.json)  
  This policy audits specific Administrative operations with no activity log alerts configured. 
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
  This policy ensures that a log profile collects logs for categories 'write,' 'delete,' and 'action' 
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Azure Monitor should collect activity logs from all regions](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLog_CaptureAllRegions.json)  
  This policy audits the Azure Monitor log profile which does not export activities from all Azure supported regions including global. 
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [An activity log alert should exist for specific Policy operations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLog_PolicyOperations_Audit.json)  
  This policy audits specific Policy operations with no activity log alerts configured. 
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [An activity log alert should exist for specific Security operations](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ActivityLog_SecurityOperations_Audit.json)  
  This policy audits specific Security operations with no activity log alerts configured. 
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
  This policy audits if the Storage account containing the container with activity logs is encrypted with BYOK. The policy works only if the storage account lies on the same subscription as activity logs by design. More information on Azure Storage encryption at rest can be found here https://aka.ms/azurestoragebyok.  
  * Resource Types 
    * `Microsoft.Insights/logProfiles` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Azure Monitor Logs for Application Insights should be linked to a Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ApplicationInsightsComponent_WorkspaceAssociation_Deny.json)  
  Link the Application Insights component to a Log Analytics workspace for logs encryption. Customer-managed keys are commonly required to meet regulatory compliance and for more control over the access to your data in Azure Monitor. Linking your component to a Log Analytics workspace that's enabled with a customer-managed key, ensures that your Application Insights logs meet this compliance requirement, see https://docs.microsoft.com/azure/azure-monitor/platform/customer-managed-keys. 
  * Resource Types 
    * `Microsoft.Insights/components` 
* [Log Analytics agent should be installed on your Linux Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Arc_Linux_LogAnalytics_Audit.json)  
  This policy audits Linux Azure Arc machines if the Log Analytics agent is not installed. 
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Log Analytics agent should be installed on your Windows Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Arc_Windows_LogAnalytics_Audit.json)  
  This policy audits Windows Azure Arc machines if the Log Analytics agent is not installed. 
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [[ASC Private Preview] Deploy - Configure system-assigned managed identity to enable Azure Monitor assignments on VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/AzureMonitoring_AddSystemIdentity_Prerequisite.json)  
  [ASC Private Preview] Configure system-assigned managed identity to virtual machines hosted in Azure that are supported by Azure Monitor that do not have a system-assigned managed identity. A system-assigned managed identity is a prerequisite for all Azure Monitor assignments and must be added to machines before using any Azure Monitor extension. Target virtual machines must be in a supported location. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Deploy - Configure prerequisites to enable Azure Monitor and Azure Security agents on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitoring_Prerequisites.json)  
* [Deploy - Configure Linux Azure Monitor agent to enable Azure Monitor assignments on Linux virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/AzureMonitoring_DeployExtensionLinux_Prerequisite.json)  
  Configure Linux Azure Monitor agent to Linux virtual machines hosted in Azure that are supported by Azure Monitor. Azure Monitor agent collects events from the virtual machine that can be used to provide recommendations. Target virtual machines must be in a supported location. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Deploy - Configure prerequisites to enable Azure Monitor and Azure Security agents on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitoring_Prerequisites.json)  
* [Deploy - Configure Windows Azure Monitor agent to enable Azure Monitor assignments on Windows virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/AzureMonitoring_DeployExtensionWindows_Prerequisite.json)  
  Configure Windows Azure Monitor agent to Windows virtual machines hosted in Azure that are supported by Azure Monitor. Azure Monitor agent collects events from the virtual machine that can be used to provide recommendations. Target virtual machines must be in a supported location. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Deploy - Configure prerequisites to enable Azure Monitor and Azure Security agents on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitoring_Prerequisites.json)  
* [Deploy Diagnostic Settings for Batch Account to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Batch_DeployDiagnosticLog_Deploy_EventHub.json)  
  Deploys the diagnostic settings for Batch Account to stream to a regional Event Hub when any Batch Account which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 
* [Deploy Diagnostic Settings for Batch Account to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Batch_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  Deploys the diagnostic settings for Batch Account to stream to a regional Log Analytics workspace when any Batch Account which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.Batch/batchAccounts` 
* [Deploy Diagnostic Settings for Data Lake Analytics to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DataLakeAnalytics_DeployDiagnosticLog_Deploy_EventHub.json)  
  Deploys the diagnostic settings for Data Lake Analytics to stream to a regional Event Hub when any Data Lake Analytics which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.DataLakeAnalytics/accounts` 
* [Deploy Diagnostic Settings for Data Lake Analytics to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DataLakeAnalytics_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  Deploys the diagnostic settings for Data Lake Analytics to stream to a regional Log Analytics workspace when any Data Lake Analytics which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.DataLakeAnalytics/accounts` 
* [Deploy Diagnostic Settings for Data Lake Storage Gen1 to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DataLakeStorage_DeployDiagnosticLog_Deploy_EventHub.json)  
  Deploys the diagnostic settings for Data Lake Storage Gen1 to stream to a regional Event Hub when any Data Lake Storage Gen1 which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.DataLakeStore/accounts` 
* [Deploy Diagnostic Settings for Data Lake Storage Gen1 to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DataLakeStorage_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  Deploys the diagnostic settings for Data Lake Storage Gen1 to stream to a regional Log Analytics workspace when any Data Lake Storage Gen1 which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.DataLakeStore/accounts` 
* [Deploy Dependency agent to hybrid Linux Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Linux_HybridVM_Deploy.json)  
  This policy deploys the Dependency agent to Linux Azure Arc machines if the agent isn't installed. 
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Dependency agent for Linux virtual machine scale sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Linux_VMSS_Deploy.json)  
  Deploy Dependency agent for Linux virtual machine scale sets if the VM Image (OS) is in the list defined and the agent is not installed. Note: if your scale set upgradePolicy is set to Manual, you need to apply the extension to the all virtual machines in the set by calling upgrade on them. In CLI this would be az vmss update-instances. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VMSS.json)  
* [Deploy Dependency agent for Linux virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Linux_VM_Deploy.json)  
  Deploy Dependency agent for Linux virtual machines if the VM Image (OS) is in the list defined and the agent is not installed. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Dependency agent to Windows Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Windows_HybridVM_Deploy.json)  
  This policy deploys the Dependency agent to Windows Azure Arc machines if the agent isn't installed. 
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Dependency agent for Windows virtual machine scale sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Windows_VMSS_Deploy.json)  
  Deploy Dependency agent for Windows virtual machine scale sets if the VM Image (OS) is in the list defined and the agent is not installed. The list of OS images will be updated over time as support is updated. Note: if your scale set upgradePolicy is set to Manual, you need to apply the extension to the all virtual machines in the set by calling upgrade on them. In CLI this would be az vmss update-instances. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (2)  
    * [Enable Azure Monitor for Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VMSS.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Deploy Dependency agent for Windows virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgentExtension_Windows_VM_Deploy.json)  
  Deploy Dependency agent for Windows virtual machines if the VM Image (OS) is in the list defined and the agent is not installed. The list of OS images will be updated over time as support is updated. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (2)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Audit Dependency agent deployment - VM Image (OS) unlisted](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgent_OSImage_Audit.json)  
  Reports VMs as non-compliant if the VM Image (OS) is not in the list defined and the agent is not installed. The list of OS images will be updated over time as support is updated. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (2)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
* [Audit Dependency agent deployment in virtual machine scale sets - VM Image (OS) unlisted](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DependencyAgent_OSImage_VMSS_Audit.json)  
  Reports virtual machine scale sets as non-compliant if the VM Image (OS) is not in the list defined and the agent is not installed. The list of OS images will be updated over time as support is updated. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (3)  
    * [Enable Azure Monitor for Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VMSS.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
* [Deploy Diagnostic Settings for Network Security Groups](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DiagnosticSettingsForNSG_Deploy.json)  
  This policy automatically deploys diagnostic settings to network security groups. A storage account with name '{storagePrefixParameter}{NSGLocation}' will be automatically created. 
  * Resource Types 
    * `Microsoft.Network/networkSecurityGroups` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Audit diagnostic setting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/DiagnosticSettingsForTypes_Audit.json)  
  Audit diagnostic setting for selected resource types 
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
  Deploys the diagnostic settings for Event Hub to stream to a regional Event Hub when any Event Hub which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.EventHub/namespaces` 
* [Deploy Diagnostic Settings for Event Hub to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/EventHub_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  Deploys the diagnostic settings for Event Hub to stream to a regional Log Analytics workspace when any Event Hub which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.EventHub/namespaces` 
* [Deploy Diagnostic Settings for Key Vault to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/KeyVault_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  Deploys the diagnostic settings for Key Vault to stream to a regional Log Analytics workspace when any Key Vault which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.KeyVault/vaults` 
* [Azure Monitor Logs clusters should be created with infrastructure-encryption enabled (double encryption)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsClusters_CMKDoubleEncryptionEnabled_Deny.json)  
  To ensure secure data encryption is enabled at the service level and the infrastructure level with two different encryption algorithms and two different keys, use an Azure Monitor dedicated cluster. This option is enabled by default when supported at the region, see https://docs.microsoft.com/azure/azure-monitor/platform/customer-managed-keys#customer-managed-key-overview. 
  * Resource Types 
    * `Microsoft.OperationalInsights/clusters` 
* [Azure Monitor Logs clusters should be encrypted with customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsClusters_CMKEnabled_Deny.json)  
  Create Azure Monitor logs cluster with customer-managed keys encryption. By default, the log data is encrypted with service-managed keys, but customer-managed keys are commonly required to meet regulatory compliance. Customer-managed key in Azure Monitor gives you more control over the access to you data, see https://docs.microsoft.com/azure/azure-monitor/platform/customer-managed-keys. 
  * Resource Types 
    * `Microsoft.OperationalInsights/clusters` 
* [Deploy Log Analytics agent to Linux Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Linux_HybridVM_Deploy.json)  
  This policy deploys the Log Analytics agent to Linux Azure Arc machines if the agent isn't installed. 
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Log Analytics agent for Linux virtual machine scale sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Linux_VMSS_Deploy.json)  
  Deploy Log Analytics agent for Linux virtual machine scale sets if the VM Image (OS) is in the list defined and the agent is not installed. Note: if your scale set upgradePolicy is set to Manual, you need to apply the extension to the all VMs in the set by calling upgrade on them. In CLI this would be az vmss update-instances. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VMSS.json)  
* [Deploy Log Analytics agent for Linux VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Linux_VM_Deploy.json)  
  Deploy Log Analytics agent for Linux VMs if the VM Image (OS) is in the list defined and the agent is not installed. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Log Analytics agent to Windows Azure Arc machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Windows_HybridVM_Deploy.json)  
  This policy deploys the Log Analytics agent to Windows Azure Arc machines if the agent isn't installed. 
  * Resource Types 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Deploy Log Analytics agent for Windows virtual machine scale sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Windows_VMSS_Deploy.json)  
  Deploy Log Analytics agent for Windows virtual machine scale sets if the VM Image (OS) is in the list defined and the agent is not installed. The list of OS images will be updated over time as support is updated. Note: if your scale set upgradePolicy is set to Manual, you need to apply the extension to the all VMs in the set by calling upgrade on them. In CLI this would be az vmss update-instances. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VMSS.json)  
* [Deploy Log Analytics agent for Windows VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsExtension_Windows_VM_Deploy.json)  
  Deploy Log Analytics agent for Windows VMs if the VM Image (OS) is in the list defined and the agent is not installed. The list of OS images will be updated over time as support is updated. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (1)  
    * [Enable Azure Monitor for VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Monitoring/AzureMonitor_VM.json)  
* [Saved-queries in Azure Monitor should be saved in customer storage account for logs encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalyticsWorkspaces_CMKBYOSQueryEnabled_Deny.json)  
  Link storage account to Log Analytics workspace to protect saved-queries with storage account encryption. Customer-managed keys are commonly required to meet regulatory compliance and for more control over the access to your saved-queries in Azure Monitor. For more details on the above, see https://docs.microsoft.com/azure/azure-monitor/platform/customer-managed-keys?tabs=portal#customer-managed-key-for-saved-queries. 
  * Resource Types 
    * `Microsoft.OperationalInsights/workspaces` 
* [[Preview]: Audit Log Analytics Agent Deployment - VM Image (OS) unlisted](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogAnalytics_OSImage_Audit.json)  
  Reports VMs as non-compliant if the VM Image (OS) is not in the list defined and the agent is not installed. The list of OS images will be updated over time as support is updated. 
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
  Reports virtual machine scale sets as non-compliant if the VM Image (OS) is not in the list defined and the agent is not installed. The list of OS images will be updated over time as support is updated. 
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
  Reports VMs as non-compliant if they aren't logging to the Log Analytics workspace specified in the policy/initiative assignment. 
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
  Deploys the diagnostic settings for Logic Apps to stream to a regional Event Hub when any Logic Apps which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.Logic/workflows` 
* [Deploy Diagnostic Settings for Logic Apps to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/LogicApps_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  Deploys the diagnostic settings for Logic Apps to stream to a regional Log Analytics workspace when any Logic Apps which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.Logic/workflows` 
* [Azure subscriptions should have a log profile for Activity Log](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Logprofile_activityLogs_Audit.json)  
  This policy ensures if a log profile is enabled for exporting activity logs. It audits if there is no log profile created to export the logs either to a storage account or to an event hub. 
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Deploy - Configure diagnostic settings to a Log Analytics workspace to be enabled on Azure Key Vault Managed HSM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ManagedHsm_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  Deploys the diagnostic settings for Azure Key Vault Managed HSM to stream to a regional Log Analytics workspace when any Azure Key Vault Managed HSM which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.KeyVault/managedHsms` 
* [Deploy Diagnostic Settings for Search Services to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Search_DeployDiagnosticLog_Deploy_EventHub.json)  
  Deploys the diagnostic settings for Search Services to stream to a regional Event Hub when any Search Services which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.Search/searchServices` 
* [Deploy Diagnostic Settings for Search Services to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Search_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  Deploys the diagnostic settings for Search Services to stream to a regional Log Analytics workspace when any Search Services which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.Search/searchServices` 
* [Azure Monitor solution 'Security and Audit' must be deployed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Security_Audit_MustBeDeployed.json)  
  This policy ensures that Security and Audit is deployed. 
  * Resource Types 
    * `Microsoft.Resources/subscriptions` 
* [Deploy Diagnostic Settings for Service Bus to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ServiceBus_DeployDiagnosticLog_Deploy_EventHub.json)  
  Deploys the diagnostic settings for Service Bus to stream to a regional Event Hub when any Service Bus which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.ServiceBus/namespaces` 
* [Deploy Diagnostic Settings for Service Bus to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/ServiceBus_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  Deploys the diagnostic settings for Service Bus to stream to a regional Log Analytics workspace when any Service Bus which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.ServiceBus/namespaces` 
* [Deploy Diagnostic Settings for Stream Analytics to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/StreamAnalytics_DeployDiagnosticLog_Deploy_EventHub.json)  
  Deploys the diagnostic settings for Stream Analytics to stream to a regional Event Hub when any Stream Analytics which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.StreamAnalytics/streamingjobs` 
* [Deploy Diagnostic Settings for Stream Analytics to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/StreamAnalytics_DeployDiagnosticLog_Deploy_LogAnalytics.json)  
  Deploys the diagnostic settings for Stream Analytics to stream to a regional Log Analytics workspace when any Stream Analytics which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.StreamAnalytics/streamingjobs` 
* [The Log Analytics agent should be installed on Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/VMSS_LogAnalyticsAgent_AuditIfNotExists.json)  
  This policy audits any Windows/Linux Virtual Machine Scale Sets if the Log Analytics agent is not installed. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [The Log Analytics agent should be installed on virtual machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/VirtualMachines_LogAnalyticsAgent_AuditIfNotExists.json)  
  This policy audits any Windows/Linux virtual machines if the Log Analytics agent is not installed. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Workbooks should be saved to storage accounts that you control](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Monitoring/Workbooks_BYOSEnabled_Audit.json)  
  With bring your own storage (BYOS), your workbooks are uploaded into a storage account that you control. That means you control the encryption-at-rest policy, the lifetime management policy, and network access. You will, however, be responsible for the costs associated with that storage account. For more information, visit https://aka.ms/workbooksByos 
  * Resource Types 
    * `microsoft.insights/workbooks` 
