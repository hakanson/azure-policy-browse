# Azure Policy Definitions - Kubernetes service

* [Ensure only allowed container images in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/ContainerAllowedImages_EnforceRegoPolicy.json)  
  This policy ensures only allowed container images are running in an Azure Kubernetes Service cluster. This policy is deprecated, please visit https://aka.ms/kubepolicydoc for instructions on using new Kubernetes policies. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Ensure containers listen only on allowed ports in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/ContainerAllowedPorts_EnforceRegoPolicy.json)  
  This policy enforces containers to listen only on allowed ports in an Azure Kubernetes Service cluster. This policy is deprecated, please visit https://aka.ms/kubepolicydoc for instructions on using new Kubernetes policies. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Do not allow privileged containers in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/ContainerNoPrivilege_EnforceRegoPolicy.json)  
  This policy does not allow privileged containers creation in an Azure Kubernetes Service cluster. This policy is deprecated, please visit https://aka.ms/kubepolicydoc for instructions on using new Kubernetes policies. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Ensure CPU and memory resource limits defined on containers in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/ContainerResourceLimits_EnforceRegoPolicy.json)  
  This policy ensures CPU and memory resource limits are defined on containers in an Azure Kubernetes Service cluster. This policy is deprecated, please visit https://aka.ms/kubepolicydoc for instructions on using new Kubernetes policies. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Enforce unique ingress hostnames across namespaces in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/IngressHostnamesConflict_EnforceRegoPolicy.json)  
  This policy enforces unique ingress hostnames across namespaces in an Azure Kubernetes Service cluster. This policy is deprecated, please visit https://aka.ms/kubepolicydoc for instructions on using new Kubernetes policies. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Enforce HTTPS ingress in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/IngressHttpsOnly_EnforceRegoPolicy.json)  
  This policy enforces HTTPS ingress in an Azure Kubernetes Service cluster. This policy is deprecated, please visit https://aka.ms/kubepolicydoc for instructions on using new Kubernetes policies. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Enforce internal load balancers in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/LoadbalancerNoPublicIPs_EnforceRegoPolicy.json)  
  This policy enforces load balancers do not have public IPs in an Azure Kubernetes Service cluster. This policy is deprecated, please visit https://aka.ms/kubepolicydoc for instructions on using new Kubernetes policies. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Enforce labels on pods in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/PodEnforceLabels_EnforceRegoPolicy.json)  
  This policy enforces the specified labels are provided for pods in an Azure Kubernetes Service cluster. This policy is deprecated, please visit https://aka.ms/kubepolicydoc for instructions on using new Kubernetes policies. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
* [Ensure services listen only on allowed ports in AKS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Kubernetes%20service/ServiceAllowedPorts_EnforceRegoPolicy.json)  
  This policy enforces services to listen only on allowed ports in an Azure Kubernetes Service cluster. This policy is deprecated, please visit https://aka.ms/kubepolicydoc for instructions on using new Kubernetes policies. 
  * Resource Types 
    * `Microsoft.ContainerService/managedClusters` 
