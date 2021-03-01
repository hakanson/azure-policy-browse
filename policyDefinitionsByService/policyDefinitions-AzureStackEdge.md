# Azure Policy Definitions - Azure Stack Edge

* [Azure Stack Edge devices should use double-encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/Azure%20Stack%20Edge/AzureStackEdge_DoubleEncryption_Audit.json)  
  To secure the data at rest on the device, ensure it's double-encrypted, the access to data is controlled, and once the device is deactivated, the data is securely erased off the data disks. Double encryption is the use of two layers of encryption: BitLocker XTS-AES 256-bit encryption on the data volumes and built-in encryption of the hard drives. Learn more in the security overview documentation for the specific Stack Edge device. 
  * Resource Types 
    * `Microsoft.DataBoxEdge/DataBoxEdgeDevices` 
