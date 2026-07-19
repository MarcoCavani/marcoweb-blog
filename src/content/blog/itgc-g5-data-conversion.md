---
title: "Hershey's Halloween Disaster: What a Failed ERP Migration Costs in Chocolate"
description: "In 1999, Hershey's Foods Corporation went live with an SAP R/3 implementation on 9 July, during the peak season for Halloween candy orders. The system was not ready. Hershey's could not fill 100 million dollars worth of orders. Data conversion and migration controls exist to ensure that when you move to a new system, your business can still run."
pubDate: 2026-09-14
heroImage: "/images/itgc-g5-data-conversion.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Data Conversion", "ITGC", "Hershey ERP Migration", "SAP Implementation", "Data Migration", "IT Audit"]
readTime: "7 min read"
---

In 1999, Hershey's Foods Corporation was implementing three enterprise software systems simultaneously: SAP R/3 for business processes, Siebel for sales force automation, and Manugistics for supply chain optimisation. The project, intended to modernise Hershey's operations and improve its ability to fulfil orders, had been scheduled to go live in April 1999.

The go-live was delayed. By the time Hershey's finally launched the new systems in July 1999, the company was entering its peak Halloween ordering season. Candy makers typically begin filling Halloween orders in June and July. Hershey's customers, including major retailers, had placed their orders expecting normal fulfilment.

The new systems were not working correctly. Orders could not be processed. Shipments were delayed. Hershey's was unable to fulfil approximately 100 million dollars worth of candy orders in time for Halloween. The company's third-quarter earnings fell sharply. Its stock price declined by approximately 8 percent on the day the results were announced.

The root causes included implementation rushing, insufficient user training, and inadequate testing of the integrated system configuration. Within the data conversion context, the migration of historical and master data to the new SAP system had not been adequately tested and validated before go-live, contributing to processing errors in the live system.

---

## The Risk

Data Conversion controls within the Group G framework address the risk that when data is migrated from one system to another, whether during an ERP implementation, a system replacement, or a merger integration, the migrated data is complete, accurate, and in the correct format for the target system.

The risk profile of data conversion is distinct from other change management risks:

**Volume and complexity:** Enterprise system migrations involve migrating millions of records across complex relational schemas. A data migration is not a simple extract-transform-load operation; it is a transformation of business data from one model to another, with mapping rules that must be validated for every record type.

**Irreversibility:** Once a system has been live for weeks and users have created new transactions, rolling back to the source system requires reversing not just the migration but all the transactions created in the new system. Beyond a certain point, rollback is not practical.

**Downstream dependency:** Other systems and processes depend on the data in the migrated system being correct. An incorrect customer master record in a new ERP system produces incorrect invoices, incorrect financial reports, and incorrect supply chain decisions.

**Legacy data quality:** Source systems frequently contain data quality issues that have been managed through workarounds in the old system but become blocking errors in the new system. A data migration surfaces all the data quality debt of the source system simultaneously.

**Reconciliation complexity:** Verifying that a data migration was successful requires comparing millions of records across systems with different schemas, formats, and encoding. Manual reconciliation at this scale is not feasible; automated reconciliation tools and control totals are required.

---

## Data Conversion in ERP Migrations

The Hershey's migration involved moving operational data, including customer master records, vendor master records, material master records, pricing information, open orders, and historical transaction data, from legacy systems to SAP R/3.

The specific data conversion risks in an ERP migration context include:

**Master data mapping errors:** Customer, vendor, and material master records in the source system may not map cleanly to the corresponding structures in SAP. Mapping rules that are incorrect or incomplete produce master data in the target system that cannot support the business processes dependent on that data.

**Open transaction migration:** Migrating open purchase orders, sales orders, and work-in-progress transactions to the new system requires replicating the state of every active business process at the cutover point. Errors in open transaction migration mean that existing orders cannot be processed in the new system.

**Historical data integrity:** Finance and reporting applications depend on historical data being available and consistent in the new system. Historical data that is not migrated, or that is migrated with incorrect values, produces incorrect financial reports and analysis.

**Pricing and configuration data:** Pricing tables, discount structures, and configuration data that drives business process logic must be migrated accurately. Errors in pricing data produce incorrect invoicing; errors in configuration data produce incorrect system behaviour.

---

## What Failed

**Compressed timeline and peak season conflict:** Hershey's proceeded with a go-live in the middle of the highest-stakes period of its business calendar. The July go-live left no time to resolve issues before the Halloween ordering window closed.

