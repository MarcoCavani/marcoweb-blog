---
title: "74,000 People's Data Walked Out the Door on Unsanitised Laptops"
description: "In 2014, a former Coca-Cola employee stole 55 company laptops over a period of years. The laptops contained personal information on 74,000 employees, contractors, and partners. The data was not encrypted. Equipment management controls, from asset inventory to secure disposal, are the controls that prevent a hardware theft from becoming a data breach."
pubDate: 2026-09-23
heroImage: "/images/itgc-i2-physical-equipment.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Physical Equipment", "ITGC", "Asset Management", "Equipment Disposal", "Coca-Cola Data Breach", "IT Audit"]
readTime: "7 min read"
---

In 2014, Coca-Cola disclosed a data breach affecting approximately 74,000 individuals: employees, contractors, and partners of the company. The breach was not the result of a cyberattack or a network intrusion. A former Coca-Cola employee had stolen 55 company laptops over several years.

The employee, who had worked in the company's IT department, had been stealing laptops and returning them to stores in exchange for gift cards. The laptops had not been wiped or encrypted before they left Coca-Cola's control. The personal information on the laptops, including names, Social Security numbers, driver's licence numbers, and financial information, was accessible on the devices.

The breach was discovered when law enforcement contacted Coca-Cola after the arrested individual was found to be in possession of a device linked to the company. The investigation revealed that 74,000 individuals' data had been on the stolen devices.

The case illustrates two distinct but related control failures: inadequate asset tracking that allowed repeated theft over years to go undetected, and the absence of device encryption and data management policies that would have rendered the stolen data inaccessible.

---

## The Risk

Physical Equipment controls within the Group I framework address the risk that IT equipment, including servers, workstations, laptops, storage devices, and removable media, is inventoried, maintained, and disposed of in a manner that prevents data exposure and operational disruption.

The risk profile of inadequate physical equipment management includes:

**Theft and data exposure from unencrypted devices:** Portable devices containing unencrypted sensitive data expose that data to anyone who obtains the device physically. Encryption is the only control that protects data on a stolen or lost device.

**Incomplete asset inventory:** Equipment that is not in the asset inventory cannot be tracked, audited, or confirmed as present. Stolen or lost equipment that is not in the inventory may not be detected until the data it contains appears in an unexpected context.

**Insecure equipment disposal:** Hardware that is sold, donated, or discarded without adequate data sanitisation may retain sensitive data that can be recovered by the recipient. Studies of second-hand hard drives routinely find recoverable data including credentials, personal information, and financial records.

**Equipment disposal without certification:** Organisations that destroy or dispose of equipment without receiving a certified data destruction certificate cannot confirm that data was adequately sanitised. The certificate provides evidence for audit and regulatory purposes.

**End-of-life equipment accumulation:** Equipment that is no longer in operational use but has not been formally decommissioned accumulates in storage areas and is frequently managed informally. Informally managed equipment is not subject to inventory controls or disposal procedures.

---

## The Coca-Cola Case

The employee who stole the Coca-Cola laptops had worked in the company's IT department, giving them access to equipment storage and asset management processes. The theft occurred over several years, during which 55 laptops were removed and sold through retail trade-in programs.

The control failures that enabled the theft and the subsequent data exposure included:

**Inadequate asset tracking:** An asset inventory that is accurate and regularly reconciled would have detected discrepancies between the inventory and the actual equipment count. The theft was not detected through internal controls but through an external law enforcement contact.

**No device encryption:** The laptops did not have full-disk encryption enabled. If the devices had been encrypted, the stolen hardware would have provided no access to the data on the devices, regardless of how the device was acquired.

**No data classification and erasure requirement at end-of-life:** The laptops were being processed for disposal or reuse without a mandatory data erasure step. An asset disposal process that requires verified data erasure before equipment is released would have prevented data exposure from stolen devices en route to disposal.

**Insider access without detection controls:** An IT employee with access to equipment storage had the opportunity to remove assets without adequate controls. Inventory reconciliation and physical security in equipment storage areas are the controls that detect or deter insider theft.

---

## Equipment Disposal: A Persistent Risk

Beyond theft, equipment disposal is one of the most consistently under-controlled aspects of physical security. Studies and investigations regularly identify sensitive data on second-hand equipment:

**Drives sold with recoverable data:** Hard drives and SSDs sold or donated without NIST-compliant data wiping (overwrite to NIST 800-88 standard) or physical destruction can retain recoverable data. The British Information Commissioner's Office has fined multiple organisations for disposing of drives containing patient and customer data.

