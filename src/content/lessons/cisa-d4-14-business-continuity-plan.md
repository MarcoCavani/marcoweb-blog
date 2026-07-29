---
title: "Business Continuity Planning"
description: "The BCP keeps the whole business running through a disruption; the DR plan is its IT subset. The exam tests that scope difference, and that a plan never tested or updated gives no assurance."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 14
minutes: 7
gated: false
videoId: "NXZooQDsCus"
taskStatement: "Evaluate whether a business continuity plan keeps the whole organisation operating through disruption and is owned, maintained and tested."
objectives:
  - "Distinguish the business continuity plan from the disaster recovery plan."
  - "Explain why a BCP must be maintained and tested, not written once."
  - "Identify who is accountable for the BCP."
trap: "Equating the BCP with the DR plan. The BCP covers the whole organisation, people, processes, facilities; the DR plan is the IT-recovery subset within it."
quiz:
  - question: "How does a business continuity plan (BCP) differ from a disaster recovery plan (DRP)?"
    options:
      - "They are the same document under two names"
      - "The BCP covers keeping the whole organisation operating, people, processes and facilities; the DRP is the subset that recovers IT and technology"
      - "The DRP covers the whole business; the BCP covers only IT"
      - "The BCP applies only to natural disasters"
    answer: 1
    explanation: "The BCP is the broad plan for keeping the entire organisation, its critical business processes, people, facilities and communications, functioning during and after a disruption. The DRP is a component within it, focused specifically on recovering IT systems and technology. IT recovery serves business continuity, not the other way round."
    whyWrong:
      - "They are distinct in scope; treating them as one loses the business-wide versus IT-specific distinction."
      - ""
      - "The scopes are reversed here: the BCP is business-wide, the DRP is the IT subset."
      - "A BCP addresses any disruption, from cyberattack to supply failure to pandemic, not only natural disasters."
  - question: "A business continuity plan was written three years ago, has never been tested, and has not been updated despite major changes to the business. What is the MAIN concern?"
    options:
      - "The plan is too long to read"
      - "An untested, outdated plan gives no assurance it would actually work when invoked"
      - "The plan should have been written by an external consultant"
      - "Three years is too soon to review a plan"
    answer: 1
    explanation: "A continuity plan is only as good as its currency and its testing. Written once and left, it drifts out of step with the business, and without testing there is no evidence it works. When a real disruption comes, an outdated, untested plan fails in ways no one anticipated. Plans must be maintained and exercised, echoing the compliance-is-continuous principle from Domain 2."
    whyWrong:
      - "Length is not the issue; an unusable plan is a problem however short it is."
      - ""
      - "Who wrote it is irrelevant to whether it is current and tested."
      - "Three years without a review or test is far too long; plans need regular maintenance and exercising, not less."
  - question: "Who is ultimately accountable for the organisation's business continuity plan?"
    options:
      - "The IT department"
      - "Senior management, as part of governance"
      - "The disaster recovery vendor"
      - "Each individual employee"
    answer: 1
    explanation: "Business continuity is an organisational, governance-level responsibility, so senior management is accountable for the BCP: for sponsoring it, ensuring it reflects business priorities from the BIA, and seeing that it is maintained and tested. IT owns the DR component, but the enterprise-wide continuity plan sits with senior management."
    whyWrong:
      - "IT is responsible for the DR subset, not for enterprise-wide continuity, which spans far more than technology."
      - ""
      - "A vendor may supply capability but cannot hold the organisation's accountability for continuity."
      - "Employees have roles in the plan, but accountability rests at the governance level, not with each individual."
---

## The situation

The organisation has a disaster recovery plan for its data centre, and everyone calls it the continuity plan. Then a burst pipe closes the head office for a fortnight. The servers are fine, so the DR plan never triggers, but nobody knows where staff should work, how customers will be answered, or which processes must run manually. The technology was covered. The business was not.

That gap, between recovering IT and keeping the business running, is exactly what this lesson is about.

## Two plans, two scopes

The exam draws a firm line between two plans that are often used interchangeably:

- The **business continuity plan (BCP)** is the broad plan for keeping the **whole organisation** operating through a disruption: its critical business processes, its people, its facilities, its communications with customers and suppliers. It answers "how does the business keep functioning?"
- The **disaster recovery plan (DRP)** is a **subset** of the BCP, focused specifically on recovering **IT systems and technology**. It answers "how do we get the systems back?"

The relationship is one of scope: the DRP sits **inside** the BCP, and IT recovery exists to **serve** business continuity, not the other way round. The burst pipe is the classic illustration, the DRP was intact and irrelevant, because the disruption was to the business, not the technology. When a question contrasts the two, BCP is enterprise-wide, DRP is the IT piece.

## A plan is not a document, it is a capability

A continuity plan written once and filed is worth very little, and the exam treats it the way Domain 2 treated a two-year-old compliance certificate. Two things keep a BCP real:

- **Maintenance.** The business changes, new processes, new systems, new sites, people, so the plan must be kept current or it drifts into describing an organisation that no longer exists.
- **Testing.** A plan that has never been exercised is untested theory. Testing reveals the gaps, the missing contact, the assumption that does not hold, the step that takes far longer than planned, while it is still safe to find them.

An outdated, untested plan gives **no assurance** it would work when invoked, which is exactly when you cannot afford to discover it does not. Continuity is a capability you maintain and rehearse, not a document you produce once.

## Accountability sits at the top

Because business continuity spans the whole organisation, accountability for the BCP rests with **senior management**, as a governance responsibility. They sponsor it, ensure it reflects the priorities the BIA established, and see that it is maintained and tested. IT owns and runs the **DR** component, but the enterprise-wide plan is not an IT deliverable, it is a management one, in the same way that risk appetite and governance sat with the board in Domain 2.

## Where practitioners go wrong

Two instincts cost marks. The first is equating the BCP with the DR plan, so that recovering the servers is mistaken for keeping the business running. The BCP is the whole; the DRP is the IT part within it, and a disruption that spares the technology can still stop the business. The second is treating the plan as a finished document. An unmaintained, untested BCP gives no assurance, and assurance is the entire point, so continuity is maintained and exercised, not written once and shelved.
