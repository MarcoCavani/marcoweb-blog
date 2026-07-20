---
title: "Education Incident Report: Why Universities Are the Most Consistently Targeted Sector for Ransomware"
description: "More than 60 percent of UK universities experienced a ransomware or significant cyberattack between 2019 and 2023. This report examines the structural characteristics that make universities persistent ransomware targets, the ITGC control gaps common across the sector, and the specific cases that illustrate the pattern."
pubDate: 2026-08-11
heroImage: "/images/report-education-university-ransomware.svg"
category: "Digital Report"
industry: "Education"
author: "Marco Cavani"
tags: ["Education", "University", "Ransomware", "Open Networks", "Research Data", "Incident Report"]
readTime: "9 min read"
---

## Executive Summary

Between 2019 and 2023, the education sector, and universities in particular, experienced the highest rate of ransomware attacks of any industry sector in multiple surveys and datasets. The UK's National Cyber Security Centre (NCSC) published alerts specifically addressing the university ransomware threat in 2020 and again in 2021. The NCSC's analysis found that universities accounted for a disproportionately high percentage of reported significant incidents.

Major ransomware incidents against universities during this period include:

- **University of California San Francisco (2020):** UCSF paid a ransom of USD $1.14 million to recover medical school research data encrypted by Netwalker ransomware
- **University of Utah (2020):** University of Utah paid approximately USD $457,000 to prevent the publication of student and employee data
- **Newcastle University (2020):** DoppelPaymer ransomware attack disrupted IT services for weeks
- **Northumbria University (2020):** Ransomware attack caused examination disruptions
- **The Open University (2020):** Disruption to systems
- **University of Hertfordshire (2021):** Extended outage after ransomware attack, affecting Microsoft Teams, Zoom, and email

This report does not focus on a single incident but on the structural pattern that makes universities systematically more vulnerable than most organisations, and the specific ITGC controls that the sector consistently fails to implement.

---

## The University Attack Surface: Structural Vulnerabilities

Universities face a combination of structural characteristics that makes them more difficult to defend than most organisations of comparable size:

**Open network philosophy:** Universities operate on a principle of academic freedom and open access that is fundamentally in tension with security restriction. Guest networks, open wireless, BYOD for students and staff, and internet-reachable research systems are features of university networks, not exceptions.

**Vast and heterogeneous endpoints:** A large university may have 50,000 or more active endpoints: student laptops, staff workstations, laboratory systems, IoT research equipment, and administrative servers. The technical diversity and independent management of these endpoints makes consistent endpoint protection deployment extremely difficult.

**Legacy research systems:** Research equipment, including scientific instruments, is frequently controlled by dedicated computing systems running outdated operating systems. These systems cannot be patched because the instrument manufacturer does not support updated OS versions, and replacing the instrument is prohibitively expensive.

**Time-sensitive research data:** Research teams working under grant deadlines have a strong incentive to pay a ransom to recover encrypted research data. Grant-funded research that is lost cannot be recovered by other means. This creates exactly the payment incentive that ransomware operators target.

**Decentralised IT governance:** Universities commonly operate with a central IT function that manages administrative systems alongside faculty and department IT teams that manage research and teaching systems independently. The decentralised model creates inconsistent security standards.

**High-value intellectual property:** University research data, particularly in areas such as pharmaceutical research, defence technology, and artificial intelligence, is a target for nation-state actors as well as criminal ransomware operators.

**Large and naive user population:** Each academic year introduces a new cohort of students who may have limited security awareness. The phishing attack surface of a university email system is exceptionally wide.

---

## The UCSF Case: Research Data as Ransom Leverage

The most significant individual university ransomware payment of the period was the USD $1.14 million paid by the University of California San Francisco in June 2020.

Netwalker ransomware encrypted a subset of UCSF's medical school servers. The encrypted data included research data from medical research projects that could not be reconstructed from backups because the encrypted data represented ongoing research that had not been backed up in a recoverable form.

The context is critical: UCSF was at the time engaged in COVID-19 research. The medical school was generating research data at a rate that exceeded the backup infrastructure's capacity to maintain complete coverage. The decision to pay the ransom was driven by the specific and irreplaceable nature of the affected research data.