**Insufficient testing of integrated system configuration:** The three systems being implemented simultaneously (SAP, Siebel, Manugistics) had integrations between them that had not been fully tested in an integrated environment. Configuration errors in the integrated environment contributed to order processing failures.

**Inadequate data migration validation:** The migration of master and transaction data to SAP had not been fully validated before go-live. Data quality issues in the source system became processing errors in the new system.

**User training and readiness:** Hershey's customer service and order management staff were not sufficiently trained on the new system to operate it effectively under peak volume conditions. Process and system issues that might have been manageable were amplified by users who were simultaneously learning a new system and handling peak customer demand.

**No business continuity plan for migration failure:** Hershey's did not have a fallback plan that would have allowed it to continue processing orders in the legacy system if the new system was not operational by the Halloween deadline.

---

## What Good Looks Like

**Migration reconciliation framework:** Before the migration is considered complete, automated reconciliation compares record counts, key field values, and financial totals between the source and target systems. The reconciliation framework covers every major entity type: customer, vendor, material, open orders, pricing, and financial history.

**Data migration testing with production-representative data:** The data migration process is tested multiple times using a copy of production data before the final cutover migration. Each test identifies mapping errors and data quality issues that are corrected before the live migration.

**Data quality assessment and remediation pre-migration:** The source system's data quality is assessed before the migration project begins. Data quality issues that would prevent successful migration are remediated in the source system before the migration, not discovered during testing.

**Parallel operation period:** Where feasible, the new and old systems run in parallel for a defined period, with transactions processed in both. The outputs are compared to validate that the new system is producing correct results before the old system is decommissioned.

**Migration blackout period away from peak business cycles:** Major system migrations are scheduled during periods of lower business activity. A migration window that falls during peak season, peak financial close, or a regulatory reporting period compounds the risk of any migration issues with peak operational demand.

---

## How Auditors Test It

When auditing Data Conversion controls, an IT auditor will typically:

**Review the migration plan and reconciliation framework:** Confirm that a data migration plan exists that specifies the entities being migrated, the mapping rules, the reconciliation approach, and the sign-off requirements before go-live is permitted.

**Test reconciliation completeness:** For a completed migration or for the most recent major data migration in the audit period, obtain the reconciliation reports. Confirm that they cover all major entity types and financial totals. Assess whether identified reconciliation differences were investigated and resolved before go-live.

**Test migration accuracy for a sample of records:** Select a sample of records from each major entity type (customers, vendors, materials). Compare the record values in the source system (or historical records) against the values in the target system. Identify mapping errors or data loss.

**Assess pre-migration data quality processes:** Confirm that the organisation has a process to assess and remediate data quality issues in the source system before migration. Assess whether data quality issues discovered during migration testing were systematically remediated.

**Review the go-live sign-off process:** Confirm that a formal go-live sign-off process existed that required reconciliation completion and resolution of critical defects before migration was approved. Identify whether the go-live sign-off was obtained and who provided it.

**Assess parallel operation or fallback planning:** For major migrations, confirm that either a parallel operation period was conducted or a tested fallback plan existed. Assess whether the fallback plan was realistic and had been tested.

---

## Lessons and Recommendations

Hershey's 1999 migration failure is one of the most cited ERP implementation cases in IT project management literature. It was not a failure of technology; SAP R/3 was a mature system by 1999. It was a failure of implementation management, data migration validation, and risk assessment in the face of a fixed and operationally constrained timeline.

**Never go live during peak season.** If your business has a period when operational failures have maximum impact, that period is the last time you should attempt a major system migration. The risk/reward calculation is clear.

**Complete reconciliation before go-live, not after.** Data migration reconciliation that is expected to be completed after go-live, while the system is being used in production, is not a control. Reconciliation must be complete, and differences must be resolved, before the first production transaction is permitted.

**Test the migration multiple times before the final run.** Each test run of the data migration using production-representative data identifies issues. By the third or fourth test run, the issues should be trivial. A migration that is tested only once before the live run is not adequately tested.

**Treat data quality remediation as a project deliverable, not an afterthought.** The data quality of the source system is the input to the migration. If the input is poor, the output will be poor regardless of how well the migration is executed. Dedicate resources to source data quality before the migration begins.

**Build in time to recover.** A migration plan that has no schedule buffer assumes the migration will go exactly as planned. Migrations rarely go exactly as planned. Build recovery time into the schedule so that issues discovered during the migration weekend can be resolved before the business is dependent on the new system.

---

## Assess Your Data Conversion Controls

The MarcoWeb ITGC Tool covers Data Conversion across Group G, with structured assessment templates for migration reconciliation, testing completeness, and go-live sign-off governance.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
