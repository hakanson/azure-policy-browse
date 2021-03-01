# Azure Policy Definitions - SQL

* [Deploy - Configure diagnostic settings for Azure SQL Database server to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/DataConnectosSqServerLogs_PolicyAssignment.json)  
  Deploys the diagnostic settings for Azure SQL Database server to stream resource logs to a Log Analytics workspace when any SQL Server which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Deploy - Configure diagnostic settings for SQL Databases to Log Analytics workspace](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/DataConnectosSqlLogs_PolicyAssignment.json)  
  Deploys the diagnostic settings for SQL Databases to stream resource logs to a Log Analytics workspace when any SQL Database which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
* [Deploy Threat Detection on SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/DeployTdOnSqlServers_Deploy.json)  
  This policy ensures that Threat Detection is enabled on SQL Servers. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (2)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [[Preview]: Enable Data Protection Suite](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/ASC_DataProtection.json)  
* [Geo-redundant backup should be enabled for Azure Database for MariaDB](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/GeoRedundant_DBForMariaDB_Audit.json)  
  Azure Database for MariaDB allows you to choose the redundancy option for your database server. It can be set to a geo-redundant backup storage in which the data is not only stored within the region in which your server is hosted, but is also replicated to a paired region to provide recovery option in case of a region failure. Configuring geo-redundant storage for backup is only allowed during server create. 
  * Resource Types 
    * `Microsoft.DBforMariaDB/servers` 
  * Policy Set Definitions (7)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Geo-redundant backup should be enabled for Azure Database for MySQL](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/GeoRedundant_DBForMySQL_Audit.json)  
  Azure Database for MySQL allows you to choose the redundancy option for your database server. It can be set to a geo-redundant backup storage in which the data is not only stored within the region in which your server is hosted, but is also replicated to a paired region to provide recovery option in case of a region failure. Configuring geo-redundant storage for backup is only allowed during server create. 
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (7)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Geo-redundant backup should be enabled for Azure Database for PostgreSQL](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/GeoRedundant_DBForPostgreSQL_Audit.json)  
  Azure Database for PostgreSQL allows you to choose the redundancy option for your database server. It can be set to a geo-redundant backup storage in which the data is not only stored within the region in which your server is hosted, but is also replicated to a paired region to provide recovery option in case of a region failure. Configuring geo-redundant storage for backup is only allowed during server create. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (7)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Long-term geo-redundant backup should be enabled for Azure SQL Databases](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/GeoRedundant_SQLDatabase_AuditIfNotExists.json)  
  This policy audits any Azure SQL Database with long-term geo-redundant backup not enabled. 
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
  * Policy Set Definitions (6)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Public network access should be disabled for MariaDB servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MariaDB_DisablePublicNetworkAccess_Audit.json)  
  Disable the public network access property to improve security and ensure your Azure Database for MariaDB can only be accessed from a private endpoint. This configuration strictly disables access from any public address space outside of Azure IP range, and denies all logins that match IP or virtual network-based firewall rules. 
  * Resource Types 
    * `Microsoft.DBforMariaDB/servers` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Private endpoint should be enabled for MariaDB servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MariaDB_EnablePrivateEndPoint_Audit.json)  
  Private endpoint connections enforce secure communication by enabling private connectivity to Azure Database for MariaDB. Configure a private endpoint connection to enable access to traffic coming only from known networks and prevent access from all other IP addresses, including within Azure. 
  * Resource Types 
    * `Microsoft.DBforMariaDB/servers` 
  * Policy Set Definitions (3)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [MariaDB server should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MariaDB_VirtualNetworkServiceEndpoint_Audit.json)  
  Virtual network based firewall rules are used to enable traffic from a specific subnet to Azure Database for MariaDB while ensuring the traffic stays within the Azure boundary. This policy provides a way to audit if the Azure Database for MariaDB has virtual network service endpoint being used. 
  * Resource Types 
    * `Microsoft.DBforMariaDB/servers` 
