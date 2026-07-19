---
title: "The Rogue Trader and the Approval He Gave Himself: Why SoD Matters in Every ERP"
description: "Jérôme Kerviel lost Société Générale EUR 4.9 billion because he had access to both trading and the back-office confirmation systems that should have caught him. Segregation of duties is the control that requires two hands on the transaction. When one person can do it all, fraud becomes possible."
pubDate: 2026-08-19
heroImage: "/images/itgc-def-segregation-of-duties.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Segregation of Duties", "ITGC", "SoD", "Société Générale", "ERP Controls", "Fraud Prevention", "IT Audit"]
readTime: "8 min read"
---

In January 2008, Société Générale, one of France's largest banks, disclosed that a junior trader had accumulated fraudulent trading positions with a nominal value of approximately EUR 50 billion, resulting in a loss of EUR 4.9 billion when those positions were unwound.

Jérôme Kerviel had worked in Société Générale's Delta One desk, making directional bets on European stock index futures. He had previously worked in the bank's back-office operations, the team responsible for confirming and reconciling trades. That background gave him detailed knowledge of the bank's internal control systems and the specific parameters that triggered alerts.

Using that knowledge, Kerviel constructed a series of fictitious hedging trades, entered into the back-office systems to cancel out the real positions he was accumulating in the trading system. The fictitious trades were designed to stay below alert thresholds, to be timed to expire before settlement required real counterparty confirmation, and to exploit loopholes in the reconciliation process.

None of this would have been possible had Kerviel not had the system access and knowledge required to operate in both the trading system and the back-office control environment. The segregation of duties that should have existed between those two functions was imperfect, and Kerviel's history in the back office gave him the knowledge to exploit every gap.

---

## The Risk

Segregation of Duties (SoD) in finance, payroll, and ERP applications refers to the principle that no single individual should have the system access required to initiate, approve, and record a transaction without independent oversight.

The four most common high-risk SoD conflicts in business applications are:

**Create and approve:** A user who can both create a financial transaction (invoice, payment, purchase order) and approve the same transaction can execute fraudulent payments without independent authorisation.

**Enter and release:** A user who can both enter a payroll record (salary change, new employee, bank detail change) and release the payroll run can manipulate payroll undetected.

**Post and reconcile:** A user who can both post journal entries to a general ledger account and reconcile that account can obscure postings that would otherwise be detected.

**Administer and audit:** A user who can both manage system configuration and administer the audit log can cover their tracks by modifying or deleting the log records of their own activity.

In the Kerviel case, the relevant SoD failure was between the trading function and the back-office confirmation function. These were organisationally separate, but Kerviel's access to both environments, combined with his detailed knowledge of control parameters, functioned as an SoD violation at a sophisticated level.

In most organisations, SoD violations are far simpler: an accounts payable clerk who can create vendors and process payments, or a payroll administrator who can add employees and run payroll.

---

## The Société Générale Case

Kerviel began accumulating the fraudulent positions in 2005 and continued through early 2008. The positions were directional bets on European stock indices, specifically that the indices would rise. When markets fell significantly in January 2008, the positions moved sharply against him.

During the three-year period he was accumulating positions, Société Générale's internal controls generated numerous alerts. Eurex, the derivatives exchange, queried an unusual position with the bank. The bank's own middle office generated queries. Risk managers asked questions. Each time, Kerviel provided explanations that were either accepted or not followed up with sufficient rigour.

The technical SoD failure was the access that allowed Kerviel to enter fictitious trades in the back-office system that were designed to offset the real positions on the trading system. The organisational SoD failure was that the middle and back-office functions that should have operated as an independent check were insufficiently independent, either in practice or in the depth of their scrutiny.

The EUR 4.9 billion loss was not caused by a single transaction. It was caused by three years of gradually accumulating positions, facilitated by the ability to suppress the control environment using access that should never have coexisted in a single individual.

Kerviel was convicted of breach of trust, forgery, and entering false data into computer systems. He was sentenced to five years in prison (reduced on appeal). Société Générale's governance failures were also examined in subsequent regulatory proceedings.

---

## What Failed

**Knowledge-based SoD bypass:** Kerviel's back-office experience gave him the knowledge to exploit the specific parameters of the reconciliation controls without technically violating them in a way that would trigger an automatic alert. SoD controls must be robust to individuals who understand how the controls work.

