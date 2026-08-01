---
title: "SOC 1 for iGaming: Auditing the Financial Database in the Cloud"
seoTitle: "SOC 1 for iGaming: The Cloud Database"
description: "In an online gaming platform the financial truth lives in a database, and that database increasingly lives in the cloud on infrastructure the operator does not run. Here is how a SOC 1 gives assurance over it, and what an auditor actually tests."
pubDate: 2026-07-30
heroImage: "/images/soc-1-igaming-financial-assurance.png"
category: "IT Audit"
author: "Marco Cavani"
tags: ["SOC 1", "iGaming", "Cloud", "Database", "ISAE 3402", "SSAE 18", "ITGC", "Assurance"]
readTime: "8 min read"
youtubeId: "NjAOA05h0fs"
---

Strip away the graphics and the jackpots, and an iGaming platform is a financial-transaction engine. Every spin, deposit, withdrawal and bonus is a movement of money, and every one of those movements is recorded, reconciled and reported from one place: the **database**. Player balances, the transaction ledger, gross gaming revenue, bonus liabilities, that is the financial truth of the whole operation, and it sits in a set of tables.

Increasingly, those tables live in a **managed cloud database** the operator does not run: Amazon RDS or Aurora, Azure SQL Database, Google Cloud SQL. The financial data an operator's accounts are built on now resides on infrastructure it neither owns nor administers. **SOC 1** is the report that gives assurance over the controls around that database, and reading it well means knowing exactly what an auditor tests when the financial system of record is in the cloud.

---

## What a SOC 1 report actually covers

A SOC 1 is an independent auditor's opinion on the controls at a **service organisation** that are relevant to its clients' **internal control over financial reporting (ICFR)**. In the United States it is issued under the AICPA's **SSAE No. 18**; internationally the equivalent is the IAASB's **ISAE 3402** (AICPA, 2016; IAASB, 2011).

The word to hold onto is *financial*. A SOC 1 is not a general security certificate. Its remit is the controls that affect the accuracy and completeness of financial information processed on a client's behalf. Broader security, availability and privacy belong to a **SOC 2**, a separate report against different criteria.

Two types exist, and the difference matters:

- **Type I** assesses whether controls are *suitably designed* at a single point in time.
- **Type II** tests whether they *operated effectively* across a period, usually six to twelve months.

For a live database moving real player money, only a Type II is real assurance. A design opinion on one day tells you nothing about the eleven months you were not watching.

---

## Why the database is the centre of the finance scope

Few industries push more discrete financial transactions through their systems than online gaming, and in every case the transaction ends as a row in a database. Consider what the financial scope actually depends on at the data layer:

- **Player wallets and balances**, real customer money recorded to the cent and, in regulated markets, kept segregated from operating funds.
- **The transaction ledger**, every deposit, wager, payout and withdrawal, which must be complete and accurate.
- **Gross gaming revenue (GGR)**, the base for gaming duty, derived from millions of rows.
- **Bonus and jackpot liabilities**, genuine obligations calculated from the data.

An error, or an unauthorised change, at the database level does not stay a technical glitch. It becomes a misstated revenue figure, an under-provisioned liability, or a shortfall in segregated player funds, the kind of failure a regulator such as the UK Gambling Commission or the Malta Gaming Authority treats as licence-threatening (UKGC, 2023; MGA, 2022). Because the operator's own auditors cannot see inside a third-party platform's database, the SOC 1 is how they get comfort that the numbers coming out of it are trustworthy.

---

## Auditing the database when it lives in the cloud

Here is where the cloud changes the picture. A managed cloud database splits responsibility in two, and a SOC 1 has to be read with that split in mind. Under the **shared responsibility model**, the cloud provider secures the underlying infrastructure, the hardware, the hypervisor, the managed-service platform, while the operator or gaming platform remains responsible for its **data, its access, and its configuration** (AWS, 2023). Moving the database to the cloud outsources the plumbing; it does not outsource control over the financial data inside it.

So when the auditor examines the cloud database for a SOC 1, the scope clusters around the controls the platform still owns.

### Access: two planes, both controlled
A cloud database has two ways in, and both must be governed. The **data plane** is normal database access, who can connect and run queries against the wallet and revenue tables. The **control plane** is the cloud provider's own management layer (the IAM console and APIs) which can snapshot, restore, reconfigure, or delete the entire database without ever issuing a SQL statement. Least privilege, segregation of duties, multi-factor authentication, and prompt removal of leavers must apply to *both*. An auditor who checks database logins but ignores who holds cloud administrator rights has missed half the attack surface.

