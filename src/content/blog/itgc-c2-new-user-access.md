---
title: "Access From Day One: Why New User Provisioning Is a Security Decision, Not an IT Task"
description: "The moment a new user is granted access is the moment risk enters the system. Overprovisioning at onboarding is one of the most common and most consequential access control failures in modern organisations. Here is what it looks like, why it happens, and how auditors test it."
pubDate: 2026-10-11
heroImage: "/images/itgc-c2-new-user-access.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["New User Access", "ITGC", "Access Provisioning", "Least Privilege", "Identity Management", "IT Audit"]
readTime: "8 min read"
---

When a new employee joins an organisation, someone decides what systems they can access. In many organisations, that decision is made by whoever processes the IT request, based on a brief email from HR or a phone call from a manager. The new employee's access is modelled on the person they are replacing, or a colleague in a similar role, or whatever seems reasonable at the time.

Within days, the new employee has access to financial systems, HR records, project management tools, shared drives, and network resources that may have nothing to do with their role. Over months, they accumulate more access as they need it for specific tasks. Nobody systematically reviews what they have been given.

This pattern is the defining feature of the new user access provisioning failure that auditors encounter in almost every organisation that has not implemented a formal access management program. It is not a technical failure. It is a governance failure that manifests as a technical consequence.

---

## The Risk

New User Access provisioning governs how a user's access to systems and data is established when they join the organisation or change roles. The risk is straightforward: access granted beyond what a user needs for their role creates unnecessary exposure.

The principle of least privilege (PoLP) requires that every user be granted the minimum access necessary to perform their job functions, and no more. In practice:

**Overprovisioning creates insider threat opportunities.** A user with access to systems beyond their role can exploit that access, either maliciously or inadvertently. Most insider breaches begin with legitimate access that was broader than it needed to be.

**Overprovisioned accounts are higher-value targets for external attackers.** A compromised credential belonging to a user with access to financial records, customer data, and HR systems is more dangerous than a credential belonging to a user with narrowly scoped access.

**Access granted without approval is access without accountability.** If access is provisioned without documented business justification and manager approval, there is no baseline against which to review or challenge it.

**Copying access from existing users replicates their accumulated access.** When new users are provisioned by copying an existing user's profile, they inherit every access right that user has accumulated over their tenure, including rights that may have been granted for temporary purposes or no longer reflect the role.

---

## The Anthem Breach: Overprovisioned Access at Scale

In February 2015, Anthem Inc., one of the largest health insurers in the United States, disclosed a breach that exposed the personal information of approximately 78.8 million individuals, including names, Social Security numbers, medical IDs, addresses, employment information, and income data.

The initial intrusion occurred through a phishing email sent to an employee with database administrator privileges. Once the attacker compromised that account, they had access to Anthem's data warehouse containing records spanning nearly all of Anthem's members and employees.

The critical access control failure was the scope of access that the compromised account carried. A database administrator account used by a single employee had query access to a data warehouse containing tens of millions of records with no need for the role to access that breadth of data. The provisioning of that access was not reviewed against a least privilege standard.

Access provisioned for database administration purposes, which legitimately requires broad access to database schema and configuration, should not have included unrestricted read access to production member data. Role-based access controls that separated administrative functions from data access would have significantly limited the breach scope.

Anthem paid USD $115 million to settle a class action lawsuit. The US Department of Health and Human Services Office for Civil Rights subsequently investigated and reached a settlement requiring comprehensive HIPAA remediation including access management reforms.

---

## What Failed

**No least privilege standard at provisioning:** Database administrator access was provisioned at a level that reflected operational convenience rather than the minimum required for the role. The scope of access to member data was not validated against the job function.

**No separation of administrative and data access:** In properly designed database environments, administrative access (to manage database structure, users, and performance) is separated from data access (to read production records). Combining both in a single account creates a high-risk profile.

**No formal approval process:** Access provisioning that does not require documented manager approval, with explicit business justification, cannot be verified by auditors or challenged by reviewers.

**Copycat provisioning:** Where new users receive access by copying an existing user's profile, they inherit accumulated access that may have grown beyond what the role requires.

---

## What Good Looks Like

**Role-based access model:** Access rights are defined at the role level, not the individual level. A role called "Finance Analyst" has a defined set of permissions appropriate to that function. When a new user joins in that role, they receive exactly those permissions, no more.

**Formal access request and approval:** Access provisioning requires a completed access request form, approved by the new user's direct manager. The request specifies the role, the systems required, and the business justification. IT provisions access based on the approval, not verbal instruction.

**Documented provisioning procedure:** The provisioning process is documented and repeatable. IT knows exactly what access to grant for each defined role, and the process does not rely on individual judgment about what seems reasonable.

**Separation of sensitive functions:** Access to systems containing sensitive data (financial records, HR data, customer information) is provisioned separately from general IT access. Each requires specific business justification.

**No copycat provisioning:** When a new user's access is modelled on an existing user, the existing user's access is reviewed first for appropriateness before it is used as a provisioning template.

**Joiner-Mover-Leaver process:** A formal process governs access changes at each of these lifecycle events. Access is provisioned on join, reviewed and updated on internal move, and revoked on leave.

---

## How Auditors Test It

When auditing New User Access (Control C.2), an IT auditor will typically:

**Test the provisioning process for a sample of new starters:** For users who joined during the audit period, request evidence of the access request and manager approval. Confirm that access provisioned matches what was approved. Identify gaps where provisioning occurred without documented approval.

**Test for overprovisioning:** For a sample of users, compare the access they hold against the documented access rights for their role. Identify access beyond the role definition and assess whether additional access has documented approval.

**Test the joiner notification process:** Confirm that HR notifies IT promptly when a new employee starts, and that access is provisioned only after start date. Access provisioned before employment begins is a finding.

**Assess the role-based access model:** Request documentation of the organisation's role definitions and associated access rights. Assess whether roles are defined at an appropriate level of granularity for least privilege.

**Test copycat provisioning:** Identify instances where a new user's access was provisioned by copying an existing user. Review the existing user's access profile against the role definition to assess whether the template access was appropriate.

**Assess separation of duties:** For sensitive functions (financial processing, database administration, payroll), confirm that access provisioning does not create combinations of access that violate segregation of duties principles.

---

## Lessons and Recommendations

Overprovisioned access is the rule rather than the exception in organisations without a formal access management program. It is easy to accumulate, invisible until something goes wrong, and expensive to remediate at scale.

**Define roles before provisioning.** The role definition is the specification for access. Building the role catalogue is foundational work, but it pays dividends throughout the access lifecycle.

**Require manager approval for every access request, in writing.** Manager approval creates accountability, forces a least-privilege decision, and provides the evidence base for access reviews and audits.

**Never provision access by copying another user.** The source user's accumulated access is not a role definition. Create a provisioning template for each role and use that.

**Separate administrative access from data access.** Database administrators, system administrators, and cloud platform administrators should not automatically have read access to production data as part of their administrative role.

**Validate provisioned access at 90 days.** New starters often accumulate additional access in their first months as they encounter systems they need. A 90-day access review for new starters identifies overprovisioning before it becomes entrenched.

---

## Assess Your New User Access Controls

The MarcoWeb ITGC Tool covers New User Access as part of the Group C control set, with structured templates for provisioning process assessment and least privilege testing.

[Open the ITGC Audit Tool](https://marcoweb-itgc-saas.netlify.app/)
