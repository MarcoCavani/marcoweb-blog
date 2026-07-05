---
title: "The Equifax Breach Was On the Risk Register: The IT Risk Management Failure Nobody Talks About"
description: "Equifax knew about the Apache Struts vulnerability. A patch existed. The risk was real and documented. The breach happened anyway. That is the definitive case for why IT Risk Management is an audit control, not a planning exercise."
pubDate: 2026-07-26
heroImage: "/images/itgc-a3-it-risk-management.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["IT Risk Management", "ITGC", "Risk Register", "Equifax", "Vulnerability Management", "IT Audit"]
readTime: "8 min read"
---

On 9 March 2017, the Apache Software Foundation disclosed a critical vulnerability in Apache Struts: CVE-2017-5638. A patch was released the same day. The vulnerability allowed remote code execution. Every organisation running Struts was at risk.

Equifax, one of the three largest credit reporting agencies in the United States, received a notification from the US Department of Homeland Security. They distributed the alert internally. The responsible team identified that the vulnerability existed in a consumer dispute portal. A scan was run. Due to a misconfiguration in the scanning tool, the vulnerable system was not detected.

The risk existed. It was flagged. The response failed. On 13 May 2017, attackers began exploiting the vulnerability. The breach continued for 78 days before Equifax detected it. By then, the personal data of 148 million Americans had been exfiltrated, including Social Security numbers, birth dates, addresses, and driver's licence numbers.

The breach was not the result of a sophisticated zero-day attack. It was the result of a known vulnerability and a broken risk management process.

---

## The Risk

IT Risk Management is the discipline of systematically identifying, assessing, treating, and monitoring IT-related risks to the organisation. It is not a one-time exercise or a compliance checkbox. It is an ongoing process that creates accountability for risk at every level of the organisation.

The core components are:

**Risk identification:** Cataloguing IT risks from all relevant sources, including vulnerability disclosures, threat intelligence, audit findings, industry incidents, and internal control assessments.

**Risk assessment:** Evaluating the likelihood and potential impact of each identified risk. Risk owners are assigned. Risk ratings are calculated.

**Risk treatment:** Deciding how each risk will be addressed. Treatment options include mitigate (implement controls), accept (document and monitor), transfer (insurance or contract), or avoid (cease the risky activity).

**Risk monitoring:** Tracking the status of treatment plans, reassessing risks as the environment changes, and reporting the risk position to leadership.

Without this structure, organisations do not know which risks they face, which are being managed, and which are being silently ignored. Equifax did not lack a risk management process. They lacked a risk management process that worked.

---

## The Equifax Case in Detail

The Equifax breach illustrates every major failure mode in IT Risk Management:

**Risk identification failure:** The internal DHS notification process worked, but the subsequent scanning process failed to identify the vulnerable system. When the scan returned no results, the risk was de facto closed. There was no compensating verification or manual review.

**Treatment plan failure:** Even where risks were identified, there was no system enforcing treatment within defined timeframes. The patch existed. Nobody was accountable for confirming it had been applied to every relevant system within an acceptable window.

**Monitoring failure:** The breach ran for 78 days. Equifax's security monitoring tools were capable of detecting the exfiltration; however, an SSL inspection certificate had expired in January 2017 and had not been renewed, meaning encrypted traffic was not being inspected. A monitoring failure compounded the initial risk management failure.

**Reporting failure:** There is no evidence that the unpatched critical vulnerability was escalated to executive or board level with appropriate urgency. Had it been, resources may have been allocated to verify the scan results manually.

**Governance failure:** Equifax's IT and security governance did not include effective mechanisms to chase open risk items to closure. Vulnerability remediation was treated as an operational task, not a risk management obligation.

The US Federal Trade Commission, Consumer Financial Protection Bureau, and 50 state attorneys general collectively settled with Equifax for USD $575 million in 2019, with up to USD $700 million total across consumer relief and civil penalties.

---

## What Good Looks Like

**Structured risk register:** A central IT risk register captures all identified risks with risk ID, description, category, likelihood rating, impact rating, inherent risk score, treatment status, risk owner, treatment plan, treatment deadline, and residual risk score after controls.

**Risk ownership:** Every risk has a named owner, typically a business or IT manager with accountability for ensuring treatment is implemented and maintained. Risk owners are not the risk team. Risk ownership is distributed.

**Timely treatment:** Treatment plans have defined deadlines aligned to risk rating. A Critical risk might require treatment within 30 days. A High risk within 90 days. A Medium risk within 180 days. These SLAs are monitored and reported.

**Periodic reassessment:** Risks are reviewed at least quarterly by the risk team and annually by a broader governance body. New risks are added when identified. Closed risks are evidenced.

**Board reporting:** The risk register is summarised into a risk dashboard that reaches the board or audit committee. Material risks are reported with status, treatment plan, and any escalation required.

**Integration with other controls:** IT risk management is connected to vulnerability management, audit findings, and incident learnings. An identified vulnerability becomes a risk register entry. A closed audit finding is removed from the register. An incident triggers a review.

---

## How Auditors Test It

When auditing IT Risk Management (Control A.3), an IT auditor will typically:

**Request the IT risk register** for the period under review. Assess whether the register is current, complete, and structured with all required fields including risk owner, rating, treatment plan, and deadline.

**Test risk owner assignment:** Confirm that each material risk has a named owner. Confirm the owner is aware of their responsibilities (interview or documentation review).

**Test treatment plan status for a sample of risks:** For a selection of risks rated High or Critical during the period, trace the treatment plan to evidence of completion. Assess whether treatment was completed within the defined timeframe.

**Assess risk monitoring:** Request evidence of periodic risk register reviews. Board or committee minutes referencing IT risk reporting are strong evidence. Risk reporting packs provided to leadership demonstrate that monitoring is embedded in the governance calendar.

**Test the linkage between vulnerability management and risk management:** Select a sample of high-severity vulnerabilities identified during the period. Confirm each was captured in the risk register, assigned a risk owner, and treated within the expected window.

**Assess completeness:** Review audit findings and significant incidents from the period. Confirm that items not yet remediated appear in the risk register.

---

## Lessons and Recommendations

The Equifax breach is studied in security programs and boardrooms globally. Its core lesson is simple: identifying a risk and managing a risk are not the same thing.

**Scan results are not proof of absence.** When a vulnerability scan returns no results for a known exposure, investigate why. Do not accept absence of evidence as evidence of absence.

**Patch deadlines must be enforced, not requested.** Risk treatment plans are only as effective as the accountability structures behind them. Deadlines without consequences are suggestions.

**SSL inspection certificates are infrastructure.** Any component of your monitoring capability that has an expiry date must be managed with the same rigour as a firewall rule or access control. Equifax's 78-day visibility gap was caused by a lapsed certificate.

**Risk management must be visible to leadership.** If a critical vulnerability notification reaches a technical team but never surfaces to an executive or board in a form that creates accountability, the risk management process has broken down.

**Treat IT risk management as a continuous process.** Risk registers that are built once and reviewed annually do not reflect the threat landscape. The risk profile changes every month. Review cycles must match the velocity of change.

---

## Assess Your IT Risk Management Controls

The MarcoWeb ITGC Tool covers IT Risk Management as part of the Group A control set, with structured templates for risk register assessment, treatment plan verification, and board reporting adequacy.

[Open the ITGC Audit Tool](https://marcoweb-itgc-saas.netlify.app/)