**NHS hard drives sold on eBay:** In separate investigations, researchers purchased second-hand hard drives from NHS suppliers and recovered patient records, medical history data, and administrative credentials. The equipment had been sold without wiping.

**Photocopier and printer data:** Modern network photocopiers and printers retain copies of scanned and printed documents on internal storage. Photocopiers that are leased and returned at end-of-lease without wiping may contain months of document images.

These cases all reflect the same gap: an equipment lifecycle process that does not include mandatory data sanitisation as a condition of disposal.

---

## What Good Looks Like

**Complete and accurate asset inventory:** Every piece of IT equipment is recorded in the asset management system with its serial number, assigned user, location, and status. The inventory is reconciled against physical equipment on a defined schedule. Discrepancies are investigated.

**Full-disk encryption on all portable devices:** All laptops, tablets, and portable storage devices are encrypted. Encryption is verified through endpoint management reporting. Unencrypted devices are not permitted to hold sensitive data.

**Formal equipment disposal process with data sanitisation:** Equipment removed from service follows a defined disposal process: data is wiped to NIST 800-88 standard or the device is physically destroyed. A certificate of data destruction is obtained and retained as evidence.

**Regular asset reconciliation:** At least annually, the asset management inventory is physically reconciled against the actual equipment in the organisation. All discrepancies are investigated. Unresolved discrepancies are reported to the CISO.

**Equipment storage access controls:** Storage areas for IT equipment, including equipment awaiting disposal, are physically secured. Access is restricted and logged. Equipment in the disposal queue cannot be accessed without a documented process.

**End-of-life planning for leased equipment:** Lease agreements for equipment include data sanitisation obligations at return. The organisation confirms that returned equipment has been wiped before it leaves the organisation's control.

---

## How Auditors Test It

When auditing Physical Equipment controls, an IT auditor will typically:

**Test asset inventory completeness and accuracy:** Select a sample of assets from the IT asset register. Physically locate and verify each asset. Additionally, select a sample of physical assets from the environment and confirm they appear in the register. Identify assets present but not registered, and registered assets that cannot be located.

**Test encryption on portable devices:** For a sample of laptops and portable devices in the asset register, confirm that full-disk encryption is enabled. Obtain the endpoint management report showing encryption status across the fleet. Identify unencrypted devices.

**Test the equipment disposal process:** Obtain the equipment disposal records for the period. For a sample of disposed equipment, confirm that data sanitisation was completed and that a certificate of destruction was obtained. Identify equipment disposed of without a sanitisation record.

**Test equipment storage physical security:** Inspect the physical access controls on equipment storage areas. Confirm that access is logged. Assess whether unauthorised access is possible.

**Assess periodic asset reconciliation:** Confirm that a physical asset reconciliation has been conducted within the defined period. Obtain the reconciliation results. Assess the handling of discrepancies.

**Review equipment in the disposal queue:** Identify equipment in the disposal queue. Confirm that it has been removed from active service and is not accessible for reactivation without a formal process. Confirm that the disposal queue is not growing indefinitely.

---

## Lessons and Recommendations

The Coca-Cola case is a reminder that data breaches do not require network intrusion. A stolen laptop is a data breach if the data on the laptop is unencrypted and accessible. The controls that prevent it are not technical sophistication: they are an asset inventory, an encryption policy, and a disposal process.

**Encrypt every laptop, no exceptions.** A laptop that is not encrypted is a data breach waiting to happen. If your endpoint management reporting shows unencrypted devices in the fleet, that is an open finding that requires immediate remediation.

**Reconcile your asset inventory at least annually.** An asset register that has not been physically reconciled does not reflect reality. Missing assets that are not in the register are assets whose data is unaccounted for. Reconcile and investigate discrepancies.

**Make data sanitisation the last step before disposal, not an optional step.** A disposal process that allows equipment to move from the disposal queue to a reseller without a verified data erasure step is a data exposure pathway. Enforce sanitisation technically and obtain a certificate as evidence.

**Control access to equipment awaiting disposal.** Equipment in the disposal queue that is not physically secured is a theft opportunity for data that has not yet been wiped. Treat the disposal queue as an extension of the secure data environment until data is confirmed erased.

**Include printers, copiers, and network devices in the disposal scope.** Data sanitisation is not limited to servers and laptops. Network devices with stored configurations, printers with internal hard drives, and other networked equipment all require data consideration at disposal.

---

## Assess Your Physical Equipment Controls

The MarcoWeb ITGC Tool covers Physical Equipment across Group I, with structured assessment templates for asset inventory accuracy, encryption compliance, and disposal certification.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
