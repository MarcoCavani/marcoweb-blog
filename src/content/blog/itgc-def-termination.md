---
title: "Five Months After He Left Cisco, He Deleted 16,000 WebEx Accounts"
description: "A former Cisco engineer's cloud application access was never revoked after his resignation. Five months later, he logged in to AWS and deleted virtual machines serving 16,000 WebEx Teams customers. Application termination controls are not optional. They are the last line of defence against the access you forgot to close."
pubDate: 2026-08-21
heroImage: "/images/itgc-def-termination.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Application Termination", "ITGC", "Access Revocation", "Cisco Breach", "Offboarding", "Cloud Security", "IT Audit"]
readTime: "7 min read"
---

In September 2018, Sudhish Kasaba Ramesh resigned from Cisco Systems. He had worked as an engineer and had access to Cisco's cloud infrastructure, including the AWS environment that supported Cisco's WebEx Teams collaboration platform.

When Ramesh resigned, his access to Cisco's corporate network was revoked. His email was disabled. Standard offboarding procedures were followed for the corporate IT environment.

What was not revoked was his access to a specific cloud environment used for deployment and development purposes. This access had been provisioned separately from his corporate credentials and was not captured by the standard termination checklist.

Five months after his resignation, in December 2018, Ramesh used his retained cloud credentials to access Cisco's AWS environment. He deployed code that deleted virtual machines supporting WebEx Teams. Approximately 16,000 WebEx Teams accounts were unable to access the service for up to two weeks. Cisco incurred over USD $2.4 million in costs to respond to the incident and compensate affected customers.

Ramesh was charged, pleaded guilty, and was sentenced to 24 months in federal prison and ordered to pay USD $1.4 million in restitution.

The termination process had worked. It had just not worked for this application.

---

## The Risk

Application Termination controls for Groups D, E, and F extend the general principles of access revocation to the specific challenge of revoking access across finance, payroll, HR, ERP, and key business application environments, including cloud-hosted systems that may have access managed independently of the corporate directory.

The termination risk in application environments has several dimensions:

**Siloed access management:** Many organisations manage access to finance, payroll, and ERP applications through application-specific user management that is separate from Active Directory. Disabling a user's AD account does not automatically disable their SAP, Oracle, Workday, or ADP access. Each application requires separate action.

**Cloud environment separation:** As the Cisco case illustrates, cloud environments with independently managed access credentials (AWS IAM users, Azure service principals, GCP service accounts) may not be captured in standard termination checklists that focus on on-premises systems.

**Contractor and consultant access:** Third-party users provisioned with application access for specific projects or engagements are frequently omitted from standard termination processes, which are HR-driven and focused on employees. Contractor access that is not time-limited or actively managed can persist indefinitely.

**Long-term employee accumulated access:** Employees who change roles retain access accumulated in previous roles. When they eventually leave, their accumulated application access is broader than their most recent role would suggest, and a checklist focused on current role may miss legacy access.

The Cisco case is notable precisely because the standard termination process was followed and the gap still existed. This is the defining risk: not the cases where termination is ignored, but the cases where it is performed correctly for known systems and fails for one that was not on the list.

---

## The Cisco Case in Detail

Ramesh's access to the AWS environment used for WebEx Teams development was provisioned separately from his corporate Cisco credentials. It is likely that this access was established through an AWS IAM user account or similar cloud credential that was not linked to the corporate identity management system.

The termination workflow at Cisco captured his corporate access (email, VPN, internal systems) but did not have visibility into the separately managed cloud environment access. This is not unusual. Cloud environments provisioned during product development, particularly those that pre-date formal cloud access management programs, frequently have access credentials that are not enumerated in the corporate user directory.

When Ramesh accessed the environment five months after his departure, he used credentials that had never been revoked. The access logs confirmed both his identity and the specific actions he took: deploying code that deleted virtual machine instances hosting the WebEx Teams application.

The investigation was ultimately straightforward because cloud audit logs (AWS CloudTrail) captured the authentication and API calls with attribution. The failure was not in detection or investigation; it was in the access revocation that should have occurred five months earlier.

Cisco's remediation included a review of all cloud environment access credentials to identify individuals who had departed but retained access, and the implementation of a more comprehensive termination checklist that included cloud environment access.

---

## What Failed

