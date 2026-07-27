---
title: "IT Service Management and Service Levels"
description: "IT run as services to the business, with a service desk as the single point of contact. The exam tests the difference between an incident and a service request, and how priority is set."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 1
minutes: 7
gated: false
taskStatement: "Evaluate whether IT services are delivered against defined service levels through a functioning service desk."
objectives:
  - "Explain the role of the service desk as a single point of contact."
  - "Distinguish an incident from a service request."
  - "Determine how the priority of a call is set."
trap: "Treating every call to the service desk as an incident. A request for something new is a service request, and priority is impact combined with urgency, not first come first served."
quiz:
  - question: "What is the PRIMARY purpose of an IT service desk?"
    options:
      - "To resolve every technical issue itself without escalation"
      - "To act as the single point of contact that logs, categorises and coordinates the handling of user contacts"
      - "To approve changes before they reach production"
      - "To design the organisation's IT strategy"
    answer: 1
    explanation: "The service desk is the single point of contact between users and IT. Its job is to log, categorise and prioritise every contact and to coordinate its resolution, escalating what it cannot resolve directly. It is a coordination and communication function, not the team that personally fixes everything."
    whyWrong:
      - "The service desk resolves what it can but escalates the rest; being the sole fixer of every issue is neither its purpose nor realistic."
      - ""
      - "Change approval belongs to the change management process and its authorities, not the service desk."
      - "IT strategy is a governance activity from Domain 2, far outside the service desk's operational role."
  - question: "A user contacts the service desk to request a new laptop for a new starter. How should this be classified?"
    options:
      - "An incident, because the user needs something"
      - "A service request, because it is a standard request for a service or item, not an interruption to a service"
      - "A problem, because it may recur"
      - "A change, because it alters production"
    answer: 1
    explanation: "A service request is a standard, expected request for something, new equipment, access, or information, and is handled through a defined fulfilment process. An incident is an unplanned interruption or degradation of a service that is already running. Requesting a new laptop interrupts nothing, so it is a service request."
    whyWrong:
      - "An incident is an unplanned interruption to an existing service; provisioning a new laptop does not interrupt anything."
      - ""
      - "A problem is the underlying cause of one or more incidents; a routine equipment request is neither."
      - "A change alters the configuration of production services; fulfilling a standard request from a catalogue is not a change to production."
  - question: "How is the priority of a logged call MOST appropriately determined?"
    options:
      - "By the order in which calls arrive"
      - "By the combination of the impact on the business and the urgency of resolution"
      - "By the seniority of the person who reported it"
      - "By how long the call is expected to take to resolve"
    answer: 1
    explanation: "Priority is a function of impact, how much of the business is affected and how badly, and urgency, how quickly it must be resolved. This ensures the most business-critical calls are handled first, rather than being processed in arrival order or by the caller's rank."
    whyWrong:
      - "Arrival order ignores business impact; a trivial early call would outrank a critical later one."
      - ""
      - "Seniority of the reporter is not impact; a junior reporting a payroll outage outranks an executive's minor query."
      - "Expected effort helps with scheduling resources but does not set business priority."
---

## The situation

The service desk queue is worked strictly in the order calls arrive. This morning a request for a spare monitor is being handled ahead of a report that the payment system is down for the whole finance team, because the monitor request was logged first. Nobody set out to prioritise a monitor over payroll; the process just never distinguished them.

Domain 4 is about running IT well day to day, and it starts at the desk where the business meets IT.

## The service desk is a coordinator, not a repair shop

The service desk is the **single point of contact** between users and IT. Its value is not that it personally fixes everything, it cannot, but that every contact goes through one place that logs it, categorises it, sets a priority, and coordinates its resolution, escalating to specialist teams what it cannot resolve at first line.

That single point of contact is what makes the rest of operations measurable: every incident and request is recorded, so IT can see what is breaking, how long things take, and whether service levels are being met. A user who phones a developer directly bypasses all of that, and the work becomes invisible.

## Incident or service request

The exam draws a firm line between two kinds of contact, and questions turn on it.

- An **incident** is an unplanned interruption to a service, or a reduction in its quality: the email server is down, a report is running slow, a login fails. Something that was working is not.
- A **service request** is a standard, expected request for something: a new laptop, access to a system, a password reset, some information. Nothing is broken; the user wants a routine service delivered.

They are handled by different processes, incident management to restore service, request fulfilment to deliver the item, so misclassifying one as the other routes it wrongly. Requesting a new laptop for a starter interrupts no running service; it is a service request, not an incident.

## Priority is impact and urgency

Calls are not handled first come, first served, and not by the rank of the caller. Priority is set by combining two things:

- **Impact**: how much of the business is affected, and how badly. One user or the whole finance department; a minor annoyance or a stopped process.
- **Urgency**: how quickly it needs to be resolved before the impact grows.

A payroll outage affecting a whole team on payday is high impact and high urgency, and it outranks a spare-monitor request logged an hour earlier. Setting priority this way is what stops the queue from serving the monitor before the payroll system.

## Where practitioners go wrong

Two instincts cost marks. The first is treating every contact as an incident; a request for something new is a service request, and the distinction decides how it is handled. The second is imagining the service desk exists to fix everything itself. It exists to be the single, recorded point of contact that triages by impact and urgency and coordinates resolution, and that coordination is what makes the whole of operations visible and measurable.
