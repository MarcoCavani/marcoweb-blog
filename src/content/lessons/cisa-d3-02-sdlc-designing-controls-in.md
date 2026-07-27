---
title: "The SDLC and Designing Controls In"
description: "Controls are cheapest, and strongest, when they are specified at requirements, not bolted on after go-live. The exam tests where in the life cycle control belongs, and why requirements decide a project's fate."
course: "cisa-domain-3"
module: "Domain 3: IS Acquisition, Development and Implementation"
domain: 3
order: 2
minutes: 8
gated: false
videoId: "psx9I8_v8jw"
taskStatement: "Evaluate whether controls and requirements are defined early enough in the system development life cycle to be effective and testable."
objectives:
  - "Outline the phases of the system development life cycle."
  - "Explain why controls are most effective when designed in at requirements and design."
  - "Recognise poorly defined requirements as the root cause of most project failures."
trap: "Assuming a control added after implementation is as good as one designed in. The exam treats retrofitted controls as weaker, costlier, and preceded by a period of exposure."
quiz:
  - question: "At which stage of the system development life cycle is it MOST cost-effective to define the controls a system needs?"
    options:
      - "During user acceptance testing"
      - "During the requirements and design phases"
      - "Immediately after go-live"
      - "At the first post-implementation review"
    answer: 1
    explanation: "Controls specified in requirements and design are built into the system as it is constructed, which is far cheaper and more effective than adding them later. The cost of changing a system rises sharply through the life cycle, so a control defined at requirements costs a fraction of the same control retrofitted after go-live."
    whyWrong:
      - "By user acceptance testing the system is already built; adding a control now means rework, not design."
      - ""
      - "After go-live the control is a retrofit onto a live system, the most expensive and disruptive point to add one."
      - "The post-implementation review can only observe that a control is missing; it is far too late to design it in cheaply."
  - question: "An IS auditor finds that the security controls in a new system were added after it went live, rather than specified during development. What is the auditor's MAIN concern?"
    options:
      - "The controls will be more expensive to maintain"
      - "The system operated without those controls until they were added, and retrofitted controls are typically weaker"
      - "The documentation will need updating"
      - "The developers were not security specialists"
    answer: 1
    explanation: "Controls added after go-live mean the system ran exposed in the interim, and controls grafted onto a finished system are generally weaker and less complete than ones designed into its architecture. The exposure window and the weaker control are the substantive concern, not the paperwork."
    whyWrong:
      - "Higher maintenance cost is real but secondary to the exposure that existed before the controls were in place."
      - ""
      - "Updating documentation is a housekeeping task, not the risk created by a period of operation without controls."
      - "Who wrote the controls matters less than the fact that they were absent while the system was live."
  - question: "Which factor is the MOST common root cause of information systems project failure?"
    options:
      - "Choosing the wrong programming language"
      - "Incomplete or poorly defined requirements"
      - "Insufficient hardware capacity"
      - "Using an external vendor rather than in-house staff"
    answer: 1
    explanation: "Requirements that are incomplete, ambiguous or wrong propagate through the entire life cycle: the system is designed, built and tested against them, so a flaw at requirements becomes a flaw in the delivered system. This is why the exam treats clear, complete, testable requirements as the foundation of a successful project."
    whyWrong:
      - "Language choice is an implementation detail; a well-specified project succeeds across many languages."
      - ""
      - "Capacity problems are real but usually solvable; they rarely doom a project the way a wrong specification does."
      - "In-house versus vendor is a sourcing decision, not the driver of whether the requirements were right."
---

## The situation

A new system is in user acceptance testing when someone asks where the access controls and audit logging are. They were never in the requirements, so they were never built. Adding them now means reopening the design, rewriting code that was already tested, and slipping the deadline. The team's instinct is to launch and add the controls afterwards.

That instinct is the finding, and this lesson is about why.

## The shape of the life cycle

The system development life cycle is the sequence a system moves through from idea to operation. The exact names vary, but the exam expects the arc:

- **Feasibility**, is it worth doing (from the previous lesson).
- **Requirements**, what the system must do, functionally and in terms of controls.
- **Design**, how it will do it.
- **Development**, building it.
- **Testing**, proving it meets the requirements.
- **Implementation**, putting it into production.
- **Post-implementation**, confirming it delivered.

Each phase depends on the one before. That dependency is the whole point of the next two sections.

## Controls belong at the front

The cost of changing a system rises steeply as it moves through the life cycle. A control described in a requirements document is a sentence. The same control added after go-live is a change to a live system: re-analysis, re-coding, re-testing, and a release. It can cost many times more, and it usually ends up weaker, because it is grafted onto an architecture that was not designed to hold it.

So the principle the exam rewards is **design controls in, do not bolt them on.** When a system is specified, its access controls, input validation, audit trails, segregation of duties and error handling should be part of the requirements, not a later thought. An auditor who finds controls were retrofitted after go-live has two concerns: the system ran exposed until they were added, and the added controls are probably less complete than designed-in ones would have been.

This is also where the auditor's advisory role from the previous lesson pays off. Reviewing the requirements for control adequacy, before anything is built, is the highest-leverage moment in the whole project, and it does not compromise independence as long as the auditor advises rather than owns.

## Requirements decide the outcome

Everything downstream is built against the requirements. The design realises them, the code implements them, the tests check against them. So a requirement that is missing, ambiguous or wrong does not stay a small problem: it is designed in, coded in, and tested as if correct, and it emerges as a flaw in the delivered system.

This is why incomplete or poorly defined requirements are the most common root cause of project failure, more than languages, hardware or sourcing. A system that is built well against the wrong specification is still the wrong system. Good requirements are complete, unambiguous, and **testable**, you cannot test lesson 4's acceptance criteria against a requirement no one can measure.

## Where practitioners go wrong

The costly instinct is to believe a control added after implementation is as good as one designed in, so launching now and hardening later feels safe. It is not: it accepts a window of exposure and usually a weaker control. The second instinct is to rush past requirements to start building, treating specification as bureaucracy. Requirements are not bureaucracy; they are the thing every later phase is measured against, and the cheapest place in the entire life cycle to get the system, and its controls, right.
