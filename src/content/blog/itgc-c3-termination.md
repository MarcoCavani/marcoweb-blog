---
title: "He Was Fired on a Friday. His Credentials Still Worked on Monday."
description: "Christopher Dobbins was terminated by Stradis Healthcare and used retained credentials to delete thousands of records needed to ship personal protective equipment during a global pandemic. Access termination is not an HR process. It is a security control."
pubDate: 2026-10-18
heroImage: "/images/itgc-c3-termination.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Termination", "ITGC", "Access Revocation", "Insider Threat", "Offboarding", "IT Audit"]
readTime: "8 min read"
---

In May 2020, Christopher Dobbins, a former vice president of information technology at Stradis Healthcare, a medical device packing and distribution company, was sentenced to two years in federal prison.

Dobbins had been terminated by Stradis in November 2019. The termination process did not include immediate revocation of his system access. In the weeks following his termination, Dobbins accessed Stradis's network and planted malicious scripts designed to delete and corrupt records in the company's ERP system. The scripts executed weeks later, in early 2020, destroying over 115,000 records at a moment when Stradis was supplying personal protective equipment at the onset of the COVID-19 pandemic.

The destruction of records disrupted Stradis's ability to process orders and coordinate shipments of medical equipment at a time of national emergency. The company's operations were severely impaired. The United States Department of Justice prosecuted Dobbins under the Computer Fraud and Abuse Act.

His access was not revoked at termination. That single failure enabled everything that followed.

---

## The Risk

Access Termination controls govern the process by which an employee's access to systems, data, and facilities is revoked when they leave the organisation, whether through resignation, redundancy, dismissal, or any other departure.

The risk is asymmetric. The cost of revoking access promptly is negligible. The cost of failing to do so can range from a regulatory fine to, as Dobbins demonstrated, a criminal incident affecting public health.

The specific risks of inadequate access termination include:

**Deliberate sabotage:** Terminated employees, particularly those who leave involuntarily, have the motivation and, where access is retained, the means to harm the organisation.

**Data theft:** Former employees who retain access can exfiltrate confidential data, client lists, financial records, or intellectual property for personal gain or competitive advantage.

**Credential reuse:** Retained credentials may be shared with others or sold. A former employee's credentials circulating on criminal forums give unknown third parties a pathway into the environment with a trusted identity.

**Compliance failure:** Most data protection and financial regulations require that access be revoked promptly on departure. Retained access following termination is a regulatory finding in its own right, independent of whether it was misused.

The timing dimension matters. Access retained for even 24 hours after termination is a material risk window, particularly for disgruntled employees or those with pre-planned intent.

---

## The Stradis Healthcare Attack

Dobbins was Vice President of Information Technology. His role gave him broad, privileged access to Stradis's systems, including the ERP system that managed order processing and distribution logistics. When Stradis terminated his employment in November 2019, the offboarding process did not include immediate disabling of his network access credentials.

Over the following weeks, Dobbins accessed the company's network using his retained credentials. He created a secondary account under a false name to conceal his identity and activity. He then planted SQL scripts designed to delete records from the ERP system, timed to execute weeks after his access activities, creating distance between his termination and the visible damage.

When the scripts executed in February and March 2020, Stradis discovered that over 115,000 records had been deleted or corrupted. At this point, Stradis was receiving urgent orders for medical gowns and packaging from hospitals and healthcare providers responding to the pandemic. The destroyed records created chaos in the company's ability to process and fulfil those orders.

Forensic investigation traced the activity to Dobbins through server logs that captured his original and secondary account activity. He was arrested in March 2020 and subsequently convicted.

The investigation would have been significantly more difficult, and the damage may not have occurred at all, had access been revoked on the day of termination.

---

## What Failed

**No same-day access revocation:** Dobbins retained his original credentials for weeks after termination. This is the primary failure. Access revocation should occur on the day of, or immediately before, termination notification.

**No offboarding checklist with IT action:** An effective offboarding process requires a documented, signed-off checklist that includes explicit IT actions: Active Directory account disabled, VPN access revoked, email disabled, all application access revoked. Without this process, access revocation is informal and inconsistent.

