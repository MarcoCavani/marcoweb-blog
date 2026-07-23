---
title: "Findings, Reporting and Follow-Up"
description: "A finding without a cause is an observation. The four elements, who owns the risk acceptance decision, and why follow-up is where audit functions quietly fail."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 12
minutes: 9
gated: false
videoId: "otsxr3RjTEI"
taskStatement: "Communicate audit results and evaluate the adequacy of management's remediation."
objectives:
  - "Construct a finding containing condition, criteria, cause and effect."
  - "Determine who may accept a risk arising from an unremediated finding."
  - "Evaluate whether follow-up evidence supports closing a finding."
trap: "Closing a finding on management's confirmation that it is fixed. Closure requires the auditor to verify remediation, not to receive assurance that it happened."
quiz:
  - question: "Management disagrees with an audit finding and declines to remediate, stating they accept the risk. What should the IS auditor do?"
    options:
      - "Remove the finding from the report, since management owns the risk"
      - "Report the finding along with management's response and ensure the acceptance is at an appropriate level of authority"
      - "Escalate immediately to the regulator"
      - "Retain the finding but omit management's response to preserve objectivity"
    answer: 1
    explanation: "Management may accept risk; that decision is theirs. The auditor's obligation is to report the finding, record the response, and satisfy themselves that the person accepting the risk has the authority to accept a risk of that magnitude."
    whyWrong:
      - "Removing a supported finding because management disagrees would misrepresent the audit result to those charged with governance."
      - ""
      - "Regulatory escalation is not the auditor's default route and would be a serious step outside normal reporting channels absent a legal obligation."
      - "Management's response belongs in the report. Omitting it denies the reader context and is not what objectivity means."
  - question: "An IS auditor reports that 'access reviews are not performed quarterly as required by policy, because the review report does not show entitlements'. Which element of the finding is MISSING?"
    options:
      - "Condition"
      - "Criteria"
      - "Cause"
      - "Effect"
    answer: 3
    explanation: "The condition, criteria and cause are all present. What is absent is the effect: the consequence or risk arising, such as inappropriate access persisting undetected. Without effect, the reader cannot judge how much the finding matters."
    whyWrong:
      - "The condition is stated: reviews are not performed as required."
      - "The criteria is stated: the policy requiring quarterly reviews."
      - "The cause is stated: the report does not show entitlements."
      - ""
  - question: "During follow-up, management confirms in writing that a previously reported access control weakness has been remediated. What should the IS auditor do before closing the finding?"
    options:
      - "Close the finding, as written confirmation from management is sufficient"
      - "Perform testing to verify that the control now operates as described"
      - "Schedule the area for a full re-audit in the following year"
      - "Close the finding and note the reliance on management's confirmation"
    answer: 1
    explanation: "Follow-up requires the auditor to obtain evidence that remediation is effective. Management's confirmation is a representation, which is among the weakest forms of evidence, and closing on it means the audit function never established that anything changed."
    whyWrong:
      - "Closing on a representation substitutes assertion for evidence, which is the failure mode follow-up exists to prevent."
      - ""
      - "A full re-audit is disproportionate. Targeted testing of the specific remediation is what is required."
      - "Disclosing the reliance does not cure it. The finding would be closed without evidence, and the disclosure simply records that."
---

## The situation

You write: "User access reviews are not being performed in accordance with policy." Management reads it, agrees it is true, and asks what they should do about it. You realise you have not told them, because you have not established why it is happening.

## The four elements

A complete finding contains four things, and the exam tests which one is missing far more often than it tests the list.

**Condition.** What you found. The factual state of affairs, stated without judgement. "Access reviews were performed in two of the four quarters."

**Criteria.** What should be the case, and by whose authority. Policy, standard, regulation, contract, or accepted good practice. Without criteria, a finding is an opinion. "The information security policy requires quarterly reviews."

**Cause.** Why the condition exists. This is what makes the finding actionable, and it is the element most often absent. "Review scheduling depends on a manual calendar reminder held by a single administrator who left in March."

**Effect.** The consequence or risk arising. This is what makes the finding matter, and it is the second most often absent. "Inappropriate access may persist undetected for up to six months, including access held by leavers."

A finding with condition and criteria only tells management they broke a rule. Adding cause tells them what to fix. Adding effect tells them how urgently.

## Root cause

Cause is not the same as the immediate trigger. The reminder-holder leaving is the trigger; the root cause is that a control depended on one person's calendar with no process ownership behind it. Remediation aimed at the trigger produces a new calendar reminder for a new person. Remediation aimed at the root cause produces a scheduled, owned and monitored process.

Exam scenarios often present a plausible immediate cause and a structural one, and expect the structural answer.

## Reporting

Reports go to those who can act and those charged with governance. Findings are ranked by risk, not by the order they were discovered or by which system they concern.

**Management's response is included**, whether or not audit agrees with it. The reader is entitled to see both the finding and what management intends to do.

**Management may accept the risk.** This is the point candidates get wrong most often. Accepting risk is a management prerogative, not an audit decision. The auditor's obligations are to report the finding regardless, to record the acceptance, and to satisfy themselves that the acceptance is made at a level of authority appropriate to the magnitude of the risk. A team leader cannot accept an enterprise-level risk.

If the auditor believes the accepted risk is unacceptable to the organisation, the route is escalation to the audit committee or board, which are the parties with the authority to overrule. Not to a regulator, and not by unilaterally hardening the report.

## Follow-up

Follow-up determines whether agreed remediation was implemented and is effective. It is a required part of the process, not a courtesy.

The essential point: **closure requires audit evidence, not management confirmation.** A written statement that the control is now working is a representation, and representations sit at the bottom of the reliability hierarchy. The auditor tests the remediated control, at a scale proportionate to the risk, before closing.

Where remediation is partial, the finding remains open with the residual issue described. Where the agreed date has passed without action, that in itself is reportable to those charged with governance.

## Control self-assessment and audit quality

**Control self-assessment** has process owners evaluate their own controls, with audit facilitating rather than performing. It increases coverage and control awareness. Its limitation is definitional: it is not independent, so it supplements audit and never replaces it. Any exam option treating CSA results as a substitute for audit testing is wrong.

**Quality assurance of the audit function** covers internal review of engagements and periodic external assessment. The function that assures everyone else is expected to be assured itself, and the external element exists because internal review of your own function is subject to the same independence problem audit exists to solve.

## Where practitioners go wrong

The dominant error is closing findings on assurance. Follow-up is unglamorous, the remediation was agreed months ago, and management says it is done. Closing on that is the single most common real-world audit failure and it is heavily tested.

The second is treating management's disagreement as a reason to soften or drop a supported finding. The finding stands on its evidence. What changes is that the report now also carries management's position.
