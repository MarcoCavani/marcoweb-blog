---
title: "Materiality in an IS Audit"
description: "Financial audit measures materiality in currency. IS audit often cannot, and the exam expects you to know what replaces it."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 5
minutes: 7
gated: false
taskStatement: "Determine materiality for an IS audit engagement where the subject matter has no direct monetary value."
objectives:
  - "Explain why financial materiality thresholds transfer poorly to IS audit subject matter."
  - "Identify the qualitative factors that make an IS control deficiency material."
  - "Judge whether an individually minor deficiency becomes material in aggregate."
trap: "Dismissing a deficiency because the system it affects is small. Criticality to the process, not the size of the system, determines materiality."
quiz:
  - question: "An IS auditor finds that a system processing 0.4% of transaction volume has no audit logging. The system authorises payment releases above one million. How should the auditor assess materiality?"
    options:
      - "Immaterial, because the transaction volume is negligible"
      - "Material, because the system performs a critical control function"
      - "Immaterial, unless a loss has already occurred"
      - "Material only if regulation requires logging"
    answer: 1
    explanation: "Materiality in IS audit is driven by criticality rather than volume. A system authorising high-value payment releases is critical regardless of how few transactions pass through it, and the absence of logging removes accountability over exactly those transactions."
    whyWrong:
      - "Volume is a financial audit instinct. It is misleading here because the value and control significance of each transaction is high even though the count is low."
      - ""
      - "Waiting for a loss confuses materiality with impact realised. A control deficiency is material based on the exposure it creates, not on whether it has yet been exploited."
      - "Regulation is one factor that can make something material, but its absence does not make a significant control gap immaterial."
  - question: "An IS auditor identifies six separate low-severity access control weaknesses across the same application. Individually none is significant. What is the MOST appropriate conclusion?"
    options:
      - "Report them as six low-severity observations"
      - "Omit them, as none meets the reporting threshold"
      - "Evaluate whether in aggregate they represent a material weakness in access control"
      - "Report only the two that could be exploited most easily"
    answer: 2
    explanation: "Deficiencies must be evaluated in aggregate as well as individually. Several minor weaknesses in the same control area can together indicate that access control over the application is not effective, which is a material conclusion that no single finding supports."
    whyWrong:
      - "Reporting them individually is not wrong, but it stops short of the auditor's judgement. The reader is left to aggregate the findings themselves, which is the auditor's job."
      - "Omitting findings because each is individually below threshold is exactly the error aggregation is meant to prevent."
      - ""
      - "Selecting a subset by ease of exploitation discards information and still avoids the aggregate judgement."
  - question: "Which of the following would be the MOST relevant factor in assessing the materiality of a deficiency in a system that supports regulatory reporting?"
    options:
      - "The cost of remediating the deficiency"
      - "The number of users with access to the system"
      - "The potential for the deficiency to cause inaccurate regulatory submissions"
      - "The age of the system and its remaining supported life"
    answer: 2
    explanation: "Materiality relates to the consequence of the deficiency for the objectives the system serves. For a regulatory reporting system, the capacity to produce inaccurate submissions, with the legal and reputational consequences that follow, is the relevant measure."
    whyWrong:
      - "Remediation cost is a management consideration when deciding a response. It has no bearing on how serious the deficiency is."
      - "User count may be an input to likelihood, but a deficiency affecting few users can still produce materially wrong submissions."
      - ""
      - "System age is a risk indicator, not a measure of the consequence of this particular deficiency."
---

## The situation

A financial auditor can tell you materiality for the engagement in a number: a percentage of revenue, or of total assets. You are auditing logical access to an identity provider. There is no number. Does that mean nothing is material?

## Why the financial definition does not transfer

Financial materiality asks whether a misstatement, alone or in aggregate, could influence the decisions of users of the financial statements. It works because financial statements are denominated in currency.

Most IS audit subject matter is not. The absence of logging on a privileged account has no monetary value. So IS audit materiality is assessed against the **objectives the system or process serves**, and it is largely qualitative.

## What makes an IS deficiency material

The exam expects these factors:

**Criticality of the process supported.** A small system performing an essential control function outranks a large system doing something peripheral. This is the factor candidates most often get wrong.

**Sensitivity and classification of the data.** Personal data, payment data and material non-public information raise materiality sharply.

**Regulatory and legal exposure.** A deficiency that could cause a breach of law, licence condition or reporting obligation is material largely by virtue of that exposure.

**Dependence of other controls.** A general control weakness that undermines reliance on many application controls is material because of what it invalidates downstream. A weak change management process is material for this reason.

**Reputational and operational consequence.** Public visibility, customer impact, and the ability to continue operating.

**Cost of the control relative to the risk.** Relevant to the recommendation, not to whether the deficiency is material.

## Aggregation

Individually minor findings can be material together. Six small access weaknesses in one application may each sit below any reporting threshold, while together they support a conclusion that access control over that application is ineffective.

The exam tests this because the aggregate judgement is the auditor's to make. Listing six low-severity observations and leaving the reader to draw the conclusion is a weaker piece of work than stating the conclusion the six support.

The same logic runs in reverse for pervasiveness: a single deficiency present across every system in scope is more material than the same deficiency in one system, because it indicates a process failure rather than an exception.

## Where practitioners go wrong

The dominant error is reaching for size. Transaction volume, user counts and system cost are all proxies for importance, and all three are unreliable. The payment release system with four transactions a month and a one million pound threshold is more material than the intranet with nine thousand users.

The second error is treating materiality as a reporting threshold to be applied mechanically at the end. It is a judgement made throughout the engagement, and it shapes how much testing an area receives in the first place.
