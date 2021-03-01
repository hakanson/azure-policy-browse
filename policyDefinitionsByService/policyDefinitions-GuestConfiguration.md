# Azure Policy Definitions - Guest Configuration

* [Add system-assigned managed identity to enable Guest Configuration assignments on virtual machines with no identities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AddSystemIdentityWhenNone_Prerequisite.json)  
  This policy adds a system-assigned managed identity to virtual machines hosted in Azure that are supported by Guest Configuration but do not have any managed identities. A system-assigned managed identity is a prerequisite for all Guest Configuration assignments and must be added to machines before using any Guest Configuration policy definitions. For more information on Guest Configuration, visit https://aka.ms/gcpol. 
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
  This policy adds a system-assigned managed identity to virtual machines hosted in Azure that are supported by Guest Configuration and have at least one user-assigned identity but do not have a system-assigned managed identity. A system-assigned managed identity is a prerequisite for all Guest Configuration assignments and must be added to machines before using any Guest Configuration policy definitions. For more information on Guest Configuration, visit https://aka.ms/gcpol. 
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
  Windows machines should have the specified Group Policy settings in the category 'Administrative Templates - Control Panel' for input personalization and prevention of enabling lock screens. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Administrative Templates - Control Panel'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesControlPanel_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Administrative Templates - Control Panel'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Administrative Templates - Control Panel'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesControlPanel_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Administrative Templates - Control Panel'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Administrative Templates - MSS (Legacy)'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesMSSLegacy_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Administrative Templates - MSS (Legacy)' for automatic logon, screen saver, network behavior, safe DLL, and event log. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Windows machines should meet requirements for 'Administrative Templates - Network'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesNetwork_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Administrative Templates - Network' for guest logons, simultaneous connections, network bridge, ICS, and multicast name resolution. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Show audit results from Windows VMs configurations in 'Administrative Templates - Network'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesNetwork_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Administrative Templates - Network'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Administrative Templates - Network'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesNetwork_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Administrative Templates - Network'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Administrative Templates - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesSystem_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Administrative Templates - System' for settings that control the administrative experience and Remote Assistance. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Administrative Templates - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesSystem_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Administrative Templates - System'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Administrative Templates - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministrativeTemplatesSystem_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Administrative Templates - System'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Audit Windows machines that have the specified members in the Administrators group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToExclude_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the local Administrators group contains one or more of the members listed in the policy parameter. 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines in which the Administrators group contains any of the specified members. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group contains any of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToExclude.json)  