* [Public network access should be disabled for MySQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_DisablePublicNetworkAccess_Audit.json)  
  Disable the public network access property to improve security and ensure your Azure Database for MySQL can only be accessed from a private endpoint. This configuration strictly disables access from any public address space outside of Azure IP range, and denies all logins that match IP or virtual network-based firewall rules. 
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Bring your own key data protection should be enabled for MySQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_EnableByok_Audit.json)  
  Use customer-managed keys to manage the encryption at rest of your MySQL servers. By default, the data is encrypted at rest with service-managed keys, but customer-managed keys are commonly required to meet regulatory compliance standards. Customer-managed keys enable the data to be encrypted with an Azure Key Vault key created and owned by you. You have full control and responsibility for the key lifecycle, including rotation and management. 
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Private endpoint should be enabled for MySQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_EnablePrivateEndPoint_Audit.json)  
  Private endpoint connections enforce secure communication by enabling private connectivity to Azure Database for MySQL. Configure a private endpoint connection to enable access to traffic coming only from known networks and prevent access from all other IP addresses, including within Azure. 
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (3)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Enforce SSL connection should be enabled for MySQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_EnableSSL_Audit.json)  
  Azure Database for MySQL supports connecting your Azure Database for MySQL server to client applications using Secure Sockets Layer (SSL). Enforcing SSL connections between your database server and your client applications helps protect against 'man in the middle' attacks by encrypting the data stream between the server and your application. This configuration enforces that SSL is always enabled for accessing your database server. 
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (7)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Public network access should be disabled for MySQL flexible servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_FlexibleServers_DisablePublicNetworkAccess_Audit.json)  
  Disabling the public network access property improves security by ensuring your Azure Database for MySQL flexible servers can only be accessed from a private endpoint. This configuration strictly disables access from any public address space outside of Azure IP range and denies all logins that match IP or virtual network-based firewall rules. 
  * Resource Types 
    * `Microsoft.DBforMySQL/flexibleServers` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Infrastructure encryption should be enabled for Azure Database for MySQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_InfrastructureEncryption_Audit.json)  
  Enable infrastructure encryption for Azure Database for MySQL servers to have higher level of assurance that the data is secure. When infrastructure encryption is enabled, the data at rest is encrypted twice using FIPS 140-2 compliant Microsoft managed keys. 
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [MySQL server should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/MySQL_VirtualNetworkServiceEndpoint_Audit.json)  
  Virtual network based firewall rules are used to enable traffic from a specific subnet to Azure Database for MySQL while ensuring the traffic stays within the Azure boundary. This policy provides a way to audit if the Azure Database for MySQL has virtual network service endpoint being used. 
  * Resource Types 
    * `Microsoft.DBforMySQL/servers` 
* [Connection throttling should be enabled for PostgreSQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_ConnectionThrottling_Enabled_Audit.json)  
  This policy helps audit any PostgreSQL databases in your environment without Connection throttling enabled. This setting enables temporary connection throttling per IP for too many invalid password login failures. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Public network access should be disabled for PostgreSQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_DisablePublicNetworkAccess_Audit.json)  
  Disable the public network access property to improve security and ensure your Azure Database for PostgreSQL can only be accessed from a private endpoint. This configuration disables access from any public address space outside of Azure IP range, and denies all logins that match IP or virtual network-based firewall rules. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (3)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Bring your own key data protection should be enabled for PostgreSQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableByok_Audit.json)  
  Use customer-managed keys to manage the encryption at rest of your PostgreSQL servers. By default, the data is encrypted at rest with service-managed keys, but customer-managed keys are commonly required to meet regulatory compliance standards. Customer-managed keys enable the data to be encrypted with an Azure Key Vault key created and owned by you. You have full control and responsibility for the key lifecycle, including rotation and management. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (2)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Log checkpoints should be enabled for PostgreSQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableLogCheckpoint_Audit.json)  
  This policy helps audit any PostgreSQL databases in your environment without log_checkpoints setting enabled. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Log connections should be enabled for PostgreSQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableLogConnections_Audit.json)  
  This policy helps audit any PostgreSQL databases in your environment without log_connections setting enabled. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Disconnections should be logged for PostgreSQL database servers.](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableLogDisconnections_Audit.json)  
  This policy helps audit any PostgreSQL databases in your environment without log_disconnections enabled. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
* [Log duration should be enabled for PostgreSQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableLogDuration_Audit.json)  
  This policy helps audit any PostgreSQL databases in your environment without log_duration setting enabled. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