Negotiation records published by journalist Brian Krebs showed the attacker initially demanding USD $3 million and UCSF ultimately negotiating down to USD $1.14 million.

---

## Common ITGC Control Failures Across the University Sector

Analysis of publicly disclosed university incidents identifies a consistent pattern of control failures:

**Insufficient network segmentation between research, administrative, and student networks:** Universities frequently operate flat or minimally segmented networks where a compromise of a student BYOD device, a research server, or an administrative workstation can propagate laterally to all other network zones. Research systems, which are the highest-value target for both intellectual property theft and ransomware, should be in a dedicated, segmented network zone.

**Incomplete endpoint protection coverage:** Consistent deployment of endpoint detection and response (EDR) software across a university network is operationally challenging due to the decentralised management model and the diversity of endpoint types. Gaps in EDR coverage leave unmonitored endpoints that represent undetected entry points.

**Unmanaged legacy research equipment:** Scientific instruments running Windows XP or unsupported Linux versions are common in university research environments. These systems cannot be patched and are known vulnerability points. Controls include network isolation, host-based firewall rules, and monitoring of network traffic from these systems.

**Research data backup gaps:** The UCSF case illustrated that research data backup coverage may not match the importance of the data. Active research data that is generated or updated daily needs daily backup. Backup coverage for research systems should be treated with the same urgency as backup coverage for administrative systems.

**Weak identity governance:** University identity systems commonly manage both employee and student identities. Student accounts, which cycle in and out of the system annually, can accumulate stale access. Former employees whose accounts are not promptly disabled represent orphan accounts accessible to phishing. MFA adoption in the student population has historically been low.

**Delayed patching due to decentralised management:** Systems managed by individual departments or research teams may not receive security patches on the same timeline as centrally managed systems. The decentralised management model delays patch deployment and creates a heterogeneous patch landscape that is difficult to assess.

---

## Financial Impact and Payment Decisions

The ransomware payment decision is more complex for universities than for most organisations because of the specific nature of academic data:

**Research data is unique and irreplaceable.** Financial records can be reconstructed from bank statements. Research data in active analysis is often irreplaceable: it represents months of work that cannot be re-done under grant timelines.

**Student academic records have regulatory and pastoral obligations.** Exam results, grades, and academic progress records must be available to students. Loss of these records creates regulatory and reputational consequences.

**The ransomware payment norm is changing.** Following US OFAC guidance that ransom payments to sanctioned entities may violate sanctions law, and increasingly robust law enforcement guidance against payment, the regulatory and reputational cost of paying has increased.

The practical implication is that the most effective response to the ransom payment pressure is the control that makes payment unnecessary: comprehensive, tested, isolated backups that include active research data.

---

## Lessons and Recommendations

**Segment research, administrative, and student networks.** A ransomware worm that enters through a student BYOD device should not be able to reach research servers or administrative systems. Network segmentation that separates these environments is achievable even in complex university network architectures and dramatically limits the spread of a successful compromise.

**Mandate MFA for all accounts, including students.** MFA adoption barriers in the student population are real but surmountable: app-based authenticators are free, and the phishing risk from student accounts is the entry point for many university incidents. Mandate MFA at account creation for new cohorts and phase it in for existing students.

**Create a research data backup standard.** Research data backup coverage should be a defined standard, not an individual research team's discretion. Active research projects should have daily backup with an isolated copy. The backup coverage review should be part of the research computing service provisioning process.

**Isolate legacy research equipment at the network level.** Legacy scientific instruments that cannot be patched should be on dedicated VLANs with no direct routing to the rest of the university network. They should be monitored for anomalous network traffic. Lateral movement from a compromised instrument to production systems should be technically prevented.

**Conduct regular security awareness training targeted at the academic and student population.** Phishing simulation campaigns that are calibrated to the tactics used against academic targets (fake grant notifications, fake IT support emails, fake library access messages) provide measurable awareness improvement.

---

## Assessment Framework for University and Higher Education Institutions

The ITGC controls most directly implicated in this sector pattern map to the following audit testing areas:

- Network segmentation between research, administrative, and student environments
- Endpoint protection deployment coverage, including research and laboratory systems
- Research data backup coverage, isolation, and restoration testing
- MFA deployment including student population
- Legacy system inventory and network isolation controls
- Patch management across decentralised department IT environments

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