* [Deploy prerequisites to audit Windows VMs if the Administrators group contains any of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToExclude_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines in which the Administrators group contains any of the specified members. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group contains any of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToExclude.json)  
* [Audit Windows machines missing any of specified members in the Administrators group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToInclude_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the local Administrators group does not contain one or more members that are listed in the policy parameter. 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines in which the Administrators group does not contain all of the specified members. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group does not contain all of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToInclude.json)  
* [Deploy prerequisites to audit Windows VMs if the Administrators group doesn't contain all the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToInclude_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines in which the Administrators group does not contain all of the specified members. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group does not contain all of the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembersToInclude.json)  
* [Audit Windows machines that have extra accounts in the Administrators group](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembers_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the local Administrators group contains members that are not listed in the policy parameter. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Show audit results from Windows VMs if the Administrators group doesn't contain only specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembers_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines in which the Administrators group does not contain only the specified members. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group does not contain only the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembers.json)  
* [Deploy prerequisites to audit Windows VMs if the Administrators group doesn't contain only specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembers_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines in which the Administrators group does not contain only the specified members. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs in which the Administrators group does not contain only the specified members](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AdministratorsGroupMembers.json)  
* [Show audit results from Windows VMs configurations in 'Administrative Templates - MSS (Legacy)'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdminstrativeTemplatesMSSLegacy_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Administrative Templates - MSS (Legacy)'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Administrative Templates - MSS (Legacy)'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AdminstrativeTemplatesMSSLegacy_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Administrative Templates - MSS (Legacy)'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Audit Linux virtual machines on which the Linux Guest Configuration extension is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AuditExtensionLinux_Prerequisite.json)  
  This policy audits Linux virtual machines hosted in Azure that are supported by Guest Configuration but do not have the Guest Configuration extension enabled. For more information on Guest Configuration, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Audit Windows virtual machines on which the Windows Guest Configuration extension is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AuditExtensionWindows_Prerequisite.json)  
  This policy audits Windows virtual machines hosted in Azure that are supported by Guest Configuration but do not have the Guest Configuration extension enabled. For more information on Guest Configuration, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Linux machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AzureLinuxBaseline_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if Linux machines should meet the requirements for the Azure security baseline 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Windows machines should meet requirements of the Azure Security Center baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_AzureWindowsBaseline_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the machine is not configured correctly for one of the recommendations in the Azure Security Center baseline. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Audit Windows machines that contain certificates expiring within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_CertificateExpiration_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if certificates in the specified store have an expiration date out of range for the number of days given as parameter. The policy also provides the option to only check for specific certificates or exclude specific certificates, and whether to report on expired certificates. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs that contain certificates expiring within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_CertificateExpiration_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that contain certificates expiring within the specified number of days. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that contain certificates expiring within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_CertificateExpiration.json)  
* [Deploy prerequisites to audit Windows VMs that contain certificates expiring within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_CertificateExpiration_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that contain certificates expiring within the specified number of days. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that contain certificates expiring within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_CertificateExpiration.json)  
* [Deploy the Linux Guest Configuration extension to enable Guest Configuration assignments on Linux VMs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_DeployExtensionLinux_Prerequisite.json)  
  This policy deploys the Linux Guest Configuration extension to Linux virtual machines hosted in Azure that are supported by Guest Configuration. The Linux Guest Configuration extension is a prerequisite for all Linux Guest Configuration assignments and must deployed to machines before using any Linux Guest Configuration policy definition. For more information on Guest Configuration, visit https://aka.ms/gcpol. 
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
  This policy deploys the Windows Guest Configuration extension to Windows virtual machines hosted in Azure that are supported by Guest Configuration. The Windows Guest Configuration extension is a prerequisite for all Windows Guest Configuration assignments and must deployed to machines before using any Windows Guest Configuration policy definition. For more information on Guest Configuration, visit https://aka.ms/gcpol. 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that do not have the specified applications installed. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApp.json)  
* [Deploy prerequisites to audit Windows VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApp_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that do not have the specified applications installed. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApp.json)  
* [Audit Linux machines that don't have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationForLinux_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the Chef InSpec resource indicates that one or more of the packages provided by the parameter are not installed. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Audit Windows machines that don't have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationForWindows_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the application name is not found in any of the following registry paths: HKLM:SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall, HKLM:SOFTWARE\Wow6432node\Microsoft\Windows\CurrentVersion\Uninstall, HKCU:Software\Microsoft\Windows\CurrentVersion\Uninstall. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Show audit results from Linux VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationLinux_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Linux virtual machines that do not have the specified applications installed. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Linux VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationLinux.json)  
* [Deploy prerequisites to audit Linux VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationLinux_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Linux virtual machines that do not have the specified applications installed. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Linux VMs that do not have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_InstalledApplicationLinux.json)  
* [Authentication to Linux machines should require SSH keys](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxNoPasswordForSSH_AINE.json)  
  Although SSH itself provides an encrypted connection, using passwords with SSH still leaves the VM vulnerable to brute-force attacks. The most secure option for authenticating to an Azure Linux virtual machine over SSH is with a public-private key pair, also known as SSH keys. Learn more: https://docs.microsoft.com/azure/virtual-machines/linux/create-ssh-keys-detailed. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Audit Linux machines that allow remote connections from accounts without passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword110_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if Linux machines that allow remote connections from accounts without passwords 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Linux virtual machines that allow remote connections from accounts without passwords. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Linux VMs that allow remote connections from accounts without passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword110_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Linux virtual machines that allow remote connections from accounts without passwords. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Linux machines that do not have the passwd file permissions set to 0644](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword121_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if Linux machines that do not have the passwd file permissions set to 0644 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Linux virtual machines that do not have the passwd file permissions set to 0644. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Linux VMs that do not have the passwd file permissions set to 0644](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword121_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Linux virtual machines that do not have the passwd file permissions set to 0644. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Linux machines that have accounts without passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword232_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if Linux machines that have accounts without passwords 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Linux virtual machines that have accounts without passwords. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Linux VMs that have accounts without passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_LinuxPassword232_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Linux virtual machines that have accounts without passwords. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that have not restarted within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_MachineLastBootUpTime_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the WMI property LastBootUpTime in class Win32_Operatingsystem is outside the range of days provided by the policy parameter. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs that have not restarted within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_MachineLastBootUpTime_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that have not restarted within the specified number of days. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that have not restarted within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_MachineLastBootUpTime.json)  
* [Deploy prerequisites to audit Windows VMs that have not restarted within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_MachineLastBootUpTime_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that have not restarted within the specified number of days. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that have not restarted within the specified number of days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_MachineLastBootUpTime.json)  
* [Show audit results from Windows VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApp_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that have the specified applications installed. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApp.json)  
* [Deploy prerequisites to audit Windows VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApp_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that have the specified applications installed. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApp.json)  
* [Audit Linux machines that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationForLinux_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the Chef InSpec resource indicates that one or more of the packages provided by the parameter are installed. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Audit Windows machines that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationForWindows_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the application name is found in any of the following registry paths: HKLM:SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall, HKLM:SOFTWARE\Wow6432node\Microsoft\Windows\CurrentVersion\Uninstall, HKCU:Software\Microsoft\Windows\CurrentVersion\Uninstall. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Linux VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationLinux_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Linux virtual machines that have the specified applications installed. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Linux VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationLinux.json)  
* [Deploy prerequisites to audit Linux VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationLinux_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Linux virtual machines that have the specified applications installed. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Linux VMs that have the specified applications installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_NotInstalledApplicationLinux.json)  
* [Deploy prerequisites to enable Guest Configuration Policy on Linux VMs.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_PrerequisitePolicyLinux_Deploy.json)  
  This policy creates a system-assigned managed identity and deploys the VM extension for Guest Configuration on Linux VMs. This is a prerequisite for Guest Configuration Policy and must be assigned to the scope before using any Guest Configuration policy. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Deploy prerequisites to enable Guest Configuration Policy on Windows VMs.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_PrerequisitePolicyWindows_Deploy.json)  
  This policy creates a system-assigned managed identity and deploys the VM extension for Guest Configuration on Windows VMs. This is a prerequisite for Guest Configuration Policy and must be assigned to the scope before using any Guest Configuration policy. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Windows web servers should be configured to use secure communication protocols](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecureWebProtocol_AINE.json)  
  To protect the privacy of information communicated over the Internet, your web servers should use the latest version of the industry-standard cryptographic protocol, Transport Layer Security (TLS). TLS secures communications over a network by using security certificates to encrypt a connection between machines. TLS 1.3 is faster and more secure than the earlier versions: TLS 1.0-1.2 and SSL 2-3, which are all considered legacy protocols. 
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
  Windows machines should have the specified Group Policy settings in the category 'Security Options - Accounts' for limiting local account use of blank passwords and guest account status. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Accounts'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsAccounts_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Accounts'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Accounts'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsAccounts_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Accounts'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Audit'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsAudit_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - Audit' for forcing audit policy subcategory and shutting down if unable to log security audits. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Audit'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsAudit_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Audit'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Audit'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsAudit_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Audit'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Devices'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsDevices_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - Devices' for undocking without logging on, installing print drivers, and formatting/ejecting media. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Devices'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsDevices_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Devices'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Devices'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsDevices_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Devices'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Interactive Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsInteractiveLogon_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - Interactive Logon' for displaying last user name and requiring ctrl-alt-del. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Interactive Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsInteractiveLogon_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Interactive Logon'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Interactive Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsInteractiveLogon_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Interactive Logon'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Microsoft Network Client'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkClient_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - Microsoft Network Client' for Microsoft network client/server and SMB v1. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Microsoft Network Client'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkClient_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Microsoft Network Client'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Microsoft Network Client'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkClient_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Microsoft Network Client'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Microsoft Network Server'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkServer_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - Microsoft Network Server' for disabling SMB v1 server. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Microsoft Network Server'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkServer_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Microsoft Network Server'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Microsoft Network Server'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsMicrosoftNetworkServer_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Microsoft Network Server'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Network Access'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsNetworkAccess_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - Network Access' for including access for anonymous users, local accounts, and remote access to the registry. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Network Access'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Network Access'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsNetworkAccess_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Network Access'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Network Security'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsNetworkSecurity_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - Network Security' for including Local System behavior, PKU2U, LAN Manager, LDAP client, and NTLM SSP. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (4)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Network Security'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsNetworkSecurity_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Network Security'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Network Security'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsNetworkSecurity_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Network Security'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Recovery console'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsRecoveryconsole_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - Recovery console' for allowing floppy copy and access to all drives and folders. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Recovery console'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsRecoveryconsole_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Recovery console'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Recovery console'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsRecoveryconsole_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Recovery console'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - Shutdown'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsShutdown_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - Shutdown' for allowing shutdown without logon and clearing the virtual memory pagefile. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - Shutdown'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsShutdown_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Shutdown'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - Shutdown'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsShutdown_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - Shutdown'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - System objects'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemobjects_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - System objects' for case insensitivity for non-Windows subsystems and permissions of internal system objects. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - System objects'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemobjects_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - System objects'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - System objects'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemobjects_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - System objects'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - System settings'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemsettings_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - System settings' for certificate rules on executables for SRP and optional subsystems. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - System settings'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemsettings_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - System settings'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - System settings'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsSystemsettings_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - System settings'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Options - User Account Control'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsUserAccountControl_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Options - User Account Control' for mode for admins, behavior of elevation prompt, and virtualizing file and registry write failures. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Show audit results from Windows VMs configurations in 'Security Options - User Account Control'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsUserAccountControl_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - User Account Control'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Options - User Account Control'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecurityOptionsUserAccountControl_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Options - User Account Control'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'Security Settings - Account Policies'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecuritySettingsAccountPolicies_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Security Settings - Account Policies' for password history, age, length, complexity, and storing passwords using reversible encryption. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Show audit results from Windows VMs configurations in 'Security Settings - Account Policies'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecuritySettingsAccountPolicies_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Security Settings - Account Policies'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Security Settings - Account Policies'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SecuritySettingsAccountPolicies_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Security Settings - Account Policies'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Configure time zone on Windows machines.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SetWindowsTimeZone_Deploy.json)  
  This policy creates a Guest Configuration assignment to set specified time zone on Windows virtual machines. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Windows machines should meet requirements for 'System Audit Policies - Account Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountLogon_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'System Audit Policies - Account Logon' for auditing credential validation and other account logon events. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Account Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountLogon_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Account Logon'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Account Logon'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountLogon_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Account Logon'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Account Management'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountManagement_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'System Audit Policies - Account Management' for auditing application, security, and user group management, and other management events. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Account Management'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountManagement_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Account Management'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Account Management'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesAccountManagement_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Account Management'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Detailed Tracking'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesDetailedTracking_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'System Audit Policies - Detailed Tracking' for auditing DPAPI, process creation/termination, RPC events, and PNP activity. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Detailed Tracking'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesDetailedTracking_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Detailed Tracking'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Detailed Tracking'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesDetailedTracking_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Detailed Tracking'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Logon-Logoff'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesLogonLogoff_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'System Audit Policies - Logon-Logoff' for auditing IPSec, network policy, claims, account lockout, group membership, and logon/logoff events. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Logon-Logoff'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesLogonLogoff_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Logon-Logoff'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Logon-Logoff'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesLogonLogoff_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Logon-Logoff'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Object Access'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesObjectAccess_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'System Audit Policies - Object Access' for auditing file, registry, SAM, storage, filtering, kernel, and other system types. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Object Access'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesObjectAccess_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Object Access'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Object Access'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesObjectAccess_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Object Access'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Policy Change'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPolicyChange_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'System Audit Policies - Policy Change' for auditing changes to system audit policies. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Policy Change'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPolicyChange_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Policy Change'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Policy Change'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPolicyChange_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Policy Change'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - Privilege Use'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPrivilegeUse_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'System Audit Policies - Privilege Use' for auditing nonsensitive and other privilege use. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - Privilege Use'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPrivilegeUse_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Privilege Use'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - Privilege Use'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesPrivilegeUse_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - Privilege Use'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'System Audit Policies - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesSystem_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'System Audit Policies - System' for auditing IPsec driver, system integrity, system extension, state change, and other system events. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'System Audit Policies - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesSystem_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - System'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'System Audit Policies - System'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_SystemAuditPoliciesSystem_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'System Audit Policies - System'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows machines should meet requirements for 'User Rights Assignment'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_UserRightsAssignment_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'User Rights Assignment' for allowing log on locally, RDP, access from the network, and many other user activities. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (4)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'User Rights Assignment'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_UserRightsAssignment_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'User Rights Assignment'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'User Rights Assignment'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_UserRightsAssignment_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'User Rights Assignment'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Audit Windows machines that do not contain the specified certificates in Trusted Root](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsCertificateInTrustedRoot_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the machine Trusted Root certificate store (Cert:\LocalMachine\Root) does not contain one or more of the certificates listed by the policy parameter. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (2)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs that do not contain the specified certificates in Trusted Root](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsCertificateInTrustedRoot_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows VMs that do not contain the specified certificates in the Trusted Root Certification Authorities certificate store (Cert:\LocalMachine\Root). For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not contain the specified certificates in Trusted Root](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsCertificateInTrustedRoot.json)  
