---
title: "When SWIFT Payments Have No Individual Owner: The Bangladesh Bank Heist"
description: "In 2016, attackers sent fraudulent SWIFT payment messages from Bangladesh Bank and stole USD $81 million. The SWIFT terminal operated with limited individual attribution controls. In finance and ERP systems, generic and shared accounts are not just an audit issue: they are a fraud enabler."
pubDate: 2026-08-24
heroImage: "/images/itgc-def-generic-accounts.svg"
category: "IT Audit"
control: "D.5 · E.6 · F.5"
author: "Marco Cavani"
tags: ["Application Generic Accounts", "ITGC", "Shared Accounts", "Bangladesh Bank", "SWIFT Fraud", "ERP Security", "IT Audit"]
readTime: "7 min read"
---

On 4 February 2016, attackers sent 35 fraudulent payment messages through the SWIFT international payment network from Bangladesh Bank, the central bank of Bangladesh. The messages requested the transfer of nearly USD $1 billion from Bangladesh Bank's account at the Federal Reserve Bank of New York to accounts in the Philippines and Sri Lanka.

Most of the transfers were blocked, either by the Federal Reserve or because the attackers misspelled the name of a bank in a routing instruction. Five transfers totalling USD $81 million reached accounts in the Philippines, where much of the money was moved through casinos and ultimately could not be recovered.

The attack involved the compromise of Bangladesh Bank's SWIFT terminal, the system used to compose and send SWIFT payment messages. The terminal was accessed using valid credentials, and the attackers also used malware to modify the SWIFT client software to conceal the fraudulent messages from the bank's operators.

One of the forensic findings from the Bangladesh Bank investigation was that the SWIFT terminal environment had limited individual attribution controls. The shared or insufficiently attributed credentials used to access the SWIFT system made it harder to definitively establish who had performed what action in the log analysis following the breach.

In the context of application generic and shared account controls, this case illustrates the specific and severe risk of inadequate individual attribution in systems that execute high-value financial transactions.

---

## The Risk

Generic and shared accounts in finance, payroll, and ERP applications create the same accountability gap in the application environment that they create in the infrastructure environment: when multiple people share credentials, no log entry can be definitively attributed to an individual.

In the application context, the risks are:

**Fraud enablement:** An ERP system in which multiple users share a single account for posting journal entries or processing payments cannot produce a transaction-level audit trail that establishes individual accountability. Fraudulent transactions cannot be attributed to a specific person.

**Inability to investigate:** Post-incident forensic investigation of application fraud requires attribution. If five people know the password to the accounts payable processing account, determining which one initiated a fraudulent payment may be impossible.

**Control bypass:** Application audit logs that capture activity under a generic account rather than an individual identity cannot be used to enforce policy. Unusual or anomalous behaviour is harder to detect when it is attributed to a shared account with a variable activity pattern reflecting multiple users.

**Regulatory and audit failure:** Financial regulations (SOX, banking prudential standards, payment card standards) require that financial transactions be attributable to identified, authorised individuals. Generic accounts are incompatible with this requirement.

**Default and SAP-specific risks:** SAP ships with default users including SAP* (a superuser account) and DDIC (a data dictionary administrator account). Both have known default passwords in some versions and significant system access. Unmanaged default application accounts are a specific category of generic account risk.

---

## The Bangladesh Bank SWIFT Case

The forensic investigation of the Bangladesh Bank breach, conducted by multiple parties including BAE Systems, WorldCom, and US and Bangladeshi law enforcement, established that the attack involved:

**Initial compromise of the SWIFT terminal:** The attackers obtained valid SWIFT credentials through methods that were not fully determined, likely through phishing targeting bank staff or exploitation of a separate internal compromise. The shared or weakly controlled nature of the SWIFT access contributed to the difficulty of pinpointing the exact access pathway.

**Malware to conceal activity:** The attackers installed custom malware that modified the SWIFT Alliance Access software to prevent printing of confirmation messages and to manipulate the SWIFT database to hide fraudulent transaction records. This malware was specifically designed to undermine the manual control environment at the SWIFT terminal.

**Limited network security:** Bangladesh Bank's internal network connected the SWIFT terminal to other bank systems with insufficient segmentation. The terminal operated in an environment that did not enforce the physical and logical isolation standards recommended by SWIFT.

The attack was ultimately attributed to the Lazarus Group, a North Korean state-sponsored threat actor. The group subsequently targeted other SWIFT-connected banks using similar techniques.

The key lesson for application generic account controls is not that shared SWIFT credentials caused the Bangladesh Bank breach, but that their presence complicated investigation and is representative of the broader control weakness in financial application environments where individual attribution is not enforced.

