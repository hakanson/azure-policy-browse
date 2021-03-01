# Azure Policy Definitions - Compute

* [Deploy - Configure disaster recovery on virtual machines by enabling replication](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/AzureSiteRecovery-Replication-Policy.json)  
  Virtual machines without disaster recovery configurations are vulnerable to outages and other disruptions. If the virtual machine does not already have disaster recovery configured, this would initiate the same by enabling replication using preset configurations to facilitate business continuity. To learn more about disaster recovery, visit https://aka.ms/asr-doc. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Virtual machines should be migrated to new Azure Resource Manager resources](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/ClassicCompute_Audit.json)  
  Use new Azure Resource Manager for your virtual machines to provide security enhancements such as: stronger access control (RBAC), better auditing, Azure Resource Manager based deployment and governance, access to managed identities, access to key vault for secrets, Azure AD-based authentication and support for tags and resource groups for easier security management 
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
  Audit virtual machines which do not have disaster recovery configured. To learn more about disaster recovery, visit https://aka.ms/asr-doc. 
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
  It is recommended to enable Logs so that activity trail can be recreated when investigations are required in the event of an incident or a compromise. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Unattached disks should be encrypted](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/UnattachedDisk_Encryption_Audit.json)  
  This policy audits any unattached disk without encryption enabled. 
  * Resource Types 
    * `Microsoft.Compute/disks` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Deploy default Microsoft IaaSAntimalware extension for Windows Server](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VMAntimalwareExtension_Deploy.json)  
  This policy deploys a Microsoft IaaSAntimalware extension with a default configuration when a VM is not configured with the antimalware extension. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Deploy default Log Analytics Agent for Ubuntu VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VMOMSExtensionUbuntu_Deploy.json)  
  This policy deploys the Log Analytics Agent on Ubuntu VMs, and connects to the selected Log Analytics workspace 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Audit VMs that do not use managed disks](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VMRequireManagedDisk_Audit.json)  
  This policy audits VMs that do not use managed disks 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.Compute/VirtualMachineScaleSets` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
* [Require automatic OS image patching on Virtual Machine Scale Sets](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VMSSOSUpgradeHealthCheck_Deny.json)  
  This policy enforces enabling automatic OS image patching on Virtual Machine Scale Sets to always keep Virtual Machines secure by safely applying latest security patches every month. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachineScaleSets` 
* [Allowed virtual machine size SKUs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VMSkusAllowed_Deny.json)  
  This policy enables you to specify a set of virtual machine size SKUs that your organization can deploy. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Microsoft Antimalware for Azure should be configured to automatically update protection signatures](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VirtualMachines_AntiMalwareAutoUpdate_AuditIfNotExists.json)  
  This policy audits any Windows virtual machine not configured with automatic update of Microsoft Antimalware protection signatures. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Only approved VM extensions should be installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/VirtualMachines_ApprovedExtensions_Audit.json)  
  This policy governs the virtual machine extensions that are not approved. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines/extensions` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Microsoft IaaSAntimalware extension should be deployed on Windows servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Compute/WindowsServers_AntiMalware_AuditIfNotExists.json)  
  This policy audits any Windows server VM without Microsoft IaaSAntimalware extension deployed. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
