---
title: "Implementation Strategies and the Post-Implementation Review"
description: "Parallel, phased or direct: the changeover you choose is a risk decision, and the project is not finished until a review confirms the benefits. The exam tests the fallback, and what a PIR is actually for."
course: "cisa-domain-3"
module: "Domain 3: IS Acquisition, Development and Implementation"
domain: 3
order: 6
minutes: 8
gated: false
taskStatement: "Evaluate the risk of a system changeover strategy and whether a post-implementation review confirms the project delivered its intended benefits."
objectives:
  - "Compare parallel, phased, pilot and direct changeover by their risk and cost."
  - "Explain why a direct cutover of a critical system demands a tested fallback."
  - "State the purpose and timing of a post-implementation review."
trap: "Thinking the project ends at go-live. The exam closes the loop with a post-implementation review that tests whether the business case benefits were actually realised."
quiz:
  - question: "Which changeover strategy carries the LOWEST risk of a failed implementation, and why?"
    options:
      - "Direct (big-bang) cutover, because it is quick"
      - "Parallel running, because the old and new systems operate together and their outputs can be compared"
      - "Phased changeover, because it is the cheapest"
      - "Pilot, because it always covers the whole organisation"
    answer: 1
    explanation: "Parallel running keeps the old system live alongside the new one, so their outputs can be compared and the old system is an immediate fallback if the new one fails. That safety is why it carries the lowest risk, and also why it is the most resource-intensive: staff run and reconcile two systems at once."
    whyWrong:
      - "A direct cutover is the quickest but the highest risk: the old system is gone, so there is no fallback."
      - ""
      - "Phased changeover reduces risk by staging the move, but it is not defined by being cheapest, and it carries more risk than full parallel running."
      - "A pilot deliberately covers a limited part of the organisation first; covering everything at once would be a direct cutover."
  - question: "An organisation plans a direct (big-bang) cutover to a new business-critical system. What is the IS auditor's GREATEST concern?"
    options:
      - "Direct cutover takes too long to complete"
      - "There is no fallback to the old system if the new one fails, so a tested rollback plan and thorough prior testing are essential"
      - "Users will need training on the new system"
      - "The new system may have a different user interface"
    answer: 1
    explanation: "A direct cutover retires the old system at the moment the new one goes live, so if the new system fails there is nothing to fall back to. For a business-critical system that is a serious exposure, which is why a direct cutover must be backed by exhaustive testing and a tested rollback plan. The absence of a fallback is the core concern."
    whyWrong:
      - "A direct cutover is fast, not slow; speed is its appeal, and part of why the fallback is sacrificed."
      - ""
      - "Training is needed for any new system and is not specific to the risk of an abrupt changeover."
      - "A changed interface is a usability matter, minor beside having no way back if the cutover fails."
  - question: "What is the primary purpose of a post-implementation review (PIR), and when should it be conducted?"
    options:
      - "To fix outstanding defects, immediately at go-live"
      - "To assess, after the system has stabilised, whether it met its objectives and delivered the business case benefits"
      - "To sign off user acceptance, before go-live"
      - "To decide which development methodology to use next, during design"
    answer: 1
    explanation: "A post-implementation review looks back, once the system has settled into normal operation, and asks whether the project delivered what its business case promised: the benefits, the objectives, the expected costs. Conducted too early it measures teething problems rather than steady-state performance, so it is timed after stabilisation, and ideally performed independently."
    whyWrong:
      - "Fixing defects is operational support, not the benefits-focused evaluation a PIR performs, and go-live is too early to judge outcomes."
      - ""
      - "User acceptance happens before go-live and confirms fitness for use; the PIR happens after and confirms benefits realised."
      - "Choosing a methodology is a design-phase decision for a project; it is not what a post-implementation review is for."
---

## The situation

The build is done, the data is converted, and now the project has to actually switch the business over. One camp wants to run the old and new systems side by side for a month; another wants to save the cost and flip everyone to the new system on Saturday night, old system off. And once it is live, the plan is to close the project and move the team on.

Two decisions hide here: how to change over, and whether the project is really finished at go-live. The exam has a firm view on both.

## Choosing a changeover

The way an organisation moves from old system to new is a risk-and-cost trade-off, and the exam expects you to rank the options:

- **Parallel running.** Old and new run together for a period; outputs are compared, and the old system is a ready fallback. Lowest risk, highest cost, you operate and reconcile two systems at once.
- **Phased changeover.** The move happens in stages, module by module or site by site. Risk and cost sit in the middle: a failure is contained to the stage, but the two systems must interoperate during the transition.
- **Pilot.** One site or group adopts the new system first, limiting the blast radius before a wider rollout.
- **Direct, or big-bang, cutover.** Everyone moves at once and the old system is retired immediately. Cheapest and fastest, and the highest risk, because there is no fallback if the new system fails.

There is no single right answer; there is a right answer *for the risk*. The more unacceptable a failure would be, the more you lean toward parallel running and away from a direct cutover.

## The fallback is the point

What separates the low-risk options from the high-risk one is the **fallback**. Parallel and phased approaches keep a way back; a direct cutover does not. So when a critical system is moved by big-bang cutover, the auditor's greatest concern is exactly that: if the new system fails on Monday morning, there is nothing to revert to.

That does not forbid a direct cutover; sometimes it is the only practical option. It raises the bar for what must be true before you attempt one: exhaustive testing beforehand, and a **tested rollback plan**, a rehearsed, proven way to get back to a working state, not a paragraph in a document. An untested rollback is not a fallback; it is a hope.

## The project is not done at go-live

Going live is not the finish line. The project set out to deliver benefits, the ones the sponsor put in the business case back in lesson 1, and no one yet knows whether it did. That is the job of the **post-implementation review**.

A PIR looks back and asks whether the system met its objectives and delivered the expected benefits, at the expected cost. Two things make it meaningful:

- **Timing.** It is conducted after the system has **stabilised** into normal operation, not at go-live. Run it too early and you measure teething troubles, not steady-state value.
- **Independence.** It is most credible when performed by someone independent of the project, so the people who delivered it are not the ones grading it.

This is where the business case earns its keep. Because the benefits were stated and measurable at the start, the PIR has something concrete to check them against. A project with no approved business case, the finding from lesson 1, leaves the PIR with nothing to measure, which is why the two lessons are two ends of the same thread.

## Where practitioners go wrong

The first instinct that costs marks is judging a changeover by cost or speed alone and missing that the real variable is the fallback; a direct cutover of a critical system without a tested rollback is the classic wrong choice. The second is treating go-live as the end of the project. The loop closes at the post-implementation review, conducted after stabilisation, ideally independently, measuring the delivered system against the benefits it was supposed to bring.
