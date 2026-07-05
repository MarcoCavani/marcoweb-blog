---
title: "Wirecard's Fraud Required Access That Nobody Ever Challenged"
description: "The EUR 1.9 billion Wirecard fraud was one of the largest accounting scandals in German corporate history. The employees who maintained the fraudulent records had access to financial systems that was never reviewed, never challenged, and never revoked. Access reviews are the periodic question: should this person still have this access?"
pubDate: 2026-11-08
heroImage: "/images/itgc-c6-access-reviews.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Access Reviews", "ITGC", "User Access Review", "Wirecard", "Recertification", "IT Audit"]
readTime: "8 min read"
---

Wirecard AG was a German payment processing company that was, for a period, valued at over EUR 24 billion, placing it among the largest financial technology companies in Europe. In June 2020, Wirecard disclosed that approximately EUR 1.9 billion supposedly held in escrow accounts in the Philippines did not exist. The escrow accounts themselves did not exist. The money had never existed.

Wirecard filed for insolvency within days. Chief Executive Officer Markus Braun was arrested. Chief Operating Officer Jan Marsalek fled, and is believed to be a Russian intelligence asset living under FSB protection. Several other executives and employees were charged. The statutory auditor, EY, faced significant scrutiny for missing the fraud over nine years of audits.

Among the many control failures that enabled the fraud, a critical and underexamined one was access: the employees responsible for creating and maintaining the fraudulent accounts and transaction records had access to financial systems that were never subjected to meaningful review. Nobody in the governance structure was systematically asking, year after year, whether the right people had access to the systems holding the accounts that were, unbeknownst to most of Wirecard, fabricated.

Access reviews do not prevent fraud by themselves. But they are the periodic, systematic mechanism by which access that should not exist, or that exists in a combination that enables fraud, is identified and challenged. Their absence is always significant.

---

## The Risk

Access Reviews (also known as user access recertification or periodic access certification) are the process by which access rights granted to users are periodically validated against current business need. The review asks: does this person still need this access? Is the level of access still appropriate? Has the user's role changed since access was granted?

Without periodic access reviews:

**Access accumulates silently.** Users who move roles, take on new responsibilities, or work on temporary projects accumulate access that is never systematically cleaned up. Over time, individual users may have access to systems that span multiple sensitive functions.

**Segregation of duties violations go undetected.** A user who has access to both create and approve financial transactions, or both manage user accounts and administer the audit log, represents a segregation of duties failure. These violations may be invisible unless access is periodically mapped against SoD policies.

**Former employees' ghost accounts persist.** Even with a formal termination process, users who left through informal channels, contractors whose engagements ended informally, or accounts created for temporary purposes may remain active indefinitely.

**Access enables fraud.** In the Wirecard context, the employees maintaining fraudulent records had access to the systems that held those records. An access review that identified the combination of access those users held, and challenged whether it was appropriate for their stated roles, would have been a relevant detective control.

---

## The Wirecard Access Control Environment

The Wirecard fraud operated through a web of opaque subsidiaries, third-party payment processors described as "third-party acquiring partners," and escrow accounts at banks in the Philippines that, under forensic examination, could not be confirmed to exist. The fraud was sustained by a small group of senior employees with the access and authority to create, modify, and confirm records that purported to show the existence of significant balances.

The access those individuals held was consistent with their roles within Wirecard's operational hierarchy. Their titles and job descriptions gave them apparent business justification for the access they used to maintain the fraud. The problem was that the access was never reviewed in a way that asked the substantive question: given the combination of access this individual holds across these systems, is there an appropriate segregation of duties, and is the access consistent with the organisation's internal controls framework?

EY's audits relied on confirmations from banks that, in several cases, were later found to have been forged or non-existent. An access review program that identified that specific individuals held the combination of access needed to generate and confirm those records, without compensating controls, would have been a signal worth investigating.

The Wirecard collapse resulted in criminal charges against multiple executives, regulatory reform of Germany's BaFin financial supervisory authority, and significant litigation against EY. The fraud had operated, undetected by external audit, for at least nine years.

---

## What Failed

**No substantive access review program:** Wirecard's internal control environment, as later reviewed by forensic specialists, did not include an effective program for periodically reviewing and certifying user access against role definitions and SoD requirements.

