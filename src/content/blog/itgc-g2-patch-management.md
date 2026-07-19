---
title: "Kaseya VSA and the Patch That Came Too Late: How Patch Management Protects 1,500 Businesses"
description: "On 2 July 2021, the REvil ransomware group exploited zero-day vulnerabilities in Kaseya VSA to push ransomware to up to 1,500 businesses through their managed service providers. Kaseya was already working on patches. They were not deployed before the attack. Patch management is not just a technical process: it is a race with a deadline."
pubDate: 2026-09-07
heroImage: "/images/itgc-g2-patch-management.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Patch Management", "ITGC", "Kaseya VSA", "REvil Ransomware", "Vulnerability Remediation", "IT Audit"]
readTime: "7 min read"
---

On 2 July 2021, the Friday before the US Independence Day long weekend, the REvil ransomware group triggered a coordinated supply chain attack against managed service providers (MSPs) using Kaseya's VSA remote management platform. The attack exploited three zero-day vulnerabilities in the VSA platform, bypassing authentication controls and pushing a malicious software update to all endpoints managed through the VSA.

The result was ransomware deployment across approximately 60 managed service providers and up to 1,500 of their business customers across 17 countries. Demands ranged from $45,000 for individual businesses to $5 million for MSPs. REvil subsequently offered a universal decryptor for $70 million.

What made the Kaseya attack particularly significant for patch management controls was the timeline: the Dutch Institute for Vulnerability Disclosure (DIVD), a volunteer security research group, had discovered the vulnerabilities and reported them to Kaseya in April 2021, three months before the attack. Kaseya was actively developing patches. The patches were not yet deployed when REvil exploited the vulnerabilities.

The case illustrates both sides of the patch management challenge: the need to deploy patches rapidly when vulnerabilities are known, and the risk that even organisations acting in good faith can be caught between disclosure and remediation.

---

## The Risk

Patch Management controls within the Group G framework address the process by which known vulnerabilities in software, operating systems, and firmware are identified, prioritised, and remediated through the timely application of security patches and updates.

The risk profile of inadequate patch management includes:

**Known vulnerability exploitation:** The majority of ransomware attacks, including some of the most damaging breaches of the past decade, exploited vulnerabilities for which patches had been available for months or years before the attack. Equifax's 2017 breach exploited a vulnerability (Apache Struts CVE-2017-5638) for which a patch had been available for two months. The 2017 WannaCry global ransomware outbreak exploited EternalBlue (MS17-010), for which Microsoft had released a patch two months earlier.

**Legacy system vulnerability accumulation:** Systems running end-of-life operating systems or software versions that no longer receive security updates accumulate unremediable vulnerabilities over time. Organisations that continue to run Windows Server 2008 or unsupported applications cannot patch these systems regardless of process maturity.

**Patch testing delays:** Organisations that require extensive testing before deploying patches accept a window of vulnerability between patch release and deployment. Balancing patch speed against testing thoroughness is the central operational challenge of patch management.

**MSP supply chain exposure:** Organisations that manage their IT through managed service providers inherit the patch management posture of their MSP's tooling. The Kaseya case demonstrated that a vulnerability in the management platform itself can be exploited to reach all managed endpoints simultaneously.

---

## The Kaseya Timeline

The DIVD reported vulnerabilities in Kaseya VSA in April 2021. Kaseya's response was professional: they worked with DIVD on coordinated disclosure and were developing patches. By 2 July 2021, patches for most but not all of the vulnerabilities were in final testing.

REvil's attack on 2 July, the timing likely chosen to maximise the period before IT teams would respond (a long weekend), exploited the vulnerabilities before the patches could be deployed.

