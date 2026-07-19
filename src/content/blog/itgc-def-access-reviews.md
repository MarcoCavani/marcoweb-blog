---
title: "The Access That Nobody Reviewed: How Accumulated Entitlement Becomes Fraud Risk"
description: "Application access reviews are the periodic process of certifying that every active user in a finance, payroll, or ERP system still needs the access they have. When reviews are skipped, rubber-stamped, or incomplete, former employees retain access, role creep accumulates, and segregation of duties violations persist undetected."
pubDate: 2027-01-10
heroImage: "/images/itgc-def-access-reviews.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Application Access Reviews", "ITGC", "User Certification", "Segregation of Duties", "ERP Access", "IT Audit"]
readTime: "7 min read"
---

In 2019, the Australian Prudential Regulation Authority released its review of the Commonwealth Bank of Australia's governance, culture, accountability, and remuneration following a sustained period of regulatory failures across the bank's operations.

One of the APRA review's findings relevant to access control was the extent to which operational staff had accumulated access entitlements over time that were broader than their current roles required. The review identified that user access reviews had in some cases been completed in a perfunctory manner, with managers certifying access without adequate review of what that access entailed.

The finding was not unique to CBA. Access certification reviews that are completed as an administrative exercise rather than a genuine assurance activity are a pervasive control weakness in organisations of every size.

The consequences of ineffective access reviews in finance and ERP environments include: former employees who retain application access months after departure; current employees who hold access from previous roles in addition to their current role, creating segregation of duties violations; and privileged access that was granted for a specific task and never revoked.

---

## The Risk

Application Access Reviews for Groups D, E, and F are the periodic process by which the owners and approvers of finance, payroll, HR, and ERP application access certify that each active user still requires the access they hold, that their access is appropriate for their current role, and that segregation of duties requirements are being maintained.

Without effective access reviews, the following risks accumulate over time:

**Orphan accounts:** Users who have left the organisation but whose application accounts were not disabled at the time of departure retain active access. A terminated employee who retains SAP access for six months after their last day represents six months of uncontrolled access risk.

**Role creep:** Employees who change roles within the organisation retain access from previous roles in addition to the access they are provisioned with in their new role. Over time, a user who has held three different positions may hold the accumulated access of all three, none of which individually creates a problem but which in combination creates segregation of duties violations.

**Privileged access retention:** Access granted temporarily for a specific project or task (emergency access, project access, administrator access) is not revoked when the project or task is complete. Temporary access that is never revoked becomes permanent.

**Rubber-stamp certification:** Managers who certify user access without reviewing the specific entitlements being certified provide no assurance value. A review that is completed in seconds by a manager who receives a list of names and clicks "approve" without reading the access details is not a control.

**SoD violations:** Segregation of duties violations that arise from role accumulation or incorrect provisioning persist until the next access review. If reviews are infrequent or ineffective, SoD violations can persist for extended periods.

---

## The Role Accumulation Problem in ERP Environments

Role accumulation is the defining access review challenge in SAP, Oracle, and similar ERP environments. It occurs because:

**User provisioning is additive:** When a user changes roles, the common practice is to add new access without removing old access. This requires less effort at the time of the role change (no investigation into what to remove) but creates accumulation over time.

**Managers approve provisioning, not deprovisioning:** The approval workflow for adding access is well-defined. The process for removing access when a role changes is frequently less structured, relying on the manager to identify what should be removed without a systematic process.

**ERP role combinations create SoD violations:** An SAP role that allows creating vendors combined with a role that allows processing payments creates a segregation of duties violation (one person can both create a fictitious vendor and pay it). These combinations arise through role accumulation, not through any individual incorrect provisioning decision.

**Access reviews are the primary detection mechanism:** Without periodic access reviews that specifically assess role combinations for SoD violations, accumulated role creep creating SoD violations may not be detected until an audit or a fraud investigation.

The practical consequence was illustrated in the Wirecard case (covered in the Group C access reviews post): accumulated and unchecked access in finance applications contributed to the ability of insiders to manipulate financial records over an extended period without detection.

---

## What Failed

**Infrequent reviews:** Access reviews that occur less than quarterly in high-risk application environments allow role accumulation, SoD violations, and orphan accounts to persist for extended periods.

