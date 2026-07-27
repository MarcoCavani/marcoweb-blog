---
title: "Problem Management"
description: "Incidents restore service; problem management removes the cause so they stop happening. The exam tests the distinction, and recognises the repeated incident as a problem to investigate."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 3
minutes: 7
gated: false
taskStatement: "Evaluate whether the root causes of recurring incidents are investigated and removed to prevent recurrence."
objectives:
  - "Distinguish problem management from incident management."
  - "Recognise a recurring incident as a problem to investigate."
  - "Define a known error and its role."
trap: "Repeatedly resolving the same incident without ever raising a problem. Re-fixing a recurring fault restores service each time but never removes the cause, so it keeps returning."
quiz:
  - question: "What distinguishes problem management from incident management?"
    options:
      - "Problem management restores service faster than incident management"
      - "Problem management identifies and removes the root cause to prevent recurrence, while incident management restores service"
      - "Problem management only applies to hardware, incident management only to software"
      - "They are two names for the same process"
    answer: 1
    explanation: "Incident management restores service as quickly as possible; problem management investigates the underlying cause of one or more incidents and removes it so they do not recur. One deals with the immediate outage, the other with the reason it happened. Keeping them separate is the core of this topic."
    whyWrong:
      - "Problem management is not about speed of restoration; it deliberately takes the time to find the cause, which incident management does not."
      - ""
      - "Both processes apply across hardware and software; the split is cause-removal versus service-restoration, not equipment type."
      - "They are distinct, complementary processes; treating them as identical loses the exam's intended distinction."
  - question: "The same incident, a nightly batch job failing, has been resolved by restarting it every night for two weeks. What does good practice call for?"
    options:
      - "Continue restarting it each night, since that restores service"
      - "Raise a problem to investigate and remove the root cause, so the recurring incident stops"
      - "Ignore it, because service is always restored"
      - "Reclassify each restart as a service request"
    answer: 1
    explanation: "A repeatedly recurring incident is the signal of an underlying problem. Restarting the job restores service each night, but never addresses why it keeps failing. Good practice raises a problem, investigates the root cause, and removes it, converting a nightly firefight into a permanent fix."
    whyWrong:
      - "Nightly restarts treat the symptom forever; the recurrence is exactly the evidence that a problem needs raising."
      - ""
      - "Service being restored each time is not success when the same failure returns daily; that pattern is the problem."
      - "Reclassifying it as a request hides the recurring failure rather than investigating it."
  - question: "In problem management, what is a 'known error'?"
    options:
      - "An incident that has not yet been logged"
      - "A problem whose root cause has been identified and for which a workaround or fix is documented"
      - "A change that failed in testing"
      - "An error message displayed to the user"
    answer: 1
    explanation: "A known error is a problem for which the root cause has been determined and a workaround, or a permanent fix, has been documented. Recording known errors lets the service desk resolve recurrences quickly using the documented workaround while a permanent fix is developed or scheduled."
    whyWrong:
      - "An unlogged incident is simply not yet recorded; it says nothing about a diagnosed root cause."
      - ""
      - "A change that failed testing is a change-management outcome, not a diagnosed problem with a documented workaround."
      - "A user-facing error message is a symptom, not the documented root-cause record a known error represents."
---

## The situation

The nightly reconciliation job has failed and been manually restarted every night for two weeks. Each morning the on-call engineer restarts it, service is restored, the incident is closed, and everyone moves on. The restart works every time. And every night it fails again, because no one has asked why.

Fourteen incidents, fourteen resolutions, one unsolved problem. This lesson is the other half of the previous one.

## Two processes, one boundary

The previous lesson ended by handing the underlying fault to problem management. Here is what that means:

- **Incident management** restores normal service as quickly as possible. It cares about now.
- **Problem management** investigates the underlying cause of one or more incidents and removes it, so those incidents stop happening. It cares about never again.

A **problem** is the underlying cause of one or more incidents. Incident management gets the users working; problem management makes sure they do not have to be got working again for the same reason next week. The two are complementary, and the exam repeatedly checks that you keep them apart.

## The recurring incident is a problem

The clearest signal that a problem exists is an incident that keeps coming back. The nightly batch failure is not fourteen unrelated incidents; it is one problem generating an incident a day. Restarting the job is correct incident handling, it restores service, but if that is all that ever happens, the cause is never removed and the failure recurs indefinitely.

Good practice raises a **problem** the moment a pattern appears: investigate why the job fails, find the root cause, and remove it. That converts a nightly firefight into a one-time fix. When a question describes the same incident recurring and asks what should happen, the answer is to raise a problem and pursue the root cause, not to keep re-applying the workaround.

## Known errors

When problem management identifies a root cause and documents a workaround or fix, the result is a **known error**: a problem whose cause is understood and whose handling is written down. Known errors are valuable operationally. If a recurrence happens before the permanent fix is deployed, the service desk can resolve it fast using the documented workaround, rather than diagnosing it afresh each time.

So the flow is: incidents restore service, a pattern or a serious fault raises a problem, investigation produces a known error with a workaround, and a permanent fix eventually removes the cause. This is also where problem management can be **proactive**, analysing incident trends to find and fix latent problems before they cause the next outage.

## Where practitioners go wrong

The costly instinct is to treat recurrence as normal because service is always restored. Fourteen successful restarts feel like fourteen wins; they are fourteen symptoms of one unaddressed problem. Restoring service is incident management doing its job, but a fault that keeps returning is the signal to raise a problem and remove the cause. Re-fixing forever is not resolution; it is a problem no one has agreed to solve.
