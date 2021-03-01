# Azure Policy Definitions - Data Box

* [Azure Data Box jobs should use a customer-managed key to encrypt the device unlock password](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Box/DataBox_CMK_Audit.json)  
  Use a customer-managed key to control the encryption of the device unlock password for Azure Data Box. Customer-managed keys also help manage access to the device unlock password by the Data Box service in order to prepare the device and copy data in an automated manner. The data on the device itself is already encrypted at rest with Advanced Encryption Standard 256-bit encryption, and the device unlock password is encrypted by default with a Microsoft managed key. 
  * Resource Types 
    * `Microsoft.DataBox/jobs` 
* [Azure Data Box jobs should enable double encryption for data at rest on the device](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Data%20Box/DataBox_DoubleEncryption_Audit.json)  
  Enable a second layer of software-based encryption for data at rest on the device. The device is already protected via Advanced Encryption Standard 256-bit encryption for data at rest. This option adds a second layer of data encryption. 
  * Resource Types 
    * `Microsoft.DataBox/jobs` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
