---
title: "Critical Infrastructure Report: WannaCry and the NHS, When Ransomware Hit the National Health Service"
description: "On 12 May 2017, WannaCry ransomware encrypted devices across 80 NHS organisations in England, forcing the cancellation of at least 19,000 appointments and procedures. This report examines how a nation-state-developed exploit became a criminal weapon and what it exposed about patch management and network segmentation in public health infrastructure."
pubDate: 2027-05-30
heroImage: "/images/report-critical-nhs-wannacry.svg"
category: "Digital Report"
author: "Marco Cavani"
tags: ["Critical Infrastructure", "NHS", "WannaCry", "Healthcare", "EternalBlue", "Incident Report"]
readTime: "10 min read"
---

## Executive Summary

On 12 May 2017, the WannaCry ransomware cryptoworm began spreading globally, exploiting the EternalBlue vulnerability in the Windows SMBv1 protocol. Within hours, it had reached National Health Service organisations across England. By the time the outbreak was contained, at least 80 NHS trusts and 595 GP practices had been affected, approximately 19,000 appointments and procedures had been cancelled or diverted, and the wider NHS response had consumed an estimated GBP 92 million in costs and lost output.

WannaCry was not a targeted attack on the NHS. It was an indiscriminate worm that spread to every reachable vulnerable host. The NHS was disproportionately affected because its infrastructure disproportionately featured the combination of conditions that made WannaCry catastrophically effective: unpatched Windows systems, legacy operating systems for which patches were unavailable, and flat network architectures that allowed the worm to propagate without containment.

The critical infrastructure dimension of the NHS WannaCry incident is its demonstration that healthcare systems are life-critical infrastructure: the disruption of appointment and procedure scheduling during a major ransomware outbreak does not merely inconvenience patients but creates clinical risk. Patients who could not receive time-sensitive care during the WannaCry disruption were real people with real medical needs.

---

## Incident Overview

**Date:** 12 May 2017 and subsequent days

**Infrastructure affected:** NHS England (80 trusts, 595 GP practices; also NHS Scotland and NHS Wales to a lesser extent)

**Mechanism:** WannaCry ransomware, propagating via EternalBlue exploit of Windows SMBv1 vulnerability (CVE-2017-0144)

**Origin of the exploit:** EternalBlue was developed by the US National Security Agency and stolen by a group known as the Shadow Brokers, who published it publicly in April 2017

**Attribution:** UK, US, and Australian governments attributed WannaCry to the Lazarus Group, assessed to be operating on behalf of the North Korean government

**Containment:** A security researcher discovered a "kill switch" domain embedded in the WannaCry code; registering the domain halted the worm's propagation on 12 May 2017, though it did not affect already-encrypted devices

**Cost:** NHS England estimated total cost including lost output at GBP 92 million

**Patient impact:** At least 19,000 cancelled appointments and procedures; an unknown number of ambulance diversions; emergency departments closed to patients in some affected areas

---

## Technical Analysis: EternalBlue and the Kill Switch

**The EternalBlue exploit** targets a vulnerability in the Windows implementation of the Server Message Block (SMB) protocol version 1. SMBv1 is a file-sharing protocol that dates to the 1980s and that Microsoft had deprecated in favour of SMBv2 and SMBv3. Despite the deprecation, SMBv1 remained enabled by default on Windows systems and had not been disabled across the NHS estate.

Microsoft released a patch for the EternalBlue vulnerability, MS17-010, in March 2017, six weeks before WannaCry's outbreak. NHS England's Cyber Security Operations Centre had issued guidance recommending the patch's application in April 2017. Despite this, a substantial proportion of NHS systems had not applied the patch by the time WannaCry launched.

**Why patching was not complete:**

- A significant portion of NHS infrastructure ran Windows XP, for which Microsoft had ended mainstream support in 2014. WannaCry could infect XP systems even though Microsoft had not released an XP patch until after the outbreak began.
- NHS operational technology, including medical devices and imaging systems, ran embedded Windows operating systems that could not be patched without manufacturer recertification.
- The decentralised NHS structure meant that patch deployment decisions were made by individual trusts, creating uneven patch application across the estate.
- Some trusts ran legacy applications that required SMBv1 to remain enabled even after patching, because the applications had not been updated to work with SMBv2.

**The kill switch:** WannaCry's code contained a check that queried a specific domain before encrypting files. If the domain was registered and returned a response, WannaCry would not encrypt the device. This was a kill switch intended to allow the authors to halt propagation if needed. A security researcher, Marcus Hutchins, discovered the kill switch mechanism and registered the domain for approximately $10, stopping the active propagation of the worm within hours of the outbreak beginning. This did not reverse damage already done but prevented further spread.

---

## ITGC Control Failures

