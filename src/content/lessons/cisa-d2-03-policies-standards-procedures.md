---
title: "Policies, Standards, Procedures and Guidelines"
description: "Four documents that candidates blur together. The exam tests which is mandatory, which is specific, and which one management can change without going back to the board."
course: "cisa-domain-2"
module: "Domain 2: Governance and Management of IT"
domain: 2
order: 3
minutes: 7
gated: false
taskStatement: "Evaluate an organisation's policy framework and place a given document at the correct level of the hierarchy."
objectives:
  - "Order policy, standard, procedure and guideline by authority and specificity."
  - "State which are mandatory and which are discretionary."
  - "Determine the correct level at which to address a given control requirement."
trap: "Treating a standard as optional or a guideline as binding. The exam tests the exact status of each level, and mixing them up flips the answer."
quiz:
  - question: "Which of the following documents states the mandatory, specific rules that support a policy, such as the minimum password length an organisation requires?"
    options:
      - "A guideline"
      - "A standard"
      - "A procedure"
      - "A policy"
    answer: 1
    explanation: "A standard is a mandatory, specific rule that supports a higher-level policy. A minimum password length is exactly this: derived from an access control policy, mandatory, and specific enough to be tested."
    whyWrong:
      - "A guideline is discretionary advice, not a mandatory rule, so it cannot be where a required minimum is set."
      - "A procedure is the step-by-step method for performing a task, not the rule that fixes the required value."
      - "A policy states high-level intent and direction; it would not itself specify a value like a minimum length."
  - question: "Senior management wants to change the required encryption algorithm for stored data as technology evolves, without amending a board-approved document each time. At which level should the specific algorithm be set?"
    options:
      - "In the information security policy"
      - "In a standard beneath the policy"
      - "In the organisation's code of conduct"
      - "In the board charter"
    answer: 1
    explanation: "The policy states the enduring intent, for example that sensitive data must be encrypted. The specific algorithm belongs in a standard beneath it, which management can revise as technology changes without reopening the board-approved policy. This is why the hierarchy exists."
    whyWrong:
      - "Putting the algorithm in the policy would force a policy amendment, and potentially board re-approval, every time the technology moved on."
      - ""
      - "A code of conduct governs behaviour and ethics, not technical control values."
      - "A board charter defines the board's own remit; it is the wrong place for an operational technical detail."
  - question: "An IS auditor finds that a document labelled 'guideline' is being enforced as mandatory, and staff are disciplined for not following it. What is the auditor's MAIN concern?"
    options:
      - "Guidelines should never be written down"
      - "A discretionary document is being treated as binding, so the framework's status levels are not being applied consistently"
      - "The guideline should have been approved by the board"
      - "Staff should not be disciplined for IT matters"
    answer: 1
    explanation: "Guidelines are discretionary recommendations, not mandatory rules. Enforcing one as binding means the organisation is not applying its own hierarchy consistently, which undermines the whole framework: staff cannot know what is truly required, and genuinely mandatory standards lose authority."
    whyWrong:
      - "Guidelines are legitimately written down; the problem is the status being applied to this one, not its existence."
      - "Board approval is not the issue; a guideline is discretionary by design regardless of who approved it."
      - "Discipline for IT matters can be entirely appropriate when a mandatory standard is breached; the issue here is enforcing a discretionary document."
---

## The situation

You ask to see the organisation's rules on encryption. You are handed four documents, and they contradict each other on the detail. One says data "should" be protected, one names an algorithm, one describes how to configure the tool, and one "recommends" a stronger cipher. Which one actually binds anyone?

The exam expects you to place each at the right level, because their status differs, and the status is what the answer usually turns on.

## The hierarchy

Four levels, from highest authority and least specific, to lowest authority and most specific.

**Policy.** A high-level statement of management intent and direction. Broad, enduring, and mandatory. "Sensitive data must be protected in storage and transit." It says what and why, never how.

**Standard.** A mandatory, specific rule that supports a policy. "Data at rest must be encrypted using AES-256." Specific enough to test, and binding. Standards are where a policy's intent becomes a measurable requirement.

**Procedure.** The step-by-step method for carrying out a task in line with the standards. "To enable disk encryption, do the following." Mandatory in the sense that the task must be done this way, but operational rather than directional.

**Guideline.** Discretionary advice and recommended practice. "Consider rotating keys more frequently for high-value data." Helpful, not binding. A guideline is the one level that does not compel anyone.

Mandatory: policies, standards, procedures. Discretionary: guidelines. Getting that split right resolves most questions at this level.

## Why the levels are separated

The hierarchy is not bureaucracy for its own sake; it exists so that each kind of change happens at the right altitude.

A policy states enduring intent and rarely changes, which is why it is set high and often board-approved. A standard carries the specific value that technology forces you to revisit, an algorithm, a key length, a version, so it sits beneath the policy where management can update it without reopening a board-approved document. Put the algorithm in the policy and you have to amend the policy every time cryptography moves on. Put it in a standard and you change the standard.

This is a favourite exam scenario: management wants to change a specific technical value as technology evolves without amending a higher document each time. The answer is almost always "set it in a standard, beneath the policy".

## Status has to be applied consistently

The framework only works if each document is treated according to its level. A guideline enforced as if it were mandatory is a real finding, because it corrodes the whole structure: if a discretionary recommendation can get you disciplined, staff can no longer tell what is genuinely required, and truly mandatory standards lose their authority in the noise. The failure is not that the guideline exists, it is that its status is not being honoured.

## Where practitioners go wrong

The instinct that costs marks is treating all four as interchangeable "the rules". The exam is precise: a standard is mandatory and a guideline is not, a policy sets direction and a procedure sets method. When a question hinges on whether something is binding, or on where a specific value belongs, the level is the answer.
