---
title: "Security Awareness and Attack Methods"
description: "The strongest controls are bypassed by fooling a person. The exam tests why awareness training is the control for social engineering, and how to recognise the common attack methods."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 14
minutes: 7
gated: false
taskStatement: "Evaluate whether people are prepared to resist social engineering, and recognise common attack methods."
objectives:
  - "Explain why the human is often the weakest link."
  - "Identify security awareness training as the control for social engineering."
  - "Recognise common attack methods and their impact."
trap: "Believing technical controls alone stop attacks. Social engineering targets people directly, and awareness training, not another firewall, is its primary control."
quiz:
  - question: "What is the MOST effective control against social engineering attacks such as phishing?"
    options:
      - "A more powerful firewall"
      - "Security awareness training, because these attacks target people rather than technology"
      - "Stronger encryption on the mail server"
      - "A faster antivirus scanner"
    answer: 1
    explanation: "Social engineering manipulates people into divulging information or taking harmful action, deliberately bypassing technical controls by targeting the human. The most effective defence is therefore security awareness training that helps people recognise and resist manipulation. Technical controls help, but they cannot fully stop a user who is persuaded to act against the organisation."
    whyWrong:
      - "A firewall filters traffic; it does not stop a user being persuaded to hand over a password."
      - ""
      - "Encryption protects data in transit and at rest; it does not prevent a person being manipulated."
      - "Antivirus speed is irrelevant to an attack that convinces a human rather than deploying malware."
  - question: "What best describes a social engineering attack?"
    options:
      - "Exploiting a software vulnerability in a server"
      - "Manipulating people into divulging information or performing actions that compromise security"
      - "Flooding a network with traffic to cause an outage"
      - "Guessing passwords by brute force"
    answer: 1
    explanation: "Social engineering targets the human rather than the technology, tricking someone into revealing credentials, granting access, or taking an action that undermines security. Phishing, pretexting and impersonation are examples. It succeeds precisely because it goes around technical defences by exploiting trust, urgency or authority."
    whyWrong:
      - "Exploiting a software vulnerability is a technical attack, not social engineering."
      - ""
      - "Flooding a network is a denial-of-service attack, which targets availability, not human trust."
      - "Brute-forcing passwords is an automated technical attack, not manipulation of a person."
  - question: "A ransomware attack encrypts an organisation's files and demands payment. What is its PRIMARY impact, and what control most directly enables recovery without paying?"
    options:
      - "Loss of confidentiality; the control is stronger encryption"
      - "Loss of availability; tested backups from which systems can be restored"
      - "Loss of non-repudiation; the control is digital signatures"
      - "Loss of network speed; the control is more bandwidth"
    answer: 1
    explanation: "Ransomware denies access to data by encrypting it, so its primary impact is on availability. The control that most directly enables recovery without paying the ransom is reliable, tested backups, kept separate so the ransomware cannot reach them, exactly the restoration-tested, offsite backups from Domain 4. Awareness training helps prevent the initial infection."
    whyWrong:
      - "The data is not disclosed but made unavailable; stronger encryption does not help recover it."
      - ""
      - "Non-repudiation is unaffected; signatures do not restore encrypted files."
      - "Ransomware attacks availability of data, not raw network speed; bandwidth is irrelevant to recovery."
---

## The situation

The organisation has spent years hardening its technology: firewalls, encryption, patching, monitoring. Then an attacker phones the service desk, claims to be a stressed executive locked out before a board meeting, and is given a password reset over the phone. No control was broken. A person was persuaded. Every technical defence was intact, and none of them was aimed at the point that failed.

Most of Domain 5 is technology. This lesson is about the human, who is often the way in.

## The human is frequently the weakest link

Attackers go where the defences are thinnest, and that is often the **person**, not the system. **Social engineering** manipulates people into divulging information or taking actions that compromise security, deliberately **bypassing technical controls** by exploiting trust, urgency, fear or authority. The service-desk call is a classic: the technology never came into it.

Because the target is human, the primary control is human: **security awareness training**. Training helps people recognise manipulation, verify identities, resist pressure, and report suspicious approaches. Another firewall does nothing here; teaching the service desk to verify a caller before resetting a password does. When a question asks the most effective control against phishing or social engineering, it is **awareness training**, because these attacks aim at people rather than technology.

## Recognising the attack methods

The exam expects you to recognise the common methods and what they target:

- **Phishing** (and targeted **spear-phishing**): fraudulent messages that trick people into revealing credentials or clicking malicious links. The most common entry point.
- **Malware** and **ransomware**: malicious software; ransomware **encrypts data and demands payment**, attacking **availability**.
- **Denial of service (DoS/DDoS)**: flooding a system to make it unavailable, attacking **availability**.
- **Man-in-the-middle**: intercepting communications, defeated by the encryption-in-transit controls from earlier lessons.
- **Credential theft** and **insider threat**: stolen or misused legitimate access, which least privilege and monitoring contain.

Naming the impact matters: phishing and credential theft threaten confidentiality and access; ransomware and DoS threaten availability. Matching the attack to the security property it undermines is often what a question is really testing.

## Ransomware and the backup connection

Ransomware deserves a moment because it ties back to Domain 4. Its primary impact is on **availability**, it denies access to data by encrypting it. The control that most directly enables **recovery without paying** is reliable, **tested, offsite backups** the ransomware cannot reach, exactly the restoration-tested, geographically separated backups from the resilience lessons. Awareness training reduces the chance of the initial infection; good backups mean that if it happens, the organisation can restore rather than pay. Stronger encryption does not help, the problem is not secrecy but access.

## Where practitioners go wrong

Two instincts cost marks. The first is believing technical controls alone stop attacks; social engineering targets people and is countered by awareness training, not another technical layer. The second is failing to connect an attack to the property it undermines and the control that answers it, ransomware attacks availability and is answered by tested backups; social engineering attacks trust and is answered by training. The human is part of the attack surface, and preparing people is a control in its own right.
