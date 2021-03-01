# Azure Policy Definitions - Backup

* [Deploy Diagnostic Settings for Recovery Services Vault to Log Analytics workspace for resource specific categories.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/EnableRecoveryServiceVaultDiagnosticSetting_Backup_DeployIfNotExist.json)  
  Deploy Diagnostic Settings for Recovery Services Vault to stream to Log Analytics workspace for Resource specific categories. If any of the Resource specific categories are not enabled, a new diagnostic setting is created. 
  * Resource Types 
    * `Microsoft.RecoveryServices/vaults` 
* [Configure backup on VMs without a given tag to a new recovery services vault with a default policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/VirtualMachineApplicationCentricBackup_Backup_Deploy_WithOutTag.json)  
  Enforce backup for all virtual machines by deploying a recovery services vault in the same location and resource group as the virtual machine. Doing this is useful when different application teams in your organization are allocated separate resource groups and need to manage their own backups and restores. You can optionally exclude virtual machines containing a specified tag to control the scope of assignment. See https://aka.ms/AzureVMAppCentricBackupExcludeTag 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Configure backup on VMs with a given tag to a new recovery services vault with a default policy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/VirtualMachineApplicationCentricBackup_Backup_Deploy_WithTag.json)  
  Enforce backup for all virtual machines by deploying a recovery services vault in the same location and resource group as the virtual machine. Doing this is useful when different application teams in your organization are allocated separate resource groups and need to manage their own backups and restores. You can optionally include virtual machines containing a specified tag to control the scope of assignment. See https://aka.ms/AzureVMAppCentricBackupIncludeTag 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Configure backup on VMs without a given tag to an existing recovery services vault in the same location](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/VirtualMachineBackup_Backup_DeployIfNotExists.json)  
  Enforce backup for all virtual machines by backing them up to an existing central recovery services vault in the same location and subscription as the virtual machine. Doing this is useful when there is a central team in your organization managing backups for all resources in a subscription. You can optionally exclude virtual machines containing a specified tag to control the scope of assignment. See https://aka.ms/AzureVMCentralBackupExcludeTag 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Configure backup on VMs with a given tag to an existing recovery services vault in the same location](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/VirtualMachineWithTag_Backup_Deploy.json)  
  Enforce backup for all virtual machines by backing them up to an existing central recovery services vault in the same location and subscription as the virtual machine. Doing this is useful when there is a central team in your organization managing backups for all resources in a subscription. You can optionally include virtual machines containing a specified tag to control the scope of assignment. See https://aka.ms/AzureVMCentralBackupIncludeTag 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
* [Azure Backup should be enabled for Virtual Machines](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Backup/VirtualMachines_EnableAzureBackup_Audit.json)  
  Ensure protection of your Azure Virtual Machines by enabling Azure Backup. Azure Backup is a secure and cost effective data protection solution for Azure. 
  * Resource Types 
    * `Microsoft.Compute/virtualMachines` 
  * Policy Set Definitions (5)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
