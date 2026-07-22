---
title: "How CISA Questions Are Written"
description: "Every option can be true and only one can be best. The reading technique that separates candidates who know the material from candidates who pass."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 1
minutes: 9
gated: false
taskStatement: "Interpret a qualified exam stem and select the best answer from a set of individually defensible options."
objectives:
  - "Identify the qualifier in a question stem and state what it is asking you to rank."
  - "Apply the standard tiebreakers when two options are both professionally defensible."
  - "Eliminate distractors that are true statements but wrong answers."
trap: "Answering what you would actually do on Monday morning rather than what the exam expects of a model auditor."
quiz:
  - question: "An IS auditor discovers during fieldwork that a developer has standing write access to the production database. What should the auditor do FIRST?"
    options:
      - "Recommend that the access be revoked immediately"
      - "Determine whether the access has been used to make unauthorised changes"
      - "Document the condition and evaluate the risk it presents"
      - "Report the issue to the audit committee"
    answer: 2
    explanation: "FIRST questions ask about sequence, not importance. Before recommending, investigating or escalating anything, the auditor establishes and documents what the condition actually is and what risk it carries. Every later step depends on that assessment."
    whyWrong:
      - "Recommending a fix is the auditor moving to a conclusion before evaluating the risk, and recommending remediation before assessing the condition also edges toward taking management's decision."
      - "Testing whether the access was misused is a reasonable audit step, but it comes after you have established and documented the condition and its risk. It is also only one possible response to that assessment."
      - ""
      - "Escalating to the audit committee before evaluating the significance of the finding skips the auditor's own judgement and is disproportionate for a condition not yet assessed."
  - question: "Which of the following is the BEST control to prevent unauthorised changes reaching production?"
    options:
      - "Reviewing the change log monthly for unapproved entries"
      - "Requiring segregation between the person who develops a change and the person who promotes it"
      - "Requiring all changes to be documented in a change ticket"
      - "Reconciling production binaries to the source repository quarterly"
    answer: 1
    explanation: "BEST asks you to rank. All four are real controls, but the stem specifies prevention. Segregation of duties between development and promotion stops the unauthorised change from reaching production at all. The others detect it afterwards or document intent without enforcing it."
    whyWrong:
      - "Reviewing a log monthly is detective, and the stem asked for prevention. It also leaves up to a month of exposure."
      - ""
      - "Documentation records what was intended. It does not stop an undocumented change from being promoted, so it is neither preventive nor complete."
      - "Reconciliation is detective and quarterly, so it is the weakest option against a stem asking for prevention."
  - question: "An IS auditor is asked by the CIO to help design a new access recertification process during the same year the auditor is scheduled to audit access management. What is the auditor's GREATEST concern?"
    options:
      - "The engagement may exceed the approved audit budget"
      - "The auditor may lack the technical expertise to design the process"
      - "The auditor would later be auditing their own work"
      - "Management may not implement the design as recommended"
    answer: 2
    explanation: "This is a self-review threat to objectivity. An auditor who designs a control cannot then provide independent assurance over it, because they would be evaluating their own judgement. Independence questions almost always outrank practical concerns in CISA."
    whyWrong:
      - "Budget is a real management issue but has nothing to do with the auditor's professional position, and CISA ranks independence above operational convenience."
      - "Competence matters, but it is addressable by declining or by bringing in expertise. The independence conflict is not addressable by simply trying harder."
      - ""
      - "Whether management implements a recommendation is outside the auditor's control and is not a threat to the auditor's objectivity."
---

## The situation

You have fifteen years of audit experience. You read a question, recognise every word, and find that three of the four options are things you have genuinely recommended to clients. You pick one. It is marked wrong.

This is the single most common way experienced candidates lose marks. The problem is not knowledge. It is that the exam is not asking what you would do. It is asking what a model IS auditor, following the standards, would do at that specific point in the process.

## Read the qualifier first

Most CISA questions carry a qualifier in capitals, and it changes the entire task.

**FIRST** asks about sequence. Several options may be correct actions; only one comes first in a defensible order. Establishing facts precedes evaluating them, evaluating precedes recommending, and recommending precedes escalating.

**BEST** asks you to rank quality. Every option may be a real control. Judge them against what the stem specifies: if it says prevent, a detective control cannot be best no matter how good it is.

**MOST** and **GREATEST** ask about magnitude, usually of risk or concern. Look for the option with the widest consequence, not the most technically interesting one.

**MOST LIKELY** asks about probability, not severity. A catastrophic but improbable outcome loses to a mundane and common one.

If you take one habit from this lesson, take this: underline the qualifier before you read the options. Candidates who read the options first anchor on a familiar phrase and then justify it.

## The tiebreakers

When two options are both professionally defensible, these rankings resolve most questions.

**Governance beats technology.** If one option addresses the policy, ownership or accountability and another applies a technical fix, the exam usually prefers the governance answer. A firewall rule does not fix an absence of a network security standard.

**Prevention beats detection, detection beats correction.** Unless the stem says otherwise.

**Risk assessment comes before action.** Almost any option beginning "perform a risk assessment" or "determine the impact" outranks options that jump to a remedy, when the stem asks what to do first.

**Independence is protected above usefulness.** An auditor who could be more helpful by designing a control still must not, because the assurance role is worth more than the advice.

**Management owns the decision.** The auditor reports, recommends and evaluates. Options where the auditor implements a control, accepts a risk on management's behalf or approves an exception are usually wrong for that reason alone.

## Where practitioners go wrong

The instinct that costs marks is pragmatism. In real life you would tell the developer to hand back the production password today and sort out the paperwork afterwards. On the exam, that option is a trap, because it skips assessment and moves the auditor into management's chair.

The other frequent error is treating a true statement as the answer. Distractors in well written CISA questions are usually true. They are simply not the best, or not first, or not what the qualifier asked for. "Is this statement correct?" is the wrong internal question. "Does this statement answer the qualifier?" is the right one.

## Time discipline

One hundred and fifty questions in two hundred and forty minutes is ninety six seconds per question including review. Scenario questions with long stems will take longer, so short recall questions must take much less. Flag and move on rather than defending a first instinct for four minutes; that is time taken from three other questions you would have answered correctly.
