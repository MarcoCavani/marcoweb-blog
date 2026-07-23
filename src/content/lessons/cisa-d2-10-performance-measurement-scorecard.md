---
title: "Performance Measurement and the IT Balanced Scorecard"
description: "A KPI looks back at what happened; a KRI warns before it does. The exam tests the difference, and why the IT balanced scorecard refuses to measure IT by cost alone."
course: "cisa-domain-2"
module: "Domain 2: Governance and Management of IT"
domain: 2
order: 10
minutes: 7
gated: false
taskStatement: "Evaluate whether IT performance measurement links to business objectives and gives leading as well as lagging indicators."
objectives:
  - "Distinguish a key performance indicator from a key risk indicator."
  - "Explain what the IT balanced scorecard adds beyond financial measures."
  - "Recognise metrics that measure activity rather than business outcome."
trap: "Judging IT performance by activity volume. The exam wants measures tied to business outcomes, not counts of tickets closed or systems patched."
quiz:
  - question: "What is the KEY difference between a key performance indicator (KPI) and a key risk indicator (KRI)?"
    options:
      - "A KPI is financial; a KRI is technical"
      - "A KPI measures how well an objective is being met; a KRI signals rising exposure before a risk materialises"
      - "A KPI is set by the board; a KRI is set by IT"
      - "They measure the same thing at different frequencies"
    answer: 1
    explanation: "A KPI is a lagging measure of performance against an objective, it tells you how you did. A KRI is a leading indicator of risk, it warns that exposure is rising before the risk materialises. One looks back at outcomes; the other looks forward at emerging danger."
    whyWrong:
      - "Neither is defined by being financial or technical; both can be either."
      - ""
      - "Who sets them is not the distinction; the distinction is performance versus emerging risk."
      - "They measure different things, performance versus risk, not the same thing at different intervals."
  - question: "What does the IT balanced scorecard PRIMARILY add to measuring IT purely by cost and financial return?"
    options:
      - "It replaces financial measures with technical ones"
      - "It measures IT across multiple perspectives, including business contribution, users, and future capability, not just finances"
      - "It reports IT performance directly to the regulator"
      - "It automates the collection of IT metrics"
    answer: 1
    explanation: "The IT balanced scorecard measures IT from several perspectives at once, typically business contribution, user or customer orientation, operational excellence, and future orientation, so IT is judged on the value it delivers and the capability it builds, not on cost alone. It balances financial and non-financial views."
    whyWrong:
      - "It does not replace financial measures; it sets them alongside other perspectives."
      - ""
      - "It is an internal management tool, not a regulatory reporting mechanism."
      - "Automation of collection is unrelated to what the scorecard measures."
  - question: "An IT department reports that it closed 5,000 support tickets and patched 300 servers last quarter. As a measure of IT performance, what is the MAIN weakness of these figures?"
    options:
      - "The numbers are too small to be meaningful"
      - "They measure activity, not whether IT delivered business outcomes or value"
      - "They should be reported monthly instead of quarterly"
      - "They do not include the cost of the work"
    answer: 1
    explanation: "Tickets closed and servers patched are activity counts. They say how busy IT was, not whether the business got what it needed, whether services were reliable, or whether value was delivered. Good performance measurement ties to business outcomes, not to volume of activity."
    whyWrong:
      - "Size is not the issue; even large activity counts measure activity, not outcome."
      - ""
      - "Reporting frequency does not turn an activity count into an outcome measure."
      - "Adding cost would give an efficiency ratio but still measure activity, not business value delivered."
---

## The situation

The IT department's quarterly report is a wall of big numbers: 5,000 tickets closed, 300 servers patched, 99% of changes on schedule. Leadership nods. Then a director asks whether any of it made the business run better, and the room goes quiet.

The numbers measure how busy IT was. They do not measure whether IT delivered, and the exam tests exactly that gap.

## KPI versus KRI

Two indicator types appear constantly, and questions turn on telling them apart.

A **key performance indicator (KPI)** is a **lagging** measure: it tells you how well an objective was met, after the fact. Availability achieved, projects delivered on time, cost per transaction. It looks back at outcomes.

A **key risk indicator (KRI)** is a **leading** measure: it warns that exposure is rising *before* a risk materialises. A climbing number of failed login attempts, a growing backlog of unpatched vulnerabilities, rising staff turnover in a critical team. It looks forward at emerging danger.

The shortcut: a KPI tells you how you did; a KRI tells you what is coming. A good measurement programme has both, because KPIs alone let you discover problems only after they have cost you.

## What the balanced scorecard adds

Measuring IT purely by cost and financial return misses most of what IT is for. The **IT balanced scorecard** corrects this by measuring IT from several perspectives at once, typically:

- **Business contribution**, the value IT delivers to enterprise objectives.
- **User or customer orientation**, how well IT serves the people who depend on it.
- **Operational excellence**, how efficiently and reliably IT runs.
- **Future orientation**, the capability, skills and architecture IT is building for what comes next.

The point is balance: financial measures sit alongside non-financial ones, so IT is judged on the value it delivers and the capability it builds, not on cost alone. It is a management and governance tool, not a regulatory report, and it does not replace financial measures, it frames them among others.

## Activity is not outcome

The recurring trap is the activity metric. Tickets closed and servers patched are counts of effort. They say how busy IT was, not whether services were reliable, whether the business got what it needed, or whether value was delivered. Adding cost to them produces an efficiency ratio but still measures activity, not outcome.

Good performance measurement ties to **business outcomes**: not "we patched 300 servers" but "critical systems had zero exploitable vulnerabilities open beyond the agreed window". The first counts work; the second measures whether the work achieved its purpose.

## Where practitioners go wrong

The instinct that costs marks is accepting activity volume as performance. Big numbers feel like achievement. The exam asks whether the measure connects to a business outcome. When a metric counts what IT did rather than what the business got, it is measuring the wrong thing, however impressive the count.
