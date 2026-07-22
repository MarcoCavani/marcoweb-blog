---
title: "Risk-Based Audit Planning"
description: "How the annual audit plan is built from a risk assessment rather than from last year's plan, and why coverage is not the objective."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 4
minutes: 9
gated: false
taskStatement: "Develop a risk-based IS audit plan that allocates audit resources according to assessed risk."
objectives:
  - "Construct an audit universe and rank it by inherent and residual risk."
  - "Explain why residual risk drives resource allocation while inherent risk drives the universe."
  - "Determine the correct response when a significant risk emerges after the plan is approved."
trap: "Planning for even coverage. Auditing everything on a cycle feels responsible and is the opposite of risk-based."
quiz:
  - question: "An IS auditor is preparing the annual audit plan. Which of the following should be the PRIMARY basis for deciding which areas to audit?"
    options:
      - "The areas not audited in the previous three years"
      - "The results of a risk assessment covering the audit universe"
      - "Requests received from senior management"
      - "The areas where the most audit findings were raised last year"
    answer: 1
    explanation: "Risk-based planning allocates limited audit resource to the areas of greatest risk to the organisation's objectives. That requires a risk assessment across the audit universe, and it is the primary input by definition."
    whyWrong:
      - "Cycle-based coverage is the classic distractor. It feels diligent, but it allocates effort by elapsed time rather than by risk, and it guarantees resource goes to low-risk areas simply because their turn has come."
      - ""
      - "Management requests are a legitimate input and should be considered, but making them primary lets the auditee direct the audit function and threatens independence."
      - "Prior findings indicate where problems were found before, not where risk is greatest now. A remediated area may now be low risk, and an unaudited area may be high risk."
  - question: "Which risk should an IS auditor consider when determining whether an area belongs in the audit universe at all?"
    options:
      - "Residual risk, because it reflects risk after controls"
      - "Inherent risk, because it exists regardless of the controls in place"
      - "Detection risk, because it reflects the auditor's own procedures"
      - "Control risk, because it reflects the likelihood controls fail"
    answer: 1
    explanation: "Inherent risk is the risk before considering controls, so it establishes which areas are capable of causing significant harm and therefore belong in the universe. Residual risk then helps prioritise among them."
    whyWrong:
      - "Residual risk is the right basis for prioritising effort among areas already in the universe, but an area with low residual risk and high inherent risk still belongs in the universe, because the controls could degrade."
      - ""
      - "Detection risk concerns the auditor's own procedures failing to find a problem. It affects how much testing to perform, not which areas exist."
      - "Control risk is a component of the assessment but on its own it says nothing about whether an area matters to the organisation."
  - question: "Three months after the audit plan is approved, the organisation acquires a competitor with a substantially different technology estate. What should the IS auditor do?"
    options:
      - "Complete the approved plan and address the acquisition next year"
      - "Reassess the risk and propose revisions to the plan for approval"
      - "Immediately begin an audit of the acquired environment"
      - "Ask management which areas of the plan should be dropped"
    answer: 1
    explanation: "The audit plan is expected to be responsive to changes in the risk profile. The correct response is to reassess risk and take proposed changes back through the same approval route the original plan followed."
    whyWrong:
      - "Deferring a material change in the risk profile for up to a year defeats the purpose of risk-based planning."
      - ""
      - "Starting work before reassessing and obtaining approval bypasses governance of the plan, even though the instinct to look at the new estate is sound."
      - "Letting management choose what to drop hands the prioritisation decision to the auditee and threatens independence. Audit proposes, the audit committee approves."
---

## The situation

You have resource for eleven audits this year. The audit universe has sixty entries. Last year's plan covered eleven different ones, and the year before that another eleven. At that rate every system is audited once every five years, which sounds like reasonable coverage.

It is also not risk-based planning, and on the exam it is wrong.

## The audit universe

The universe is the complete set of auditable entities: systems, processes, business units, third parties, projects. Building it is the first step, and it is built from the organisation, not from the audit function's history.

An entity belongs in the universe if it could, in the absence of controls, cause harm significant to the organisation's objectives. That is a statement about **inherent risk**, which is risk before controls are considered. Controls come next.

## Ranking the universe

Once the universe exists, each entity is assessed. The exam expects familiarity with the components:

**Inherent risk** is the risk in the absence of any controls. High-value data, regulatory exposure, financial materiality and public visibility all raise it.

**Control risk** is the risk that controls fail to prevent or detect a problem in time. A control environment with a history of failures raises it.

**Detection risk** is the risk that the auditor's own procedures fail to detect a material issue. This one is about the audit, not the auditee, and it is the risk the auditor controls directly by testing more, or differently.

**Residual risk** is what remains after controls operate. It is the primary driver of where audit effort goes, because it reflects actual current exposure.

The relationship the exam tests: if control risk is assessed as high, the auditor reduces detection risk by performing more extensive testing. The auditor cannot change inherent or control risk; those belong to management. The auditor can only change detection risk.

## Building the plan

The plan allocates the available resource against the ranked universe, then adjusts for:

- **Regulatory or statutory requirements** that mandate certain audits regardless of ranking.
- **Requests from the audit committee or senior management**, considered but not determinative.
- **Assurance already provided by others**, so audit does not duplicate a reliable external review.
- **Time since last audited**, as a modifier rather than a driver. A high-risk area not audited for three years may rise; a low-risk area does not become high-risk through neglect alone.

The plan is then approved by the audit committee or board, not by the management being audited. It must remain flexible: a significant change in the risk profile triggers reassessment and re-approval, not a rigid march through the approved list.

## Where practitioners go wrong

The strongest instinct to resist is coverage. Auditors are trained to be thorough, and a plan that visits everything on a cycle feels defensible. On the exam, cycle-based planning is a distractor in almost every planning question, and it is always beaten by an option referring to risk assessment.

The second error is letting management set priorities. Management input is a legitimate input. Management direction is an independence problem. If an option has the auditee deciding what audit will and will not examine, it is wrong.

The third is confusing the risks. Detection risk is the only one that belongs to the auditor. Questions that ask what the auditor should do about high control risk are asking about the audit response, which is more testing, not about fixing the control.
