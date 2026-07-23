---
title: "Service Level Agreements and Performance Monitoring"
description: "An SLA nobody measures is a paragraph, not a control. The exam tests what makes a service level meaningful and how an auditor knows it is actually met."
course: "cisa-domain-2"
module: "Domain 2: Governance and Management of IT"
domain: 2
order: 9
minutes: 7
gated: false
taskStatement: "Evaluate whether service level agreements are measurable, monitored against independent data, and enforced."
objectives:
  - "State the properties that make a service level meaningful and testable."
  - "Explain why the source of the performance data matters."
  - "Recognise when an SLA exists but provides no assurance."
trap: "Accepting a provider's own performance report as proof the SLA was met. The exam prefers independently sourced measurement over self-reported figures."
quiz:
  - question: "Which of the following makes a service level agreement MOST useful as a control?"
    options:
      - "It is signed by senior management on both sides"
      - "Its targets are specific, measurable, and tied to consequences for breach"
      - "It is reviewed by the legal department"
      - "It uses the same wording as the provider's other contracts"
    answer: 1
    explanation: "An SLA works as a control when its targets are specific and measurable, so performance can be tested objectively, and when breaching them carries a consequence, so the target has force. Without measurability and consequence, the SLA is a statement of intent, not a control."
    whyWrong:
      - "Signatures give the SLA authority but do not make its targets measurable or enforceable."
      - ""
      - "Legal review checks the wording, not whether the targets can be measured or are met."
      - "Consistent wording is administratively tidy but says nothing about whether the service level is meaningful."
  - question: "An IS auditor is verifying whether a provider met its 99.9% availability SLA. What is the MOST reliable source of evidence?"
    options:
      - "The provider's monthly self-reported availability summary"
      - "Independent monitoring data, such as the organisation's own uptime measurements"
      - "The provider's assurance that all targets were met"
      - "The absence of complaints from users"
    answer: 1
    explanation: "Independent measurement, ideally the organisation's own monitoring, is the most reliable evidence, because it does not depend on the party being measured. This is the evidence-reliability principle from Domain 1: data obtained independently outranks a figure self-reported by the party who benefits from it."
    whyWrong:
      - "A self-reported summary comes from the party whose performance is in question, the weakest position on the reliability hierarchy."
      - ""
      - "A verbal assurance is a representation, weaker still than a self-reported report."
      - "Absence of complaints is not measurement; users under-report, and silence is not evidence of availability."
  - question: "An organisation has a detailed SLA with its cloud provider but has never measured actual performance against it. What is the MAIN issue?"
    options:
      - "The SLA targets are probably set too high"
      - "Without monitoring, the SLA provides no assurance that the service is actually being delivered"
      - "The SLA should be renegotiated annually"
      - "The provider is likely in breach"
    answer: 1
    explanation: "An SLA delivers assurance only when performance is monitored against it. Unmeasured, it is a paragraph in a contract: the organisation cannot know whether targets are met, cannot claim a breach, and cannot enforce consequences. The absence of monitoring is the finding."
    whyWrong:
      - "The targets may be fine; the problem is that nobody is checking them, not their level."
      - ""
      - "Annual renegotiation does not address the lack of ongoing measurement."
      - "You cannot conclude the provider is in breach precisely because no one is measuring; that is the point."
---

## The situation

The cloud contract has a thorough SLA: 99.9% availability, defined response times, credits for breaches. It reads well. Then you ask for the last twelve months of measured performance against it, and there is none. Nobody has ever checked.

The SLA is real. As a control, it is doing nothing, and that is the finding.

## What makes a service level a control

An SLA becomes a control, rather than a statement of good intentions, when it has two properties:

- **Measurable targets.** Specific, quantified levels that can be tested objectively: 99.9% availability, a four-hour response time, a resolution deadline. "Good service" is not a target; a number is.
- **Consequences for breach.** Something that follows when a target is missed, service credits, escalation, termination rights. A target with no consequence has no force.

Signatures, legal review and consistent wording are administratively useful but do none of this work. When a question asks what makes an SLA useful, look for measurability plus consequence.

## The source of the measurement matters

Verifying that an SLA was met is an evidence question, and the Domain 1 reliability hierarchy applies directly. The provider's own monthly summary is self-reported by the party whose performance is being judged, the weakest kind of evidence. A verbal assurance is weaker still.

The most reliable evidence is **independent measurement**: the organisation's own uptime monitoring, or a neutral third-party monitor. It does not depend on the party being measured having reported honestly. When a question asks for the most reliable source of SLA performance evidence, prefer independent data over self-reported figures, exactly as you would prefer a configuration you extracted yourself over a screenshot the administrator sent you.

Note too that absence of complaints is not measurement. Users under-report, and silence is not evidence that a service level was met.

## An unmeasured SLA assures nothing

The core failure is an SLA that is never measured against. Without monitoring, the organisation cannot know whether targets are met, cannot substantiate a breach, and cannot enforce a consequence. The detail of the SLA is irrelevant; what matters is whether performance is tracked against it.

So the auditor's test is not "is there an SLA" but "is it monitored". You cannot even conclude the provider is in breach when no one is measuring, which is precisely why the lack of monitoring, not any assumed failure, is the finding.

## Where practitioners go wrong

Two instincts cost marks. The first is accepting the provider's self-reported performance as proof; the exam wants independently sourced measurement. The second is treating the existence of a well-written SLA as the control; the control is the measurement and enforcement that the SLA makes possible, and without them the document assures nothing.
