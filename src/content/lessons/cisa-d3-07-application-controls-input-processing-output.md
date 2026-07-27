---
title: "Application Controls: Input, Processing and Output"
description: "The controls that make a system's transactions complete, accurate and valid, and how they differ from the general controls beneath them. The exam tests which category a control belongs to, and why input validation alone is not enough."
course: "cisa-domain-3"
module: "Domain 3: IS Acquisition, Development and Implementation"
domain: 3
order: 7
minutes: 8
gated: false
taskStatement: "Evaluate whether an application's controls ensure the completeness, accuracy, validity and authorisation of its transactions across input, processing and output."
objectives:
  - "Classify a control as input, processing or output, and state what it assures."
  - "Distinguish application controls from general (IT) controls."
  - "Explain why controls are needed across all three stages, not input alone."
trap: "Confusing application controls with general controls, and assuming input validation alone guarantees a correct result. The exam wants control across input, processing and output together."
quiz:
  - question: "A data-entry screen recalculates and verifies the check digit on every account number a clerk types. This is an example of which type of application control?"
    options:
      - "A processing control"
      - "An input control"
      - "An output control"
      - "A general control"
    answer: 1
    explanation: "A check digit validates data at the point of entry, catching mistyped or transposed account numbers before they enter the system. Validating data as it goes in is the defining purpose of an input control, whose job is to ensure the data entered is complete, accurate, valid and authorised."
    whyWrong:
      - "A processing control governs data once it is inside the system; the check digit acts at the moment of entry, before processing."
      - ""
      - "An output control governs results leaving the system; this control acts on data coming in, not going out."
      - "A general control is pervasive across the IT environment; a check digit is specific to this application's data entry, so it is an application control."
  - question: "During a nightly batch run, the system compares the record count and total value at the start of processing against the count and total at the end. This is an example of which type of control?"
    options:
      - "An input control"
      - "A processing control"
      - "An output distribution control"
      - "A general control over change management"
    answer: 1
    explanation: "Comparing totals carried from the start of a run to the end, run-to-run totals, confirms that records were not lost, added or altered while the system processed them. Assuring completeness and accuracy of data as it is processed is exactly what a processing control does."
    whyWrong:
      - "Input controls act at data entry; this control acts during processing, after the data is already in."
      - ""
      - "Output distribution controls govern who receives results; this control checks integrity through processing, not delivery."
      - "Change management is a general control over the environment; run-to-run totals are a processing control inside this application."
  - question: "What distinguishes application controls from general (IT) controls?"
    options:
      - "Application controls are automated, and general controls are always manual"
      - "Application controls are specific to a particular application or business process; general controls are pervasive across the IT environment and support the reliability of application controls"
      - "Application controls are tested by auditors, and general controls are not"
      - "There is no real difference; the terms are interchangeable"
    answer: 1
    explanation: "Application controls operate within a single application to ensure the completeness, accuracy, validity and authorisation of its transactions. General controls, access management, change management, operations, are pervasive across the IT environment and create the conditions in which application controls can be relied upon. Weak general controls undermine even well-designed application controls."
    whyWrong:
      - "Both application and general controls can be automated or manual; automation is not the distinction."
      - ""
      - "Auditors test both; who tests them is not what separates the two categories."
      - "They are distinct and complementary; treating them as interchangeable loses the relationship the exam tests."
---

## The situation

The whole domain has been about building a system you can trust. This lesson is where that trust becomes concrete: the controls inside the application that make each transaction complete, accurate, valid and authorised, from the moment data is entered to the moment a result leaves the system.

A clerk mistypes an account number. Does the system catch it, or does the payment go to the wrong account, process cleanly, and appear on a report as if it were correct? The answer depends on whether controls sit at every stage, not just the first.

## Application controls versus general controls

First, the distinction the exam returns to again and again.

**Application controls** are specific to one application or business process. They ensure the completeness, accuracy, validity and authorisation of that application's transactions: the check digit on the account field, the reconciliation in the nightly run, the review of the payment report.

**General controls**, the IT general controls at the heart of the ITGC world, are pervasive across the whole environment: access management, change management, IT operations, physical security. They do not process transactions; they create the conditions in which application controls can be trusted.

The two are complementary, and the dependency runs one way. If change management is weak, someone can alter the application's logic without authorisation, and every application control inside it is now suspect. So strong application controls sitting on weak general controls give false comfort. When a question asks you to tell them apart: application controls are specific to a process and assure its transactions; general controls are pervasive and assure the environment.

## The three stages

Within an application, controls are grouped by where in the flow they act. The objective is the same throughout, completeness, accuracy, validity and authorisation, but each stage guards a different point.

**Input controls** ensure the data entering the system is right before it is accepted. They are the cheapest place to catch an error, at the door. Examples:

- **Validation and edit checks**: range checks, limit checks, format checks, existence checks.
- **Check digits**, catching transposed or mistyped identifiers.
- **Sequence checks**, catching missing or duplicate items in a numbered series.
- **Batch control totals**, confirming a batch entered completely.
- **Authorisation**, confirming the input was permitted.

**Processing controls** ensure the data is handled completely and accurately once inside. The data was correct going in; these controls confirm nothing was lost or corrupted while the system worked on it. Examples:

- **Run-to-run totals**, carrying record counts and control totals from the start of a run to the end and comparing them.
- **Reconciliation** between files or stages.
- **Reasonableness and limit checks** applied during calculation.

**Output controls** ensure the results are complete, accurate and reach only the people entitled to them. Examples:

- **Reconciling output** back to the input and processing control totals.
- **Review** of output for completeness and reasonableness.
- **Controlled distribution**, so a report of sensitive data goes only to authorised recipients.
- **Error and exception reports**, surfacing what did not process correctly.

## Why one stage is never enough

The reason all three matter is that each guards against something the others cannot see. Perfect input validation does not help if a processing error then corrupts the data, or if a clean, correct report is emailed to the wrong distribution list. A transaction can be entered correctly, processed wrongly, and output to the wrong person, and only a control at each stage catches its own failure.

So the auditor's question is never just "is there input validation." It is whether the completeness, accuracy, validity and authorisation of the data are protected all the way through: in at the front, intact through the middle, and out only to the right hands. That end-to-end assurance is what makes the delivered system trustworthy, which is the whole purpose of Domain 3.

## Where practitioners go wrong

The first instinct that costs marks is blurring application and general controls, or treating them as the same thing. They are distinct and complementary: application controls assure a process's transactions, general controls assure the environment those controls run in, and weak general controls quietly undermine strong application ones. The second instinct is to treat robust input validation as the whole job. Input controls only guard the door; a trustworthy system needs control across input, processing and output together.

---

That completes Domain 3. You now have the acquisition-and-development half of an auditor's work: how a project is governed and justified, how controls are designed in rather than bolted on, how methodology and testing and conversion decide whether the system arrives trustworthy, how it is put live and reviewed, and the application controls that make its transactions dependable. Next come the two largest domains, operations and resilience, then protection of information assets.