---

## What Failed

**Limited individual attribution in the SWIFT environment:** The SWIFT terminal access was not configured to require individual authentication that was clearly attributed in application logs. The difficulty in establishing definitive activity attribution complicated both real-time detection and post-incident investigation.

**Shared application credentials across multiple users:** In many financial institutions, particularly smaller ones, application systems including payment platforms operate with shared credentials that are known to a group of operators. This is a systemic control failure.

**Default accounts in supporting systems:** The broader Bangladesh Bank environment, including routers connected to the SWIFT network, reportedly still had default passwords configured. Default credentials in any component of a financial transaction chain represent a direct attack pathway.

**Insufficient logging and monitoring at the application layer:** The SWIFT malware's ability to suppress print confirmations and modify database records indicates that the bank did not have independent monitoring of SWIFT activity from a source that the malware could not reach.

---

## What Good Looks Like

**Individual attribution for all financial transactions:** Every transaction in a finance, payroll, or ERP application is recorded under an individually attributed account. No shared accounts are used for any transaction-initiating function.

**Named ownership for all service and batch accounts:** Service accounts used for automated processing (batch payment runs, interface jobs) have named owners, documented business purposes, and are subject to the same access review cycle as human accounts.

**Dual control for high-value transactions:** Payment transactions above a defined threshold require two separate individuals: one to initiate and one to authorise. Technical enforcement at the application layer prevents single-user completion of high-value transactions.

**Segregation of SWIFT terminal access:** SWIFT terminal access is limited to the minimum number of named, individually attributed users necessary. The terminal is in a segregated network zone. Activity is monitored by a system independent of the terminal itself.

**Default account management in all financial applications:** Every financial application, including SWIFT alliance software, ERP systems, and payment platforms, has its default accounts reviewed, locked, or had their passwords changed before production use.

---

## How Auditors Test It

When auditing Application Generic Accounts for Groups D, E, and F, an IT auditor will typically:

**Identify generic and shared accounts in finance applications:** Extract the user list from key financial applications. Flag accounts with generic names (e.g., AP_PROCESS, PAYROLL_RUN, BATCH_USER, SAP*, DDIC, sysadmin). For each, investigate whether the account is used by multiple individuals.

**Test SAP default account status:** For SAP environments, test whether SAP* is locked (and verify that the profile parameter `login/no_automatic_user_sapstar` is set to prevent emergency use of the default password). Test DDIC in the same manner.

**Test transaction attribution:** Select a sample of high-value transactions from the ERP audit log. Confirm that each transaction is attributed to a named, individually identified user. Flag any transactions attributed to generic or shared accounts.

**Assess SWIFT and payment application attribution controls:** For institutions using SWIFT or similar payment platforms, confirm that user access to the payment terminal is individually attributed and that activity logs are available and reviewed independently of the terminal environment.

**Review batch account ownership:** Request a register of batch processing accounts. For each account, confirm a named owner, a documented business purpose, and a recent access review. Batch accounts without owners are a finding.

**Test dual control for high-value payments:** Attempt to initiate a payment above the defined threshold using a single user account. Confirm that the application prevents completion without a second authoriser.

---

## Lessons and Recommendations

The Bangladesh Bank case is frequently cited in discussions of SWIFT security and financial controls. Its application generic account lesson is straightforward: in any system that moves money, every action must be attributable to a named individual.

**Eliminate shared accounts from financial transaction systems.** Every person who touches a financial transaction must have their own account. The cost of implementing individual accounts is trivial compared to the forensic and legal consequences of being unable to attribute a fraudulent transaction.

**Lock or manage all default application accounts before go-live.** Every financial application ships with known default accounts. Some have known default passwords. A deployment checklist that does not include default account management is incomplete.

**Enforce dual control at the application layer, not just at policy.** Policy requiring dual control is ineffective if the application does not technically enforce it. Configuration of application-level dual control is a testing objective.

**Monitor SWIFT and payment application activity from an independent system.** Transaction monitoring that runs on the same system as the payment application can be disabled by malware. Independent monitoring from a system the attacker cannot reach is the compensating control.

**Apply the same account lifecycle management to batch accounts as to human accounts.** Batch accounts are not exempt from provisioning, review, and termination controls. They are high-value targets precisely because they are often overlooked.

---

## Assess Your Application Generic Account Controls

The MarcoWeb ITGC Tool covers Application Generic Accounts across Groups D, E, and F, with structured assessment templates for shared account identification, default account testing, and transaction attribution.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
