---
title: "Audit Types and Engagement Objectives"
description: "Compliance, substantive, operational and integrated engagements ask different questions. Choosing the wrong one produces a technically correct answer to something nobody asked."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 6
minutes: 7
gated: false
videoId: "KexzBDwxuQg"
taskStatement: "Select the audit approach and engagement objective appropriate to the assurance being sought."
objectives:
  - "Distinguish compliance testing from substantive testing by what each concludes."
  - "Determine when the result of compliance testing permits reduced substantive testing."
  - "Identify the engagement type appropriate to a stated assurance need."
trap: "Treating compliance and substantive testing as interchangeable evidence. They answer different questions, and only one of them tells you the data is right."
quiz:
  - question: "An IS auditor tests whether every change deployed in the period had an approved change ticket. This is an example of:"
    options:
      - "Substantive testing, because it examines actual transactions"
      - "Compliance testing, because it tests whether a control operated as prescribed"
      - "Analytical review, because it compares populations"
      - "Reperformance, because the auditor repeats the control"
    answer: 1
    explanation: "Compliance testing establishes whether a control operated as designed throughout the period. Checking that changes carried approvals tests the operation of the change approval control, not the correctness of the underlying data."
    whyWrong:
      - "Examining records is not what makes a test substantive. Substantive testing concludes on whether the data itself is materially correct, which this test does not do."
      - ""
      - "Analytical review draws conclusions from relationships and trends in data, not from checking individual items against a control requirement."
      - "Reperformance would mean the auditor independently executing the change approval process. Inspecting evidence that it happened is inspection, not reperformance."
  - question: "Compliance testing of access provisioning controls produces a high exception rate. What is the MOST appropriate effect on the substantive testing planned?"
    options:
      - "Substantive testing can be reduced, since the deficiency is already documented"
      - "Substantive testing should be increased, since the control cannot be relied upon"
      - "Substantive testing should be unchanged, as the two are independent"
      - "Substantive testing should be replaced by a recommendation to management"
    answer: 1
    explanation: "Compliance testing tells you whether you can rely on the control. A high exception rate means you cannot, so control risk is high and the auditor reduces detection risk by performing more substantive work to determine whether actual harm occurred."
    whyWrong:
      - "This inverts the relationship. Documenting that a control failed does not tell you whether inappropriate access actually exists, which is precisely what now needs testing."
      - ""
      - "They are not independent. The whole purpose of compliance testing is to determine how much substantive testing is required."
      - "Making a recommendation without establishing the consequence leaves the audit unable to say whether anything went wrong, which is the question management will ask first."
  - question: "Management asks whether the new procurement system is delivering the efficiency savings promised in its business case. This is BEST addressed by:"
    options:
      - "A compliance audit against the procurement policy"
      - "An operational audit examining effectiveness and efficiency"
      - "A substantive audit of procurement transactions"
      - "A forensic audit of procurement decisions"
    answer: 1
    explanation: "Operational audits examine whether a process achieves its objectives economically and efficiently. Benefits realisation against a business case is exactly that question, and neither compliance nor substantive testing addresses it."
    whyWrong:
      - "Compliance testing would establish whether the policy was followed, which can be entirely true while the promised savings fail to materialise."
      - ""
      - "Substantive testing concludes on the accuracy of transactions, not on whether the expected benefits were achieved."
      - "Forensic work responds to suspected fraud or irregularity. Nothing in the scenario suggests either."
---

## The situation

Management asks for assurance over the payroll system. You test that every change had an approval, that access was granted through the correct workflow, and that the interface reconciliation ran nightly. Everything passes. You report that payroll controls are operating effectively.

Then someone points out that payroll has been overpaying a group of staff for eight months. Nothing you tested would have found it.

## Compliance testing

Compliance testing determines whether **a control operated as prescribed** throughout the period. It concludes on the control, not on the data.

Examples: every change had an approval; every leaver was deprovisioned within the target; the reconciliation was performed and signed each night.

The result of compliance testing drives the extent of substantive work. If controls test clean, control risk is lower and the auditor can justify less substantive testing. If exceptions are high, the control cannot be relied upon and substantive testing increases.

## Substantive testing

Substantive testing determines whether **the data or outcome is materially correct**, regardless of what the controls did.

Examples: recalculating gross-to-net pay for a sample of employees; confirming that the entitlements in the identity provider match the approved access matrix; agreeing the interface totals to the general ledger.

This is what would have found the overpayment. Compliance testing establishes that the machinery ran. Substantive testing establishes that the machinery produced the right answer.

The exam tests the relationship constantly, usually as: high compliance exceptions mean more substantive testing. The auditor cannot reduce control risk, only respond to it by reducing detection risk.

## Other engagement types

**Operational audit** examines whether a process achieves its objectives economically, efficiently and effectively. Benefits realisation, capacity utilisation and process cost sit here. It is not concerned with compliance for its own sake.

**Integrated audit** combines IS and financial or operational audit, so that general and application controls are evaluated alongside the financial assertions that depend on them. This is the natural home of "can we rely on this automated control".

**Forensic audit** responds to suspected fraud or irregularity. It differs in method, in evidence handling, and in the need to preserve chain of custody. Nothing about the routine audit approach applies unchanged.

**Administrative or compliance audit against a framework**, such as an ISO standard or regulatory obligation, is assessed against that external criterion rather than against internal policy.

## Where practitioners go wrong

The commonest error is presenting compliance results as if they answered a substantive question. "All changes were approved" says nothing about whether the changes were correct. Auditors who have spent years in controls testing develop a reflex that a clean control test means a clean outcome, and the exam sets traps on exactly that reflex.

The second is misreading the direction of the compliance-to-substantive relationship. More control exceptions mean more substantive work, never less. If an option offers to reduce testing because a deficiency has already been identified, it is wrong.
