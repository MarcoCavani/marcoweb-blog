---
title: "Pharmaceutical Incident Report: Merck, NotPetya, and the $1.3 Billion Cost of an Uninsured Cyberwar"
description: "In June 2017, the NotPetya wiper destroyed 30,000 of Merck's computer systems, halted pharmaceutical manufacturing, and resulted in estimated losses of USD $1.3 billion. This report examines the incident, its specific implications for regulated pharmaceutical environments, and the ITGC control failures that amplified the damage."
pubDate: 2026-07-21
heroImage: "/images/report-pharma-merck-notpetya.svg"
category: "Digital Report"
industry: "Pharmaceutical"
author: "Marco Cavani"
tags: ["Pharmaceutical", "Merck", "NotPetya", "Manufacturing", "Disaster Recovery", "Incident Report"]
readTime: "9 min read"
---

## Executive Summary

On 27 June 2017, Merck and Co., one of the world's largest pharmaceutical manufacturers, was struck by NotPetya, the Russian military intelligence-developed wiper malware that simultaneously attacked hundreds of organisations globally. NotPetya destroyed approximately 30,000 of Merck's computers, halted manufacturing at multiple facilities, and ultimately contributed to an estimated USD $1.3 billion in losses.

Merck subsequently filed an insurance claim. Its insurer, Ace American, denied the claim on the basis that NotPetya constituted an "act of war," a standard exclusion in property damage policies. The subsequent legal proceedings, which ultimately found in Merck's favour in 2023, forced the insurance industry to confront the question of how traditional policy exclusions apply to nation-state cyberattacks.

Beyond the insurance question, the Merck case illustrates the specific amplification of cyberattack impact in regulated pharmaceutical environments, where system destruction triggers not just operational disruption but regulatory re-validation requirements under GxP frameworks.

---

## Incident Overview

**Date:** 27 June 2017

**Organisation:** Merck and Co., Inc. (global pharmaceutical manufacturer)

**Systems destroyed:** Approximately 30,000 computers

**Manufacturing impact:** Production halted at multiple facilities; Merck was forced to borrow vaccines from the US Centers for Disease Control and Prevention stockpile to meet demand for Gardasil, its HPV vaccine

**Estimated total loss:** USD $1.3 billion (includes lost manufacturing, remediation costs, and operational disruption)

**Attack vector:** NotPetya wiper distributed via a compromised update to M.E.Doc, Ukrainian accounting software widely used by companies operating in Ukraine

**Attribution:** GRU (Russian military intelligence), attributed by US, UK, EU, and Australian governments

---

## Technical Analysis: What Happened

NotPetya was distributed through a compromised update mechanism for M.E.Doc, a Ukrainian accounting software package required for companies doing business in Ukraine. Any computer running M.E.Doc that received the compromised update was infected. The malware then spread laterally through networks using the EternalBlue exploit targeting unpatched Windows systems (MS17-010) and the Mimikatz credential harvesting tool to authenticate to other machines.

On each infected machine, NotPetya encrypted the Master Boot Record and key Windows files, then rebooted the machine. The reboot left a ransom note, but the encryption was irreversible: the authors of NotPetya had not built in a genuine decryption capability. NotPetya was designed to destroy, not to extort.

Merck's exposure to M.E.Doc creates suggests the infection entered through its Ukrainian operations or through a network-connected supplier with Ukrainian operations. Once inside Merck's network, the worm propagated laterally. The absence of effective network segmentation in the operational environment meant that the malware could reach manufacturing systems, inventory management, order processing, and laboratory systems from a single initial infection point.

**Key technical failure modes:**

**EternalBlue propagation via unpatched systems:** The MS17-010 patch that blocked EternalBlue had been available since March 2017, three months before the NotPetya outbreak. Organisations that had applied the patch were significantly more resilient. The persistence of unpatched Windows systems in Merck's environment provided the lateral movement pathway.

**Insufficient network segmentation:** Manufacturing, laboratory, and enterprise systems that share network connectivity allow a worm that enters through one system type to propagate to all others. Segmentation that would have isolated the manufacturing environment from the enterprise network would have constrained the spread.

**Backup systems co-located with primary systems:** Backup and recovery systems that are accessible from the same network as primary systems are vulnerable to the same attack. Merck's recovery timeline suggests that backup systems were affected, extending the time required to rebuild from scratch.

---

## GxP Amplification: The Pharmaceutical-Specific Risk

The pharmaceutical sector faces a regulatory dimension to cyberattack impact that does not apply to most other industries: GxP validation requirements.