After the attack, Kaseya shut down its SaaS VSA service and instructed all on-premises VSA customers to take their systems offline. The FBI and CISA issued joint guidance. Kaseya obtained a universal decryptor key from an undisclosed party (widely reported to be from the US government's engagement with REvil) and made it available to affected customers.

The patch management lesson from Kaseya is not that the patch management process failed: it is that the window between vulnerability discovery and patch deployment is itself a risk period that must be managed. Organisations with long patch cycles had no opportunity to close the window before the attack.

---

## Patch Management in Practice: The Change Management Link

Patch management sits at the intersection of change management and security operations. A patch is a change to a production system. It requires testing, approval, scheduling, and deployment through the change management process.

The tension this creates is real: a zero-day vulnerability with active exploitation requires immediate patching. A standard change management process with a two-week testing cycle does not accommodate that urgency.

Mature patch management programs address this tension through:

**Tiered patch response times:** Patches are classified by severity (critical, high, medium, low) and assigned a response time target. Critical patches with active exploitation are deployed within 24 to 72 hours. Other patches are deployed within 14 to 30 days.

**Emergency change process for critical patches:** Critical vulnerability patches are handled through an expedited emergency change process that includes a rapid but documented approval step rather than the full change advisory board cycle.

**Compensating controls during the patch window:** When a patch cannot be deployed immediately, compensating controls (firewall rules blocking the attack vector, disabling the vulnerable feature, or increasing monitoring) are put in place to reduce exploitation risk during the remediation window.

---

## What Good Looks Like

**Complete asset and software inventory:** You cannot patch systems you do not know exist. A complete inventory of all systems, operating system versions, and software is the prerequisite for effective patch management.

**Vulnerability scanning with regular cadence:** Automated vulnerability scanning detects unpatched vulnerabilities across the environment. Scans are run at least monthly for all systems and continuously for internet-facing systems.

**Tiered remediation timelines:** Critical (CVSS 9-10) patches are deployed within 72 hours. High (7-8.9) within 14 days. Medium within 30 days. These timelines are tracked and compliance is measured.

**Testing and staging process:** Patches are tested in a representative non-production environment before production deployment. Testing is appropriately time-boxed based on the patch severity.

**Tracking and reporting:** Open vulnerabilities are tracked against their remediation deadline. Overdue patches are escalated. Compliance rates are reported to the CISO and to the board for material vulnerabilities.

**End-of-life system management:** Systems running unsupported operating systems or software are identified and either migrated, decommissioned, or subject to compensating controls with executive risk acceptance.

---

## How Auditors Test It

When auditing Patch Management controls, an IT auditor will typically:

**Assess the patch management policy:** Confirm that a policy exists that defines patch categories, response time targets, the testing process, and the escalation process for overdue patches.

**Test patch currency for a sample of systems:** Select a sample of in-scope systems (servers, endpoints, network devices). For each, determine the current patch level and compare against the latest available patches. Calculate the number of unpatched critical and high vulnerabilities.

**Test compliance with response time targets:** For vulnerabilities identified in the period, trace the date the vulnerability was identified to the date the patch was deployed. Calculate the number of instances where the response time target was missed.

**Assess end-of-life system identification:** Confirm that the organisation has a process to identify systems running end-of-life operating systems or software. Obtain the list of EOL systems. Confirm that each has either a migration plan or documented risk acceptance with compensating controls.

**Test the emergency patch process:** Confirm that an emergency change process exists for critical vulnerability patches. For critical patches deployed in the period, confirm that the emergency process was followed.

**Assess patch tracking and reporting:** Confirm that open vulnerabilities are tracked against remediation deadlines. Confirm that compliance reporting is produced and reviewed at an appropriate level.

---

## Lessons and Recommendations

The Kaseya case is a reminder that even organisations with competent security teams can be caught in the window between vulnerability disclosure and patch deployment. The lesson is not that patches must be deployed faster at the cost of stability, but that the window must be actively managed.

**Measure your patch response time and compare it to threat actor timelines.** If your average time to deploy a critical patch is 30 days and active exploitation typically begins within 7 days of vulnerability disclosure, your patch management program has a structural gap.

**Implement compensating controls for the remediation window.** When a critical vulnerability is disclosed and the patch is not yet deployed, implement a compensating control: block the attack vector at the firewall, disable the vulnerable feature, or increase monitoring for exploitation indicators.

**Know your EOL systems by name.** A vulnerability scanner report that identifies the oldest unpatched system in your environment is the beginning of the conversation, not the end. Know which systems are EOL, who owns them, and what the migration plan is.

**Include patch management in vendor due diligence.** If your MSP manages your endpoint patching, understand their patch management process and their average patch deployment time. The Kaseya case demonstrates that your patch posture is only as strong as the weakest link in your supply chain.

**Test your emergency patch process before you need it.** Run a tabletop exercise around a critical zero-day disclosure. How quickly can you deploy a patch to all systems? Where are the bottlenecks? The answer before a real incident is far less costly than discovering it during one.

---

## Assess Your Patch Management Controls

The MarcoWeb ITGC Tool covers Patch Management across Group G, with structured assessment templates for patch currency testing, response time compliance, and end-of-life system management.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
