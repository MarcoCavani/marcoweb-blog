---
title: "Identity and Access Management: Authentication"
description: "Proving who you are is not the same as saying who you are. The exam tests what really makes authentication multi-factor, and why a shared account has no accountability."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 4
minutes: 8
gated: false
taskStatement: "Evaluate whether users are uniquely identified, reliably authenticated, and held accountable for their actions."
objectives:
  - "Distinguish identification, authentication, authorisation and accountability."
  - "State what makes authentication genuinely multi-factor."
  - "Explain why shared accounts undermine accountability."
trap: "Counting two of the same factor as multi-factor. Multi-factor authentication requires two or more different factor types, and a shared account breaks the accountability the whole model depends on."
quiz:
  - question: "Which of the following is a genuine example of multi-factor authentication (MFA)?"
    options:
      - "A password followed by a second password"
      - "A password (something you know) plus a one-time code from a hardware token (something you have)"
      - "A password plus a security question"
      - "A fingerprint plus a facial scan"
    answer: 1
    explanation: "Multi-factor authentication combines two or more DIFFERENT categories of factor: something you know, something you have, and something you are. A password plus a hardware token combines knowledge and possession, so it is genuine MFA. Two of the same category, two passwords, a password and a security question, or two biometrics, is still single-factor."
    whyWrong:
      - "Two passwords are both something you know: a single factor used twice, not multi-factor."
      - ""
      - "A security question is also something you know, so this is two knowledge factors, not two categories."
      - "A fingerprint and a facial scan are both something you are: two biometrics, still a single factor category."
  - question: "What is the PRIMARY control weakness of a shared or generic user account?"
    options:
      - "It is harder to remember the password"
      - "Actions cannot be traced to an individual, so there is no accountability"
      - "It uses more storage on the server"
      - "It cannot be given a strong password"
    answer: 1
    explanation: "Accountability, the last part of the identity model, depends on every action being attributable to a specific person. A shared account breaks that: when several people use one login, no one can determine who did what, so misuse cannot be traced and individuals cannot be held responsible. Unique accounts are the basis of accountability."
    whyWrong:
      - "Password memorability is trivial next to the loss of attribution a shared account causes."
      - ""
      - "Storage is irrelevant; the failure is the inability to attribute actions to a person."
      - "A shared account can have a strong password; the problem is that its use cannot be tied to an individual."
  - question: "In the identity model, what does 'authorisation' determine?"
    options:
      - "Whether the user is who they claim to be"
      - "What an authenticated user is permitted to access and do"
      - "Which username the person is claiming"
      - "Whether the user's actions are being logged"
    answer: 1
    explanation: "Authorisation determines what an already-authenticated user is allowed to access and do. It follows identification (claiming an identity) and authentication (proving it), and precedes accountability (logging actions to the individual). Confusing authorisation with authentication, proving identity versus granting permissions, is a common exam slip."
    whyWrong:
      - "Confirming the user is who they claim is authentication, not authorisation."
      - ""
      - "Claiming a username is identification, the step before authentication and authorisation."
      - "Logging actions to an individual is accountability, which comes after authorisation."
---

## The situation

The finance team logs into the reconciliation system with a single shared account, "finance1", because it is convenient. Its password is strong and changed regularly, so the team considers access well controlled. Then a fraudulent transaction is traced back to that account, and there is no way to tell which of the eight people who use it was responsible. The password was never the weak point.

Access management is the heart of Domain 5, and it begins with reliably knowing, and proving, who someone is.

## Four steps: identify, authenticate, authorise, account

The identity model has four parts, and the exam expects you to keep them straight:

- **Identification**: the user claims an identity, entering a username.
- **Authentication**: the user proves that claim, with a password, token, or biometric.
- **Authorisation**: the system determines what that authenticated user is permitted to access and do.
- **Accountability**: the user's actions are logged and attributable to them.

The most common slip is confusing **authentication** (proving who you are) with **authorisation** (what you are allowed to do). Proving identity comes first; granting permissions comes after. And the whole chain ends in accountability, which the shared account quietly destroys.

## What makes authentication multi-factor

Authentication draws on three **categories** of factor:

- **Something you know**: a password, a PIN, a security question.
- **Something you have**: a hardware token, a phone receiving a one-time code, a smart card.
- **Something you are**: a biometric, a fingerprint, a face, an iris.

**Multi-factor authentication (MFA)** means combining **two or more different categories**. A password plus a one-time code from a token is genuine MFA, knowledge plus possession. The trap the exam sets over and over is presenting **two of the same category** and calling it multi-factor: two passwords, or a password plus a security question, are both "something you know", and two biometrics are both "something you are". Same category twice is still single-factor. When a question asks which option is true MFA, look for two **different** categories.

## Shared accounts break accountability

The finance team's strong password was never the issue. Their shared account is, because it collapses **accountability**: when eight people use one login, no action can be traced to an individual, so the fraudulent transaction cannot be pinned to anyone.

Accountability depends on **unique** identities, one account per person, so that every action is attributable. This is why shared and generic accounts are a standard finding, and why privileged generic accounts (like a shared "admin") are worse still. A strong password on a shared account protects against outsiders guessing it; it does nothing about the inability to tell your own people apart.

## Where practitioners go wrong

Two instincts cost marks. The first is treating any two authentication steps as multi-factor. It is only MFA if the factors come from different categories, know, have, are; two of the same kind is single-factor dressed up. The second is tolerating shared accounts for convenience. They break the accountability the entire identity model exists to provide, and a strong password does not fix it, because the weakness is attribution, not secrecy.
