---
title: "What IT General Controls Actually Are"
description: "ITGC is not a checklist of security tools. It is the set of controls that make everything else in an audit trustworthy, and knowing why changes how you test them."
course: "itgc-foundations"
module: "Foundations"
order: 1
minutes: 6
gated: false
videoId: "rzl5B2pq43w"
quiz:
  - question: "An auditor tests an application's automated three-way match and finds it works perfectly. Why might they still not rely on it?"
    options:
      - "Because automated controls are always tested manually as well"
      - "Because if change management is weak, the logic could have been altered without approval"
      - "Because three-way matching is an application control, not an ITGC"
      - "Because the control only counts if it runs daily"
    answer: 1
    explanation: "This is the whole reason ITGC exists. An application control is only as reliable as the general controls around it. If someone could change that matching logic without approval, testing it once tells you nothing about how it behaved all year."
  - question: "Which of these is an IT general control rather than an application control?"
    options:
      - "The system rejects an invoice that exceeds the purchase order value"
      - "A credit limit is enforced before an order is accepted"
      - "Developers cannot deploy code to production without a second approval"
      - "The system requires a cost centre on every journal entry"
    answer: 2
    explanation: "The other three are application controls, rules inside the business process. Deployment approval governs the environment those rules live in, which makes it a general control."
  - question: "Why do auditors describe weak IT governance as a pervasive deficiency?"
    options:
      - "Because it is expensive to remediate"
      - "Because it usually indicates fraud"
      - "Because it undermines the reliability of every other control that depends on it"
      - "Because regulators require it to be reported separately"
    answer: 2
    explanation: "Pervasive means the effect is not contained. A governance failure does not break one control, it weakens the basis for relying on all of them, which is why it changes the audit approach rather than producing a single finding."
---

Most people meet IT General Controls as a list. Access management, change management, backups, physical security. The list is accurate and almost completely useless, because it tells you what to test without telling you why any of it matters.

Here is the version that actually helps.

## The problem ITGC solves

Imagine you are auditing a company's revenue. The system automatically matches every invoice against a purchase order and a goods receipt, and rejects anything that does not line up. You test it. It works. Perfectly, every time.

Can you rely on it?

Not yet. You have proven the control works **today**, on the version of the system running **right now**. You have not proven anything about the other 364 days in the period. And that gap is exactly where ITGC lives.

## Application controls versus general controls

There are two kinds of control in any system, and confusing them is the most common beginner mistake.

**Application controls** are rules inside the business process. The invoice must match the purchase order. The credit limit must be checked before the order is accepted. Journal entries need a cost centre. These controls do specific work on specific transactions.

**IT general controls** govern the environment those rules live in. Who can change the matching logic. Who can access the database underneath it. Whether the change was tested and approved. Whether you could recover the system if it failed.

The relationship is one-directional and it is the single most important idea in IT audit:

> An application control is only as reliable as the general controls surrounding it.

If a developer can quietly alter the three-way match logic on a Tuesday afternoon with no approval and no record, then your perfect test result means nothing. You did not test a control. You tested a configuration that happened to be in place while you were looking.

## Why this changes how you test

Once you internalise that dependency, audit strategy follows from it.

When general controls are **strong**, you can test an automated application control once and rely on it for the whole period. The system cannot have changed underneath you without leaving a trace. This is why ITGC work is so valuable, it is what makes efficient testing defensible.

When general controls are **weak**, that efficiency disappears. You cannot assume consistency, so you fall back to testing individual transactions in volume, which costs far more and gives you less assurance.

This is also why weak IT governance gets described as *pervasive*. It does not produce one finding in one place. It removes the foundation that every other conclusion was resting on.

## The mental model to keep

Stop thinking of ITGC as a security checklist. Think of it as the answer to one question an auditor is always asking:

**Can I trust that this system behaved the same way all year?**

Every control group in the framework is a different way of asking it. Governance asks whether anyone owns the answer. Access management asks who could have changed things. Change management asks whether changes were controlled. Business continuity asks whether the record survives. Physical security asks whether someone could bypass all of it by walking into a room.

Hold that question in your head and the framework stops being a list to memorise. It becomes a structure that makes sense.
