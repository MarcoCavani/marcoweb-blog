---
title: "Test Methods and CAATs"
description: "Inquiry, observation, inspection and reperformance carry very different evidential weight, and computer assisted techniques let you stop sampling altogether."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 11
minutes: 9
gated: false
videoId: "FYa3hS5dZmM"
taskStatement: "Select test methods appropriate to the assurance required, including the use of computer assisted audit techniques."
objectives:
  - "Rank the four test methods by the strength of evidence each produces."
  - "Determine when reperformance is required rather than inspection."
  - "Identify where a CAAT permits full population testing instead of sampling."
trap: "Relying on inquiry. Asking how a control works is a way to understand it, never a way to conclude that it operated."
quiz:
  - question: "Which test method provides the STRONGEST evidence that an automated reconciliation control operates correctly?"
    options:
      - "Inquiry of the control owner about how the reconciliation works"
      - "Observation of the reconciliation being run"
      - "Inspection of signed reconciliation reports"
      - "Reperformance of the reconciliation by the auditor"
    answer: 3
    explanation: "Reperformance produces the strongest evidence because the auditor independently executes the control and compares the result. It establishes that the control produces the correct outcome, not merely that it was carried out."
    whyWrong:
      - "Inquiry establishes understanding of the design. It cannot establish that the control operated or produced correct results."
      - "Observation shows the control being performed at the moment the auditor watched, and people behave differently when observed."
      - "Inspection of signed reports shows the control was performed and someone attested to it. It does not establish that the reconciliation was correct."
      - ""
  - question: "An IS auditor wants to test whether any user holds both the ability to create a vendor and the ability to approve a payment, across 12,000 accounts. The MOST appropriate approach is:"
    options:
      - "Select a statistical sample of accounts and test each for the conflict"
      - "Use a CAAT to test the entire population for the conflicting combination"
      - "Inquire of the access management team whether such conflicts exist"
      - "Inspect the segregation of duties matrix for conflicting roles"
    answer: 1
    explanation: "Segregation of duties conflicts are exactly the case for a CAAT. The rule is precise and machine-testable, and testing the full population removes sampling risk entirely, giving a definitive answer rather than a projected rate."
    whyWrong:
      - "Sampling would leave sampling risk on a question that can be answered completely, and a conflict missed in the untested remainder is exactly the item that matters."
      - ""
      - "Inquiry produces a representation, not evidence, and the access team may not know."
      - "The matrix documents which combinations are intended to be prohibited. It says nothing about whether anyone actually holds them."
  - question: "An IS auditor observes the data centre access procedure and finds it correctly followed. What is the PRIMARY limitation of this evidence?"
    options:
      - "Observation cannot be documented in working papers"
      - "The procedure may be performed differently when the auditor is not present"
      - "Observation is not accepted as audit evidence under the standards"
      - "The auditor may lack the expertise to evaluate what was observed"
    answer: 1
    explanation: "Observation evidences behaviour at the time of observation, and behaviour changes when people know they are being watched. It also covers only that moment, so it cannot support a conclusion about the period."
    whyWrong:
      - "Observation is routinely documented in working papers. Documentation is not the limitation."
      - ""
      - "Observation is a legitimate and standard test method. It is simply weaker than inspection or reperformance."
      - "Expertise is a general consideration for any method and is not specific to observation."
---

## The situation

You need to conclude that the nightly interface reconciliation between the payment system and the ledger works. You ask the control owner to explain it. They explain it clearly and correctly.

You have learned how the control is meant to work. You have no evidence that it did.

## The four methods, in ascending order of strength

**Inquiry** is asking. It is essential for understanding design, identifying who does what and finding out where the process actually differs from the documented one. It is the **weakest** form of evidence and cannot on its own support a conclusion that a control operated. Every exam question offering inquiry as the way to conclude something is offering a wrong answer.

**Observation** is watching the control being performed. It is stronger than inquiry because you see the activity rather than hearing about it, but it carries two well known limits: people perform differently when watched, and it evidences only the moment observed. Useful for physical and manual controls, weak for period conclusions.

**Inspection** is examining evidence that the control was performed: signed reports, approval records, system logs, configuration files. This is the workhorse of controls testing. Its limitation is that it evidences performance, not correctness. A signed reconciliation shows somebody signed it.

**Reperformance** is the auditor independently executing the control and comparing results. It is the **strongest**, because it establishes that the control produces the correct outcome. Recalculating the reconciliation, re-running the access report against the approved matrix, recomputing a sample of payroll calculations.

The ranking matters because questions often present all four as options and ask which provides the strongest, or best, evidence. Reperformance wins unless something in the stem rules it out.

## Computer assisted audit techniques

CAATs are tools and techniques that let the auditor examine data directly, and their significance for the exam is what they change about sampling.

**Full population testing.** Where the condition is precisely definable, a CAAT can test every record rather than a sample. This eliminates sampling risk altogether. Segregation of duties conflicts, duplicate payments, entries posted outside business hours, dormant accounts with active access: all are complete-population questions.

When a scenario describes a precise, machine-testable rule over a large population, and one option offers a CAAT over the full population while another offers a sample, the CAAT is the better answer. A projected rate is a weaker conclusion than a definitive one.

**Common CAAT applications:**

- Extracting and analysing entire transaction populations.
- Identifying exceptions against defined rules.
- Comparing files across systems to identify differences.
- Recalculating derived values independently.
- Testing the entire access population against the approved matrix.

**Continuous auditing** extends this by running the tests on an ongoing basis rather than at a point in the audit cycle, which moves detection closer to the event. Note the distinction the exam draws: continuous auditing is performed by audit, while continuous monitoring is performed by management. Confusing the two is an independence error as much as a terminology one.

**Integrated test facility** processes fictitious audit transactions through the live system alongside real ones. It provides strong evidence about processing, and carries the obvious risk that test data must not contaminate live records.

**Test data** involves submitting prepared transactions through the system to see how it handles them. It evidences how the system processes, not what it actually processed.

**Parallel simulation** processes real data through an auditor-controlled program and compares the output to the system's. It evidences that real production processing was correct, which test data cannot.

## Where practitioners go wrong

The dominant error is concluding from inquiry. In practice a great deal of audit runs on conversations, and an experienced auditor can tell when someone knows their process. The exam does not accept this at all. Inquiry corroborated by inspection is fine; inquiry alone is never the answer to whether a control operated.

The second is defaulting to sampling out of habit. Sampling exists because testing everything was once impossible. Where the data is available and the rule is precise, sampling a population a CAAT could test completely is a weaker audit, and the exam rewards recognising that.
