# Azure Policy Definitions - Kubernetes

* [Azure Policy Add-on for Kubernetes service (AKS) should be installed and enabled on your clusters](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AKS_AzurePolicyAddOn_Audit.json)  
  Azure Policy Add-on for Kubernetes service (AKS) extends Gatekeeper v3, an admission controller webhook for Open Policy Agent (OPA), to apply at-scale enforcements and safeguards on your clusters in a centralized, consistent manner. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy Azure Policy Add-on to Azure Kubernetes Service clusters](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AKS_AzurePolicyAddOn_Deploy.json)  
  Use Azure Policy Add-on to manage and report on the compliance state of your Azure Kubernetes Service (AKS) clusters. For more information, see https://aka.ms/akspolicydoc. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Both operating systems and data disks in Azure Kubernetes Service clusters should be encrypted by customer-managed keys](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AKS_CMK_Deny.json)  
  Encrypting OS and data disks using customer-managed keys provides more control and greater flexibility in key management. This is a common requirement in many regulatory and industry compliance standards. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Temp disks and cache for agent node pools in Azure Kubernetes Service clusters should be encrypted at host](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AKS_EncryptionAtHost_Deny.json)  
  To enhance data security, the data stored on the virtual machine (VM) host of your Azure Kubernetes Service nodes VMs should be encrypted at rest. This is a common requirement in many regulatory and industry compliance standards. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster services should only use allowed external IPs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedExternalIPs.json)  
  Use allowed external IPs to avoid the potential attack(CVE-2020-8554) in a Kubernetes cluster. For more information, see https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster pod hostPath volumes should only use allowed host paths](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedHostPaths.json)  
  This policy ensures pod hostPath volumes can only use allowed host paths in a Kubernetes Cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (3)  
    * [Kubernetes cluster pod security baseline standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPBaselineStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes cluster containers should only use allowed ProcMountType](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedProcMountType.json)  
  This policy ensures containers only use allowed ProcMountType in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
* [Kubernetes cluster containers should only use allowed seccomp profiles](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedSeccompProfile.json)  
  This policy ensures containers only use allowed seccomp profiles in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (1)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
* [Kubernetes cluster pods and containers should only run with approved user and group IDs](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedUsersGroups.json)  
  This policy controls the user, primary group, supplemental group and file system group IDs that pods and containers can use to run in a Kubernetes Cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (3)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes cluster pods should only use allowed volume types](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/AllowedVolumeTypes.json)  
  This policy ensures pods can only use allowed volume types in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (1)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
* [Kubernetes clusters should disable automounting API credentials](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/BlockAutomountToken.json)  
  Disable automounting API credentials to prevent a potentially compromised Pod resource to run API commands against Kubernetes clusters. For instructions on using this policy, please go to https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes clusters should not use the default namespace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/BlockDefaultNamespace.json)  
  Prevent usage of the default namespace in Kubernetes clusters to protect against unauthorized access for ConfigMap, Pod, Secret, Service, and ServiceAccount resource types. For instructions on using this policy, please go to https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster containers should not share host process ID or host IPC namespace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/BlockHostNamespace.json)  
  This policy blocks pod containers from sharing the host process ID namespace and host IPC namespace in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc/. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (4)  
    * [Kubernetes cluster pod security baseline standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPBaselineStandard.json)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes cluster containers should only use allowed capabilities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerAllowedCapabilities.json)  
  This policy ensures containers only use allowed capabilities in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (4)  
    * [Kubernetes cluster pod security baseline standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPBaselineStandard.json)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure only allowed container images in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerAllowedImages.json)  
  This policy ensures only allowed container images are running in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure containers listen only on allowed ports in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerAllowedPorts.json)  
  This policy enforces containers to listen only on allowed ports in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes clusters should not use specific security capabilities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerDisallowedCapabilities.json)  
  Prevent specific security capabilities in Kubernetes clusters to prevent ungranted privileges on the Pod resource. For instructions on using this policy, please visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes clusters should not grant CAP_SYS_ADMIN security capabilities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerDisallowedSysAdminCapability.json)  
  To reduce the attack surface of your containers, restrict CAP_SYS_ADMIN Linux capabilities 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Do not allow privileged containers in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerNoPrivilege.json)  
  This policy does not allow privileged containers creation in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (4)  
    * [Kubernetes cluster pod security baseline standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPBaselineStandard.json)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes clusters should not allow container privilege escalation](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerNoPrivilegeEscalation.json)  
  This policy does not allow containers to use privilege escalation in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (3)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Ensure container CPU and memory resource limits do not exceed the specified limits in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ContainerResourceLimits.json)  
  This policy ensures container CPU and memory resource limits are defined and do not exceed the specified limits in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy GitOps to Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/Deploy-GitOps-to-Kubernetes-cluster_DINE.json)  
  This policy deploys a 'sourceControlConfiguration' to Kubernetes clusters to assure that the clusters get their source of truth from the defined git repo. For instructions on using this policy, visit https://aka.ms/K8sGitOpsPolicy. 
  * Resource Types 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster containers should only use allowed AppArmor profiles](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/EnforceAppArmorProfile.json)  
  This policy ensures containers only use allowed AppArmor profiles in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes cluster pod FlexVolume volumes should only use allowed drivers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/FlexVolumeDrivers.json)  
  This policy ensures pod FlexVolume volumes only use allowed drivers in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster containers should not use forbidden sysctl interfaces](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ForbiddenSysctlInterfaces.json)  
  This policy ensures containers do not use forbidden sysctl interfaces in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
* [Kubernetes cluster pods should only use approved host network and port range](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/HostNetworkPorts.json)  
  This policy controls pod access to the host network and the allowable host port range in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (5)  
    * [Kubernetes cluster pod security baseline standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPBaselineStandard.json)  
    * [Kubernetes cluster pod security restricted standards for Linux-based workloads](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Kubernetes/Kubernetes_PSPRestrictedStandard.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Enforce unique ingress hostnames across namespaces in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/IngressHostnamesConflict.json)  
  This policy enforces unique ingress hostnames across namespaces in a Kubernetes cluster. For instructions on using this policy, please go to https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
* [Kubernetes clusters should be accessible only over HTTPS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/IngressHttpsOnly.json)  
  Use of HTTPS ensures authentication and protects data in transit from network layer eavesdropping attacks. This capability is currently generally available for Kubernetes Service (AKS), and in preview for AKS Engine and Azure Arc enabled Kubernetes. For more info, visit https://aka.ms/kubepolicydoc 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Enforce internal load balancers in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/LoadbalancerNoPublicIPs.json)  
  This policy enforces load balancers do not have public IPs in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Enforce labels on pods in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/PodEnforceLabels.json)  
  This policy enforces the specified labels are provided for pods in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
* [Kubernetes cluster containers should run with a read only root file system](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ReadOnlyRootFileSystem.json)  
  This policy ensures containers run with a read only root file system in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc/. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Kubernetes cluster pods and containers should only use allowed SELinux options](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/SELinux.json)  
  This policy ensures pods and containers only use allowed SELinux options in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
* [Ensure services listen only on allowed ports in Kubernetes cluster](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes/ServiceAllowedPorts.json)  
  This policy enforces services to listen only on allowed ports in a Kubernetes cluster. This policy is generally available for Kubernetes Service (AKS), and preview for AKS Engine and Azure Arc enabled Kubernetes. For instructions on using this policy, visit https://aka.ms/kubepolicydoc. 
  * Resource Types 
    * `AKS Engine` 
    * `Microsoft.Kubernetes/connectedClusters` 
    * `Microsoft.ContainerService/managedClusters` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
