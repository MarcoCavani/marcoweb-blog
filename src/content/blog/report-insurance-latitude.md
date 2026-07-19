---
title: "Financial Services Incident Report: The Latitude Financial Breach and 14 Million Records Through a Service Provider"
description: "In March 2023, attackers used stolen employee credentials from a service provider to access Latitude Financial's systems, ultimately stealing 14 million customer records including 7.9 million identity document numbers. This report examines the largest confirmed data theft in Australian history, the systemic third-party access failure, and the insurance and consumer finance sector's data retention exposure."
pubDate: 2027-05-09
heroImage: "/images/report-insurance-latitude.svg"
category: "Digital Report"
author: "Marco Cavani"
tags: ["Financial Services", "Latitude Financial", "Third-Party Breach", "Identity Documents", "Incident Report"]
readTime: "9 min read"
---

## Executive Summary

In March 2023, Latitude Financial Services disclosed a cyberattack that resulted in the theft of personal and identity information for approximately 14 million customers and applicants. The attack exploited stolen employee credentials from a service provider to gain access to Latitude's systems, from which the attacker escalated access and extracted data across multiple business systems.

The breach is the largest confirmed data theft in Australian corporate history by record count. The 14 million affected individuals include approximately 7.9 million whose driver's licence numbers were stolen and approximately 53,000 whose passport numbers were stolen. The remaining records included names, dates of birth, addresses, phone numbers, financial statements, and credit information.

Latitude declined to pay a ransom demand. The attacker did not publish the data in the manner that followed Medibank's refusal, though the data's subsequent handling and potential criminal exploitation remain unknown.

The breach drew scrutiny to consumer finance firms' data retention practices: a significant proportion of the 14 million affected individuals were not current Latitude customers at the time of the breach but were former applicants or historical customers whose data had been retained beyond what most would expect.

---

## Incident Overview

**Date:** March 2023

**Organisation:** Latitude Financial Services (ASX listed consumer finance company; operates in Australia and New Zealand)

**Customers affected:** Approximately 14 million individuals

**Data stolen:** 7.9 million driver's licence numbers, 53,000 passport numbers, names, dates of birth, addresses, phone numbers, financial statements, and credit data

**Attack vector:** Stolen employee credentials from a major service provider used to access Latitude's systems

**Regulatory outcome:** Australian Privacy Commissioner and New Zealand Privacy Commissioner investigations; class action filed

**Ransom:** Demanded; Latitude declined to pay; data not published in a targeted manner

---

## Technical Analysis: What Happened

The attack on Latitude followed a now-familiar pattern for large-scale financial services breaches: the entry point was not Latitude's own perimeter but a service provider with access to Latitude's environment.

An attacker obtained employee credentials belonging to a staff member of a major service provider that had access to Latitude's internal systems. The specific credential compromise mechanism has not been publicly confirmed but is consistent with phishing, infostealer malware on the service provider employee's device, or credential stuffing using credentials from a prior breach.

The attacker used these credentials to access Latitude's infrastructure through the service provider's access pathway. From this initial access point, the attacker escalated their access across Latitude's systems, ultimately reaching the customer and applicant databases that held the 14 million records.

**The data was stored across multiple systems.** Latitude's disclosure indicated that the stolen data came from multiple Latitude systems. This reflects a common pattern in consumer finance: customer data from origination (applications), servicing (active accounts), and historical records is stored in different systems across the data lifecycle, but all systems can potentially be reached from a service provider access pathway that was provisioned for a broader operational purpose.

**The breach was not detected in real time.** The attacker had time to access and extract 14 million records from multiple systems before detection. This indicates that either the monitoring was insufficient to detect the access patterns in real time, or the detection occurred after exfiltration was substantially complete.

---

## Data Retention: The Hidden Scale Multiplier

The 14 million records stolen from Latitude included a large population of individuals who would not have expected to be in Latitude's database at the time of the breach.

Consumer finance companies collect detailed personal and financial information from every applicant, whether or not the application is approved and whether or not the individual becomes a customer. Regulatory requirements (anti-money laundering, responsible lending obligations) and business practice (maintaining historical credit records for existing and former customers) drive retention of this data for extended periods.

The effect is that the population exposed in a consumer finance breach is typically much larger than the current customer base:

**Applicants who were declined** remain in the database for the regulatory retention period, typically 7 years under anti-money laundering legislation.

**Former customers** whose accounts were paid off and closed remain in the database for the period required by financial regulation, commonly 7 years.