* [Deploy prerequisites to audit Windows VMs that do not contain the specified certificates in Trusted Root](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsCertificateInTrustedRoot_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows VMs that do not contain the specified certificates in the Trusted Root Certification Authorities certificate store (Cert:\LocalMachine\Root). It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not contain the specified certificates in Trusted Root](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsCertificateInTrustedRoot.json)  
* [Windows machines should meet requirements for 'Windows Components'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsComponents_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Windows Components' for basic authentication, unencrypted traffic, Microsoft accounts, telemetry, Cortana, and other Windows behaviors. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
* [Show audit results from Windows VMs configurations in 'Windows Components'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsComponents_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Windows Components'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Windows Components'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsComponents_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Windows Components'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Windows Defender Exploit Guard should be enabled on your machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDefenderExploitGuard_AINE.json)  
  Windows Defender Exploit Guard uses the Azure Policy Guest Configuration agent. Exploit Guard has four components that are designed to lock down devices against a wide variety of attack vectors and block behaviors commonly used in malware attacks while enabling enterprises to balance their security risk and productivity requirements (Windows only). 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Show audit results from Windows VMs on which Windows Defender Exploit Guard is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDefenderExploitGuard_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines on which Windows Defender Exploit Guard is not enabled. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which Windows Defender Exploit Guard is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDefenderExploitGuard.json)  
* [Deploy prerequisites to audit Windows VMs on which Windows Defender Exploit Guard is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDefenderExploitGuard_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines on which Windows Defender Exploit Guard is not enabled. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which Windows Defender Exploit Guard is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDefenderExploitGuard.json)  
* [Audit Windows machines that are not joined to the specified domain](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDomainMembership_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the value of the Domain property in WMI class win32_computersystem does not match the value in the policy parameter. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
* [Show audit results from Windows VMs that are not joined to the specified domain](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDomainMembership_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that are not joined to the specified domain. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that are not joined to the specified domain](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDomainMembership.json)  
* [Deploy prerequisites to audit Windows VMs that are not joined to the specified domain](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDomainMembership_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that are not joined to the specified domain. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that are not joined to the specified domain](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDomainMembership.json)  
* [Audit Windows machines on which the DSC configuration is not compliant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDscConfiguration_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the Windows PowerShell command Get-DSCConfigurationStatus returns that the DSC configuration for the machine is not compliant. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs on which the DSC configuration is not compliant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDscConfiguration_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows VMs on which the Desired State Configuration (DSC) configuration is not compliant. This policy is only applicable to machines with WMF 4 and above. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the DSC configuration is not compliant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDscConfiguration.json)  
* [Deploy prerequisites to audit Windows VMs on which the DSC configuration is not compliant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDscConfiguration_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows VMs on which the Desired State Configuration (DSC) configuration is not compliant. This policy is only applicable to machines with WMF 4 and above. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the DSC configuration is not compliant](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsDscConfiguration.json)  
* [Windows machines should meet requirements for 'Windows Firewall Properties'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsFirewallProperties_AINE.json)  
  Windows machines should have the specified Group Policy settings in the category 'Windows Firewall Properties' for firewall state, connections, rule management, and notifications. This policy requires that the Guest Configuration prerequisites have been deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [Windows machines should meet requirements for the Azure security baseline](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
* [Show audit results from Windows VMs configurations in 'Windows Firewall Properties'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsFirewallProperties_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with non-compliant settings in Group Policy category: 'Windows Firewall Properties'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Deploy prerequisites to audit Windows VMs configurations in 'Windows Firewall Properties'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsFirewallProperties_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with non-compliant settings in Group Policy category: 'Windows Firewall Properties'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not match Azure security baseline settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_AzureBaseline_Deprecated.json)  
* [Audit Windows machines on which the Log Analytics agent is not connected as expected](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsLogAnalyticsAgentConnection_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the agent is not installed, or if it is installed but the COM object AgentConfigManager.MgmtSvcCfg returns that it is registered to a workspace other than the ID specified in the policy parameter. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (3)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Show audit results from Windows VMs on which the Log Analytics agent is not connected as expected](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsLogAnalyticsAgentConnection_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines on which the Log Analytics agent is not connected to the specified workspaces. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the Log Analytics agent is not connected as expected](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsLogAnalyticsAgentConnection.json)  
* [Deploy prerequisites to audit Windows VMs on which the Log Analytics agent is not connected as expected](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsLogAnalyticsAgentConnection_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines on which the Log Analytics agent is not connected to the specified workspaces. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the Log Analytics agent is not connected as expected](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsLogAnalyticsAgentConnection.json)  
* [Audit Windows machines that do not have a maximum password age of 70 days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsMaximumPassword_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if Windows machines that do not have a maximum password age of 70 days 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that do not have a maximum password age of 70 days. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that do not have a maximum password age of 70 days](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsMaximumPassword_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that do not have a maximum password age of 70 days. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that do not have a minimum password age of 1 day](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsMinimumPassword_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if Windows machines that do not have a minimum password age of 1 day 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that do not have a minimum password age of 1 day. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that do not have a minimum password age of 1 day](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsMinimumPassword_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that do not have a minimum password age of 1 day. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that do not have the password complexity setting enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordComplexity_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if Windows machines that do not have the password complexity setting enabled 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that do not have the password complexity setting enabled. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that do not have the password complexity setting enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordComplexity_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that do not have the password complexity setting enabled. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that do not store passwords using reversible encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordEncryption_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if Windows machines that do not store passwords using reversible encryption 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that do not store passwords using reversible encryption. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that do not store passwords using reversible encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordEncryption_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that do not store passwords using reversible encryption. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that allow re-use of the previous 24 passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordEnforce_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if Windows machines that allow re-use of the previous 24 passwords 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that allow re-use of the previous 24 passwords. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that allow re-use of the previous 24 passwords](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordEnforce_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that allow re-use of the previous 24 passwords. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows machines that do not restrict the minimum password length to 14 characters](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordLength_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if Windows machines that do not restrict the minimum password length to 14 characters 
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
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that do not restrict the minimum password length to 14 characters. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Deploy prerequisites to audit Windows VMs that do not restrict the minimum password length to 14 characters](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordLength_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that do not restrict the minimum password length to 14 characters. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit VMs with insecure password security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPasswordSettings.json)  
* [Audit Windows VMs with a pending reboot](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPendingReboot_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the machine is pending reboot for any of the following reasons: component based servicing, Windows Update, pending file rename, pending computer rename, configuration manager pending reboot. Each detection has a unique registry path. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs with a pending reboot](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPendingReboot_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines with a pending reboot. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs with a pending reboot](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPendingReboot.json)  
* [Deploy prerequisites to audit Windows VMs with a pending reboot](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPendingReboot_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines with a pending reboot. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs with a pending reboot](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPendingReboot.json)  
* [Audit Windows machines that do not have the specified Windows PowerShell execution policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellExecutionPolicy_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if  the Windows PowerShell command Get-ExecutionPolicy returns a value other than what was selected in the policy parameter. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs that do not have the specified Windows PowerShell execution policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellExecutionPolicy_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines where Windows PowerShell is not configured to use the specified PowerShell execution policy. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified Windows PowerShell execution policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellExecutionPolicy.json)  
* [Deploy prerequisites to audit Windows VMs that do not have the specified Windows PowerShell execution policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellExecutionPolicy_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines where Windows PowerShell is not configured to use the specified PowerShell execution policy. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified Windows PowerShell execution policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellExecutionPolicy.json)  
* [Audit Windows machines that do not have the specified Windows PowerShell modules installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellModules_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if a module isn't available in a location specified by the environment variable PSModulePath. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs that do not have the specified Windows PowerShell modules installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellModules_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that do not have the specified Windows PowerShell modules installed. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified Windows PowerShell modules installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellModules.json)  
* [Deploy prerequisites to audit Windows VMs that do not have the specified Windows PowerShell modules installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellModules_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that do not have the specified Windows PowerShell modules installed. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that do not have the specified Windows PowerShell modules installed](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsPowerShellModules.json)  
* [Audit Windows machines network connectivity](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsRemoteConnection_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if a network connection status to an IP and TCP port does not match the policy parameter. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs on which the remote connection status does not match the specified one](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsRemoteConnection_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines on which the remote host connection status does not match the specified one. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the remote host connection status does not match the specified one](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsRemoteConnection.json)  
* [Deploy prerequisites to audit Windows VMs on which the remote connection status does not match the specified one](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsRemoteConnection_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines on which the remote host connection status does not match the specified one. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the remote host connection status does not match the specified one](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsRemoteConnection.json)  
* [Audit Windows machines on which Windows Serial Console is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsSerialConsole_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the machine does not have the Serial Console software installed or if the EMS port number or baud rate are not configured with the same values as the policy parameters. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows Server VMs on which Windows Serial Console is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsSerialConsole_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows Server virtual machines on which Windows Serial Console is not enabled. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows Server VMs on which Windows Serial Console is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsSerialConsole.json)  
* [Deploy prerequisites to audit Windows Server VMs on which Windows Serial Console is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsSerialConsole_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows Server virtual machines on which Windows Serial Console is not enabled. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows Server VMs on which Windows Serial Console is not enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsSerialConsole.json)  
* [Audit Windows machines on which the specified services are not installed and 'Running'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsServiceStatus_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if result of the Windows PowerShell command Get-Service do not include the service name with matching status as specified by the policy parameter. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs on which the specified services are not installed and 'Running'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsServiceStatus_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines on which the specified services are not installed and 'Running'. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the specified services are not installed and 'Running'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsServiceStatus.json)  
* [Deploy prerequisites to audit Windows VMs on which the specified services are not installed and 'Running'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsServiceStatus_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines on which the specified services are not installed and 'Running'. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs on which the specified services are not installed and 'Running'](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsServiceStatus.json)  
* [Show audit results from Windows web servers that are not using secure communication protocols](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTLS_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows web servers that are not using secure communication protocols (TLS 1.1 or TLS 1.2). For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows web servers that are not using secure communication protocols](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_TLS.json)  
* [Deploy prerequisites to audit Windows web servers that are not using secure communication protocols](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTLS_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows web servers that are not using secure communication protocols (TLS 1.1 or TLS 1.2). It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows web servers that are not using secure communication protocols](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_TLS.json)  
* [Audit Windows machines that are not set to the specified time zone](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTimeZone_AINE.json)  
  Requires that prerequisites are deployed to the policy assignment scope. For details, visit https://aka.ms/gcpol. Machines are non-compliant if the value of the property StandardName in WMI class Win32_TimeZone does not match the selected time zone for the policy parameter. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
* [Show audit results from Windows VMs that are not set to the specified time zone](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTimeZone_Audit.json)  
  This policy should only be used along with its corresponding deploy policy in an initiative. This definition allows Azure Policy to process the results of auditing Windows virtual machines that are not set to the specified time zone. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that are not set to the specified time zone](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTimeZone.json)  
* [Deploy prerequisites to audit Windows VMs that are not set to the specified time zone](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTimeZone_Deploy.json)  
  This policy creates a Guest Configuration assignment to audit Windows virtual machines that are not set to the specified time zone. It also creates a system-assigned managed identity and deploys the VM extension for Guest Configuration. This policy should only be used along with its corresponding audit policy in an initiative. For more information on Guest Configuration policies, please visit https://aka.ms/gcpol 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
    * `Microsoft.HybridCompute/machines` 
  * Policy Set Definitions (1)  
    * [Audit Windows VMs that are not set to the specified time zone](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Guest%20Configuration/GuestConfiguration_WindowsTimeZone.json)  
