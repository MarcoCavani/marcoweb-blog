---
title: "Privileged Access Management"
description: "Administrator accounts can switch off the controls that protect everything else, which is why they get the tightest handling. The exam tests why privileged access is the priority and how it is controlled."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 6
minutes: 7
gated: false
videoId: "Rtp2C5XP_Fo"
taskStatement: "Evaluate whether privileged accounts are minimised, tightly controlled, and their use monitored."
objectives:
  - "Explain why privileged accounts carry the greatest risk."
  - "Identify the controls that manage privileged access."
  - "Recognise the risk of using privileged accounts for everyday work."
trap: "Treating a privileged account like any other account with a strong password. Privileged access is minimised, elevated only when needed, and its use is recorded and reviewed."
quiz:
  - question: "Why are privileged (administrator) accounts the HIGHEST priority to control?"
    options:
      - "They are used more frequently than normal accounts"
      - "They can bypass, disable or change security controls and access almost any data, so their compromise is catastrophic"
      - "They always have weaker passwords"
      - "They are harder to create than normal accounts"
    answer: 1
    explanation: "A privileged account can change configurations, disable logging, grant itself more access, and reach almost any data. That power means a compromised or misused administrator account can undo the entire control environment, so privileged access is the first thing an attacker seeks and the first thing security must protect."
    whyWrong:
      - "Frequency of use is not the issue; the power the account holds is."
      - ""
      - "Privileged accounts do not inherently have weaker passwords; the risk is their capability, not their credentials."
      - "Ease of creation is irrelevant to why the access must be tightly controlled."
  - question: "Which of the following BEST controls privileged access?"
    options:
      - "Giving every administrator a permanent, shared admin account with a strong password"
      - "Minimising the number of privileged accounts, elevating access only when needed, and recording and reviewing privileged sessions"
      - "Allowing administrators to use their privileged account for all daily work"
      - "Trusting administrators without monitoring, since they are senior staff"
    answer: 1
    explanation: "Good privileged access management minimises how many privileged accounts exist, grants elevation only when and for as long as it is needed (just-in-time), avoids shared admin accounts, applies strong authentication, and records and independently reviews privileged sessions. The power of the access is matched by the tightness and visibility of its control."
    whyWrong:
      - "Permanent, shared admin accounts maximise exposure and destroy accountability, the opposite of good control."
      - ""
      - "Using privileged accounts for daily work needlessly exposes the most powerful credentials."
      - "Seniority is not a control; powerful access requires monitoring regardless of who holds it, as with the DBA in Domain 4."
  - question: "An administrator uses their privileged domain-admin account for everyday email and web browsing. What is the MAIN concern?"
    options:
      - "Email will run slowly under an admin account"
      - "It exposes the most powerful credential to everyday threats like phishing and malware, so a routine compromise becomes a full-environment compromise"
      - "The administrator will forget their normal password"
      - "Admin accounts cannot send email"
    answer: 1
    explanation: "Everyday activities like email and browsing are where phishing and malware strike. If those activities run under a privileged account, a routine compromise hands the attacker domain-admin power over the whole environment. Administrators should hold a separate standard account for daily work and use the privileged account only for administrative tasks."
    whyWrong:
      - "Performance is not the issue; the exposure of a powerful credential to common attacks is."
      - ""
      - "Password memorability is trivial next to turning a phishing click into a full compromise."
      - "Admin accounts can send email; the concern is exposing privileged access to everyday threats."
---

## The situation

Every administrator shares one domain-admin account, they use it all day for email and browsing as well as administration, and no one reviews what it does. The reasoning is that admins are trusted senior staff and the password is strong. Then one of them clicks a phishing link while logged in as domain admin, and the attacker inherits control of the entire environment in a single step.

The previous lessons controlled ordinary access. Privileged access is a category of its own, because it can undo everything else.

## Why privileged access is the priority

A **privileged account**, a system administrator, domain admin, root, or database administrator, can do what ordinary accounts cannot: change configurations, **disable logging**, grant itself more access, and reach almost **any** data. That power is necessary to run systems, and it is exactly why these accounts are the highest priority to protect.

The consequence is asymmetric. A compromised standard account is a contained problem; a compromised **privileged** account can dismantle the whole control environment, turn off the very monitoring that would catch it, and reach everything. Attackers know this, so privileged credentials are what they hunt for first. When a question asks why administrator accounts warrant the tightest control, it is their **capability**, not their password or their frequency of use.

## Controlling privileged access

Because the power is extreme, the control is correspondingly tight. Good **privileged access management** does several things at once:

- **Minimise** the number of privileged accounts and the scope of each.
- **Elevate just in time**: grant privileged access only when needed, for as long as needed, rather than as a standing right.
- **No shared admin accounts**: privileged actions must be attributable to an individual, the accountability point from the authentication lesson, made sharper.
- **Strong authentication**: MFA on privileged access, always.
- **Record and review sessions**: privileged activity is logged and independently reviewed, exactly the discipline applied to the DBA in Domain 4.
- **Break-glass** procedures for genuine emergencies, controlled and reviewed afterwards.

A strong password alone does none of this. The power of the access is matched by minimising it, elevating it only when required, and watching how it is used.

## Do not live in the privileged account

The phishing click is the scenario the exam loves. Everyday email and web browsing are where **phishing and malware** land, so performing them under a **privileged** account means a routine compromise becomes a **full-environment** compromise in one move. Administrators should hold a **separate standard account** for daily work and use the privileged account only for administrative tasks, so the powerful credential is exposed as little as possible.

## Where practitioners go wrong

Two instincts cost marks. The first is treating a privileged account as an ordinary account that happens to have a strong password. It needs far more: minimisation, just-in-time elevation, no sharing, MFA, and session monitoring, because its compromise is catastrophic. The second is administrators living in their privileged account for convenience. Daily work belongs in a standard account; the privileged one is used only when the task genuinely requires it, so a single phishing click cannot hand over the whole environment.
