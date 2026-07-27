---
title: "End-User Computing and Data Governance"
description: "A spreadsheet feeding the financial statements is an application with none of an application's controls. The exam tests the risk of end-user computing and who actually owns data."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 9
minutes: 7
gated: false
taskStatement: "Evaluate the risk of end-user-developed applications and whether data has defined ownership and governance."
objectives:
  - "Identify the risks of critical end-user computing such as spreadsheets."
  - "State the first step in bringing end-user computing under control."
  - "Distinguish the data owner from the data custodian."
trap: "Assuming a spreadsheet is not a system and so needs no control. A spreadsheet that feeds the financial statements carries the risk of an application with none of the controls."
quiz:
  - question: "A complex spreadsheet maintained by one analyst feeds figures directly into the financial statements. What is the GREATEST risk?"
    options:
      - "Spreadsheets are slower than databases"
      - "It lacks the change control, testing, validation and segregation of a managed application, so errors can go undetected into the accounts"
      - "The analyst may prefer a different tool"
      - "Spreadsheets cannot store enough data"
    answer: 1
    explanation: "A critical spreadsheet is an application in everything but name, yet it typically has none of an application's controls: no change management, no independent testing, no input validation, no version control, and complete key-person dependency. An undetected formula or input error can flow straight into the financial statements, which is why critical end-user computing is a recognised risk."
    whyWrong:
      - "Speed is not the concern; the absence of the controls a managed application would have is."
      - ""
      - "Tool preference is irrelevant to the control risk the spreadsheet represents."
      - "Storage volume is not the issue; an uncontrolled but small spreadsheet feeding the accounts is still the risk."
  - question: "What is the FIRST step in bringing end-user computing under control?"
    options:
      - "Ban all spreadsheets immediately"
      - "Identify and inventory the critical end-user applications, since you cannot control what you have not found"
      - "Move every spreadsheet into the data centre"
      - "Assume IT already manages them"
    answer: 1
    explanation: "You cannot apply controls to what you have not identified. The first step is to find and inventory the end-user applications that matter, the spreadsheets and user-built databases that feed financial or critical processes, so proportionate controls can then be applied. This mirrors the compliance principle: identify what applies before controlling it."
    whyWrong:
      - "A blanket ban is impractical and destroys tools the business genuinely relies on; the need is control, not prohibition."
      - ""
      - "Relocating files does nothing about the missing controls and is not where control begins."
      - "Assuming IT manages them is precisely the blind spot; end-user computing exists outside IT's managed estate by definition."
  - question: "In data governance, what is the difference between a data owner and a data custodian?"
    options:
      - "They are the same role"
      - "The data owner is the business accountable for the data and its use; the custodian, typically IT, holds and protects it on the owner's behalf"
      - "The custodian owns the data and the owner just stores it"
      - "Only external regulators can be data owners"
    answer: 1
    explanation: "The data owner is a business role, accountable for the data, its classification, and decisions about its use and access. The custodian, usually IT, is responsible for holding, securing and maintaining the data on the owner's behalf. Accountability rests with the business owner; IT custodies it, echoing the Domain 3 point that the business, not IT, owns what the system is for."
    whyWrong:
      - "They are distinct roles; conflating them loses the accountability-versus-custody distinction the exam tests."
      - ""
      - "The roles are reversed here: the business owns and is accountable; IT custodies."
      - "Regulators set requirements; they do not become the owner of the organisation's data."
---

## The situation

The month-end close depends on a spreadsheet. It has grown for years, it contains formulas only one analyst fully understands, and its output drops straight into the financial statements. It has never been tested by anyone else, has no version history, and if the analyst is on leave when a figure looks wrong, nobody can safely touch it. On the system inventory, it does not appear at all, because a spreadsheet is not considered a system.

That last assumption is the whole problem, and it is where this lesson lives.

## A spreadsheet can be an application

**End-user computing (EUC)** is applications built and maintained by business users outside IT's control, classically spreadsheets and user-built databases. They are enormously useful and often business-critical. The risk is that a critical EUC is an application in function but has **none of an application's controls**:

- No **change management**, so anyone can alter a formula with no review.
- No independent **testing**, so errors are found by luck, if at all.
- No **input validation**, so a mistyped or malformed value is simply accepted.
- No **version control**, so which copy is authoritative is anyone's guess.
- Complete **key-person dependency**, so knowledge lives in one head.

When such a spreadsheet feeds the financial statements, an undetected error, a wrong formula, a dragged cell, a transposed input, flows straight into the accounts. That is why critical end-user computing is a recognised audit risk, and why "it's only a spreadsheet" is the wrong instinct.

## Identify before you control

The first step to controlling EUC is not to ban it, that destroys tools the business relies on, and not to assume IT already manages it, it does not, by definition. It is to **identify and inventory the critical ones**: which spreadsheets and user-built databases feed financial or otherwise critical processes.

You cannot apply controls to what you have not found. This is the same principle as identifying applicable obligations before managing compliance in Domain 2: discovery comes first. Once the critical EUCs are known, **proportionate** controls follow, access restriction, version control, input validation, independent review of key formulas, and backup, scaled to how critical each one is. Not every spreadsheet needs this; the ones feeding the accounts do.

## Who owns the data

Data governance sets out how data is managed, and the exam tests one distinction in particular:

- The **data owner** is a **business** role, accountable for the data: its classification, its quality, and decisions about who may access and use it.
- The **data custodian**, usually **IT**, holds, secures and maintains the data on the owner's behalf.

Accountability rests with the business owner; IT custodies. This is the same shape as Domain 3's point that the business, not IT, owns what a system is for, applied to the data itself. When a question asks who owns a dataset, it is the business data owner, not the IT team that stores it, and not a regulator that merely sets requirements.

## Where practitioners go wrong

Two instincts cost marks. The first is dismissing a spreadsheet as "not a system", when a spreadsheet feeding critical figures carries the risk of an application with none of the controls; the fix begins with finding and inventorying the critical ones. The second is assuming IT owns the data because IT stores it. IT is the custodian; the business data owner is accountable. Ownership is about accountability for the data, not possession of the server it sits on.
