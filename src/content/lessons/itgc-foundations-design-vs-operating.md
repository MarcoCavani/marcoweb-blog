---
title: "Design Effectiveness vs Operating Effectiveness"
description: "Two questions that sound the same and are not. Getting this distinction wrong is the fastest way to produce an audit finding that does not hold up."
course: "itgc-foundations"
module: "Foundations"
order: 2
minutes: 7
gated: false
quiz:
  - question: "A company has a documented policy requiring quarterly access reviews. You confirm the policy exists and would catch inappropriate access if followed. What have you tested?"
    options:
      - "Operating effectiveness"
      - "Design effectiveness"
      - "Both, since the policy is in force"
      - "Neither — a policy is not a control"
    answer: 1
    explanation: "You have tested design only. You confirmed the control would work if performed. Whether anyone actually performed it in each of the four quarters is a separate question, and it is the one that usually fails."
  - question: "Why is it pointless to test operating effectiveness of a control that is poorly designed?"
    options:
      - "Because the evidence will be difficult to obtain"
      - "Because performing a control that cannot address the risk reliably does not mitigate it, however consistently it is done"
      - "Because auditing standards forbid it"
      - "Because the control owner will dispute the finding"
    answer: 1
    explanation: "If the design cannot address the risk, perfect execution still leaves the risk open. That is why design is assessed first — operating effectiveness testing on a broken design just tells you the organisation is consistently doing something that does not work."
  - question: "A quarterly access review was performed in Q1, Q2 and Q4 but skipped in Q3. Design was sound. What is the conclusion?"
    options:
      - "Design and operating effectiveness both fail"
      - "Design passes, operating effectiveness fails"
      - "Both pass, since three of four is a majority"
      - "Design fails because it did not prevent the gap"
    answer: 1
    explanation: "The control was capable of working — design passes. It was not performed throughout the period, so it cannot be relied on for the year. One missed occurrence in a quarterly control is a 25% failure rate, not a rounding error."
---

Every ITGC test answers one of two questions. They sound similar enough that people blur them together, and the blurring is where bad findings come from.

## The two questions

**Design effectiveness** asks: *if this control were performed exactly as intended, would it address the risk?*

**Operating effectiveness** asks: *was it actually performed that way, consistently, throughout the period?*

A control has to pass both. Passing one tells you very little on its own.

## Why design comes first

There is a practical reason design is assessed first, and it is not just convention.

If a control is badly designed, testing whether it operated is wasted effort. Suppose a company reviews privileged access annually, but privileged accounts are granted and removed weekly. You could confirm the annual review happened perfectly on schedule for three years running. It still would not address the risk, because the control's frequency does not match the rate at which the risk changes.

Perfect execution of a control that cannot work is not mitigation. So you assess design first, and only test operation once you know the control is capable of doing its job.

## What each test actually looks like

For **design**, you are reading, asking and reasoning:

- Obtain the policy or procedure and understand what is meant to happen
- Walk through one instance end to end with the person who performs it
- Ask whether the control addresses the risk, at the right frequency, by someone independent enough to be credible
- Look for the gap between the documented process and the described one

Design testing usually needs a single walkthrough. You are not gathering volume — you are gathering understanding.

For **operating effectiveness**, you are sampling and tracing:

- Establish the population for the period
- Select a sample sized to the control's frequency
- Obtain evidence for each item that the control was performed
- Evaluate every exception, and do not explain any of them away

## Sample sizes follow frequency

Sample size is driven by how often the control runs, not by how important it feels:

| Control frequency | Typical sample |
|---|---|
| Annual | 1 |
| Quarterly | 2 |
| Monthly | 2–5 |
| Weekly | 5–15 |
| Daily | 20–40 |
| Many times per day | 25–60 |

The logic is straightforward. A control that runs 250 times a year has far more opportunity to fail than one that runs once, so you need more evidence to conclude it ran reliably.

## The failure mode to avoid

The most common mistake in ITGC work is accepting a document as evidence of operation.

A signed policy proves design intent. It does not prove that the quarterly review happened in Q3. When someone hands you a procedure document as evidence that a control operated, they have answered the wrong question — usually without realising it.

Ask for the artefact the control produces when it runs. The completed review with names and dates. The approval record on the change. The restoration test result. If a control genuinely operated, it left something behind. If it left nothing behind, you cannot conclude it operated, and that is a finding in itself.
