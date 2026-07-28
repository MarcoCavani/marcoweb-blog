---
title: "Network Architecture and Segmentation"
description: "A flat network turns one compromise into a total one. The exam tests why segmentation contains a breach, what a DMZ is for, and why network location is no basis for trust."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 9
minutes: 7
gated: false
taskStatement: "Evaluate whether the network is layered and segmented so that a compromise is contained rather than total."
objectives:
  - "Explain how segmentation limits the blast radius of a breach."
  - "State the purpose of a DMZ."
  - "Describe the zero-trust principle."
trap: "Treating a hard perimeter with a flat internal network as secure. Once inside, an attacker moves freely; segmentation and zero trust exist because the perimeter is not enough."
quiz:
  - question: "What is the PRIMARY security benefit of network segmentation?"
    options:
      - "It makes the network faster"
      - "It contains a breach, limiting an attacker's lateral movement so one compromised system does not expose the whole network"
      - "It removes the need for firewalls"
      - "It reduces the number of devices required"
    answer: 1
    explanation: "Segmentation divides the network into zones with controlled boundaries between them, so a compromise in one zone cannot spread freely to others. It limits lateral movement and shrinks the blast radius of an incident, the same containment logic as least privilege, applied to the network."
    whyWrong:
      - "Segmentation can add latency, not speed; performance is not its security purpose."
      - ""
      - "Segmentation works with firewalls to enforce zone boundaries; it does not remove the need for them."
      - "It is about containing compromise, not reducing device count."
  - question: "What is the purpose of a DMZ (demilitarised zone) in network architecture?"
    options:
      - "To store the organisation's most sensitive data"
      - "To isolate internet-facing servers in a separate zone, so compromising them does not directly expose the internal network"
      - "To provide free wireless access to visitors"
      - "To replace the need for encryption"
    answer: 1
    explanation: "A DMZ is a buffer zone between the internet and the internal network where public-facing servers, such as web and mail servers, are placed. If one is compromised, the attacker is still separated from the internal network by another boundary, so the exposure is contained rather than immediate. Sensitive data belongs on the internal network, not the DMZ."
    whyWrong:
      - "The most sensitive data belongs deep inside, not in the internet-exposed DMZ."
      - ""
      - "Visitor wireless is unrelated; a DMZ isolates internet-facing servers from the internal network."
      - "A DMZ is an architectural boundary, not a substitute for encryption."
  - question: "What is the core principle of a zero-trust security model?"
    options:
      - "Everything inside the corporate network is trusted by default"
      - "No user or device is trusted based on network location; every request is verified regardless of where it originates"
      - "Trust is granted permanently once a user logs in"
      - "External traffic is trusted more than internal traffic"
    answer: 1
    explanation: "Zero trust discards the assumption that being inside the network means being trustworthy. Every request is authenticated, authorised and verified on its own merits, regardless of origin, because attackers who breach the perimeter, or malicious insiders, are already inside. It replaces implicit network-location trust with continuous verification."
    whyWrong:
      - "Trusting everything inside by default is the traditional model zero trust rejects."
      - ""
      - "Zero trust verifies continuously; it does not grant permanent trust at login."
      - "Zero trust does not trust either side by location; it verifies all requests."
---

## The situation

The organisation has invested heavily in its perimeter: a strong firewall, monitored internet gateway, the works. Inside, though, the network is flat, every server, workstation and printer sits in one zone with nothing between them. When a single laptop is compromised by a phishing email, the attacker finds they can reach the finance servers, the domain controller and the backups directly, because once you are inside, there are no more walls.

A hard shell around a soft centre is the architecture this lesson is about correcting.

## Defence in depth, not a single wall

Good network security is built in **layers**, defence in depth, so that no single control is the only thing standing between an attacker and everything. A strong perimeter is one layer, but if it is the **only** layer, breaching it once, or a malicious insider starting inside, means unrestricted access. The flat internal network is exactly that failure: all the defence is at the edge, and none of it is within.

## Segmentation contains the breach

**Segmentation** divides the internal network into **zones** with controlled boundaries between them, so traffic between zones is filtered and a compromise in one cannot spread freely to the others. It **limits lateral movement**: the attacker who lands on a laptop is confined, not handed the finance servers and the domain controller.

This is the **containment** principle from least privilege, applied to the network. The benefit is not speed or fewer devices; it is that a breach is **bounded**. Had the network in the scenario been segmented, the compromised laptop would have hit a boundary long before the backups. When a question asks the security benefit of segmentation, it is limiting the blast radius of a compromise.

## The DMZ

A specific and heavily tested piece of architecture is the **DMZ** (demilitarised zone): a buffer zone between the internet and the internal network where **internet-facing servers**, web, mail, public applications, are placed. They must be reachable from the internet, which makes them exposed, so isolating them in the DMZ means that compromising one does **not** directly reach the internal network, another boundary still stands between the attacker and internal systems.

The exam's trap is to suggest the DMZ is where sensitive data lives. It is the opposite: the most sensitive data belongs deep inside, and the DMZ holds only what must be exposed, kept away from everything that must not.

## Zero trust

The flat-network failure reflects an old assumption: that being **inside** the network means being trusted. **Zero trust** discards that. Its principle is that **no user or device is trusted based on network location**; every request is authenticated, authorised and verified on its own merits, wherever it comes from. Because attackers breach perimeters and insiders are already inside, network position is treated as no evidence of trustworthiness at all. It replaces "inside equals safe" with continuous verification, and it is the modern answer to the soft-centre problem.

## Where practitioners go wrong

Two instincts cost marks. The first is equating a strong perimeter with a secure network; a flat internal network means one compromise reaches everything, which is why segmentation and defence in depth exist. The second is misplacing trust by location, treating internal traffic as safe. Zero trust verifies every request regardless of origin, and segmentation ensures that even a trusted-looking foothold cannot roam the whole network.
