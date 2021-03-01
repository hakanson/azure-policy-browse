# Azure Policy Definitions - Machine Learning

* [Configure allowed registries for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/AllowedACRs_EnforceSetting.json)  
  This policy helps provide registries that are allowed in specified Azure Machine Learning computes and can be assigned at the workspace. For more information, visit https://aka.ms/amlpolicydoc. 
* [Configure log filter expressions and datastore to be used for full logs for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/AllowedLogFilter_EnforceSetting.json)  
  This policy helps provide log filter expression and datastore to be used for full logs in specified Azure Machine Learning computes and can be assigned at the workspace. For more information, visit https://aka.ms/amlpolicydoc. 
* [Configure allowed module authors for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/AllowedModuleAuthors_EnforceSetting.json)  
  This policy helps provide allowed module authors in specified Azure Machine Learning computes and can be assigned at the workspace. For more information, visit https://aka.ms/amlpolicydoc. 
* [Configure allowed Python packages for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/AllowedPythonPackageChannels_EnforceSetting.json)  
   This policy helps provide allowed Python packages in specified Azure Machine Learning computes and can be assigned at the workspace. For more information, visit https://aka.ms/amlpolicydoc. 
* [Configure code signing for training code for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/AllowedSigningKey_EnforceSetting.json)  
  This policy helps provide code signing for training code in specified Azure Machine Learning computes and can be assigned at the workspace. For more information, visit https://aka.ms/amlpolicydoc. 
* [Configure an approval endpoint called prior to jobs running for specified Azure Machine Learning computes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/ApprovalEndpoint_EnforceSetting.json)  
  This policy helps configure an approval endpoint called prior to jobs running for specified Azure Machine Learning computes and can be assigned at the workspace. For more information. For more information, visit https://aka.ms/amlpolicydoc. 
* [Azure Machine Learning workspaces should be encrypted with a customer-managed key](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/Workspace_CMKEnabled_Audit.json)  
  Manage encryption at rest of Azure Machine Learning workspace data with customer-managed keys. By default, customer data is encrypted with service-managed keys, but customer-managed keys are commonly required to meet regulatory compliance standards. Customer-managed keys enable the data to be encrypted with an Azure Key Vault key created and owned by you. You have full control and responsibility for the key lifecycle, including rotation and management. Learn more at https://aka.ms/azureml-workspaces-cmk. 
  * Resource Types 
    * `Microsoft.MachineLearningServices/workspaces` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Azure Machine Learning workspaces should use private link](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Machine%20Learning/Workspace_PrivateLinkEnabled_Audit.json)  
  Azure Private Link lets you connect your virtual network to Azure services without a public IP address at the source or destination. The private link platform handles the connectivity between the consumer and services over the Azure backbone network. By mapping private endpoints to your Azure Machine Learning workspaces instead of the entire service, you'll also be protected against data leakage risks. Learn more at: https://aka.ms/azureml-workspaces-privatelink. 
  * Resource Types 
    * `Microsoft.MachineLearningServices/workspaces` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
