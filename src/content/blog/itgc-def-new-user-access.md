---
title: "When HR Access Enables Tax Fraud: The UPMC Insider Breach"
description: "At UPMC, the personal data of 62,000 employees was stolen through the HR and payroll system by an insider with excessive access. The data was used to file fraudulent tax returns. Application new user access controls determine who reaches what, and whether that combination can be used for harm."
pubDate: 2026-11-22
heroImage: "/images/itgc-def-new-user-access.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Application New User Access", "ITGC", "HR System", "UPMC Breach", "Payroll Security", "IT Audit"]
readTime: "7 min read"
---

In 2014, the personal and financial information of approximately 62,000 employees of UPMC (University of Pittsburgh Medical Center) was stolen from the organisation's HR and payroll system. The stolen data included Social Security numbers, names, addresses, salaries, and bank account information. The breach was used to file approximately 788 fraudulent federal income tax returns, generating approximately USD $2.2 million in fraudulent refunds.

The breach was investigated by the FBI and was ultimately attributed to an insider with access to the HR and payroll application. The case raised significant questions about how the organisation had provisioned access to its HR platform: who had access, what they could view, and whether that access had been reviewed against the principle of least privilege.

Payroll and HR systems are among the most sensitive applications in any organisation. They hold data that, in the wrong hands, directly enables financial fraud, identity theft, and targeted social engineering against employees. The way access to these systems is provisioned at onboarding, and the specificity with which that access is scoped, determines whether a single compromised or malicious user can reach data belonging to every employee in the organisation.

---

## The Risk

New User Access provisioning for finance, payroll, and HR applications (Groups D, E, and F) extends the general principles of least privilege provisioning discussed in Control C.2 into the specific context of high-risk business applications.

The risk profile for these applications is elevated for several reasons:

**Data sensitivity:** Payroll and HR applications contain the most sensitive employee data: salary, tax identifiers, bank details, health information, and employment history. Finance applications contain payment details, customer account information, and financial records that support reporting.

**Transaction authority:** These applications are not read-only repositories. Authorised users can initiate payroll runs, create purchase orders, approve invoices, and execute payments. Access that is broader than the role requires creates the potential for financial manipulation.

**Aggregation risk:** In many ERP and HR platforms, a user with read access to the full employee database can export all records. Even read-only access that is insufficiently scoped creates significant data exfiltration risk.

**Role complexity:** ERP and payroll systems have complex, granular role structures (SAP transactions, Oracle responsibilities, Workday security groups). Provisioning these roles correctly requires role definitions that are maintained and understood, not rules-of-thumb or copying.

---

## The UPMC Case

The UPMC HR and payroll system was accessed by an insider who had been granted access in the course of their role. The specific access that enabled the breach was the ability to view and export employee personal and financial data across the full UPMC employee population, rather than access scoped to the users' own records or a defined subset.

The data extracted included Social Security numbers and bank details sufficient to file fraudulent tax returns and, in some cases, redirect payroll deposits. Both capabilities point to an access scope that was significantly broader than any legitimate operational role would require.

In organisations that have implemented least-privilege provisioning in their HR applications, access to employee salary and banking details is typically restricted to a small number of payroll administrators whose role specifically requires it. Access to the full employee dataset is further restricted to HR managers with a documented business need. Read-only access to personal identification information (Social Security numbers, tax identifiers) is treated as particularly sensitive and subject to additional access controls.

UPMC faced class action litigation from affected employees and regulatory scrutiny. The case was significant in establishing legal precedents around employer obligations to protect employee data stored in HR systems.

---

## What Good Looks Like

**Role-based provisioning tied to job function:** Application access roles are defined at the granularity of specific job functions, not broad categories. A payroll administrator who processes pay runs does not automatically need read access to all employee records. A compensation analyst does not need access to payment processing.

**View-only versus transact access:** Applications that support it should use separate roles for read access and transactional access. A user who needs to view employee data for reporting does not need the same role as someone who can modify that data.

**Restriction of high-sensitivity fields:** Modern HRIS platforms (Workday, SuccessFactors, Oracle HCM) support field-level security that restricts visibility of specific data fields (salary, bank account details, tax identifiers) to named roles. Field-level restrictions reduce aggregation risk even for users who have general access to employee records.

**Formal approval for sensitive access:** Access to any HR or payroll role that includes personal financial information (SSN, bank details, salary) requires explicit manager approval and, for the most sensitive roles, a second approver at the HR leadership level.

**Access restricted to the user's own population:** Where operationally feasible, access is scoped to the organisational units the user is responsible for. An HR business partner for one region does not need access to employee records in all other regions.

**Periodic review of high-sensitivity roles:** Users with access to sensitive payroll and HR data are subject to more frequent access reviews (quarterly) than the annual standard, given the elevated risk profile.

---

## How Auditors Test It

When auditing Application New User Access for Groups D, E, and F, an IT auditor will typically:

**Map in-scope application roles to job functions:** Request the role catalogue for the key finance, payroll, and HR applications. For each role, confirm that a documented business justification exists and that the role's permissions are consistent with least privilege for the associated function.

**Test provisioning for a sample of new users:** For users onboarded to the finance or HR application during the period, request evidence of the access request and manager approval. Confirm that provisioned roles match approved roles.

**Test for overprovisioned access:** For a sample of active users in sensitive applications, compare their provisioned roles against the documented role definition for their position. Identify users with roles beyond their defined function.

**Assess sensitive field access:** For HR platforms that support field-level security, confirm that access to sensitive fields (Social Security numbers, bank details, salary) is restricted to roles with documented business need. Test by attempting to view those fields using a general access role.

**Assess contractor and temporary access:** Contractors and temporary staff frequently receive the same application access as permanent employees without the same scrutiny. Test whether temporary users are provisioned with appropriate time-limited access and whether that access is revoked when the engagement ends.

**Review export and download capabilities:** Many HR and finance applications allow users to export data to spreadsheets. Confirm that export capability is restricted to roles with a documented business need for bulk data access.

---

## Lessons and Recommendations

The UPMC breach illustrates a specific risk in HR systems that is underestimated: the aggregation risk created by broad read access. An employee who can view and export the full employee population's personal and financial data has, from the perspective of data security, a capability that should be classified as sensitive and provisioned accordingly.

**Scope HR application access to the user's population.** A national HR administrator does not need global access if their role is regional. Scoping access to the relevant population is a simple, effective control.

**Restrict sensitive field visibility at the application layer.** ERP and HRIS platforms with field-level security are designed specifically for this. Use it. Pay stubs and bank details should not be visible to all users with any HR role.

**Treat HR data as equivalent in sensitivity to financial data.** Many organisations classify financial data as highly sensitive but treat HR data as less sensitive. The UPMC case and a decade of subsequent HR data breaches demonstrate that this classification is incorrect.

**Audit export activity.** Application logs should capture data export events. A user who exports 62,000 employee records is performing an anomalous action relative to their role. This should generate a SIEM alert or a daily export audit.

**Require dual approval for the most sensitive HR roles.** Roles that provide access to the full employee financial dataset should require HR leadership approval in addition to direct manager approval.

---

## Assess Your Application New User Access Controls

The MarcoWeb ITGC Tool covers Application New User Access across Groups D, E, and F, with structured assessment templates for role definitions, provisioning approval, and sensitive field access.

[Open the ITGC Audit Tool](https://marcoweb-itgc-saas.netlify.app/)