### Direct data changes: the cardinal financial risk
The single most important control at the data layer is the restriction of **direct changes to the data**. When a database administrator edits a wallet balance or a revenue figure directly, the change bypasses every input, processing and validation control the application would have applied. It is the gaming equivalent of reaching into the ledger with a pen. Direct data changes must be tightly restricted, and where genuinely necessary, authorised, logged, and independently reviewed. A SOC 1 that cannot demonstrate this control is not giving assurance over the numbers, it is hoping.

### Change management over schema and configuration
Changes to the database schema, its stored procedures, and its cloud configuration, parameter groups, network rules, encryption settings, must be authorised, tested and traceable. An unauthorised change to a payout calculation or a settlement procedure is a financial misstatement waiting to happen.

### Logging, monitoring, and who reads it
The database's own audit logs and the cloud provider's activity trail (such as AWS CloudTrail or Azure Activity Log) must capture privileged actions, and, crucially, **someone must review them**. Logs that record a suspicious data change but are never read are not a detective control; they are a silent failure by another name.

### Encryption, keys, and backups
The auditor confirms encryption at rest and in transit, and asks the sharper question: **who holds the keys**, the provider, or the customer through a customer-managed key. Backups matter just as much: automated snapshots, tested restoration, sensible retention, and, importantly, control over **who can delete them**, since a malicious insider or ransomware that can wipe both the database and its backups defeats recoverability entirely.

> Moving the database to the cloud outsources the infrastructure, never the accountability for the financial data inside it. A SOC 1 is only as strong as the access, change and monitoring controls the platform still owns over that data.

---

## The cloud provider is a subservice organisation

There is one more piece a security-literate reader looks for. The cloud provider is, in SOC 1 terms, a **subservice organisation**, a third party whose controls contribute to the service the platform delivers. A SOC 1 handles this in one of two ways:

- The **carve-out method** excludes the cloud provider's controls from the platform's description and opinion; the reader relies on the provider's own SOC report separately.
- The **inclusive method** brings them into scope and tests them directly.

Most platforms use carve-out, so the picture is a stack of reports: the cloud provider's SOC 1 and SOC 2 cover the infrastructure, and the platform's SOC 1 covers how it configures and controls the managed database on top. To get real comfort, an operator must read *both* and confirm there is no gap between them, which is exactly the kind of scope question that separates a genuine review from a rubber stamp.

### Complementary user entity controls
Finally, every SOC 1 lists **complementary user entity controls (CUECs)**, the things the operator itself must do for the platform's controls to work: managing its own users, reviewing reports, reconciling its own records against the platform's. An operator that accepts a clean SOC 1 but skips its CUECs has done only half the job.

---

## What an operator should demand

For an iGaming operator relying on a cloud-hosted platform, the practical checklist is short:

1. **Insist on a Type II** over a period that aligns with your reporting cycle.
2. **Confirm the database is in scope**, access, direct-change, change-management, logging, encryption and backup controls, on both the data and control planes.
3. **Follow the subservice chain.** Read the cloud provider's SOC reports alongside the platform's, and check for gaps.
4. **Read the exceptions**, and weight access and change-management findings heavily, because those undermine everything downstream.
5. **Perform your CUECs.**

---

## Conclusion

In iGaming the money is the product, and the money is a set of rows in a database, one that increasingly lives in the cloud on infrastructure the operator does not run. A SOC 1 is the mechanism that makes that database accountable for the financial numbers it produces, but only when it is read the way an auditor reads it: a Type II over the right scope, both access planes controlled, direct data changes locked down and monitored, the subservice cloud provider's own reports followed through, and the exceptions understood. Outsource the database to the cloud and you outsource the hardware, never the accountability for the financial truth inside it.

---

## References

- AICPA. (2016). *Statement on Standards for Attestation Engagements No. 18 (SSAE 18)*. American Institute of Certified Public Accountants.
- AWS. (2023). *Shared Responsibility Model*. Amazon Web Services.
- IAASB. (2011). *International Standard on Assurance Engagements (ISAE) 3402: Assurance Reports on Controls at a Service Organization*. International Auditing and Assurance Standards Board.
- Malta Gaming Authority. (2022). *Player Protection and Segregation of Funds Requirements*. MGA.
- UK Gambling Commission. (2023). *Licence Conditions and Codes of Practice (LCCP)*. UKGC.