**System access that bridged two control environments:** Even where Kerviel did not have active back-office login access during the period, his knowledge of how to construct entries that would pass the control filters was functionally equivalent. Proper SoD requires both access separation and knowledge separation at the design level.

**Insufficient investigation of alerts:** Multiple queries were generated and provided to Kerviel for explanation. The culture of accepting trader explanations without independent verification is a governance failure that allowed the access-level SoD weakness to compound.

**Fictitious counterparty positions:** The back-office system was not independently confirming that the counterparties to the fictitious trades existed and had agreed to the terms. Confirmation of trades with real counterparties, independently of the entering trader, is a fundamental SoD requirement in financial markets.

---

## What Good Looks Like

**SoD matrix for all application roles:** A documented SoD policy maps role combinations that are prohibited. This matrix is applied at provisioning (no user is granted a combination of roles that creates a conflict) and at review (existing access is tested against the matrix).

**Technical enforcement in the application:** Modern ERP platforms (SAP GRC, Oracle Access Controls, Workday) include tooling that prevents the provisioning of conflicting roles and alerts on existing conflicts. Configuration of these controls is itself a testing objective.

**Compensating controls for accepted conflicts:** Where SoD conflicts are accepted due to operational constraints (typically in small teams where role separation is impractical), compensating controls are documented: enhanced monitoring, periodic management review, dual approval for high-value transactions.

**Independent trade confirmation (financial environments):** In trading and financial transaction environments, confirmation of transactions with counterparties is performed by a function independent of the party who initiated the transaction.

**Management review of high-risk transactions:** For transaction types that represent elevated fraud risk (large payments, off-cycle payroll runs, journal entries to suspense accounts), a management review with documented sign-off provides a manual SoD compensating control.

---

## How Auditors Test It

When auditing Segregation of Duties for Groups D, E, and F, an IT auditor will typically:

**Request the SoD matrix:** Confirm that a documented SoD policy exists for the key finance, payroll, and ERP applications. Assess whether the matrix covers the highest-risk role combinations.

**Run an SoD analysis:** Extract user roles from the ERP and run them against the SoD matrix using either native tooling (SAP GRC, Oracle Access Governance) or spreadsheet-based analysis. Identify all users with conflicting role combinations.

**Assess conflict resolution:** For each identified SoD conflict, determine whether it was: (a) remediated (access removed), (b) formally accepted with documented compensating controls, or (c) unaddressed. Unaddressed conflicts are findings.

**Test compensating controls for accepted conflicts:** For conflicts that were accepted with compensating controls, test the effectiveness of those controls. A compensating control that exists on paper but is not being executed provides no protection.

**Assess SoD enforcement at provisioning:** Test whether the ERP's technical SoD enforcement (if applicable) prevented the creation of a test user with a conflicting role combination. If technical enforcement is not in place, assess whether the provisioning process manually checks against the SoD matrix.

**Test high-risk transaction types:** For the transaction types with the highest SoD risk (payment processing, payroll, journal entry), confirm that the control structure prevents a single user from completing the full transaction cycle without independent oversight.

---

## Lessons and Recommendations

The Société Générale case is nearly two decades old and remains the textbook reference for SoD in financial environments. Its enduring relevance is that it illustrates a point that is easy to underestimate: SoD is not just about preventing one person from clicking two different buttons. It is about ensuring that the control framework cannot be navigated around by someone with knowledge of how it works.

**Define your SoD matrix before implementing ERP roles.** SoD analysis conducted after role design identifies conflicts that may be deeply embedded in operational workflows. Defining the matrix first, then designing roles to avoid conflicts, is significantly more efficient.

**Use native ERP SoD tooling.** SAP GRC, Oracle Access Governance, and comparable tools are specifically designed to enforce SoD at both provisioning and review stages. Manual SoD analysis is error-prone at scale.

**Investigate alerts, even when traders (or anyone else) provide explanations.** The Société Générale case is a case study in what happens when the culture of accepting explanations for control exceptions replaces the rigour of independent verification.

**Review your compensating controls as carefully as your primary controls.** Compensating controls for accepted SoD conflicts are only effective if they are actually executed. Audit them.

**Extend SoD analysis to custom roles and transaction codes.** In SAP environments, organisations often create custom transaction codes that are not included in the standard SoD rule library. Custom transactions must be included in the SoD analysis.

---

## Assess Your Application SoD Controls

The MarcoWeb ITGC Tool covers Segregation of Duties across Groups D, E, and F, with structured assessment templates for SoD matrix review, conflict identification, and compensating control testing.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