**Incomplete review scope:** Reviews that cover some users but not others (e.g., reviewing named employees but not service accounts, contractors, or privileged users) provide incomplete assurance.

**No SoD overlay:** Reviews that confirm user-to-role mapping without assessing whether any user holds a combination of roles that creates a SoD violation miss the most consequential access control issue.

**Rubber-stamp completion:** Managers who certify access without reviewing the specific entitlements have not performed a control. An access review completed in seconds is not evidence of a control.

**No remediation tracking:** Reviews that identify findings (orphan accounts, excessive access, SoD violations) but do not track remediation to completion produce a log of problems that are never fixed.

---

## What Good Looks Like

**Quarterly access reviews for all users in high-risk applications:** Finance, payroll, and ERP application access is reviewed at least quarterly. Each review cycle covers all active users, including employees, contractors, service accounts, and privileged accounts.

**SoD conflict detection integrated into the review:** The access review process includes SoD conflict detection that identifies role combinations creating segregation violations. Reviewers are not expected to detect SoD issues manually.

**Role-level detail presented to reviewers:** Managers certifying access receive a description of each role their team member holds, not just a user name. Certification requires confirmation that the specific access is still required for the user's current function.

**Mandatory remediation within a defined period:** Access identified for removal in a review cycle is removed within a defined period (typically 30 days). Remediation is tracked and overdue items are escalated.

**Recertification triggered by role changes:** Access reviews are not limited to periodic cycles. A role change triggers an immediate review of the user's access to identify any access from the prior role that should be removed.

---

## How Auditors Test It

When auditing Application Access Reviews for Groups D, E, and F, an IT auditor will typically:

**Confirm review frequency and completion:** Request evidence of the most recent access review cycle for key applications. Confirm that the review was completed within the defined period. Confirm that all active users were included, including service accounts and privileged users.

**Test review quality:** For a sample of users included in the review, compare the access the reviewer certified against the user's current role. Identify cases where access certified as appropriate does not align with the user's current function.

**Test for orphan accounts:** Extract the current user list from key applications. Compare against current HR records. Identify users who have departed since the most recent review and whose accounts remain active. Flag the gap.

**Test SoD detection:** For key applications, confirm that the access review process includes SoD conflict detection. Obtain the SoD conflict matrix and confirm that it covers the highest-risk role combinations for the application.

**Assess remediation tracking:** For findings identified in the most recent review cycle, confirm that remediation actions were completed within the defined period. Calculate the percentage of findings that were remediated on time.

**Test recertification triggers:** For a sample of employees who changed roles during the audit period, confirm that a review of their access was triggered at the time of the role change. Identify cases where role changes occurred without access review.

---

## Lessons and Recommendations

Access reviews in ERP environments are rarely the most visible control. They are also rarely the most engaging task for business managers. Both of these factors contribute to reviews that are completed as a compliance exercise rather than a genuine assurance activity.

**Make it impossible to rubber-stamp.** A review interface that requires a manager to open and confirm the specific description of each role being certified takes longer but produces genuine assurance. Time-stamped completion data that reveals a manager certified 200 access rights in 90 seconds is evidence of a non-functioning control.

**Automate SoD conflict detection.** Manual identification of SoD conflicts from role lists is unreliable. Access governance tools that compare role assignments against an SoD conflict matrix automate the detection process and make conflicts visible without requiring reviewer expertise.

**Treat role changes as access review triggers.** The period of highest SoD and role accumulation risk is immediately after a role change. A process that does not review and clean up access at the time of role change allows violations to persist until the next quarterly cycle.

**Define and enforce remediation SLAs.** A review that identifies 50 access exceptions and remediates 40 percent of them by the next cycle is not a control. Define a remediation period and track completion. Overdue remediations are open risk.

**Review contractors separately.** Contractor access often falls outside employee-focused review processes. Contractors who have completed their engagement but whose accounts remain active are orphan accounts. Include them explicitly in every review cycle.

---

## Assess Your Application Access Review Controls

The MarcoWeb ITGC Tool covers Application Access Reviews across Groups D, E, and F, with structured assessment templates for review completeness, SoD detection, and remediation tracking.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
