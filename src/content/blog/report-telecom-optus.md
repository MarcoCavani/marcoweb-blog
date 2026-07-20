---
title: "Telecom Incident Report: The Optus Breach and the Unauthenticated API That Exposed 9.8 Million Australians"
description: "In September 2022, an unauthenticated API endpoint allowed an attacker to systematically enumerate and download the personal records of 9.8 million current and former Optus customers. This report examines the architectural failure, the identity document exposure it created, and what the telecommunications sector's data obligations mean for ITGC controls."
pubDate: 2026-08-04
heroImage: "/images/report-telecom-optus.svg"
category: "Digital Report"
industry: "Telecommunications"
author: "Marco Cavani"
tags: ["Telecommunications", "Optus", "API Security", "Identity Theft", "Data Breach", "Incident Report"]
readTime: "9 min read"
---

## Executive Summary

In September 2022, Optus, Australia's second-largest telecommunications provider, disclosed a data breach affecting approximately 9.8 million current and former customers. The attacker had accessed an API endpoint that was accessible from the public internet without requiring authentication. The endpoint returned customer personal records in response to sequential identifier queries, allowing systematic enumeration and extraction of the customer database.

The breach exposed names, dates of birth, phone numbers, email addresses, physical addresses, and, for a large portion of customers, identity document numbers including passport numbers and driver's licence numbers. The identity document exposure is what distinguishes the Optus breach from other large-scale data breaches: identity documents cannot be changed, making the exposure of this data a permanent risk for affected individuals.

Optus disclosed the breach on 22 September 2022. The attacker published a sample of 10,200 records and subsequently demanded payment to suppress the full dataset. Optus declined to engage. The attacker deleted the data and posted an apology, suggesting they may have underestimated the attention the breach would attract.

---

## Incident Overview

**Date:** September 2022

