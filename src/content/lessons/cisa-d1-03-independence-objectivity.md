---
title: "Independence and Objectivity"
description: "Why the most helpful thing an auditor can do is often the one thing they must refuse, and how the exam ranks independence against every practical consideration."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 3
minutes: 8
gated: false
videoId: "zkvTRJG2y7I"
taskStatement: "Evaluate threats to the independence and objectivity of the IS audit function and determine an appropriate safeguard."
objectives:
  - "Distinguish organisational independence from individual objectivity."
  - "Recognise the self-review, advocacy and familiarity threats in an engagement scenario."
  - "Select a safeguard proportionate to the threat rather than defaulting to disclosure."
trap: "Believing that disclosing a conflict resolves it. Disclosure is the weakest safeguard and rarely the exam's answer when the auditor could simply not take the work."
quiz:
  - question: "An IS auditor previously worked for two years as the system administrator of the ERP platform now in scope for audit. What is the MOST appropriate action?"
    options:
      - "Proceed, since the auditor's system knowledge improves audit quality"
      - "Proceed, but disclose the prior role in the audit report"
      - "Assign the ERP portion of the engagement to another auditor"
      - "Delay the audit until the auditor has been out of the role for five years"
    answer: 2
    explanation: "This is a self-review threat: the auditor would be assessing controls they previously operated. The proportionate safeguard is to reassign that portion of the work to someone without the prior involvement, which removes the threat rather than merely reporting it."
    whyWrong:
      - "System knowledge is genuinely valuable, but the exam consistently ranks objectivity above the efficiency gained from familiarity. This is the pragmatic answer and it is the trap."
      - "Disclosure informs the reader that the work may be compromised without preventing the compromise. It is the weakest safeguard and is not sufficient when reassignment is available."
      - ""
      - "There is no fixed cooling-off period in this context, and delaying a needed audit for years is disproportionate when reassignment solves it immediately."
  - question: "Which of the following BEST ensures the organisational independence of the internal IS audit function?"
    options:
      - "Rotating audit staff across different areas annually"
      - "Having the audit function report functionally to the audit committee"
      - "Requiring auditors to sign an annual conflict of interest declaration"
      - "Prohibiting auditors from accepting gifts from vendors"
    answer: 1
    explanation: "Organisational independence is structural. A functional reporting line to the audit committee means the function's scope, budget and findings are not controlled by the management it audits. The other options address individual objectivity, which is a different and narrower thing."
    whyWrong:
      - "Rotation addresses the familiarity threat for individuals, which is useful, but it does nothing about whether the function itself can be pressured by the management it reports to."
      - ""
      - "Declarations address individual objectivity and depend on self-reporting. They cannot correct a reporting line that puts audit under the CIO."
      - "Gift policies address a specific individual threat. They are far too narrow to establish independence of the function."
  - question: "During an audit, management asks the IS auditor to recommend a specific vendor for a new identity management system. What is the auditor's GREATEST concern in agreeing?"
    options:
      - "The auditor may not have evaluated all available vendors"
      - "The recommendation may exceed the agreed audit scope"
      - "The auditor would be advocating for a party and could not later audit the selection objectively"
      - "The vendor may not meet the organisation's technical requirements"
    answer: 2
    explanation: "Recommending a specific vendor puts the auditor in an advocacy position and creates a self-review threat over any future audit of the selection or implementation. The auditor can advise on control requirements the solution should meet, without choosing the supplier."
    whyWrong:
      - "Incomplete evaluation is a quality problem in the recommendation. The independence problem exists even if the evaluation were thorough."
      - "Scope can be varied by agreement. The independence threat cannot be cured by simply widening the scope."
      - ""
      - "Technical fit is management's concern and is a consequence of a poor choice, not the auditor's professional exposure in making it."
---

## The situation

The CIO asks you to sit on the design workshops for the new access recertification process. You know more about access recertification than anyone in the room. You would genuinely improve the outcome. The access management audit is scheduled for the same year.

Saying yes is the most useful thing you could do. It is also the answer the exam marks wrong.

## Two different things

The exam distinguishes carefully between them, and questions often turn on which one is at stake.

**Independence** is organisational and structural. It concerns the audit function's position: who it reports to, who sets its budget and scope, and whether the management it audits can influence its findings. A functional reporting line to the audit committee is the standard safeguard.

**Objectivity** is individual and mental. It concerns whether a particular auditor can form an unbiased judgement on a particular engagement. Prior employment in the area, personal relationships and having designed the control are all objectivity threats.

An audit function can be perfectly independent while an individual auditor on it is not objective for a given job, and the fix for that is reassignment, not restructuring.

## The threats worth recognising

**Self-review.** You would be auditing your own work, whether that work was designing a control, implementing a system, or operating the process in a previous role. This is the most heavily tested threat in Domain 1.

**Advocacy.** You promote a position, product or party, which compromises later objectivity. Recommending a named vendor is the classic exam scenario.

**Familiarity.** Long association with the auditee produces sympathy and reduced professional scepticism. Rotation is the standard safeguard.

**Self-interest.** A financial or personal stake in the outcome.

**Intimidation.** Pressure, actual or perceived, from management with the standing to affect the auditor.

## Safeguards, ranked

The exam expects the safeguard to be proportionate, and it ranks them. From strongest to weakest:

1. **Do not take the work**, or remove the conflicted individual from that part of it.
2. **Reassign** to an auditor without the involvement.
3. **Independent review** of the conflicted auditor's work by someone unconflicted.
4. **Disclosure** to those charged with governance.

Candidates reach for disclosure because in professional life it is often what happens. On the exam, disclosure is the last resort. If an option offers reassignment and another offers disclosure, reassignment wins.

## What the auditor may still do

Independence does not mean silence. An IS auditor can legitimately:

- State the control requirements a solution should satisfy.
- Comment on risks in a proposed design.
- Advise on whether a control as described would address a known risk.

What they cannot do is select, design, implement, operate or approve the control, or accept the risk. That line, between advising on control requirements and making the management decision, is where most scenario questions are set.

## Where practitioners go wrong

Internal auditors in smaller organisations genuinely do help design controls, because there is nobody else who knows how. The exam does not model that world. If an option has the auditor performing a management function, it is wrong, however sensible it would be in a forty person company.

The second error is assuming that expertise cures the conflict. Being the best qualified person to design the control is exactly what creates the self-review threat when you later audit it.