**No monitoring for post-termination access:** Had the organisation been monitoring for access attempts from terminated accounts, Dobbins's initial access attempts following his termination would have generated alerts. In many termination cases, the first indication of a problem would be a former employee's credentials being used after departure.

**No detection of secondary account creation:** Dobbins created a secondary account under a false identity. User account creation, particularly by a privileged user, should trigger approval workflow or at minimum an alert for review. The creation of an account with a name inconsistent with any HR record is a red flag.

---

## What Good Looks Like

**Same-day revocation process:** When an employee is terminated, IT receives notification on the same day, before or simultaneous with the employee being informed. Access is revoked before the employee leaves the building. In sensitive cases, access is revoked before the termination conversation.

**Termination checklist:** An offboarding checklist covers every access category: Active Directory account, VPN, email, cloud platforms, SaaS applications, physical access, and any other system-specific access. The checklist is completed and signed off by IT within 24 hours.

**Privileged account immediate revocation:** For users with privileged access (system administrators, DBAs, cloud administrators), immediate revocation is non-negotiable. The risk profile of privileged accounts makes any delay unacceptable.

**Post-termination access monitoring:** For a defined period following termination (commonly 30 days), any access attempt using the terminated account's credentials generates an alert. This catches credential reuse and retained session tokens.

**Long-term user leaver audit:** Periodic comparison of the active user directory against current HR records identifies accounts belonging to former employees that were not properly terminated. This catches departures that bypassed the formal termination process.

---

## How Auditors Test It

When auditing Termination (Control C.3), an IT auditor will typically:

**Test the leaver process for a sample of terminated users:** For employees who left during the audit period, obtain the date of termination from HR. Confirm the date on which their Active Directory account was disabled. Calculate the gap. Best practice is same-day; anything beyond 24 to 48 hours requires explanation.

**Test access revocation in key systems:** For the same sample of leavers, check access in key applications beyond Active Directory. VPN, cloud platforms, and business applications are commonly overlooked in termination processes.

**Compare HR and active user records:** Run the complete list of active user accounts against the current HR employee list. Any active account not matching a current employee requires investigation. This is one of the highest-yield tests in IT audit.

**Test privileged account termination:** Specifically test whether privileged accounts (admin, root, DBA) for terminated users were disabled with appropriate urgency. Any privileged account remaining active after the user's departure is a critical finding.

**Assess the termination checklist:** Request evidence that a documented termination checklist exists and is completed for each leaver. Assess coverage across all system access types.

**Review the HR-to-IT notification process:** Understand how HR communicates terminations to IT. Gaps in this process, such as HR sending a weekly termination list rather than immediate notification, create risk windows.

---

## Lessons and Recommendations

The Stradis Healthcare case is a definitive example of a high-probability, high-impact risk that is entirely preventable. Access termination is not a complex control. It requires a clear process, clear accountability, and execution discipline.

**Treat access revocation as a same-day requirement, not a best effort.** For involuntary terminations, revoke access before or simultaneous with the termination conversation. For voluntary resignations, revoke on the last working day or earlier in high-risk cases.

**Automate where possible.** Many identity and access management platforms can be integrated with HR systems to trigger automatic account disable when an employee is marked as terminated in the HR system. Automation removes human error and delay.

**Never overlook application access.** Active Directory account disable does not automatically revoke access to every application. Applications with independent user stores, legacy systems, and SaaS platforms require separate revocation steps. The checklist must cover all of them.

**Log post-termination access attempts.** This is a lightweight control that provides high-value forensic evidence. A former employee's credentials being used after departure is an immediate alert.

**Conduct quarterly orphan account reviews.** Every quarter, compare active system accounts against current HR records. Orphaned accounts, those belonging to former employees, represent both a security risk and a compliance finding.

---

## Assess Your Termination Controls

The MarcoWeb ITGC Tool covers Access Termination as part of the Group C control set, with structured assessment templates for leaver testing, checklist review, and HR-to-IT notification.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
