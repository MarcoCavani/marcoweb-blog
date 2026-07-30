---
title: "SaaS, OS and Database: Auditing the Full Stack of an e-Gaming Platform"
description: "An e-gaming platform is a stack, not a single system. Audit only the application and you have checked the shop window. Here is how to scope the full three layers, application, operating system and database, in the cloud."
pubDate: 2026-07-30
category: "IT Audit"
author: "Marco Cavani"
tags: ["e-Gaming", "IT Audit", "SaaS", "Database", "Cloud", "ITGC", "Full Scope", "Shared Responsibility"]
readTime: "8 min read"
---

Ask where an e-gaming platform "is" and you will get three answers, all correct. It is the **application**, the gaming engine, the wallet, the bonus logic, the reporting, delivered as software. It is the **operating system and infrastructure** that application runs on, the servers, containers and cloud compute beneath it. And it is the **database**, where every balance, wager and revenue figure is finally recorded. Three layers, stacked, each depending on the ones below.

An audit that stops at the top layer has looked at the shop window and called the shop secure. The controls that actually protect the money, and the integrity of the game, are spread across all three. This article is about scoping the **full stack**, and about how the cloud quietly changes who owns the controls at each level.

---

## Three layers, and why each one matters

Before scoping anything, it helps to be precise about what each layer is and what can go wrong there.

- **The application (SaaS) layer** is the software players and operators interact with: the gaming logic, the wallet, promotions, and the financial reporting. Its risks are wrong or manipulated transactions, weak access to sensitive functions, and unauthorised changes to business logic.
- **The operating system and infrastructure layer** is what the application runs on. Its risks are unpatched or unhardened systems, over-privileged administrative and root access, and a lack of logging beneath the application's view.
- **The database layer** is the financial system of record. Its risks are direct data manipulation that bypasses the application, weak control of database and administrator access, and unrecoverable data.

Miss any one and you have an unaudited path to the money. A perfectly controlled application on an unpatched, wide-open server is not secure; a hardened server whose database anyone can edit directly is not secure either.

> Audit only the application and you have checked the shop window. The money lives three layers down, in a database, on an operating system, in someone else's cloud.

---

## Layer 1: the application and the SaaS question

At the top, the controls are **application controls**, the completeness, accuracy, validity and authorisation of transactions, exactly as an auditor examines them in any financial system. For e-gaming that means the input, processing and output controls over wagers, deposits, payouts, wallet updates and gross gaming revenue, plus access control over sensitive functions like adjusting a balance or configuring a bonus, and change management over the business logic itself.

The **SaaS** dimension adds a twist. If the platform, or a component of it, is consumed as software-as-a-service from a vendor, the operator no longer controls that layer's internals and must instead rely on the vendor's assurance, a SOC 1 or SOC 2 report, read for its scope, period and exceptions, and act on the complementary user entity controls it assumes. Auditing a SaaS layer is therefore partly a review of the platform's own controls and partly a review of how the operator governs its reliance on the vendor.

One boundary is worth naming: game fairness and random number generation are typically certified separately by accredited testing houses under the gaming regulator's rules. The financial and IT audit does not re-test the RNG, but it does confirm that the certified components are the ones actually running, and that their outputs flow into the wallet and revenue correctly.

---

## Layer 2: the operating system and infrastructure

Beneath the application sits the layer auditors most often under-scope, and attackers most often use. The operating system and infrastructure controls are the classic **IT general controls** applied to the platform's foundations:

- **Hardening and patching.** Are the systems built to a secure baseline and kept current, or is there an unpatched, internet-facing host waiting to be exploited?
- **Privileged and root access.** Who has administrative or root access to the servers, and is it minimised, monitored, and separated from everyday accounts? An administrator at this layer can undermine every application control above them.
- **Logging and monitoring.** Is there an audit trail beneath the application, and does anyone review it?

The **cloud** reshapes this layer more than any other. On infrastructure-as-a-service, the operator still owns the operating system, patching it, hardening it, controlling access, exactly as on-premises. On platform- or managed-service models, the provider takes over the OS, and the operator's responsibility shifts up to configuration and access. The auditor must know which model applies to each component, because the shared responsibility line moves with it, and a control the operator assumes the provider owns, or vice versa, is a gap by default.

---

## Layer 3: the database

At the bottom is the financial truth: the tables holding player balances, the transaction ledger and the revenue figures. This is where an e-gaming audit either earns its assurance or fails to. The critical controls are the ones covered in depth in the SOC 1 for iGaming article, and they bear repeating:

- **Direct data changes** are the cardinal risk. A change made straight to a wallet or revenue table bypasses every application control above it and must be tightly restricted, logged and independently reviewed.
- **Database and administrator access** must be least-privilege and monitored, across both normal database access and, in the cloud, the provider's control plane that can snapshot, restore or delete the database entirely.
- **Encryption and backups** protect the data and its recoverability, with attention to who holds the keys and who can delete the backups.

The database is the layer where the whole stack's integrity is finally decided, which is exactly why it must never be the layer an audit skips.

---

## The common thread, and how to scope it

Across all three layers, the same **IT general controls** recur, access, change management and operations, applied at each level, and the same cloud question recurs, who owns this control, us or the provider. That gives a clean way to scope a full-stack e-gaming audit:

1. **Map the data flow, top to bottom.** Follow a wager from the interface, through the application, onto the operating system, into the database, and back out as a payout and a revenue figure. Every layer it passes through is in scope.
2. **Identify the controls at each layer,** application controls at the top, OS and infrastructure ITGCs in the middle, database controls at the bottom.
3. **Draw the cloud responsibility line for each component,** IaaS, PaaS or SaaS, and confirm nothing falls in the gap between the operator's controls and the provider's.
4. **Follow the assurance chain,** the SOC reports for SaaS components and cloud providers, read together for gaps.

Do that, and "full scope" stops being a phrase and becomes a map.

---

## Conclusion

An e-gaming platform is three layers deep, and the money can only be trusted if all three are controlled: an application whose transactions are complete and authorised, an operating system that is hardened, patched and access-controlled, and a database where the financial truth cannot be altered without a trace. The cloud does not remove any of these responsibilities; it moves the line of who owns each one, which is precisely why the auditor must trace it deliberately rather than assume it. Scope the full stack, follow the data down to the database and the responsibility across to the provider, and the assurance is real. Stop at the application, and you have audited the shop window while the vault stayed unopened.

---

## References

- AICPA. (2016). *SOC 1 and SOC 2 Reporting under SSAE No. 18*. American Institute of Certified Public Accountants.
- ISACA. (2019). *CISA Review Manual*. Information Systems Audit and Control Association.
- Cloud Security Alliance. (2021). *Cloud Controls Matrix and Shared Responsibility Model*. CSA.
- Malta Gaming Authority. (2022). *Technical and Systems Requirements*. MGA.