* [Private endpoint should be enabled for PostgreSQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnablePrivateEndPoint_Audit.json)  
  Private endpoint connections enforce secure communication by enabling private connectivity to Azure Database for PostgreSQL. Configure a private endpoint connection to enable access to traffic coming only from known networks and prevent access from all other IP addresses, including within Azure. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (3)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Enforce SSL connection should be enabled for PostgreSQL database servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_EnableSSL_Audit.json)  
  Azure Database for PostgreSQL supports connecting your Azure Database for PostgreSQL server to client applications using Secure Sockets Layer (SSL). Enforcing SSL connections between your database server and your client applications helps protect against 'man in the middle' attacks by encrypting the data stream between the server and your application. This configuration enforces that SSL is always enabled for accessing your database server. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (7)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Public network access should be disabled for PostgreSQL flexible servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_FlexibleServers_DisablePublicNetworkAccess_Audit.json)  
  Disabling the public network access property improves security by ensuring your Azure Database for PostgreSQL flexible servers can only be accessed from a private endpoint. This configuration strictly disables access from any public address space outside of Azure IP range and denies all logins that match IP or virtual network-based firewall rules. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/flexibleServers` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [Infrastructure encryption should be enabled for Azure Database for PostgreSQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_InfrastructureEncryption_Audit.json)  
  Enable infrastructure encryption for Azure Database for PostgreSQL servers to have higher level of assurance that the data is secure. When infrastructure encryption is enabled, the data at rest is encrypted twice using FIPS 140-2 compliant Microsoft managed keys 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
  * Policy Set Definitions (1)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
* [PostgreSQL server should use a virtual network service endpoint](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/PostgreSQL_VirtualNetworkServiceEndpoint_Audit.json)  
  Virtual network based firewall rules are used to enable traffic from a specific subnet to Azure Database for PostgreSQL while ensuring the traffic stays within the Azure boundary. This policy provides a way to audit if the Azure Database for PostgreSQL has virtual network service endpoint being used. 
  * Resource Types 
    * `Microsoft.DBforPostgreSQL/servers` 
* [An Azure Active Directory administrator should be provisioned for SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SQL_DB_AuditServerADAdmins_Audit.json)  
  Audit provisioning of an Azure Active Directory administrator for your SQL server to enable Azure AD authentication. Azure AD authentication enables simplified permission management and centralized identity management of database users and other Microsoft services 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (18)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Audit SQL DB Level Audit Setting](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlDBAuditing_Audit.json)  
  Audit DB level audit setting for SQL databases 
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
* [Transparent Data Encryption on SQL databases should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlDBEncryption_Audit.json)  
  Transparent data encryption should be enabled to protect data-at-rest and meet compliance requirements 
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
  * Policy Set Definitions (23)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy SQL DB transparent data encryption](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlDBEncryption_Deploy.json)  
  Enables transparent data encryption on SQL databases 
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
* [Deploy Diagnostic Settings for Azure SQL Database to Event Hub](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlDB_DiagnosticsLog_Deploy.json)  
  Deploys the diagnostic settings for Azure SQL Database to stream to a regional Event Hub on any Azure SQL Database which is missing this diagnostic settings is created or updated. 
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
* [SQL Database should avoid using GRS backup redundancy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlDb_BlockGrsBackupRedundancy_Deny.json)  
  Databases should avoid using the default geo-redundant storage for backups, if data residency rules require data to stay within a specific region. Note: Azure Policy is not enforced when creating a database using T-SQL. If not explicitly specified, database with geo-redundant backup storage is created via T-SQL. 
  * Resource Types 
    * `Microsoft.Sql/servers/databases` 
* [Email notifications to admins should be enabled in SQL Managed Instance advanced data security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_AdvancedDataSecurityEmailAdmins_Audit.json)  
  Audit that 'email notification to admins and subscription owners' is enabled in SQL Managed Instance advanced threat protection settings. This setting ensures that any detections of anomalous activities on SQL Managed Instance are reported as soon as possible to the admins. 
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
* [Advanced data security settings for SQL Managed Instance should contain an email address for security alerts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_AdvancedDataSecurityEmails_Audit.json)  
  Ensure that an email address is provided for the 'Send alerts to' field in the advanced data security settings. This email address receives alert notifications when anomalous activities are detected on SQL Managed Instance. 
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
* [Advanced data security should be enabled on SQL Managed Instance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_AdvancedDataSecurity_Audit.json)  
  Audit each SQL Managed Instance without advanced data security. 
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
  * Policy Set Definitions (16)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [SQL Managed Instances should avoid using GRS backup redundancy](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_BlockGrsBackupRedundancy_Deny.json)  
  Managed Instances should avoid using the default geo-redundant storage for backups, if data residency rules require data to stay within a specific region. Note: Azure Policy is not enforced when creating a database using T-SQL. If not explicitly specified, database with geo-redundant backup storage is created via T-SQL. 
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
* [SQL managed instances should use customer-managed keys to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_EnsureServerTDEisEncryptedWithYourOwnKey_Audit.json)  
  Implementing Transparent Data Encryption (TDE) with your own key provides you with increased transparency and control over the TDE Protector, increased security with an HSM-backed external service, and promotion of separation of duties. This recommendation applies to organizations with a related compliance requirement. 
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
  * Policy Set Definitions (7)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Advanced Threat Protection types should be set to 'All' in SQL Managed Instance advanced data security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_EnsureThreatDetectionTypes_Audit.json)  
  It's recommended to enable all Advanced Threat Protection types on your SQL Managed Instance. Enabling all types protects against SQL injection, database vulnerabilities, and any other anomalous activities. 
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
* [SQL Managed Instance should have the minimal TLS version of 1.2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlManagedInstance_MiniumTLSVersion_Audit.json)  
  Setting minimal TLS version to 1.2 improves security by ensuring your SQL Managed Instance can only be accessed from clients using TLS 1.2. Using versions of TLS less than 1.2 is not recommended since they have well documented security vulnerabilities. 
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
* [Deploy Advanced Data Security on SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServerAdvancedDataSecurity_Deploy.json)  
  This policy enables Advanced Data Security on SQL Servers. This includes turning on Threat Detection and Vulnerability Assessment. It will automatically create a storage account in the same region and resource group as the SQL server to store scan results, with a 'sqlva' prefix. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [SQL servers should be configured with 90 days auditing retention or higher](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServerAuditingRetentionDays_Audit.json)  
  SQL servers should be configured with 90 days auditing retention or higher. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (5)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [Motion Picture Association of America (MPAA)](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/Media_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [SQL Auditing settings should have Action-Groups configured to capture critical activities](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServerAuditing_ActionsAndGroups_Audit.json)  
  The AuditActionsAndGroups property should contain at least SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP, FAILED_DATABASE_AUTHENTICATION_GROUP, BATCH_COMPLETED_GROUP to ensure a thorough audit logging 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (2)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
* [Auditing on SQL server should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServerAuditing_Audit.json)  
  Auditing on your SQL Server should be enabled to track database activities across all databases on the server and save them in an audit log. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (20)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Canada Federal PBMM](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CanadaFederalPBMM_audit.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [FedRAMP Moderate](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_M_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [IRS1075 September 2016](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRS1075_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [ISO 27001:2013](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ISO27001_2013_audit.json)  
    * [NIST SP 800-171 R2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST800-171_audit.json)  
    * [NIST SP 800-53 R4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/NIST80053_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [PCI v3.2.1:2018](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/PCIv3_2_1_2018_audit.json)  
    * [SWIFT CSP-CSCF v2020](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/SWIFTv2020_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Deploy Auditing on SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServerAuditing_Deploy.json)  
  This policy ensures that Auditing is enabled on SQL Servers for enhanced security and compliance. It will automatically create a storage account in the same region as the SQL server to store audit records. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Email notifications to admins should be enabled in SQL server advanced data security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_AdvancedDataSecurityEmailAdmins_Audit.json)  
  Audit that 'email notification to admins and subscription owners' is enabled in the SQL server advanced threat protection settings. This ensures that any detections of anomalous activities on SQL server are reported as soon as possible to the admins. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Advanced data security settings for SQL server should contain an email address to receive security alerts](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_AdvancedDataSecurityEmails_Audit.json)  
  Ensure that an email address is provided for the 'Send alerts to' field in the Advanced Data Security server settings. This email address receives alert notifications when anomalous activities are detected on SQL servers. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Advanced data security should be enabled on your SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_AdvancedDataSecurity_Audit.json)  
  Audit SQL servers without Advanced Data Security 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (16)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
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
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [SQL servers should use customer-managed keys to encrypt data at rest](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_EnsureServerTDEisEncryptedWithYourOwnKey_Audit.json)  
  Implementing Transparent Data Encryption (TDE) with your own key provides increased transparency and control over the TDE Protector, increased security with an HSM-backed external service, and promotion of separation of duties. This recommendation applies to organizations with a related compliance requirement. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (7)  
    * [CIS Microsoft Azure Foundations Benchmark 1.1.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_1_0.json)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Advanced Threat Protection types should be set to 'All' in SQL server Advanced Data Security settings](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_EnsureThreatDetectionTypes_Audit.json)  
  It is recommended to enable all Advanced Threat Protection types on your SQL servers. Enabling all types protects against SQL injection, database vulnerabilities, and any other anomalous activities. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Azure SQL Database should have the minimal TLS version of 1.2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_MiniumTLSVersion_Audit.json)  
  Setting minimal TLS version to 1.2 improves security by ensuring your Azure SQL Database can only be accessed from clients using TLS 1.2. Using versions of TLS less than 1.2 is not recommended since they have well documented security vulnerabilities. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Private endpoint connections on Azure SQL Database should be enabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_PrivateEndpoint_Audit.json)  
  Private endpoint connections enforce secure communication by enabling private connectivity to Azure SQL Database. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (1)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Public network access on Azure SQL Database should be disabled](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_PublicNetworkAccess_Audit.json)  
  Disabling the public network access property improves security by ensuring your Azure SQL Database can only be accessed from a private endpoint. This configuration denies all logins that match IP or virtual network based firewall rules. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (2)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
* [Virtual network firewall rule on Azure SQL Database should be enabled to allow traffic from the specified subnet](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_VNetRules_Audit.json)  
  Virtual network based firewall rules are used to enable traffic from a specific subnet to Azure SQL Database while ensuring the traffic stays within the Azure boundary. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Vulnerability Assessment settings for SQL server should contain an email address to receive scan reports](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlServer_VulnerabilityAssessmentEmails_Audit.json)  
  Ensure that an email address is provided for the 'Send scan reports to' field in the Vulnerability Assessment settings. This email address receives scan result summary after a periodic scan runs on SQL servers. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (4)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
* [Require SQL Server version 12.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/SqlVersion12_Deny.json)  
  This policy ensures all SQL servers use version 12.0. This policy is deprecated because it is no longer possible to create an Azure SQL server with any version other than 12.0. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
* [Vulnerability assessment should be enabled on SQL Managed Instance](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/VulnerabilityAssessmentOnManagedInstance_Audit.json)  
  Audit each SQL Managed Instance which doesn't have recurring vulnerability assessment scans enabled. Vulnerability assessment can discover, track, and help you remediate potential database vulnerabilities. 
  * Resource Types 
    * `Microsoft.Sql/managedInstances` 
  * Policy Set Definitions (11)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
* [Vulnerability assessment should be enabled on your SQL servers](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policyDefinitions/SQL/VulnerabilityAssessmentOnServer_Audit.json)  
  Audit Azure SQL servers which do not have recurring vulnerability assessment scans enabled. Vulnerability assessment can discover, track, and help you remediate potential database vulnerabilities. 
  * Resource Types 
    * `Microsoft.Sql/servers` 
  * Policy Set Definitions (11)  
    * [CIS Microsoft Azure Foundations Benchmark 1.3.0](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CISv1_3_0.json)  
    * [CMMC Level 3](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/CMMC_L3.json)  
    * [DOD Impact Level 4](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/DOD_IL4_audit.json)  
    * [FedRAMP High](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/FedRAMP_H_audit.json)  
    * [HITRUST/HIPAA](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/HIPAA_HITRUST_audit.json)  
    * [Australian Government ISM PROTECTED](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/IRAP_Audit.json)  
    * [Azure Security Benchmark v1](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_audit.json)  
    * [Azure Security Benchmark v2](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/asb_v2.json)  
    * [New Zealand Information Security Manual](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/nz_ism.json)  
    * [UK OFFICIAL and UK NHS](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Regulatory%20Compliance/ukofficial_audit.json)  
    * [Azure Security Benchmark](https://github.com/Azure/azure-policy/tree/master/built-in-policies/policySetDefinitions/Security%20Center/AzureSecurityCenter.json)  