**Patch Management at Scale:** The fundamental failure was the non-application of MS17-010 to a substantial proportion of NHS systems, despite Microsoft releasing the patch six weeks before the outbreak and NHS guidance recommending its application. A mature patch management program would track patch deployment status, maintain a complete asset inventory to confirm that all systems are either patched or have an approved exception with compensating controls, and escalate unpatched critical systems for emergency remediation.

**Legacy Operating System Management:** The NHS estate included a significant number of Windows XP systems for which Microsoft had not released a patch when WannaCry launched. The presence of end-of-life operating systems in a health network is a known risk that requires a defined mitigation strategy: either a paid extended support agreement with Microsoft (which NHS England had allowed to lapse), network isolation of the systems, or an accelerated replacement program. Relying on unpatched end-of-life systems on a network connected to the broader NHS infrastructure is an accepted risk that should have been formally documented and escalated.

**Network Segmentation:** WannaCry's propagation within NHS networks was enabled by flat network architectures that allowed a compromised device to reach and infect every other device on the same network segment. Clinical workstations, administrative systems, imaging devices, and other medical equipment should be on segmented networks that limit lateral propagation. A well-segmented network would have contained the outbreak to the initially infected segment and prevented the estate-wide propagation that occurred.

**Medical Device Patch Management:** Medical devices running embedded operating systems present a specific patch management challenge: the device manufacturer must re-certify the device following an OS update, which can take months or years. This creates a structural gap between the patch release and its deployment on medical devices. Compensating controls, including network isolation of medical devices, host-based firewall rules, and monitoring of device network traffic, are the practical response to this gap.

**Business Continuity Planning for IT Failures:** The scale of NHS disruption revealed that business continuity plans for IT failure did not adequately cover a scenario where multiple systems across a trust became unavailable simultaneously. Paper-based fallback procedures for appointment scheduling, prescription management, and patient record access were not universally rehearsed or maintained.

---

## The Nation-State Origin of the Weapon

The WannaCry incident has a dimension that distinguishes it from commercial ransomware attacks: the exploit that enabled it was developed by a government intelligence agency, stolen, and then weaponised by a nation-state actor against civilian infrastructure globally.

EternalBlue was developed by the NSA as an offensive cyber capability. The Shadow Brokers' publication of the NSA's toolkit in April 2017 placed an NSA-developed exploit in the hands of anyone who wanted it. The North Korean Lazarus Group used it to build WannaCry.

The chain of custody is significant for public infrastructure cybersecurity policy: a government agency's offensive cyber capability became a criminal tool that cost the NHS GBP 92 million and disrupted care for tens of thousands of patients. The policy debate about the responsible disclosure of discovered vulnerabilities versus retaining them for offensive use intersects directly with the security of public infrastructure.

For organisations operating public infrastructure, the practical implication is that defensive controls must account for the possibility that the threat actor's initial capability originated from a government program: it may be sophisticated, it may exploit vulnerabilities for which no patch yet exists, and it may be deployed globally without targeted intent.

---

## Lessons and Recommendations

**Establish a tracked, enforced patch deployment timeline for critical vulnerabilities.** A 30-day patch deployment target for critical security vulnerabilities, with automated tracking of deployment status against a complete asset inventory, would have dramatically reduced the NHS's exposure at the time of WannaCry's launch.

**Segment clinical, administrative, and medical device networks.** Network segmentation that prevents a compromised clinical workstation from reaching the imaging network, the pharmacy system, or the administrative estate limits the blast radius of any ransomware outbreak to the initially infected segment.

**Maintain paid extended support for systems that cannot be replaced before support expires.** The NHS allowed its paid extended support agreement for Windows XP to lapse. The cost of an extended support agreement is small relative to the cost of a WannaCry-scale outbreak.

**Define and rehearse a paper-based fallback for IT failure.** Each clinical unit should have a defined paper-based procedure for appointment management, prescription processing, and patient record access that can be activated within minutes of a system failure. Rehearsal of these procedures, at least annually, ensures that staff can operate effectively when systems are unavailable.

**Conduct a medical device patch management assessment.** Produce a complete inventory of medical devices that run embedded operating systems, confirm their patch status, identify those that cannot be patched due to manufacturer certification requirements, and implement network isolation as a compensating control for those devices.

---

## Assessment Framework for Healthcare Providers and Public Service Organisations

The ITGC controls most directly implicated in this incident map to the following audit testing areas:

- Patch management program coverage: asset inventory completeness, deployment tracking, and escalation for unpatched critical systems
- Legacy operating system management: identification, exception documentation, and compensating controls
- Network segmentation: clinical, administrative, and medical device network separation
- Medical device patch management and network isolation
- Business continuity plan review including IT failure scenarios and paper-based fallback rehearsal

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
