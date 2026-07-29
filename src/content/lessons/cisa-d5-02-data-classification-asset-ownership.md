---
title: "Data Classification and Asset Ownership"
description: "You protect data according to its value, so first you have to know its value. The exam tests that classification comes first and that the business owner, not IT, assigns it."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 2
minutes: 7
gated: false
videoId: "ikPqwY4a6Vw"
taskStatement: "Evaluate whether information assets are classified by sensitivity and owned, so that protection is proportionate to value."
objectives:
  - "Explain why data classification precedes applying controls."
  - "Identify who assigns an asset's classification."
  - "Recognise the risk of uniform controls regardless of sensitivity."
trap: "Applying the same controls to all data, or letting IT set the classification. Classification is owned by the business data owner, and it is what makes protection proportionate."
quiz:
  - question: "What is the PRIMARY purpose of classifying data?"
    options:
      - "To make data easier to search"
      - "To match the level of protection to the sensitivity and value of the data"
      - "To reduce the total volume of data stored"
      - "To satisfy the IT department's reporting needs"
    answer: 1
    explanation: "Classification exists so that controls are proportionate: highly sensitive data gets strong protection, while public data does not carry unnecessary cost. Without classification, an organisation either over-protects everything at great cost or under-protects what matters most. It is the basis for applying the right level of control to the right data."
    whyWrong:
      - "Searchability is a data-management convenience, not the purpose of a security classification."
      - ""
      - "Classification does not reduce data volume; it determines how each piece is protected."
      - "Classification serves the whole organisation's protection needs, not IT reporting."
  - question: "Who is responsible for assigning a classification to an information asset?"
    options:
      - "The IT department that stores it"
      - "The business data owner, who understands the asset's value and sensitivity"
      - "The security operations team"
      - "Whichever user created the file"
    answer: 1
    explanation: "Classification is a business judgement about value and sensitivity, so it belongs to the data owner, the business role accountable for the asset. IT, as custodian, protects the data at the level the owner sets. This is the same owner-versus-custodian split from Domain 4: the business owns and decides, IT holds and secures."
    whyWrong:
      - "IT is the custodian; it protects data to the level set, it does not decide the classification."
      - ""
      - "The security team applies and advises on controls; it does not own the business value judgement."
      - "The creator may not understand the asset's business sensitivity; ownership is a defined accountable role, not whoever made the file."
  - question: "An organisation applies the same strong controls to every piece of data regardless of sensitivity. What is the MAIN problem?"
    options:
      - "Nothing, more protection is always better"
      - "Controls are not proportionate: cost and friction are wasted on low-value data while classification-driven decisions are lost"
      - "The data will be impossible to back up"
      - "Encryption will corrupt the public data"
    answer: 1
    explanation: "Protection has a cost in money, performance and user friction. Applying maximum controls to everything wastes that cost on public and low-value data and, more importantly, means the organisation is not making risk-based decisions about what truly needs protecting. Proportionality, driven by classification, is the point; uniform treatment abandons it."
    whyWrong:
      - "More is not always better; disproportionate control wastes resources and obscures real risk priorities."
      - ""
      - "Uniform controls do not prevent backup; the issue is proportionality, not backup capability."
      - "Encryption does not corrupt data; the concern is wasted, undifferentiated protection, not technical damage."
---

## The situation

Every file in the organisation is treated the same way: the public marketing brochure and the board's confidential merger papers sit under identical controls, because "we encrypt everything, so we're covered." Nobody has said which data actually matters, and when you ask who decided the merger papers were confidential, the answer is that IT set the permissions when the folder was created.

Two things are wrong, and both are foundational to how information is protected.

## Protect by value, so classify first

You cannot protect data appropriately until you know what it is worth. **Classification** sorts information by sensitivity and value, typically into levels such as public, internal, confidential and restricted, so that the **level of protection matches the level of risk**.

This is why classification comes **first**, before controls are chosen. Highly sensitive data warrants strong encryption, tight access, and careful handling; public data does not, and spending the same effort on it is waste. Classification is the same "identify before you control" principle that ran through compliance in Domain 2 and end-user computing in Domain 4: you decide what matters, then protect accordingly. When a question asks the purpose of classification, it is to make protection **proportionate**.

## The business owner classifies

Classification is a judgement about **business value and sensitivity**, so it belongs to the **data owner**, the business role accountable for the asset. IT, as **custodian**, then protects the data to the level the owner has set. This is the owner-versus-custodian distinction from Domain 4, applied to protection: the business owns and decides the classification; IT holds and secures the data.

So the merger papers being classified by IT when the folder was created is the finding. IT can enforce controls, but it is not positioned to judge that the papers are confidential, or how confidential. That call is the owner's, and without it, the custodian is guessing at how hard to protect what.

## Uniform controls miss the point

Treating all data identically, "we encrypt everything," feels safe and is quietly wrong. Protection costs money, performance and user friction, and applying maximum controls to public data wastes all three. More damagingly, uniform treatment means the organisation is **not making risk-based decisions** about what genuinely needs protecting: the merger papers and the brochure are indistinguishable to the control set, so nothing is prioritised.

Good protection is proportionate. Classification is what enables that proportionality, directing the strongest controls, and the tightest access, to the data whose loss would hurt most, while not burning the same effort on data that does not need it.

## Where practitioners go wrong

Two instincts cost marks. The first is assuming more protection is always better, so uniform strong controls must be fine; they waste resources and abandon the risk-based prioritisation classification exists to provide. The second is letting IT, the custodian, assign the classification. Classification is the business data owner's judgement of value; IT protects to the level the owner sets. Know the value first, set it from the business, and let the controls follow it.
