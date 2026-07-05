---
title: "The Batch Job That Nobody Approved: How Uncontrolled Automated Processing Creates Financial Risk"
description: "Automated batch processing runs payroll, closes the general ledger, executes payment runs, and feeds financial statements. When batch job configurations can be changed without authorisation controls or output validation, a single modification can corrupt financial data at scale, silently and at speed."
pubDate: 2027-01-03
heroImage: "/images/itgc-def-batch-processing.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Application Batch Processing", "ITGC", "ERP Automation", "Payroll Batch", "IT Audit", "Financial Controls"]
readTime: "7 min read"
---

On the afternoon of 1 August 2012, Knight Capital Group, a US market-maker, deployed software to its production trading systems without decommissioning a legacy component on one of its eight servers. The legacy component, called SMARS, had been repurposed for a new function. On the server where it had not been updated, SMARS continued to execute its original logic: sending child orders to market for the full size of a parent order without waiting for fills to accumulate.

Within 45 minutes, Knight Capital's systems generated approximately 4 million erroneous orders, acquired a net long position of approximately $3.5 billion in 154 stocks, and lost $440 million. The company did not survive as an independent entity.

The Knight Capital case is primarily a change management failure, and it is covered in the Group G change management context. But it illustrates a principle that applies directly to batch processing controls in finance and ERP environments: automated processes that execute at machine speed, without real-time human oversight, and with the ability to modify financial position at large scale, require controls that can detect and halt erroneous execution before the damage becomes irreversible.

In the finance and ERP application context, those automated processes are payroll batch jobs, payment runs, general ledger posting jobs, account reconciliation processes, and data interface jobs that move financial data between systems.

---

## The Risk

Application Batch Processing controls for Groups D, E, and F address the risk that automated batch jobs in finance, payroll, and ERP environments execute with errors, are modified without authorisation, or fail without detection, producing incorrect financial outputs or processing incorrect transactions.

The risk profile of batch processing is distinct from interactive user activity:

**Scale and speed:** A batch payment run or payroll calculation executes thousands or millions of calculations in minutes. An error in the job logic or input data affects all outputs simultaneously.

**Limited real-time visibility:** Batch jobs often run overnight or at off-peak times when operational staff are not monitoring output in real time. Errors may not be detected until the business day following the run.

**Complex dependencies:** Batch jobs are frequently dependent on prior jobs completing successfully, on specific input file formats, and on specific system states. A failure or modification to one job in a chain can cascade to all downstream jobs.

**Modification risk:** Batch job configurations, scheduling parameters, input file paths, and processing logic can be modified by users with technical access to the job scheduling system. Without change controls equivalent to those applied to application code, batch job modifications represent a pathway for both accidental and intentional errors.

**Output reconciliation gaps:** If batch outputs are not reconciled against expected totals or compared to prior period outputs, errors in batch processing can persist undetected through multiple cycles.

---

## Batch Processing in Finance and ERP Environments

The highest-risk batch processes in the Groups D, E, and F application environment are:

**Payroll batch calculation and payment:** Payroll calculation runs process employee records against pay rules and generate payment instructions. Errors in payroll batch logic can produce underpayments, overpayments, or incorrect tax withholdings at scale.

**Payment runs in accounts payable:** AP payment batch jobs process approved vendor invoices and generate payment instructions to banking systems. An unauthorised modification to payment routing parameters in a batch job could redirect payments.

**General ledger period close:** GL period close batch processes post accruals, depreciation, and intercompany eliminations. Errors produce misstated financial statements.

**Interface and data transfer jobs:** Jobs that transfer financial data between systems (ERP to banking, ERP to reporting platform, HR to payroll) must transfer complete, accurate, and unmodified data. Failures or modifications to interface jobs can produce data integrity issues across connected systems.

**Account reconciliation automation:** Automated reconciliation jobs that match bank statements to GL entries and flag exceptions must operate on complete, accurate input data and must surface genuine exceptions rather than suppressing them.

---

## What Failed in Finance Batch Processing Incidents

While Knight Capital's loss was a trading system event, the control failures map directly to finance batch processing risks:

**No segregation between modification and execution:** In many organisations, the same technical team that runs batch jobs also has the ability to modify job configurations without a separate approval step. This means that a modification to a payroll batch job or a payment run parameter can be made and executed without review.

