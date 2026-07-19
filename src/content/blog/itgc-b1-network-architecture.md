---
title: "How a Flat Network Let Attackers Hide in Marriott for Four Years"
description: "When Marriott acquired Starwood in 2016, they inherited a compromised network. Because the two environments were poorly segmented, attackers moved freely for four years. Network Architecture is the control that determines how far a breach can travel."
pubDate: 2026-08-02
heroImage: "/images/itgc-b1-network-architecture.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Network Architecture", "ITGC", "Network Segmentation", "Marriott Breach", "Defence in Depth", "IT Audit"]
readTime: "8 min read"
---

In 2016, Marriott International completed the largest acquisition in hotel industry history, purchasing Starwood Hotels and Resorts for USD $13.6 billion. What they did not know at the time of closing was that Starwood's network had been compromised since at least 2014. Attackers were already inside, quietly exfiltrating data from the Starwood Guest Reservation System.

The acquisition brought two different networks together. Marriott ran its own systems. Starwood ran theirs. The integration was complex, and during that process, the Starwood environment continued operating largely as it had before. The compromise, undetected, continued.

On 8 November 2018, a security tool flagged an anomalous query in the Starwood database. By that point, 500 million guest records had been exfiltrated, including passport numbers, payment card data, names, and addresses. The attacker had been in the environment for approximately four years.

The network architecture of a merged, flat, inadequately segmented environment is what turned a containable breach into a catastrophic one.

---

## The Risk

Network Architecture defines how an organisation's systems are connected, isolated, and controlled. Good architecture assumes that some systems will be compromised and designs the network so that a breach in one zone cannot easily reach another.

The core principle is defence in depth: multiple layers of control, each capable of slowing, detecting, or blocking an attacker who has moved past the previous layer.

Without proper architecture:

- A compromised workstation can reach production databases
- A vendor connection can access internal systems
- Malware on one segment can spread to every other segment
- Attackers can persist undetected because there are no internal checkpoints

The Marriott case illustrates what happens when two inadequately segmented environments are joined without rigorous architectural review. The attacker's initial foothold in the Starwood environment gave them access to the full Starwood data estate, and eventually to the guest reservation system that was Marriott's most sensitive asset.

---

## The Marriott Case in Detail

The compromise began in the Starwood environment before the Marriott acquisition closed. The initial access vector was never definitively confirmed publicly, though the attack was later attributed to a Chinese state-sponsored threat group designated APT41 (also known as Barium or Winnti).

The attackers installed a Remote Access Trojan (RAT) called PlugX and later the Mimikatz credential harvesting tool. Over the following years, they harvested credentials, moved laterally through the Starwood environment, and maintained persistent access to the guest database.

When Marriott completed the Starwood acquisition, the due diligence process did not include a deep cybersecurity audit of the Starwood network. The two environments were operated in parallel, connected at various integration points, without a comprehensive review of the Starwood environment's security posture.

**Why did it persist for so long?** The network architecture of the Starwood environment did not enforce internal monitoring at segment boundaries. The Starwood Guest Reservation System was not adequately isolated from other systems. There were no internal chokepoints that would have required the attacker to re-authenticate or re-authorise as they moved toward the reservation database.

The Marriott response once detected was comprehensive: they notified authorities, established a dedicated breach support website, offered free credit monitoring to affected guests, and engaged forensic specialists. The UK Information Commissioner's Office fined Marriott GBP 18.4 million under GDPR (reduced from an initial GBP 99 million). US state attorneys general and regulators also took action.

---

## What Failed

**No segmentation between the Starwood guest database and surrounding systems:** The reservation system should have been in a hardened, isolated segment with strict inbound and outbound controls. Instead, it was accessible from multiple parts of the internal network.

**No security due diligence at acquisition:** Merger and acquisition activity is a known attack surface. Acquiring a company without assessing the security posture of the acquired network is equivalent to adding a new wing to your building without checking whether the doors are locked.

**No internal east-west monitoring:** Traffic moving laterally within the internal network was not subject to the same inspection as traffic crossing the perimeter. Attackers exploited this blind spot for four years.

**Integration without isolation:** When two networks are joined during a merger, the minimum acceptable approach is to air-gap them until security posture is assessed and a controlled integration plan is implemented.

---

## What Good Looks Like

**Tiered network zones:** Systems are grouped into security zones based on their sensitivity and function: internet-facing DMZ, internal business systems, production data environments, operational technology, and management networks. Firewalls enforce strict rules between zones.

**Micro-segmentation:** Within zones, workloads and applications are further isolated. A database server communicates only with approved application servers on specific ports. Nothing else can reach it.

**Choke points with inspection:** Traffic crossing zone boundaries passes through firewalls or intrusion detection systems that apply rules and generate logs. Lateral movement triggers alerts.

**Acquisition security assessment:** Before integrating an acquired network, a security assessment of that network is completed. Known compromised or inadequately secured systems are isolated or rebuilt before integration.

**Zero trust model:** The network is designed assuming that any device may already be compromised. No traffic is implicitly trusted because of its network location. All connections require authentication and authorisation at the application layer.

---

## How Auditors Test It

When auditing Network Architecture (Control B.1), an IT auditor will typically:

**Request network diagrams** for the audit period. Assess whether diagrams accurately reflect the current environment (compare to discovery scan results if available). Identify whether key zones (DMZ, production, management) are documented and justified.

**Assess segmentation:** For production systems identified in scope, confirm that they reside in a network zone isolated from general user workstations. Test whether firewall rules enforce zone boundaries.

**Test for flat network indicators:** Review firewall rulesets for rules that permit broad internal-to-internal traffic (e.g., "any-to-any" rules within the internal zone). These are indicators of flat network architecture.

**Assess M&A integration procedures:** If the organisation completed acquisitions during the period, request documentation of the security assessment conducted before network integration.

**Review east-west monitoring:** Confirm that internal traffic, not just north-south perimeter traffic, is subject to logging and alerting.

**Interview network team:** Understand whether network architecture decisions are driven by a defined security architecture policy and whether changes to the network require security review.

---

## Lessons and Recommendations

The Marriott breach is the definitive case for why network architecture cannot be an afterthought in M&A activity, or in any organisation.

**Assess acquisitions before integration.** When buying another company, you are buying their security debt as well as their assets. A cybersecurity due diligence assessment before close, and a security review before network integration, is non-negotiable.

**Segment based on data sensitivity, not organisational units.** The guest reservation database should have been in the most restricted zone of the environment, regardless of which brand it served.

**Monitor east-west traffic.** Perimeter firewalls stop external attackers. Internal monitoring stops attackers who are already inside. Both are necessary.

**Treat network architecture as a living document.** Networks change constantly. Architecture decisions made three years ago may not reflect the current environment. Annual architecture reviews, tied to the risk register, keep the design current.

**Apply zero trust principles to new integrations.** When two networks must connect, the default should be no access, with explicit grants for specific flows. Do not connect first and restrict later.

---

## Assess Your Network Architecture Controls

The MarcoWeb ITGC Tool covers the complete Group B control set including Network Architecture, with structured assessment templates and workpaper support.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