**Organisation:** Optus (SingTel subsidiary; Australia's second-largest telco by subscribers)

**Customers affected:** Approximately 9.8 million current and former customers

**Data exposed:** Names, dates of birth, phone numbers, email addresses, physical addresses, and identity document numbers (passport and driver's licence) for approximately 2.8 million customers

**Attack vector:** Unauthenticated public API endpoint with sequential customer identifiers

**Regulatory outcome:** OAIC investigation opened; Australian Communications and Media Authority (ACMA) investigation; privacy law reform accelerated in response to this breach and the Medibank breach

**Financial impact:** Optus offered to fund replacement of affected passports and driver's licences; costs estimated at AUD $140 million; CEO resigned in the aftermath

---

## Technical Analysis: What Happened

The breach was enabled by an API endpoint that:

1. Was accessible from the public internet without requiring authentication
2. Accepted sequential customer identifiers as query parameters
3. Returned full customer records, including identity document data, in response to valid identifier queries
4. Did not implement rate limiting that would have prevented automated enumeration

An attacker who discovered this endpoint could write a simple script to iterate through customer IDs (1, 2, 3... N), collect the returned records, and build a comprehensive customer database without requiring any credentials or sophisticated attack tooling.

**Why this endpoint existed in this state is itself a governance question.** Public-facing APIs that return sensitive personal data are a high-risk component of a customer-facing system. Their authentication requirements, access controls, and security configuration should be subject to specific review processes, penetration testing, and ongoing monitoring.

The Optus API appears to have been a legacy or test environment endpoint that had retained a public-facing configuration when it should have been restricted to authenticated internal use or decommissioned. This is a configuration drift risk: an endpoint that was once appropriate in its context but whose context changed without the configuration being updated.

---

## The Identity Document Problem

The distinctive risk in the Optus breach was not the volume of records but the nature of the data: identity documents.

Telcos in Australia are required by the Telecommunications (Service Provider) Determination 2020 to verify customer identity before connecting a mobile service. This regulatory requirement drives telcos to collect and retain identity document numbers: passport numbers, driver's licence numbers, and Medicare numbers.

When these numbers are exposed in a data breach, the harm is categorically different from the exposure of email addresses or even financial account numbers:

**Identity documents cannot be changed.** If your credit card number is stolen, the card can be cancelled and a new one issued. Your passport number and driver's licence number are associated with you permanently or for an extended period. If they are known to criminals, that knowledge persists through the replacement of the document.

**They enable identity fraud at a high level.** Combining a name, date of birth, address, phone number, and identity document number provides a sophisticated identity fraud capability: the ability to open accounts, apply for credit, and conduct financial transactions in the victim's name.

**The scale creates lasting systemic risk.** 2.8 million Australians whose identity document numbers were exposed represent a persistent pool of fraud risk that existed for years after the breach.

The Australian government responded by accelerating reforms to restrict telcos' data retention obligations, with proposals to reduce the period for which identity verification data must be retained and to prohibit retention of full document numbers where partial data is sufficient for verification.

---

## ITGC Control Failures

**API Authentication Controls:** The fundamental control failure was an API endpoint accessible without authentication. No sensitive data API should be publicly accessible without requiring authentication. Authentication requirements for APIs must be verified as part of the development and release process and confirmed in penetration testing.

**Security Architecture Review of Public-Facing APIs:** APIs that expose customer data to external callers require specific security architecture review. The review should confirm authentication requirements, rate limiting, authorisation scoping (what data each authenticated caller can access), and logging. An API development and deployment process that does not include this review for customer data APIs is structurally insufficient.

**Penetration Testing Coverage:** Regular penetration testing of public-facing systems should have identified an unauthenticated API endpoint returning customer personal data. If penetration testing was conducted and did not identify this endpoint, the scope was insufficient. If penetration testing had not been conducted on this endpoint, the testing program had a coverage gap.

**API Rate Limiting:** Even if authentication could not be immediately implemented, rate limiting that restricted an individual source IP to a small number of queries per unit time would have slowed enumeration dramatically. A legitimate user needs to query one or a small number of records; an attacker enumerating 9.8 million records will make millions of sequential requests.

**Data Minimisation for Regulatory Retention:** Optus was required by regulation to collect identity document information. However, the requirement to collect does not necessarily require retaining the full document number for the life of the customer relationship and beyond. A review of the minimum data necessary to comply with identity verification obligations, and the implementation of appropriate retention periods, reduces the scope of future exposures.

---

## Sector Implications: Telcos as Identity Custodians

The Optus breach illustrates a structural tension in the telecommunications sector that is not unique to Australia: telcos are required by regulation to verify customer identity, making them mandatory custodians of some of the most sensitive personal data categories. This obligation is imposed by governments concerned about prepaid SIM fraud, terrorist financing, and money laundering.

The security implications of this obligation are significant:

**Telcos hold data they did not choose to hold.** The regulatory KYC requirement compels telcos to collect and retain data that represents a high-value breach target. The regulatory obligation and the security risk are in tension.

**Former customers' data is retained for regulatory periods.** Optus's breach affected 9.8 million customers, including a significant number of former customers whose relationships with Optus had ended years before the breach. They remained in the database because of regulatory retention requirements.

**SIM swapping fraud is the secondary exploitation vector.** Beyond direct identity fraud, the data exposed in the Optus breach could be used to execute SIM swap attacks: convincing Optus customer service to transfer a victim's phone number to a SIM card controlled by the attacker, enabling two-factor authentication bypass for the victim's financial accounts.

---

## Lessons and Recommendations

**Audit every public-facing API endpoint for authentication requirements.** Conduct a complete inventory of all APIs accessible from the public internet. Confirm that each requires authentication. An unauthenticated public API that returns personal data is a critical finding requiring immediate remediation.

**Include API security in penetration testing scope explicitly.** Penetration testing engagements should specify API enumeration and authentication bypass testing as explicit in-scope activities. "We tested the website" is not the same as "we tested all public-facing APIs."

**Implement rate limiting on all customer data APIs.** Rate limiting is a baseline control for any API. It does not prevent a determined attacker with distributed sources, but it dramatically increases the time and cost of enumeration.

**Review and minimise regulatory data retention.** Engage with regulators on the minimum data retention requirements and the format in which data can be retained. If verification of a passport number can be confirmed by storing a hash rather than the full number, storing the hash achieves the regulatory purpose with a fraction of the breach risk.

**Prepare for identity document replacement obligations.** A telco that holds identity documents for millions of customers should, as part of its breach response planning, assess the cost and logistics of funding identity document replacement for affected customers. The Optus breach, where the company committed to funding passport replacements, set a precedent.

---

## Assessment Framework for Telecommunications Providers

The ITGC controls most directly implicated in this incident map to the following audit testing areas:

- API inventory and authentication controls review
- Penetration testing scope coverage for public-facing APIs
- Rate limiting and anomaly detection on customer data APIs
- Data retention policy compliance for regulatory identity verification data
- Configuration management for legacy and test environment endpoints

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