**Incomplete application access inventory:** Cisco's termination process did not have a complete inventory of all systems and environments to which a departing employee might hold credentials. Cloud environments with independently managed access were not captured.

**No cloud IAM alignment with corporate identity:** The AWS IAM credentials were not linked to the corporate directory in a way that would trigger automatic revocation on account disable. Cloud access management independent of the corporate IDP creates termination blind spots.

**Contractor-style separate credentials:** Cloud environment access provisioned for developers and engineers through cloud-native credentials, rather than through federated identity, creates access that is invisible to standard offboarding processes.

**No periodic access inventory reconciliation:** Even if the termination process was incomplete, a periodic reconciliation of all cloud IAM access against current HR records would have identified Ramesh's retained credentials within days or weeks of his departure, rather than allowing them to persist for five months.

---

## What Good Looks Like

**Complete application access inventory:** The termination checklist includes every application, cloud environment, and service to which the user held credentials. This inventory is maintained as part of the joiner-mover-leaver process and updated whenever new applications are added.

**Federated identity for all application access:** Finance, payroll, ERP, and cloud application access is provisioned through the corporate identity provider (Entra ID, Okta, or equivalent) using federation (SAML, OIDC). When the corporate account is disabled, federated access to all connected applications is automatically revoked.

**Cloud IAM integrated with corporate IDP:** Cloud platforms are configured to require authentication through the corporate identity provider. Cloud-native IAM users and access keys issued to individuals are prohibited or subject to enhanced monitoring and lifecycle management.

**Time-limited contractor access:** All contractor and third-party access to applications is provisioned with an expiry date aligned to the contract end date. Expiry is enforced technically, not by a manual reminder.

**Quarterly orphan access review:** Every quarter, the list of active application users across all in-scope systems is compared against current HR and contractor records. Accounts not matching current personnel are disabled pending investigation.

---

## How Auditors Test It

When auditing Application Termination for Groups D, E, and F, an IT auditor will typically:

**Extract active user lists from key applications:** For finance, payroll, ERP, and cloud management consoles, extract the full list of active users. Compare against current HR records. Identify accounts belonging to individuals who have departed.

**Test the termination SLA:** For a sample of leavers during the period, trace the termination date (from HR) to the application access disable date for each in-scope application. Calculate the gap. Flag gaps exceeding the defined SLA.

**Assess the termination checklist completeness:** Request the offboarding checklist. Confirm that all in-scope applications, including cloud environments, are listed. Gaps in the checklist represent uncontrolled termination risk.

**Test cloud IAM revocation:** For cloud environments, confirm that access is managed through the corporate identity provider (federation) rather than through individually managed cloud-native credentials. Test whether disabling a corporate account also revokes cloud platform access.

**Assess contractor access management:** Request a list of active contractor accounts across key applications. For each, confirm an active contract and a defined access expiry date. Contractors without expiry dates are a finding.

**Test periodic orphan account review:** Request evidence that a periodic review of application access against HR records is conducted. Confirm the frequency and assess the completeness of the most recent review.

---

## Lessons and Recommendations

The Cisco case is the argument that application termination is not complete until every application is checked, including ones that are not on the standard list. Undiscovered access does not expire on its own.

**Enumerate all application access at employee onboarding.** Every application access right granted should be recorded at the time of provisioning. The accumulation of that record creates the termination checklist for the individual. This is the principle behind identity governance platforms.

**Federate everything.** Every application that accepts federated authentication should be integrated with the corporate identity provider. This single step converts termination from a multi-step checklist into a single action with cascading effect.

**Prohibit individual cloud-native credentials.** AWS IAM users, Azure service principals, and GCP service accounts tied to named individuals are termination liabilities. All individual cloud access should be through federation. Machine access should use role-based credentials with automated rotation.

**Conduct a cloud access audit immediately.** If your organisation has not recently reconciled all cloud IAM access against current personnel, do it now. The probability of finding retained access for former employees is high.

**Define a maximum access-open window.** If access is not revoked within a defined maximum period (commonly 48 hours for all departures, immediate for involuntary departures), the incident must be escalated and investigated.

---

## Assess Your Application Termination Controls

The MarcoWeb ITGC Tool covers Application Termination across Groups D, E, and F, with structured assessment templates for checklist completeness, SLA testing, and cloud access reconciliation.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
