---
title: "SOC 2 for a SaaS Provider: The Report Your Customers Ask For"
seoTitle: "SOC 2 for SaaS: Trust Services Criteria"
description: "For a SaaS company, a SOC 2 is the report a serious customer wants before they trust you with their data. Here is what the Trust Services Criteria actually mean, how SOC 2 differs from SOC 1, and how to read one properly."
pubDate: 2026-07-30
heroImage: "/images/soc-2-saas-provider-trust-services.png"
category: "IT Audit"
author: "Marco Cavani"
tags: ["SOC 2", "SaaS", "Trust Services Criteria", "Assurance", "Cloud", "Security", "ITGC", "Vendor Risk"]
readTime: "8 min read"
youtubeId: "sPDTYkR6cAc"
---

Sell software as a service for long enough and the same question starts arriving in every enterprise deal: *"Can we see your SOC 2?"* For a SaaS provider it has become the default proof that you can be trusted with a customer's data, the report that unblocks procurement and shortens the security questionnaire. It is also widely misunderstood, treated as a badge to display rather than an opinion to read. This article is about what a SOC 2 actually says, how it differs from the SOC 1 covered earlier, and how both a provider and its customers should treat it.

---

## What a SOC 2 report is

A SOC 2 is an independent auditor's report on a service organisation's controls, measured against the AICPA's **Trust Services Criteria (TSC)** (AICPA, 2017). Where a SOC 1 is about controls relevant to a customer's **financial reporting**, a SOC 2 is about the controls that protect the **data and systems** a customer entrusts to the provider. For most SaaS companies, that is the report that matters.

As with SOC 1, there are two types, and the distinction is the same:

- **Type I** assesses whether controls are suitably designed at a point in time.
- **Type II** tests whether they operated effectively across a period, typically three to twelve months.

And, as with SOC 1, only a Type II is real assurance. A customer trusting you with their data for years is not reassured by a snapshot of how your controls looked on one day; they want evidence they worked over time.

---

## SOC 1 or SOC 2: which, and when

The two reports are constantly confused, so it is worth being blunt about the split. A **SOC 1** covers controls relevant to the customer's financial reporting, useful when your platform processes transactions that flow into their books. A **SOC 2** covers security and related qualities of the service itself, useful when customers are trusting you with sensitive data and want comfort it is protected.

Many SaaS providers need one or the other; some need both. A payments or payroll platform might issue a SOC 1 for the financial-processing controls and a SOC 2 for the security around them. The test is simple: if the question is *"does this affect our financial statements,"* it is SOC 1 territory; if it is *"is our data safe with them,"* it is SOC 2.

---

## The five Trust Services Criteria

A SOC 2 is built on up to five criteria, and understanding them is the key to reading the report, because a SOC 2 only covers the ones in its scope.

- **Security** (the common criteria) is **mandatory** in every SOC 2. It covers protection against unauthorised access, physical and logical, and includes the access, change and operations controls that underpin everything else. If a SOC 2 covers nothing else, it covers this.
- **Availability** addresses whether the system is available for operation and use as agreed, backups, resilience, disaster recovery, monitoring. Customers who depend on uptime look for this.
- **Processing Integrity** addresses whether the system processes data completely, accurately and in a timely, authorised way, relevant where the service transforms or calculates data.
- **Confidentiality** addresses the protection of information designated as confidential, encryption, access restriction, retention and disposal.
- **Privacy** addresses the handling of personal information against the provider's privacy notice and criteria, the collection, use, retention and disposal of personal data.

Security is always present; the other four are included only if the provider chooses and the auditor tests them. This is why the **scope** of a SOC 2 matters as much as its existence: a report covering only Security tells a customer nothing about the availability they may be relying on.

> A SOC 2 is not a trophy. It is a Type II over the right criteria, read for its scope and its exceptions, or it tells the customer nothing.

---

## How a customer should read a vendor's SOC 2

For a customer evaluating a SaaS provider, the report is only useful if it is read, not merely collected. The questions that matter:

1. **Type II, over what period?** Confirm it tests operating effectiveness, and that the period is recent and continuous, not a stale report with a gap since.
2. **Which criteria are in scope?** Check that the criteria you care about, availability if you depend on uptime, confidentiality if you are handing over sensitive data, are actually covered, not just Security.
3. **What are the exceptions?** Read the auditor's noted deviations. A report with exceptions honestly described and remediated can be more reassuring than a suspiciously clean one; what matters is what they were and what was done.
4. **What are your complementary user entity controls?** Every SOC 2 lists the controls the customer must perform for the provider's to work, managing your own users, configuring the service securely. The provider's assurance is only complete if you do your part.
5. **What about their subservice providers?** A SaaS provider almost always runs on a cloud platform, itself a subservice organisation carved out of the report. Read the cloud provider's SOC 2 alongside, and check there is no gap between them.

A customer who works through these has done real vendor due diligence. One who files the PDF unread has a document, not assurance.

---

## For the provider: what earning a SOC 2 takes

From the other side of the table, a SOC 2 is not a certificate you buy; it is an audit you must be ready for. Behind a clean Type II sits a functioning control environment: **IT general controls** that actually operate, least-privilege access with prompt deprovisioning, disciplined change management, monitored operations and tested backups, plus documented policies and, above all, the **evidence** that all of it happened consistently across the whole period. Providers who treat SOC 2 as a year-round operating standard pass comfortably; those who scramble to assemble evidence in the final month tend to earn the exceptions they were trying to avoid. The report, in the end, only reflects how the business was already run.

---

## Conclusion

For a SaaS provider a SOC 2 is the currency of trust: the report that lets a cautious enterprise hand over its data. But its value depends entirely on how it is treated. Read as a badge, it is meaningless; read as an opinion, a Type II over the criteria that matter, its exceptions understood, its subservice cloud provider followed through, and its complementary controls performed, it is genuine, transferable assurance. Earning one is not about the document; it is about running the controls the document reports on, every day of the period, so that when the customer finally asks to see your SOC 2, the honest answer is yes, and it holds up when they read it.

---

## References

- AICPA. (2017). *Trust Services Criteria for Security, Availability, Processing Integrity, Confidentiality, and Privacy*. American Institute of Certified Public Accountants.
- AICPA. (2016). *Statement on Standards for Attestation Engagements No. 18 (SSAE 18)*. American Institute of Certified Public Accountants.
- Cloud Security Alliance. (2021). *Cloud Controls Matrix and Shared Responsibility Model*. CSA.
