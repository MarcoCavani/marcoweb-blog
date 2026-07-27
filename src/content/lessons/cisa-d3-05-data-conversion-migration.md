---
title: "Data Conversion and Migration"
description: "Moving data to a new system is a one-time, high-risk event. The exam tests reconciliation of source to target, and why the auditor verifies the counts rather than trusting a 'migration complete' report."
course: "cisa-domain-3"
module: "Domain 3: IS Acquisition, Development and Implementation"
domain: 3
order: 5
minutes: 8
gated: false
taskStatement: "Evaluate whether data moved to a new system is complete, accurate and reconciled to its source before the old system is retired."
objectives:
  - "Identify reconciliation of source to target as the core conversion control."
  - "Explain why independent verification outranks a migration completion report."
  - "Recognise the risk of decommissioning the source system before conversion is validated."
trap: "Trusting the project's assurance that the conversion succeeded. The exam wants independent reconciliation of record counts and control totals, and the old data kept until it is confirmed."
quiz:
  - question: "What is the MOST important control over the conversion of data from an old system to a new one?"
    options:
      - "Encrypting the data while it is being transferred"
      - "Reconciling the migrated data to the source, for completeness and accuracy"
      - "Converting the data as quickly as possible to reduce downtime"
      - "Deleting the old data immediately after the transfer"
    answer: 1
    explanation: "The point of conversion is that every record arrives, complete and unchanged. Reconciling the target back to the source, using record counts and control totals, is the control that proves it: that nothing was lost, duplicated or altered. Without reconciliation, the organisation is running on data it has not confirmed is correct."
    whyWrong:
      - "Encryption protects data in transit but says nothing about whether all of it arrived accurately; it is a confidentiality control, not a completeness one."
      - ""
      - "Speed reduces downtime but is irrelevant to whether the data converted correctly; rushing raises the risk of error."
      - "Deleting the source immediately removes the only fallback and the reference for reconciliation, the opposite of a control."
  - question: "An IS auditor is verifying that a data migration completed correctly. What is the MOST reliable evidence?"
    options:
      - "The project team's report stating the migration was successful"
      - "Independent reconciliation of record counts and control totals between source and target"
      - "The absence of user complaints since go-live"
      - "The migration tool's log showing it ran to completion"
    answer: 1
    explanation: "Independently reconciling the source and target, counts and control totals the auditor verifies rather than accepts, is the most reliable evidence, because it does not depend on the party that performed the migration. This is the Domain 1 evidence hierarchy again: data you verify yourself outranks a report from those who did the work."
    whyWrong:
      - "A success report is self-reported by the team whose work is in question, the weakest position on the reliability hierarchy."
      - ""
      - "Absence of complaints is not measurement; errors in migrated data often surface long after go-live, if at all."
      - "A tool log shows the process ran, not that the data is complete and accurate; a job can finish and still drop records."
  - question: "After a data migration, the project proposes to decommission the old system immediately to save cost. What is the auditor's GREATEST concern?"
    options:
      - "The old system's licences may still be valid"
      - "If conversion errors are found later, there is no source to reconcile against and no fallback"
      - "Decommissioning takes staff time"
      - "The old hardware could be reused"
    answer: 1
    explanation: "The source system and its data are the reference for reconciliation and the fallback if the new system fails. Retiring them before conversion has been fully validated and signed off removes the ability to detect and correct errors, and the ability to revert. The old data should be retained until the new system is confirmed correct and stable."
    whyWrong:
      - "Licence validity is a cost and compliance detail, not the assurance risk of losing the reference data."
      - ""
      - "The staff time to decommission is trivial next to losing the fallback and the reconciliation source."
      - "Reusing hardware is an efficiency point, unrelated to whether the converted data can still be verified."
---

## The situation

The new system goes live on Monday. Over the weekend, three years of customer and transaction data will move across from the old one. The project plan calls the conversion a single line item, and the step after it, on the same weekend, is to switch the old system off to save on running costs.

Everything about the whole project now rests on one overnight event that, if it goes wrong quietly, no one may notice until it is too late to fix. That is what makes conversion the sharpest risk in the domain.

## A one-time, high-stakes event

Most controls operate continuously and get many chances to catch a problem. Data conversion gets one. The data moves once, and if records are lost, duplicated or corrupted in the move, the new system starts its life on wrong data, and every process built on it inherits the error.

So conversion is planned and controlled as the high-risk event it is:

- **Cleanse first.** Duplicates, errors and obsolete records in the old system should be fixed before conversion, not carried into the new one. Garbage converted is still garbage.
- **Map the fields.** Every field in the source must map to the right field in the target, with values translated correctly where formats differ.
- **Convert, then validate.** The move is followed by checking, not assumed to have worked.

## Reconciliation is the control

The control that proves a conversion is **reconciliation of source to target**. Two questions, both answerable with evidence:

- **Completeness**, did every record arrive? Compare record counts, source against target. A mismatch means records were lost or duplicated.
- **Accuracy**, did the values arrive unchanged? Compare control totals, the sum of a numeric field such as account balances, across source and target. Equal totals give strong evidence the values were not altered in the move.

An auditor verifying a conversion applies the Domain 1 evidence hierarchy directly. The project's "migration successful" report is self-reported by the people who ran it. The migration tool's log shows the job finished, not that it finished correctly, a run can complete and still silently drop rows. The strongest evidence is the reconciliation the auditor performs or independently re-checks: counts and totals compared against the source. Verify it yourself; do not accept that it was verified.

## Keep the source until you are sure

Because the old system is both the reconciliation reference and the fallback, it must not be switched off the moment the data appears to have moved. If a conversion error surfaces a week later, and they often surface late, the source is what you reconcile against to find it, and reverting to the old system is the only way to keep operating while you do.

So the sequence matters: convert, reconcile, validate, obtain business sign-off, and only then plan to decommission the source, with the old data retained for a defined period. Retiring the source to save cost before conversion is confirmed trades a small saving for the loss of every means of detecting and recovering from a bad migration.

## Where practitioners go wrong

The first instinct that costs marks is trusting the assurance that the conversion worked, the report, the tool log, the quiet absence of complaints, instead of reconciling the data independently. The second is treating decommissioning the old system as a tidy final step to be done at once, when it is the removal of the fallback and the reconciliation reference. Conversion is a one-time event; control it like one, prove it with counts and totals you check yourself, and keep the old data until the new system has earned your trust.
