---
title: "Design Effectiveness and Operating Effectiveness"
description: "Two questions that sound alike and are not. Testing the second when you have not established the first produces findings that do not hold up."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 7
minutes: 8
gated: false
taskStatement: "Evaluate whether a control is capable of addressing the risk, and whether it operated as intended throughout the period."
objectives:
  - "State the question each type of effectiveness answers."
  - "Explain why design is assessed before operation."
  - "Determine the appropriate conclusion when a well-operated control is poorly designed."
trap: "Testing a sample of a control that could never have addressed the risk. Perfect operation of the wrong control is still a control failure, and the finding belongs against design."
quiz:
  - question: "An IS auditor finds that user access reviews were completed on schedule every quarter, signed by the correct approvers. The review report lists only user names and does not show the entitlements held. What is the MOST appropriate conclusion?"
    options:
      - "The control is operating effectively"
      - "The control is designed effectively but is not operating"
      - "The control is not designed effectively"
      - "No conclusion can be reached without testing more quarters"
    answer: 2
    explanation: "A reviewer who cannot see entitlements cannot determine whether access is appropriate, so the control as designed cannot achieve its objective no matter how diligently it is performed. This is a design deficiency, and the flawless operation does not cure it."
    whyWrong:
      - "Operating effectively means the control achieved its objective as designed. The evidence here shows the activity was performed, not that inappropriate access could have been identified."
      - "This reverses the finding. The control operated exactly as designed; the design is what fails."
      - ""
      - "More quarters of the same evidence would produce the same conclusion. Additional operating evidence cannot resolve a design deficiency."
  - question: "Which should an IS auditor evaluate FIRST when testing a control?"
    options:
      - "Whether the control operated throughout the period"
      - "Whether the control as designed would address the risk"
      - "Whether the control owner understands their responsibility"
      - "Whether compensating controls exist"
    answer: 1
    explanation: "Design is assessed first. If the control could not address the risk even when performed perfectly, testing its operation across a sample tells you nothing useful and wastes the engagement's time."
    whyWrong:
      - "Operating effectiveness is meaningless until you know the control is capable of working. Testing operation first risks concluding that an ineffective control is fine."
      - ""
      - "Owner understanding is an input to operation, and it matters, but it comes after establishing that the control is capable of addressing the risk."
      - "Compensating controls are considered once a deficiency has been identified, not before the control itself has been evaluated."
  - question: "A control is designed appropriately, but testing shows it was not performed in three of the twelve months under review. This is BEST described as:"
    options:
      - "A design deficiency"
      - "An operating effectiveness deficiency"
      - "A scope limitation"
      - "An immaterial exception"
    answer: 1
    explanation: "The control is capable of addressing the risk, so design is sound. It did not operate consistently throughout the period, which is precisely an operating effectiveness deficiency, and it means reliance cannot be placed on the control for those months."
    whyWrong:
      - "Design concerns whether the control could work. Nothing in the scenario suggests it could not."
      - ""
      - "A scope limitation is a restriction on the auditor's ability to obtain evidence. Here the evidence was obtained and it showed the control did not operate."
      - "Three months of a twelve month period is a quarter of the year without the control operating, which cannot be dismissed as immaterial without further analysis."
---

## The situation

Every quarterly access review in the period was completed on time and signed by the right manager. The evidence is immaculate. You are about to conclude that access review is operating effectively.

Then you look at what the reviewers were sent: a list of user names. No entitlements, no roles, no permissions. They were asked to confirm that these people still work here, which is not the same question as whether their access is still appropriate.

## Two different questions

**Design effectiveness** asks: if this control were performed exactly as intended, would it address the risk?

**Operating effectiveness** asks: was it actually performed that way, consistently, throughout the period?

The access review above is designed ineffectively. It cannot identify inappropriate access, because the reviewer never sees the access. Its perfect operation is irrelevant, and reporting it as an operating issue would misdirect management's remediation entirely: they would tighten the schedule when they need to redesign the report.

## Why design comes first

Assessing design before operation is not merely tidy sequencing. Testing the operation of a control that cannot work is wasted effort, and worse, it risks a clean conclusion on a control that never addressed the risk.

Design assessment normally involves walking the control through once: understanding the risk, the control objective, who performs the control, what they see, what they compare it against, and what happens when they find an exception. That last part is where design deficiencies most often hide. A control with no defined response to an exception rarely achieves anything.

Only once design is established as sound does sampling across the period make sense.

## What each conclusion means

| Design | Operation | Conclusion |
| --- | --- | --- |
| Effective | Effective | Reliance can be placed on the control |
| Effective | Deficient | The control could work, but did not. Reliance is not available for the affected period |
| Deficient | Not assessed | The control cannot achieve its objective. Do not test operation |

A control cannot be operating effectively if it is designed ineffectively. That combination does not exist, and options offering it are wrong.

## Compensating controls

When a control is deficient, the auditor considers whether another control addresses the same risk. A genuine compensating control must:

- Address the **same risk**, not a related one.
- Operate at a **sufficient level of precision** to catch what the failed control would have caught.
- Be **independent** of the failed control, so the same weakness does not disable both.

A monthly management review of totals does not compensate for an access control failure, because it would not detect a single inappropriate transaction. Precision is the test candidates most often skip.

## Where practitioners go wrong

The dominant error is starting with sampling. Auditors under time pressure pull twenty five items and start testing, because sampling feels like real audit work and design assessment feels like reading documents. On the exam, an option that tests operation before establishing design is close to always wrong.

The second error is classifying a design deficiency as an operating one because the operating evidence is what you happened to look at. The classification determines what management fixes, so getting it wrong makes the finding useless even when the underlying observation is correct.
