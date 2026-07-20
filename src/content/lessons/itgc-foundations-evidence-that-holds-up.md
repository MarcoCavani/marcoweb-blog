---
title: "Evidence That Holds Up"
description: "The difference between evidence that survives review and evidence that collapses the moment someone asks where it came from."
course: "itgc-foundations"
module: "Foundations"
order: 3
minutes: 6
gated: false
quiz:
  - question: "A system administrator emails you a spreadsheet of privileged users. What is the weakness in this evidence?"
    options:
      - "Spreadsheets cannot be used as audit evidence"
      - "It came from the population owner and could be incomplete, with no way to detect that"
      - "It should have been provided as a PDF"
      - "There is no weakness if the administrator confirms it is complete"
    answer: 1
    explanation: "The risk is completeness. A list of privileged users produced by someone who holds privileged access could omit exactly the account you would have questioned. You need to observe the extraction or reconcile the list to an independent source."
  - question: "Why is a screenshot of a configuration setting weaker evidence than an extract generated in front of you?"
    options:
      - "Screenshots are lower resolution"
      - "A screenshot shows a moment you did not witness and can be taken from any environment"
      - "Screenshots cannot be retained in workpapers"
      - "There is no meaningful difference"
    answer: 1
    explanation: "A screenshot proves a setting existed somewhere, at some time, on some system. Observing the extraction yourself removes the questions about when, where and whether anything changed in between."
  - question: "You test 25 change records and find one deployed without approval. The client explains it was an emergency fix. What should you do?"
    options:
      - "Remove it from the sample since emergency changes are a separate process"
      - "Accept the explanation and pass the control"
      - "Evaluate whether the emergency process was followed, and treat it as an exception if it was not"
      - "Increase the sample to 40 and retest"
    answer: 2
    explanation: "An explanation is not a resolution. Emergency changes usually have their own defined path with retrospective approval. If that path was followed, it is not an exception. If it was not, it is — and a plausible story does not change that."
---

Two auditors test the same control and reach the same conclusion. One conclusion survives review, a regulator and a change of audit firm. The other falls apart the first time someone asks a hard question.

The difference is almost never the conclusion. It is the evidence behind it.

## The three questions your evidence must answer

Every piece of evidence in a workpaper should answer these without anyone needing to ask:

**Where did this come from?** Not "the client provided it" — which system, extracted by whom, when, and did you watch it happen?

**Is it complete?** Could items be missing, and how would you know if they were?

**Is it what it claims to be?** Does this actually show the control operating, or something adjacent that resembles it?

Most evidence problems are failures of the second question.

## The completeness trap

This is where inexperienced auditors get caught, and it is worth being blunt about it.

You ask a system administrator for a list of all privileged accounts. They send a spreadsheet. You sample from it, test each one, find everything appropriate, and conclude the control is effective.

The problem: your entire population came from the person whose access you are auditing. If an inappropriate account existed, the simplest way to pass your test is to not include it in the file. You would never detect that, because you have nothing to compare against.

There are three ways out, in order of strength:

1. **Observe the extraction.** Sit with them — in person or on a call — and watch the query run against production.
2. **Reconcile to an independent source.** Compare the total against a system-generated count, a licence report, or the identity platform.
3. **Test in the other direction.** Take a sample from the system itself and confirm each item appears in the population you were given.

The third is the one people forget, and it is often the most revealing.

## Screenshots and their limits

Screenshots are not worthless, but they are weaker than most people treat them.

A screenshot shows a setting existed, somewhere, at some point. It does not establish which environment, or whether it was changed shortly before or after. Anyone can screenshot a development system.

If a screenshot is your only option, strengthen it: capture the full window including the system identifier and any environment banner, note who took it and when, and record the navigation path you used to reach it. Better still, take it yourself during a screen share.

## Exceptions are not negotiations

When you find an exception, you will usually be offered an explanation. That is normal and often given in good faith. But an explanation and a resolution are different things.

The test is simple: *does the explanation change what the evidence shows?*

If a change was deployed without approval and the emergency process was documented and followed — with retrospective approval on file — then it was not an exception. The evidence changed.

If the response is "that was urgent, we approved it verbally," the evidence has not changed at all. The control requires documented approval. It did not happen. A reasonable business justification for a control failure is still a control failure.

Recording it does not make you difficult. It makes your conclusion defensible when someone reviews it two years from now with no memory of the conversation.
