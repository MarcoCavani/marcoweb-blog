---
title: "Firewalls, IDS/IPS and Secure Access"
description: "A firewall decides what may pass; detection tells you what did. The exam tests the difference between an IDS that alerts and an IPS that blocks, and why a VPN protects traffic over untrusted networks."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 10
minutes: 7
gated: false
taskStatement: "Evaluate the network controls that filter traffic, detect or prevent intrusions, and secure access over untrusted networks."
objectives:
  - "State what a firewall does."
  - "Distinguish an intrusion detection system from an intrusion prevention system."
  - "Explain the purpose of a VPN and secure protocols."
trap: "Confusing an IDS with an IPS. An IDS detects and alerts; an IPS sits inline and blocks. The exam tests which one acts and which one only warns."
quiz:
  - question: "What is the fundamental difference between an intrusion detection system (IDS) and an intrusion prevention system (IPS)?"
    options:
      - "An IDS is hardware and an IPS is software"
      - "An IDS detects suspicious activity and alerts; an IPS sits inline and can actively block it"
      - "An IDS is for internal traffic and an IPS is for external traffic only"
      - "They are two names for the same device"
    answer: 1
    explanation: "An IDS monitors traffic and raises alerts when it detects suspicious activity, but it does not stop the traffic; it is a detective control, often out of band. An IPS sits inline in the traffic path and can actively block or drop malicious traffic in real time; it is a preventive control. Detect-and-alert versus detect-and-block is the distinction."
    whyWrong:
      - "The difference is not hardware versus software; both can be either. It is whether the device blocks or only alerts."
      - ""
      - "Both can monitor internal or external traffic; the split is detection versus prevention, not traffic direction."
      - "They are distinct: one alerts, the other can block."
  - question: "What does a firewall PRIMARILY do?"
    options:
      - "Encrypt all traffic leaving the network"
      - "Enforce a rule-based boundary that controls which traffic is permitted to pass between networks"
      - "Detect and remove malware from files"
      - "Back up network configurations"
    answer: 1
    explanation: "A firewall enforces a boundary between networks, permitting or denying traffic according to a rule set, ideally on a default-deny basis where only explicitly allowed traffic passes. It is the gatekeeper that decides what may cross, not an encryption, anti-malware or backup tool."
    whyWrong:
      - "Encrypting traffic is the job of protocols like TLS or a VPN, not the firewall's primary function."
      - ""
      - "Detecting and removing malware is the role of anti-malware tools, not a firewall's rule-based filtering."
      - "Backing up configurations is unrelated to the firewall's traffic-control purpose."
  - question: "An employee needs to access internal systems securely from a hotel's public Wi-Fi. Which control is MOST appropriate?"
    options:
      - "A stronger password on their laptop"
      - "A VPN, which creates an encrypted tunnel protecting their traffic across the untrusted network"
      - "Disabling the laptop's firewall for compatibility"
      - "Using HTTP instead of HTTPS to save bandwidth"
    answer: 1
    explanation: "A VPN establishes an encrypted tunnel between the remote device and the organisation, so traffic crossing the untrusted public network cannot be read or altered in transit. It is the standard control for secure remote access over networks the organisation does not control, such as hotel or cafe Wi-Fi."
    whyWrong:
      - "A stronger laptop password does nothing to protect traffic travelling across the public network."
      - ""
      - "Disabling the firewall reduces protection precisely when the device is on a hostile network."
      - "HTTP is unencrypted; choosing it over HTTPS exposes traffic rather than protecting it."
---

## The situation

Three questions surface in a network review. The firewall rules have grown into hundreds of "allow" entries no one can explain. The intrusion system logs alerts that no one reads, and it turns out it could never have blocked anything anyway. And staff connect to internal systems from airport Wi-Fi with nothing but a password. Each is a different control doing less than it should.

The previous lesson set the architecture. This one covers the controls that police the traffic within it.

## The firewall: what may pass

A **firewall** enforces a **boundary** between networks, permitting or denying traffic according to a **rule set**. The strong posture is **default deny**: nothing passes unless a rule explicitly allows it, so access is granted deliberately rather than by omission. It is the network's gatekeeper, deciding what may cross, and it is not an encryption tool, an anti-malware scanner, or a backup, common wrong answers when a question asks what a firewall does.

The hundreds of unexplained "allow" rules in the scenario are a real finding: a rule base that has accreted permissions no one can justify has drifted far from default-deny, and each stale rule is a hole. Firewall rules need periodic review, the same recertification logic as user access.

## IDS versus IPS

The most tested distinction here is between two intrusion systems:

- An **intrusion detection system (IDS)** monitors traffic and **raises an alert** when it sees something suspicious. It is a **detective** control, and typically sits **out of band**, watching a copy of the traffic. It tells you something happened; it does not stop it.
- An **intrusion prevention system (IPS)** sits **inline** in the traffic path and can **actively block** or drop malicious traffic in real time. It is a **preventive** control.

Detect-and-**alert** versus detect-and-**block** is the whole distinction. The scenario's system logs alerts no one reads and could never block, so it is an IDS, and its value is further undermined because detection with no one responding is detection wasted. When a question describes a device that only warns, it is an IDS; one that stops the traffic, an IPS.

## Securing access over untrusted networks

Staff on airport or hotel Wi-Fi are sending traffic across a network the organisation does not control and cannot trust. A **VPN** (virtual private network) addresses this by creating an **encrypted tunnel** between the remote device and the organisation, so anything crossing the public network cannot be read or altered in transit. It is the standard control for secure **remote access**.

The same principle, encrypt in transit, drives the use of **secure protocols** generally: HTTPS (TLS) rather than plaintext HTTP, SSH rather than Telnet, so credentials and data are not exposed to anyone watching the wire. Sending sensitive traffic in the clear over an untrusted network is the failure; encryption in transit is the fix.

## Where practitioners go wrong

Two instincts cost marks. The first is treating an IDS and an IPS as interchangeable; an IDS only detects and alerts, while an IPS is inline and can block, and the exam turns on which one acts. The second is assuming a firewall or a password is enough for traffic crossing untrusted networks. It is not: a VPN and secure protocols encrypt data in transit so it cannot be read or tampered with, and a firewall's value depends on a disciplined, reviewed, default-deny rule base rather than an accumulation of unexplained allows.
