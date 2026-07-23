---
title: "Organisational Structure and Segregation of Duties"
description: "The one person who can request, approve, make and review a change is a control failure with a job title. How the exam tests segregation of duties in IT."
course: "cisa-domain-2"
module: "Domain 2: Governance and Management of IT"
domain: 2
order: 4
minutes: 8
gated: false
taskStatement: "Evaluate whether an IT organisational structure enforces segregation of duties and provides a compensating control where it cannot."
objectives:
  - "Identify the four duties that should be separated and why."
  - "Recognise a segregation-of-duties conflict in an IT role description."
  - "Determine an appropriate compensating control when separation is not feasible."
trap: "Accepting that a small team makes segregation impossible and moving on. The exam expects a compensating control, not a shrug."
quiz:
  - question: "Which combination of duties held by ONE person represents the MOST serious segregation-of-duties conflict?"
    options:
      - "Writing application code and documenting it"
      - "Developing a change and moving it into production"
      - "Testing a change and training users on it"
      - "Logging an incident and monitoring its resolution"
    answer: 1
    explanation: "When one person both develops a change and promotes it to production, they can move unauthorised or untested code into the live environment with nobody in between. Separating who builds from who deploys is the core change-management segregation, which is why this is the most serious conflict."
    whyWrong:
      - "Writing and documenting code is the same person describing their own work; it creates no ability to bypass a control."
      - ""
      - "Testing and training are both downstream of deployment and do not let one person push unauthorised code live."
      - "Logging and monitoring an incident is a single operational thread with no authorisation power over production."
  - question: "In a small IT team, one administrator must both operate and monitor a critical system because there is no one else. What is the BEST compensating control?"
    options:
      - "Accept the risk, since the team is too small to segregate"
      - "Have an independent party review the administrator's activity logs"
      - "Ask the administrator to document their own actions"
      - "Rotate the administrator to a different system each month"
    answer: 1
    explanation: "When segregation is genuinely infeasible, the standard compensating control is independent oversight: someone who is not the administrator reviews the activity logs. It does not prevent an improper action, but it makes one detectable by a party with no stake in hiding it."
    whyWrong:
      - "Accepting the risk with no compensating control is exactly the shrug the exam penalises; small size does not remove the need to compensate."
      - ""
      - "Self-documentation is not independent, so it provides no assurance against the very person creating it."
      - "Rotation addresses familiarity, not the lack of oversight over a single administrator's privileged actions."
  - question: "An IS auditor finds that the information security function reports to the head of IT operations. What is the PRIMARY concern?"
    options:
      - "Security staff may be paid less than operations staff"
      - "Security cannot independently challenge operations when it reports to the function it is meant to oversee"
      - "Operations may not understand security requirements"
      - "The structure may slow down incident response"
    answer: 1
    explanation: "Security exists partly to challenge how operations runs systems. If it reports to the head of operations, it cannot independently raise concerns about the function it answers to, which is a structural segregation problem, the same reporting-line logic that governs the audit and steering committee questions."
    whyWrong:
      - "Relative pay is irrelevant to the control conflict in the reporting line."
      - ""
      - "Operations understanding of security is a capability matter, not the independence problem the reporting line creates."
      - "Incident-response speed is an operational consideration, not the fundamental oversight conflict."
---

## The situation

You are reviewing a change that went wrong in production. You trace it back and find that one engineer requested it, approved it, wrote it, deployed it, and signed off the post-implementation review. Every box is ticked. Every box was ticked by the same person.

Nothing detected the problem because there was never anyone in a position to.

## The duties that must separate

Segregation of duties (SoD) exists so that no single person can both commit an error or fraud and conceal it. In IT, four kinds of duty should be held by different people:

- **Authorisation**, approving that something should happen.
- **Custody**, holding or controlling the asset, for example access to production.
- **Recording**, creating the record of what happened.
- **Verification**, independently checking it.

When one person holds two or more of these over the same transaction, the control weakens. When one person holds all four, there is effectively no control at all.

## The change-management conflict

The most heavily tested IT conflict is **developing a change and promoting it to production**. If the same person can both build code and deploy it, they can move untested or unauthorised code into the live environment with nobody in between. This is why development and production access are separated as a matter of course, and why a CAAT that finds one person holding both is a reliable finding.

Other classic conflicts: the person who creates a user account should not also approve the access; the person who runs a system should not be the only one who reviews its logs; the security function should not report to the operations it is meant to challenge. That last one is the reporting-line trap again, the same logic as the audit function and the steering committee: oversight cannot report to what it oversees.

## When you cannot separate

Real teams are sometimes too small to split every duty, and the exam knows this. What it will not accept is treating small size as a reason to abandon the control. The expected answer is a **compensating control**, and for SoD the standard one is **independent oversight**: someone who is not the administrator reviews the activity logs.

Independent log review does not prevent an improper action, the way separation would, but it makes an improper action detectable by a party with no stake in hiding it. That is the trade a compensating control makes: detection in place of prevention, provided the reviewer is genuinely independent. Self-documentation fails this test, because the person creating the record is the person you need assurance over.

## Where practitioners go wrong

Two instincts cost marks. The first is accepting "we are too small to segregate" as a complete answer; the exam wants the compensating control that follows. The second is proposing a compensating control that is not independent, such as having the same administrator document their own actions. A compensating control that relies on the conflicted person is not a control, it is the conflict restated.
