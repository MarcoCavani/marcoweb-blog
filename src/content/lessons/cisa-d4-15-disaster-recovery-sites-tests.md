---
title: "Disaster Recovery: Sites and Test Types"
description: "The last Domain 4 lesson. Hot, warm and cold sites trade cost against recovery speed, and DR test types trade assurance against risk. The exam tests both ladders, and that an untested plan proves nothing."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 15
minutes: 8
gated: false
videoId: "OP4xCG2dF4w"
taskStatement: "Evaluate whether the recovery site strategy fits the recovery objectives and whether disaster recovery testing gives genuine assurance."
objectives:
  - "Rank hot, warm and cold recovery sites by cost and recovery speed."
  - "Order the disaster recovery test types by rigour and risk."
  - "Explain why an untested DR plan provides no assurance."
trap: "Choosing a recovery site by cost alone, or trusting an untested DR plan. The site must fit the RTO, and only the more rigorous test types give real assurance, at more risk."
quiz:
  - question: "A business-critical system has a very short recovery time objective (RTO). Which type of recovery site is MOST appropriate?"
    options:
      - "A cold site, because it is the cheapest"
      - "A hot site, fully equipped and ready to take over almost immediately"
      - "No recovery site is needed"
      - "A warm site is always the only option"
    answer: 1
    explanation: "A very short RTO means the system must be back almost at once, which requires a hot site: fully equipped, with systems and current data ready to take over on short notice. A cold site provides only space and power and takes days to bring up, far too slow. The recovery site is chosen to meet the RTO, and a short RTO justifies the cost of a hot site."
    whyWrong:
      - "A cold site is cheapest but slowest to activate, which cannot satisfy a very short RTO."
      - ""
      - "A critical system with a short RTO plainly needs a recovery capability; having none guarantees breach of the objective."
      - "A warm site suits moderate RTOs; it is not the only option and is too slow for a very short RTO."
  - question: "Which disaster recovery test type provides the STRONGEST assurance that recovery will actually work?"
    options:
      - "A checklist or desk review of the plan"
      - "A full-interruption test, where production is actually switched over to the recovery capability"
      - "A structured walkthrough among the recovery team"
      - "Reading the plan aloud in a meeting"
    answer: 1
    explanation: "Test types form a ladder of rigour: checklist, structured walkthrough, simulation, parallel test, and full-interruption test. A full-interruption test actually fails production over to the recovery site, so it proves end to end that recovery works, the strongest assurance, but it carries the most risk because a failed test disrupts live operations. Parallel and full-interruption tests give real assurance; checklists and walkthroughs give the least."
    whyWrong:
      - "A checklist only confirms the plan looks complete on paper; it exercises nothing."
      - ""
      - "A walkthrough talks through the plan but never runs the recovery, so it cannot prove it works."
      - "Reading the plan aloud is the lowest-rigour review; it demonstrates nothing about actual recoverability."
  - question: "An organisation has a detailed disaster recovery plan that has never been tested. What is the MAIN concern?"
    options:
      - "The plan is probably too expensive"
      - "Without testing, there is no assurance the plan will actually work when a disaster occurs"
      - "The plan should be shorter"
      - "The plan will become obsolete in ten years"
    answer: 1
    explanation: "An untested DR plan is theory. Recovery is full of assumptions that only testing exposes, dependencies missed, data that will not restore, steps that take far longer than expected. Until it has been tested, the organisation has no evidence the plan works, and a real disaster is the worst moment to find out it does not. This echoes the tested-rollback point from Domain 3: an untested fallback is a hope, not a control."
    whyWrong:
      - "Cost is not the concern; an untested plan of any price provides no assurance."
      - ""
      - "Length is irrelevant to whether the plan actually works when invoked."
      - "The immediate problem is the absence of testing now, not eventual obsolescence years away."
---

## The situation

Two facts sit in the disaster recovery file. The recovery site is a cold site, chosen because it was the cheapest option, and the organisation's most critical system has a recovery time objective of two hours. And the plan itself, forty careful pages, has never once been tested. On paper, there is a DR capability. Read the two facts together, and there is a system that must be back in two hours, a site that takes days to stand up, and no evidence any of it works.

This is the last lesson of Domain 4, and it brings the recovery objectives, the site choice, and the discipline of testing together.

## Recovery sites: cost against speed

Where you recover to is a trade-off between cost and how fast you can be running, and the choice is driven by the **RTO** from lesson 11.

- A **hot site** is fully equipped, with systems and current data ready to take over almost immediately. Fastest recovery, highest cost. It is what a short RTO demands.
- A **warm site** is partially equipped, some infrastructure in place, data restored on activation. Recovery in hours to a day; moderate cost. It suits a moderate RTO.
- A **cold site** provides only space, power and connectivity; equipment and data must be brought in and built up. Cheapest, and slowest, days to activate. Only acceptable for a long RTO.
- A **mirrored** or fully redundant site runs in parallel with near-real-time data, giving effectively immediate failover at the highest cost.

The cold site in the scenario is the finding: chosen on price, it cannot possibly meet a two-hour RTO. The site must fit the objective, and a critical, low-RTO system justifies the expense of a warm or hot site. Choosing by cost alone, ignoring the RTO, is the wrong answer.

## Test types: assurance against risk

A DR plan is only proven by testing, and the test types form a ladder from least to most rigorous, and from least to most risky:

- **Checklist / desk review.** The plan is reviewed on paper for completeness. Lowest effort, lowest assurance, it confirms the plan looks complete, nothing more.
- **Structured walkthrough.** The recovery team talks through the plan together, surfacing gaps in understanding. Still no system is actually recovered.
- **Simulation.** The team role-plays a disaster scenario and their response, without affecting production.
- **Parallel test.** The recovery systems are actually brought up at the alternate site and run **alongside** production; outputs are compared. Production keeps running, so the risk is contained, and this genuinely proves recovery works.
- **Full-interruption test.** Production is actually **switched off and failed over** to the recovery capability. The strongest assurance, it proves the whole thing end to end, and the highest risk, because if the recovery fails, live operations are disrupted.

The pattern to hold: assurance and risk rise together up the ladder. Checklists and walkthroughs are safe and prove little; parallel and full-interruption tests prove recovery genuinely works but carry real operational risk. The right level balances the assurance needed against the risk the organisation can accept.

## An untested plan proves nothing

Underneath both choices is the discipline the scenario is missing entirely: the plan has **never been tested**. A DR plan is full of assumptions, dependencies, data that must restore, steps timed on optimism, and only testing exposes them while it is still safe to fix them. Until it has been tested, the organisation has **no assurance** the plan works, and a real disaster is the worst possible moment to discover it does not.

This is the same principle as the tested rollback in Domain 3 and the exercised continuity plan in the previous lesson: an untested fallback is a hope, not a control. A forty-page plan that has never been run is exactly that, a hope.

## Where practitioners go wrong

Two instincts cost marks, and they close out the domain. The first is choosing a recovery site on cost alone; the site must meet the RTO, and a cold site cannot serve a critical, low-RTO system however cheap it is. The second is trusting a documented DR plan that has never been tested. Only testing gives assurance, the more rigorous the test the more assurance and the more risk, and an untested plan, like an untested backup, proves nothing at all.

---

That completes Domain 4, the joint-largest on the exam. You now have both halves: the operations that keep IT running day to day, service, incident and problem management, change, configuration, release and patch, scheduling, capacity and the database, and the business resilience that carries the organisation through disruption, the BIA, the RPO and RTO it sets, backups proven by restoration, resilience that withstands failure, and the continuity and disaster recovery plans, sites and tests that recover from it. One domain remains: the protection of information assets.
