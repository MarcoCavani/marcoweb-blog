---
title: "Change Management"
description: "The most important operational control: no change reaches production without authorisation, testing and a way back. The exam tests emergency changes and the segregation that stops a developer approving their own work."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 4
minutes: 8
gated: false
videoId: "dh22-rlpqfA"
taskStatement: "Evaluate whether changes to production are authorised, tested, reversible, and segregated from the people who build them."
objectives:
  - "State what must be true before a change reaches production."
  - "Explain how an emergency change is controlled rather than exempted."
  - "Recognise a segregation-of-duties failure in the change process."
trap: "Believing an emergency change skips control. It gets expedited authorisation and a retrospective review, not a free pass, and the developer who builds a change must not be the one who approves or deploys it."
quiz:
  - question: "Which of the following MUST be in place before a change is moved into production?"
    options:
      - "A marketing announcement of the new feature"
      - "Authorisation, testing, and a documented backout plan"
      - "Agreement from every user of the system"
      - "A guarantee that the change cannot fail"
    answer: 1
    explanation: "A controlled change is authorised by the appropriate authority, tested to confirm it works and does not break anything else, and carries a backout plan so it can be reversed if it fails in production. These three, authorise, test, be able to undo, are the backbone of change management."
    whyWrong:
      - "A marketing announcement is unrelated to whether the change is controlled and safe to deploy."
      - ""
      - "Universal user agreement is neither practical nor the control; authorisation comes from the defined change authority."
      - "No change can be guaranteed not to fail, which is precisely why a backout plan, not a guarantee, is required."
  - question: "A critical production system fails at 2am and an emergency fix is needed immediately. How should change management handle this?"
    options:
      - "The fix bypasses change management entirely because it is an emergency"
      - "The fix follows an expedited emergency change process, with authorisation obtained and the change reviewed and documented afterwards"
      - "The fix waits until the next scheduled change advisory board meeting"
      - "The developer applies the fix and no record is kept"
    answer: 1
    explanation: "Emergencies are foreseen by change management, not exempt from it. An emergency change uses an expedited approval route so the fix can be made quickly, but authorisation is still obtained (even if by a single on-call approver) and the change is documented and formally reviewed afterwards. Speed is accommodated; control is not abandoned."
    whyWrong:
      - "Bypassing change management entirely removes all control at the riskiest possible moment; emergencies are expedited, not exempt."
      - ""
      - "Waiting for the next scheduled board defeats the purpose of an emergency and prolongs a critical outage."
      - "Applying a fix with no record leaves production altered with no authorisation or audit trail, the classic unauthorised change."
  - question: "An IS auditor finds that developers can move their own code changes directly into the production environment. What is the MAIN concern?"
    options:
      - "Developers may not enjoy the extra responsibility"
      - "It breaks segregation of duties, letting one person build, approve and deploy a change with no independent check"
      - "Production deployments will take longer"
      - "The code may be written in an outdated language"
    answer: 1
    explanation: "Segregation of duties requires that the person who develops a change is not the one who authorises and deploys it to production. When a developer can push their own code straight to production, a single individual controls the whole path, and an error or malicious change reaches live systems with no independent review. This is a core change-management and ITGC failure."
    whyWrong:
      - "Developer preferences are irrelevant; the issue is the absence of an independent control over what reaches production."
      - ""
      - "Deployment speed is not the concern; unchecked self-deployment is often faster and precisely the risk."
      - "The programming language has no bearing on the segregation failure in the deployment path."
---

## The situation

A change went into production on Friday and took the ordering system down for the weekend. When you trace it, there was no test record, no approval, and no plan to undo it. The developer who wrote it also deployed it, on their own judgement, straight to live. The fix for the outage was itself an unauthorised, untested change.

Change management is the control that this whole scene was missing, and it is the single most important control in IT operations, and one of the crown jewels of ITGC.

## Authorise, test, be able to undo

A change is controlled when three things are true before it reaches production:

- **Authorised.** The appropriate change authority has approved it. For routine changes this may be a delegated approver; for significant ones, a change advisory board that assesses risk and impact.
- **Tested.** It has been shown to work, and shown not to break anything else, in an environment that is not production.
- **Reversible.** There is a documented **backout plan** to return to the previous working state if the change fails once live.

No change can be guaranteed not to fail, which is exactly why the backout plan matters: control is not the promise that nothing goes wrong, it is the ability to authorise, verify, and recover. When a question asks what must be true before a change goes live, look for these three.

## Types of change, including the emergency

Change management recognises different routes for different risks:

- **Standard changes** are low-risk, pre-authorised and repeatable (for example, a routine password reset procedure), handled through a streamlined path.
- **Normal changes** are assessed and authorised through the full process, with the change advisory board weighing risk and impact.
- **Emergency changes** address an urgent situation, such as a critical production failure or an actively exploited vulnerability, and use an **expedited** approval route.

The exam's favourite point here is that an emergency change is **expedited, not exempted**. The fix can be made fast, but authorisation is still obtained, even if from a single on-call approver, and the change is documented and formally reviewed afterwards. Bypassing change management entirely, at the very moment the system is most fragile, is the wrong answer.

## Segregation of duties in the path to production

The developer who deployed their own code straight to live broke **segregation of duties**: the person who builds a change must not be the one who authorises and deploys it. When a single individual controls the whole path from writing code to running it in production, an error, or a deliberate malicious change, reaches live systems with no independent check.

So the environments and the roles are kept separate: developers work in development, changes are tested elsewhere, and a distinct authority or process moves approved, tested changes into production. This is the same principle as an auditor not remediating their own finding, applied to the pipeline that feeds production.

## Where practitioners go wrong

Two instincts cost marks. The first is treating an emergency as a reason to skip the process; the process has an emergency route precisely so control survives urgency, expedite the approval, do not abandon it, and review afterwards. The second is tolerating developers with direct production deployment rights for convenience or speed. That is a segregation-of-duties failure, and it is the gap through which unauthorised and untested changes, exactly like the Friday outage, reach live systems.
