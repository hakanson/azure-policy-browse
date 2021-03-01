# Azure Policy Definitions - HDInsight

* [Azure HDInsight clusters should use customer-managed keys to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/HDInsight/HDInsight_CMK_Audit.json)  
  Use customer-managed keys to manage the encryption at rest of your Azure HDInsight clusters. By default, customer data is encrypted with service-managed keys, but customer-managed keys are commonly required to meet regulatory compliance standards. Customer-managed keys enable the data to be encrypted with an Azure Key Vault key created and owned by you. You have full control and responsibility for the key lifecycle, including rotation and management. Learn more at https://aka.ms/hdi.cmk. 
  * Resource Types 
    * `Microsoft.HDInsight/clusters` 
* [Azure HDInsight clusters should use encryption at host to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/HDInsight/HDInsight_EncryptionAtHost_Audit.json)  
  Enabling encryption at host helps protect and safeguard your data to meet your organizational security and compliance commitments. When you enable encryption at host, data stored on the VM host is encrypted at rest and flows encrypted to the Storage service. 
  * Resource Types 
    * `Microsoft.HDInsight/clusters` 
* [Azure HDInsight clusters should use encryption in transit to encrypt communication between Azure HDInsight cluster nodes](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/HDInsight/HDInsight_EncryptionInTransit_Audit.json)  
  Data can be tampered with during transmission between Azure HDInsight cluster nodes. Enabling encryption in transit addresses problems of misuse and tampering during this transmission. 
  * Resource Types 
    * `Microsoft.HDInsight/clusters` 
