---
title: "Risk Appetite, Tolerance and Acceptance"
description: "How much risk the organisation will carry is a board decision, not an IT one. The exam tests who sets appetite, who may accept a risk, and at what level."
course: "cisa-domain-2"
module: "Domain 2: Governance and Management of IT"
domain: 2
order: 7
minutes: 7
gated: false
taskStatement: "Evaluate whether risk acceptance decisions are made within a defined appetite and at an appropriate level of authority."
objectives:
  - "Distinguish risk appetite from risk tolerance."
  - "Determine who is authorised to accept a given risk."
  - "Recognise when a risk is accepted at the wrong level or outside appetite."
trap: "Assuming any manager can accept any risk. The exam ties the authority to accept to the magnitude of the risk, exactly as in Domain 1's findings lesson."
quiz:
  - question: "Who is PRIMARILY responsible for defining the organisation's risk appetite?"
    options:
      - "The IT security manager"
      - "The board or senior management on its behalf"
      - "The IS audit function"
      - "Each individual system owner"
    answer: 1
    explanation: "Risk appetite, the amount and type of risk the organisation is willing to pursue in meeting its objectives, is a governance decision set by the board, or by senior management on the board's behalf. It frames every risk response made below it."
    whyWrong:
      - "The security manager operates within appetite; they do not define how much risk the enterprise will carry."
      - ""
      - "Audit evaluates whether decisions stay within appetite but does not set it."
      - "System owners make decisions within appetite; they do not define the enterprise-level appetite itself."
  - question: "What is the difference between risk appetite and risk tolerance?"
    options:
      - "They are two words for the same concept"
      - "Appetite is the broad level of risk the organisation will pursue; tolerance is the acceptable variation around a specific objective"
      - "Appetite applies to IT risk; tolerance applies to financial risk"
      - "Appetite is set annually; tolerance is set daily"
    answer: 1
    explanation: "Appetite is the broad, strategic amount of risk the organisation is willing to take overall. Tolerance is narrower: the acceptable deviation around a specific objective or metric, for example how much unplanned downtime a critical service may have before it breaches. Tolerance operationalises appetite for a particular target."
    whyWrong:
      - "They are related but distinct; treating them as identical loses the exam's intended distinction."
      - ""
      - "Both concepts apply across risk types, not split by IT versus financial."
      - "The difference is scope and specificity, not the frequency at which each is set."
  - question: "A junior IT manager decides to accept the risk of running an unpatched internet-facing server because patching would cause downtime. What is the IS auditor's GREATEST concern?"
    options:
      - "Patching should never cause downtime"
      - "The risk may be significant enough that acceptance requires a higher level of authority than a junior manager holds"
      - "The manager did not consult the IT security team"
      - "Unpatched servers are always unacceptable"
    answer: 1
    explanation: "Acceptance is legitimate, but the authority to accept must match the magnitude of the risk. An internet-facing unpatched server can carry enterprise-level exposure, which a junior manager is not positioned to accept on the organisation's behalf. This mirrors Domain 1: a team leader cannot accept an enterprise risk."
    whyWrong:
      - "Patching genuinely can cause downtime; that is a real trade-off, not the concern."
      - ""
      - "Consulting security would help, but the core issue is the level of authority for the acceptance."
      - "Unpatched servers are not always unacceptable; a properly authorised, compensated acceptance can be valid. The problem is the authority level."
---

## The situation

A junior IT manager tells you they have "accepted the risk" of leaving an internet-facing server unpatched, because patching it would cause downtime the business dislikes. The trade-off is real. The decision was theirs to announce, but was it theirs to make?

That question, who is allowed to accept this, is what the exam is testing.

## Appetite is set at the top

**Risk appetite** is the amount and type of risk an organisation is willing to pursue in meeting its objectives. It is a governance decision, set by the board or by senior management on the board's behalf. Everything below it operates within it: every mitigate-transfer-accept-avoid decision is made against the appetite the board has defined.

This is why appetite cannot be set by the IT security manager or by individual system owners. They make decisions *within* appetite; they do not decide how much risk the enterprise as a whole will carry. Audit, likewise, evaluates whether decisions stay within appetite but does not set it.

## Appetite versus tolerance

The exam distinguishes two related terms, and questions turn on the difference.

**Appetite** is broad and strategic: the overall level of risk the organisation will take. "We are willing to accept moderate operational risk to enter new markets quickly."

**Tolerance** is narrow and specific: the acceptable variation around a particular objective or metric. "A critical service may have no more than four hours of unplanned downtime per quarter before it breaches."

Tolerance operationalises appetite for a specific target. Appetite says how much risk in general; tolerance says how far a specific measure may drift before it is out of bounds. Treating the two as synonyms is a reliable trap.

## Authority to accept matches magnitude

Accepting a risk is a legitimate response, covered in the previous lesson. What the exam tests hardest is that **the authority to accept must match the size of the risk.** This is the same principle as the findings lesson in Domain 1: a team leader cannot accept an enterprise-level risk.

So the junior manager's acceptance of an unpatched internet-facing server is the finding, not because acceptance is wrong, and not because unpatched servers are always unacceptable, but because that risk may carry enterprise-level exposure, and a junior manager is not positioned to accept it on the organisation's behalf. The right response would be to escalate the acceptance decision to a level of authority proportionate to the risk, ideally with a compensating control while the exposure stands.

## Where practitioners go wrong

The instinct that costs marks is treating acceptance as available to anyone who owns the system. The exam ties the authority to accept to the magnitude of the risk. When you see a risk accepted, do not ask only "was acceptance reasonable", ask "was it accepted at the right level, and within the board's appetite".