**No reconciliation of batch outputs to expected totals:** A payroll batch that produces a total pay figure 15 percent higher than the prior period should require explanation before payment instructions are released. The absence of automated output reconciliation allows erroneous totals to proceed.

**No completion alerts for failed or incomplete jobs:** Batch jobs that fail silently, without sending an alert to an operator or logging an error that is reviewed, leave downstream processes operating on stale or absent input data.

**No independent validation of batch input data:** Batch jobs that process input files from other systems should validate that the input data meets expected format, volume, and content checks before processing. Unvalidated inputs allow corrupted or maliciously modified data to be processed without detection.

---

## What Good Looks Like

**Change control for batch job configurations:** Modifications to batch job scheduling, parameters, input file paths, and processing logic require a formal change request, approval, and testing process equivalent to application code changes. Batch job configurations in production are treated as production code.

**Output reconciliation before release:** Payroll batches, payment runs, and GL posting jobs produce a reconciliation report that compares outputs to expected totals (prior period, approved totals, or an independently calculated control total) before outputs are released to downstream systems. Variances above a threshold require authorised exception approval.

**Completion monitoring and alerting:** All batch jobs are monitored for completion status. Failed, incomplete, or overdue jobs generate alerts to designated operators. Silently failed jobs are not acceptable.

**Input data validation:** Batch jobs validate input file format, record count, and control totals before processing. Jobs that receive malformed or out-of-range input data reject the input and alert an operator rather than processing the invalid data.

**Segregation of batch scheduling from financial processing:** Users who configure and run batch jobs should not also have the ability to approve the financial outputs those jobs produce. Batch operators and financial approvers are separate roles.

---

## How Auditors Test It

When auditing Application Batch Processing for Groups D, E, and F, an IT auditor will typically:

**Inventory all batch jobs in scope:** Request a list of all scheduled batch jobs in key finance, payroll, and ERP environments. Assess whether the inventory is complete and maintained. Jobs not in the inventory are unmanaged.

**Test change control for batch job modifications:** For a sample of batch job configuration changes during the period, confirm that each change was accompanied by a formal change request and approval. Test whether job modifications can be made outside the change control process.

**Test output reconciliation:** For payroll and payment run batch jobs, confirm that reconciliation reports are produced and reviewed before outputs are released. Test the reconciliation thresholds. Confirm that exceptions are investigated and approved before release.

**Test completion monitoring:** Confirm that a monitoring process exists that detects and alerts on failed or overdue batch jobs. Test the alerting mechanism. Confirm that alerts are reviewed by designated operators.

**Assess input validation:** For key batch jobs that process input files from other systems, test whether the job validates input format, record count, and control totals before processing. Test the response to malformed input: does the job halt and alert, or process the invalid data?

**Review segregation of duties:** Confirm that the individuals who configure and run batch jobs are not the same individuals who approve the financial outputs those jobs produce.

---

## Lessons and Recommendations

The speed and scale of batch processing is what makes it valuable. It is also what makes control failures in batch environments costly. A payroll overpayment that affects one employee is recoverable. A payroll batch that overpays every employee by 15 percent is a material financial event.

**Treat batch job configuration as production code.** The same change control that applies to application software changes must apply to batch job configurations. An unapproved modification to a payment run parameter is as significant as an unapproved modification to the payment processing code.

**Never release batch outputs without reconciliation.** Every payroll run, payment batch, and GL posting job should produce a control total that is validated against an independently derived expectation before outputs are released. This single control catches the majority of batch processing errors before they produce consequences.

**Monitor batch completion as a real-time operational activity.** A batch job that fails at 3 AM and is not detected until staff arrive at 9 AM has had six hours to affect dependent processes. Completion monitoring with automated alerting reduces that window to minutes.

**Validate inputs before processing.** A batch job that processes malformed or manipulated input data is not a controlled process. Input validation is the first line of defence against data integrity failures in batch environments.

**Segregate who runs jobs from who approves outputs.** If the person who can modify a payroll batch configuration is also the person who approves the payroll output, the control environment has a fundamental segregation gap.

---

## Assess Your Application Batch Processing Controls

The MarcoWeb ITGC Tool covers Application Batch Processing across Groups D, E, and F, with structured assessment templates for job change control, output reconciliation, and completion monitoring.

[Open the ITGC Audit Tool](https://marcoweb-itgc-saas.netlify.app/)
