---
title: "Business Impact Analysis"
description: "Before you can recover anything, you have to know what matters and how fast. The BIA is the foundation of resilience, and the exam tests that it comes first and that the business, not IT, sets criticality."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 10
minutes: 7
gated: false
taskStatement: "Evaluate whether a business impact analysis identifies critical processes and drives recovery priorities and objectives."
objectives:
  - "State the purpose of a business impact analysis."
  - "Explain why the BIA comes before designing recovery solutions."
  - "Identify who determines the criticality of a business process."
trap: "Designing the disaster recovery solution before doing the BIA, or letting IT decide what is critical. The BIA comes first, and the business owns criticality."
quiz:
  - question: "What is the PRIMARY purpose of a business impact analysis (BIA)?"
    options:
      - "To choose which backup software to buy"
      - "To identify critical business processes and the impact of their disruption over time, so recovery priorities and objectives can be set"
      - "To document the network architecture"
      - "To test the disaster recovery plan"
    answer: 1
    explanation: "A BIA identifies the organisation's critical business processes, analyses the impact of disrupting them over time, and uses that to set recovery priorities and objectives such as RPO and RTO. It is the analysis that tells the organisation what must be recovered, how quickly, and in what order."
    whyWrong:
      - "Choosing backup software is a downstream technical decision that the BIA's priorities inform, not the BIA itself."
      - ""
      - "Documenting architecture is useful but is not the purpose of a BIA, which is about business impact and recovery priorities."
      - "Testing the DR plan comes much later; the BIA is the analysis that shapes the plan in the first place."
  - question: "When should a business impact analysis be performed relative to designing the disaster recovery solution?"
    options:
      - "After the DR solution is built, to justify it"
      - "Before, because the BIA determines what must be recovered and how fast, which drives the solution"
      - "It does not matter which comes first"
      - "Only after a real disaster has occurred"
    answer: 1
    explanation: "The BIA comes first. It establishes which processes are critical and their recovery objectives, and those requirements drive the design of the recovery solution. Building the DR solution before the BIA means recovering whatever is convenient rather than what the business actually needs, in the wrong order and to the wrong timescales."
    whyWrong:
      - "Building first and justifying later inverts the logic; the analysis must shape the solution, not rationalise it."
      - ""
      - "Order matters greatly: requirements before solution is the whole point of doing a BIA."
      - "Waiting for a disaster forfeits the planning the BIA exists to enable."
  - question: "Who is BEST placed to determine the criticality of a business process in a BIA?"
    options:
      - "The IT department, because it runs the systems"
      - "The business process owners, because they understand the impact of losing the process"
      - "The disaster recovery vendor"
      - "The internal audit team"
    answer: 1
    explanation: "Criticality is a business judgement: how badly does losing this process hurt the organisation, and how quickly. The business process owners are best placed to make that call, because they understand the operational, financial and reputational consequences. IT provides technical input, but it does not decide what is critical to the business."
    whyWrong:
      - "IT runs the systems but does not experience the business impact of losing a process; it cannot set criticality alone."
      - ""
      - "A DR vendor supplies recovery capability; it has no basis to judge the business criticality of a process."
      - "Audit evaluates the process; determining business criticality is the owner's role, not the auditor's."
---

## The situation

An organisation has spent heavily on a disaster recovery site and nightly replication for its email system, which was the project the IT team felt most confident scoping. When a real disruption hits the order-management system, the one the business actually runs on, it turns out nobody had established how quickly it needed to be back, or that it mattered more than email. The recovery capability was real. It was pointed at the wrong thing.

Everything in business resilience starts with one analysis, and skipping it is how you end up recovering email while the business waits.

## The foundation of resilience

A **business impact analysis (BIA)** identifies the organisation's **critical business processes** and analyses the **impact of disrupting them over time**. From that, it derives the **recovery priorities and objectives**: which processes must come back first, and how quickly, and with how little data lost.

The BIA is the foundation everything else in this half of the domain rests on. The recovery objectives in the next lesson, the backup strategy, the choice of recovery site, the whole continuity and disaster recovery plan, all flow from what the BIA establishes. Its output answers the questions any recovery effort must answer first: what must we recover, how fast, and in what order.

## It comes first

Because the BIA defines the requirements, it must come **before** the recovery solution is designed. This is the same logic as requirements before build in Domain 3: you establish what is needed, then design something to meet it.

Doing it the other way, building a DR capability and then discovering what the business needed, is how the organisation ended up protecting email while the order system waited. The impact analysis tells you the order system needs to be back within hours and email can wait a day; without it, you protect whatever was easiest to scope. When a question asks what the first step in continuity or DR planning is, it is the BIA.

## The business owns criticality

Criticality is a **business judgement**, not a technical one. How badly does losing this process hurt, in lost revenue, regulatory breach, safety, or reputation, and how fast does that harm escalate? The people best placed to answer are the **business process owners**, who live with the consequences of the process being down.

IT contributes essential technical input, what depends on what, what is feasible, but it does not decide what is critical to the business, any more than it decided what a system was for in Domain 3. A DR vendor supplies capability, not criticality judgements, and audit evaluates rather than sets it. When a question asks who determines how critical a process is, it is the business owner.

## Where practitioners go wrong

Two instincts cost marks. The first is jumping to the recovery solution, the site, the backups, the technology, before doing the BIA. The BIA defines what the solution must achieve; without it, you recover the convenient rather than the critical. The second is letting IT decide what is critical because IT runs the systems. Criticality is the business's call, made by the process owners who understand what losing the process actually costs.
