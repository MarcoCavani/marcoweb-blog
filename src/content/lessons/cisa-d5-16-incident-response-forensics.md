---
title: "Incident Response and Digital Forensics"
description: "The last lesson of the course. When an attack lands, contain it before you clean it, and preserve evidence you might need to prove. The exam tests the response order and chain of custody."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 16
minutes: 8
gated: false
taskStatement: "Evaluate whether the organisation can respond to security incidents in a controlled order and preserve evidence soundly."
objectives:
  - "Order the phases of incident response."
  - "Explain why chain of custody matters in digital forensics."
  - "Recognise the value of the post-incident review."
trap: "Reacting without a plan, and altering evidence while responding. Containment comes before eradication, and preserving the original with an unbroken chain of custody is what keeps evidence usable."
quiz:
  - question: "A live security breach has just been detected spreading across systems. After detection, what should be the IMMEDIATE priority?"
    options:
      - "Identify and punish whoever was responsible"
      - "Contain the incident to stop it spreading and limit the damage"
      - "Rebuild all affected systems from scratch immediately"
      - "Publish a public statement about the breach"
    answer: 1
    explanation: "Once an incident is detected, the immediate priority is containment: stopping the spread and limiting the damage, for example by isolating affected systems. Eradication and recovery follow, once the bleeding is stopped. Attribution, rebuilding and communications come in their proper place, but they do not precede stopping the incident from getting worse."
    whyWrong:
      - "Attribution matters later; chasing who did it while the incident spreads lets the damage grow."
      - ""
      - "Rebuilding before containment and evidence preservation can spread the problem and destroy evidence."
      - "External communication is handled in its own time; it is not the immediate technical priority over containment."
  - question: "Why is maintaining a chain of custody important in digital forensics?"
    options:
      - "It makes the investigation faster"
      - "It preserves the integrity and admissibility of evidence by documenting an unbroken record of how it was handled"
      - "It reduces the amount of storage needed for evidence"
      - "It is only relevant for physical evidence, not digital"
    answer: 1
    explanation: "Chain of custody is the documented, unbroken record of who collected, held and handled each piece of evidence, and how. It preserves the evidence's integrity and its admissibility, so it can be trusted and, if needed, stand up in legal proceedings. A gap or an unexplained alteration lets the evidence be challenged, echoing the evidence-reliability discipline from Domain 1."
    whyWrong:
      - "Speed is not the point; trustworthiness and admissibility of the evidence are."
      - ""
      - "Chain of custody is about integrity of handling, not saving storage."
      - "It applies fully to digital evidence, which is easily altered and must be demonstrably preserved."
  - question: "What is the PRIMARY purpose of the post-incident review (lessons-learned) phase?"
    options:
      - "To assign blame for the incident"
      - "To identify what allowed the incident and improve controls and response so it is less likely to recur"
      - "To close the incident ticket as quickly as possible"
      - "To delete all evidence once recovery is complete"
    answer: 1
    explanation: "The post-incident review looks back once the incident is resolved to understand what allowed it, how the response went, and what should change, feeding improvements back into controls and the response plan. It is the continuous-improvement step, the same instinct as problem management in Domain 4: fix the underlying cause so the next incident is prevented or better handled."
    whyWrong:
      - "The purpose is improvement, not blame; a blame culture discourages the honest reporting the review needs."
      - ""
      - "Closing the ticket fast defeats the point of learning from the incident."
      - "Evidence is retained per policy and legal need; the review does not exist to destroy it."
---

## The situation

An alert fires: something is spreading across the network. The team's response is improvised, there is a plan somewhere but no one has run it. In the rush, they wipe and rebuild the first infected machine to get it back fast, which destroys the only record of how the attacker got in. No one documented what was touched. They stopped this machine, maybe, but they cannot say how far it spread, cannot prove what happened, and are no better prepared for next time.

This is the final lesson of the course, and it draws together threads from every domain: a plan tested in advance, a disciplined order, evidence handled soundly, and learning fed back.

## The response, in order

Incident response follows a sequence, and the exam cares about the order:

- **Preparation**: the plan, the team, the tools, in place **before** anything happens. Improvising during an incident is the failure the scenario opens with.
- **Detection and identification**: recognising that an incident is occurring and understanding its scope, the monitoring from the previous lesson.
- **Containment**: **stopping the spread** and limiting the damage, for example by isolating affected systems. This is the **immediate priority** once an incident is detected.
- **Eradication**: removing the cause, the malware, the foothold, the vulnerability.
- **Recovery**: restoring systems to normal operation, often from the tested backups of Domain 4, and confirming they are clean.
- **Lessons learned**: the post-incident review.

The most tested point in the order is **containment before eradication**: when a breach is spreading, you stop it spreading first, then clean up. Chasing attribution, rebuilding everything, or issuing public statements ahead of containment all let the damage grow. Stop the bleeding, then treat the wound.

## Preserve the evidence

The team's instinct to wipe and rebuild the first machine is the forensic failure. Digital evidence is **fragile and easily altered**, so forensics rests on **preserving the original**: work on **copies or forensic images**, not the live original, and verify integrity with a **hash** (from the cryptography lesson) so you can prove the copy matches and nothing changed.

Around this sits the **chain of custody**: a documented, **unbroken** record of who collected, held and handled each piece of evidence, and how. It preserves the evidence's **integrity and admissibility**, so it can be trusted and, if it comes to it, stand up in legal proceedings. A gap in the chain, or an unexplained alteration, lets the evidence be challenged and possibly thrown out. This is the **evidence-reliability** discipline from Domain 1, made literal: evidence you cannot vouch for the handling of is evidence you may not be able to use. Wiping the machine destroyed both the evidence and the chain.

## Learn from it

The final phase, the **post-incident review**, or lessons learned, is where the incident is turned into improvement. Once resolved, the team looks back: what allowed this, how did the response go, what should change, and feeds the answers into **stronger controls** and a **better plan**. It is the same instinct as **problem management** in Domain 4, addressing the underlying cause so the next incident is prevented or handled better, and it is undermined by a blame culture, which suppresses the honest reporting the review depends on.

And like every plan in this course, the **incident response plan must be tested**, not just written, the same lesson as the untested DR plan and the unexercised continuity plan. A plan first run during a real incident is the scenario you do not want.

## Where practitioners go wrong

Two instincts cost marks. The first is responding without order, in particular eradicating or rebuilding before **containing**; contain the spread first, then eradicate and recover. The second is destroying evidence in the rush, wiping the very system that holds the answers. Preserve the original, work on verified copies, keep an unbroken chain of custody, and review afterwards so the organisation is stronger next time.

---

That completes the CISA course. Across five domains you now have the whole arc: how an auditor plans and evidences work and reports it (Domain 1), how IT is governed and risk is owned (Domain 2), how systems are acquired and built to arrive trustworthy (Domain 3), how they are run and recovered when they break (Domain 4), and how the information itself is protected, from governance and access through cryptography and network defence to detecting and responding to the attacks that come anyway (Domain 5). The threads that recur, independence, evidence you can trust, controls proportionate to risk, plans that are tested rather than assumed, and accountability that does not transfer, are the reasoning the exam rewards over memorised lists. Sit the per-domain practice exams under the clock, and revisit the traps: they are where good auditors lose marks, and where you now will not.
