---
title: "Capacity, Performance and Database Management"
description: "Capacity management looks forward, not back, and a DBA changing data directly bypasses every application control. The exam tests proactive capacity planning and the risk of privileged database access."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 8
minutes: 7
gated: false
taskStatement: "Evaluate whether capacity and performance are managed proactively and whether privileged database activity is controlled."
objectives:
  - "Explain why capacity management must be proactive."
  - "Recognise that direct database changes bypass application controls."
  - "State why privileged database access must be logged and monitored."
trap: "Managing capacity reactively, waiting for something to run out. Capacity management is forward-looking, and a DBA's direct data change escapes the input and processing controls the application would have applied."
quiz:
  - question: "What characterises effective capacity management?"
    options:
      - "Adding resources only after users report that a system has run out"
      - "Proactively monitoring trends and forecasting demand so resources are provided before they are exhausted"
      - "Keeping capacity permanently at the maximum possible level"
      - "Measuring capacity once when the system is first installed"
    answer: 1
    explanation: "Capacity management is forward-looking: it monitors utilisation trends and forecasts future demand so that resources, processing, storage, network, are in place before they are needed. Waiting until a system runs out means the shortfall is discovered as an outage, which is exactly what proactive capacity planning exists to prevent."
    whyWrong:
      - "Adding resources only after exhaustion is reactive; the shortage has already caused an incident by then."
      - ""
      - "Permanently maxing capacity is wasteful and still no substitute for forecasting; it is not how capacity is managed."
      - "A single measurement at installation ignores growth; capacity must be monitored and forecast continuously."
  - question: "A database administrator changes values directly in a production database table, outside the application. What is the MAIN control concern?"
    options:
      - "The change will be slower than using the application"
      - "It bypasses the application's input, processing and validation controls, so the data may be invalid and the change untracked"
      - "The database software licence may be breached"
      - "Other users cannot see the change immediately"
    answer: 1
    explanation: "The application enforces input validation, processing checks and an audit trail on every transaction. A direct change to the database table goes around all of it, so the value may be invalid, unbalanced, or unauthorised, and there may be no application record of who changed what. Direct data changes are therefore tightly restricted, logged and monitored."
    whyWrong:
      - "Speed is irrelevant; the concern is that the change escapes the controls the application would have applied."
      - ""
      - "Licensing is unrelated to the integrity and control problem a direct data change creates."
      - "Visibility timing is trivial next to bypassing validation and the audit trail."
  - question: "Why must privileged database administrator (DBA) access be logged and monitored?"
    options:
      - "Because DBAs are untrustworthy by nature"
      - "Because the access is powerful enough to alter or expose any data, so its use must be traceable and independently reviewed"
      - "Because logging makes the database run faster"
      - "Because DBAs should not have any access at all"
    answer: 1
    explanation: "A DBA can read, change or delete essentially any data and can alter the database itself. That power is necessary for the role but dangerous if unchecked, so its use is logged and the logs are reviewed by someone independent of the DBA. The point is traceability and independent oversight of powerful access, not distrust of the individual."
    whyWrong:
      - "It is not about character; any access this powerful requires oversight regardless of who holds it."
      - ""
      - "Logging does not improve performance; it provides the audit trail that makes powerful access accountable."
      - "DBAs need privileged access to do their job; the control is monitoring that access, not removing it."
---

## The situation

Two things surface in the same review. First, the main system ran out of storage last quarter and stopped, and the response was to buy more disk after the outage, the third time this year the same surprise has happened. Second, a database administrator has been correcting figures by editing the production tables directly, because it is quicker than going through the application. Both feel like efficient, pragmatic operations. Both are the finding.

This lesson covers keeping systems fed with resources, and keeping the powerful people who run databases in check.

## Capacity management looks forward

Capacity management ensures the organisation has the resources, processing power, storage, memory, network, to meet demand. The exam's key point is that it is **proactive**, not reactive.

Effective capacity management monitors utilisation **trends** and **forecasts** future demand, so resources are provided *before* they run out. Watching storage climb toward its limit and expanding it in advance is capacity management working. Discovering the limit because the system stopped, and buying disk afterwards, is not capacity management at all, it is incident response to a shortage that planning should have prevented. When a question contrasts the two, the forward-looking, trend-based answer is correct.

Related to this is **performance management**: monitoring response times and throughput against expected **baselines and thresholds**, so degradation is spotted and investigated before it becomes an outage. A system drifting slower over weeks is often the early warning of a capacity problem ahead.

## Direct database changes bypass the controls

The database sits underneath the application, and that is exactly why editing it directly is dangerous. Everything Domain 3 said about application controls, input validation, processing checks, an audit trail, is enforced by the **application**. When a DBA changes a value straight in the table, the change goes **around all of it**:

- No input validation, so the value could be out of range, malformed, or leave related records unbalanced.
- No processing controls, so totals and dependent data may no longer reconcile.
- Often no application audit trail, so there is no record of who changed what, or why.

So direct data changes are tightly restricted. Where they are genuinely necessary, they are authorised, logged, and reviewed, never a routine shortcut around the application because it is quicker.

## Privileged access must be traceable

A DBA's access is necessarily powerful: they can read, alter or delete almost any data and change the database itself. That power is required for the role, and precisely because of it, DBA activity is **logged and independently monitored**. The reviewer is someone other than the DBA, so the powerful access is accountable to a second pair of eyes.

This is not a judgement about DBAs personally. It is the same principle that governs any highly privileged access: the greater the power, the greater the need for its use to be traceable and independently reviewed. Logs that only the DBA can see, or that no one ever reads, are not a control.

## Where practitioners go wrong

Two instincts cost marks. The first is managing capacity reactively, treating a resource running out as an operational hiccup to fix when it happens, when the exam wants forward-looking, trend-based planning that prevents the shortage. The second is seeing direct database edits as harmless efficiency. They bypass the application's controls entirely, and combined with unmonitored privileged access, they are how bad or unauthorised data enters a system with no trace.
