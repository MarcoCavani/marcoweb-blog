---
title: "Incident Management"
description: "The one job of incident management is to restore service fast, not to find the cause. The exam tests that distinction, and that a workaround is a legitimate resolution."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 2
minutes: 7
gated: false
taskStatement: "Evaluate whether incidents are resolved to restore normal service as quickly as possible and prioritised by business impact."
objectives:
  - "State the primary objective of incident management."
  - "Explain why a workaround can be a valid resolution."
  - "Recognise the boundary between incident management and root-cause work."
trap: "Trying to find and fix the root cause during an incident. The objective is to restore service; root cause belongs to problem management, and chasing it first prolongs the outage."
quiz:
  - question: "What is the PRIMARY objective of incident management?"
    options:
      - "To identify and permanently eliminate the root cause"
      - "To restore normal service operation as quickly as possible and minimise business impact"
      - "To prevent the incident from ever recurring"
      - "To assign blame for the failure"
    answer: 1
    explanation: "Incident management exists to restore normal service as quickly as possible, limiting the damage to the business. Finding the root cause and preventing recurrence are the goals of problem management, a separate process. Conflating the two is the single most tested point in this area."
    whyWrong:
      - "Eliminating the root cause is the objective of problem management; pursuing it during an incident delays the restoration that matters now."
      - ""
      - "Preventing recurrence is also problem management; incident management is concerned with the here-and-now outage."
      - "Assigning blame is never an objective of incident management and gets in the way of restoring service."
  - question: "During a major outage, the team finds a workaround that restores service, though the underlying fault is not yet understood. What should they do?"
    options:
      - "Keep the service down until the root cause is fully diagnosed"
      - "Apply the workaround to restore service, then raise the underlying fault for problem management"
      - "Close the incident and take no further action"
      - "Escalate to senior management before restoring anything"
    answer: 1
    explanation: "Restoring service is the priority, so applying a workaround that gets users working again is exactly right, even with the cause unknown. The underlying fault is then passed to problem management to investigate and remove permanently. Restore first, understand later, is the correct order for an incident."
    whyWrong:
      - "Holding the service down to diagnose the cause prolongs the business impact incident management exists to minimise."
      - ""
      - "Restoring with a workaround but never raising the fault leaves it to recur; the problem must still be investigated."
      - "Escalation may happen in parallel, but it is not a substitute for restoring service with the available workaround."
  - question: "How should the priority of an incident be determined?"
    options:
      - "By which team is responsible for the affected system"
      - "By the impact on the business combined with the urgency of restoration"
      - "By the technical complexity of the fix"
      - "By whether a workaround already exists"
    answer: 1
    explanation: "As with any service-desk call, incident priority is set by impact, how much of the business is affected and how severely, and urgency, how quickly it must be restored. A high-impact, high-urgency incident such as a customer-facing outage is worked ahead of a minor single-user issue."
    whyWrong:
      - "The responsible team affects who works it, not how important it is to the business."
      - ""
      - "Technical complexity affects effort and duration, not business priority."
      - "The existence of a workaround affects how it is resolved, not the priority it is given."
---

## The situation

The order-processing system is down and the whole sales floor is idle. A capable engineer has the logs open and is determined to find exactly why it failed before bringing it back, out of professional pride. Forty minutes in, sales are still stopped, and a simple restart would very likely have had everyone working within two.

The engineer is doing good work at the wrong moment. This lesson is about why.

## One objective: restore service

Incident management has a single primary objective: **restore normal service operation as quickly as possible**, and minimise the impact on the business while service is degraded. Everything else, understanding the fault, preventing it from happening again, is a different process.

That is not a small distinction. It changes what "good" looks like during an outage. Success is measured by how fast users are working again, not by how thoroughly the cause was understood in the moment. The engineer who restores service in two minutes with a restart has done incident management well, even if they do not yet know why it failed.

## A workaround is a valid resolution

Because the goal is restoration, a **workaround** that gets users working again is a legitimate resolution to an incident, even when the underlying cause is still unknown. Rebooting the server, failing over to a standby, switching to a manual process: all restore service, all buy back the business impact, none require the cause to be understood first.

The underlying fault is not forgotten; it is raised for **problem management** to investigate and remove permanently, which is the next lesson. So the correct order during an incident is restore first, understand later. Holding a service down to diagnose the root cause, as the engineer did, inverts that order and prolongs exactly the impact incident management exists to reduce.

## Priority by impact and urgency

Incidents are prioritised the same way any service-desk call is: by **impact** combined with **urgency**. A customer-facing outage that stops revenue is high impact and high urgency and is worked ahead of a single user's minor glitch, regardless of which arrived first or which is technically harder. The team responsible or the complexity of the fix affect who works it and for how long, not how important it is to the business.

Severe, wide-impact incidents are often handled as **major incidents** with extra coordination and communication, but the objective does not change: restore service, fast.

## Where practitioners go wrong

The instinct that costs marks, and time, is chasing the root cause during the incident. It feels like the responsible, thorough thing to do, and it is precisely the wrong thing during an outage. The objective is to restore service; the root cause is problem management's job, addressed once service is back. Restore first with whatever workaround is available, then hand the cause to problem management to fix for good.