**Segregation of duties not enforced:** The employees maintaining fraudulent records held combinations of access that allowed them to both create and confirm financial data without independent oversight. SoD enforcement is one of the primary objectives of a robust access review.

**Access driven by senior authority:** Where a senior executive or manager has the ability to approve access for subordinates, and the access review program does not include independent challenge of senior access, the review process has a critical gap.

**No automated SoD analysis:** Identifying access that creates SoD conflicts requires systematic analysis of access rights across multiple systems. Without tooling to perform this analysis, manual reviews miss cross-system conflicts.

---

## What Good Looks Like

**Defined review frequency and scope:** Access reviews occur at defined intervals, at least annually for all users, and quarterly for users with access to sensitive or financial systems. Privileged users are reviewed quarterly as a minimum.

**Manager-led certification:** Access reviews are completed by the user's direct manager, who is best placed to assess whether the access is still required for the role. IT or security teams facilitate the review but do not certify access they are not responsible for.

**Segregation of duties analysis:** Access reviews include automated SoD conflict analysis, mapping each user's access combinations against the organisation's SoD policy. Conflicts are escalated for resolution. Accepted conflicts require documented compensating controls.

**Evidence-based decisions:** Review outcomes are documented. Each access item is either certified (confirmed as appropriate) or revoked (removed). A record of who certified what, and when, provides an audit trail.

**Automated recertification reminders and escalation:** Managers who do not complete access reviews within the defined period are escalated to their manager. Access that has not been certified within the maximum review period is automatically revoked.

**Actions taken and verified:** Following a review, access identified for revocation is promptly removed by IT. A post-review verification confirms that revocations were completed.

---

## How Auditors Test It

When auditing Access Reviews (Control C.6), an IT auditor will typically:

**Request evidence of access reviews conducted during the period:** Confirm that reviews were completed for in-scope systems within the defined frequency. Assess whether the review covered all user types (employees, contractors, service accounts) and all relevant access levels.

**Test review completeness:** For a sample of in-scope systems, confirm that all active users were included in the review. Identify users who were not included. Assess whether the exclusion was documented and justified.

**Test follow-up actions:** For a sample of access items identified for revocation during the review, confirm that revocation was completed within the defined timeframe. Gap between review outcome and revocation execution is a common finding.

**Assess segregation of duties:** Request the SoD conflict matrix used in the review process. For a sample of users, test whether any hold access that creates a conflict per the SoD policy. Assess whether conflicts were identified in the review and how they were resolved.

**Test certification quality:** Access reviews that are completed in minutes, or where all access is certified without any revocations, are indicators of rubber-stamp reviews. Assess the rate of revocations and the quality of manager engagement.

**Compare pre-review and post-review access:** For a sample of users who had access revoked during the review period, confirm that their access was actually removed from the relevant systems. Review without enforcement is a process that generates false assurance.

---

## Lessons and Recommendations

The Wirecard fraud illustrates a broader principle: access reviews are not just a compliance checkbox. They are the periodic examination of whether access rights, which always drift toward accumulation and excess, remain appropriate and consistent with internal controls objectives.

**Review access at least annually, more often for sensitive systems.** An annual review of access to financial systems is the minimum. Quarterly reviews for accounts with access to controls-sensitive functions (financial processing, audit log management, user administration) are appropriate.

**Require certifier accountability.** Managers who certify access must understand that they are attesting to the appropriateness of that access. Certification should not be a rubber stamp. Training, metrics on revocation rates, and escalation for non-completion create the accountability that makes reviews meaningful.

**Automate SoD conflict detection.** Manual review of cross-system access combinations is impractical at scale. SoD analysis tooling, integrated with your identity governance platform, identifies conflicts systematically and reliably.

**Treat rubber-stamp reviews as a finding.** A review where every item is certified without any revocations is not evidence of good access hygiene. It is evidence that the review is not being conducted with appropriate rigour.

**Close the loop on revocations.** A review that identifies access for removal but does not track whether removal occurred has incomplete assurance value. Verify revocations as part of the review process.

---

## Assess Your Access Review Controls

The MarcoWeb ITGC Tool covers Access Reviews as part of the Group C control set, with structured assessment templates for review completeness, SoD analysis, and revocation tracking.

[Open the ITGC Audit Tool](https://marcoweb-itgc-saas.netlify.app/)
