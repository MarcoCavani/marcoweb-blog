---
title: "Privacy and Data Protection Principles"
description: "Security protects data; privacy governs whether you should have collected it at all. The exam tests the difference, and that encrypting data you should not hold does not fix a privacy problem."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 3
minutes: 7
gated: false
taskStatement: "Evaluate whether personal data is collected, used and retained in line with privacy principles, distinct from how it is secured."
objectives:
  - "Distinguish privacy from security."
  - "State the principle of data minimisation."
  - "Recognise that securing excess personal data does not satisfy privacy."
trap: "Treating privacy as solved by strong security. Security protects data from unauthorised access; privacy governs whether collecting and using it is appropriate in the first place."
quiz:
  - question: "What is the difference between privacy and security?"
    options:
      - "They are two words for the same thing"
      - "Security protects data from unauthorised access; privacy governs the appropriate collection, use and retention of personal data"
      - "Privacy applies only to encryption; security applies only to access control"
      - "Security is a legal concept; privacy is a technical one"
    answer: 1
    explanation: "Security is about protecting information, keeping it confidential, intact and available. Privacy is about whether personal data is collected, used, shared and retained appropriately and lawfully. You can secure data you had no right to collect, so the two are related but distinct: security is a means, privacy is a set of obligations about personal data."
    whyWrong:
      - "They are distinct: one protects data, the other governs the appropriate handling of personal data."
      - ""
      - "Neither is limited to a single technique; privacy and security each span many controls and obligations."
      - "The framing is backwards and too narrow; privacy carries strong legal obligations, and security is far more than technical."
  - question: "What does the principle of data minimisation require?"
    options:
      - "Storing all data in the smallest possible file format"
      - "Collecting and retaining only the personal data actually necessary for the stated purpose"
      - "Deleting all personal data every year"
      - "Encrypting personal data to reduce its size"
    answer: 1
    explanation: "Data minimisation is a core privacy principle: an organisation should collect only the personal data it genuinely needs for a defined purpose, and keep it only as long as that purpose requires. Holding personal data you do not need increases risk and breaches the principle, regardless of how well the data is secured."
    whyWrong:
      - "Minimisation is about how much personal data you hold and why, not file formats."
      - ""
      - "It is about necessity and retention limits tied to purpose, not a blanket annual deletion."
      - "Encryption protects data; it does not reduce how much you collect, which is what minimisation addresses."
  - question: "An organisation collects far more personal data than it needs but encrypts all of it strongly. Does this satisfy privacy requirements?"
    options:
      - "Yes, strong encryption satisfies privacy"
      - "No, securing data you should not have collected does not cure the privacy failure of collecting it"
      - "Yes, as long as the data is never breached"
      - "Only if the data is also backed up"
    answer: 1
    explanation: "Encryption is a security control; it protects data from unauthorised access. It does nothing about the separate privacy failure of collecting and retaining personal data beyond what is necessary. Privacy asks whether you should hold the data at all; security asks whether it is protected. Excess data, however well encrypted, still breaches minimisation."
    whyWrong:
      - "Encryption is security, not privacy; it does not justify holding unnecessary personal data."
      - ""
      - "Avoiding a breach does not make disproportionate collection appropriate; the privacy failure is in holding the data."
      - "Backup is unrelated to whether the collection itself was privacy-compliant."
---

## The situation

A privacy review finds the sign-up form collects date of birth, home address and marital status for a service that needs only an email. The team is unconcerned: "it's all encrypted, so privacy is covered." They have protected data they had no business collecting, and they think the lock on the drawer settles the question of what is in it.

Domain 5 is mostly about security controls, but this lesson draws the line the exam insists on: privacy is not the same problem as security.

## Two different questions

**Security** protects information: keeping it confidential, intact, and available, safe from unauthorised access. **Privacy** governs whether **personal data** is collected, used, shared and retained **appropriately and lawfully**.

The distinction matters because you can do one without the other. You can secure data you had no right to collect, and you can collect data lawfully but fail to protect it. Security is a *means*; privacy is a set of *obligations* about personal data specifically. When a question contrasts the two, security is about protecting data from unauthorised access, and privacy is about the appropriate handling of personal information.

## The privacy principles

Privacy regimes differ in detail but share a common core the exam expects you to recognise:

- **Purpose limitation**: personal data is collected for a specified purpose and not used for unrelated ones.
- **Data minimisation**: collect and retain only what is **necessary** for that purpose. The sign-up form's date of birth and marital status fail this.
- **Consent and lawfulness**: there is a valid basis for processing.
- **Retention limits**: data is kept only as long as the purpose requires, then disposed of.
- **Data subject rights**: individuals can access, correct, and in some regimes erase their data.
- **Accountability**: the organisation can demonstrate compliance, echoing the continuous compliance theme from Domain 2.

**Privacy by design**, building privacy in from the start rather than bolting it on, is the same principle as designing controls in during development in Domain 3.

## Encryption does not cure a privacy failure

Here is the point the team missed. Encrypting the excess data is a **security** control; it protects that data from unauthorised access. It does **nothing** about the **privacy** failure, which is that the data should not have been collected or retained in the first place. Minimisation is breached the moment you hold personal data you do not need, however strong the encryption around it.

So "it's all encrypted, so privacy is covered" is the wrong answer. The fix is not more security on the excess data; it is to stop collecting what is unnecessary and dispose of what should not be kept. Privacy asks whether you should hold the data at all, and no amount of security answers that question.

## Where practitioners go wrong

The instinct that costs marks is treating privacy as something strong security solves. Security protects data; privacy governs whether collecting and using it is appropriate, and the two are assessed separately. The related slip is over-collection, gathering personal data because it might be useful someday. Data minimisation says collect only what the purpose needs, because data you do not hold cannot be misused or breached, and holding it, encrypted or not, is the privacy failure.
