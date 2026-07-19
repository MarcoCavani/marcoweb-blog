---
title: "The Vendor in Your Network: Why Third Party Management Is an ITGC Control"
description: "Attackers do not always break through your front door. Sometimes they walk in through a vendor's access. The Target breach is the textbook case, and the lessons still apply a decade later."
pubDate: 2026-07-19
heroImage: "/images/itgc-a2-third-party-management.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Third Party Management", "ITGC", "Vendor Risk", "Supply Chain Security", "Target Breach", "IT Audit"]
readTime: "8 min read"
youtubeId: "Lia7MdPMFPo"
---

In November 2013, attackers entered one of the largest retail networks in the United States through a heating, ventilation and air conditioning contractor. Fazio Mechanical Services had network access to Target Corporation for remote monitoring of refrigeration units. That access became the entry point for a breach that exposed 40 million credit card numbers and the personal data of 70 million customers.

The HVAC contractor was not careless. Target was not negligent in any obvious way. The failure was systemic: a third party had been granted network access without adequate segmentation, monitoring, or ongoing oversight. That is a Third Party Management failure, and it is exactly what Control A.2 in the ITGC framework is designed to prevent.

---

## The Risk

Every vendor with access to your systems is a potential attack surface. This includes cloud service providers, managed service providers, IT support contractors, payroll processors, software vendors with remote access, and any other third party that connects to, stores, or processes data on your behalf.

The risk is threefold:

**Direct access risk:** A vendor with legitimate network access can become a pathway for an attacker who compromises the vendor's credentials or systems.

**Data custody risk:** Vendors who hold your data are subject to their own security posture. If they experience a breach, your data is exposed.

**Concentration risk:** Over-reliance on a single vendor creates single points of failure. If that vendor is disrupted, your operations may be unable to continue.

Without a formal Third Party Management program, organisations cannot answer basic questions auditors will ask: which vendors have access, what can they access, when was their security last assessed, and what contractual obligations protect you if they fail?

---

## The Target Breach

Fazio Mechanical Services received email credentials to Target's vendor portal, which provided access to a limited portion of Target's network for invoice submission and HVAC monitoring. Attackers, believed to be affiliated with a Ukrainian cybercrime group, sent a phishing email to Fazio employees and obtained those credentials.

Using Fazio's access, the attackers entered Target's network. Because network segmentation between the vendor management system and the point-of-sale network was inadequate, they were able to move laterally to the payment card environment. Once there, they installed Citadel malware on Target's point-of-sale systems, harvesting card data as it was processed in memory.

Target's security monitoring systems detected the anomalous activity. Alerts were generated. The security team, which had grown to include a sophisticated toolset including FireEye, received those alerts. They were not actioned. The breach continued for three weeks before an external party notified Target.

The total cost to Target exceeded USD $200 million in settlements, fines, legal costs, and remediation. The CEO and CIO resigned.

---

## What Failed

**No vendor risk tiering:** Fazio Mechanical was treated as a routine vendor. The access they were granted was not assessed against the risk profile of what that access enabled. An HVAC contractor was given a pathway into a payment card network.

**No network segmentation:** Target's internal network did not adequately isolate the vendor management zone from production systems. A vendor connection should land in a DMZ, not in an environment with lateral paths to sensitive systems.

**No ongoing vendor monitoring:** Fazio's security posture was not assessed at onboarding or monitored during the relationship. Their phishing susceptibility and endpoint security were unknown to Target.

**Contractual gaps:** Target's vendor agreements did not contain sufficiently specific security requirements for third parties with network access.

**Alert fatigue:** Target's FireEye system did alert. The organisation had failed to establish an effective process for triaging and responding to those alerts, which is itself a governance failure.

---

## What Good Looks Like

**Vendor register:** A complete, current register of all third parties with access to systems, data, or facilities. Each entry records the nature of the relationship, data accessed, access method, and risk classification.

**Risk tiering:** Vendors are classified by risk. A cloud provider processing payroll data is Tier 1 (critical). An office supply vendor with no system access is Tier 3. Assessment depth and frequency scale with tier.

**Security assessment:** Tier 1 and Tier 2 vendors complete a security questionnaire at onboarding and annually. High-risk vendors may require independent certification such as SOC 2 Type II or ISO 27001.

**Contractual requirements:** Vendor contracts include security schedules specifying minimum controls, breach notification obligations, audit rights, and data handling requirements aligned to applicable regulations (Privacy Act, GDPR, etc.).

**Access provisioning:** Third party access is provisioned on the principle of least privilege. Vendors access only what they need, through a dedicated network segment, with time-limited credentials where feasible.

**Ongoing monitoring:** Vendor access logs are reviewed periodically. Contracts are renewed with updated security assessments. Vendor risk is included in the organisation's risk register.

---

## How Auditors Test It

When auditing Third Party Management (Control A.2), an IT auditor will typically:

**Obtain the vendor register** and assess completeness. Trace a sample of vendors against known contracts and system access records. Identify vendors not captured.

**Assess risk tiering methodology:** Review the framework used to classify vendors. Confirm that all vendors with system or data access have been classified. Assess whether classification criteria are appropriate (data sensitivity, access level, operational criticality).

**Test onboarding procedures for a sample of vendors:** Request evidence that security questionnaires were completed, assessed, and accepted before access was granted. For Tier 1 vendors, request evidence of certification review.

**Review contracts for a sample of vendors:** Assess whether security obligations, breach notification requirements, and audit rights are included. Note gaps.

**Test access provisioning:** For a sample of vendor accounts in the directory, verify that access aligns to what the vendor relationship requires. Test for accounts belonging to vendors whose contracts have expired.

**Assess monitoring:** Request evidence that vendor access logs are reviewed. Determine how often reviews occur and what happens when anomalous activity is identified.

---

## Lessons and Recommendations

Third party risk is not a procurement problem or an IT problem. It is an enterprise risk management problem that requires cross-functional ownership.

**Build and maintain a vendor register.** This is the foundation. Without a complete view of who has access and why, no assessment or monitoring program can function.

**Apply least privilege to all vendor access.** Vendors should access exactly what they need and nothing more. Critically, they should land in a dedicated network zone with no lateral paths to sensitive systems.

**Make security a contractual obligation.** If your contract does not require vendors to maintain specific controls, report incidents within defined timeframes, and cooperate with audits, you have no enforceable remedies when something goes wrong.

**Do not trust certification alone.** A SOC 2 report tells you controls existed at a point in time. It does not tell you whether those controls are relevant to your specific risk or whether they have been maintained since the report was issued.

**Treat fourth-party risk as your own.** The vendors who serve your vendors can expose you. In high-risk relationships, understand who your key vendors rely on.

---

## Assess Your Third Party Management Controls

The MarcoWeb ITGC Tool covers the full Group A control set including Third Party Management, with structured assessment templates and workpaper generation.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