**Historical statement data** including financial information submitted at application may be retained for the full regulatory period regardless of account status.

This creates a situation where a consumer finance firm with, say, 3 million current customers may hold data for 14 million individuals, representing a decade of applications and account history. The breach population is not the customer base: it is the historical population of everyone who has ever applied or held an account.

---

## ITGC Control Failures

**Third-Party Access Provisioning and Scope:** The service provider employee whose credentials were compromised had access to Latitude's systems. The scope of that access, which ultimately allowed the attacker to reach customer databases across multiple systems, was broader than the operational necessity of the service provider relationship would typically require. Third-party access should be scoped to the specific systems and data required for the operational engagement.

**Multi-Factor Authentication on Service Provider Access Pathways:** The credential compromise would not have been sufficient to access Latitude's systems if MFA had been enforced on the service provider's access pathway. Remote access by third parties to systems holding sensitive financial and personal data should require MFA as a non-negotiable baseline.

**Data Exfiltration Detection Across Multiple Systems:** The attacker moved across multiple Latitude systems to extract 14 million records. Detection controls that correlate access patterns across systems, rather than monitoring each system independently, would have identified the scale and breadth of the access as anomalous.

**Segmentation Between Service Provider Access and Customer Data Systems:** Service provider access pathways provisioned for operational support functions should not provide direct access to production customer databases without additional authentication and authorisation steps. Segmentation that requires explicit authorisation to cross between the service provider access zone and the customer data zone limits the blast radius of a compromised service provider credential.

**Data Retention Policy Review:** A retention policy assessment that identifies data held beyond the minimum regulatory requirement and initiates deletion of that data reduces the population at risk in any future breach. Retaining 14 million records when the current customer base is a fraction of that number represents a data retention practice whose security cost has been demonstrated.

---

## Sector Implications: Consumer Finance and the Long Data Tail

The Latitude breach illustrates a structural characteristic of consumer finance data that creates persistent breach risk:

**Long retention obligations:** Financial regulation requires consumer lenders to retain credit and identity data for 7 years or more. This is not optional: it is required by anti-money laundering and consumer lending laws.

**Applicant data without customer relationship:** Declined applicants do not benefit from being Latitude customers but remain in the database as long as regulatory retention requires. They bear the breach risk without the benefit.

**Cross-system data aggregation:** A single application may result in data stored in origination, identity verification, credit decisioning, and document storage systems. A service provider with access to one system type may be able to reach others through the same access pathway.

**Difficulty of data minimisation:** Consumer finance firms face a genuine tension between the minimum retention required by regulators and the minimum retention that limits breach exposure. These two minimums are not the same.

The practical recommendation is not to violate regulatory retention requirements but to implement the technical controls that limit access to the retained data, and to engage with regulators on whether the data categories required to be retained can be stored in a less exploitable form (hashed document numbers rather than full numbers, for example).

---

## Lessons and Recommendations

**Treat service provider access as a privileged access management problem.** Service provider accounts with access to production systems should be provisioned through the same privileged access management controls as internal privileged accounts: just-in-time access, time-limited sessions, MFA, session recording, and scope restriction to the specific systems required.

**Audit and reduce the scope of service provider access.** Conduct a review of every service provider with access to production systems. For each, confirm the operational purpose of the access and the systems it reaches. Remove access to systems that the operational purpose does not require.

**Implement cross-system behavioural monitoring.** An attacker moving laterally across multiple systems within a short period creates a behavioural signature that is invisible to single-system monitoring but detectable by correlated analysis. SIEM rules that detect a single identity accessing an unusual breadth of systems within a session should be standard.

**Engage regulators on data format minimisation.** Work with the financial regulator to confirm whether identity verification obligations can be satisfied by retaining a cryptographic hash of identity document numbers rather than the full number. A hash that confirms identity document validity without storing the document number cannot be exploited in the same way.

**Implement a breach response plan specifically for the declined-applicant population.** When a consumer finance firm experiences a breach, a large proportion of the affected population may not know they hold a relationship with the company. Communications planning must address how to reach individuals who applied but did not become customers.

---

## Assessment Framework for Consumer Finance Firms

The ITGC controls most directly implicated in this incident map to the following audit testing areas:

- Service provider access provisioning, scope, and MFA enforcement
- Third-party access pathway segmentation from customer data systems
- Cross-system behavioural monitoring and SIEM correlation rules
- Data retention policy compliance and minimisation opportunities
- Privileged access management extension to service provider accounts

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