GxP (Good Practice) regulations, enforced by the FDA and EMA, require that all computerised systems used in pharmaceutical manufacturing, laboratory testing, and clinical trials are validated to ensure they perform their intended functions consistently and in compliance with regulatory requirements.

When a GxP-validated system is destroyed by malware and rebuilt from scratch, the rebuilt system is technically a new system that has not been validated. Before it can be used in a regulated manufacturing context, it must be re-validated through a documented process that may take weeks or months per system.

Merck's manufacturing systems, laboratory information management systems (LIMS), and enterprise resource planning systems were all subject to GxP requirements. Their destruction by NotPetya triggered not just an IT recovery project but a regulatory re-validation programme, extending the practical recovery timeline and the associated costs.

---

## ITGC Control Failures

**Patch Management:** The EternalBlue exploit used by NotPetya had been patched by Microsoft (MS17-010) in March 2017. Merck's exposure indicates that this critical patch had not been fully deployed across the Windows fleet within the three months available. Pharmaceutical environments often defer patches pending GxP re-validation assessments, creating a structural gap between patch release and deployment.

**Network Segmentation:** The propagation of NotPetya across Merck's manufacturing, laboratory, and enterprise systems reflects a network architecture where these system types shared connectivity. Effective segmentation would have contained the worm's spread.

**Third-Party Software Update Controls:** The initial infection vector was a compromised software update from a third-party vendor. Controls that would have detected or blocked a malicious update from a supplier, including application whitelisting and update integrity verification, represent a gap in the third-party software supply chain control environment.

**Backup Architecture:** Merck's recovery timeline, measured in weeks for full restoration, indicates that backup systems were either also affected by the wiper or were insufficient to support rapid restoration of the affected systems. Air-gapped or offline backup copies would have reduced the recovery timeline.

**Disaster Recovery Testing:** The absence of a pre-tested recovery scenario for total production environment loss extended the recovery period. DR testing in pharmaceutical environments must address the specific complication that recovered systems require GxP re-validation before operational use.

---

## The Insurance Question

Merck's insurer denied its claim under the "hostile or warlike action" exclusion, which policy language typically extends to acts of war by governments or sovereign powers. The US government had attributed NotPetya to Russian military intelligence.

The Superior Court of New Jersey ruled in Merck's favour in January 2023, finding that the exclusion did not apply because it was not reasonably interpreted to cover the kind of cyberattack Merck experienced. The ruling is significant for the cyber insurance market: it suggests that standard property policy war exclusions require specific, cyber-relevant language to exclude nation-state cyberattacks.

The practical implication is that pharmaceutical firms and other critical sector organisations should review their insurance coverage specifically for the adequacy of cyber coverage in the context of nation-state attacks, rather than assuming that standard property policy war exclusions will be enforced.

---

## Lessons and Recommendations

**Apply critical patches on an accelerated timeline for known actively exploited vulnerabilities.** The pharmaceutical sector's tendency to defer patches pending GxP re-validation creates a structural lag. Establish a process for rapid deployment of critical security patches with a streamlined re-validation approach for systems where the patch does not affect GxP-relevant functionality.

**Implement network segmentation between manufacturing and enterprise environments.** Manufacturing OT/IT environments should not share a flat network with enterprise systems. Segmentation that limits lateral movement from enterprise systems into manufacturing infrastructure is a fundamental architecture requirement.

**Implement air-gapped or offline backups for GxP-critical systems.** Backup systems in the same network as primary systems are vulnerable to the same attack. For GxP systems, maintaining offline backup copies with documented re-validation procedures reduces the recovery timeline.

**Include GxP re-validation in disaster recovery planning.** A DR plan that addresses technical recovery without accounting for GxP re-validation produces an optimistic recovery timeline. DR planning for pharmaceutical environments must include the regulatory steps required before recovered systems can return to production use.

**Review insurance coverage for adequacy against nation-state cyber incidents.** Following the Merck litigation, the cyber insurance market is updating its policy language. Pharmaceutical firms should confirm that their cyber coverage explicitly addresses nation-state attributed attacks with clear, unambiguous coverage language.

---

## Assessment Framework for Pharmaceutical Firms

The ITGC controls most directly implicated in this incident map to the following audit testing areas:

- Patch management with pharmaceutical-specific GxP patch assessment procedures
- Network segmentation between manufacturing, laboratory, and enterprise environments
- Third-party software update controls and supply chain security
- Backup architecture isolation and recovery time testing
- Disaster recovery planning inclusive of GxP re-validation timelines

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
