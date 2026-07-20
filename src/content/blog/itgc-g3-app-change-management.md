---
title: "TSB's IT Migration Left 1.9 Million Customers Unable to Bank for Weeks"
description: "In April 2018, TSB Bank attempted to migrate 5.4 million customer accounts from a legacy platform to a new system. The migration failed. 1.9 million customers were locked out of their accounts. Some saw other customers' balances. The failures traced back to application change management controls that were inadequate for the scale and complexity of the migration."
pubDate: 2026-09-09
heroImage: "/images/itgc-g3-app-change-management.svg"
category: "IT Audit"
control: "G.3"
author: "Marco Cavani"
tags: ["Application Change Management", "ITGC", "TSB Bank", "IT Migration", "Release Management", "IT Audit"]
readTime: "8 min read"
---

On the weekend of 21 April 2018, TSB Bank began the migration of 5.4 million customer accounts from Lloyds Banking Group's IT platform, which TSB had been using since its demerger from Lloyds in 2013, to a new platform built by Sabadell, TSB's Spanish parent company.

The migration was a significant strategic milestone. TSB was operationally dependent on Lloyds' systems and paying hundreds of millions of pounds for the privilege. Moving to the new platform was essential to the bank's independence.

The migration weekend proceeded and the cutover appeared successful. On Sunday evening, 22 April 2018, TSB opened its systems to customers.

Within hours, it was clear that something had gone catastrophically wrong.

Approximately 1.9 million customers could not access their accounts. Some customers who could log in saw other customers' account balances and transaction histories. The bank's telephone lines were overwhelmed. The TSB mobile app was unavailable. Business banking customers could not make or receive payments.

The outage persisted in various forms for weeks. TSB's CEO Paul Pester, who initially defended the bank's response on Twitter, was later called before the UK Treasury Committee and told a parliamentary committee that the bank was "on its knees." He resigned in September 2018. TSB's remediation costs exceeded 330 million pounds, including customer compensation, fraud losses that rose sharply during the outage, and the cost of bringing in IBM to assist with stabilisation.

The Financial Conduct Authority and Prudential Regulation Authority investigated. The FCA fined TSB 48.65 million pounds in 2022.

---

## The Risk

Application Change Management controls specifically address the risk that changes to business applications, including major version releases, configuration changes, and system migrations, are planned, tested, approved, and deployed in a manner that protects service continuity and data integrity.

The application change management risk profile differs from infrastructure change management in several respects:

**Functional complexity:** Application changes modify business logic, data structures, user interfaces, and integrations simultaneously. Testing must cover not just technical functionality but business process outcomes.

**Data dependency:** Applications hold or process business-critical data. A change that affects data structures or data migration logic can corrupt or lose data that is difficult or impossible to recover.

**Integration surface:** Enterprise applications are connected to other applications through APIs, data feeds, and batch interfaces. A change to one application can break integrations that are not included in the change's direct testing scope.

**Rollback complexity:** Rolling back an application change that has been in production and has processed live transactions is significantly more complex than rolling back an infrastructure change. Data state changes during the time the failed version was running may not be reversible.

---

## What Went Wrong at TSB

The independent review of TSB's IT migration, conducted by Slaughter and May and published in 2019, identified a range of application change management failures:

**Insufficient testing of the new platform under production-like conditions:** The new platform had not been tested with the full volume of production transactions in an environment that accurately reflected the production configuration. Performance issues that only manifested at scale were not discovered until the cutover.

**Integration testing gaps:** The new platform was connected to a range of third-party services (payment networks, fraud systems, credit bureaus) through integrations that had not been fully tested end-to-end in a representative environment before go-live.

**Customer data migration issues:** The migration of 5.4 million customer records to the new data model was a complex data transformation. Issues in the migration logic meant that some customer records were not correctly represented in the new system, producing the accounts visibility issue where some customers saw other customers' data.

**Rollback plan inadequacy:** TSB's rollback plan, which would have involved returning to the Lloyds platform, was not sufficiently detailed or tested to be executable within the available window. Once the migration had proceeded to a certain point, rollback was not practically available.

**Governance of a programme of this scale:** The independent review found that the project governance for the migration did not adequately escalate the risks of proceeding on the planned date given the state of testing. Go/no-go decision-making did not have the information it needed to make an informed decision.

---

## What Failed

**Scale-tested performance testing absent:** No testing regime had validated that the new platform could handle the full volume of TSB's customer traffic. Capacity and performance issues at scale were not discovered until production.

**End-to-end integration testing incomplete:** Integrations with payment networks and third-party services were not fully tested in a pre-production environment. Integration failures contributed to service unavailability beyond the core platform issues.

**Inadequate data migration validation:** The data migration from the Lloyds schema to the new schema was not fully validated before go-live. Validation failures contributed to the customer data visibility issue.

**Untested rollback plan:** The rollback plan was not validated before the migration weekend. Once the migration had commenced, the absence of a working rollback plan meant that forward remediation was the only option regardless of the severity of the issues encountered.

**Project governance did not prevent a risky go-live decision:** The go/no-go decision process did not surface or adequately weigh the known gaps in testing prior to the migration weekend.

---

## What Good Looks Like

**Realistic performance and load testing:** Major application changes and migrations are tested under realistic production-like load conditions in an environment that accurately reflects the production configuration. Performance testing identifies capacity limits before they are encountered in production.

**Full end-to-end integration testing:** All integrations connected to the application are included in the test scope. Integration testing is conducted in an environment where each integration target is also in a representative state.

**Data migration reconciliation:** Data migrations include reconciliation controls that compare source and target record counts, key field values, and financial totals before the migration is declared successful and before production traffic is allowed to proceed.

**Tested and timed rollback plan:** The rollback plan is tested in a dress rehearsal before the production migration. The test confirms that rollback can be completed within the available window. If rollback is not achievable within the window, the decision to proceed must explicitly accept that rollback may not be available.

**Independent go/no-go gate:** The go/no-go decision is made by a governance body that receives a structured assessment of testing completion, open defects, and known risks. The decision is documented. A go decision despite known gaps is explicitly recorded as a risk acceptance.

---

## How Auditors Test It

When auditing Application Change Management controls, an IT auditor will typically:

**Assess the release management process:** Confirm that a formal release management process exists that covers major application releases and migrations, including testing requirements, approval gates, and rollback planning.

**Test testing completeness for major changes:** For significant releases in the audit period, review the test plan and test results. Confirm that performance testing, integration testing, and data migration testing were included and completed. Identify gaps in test coverage.

**Test the go/no-go decision process:** For major releases, review the go/no-go decision documentation. Confirm that the decision was made by an appropriate governance body, that open issues were documented, and that risk acceptances were formally recorded.

**Assess rollback plan quality:** For major releases, review the rollback plan. Confirm that it is specific (not generic), that it was tested, and that the timing was validated. A rollback plan that has not been tested is not a control.

**Review post-implementation review:** For major changes, confirm that a post-implementation review was conducted that compared actual outcomes against expectations and documented lessons learned.

**Assess developer access to production:** Confirm that developers do not have direct access to modify production application code or data outside of the change management process. Direct production access by developers is a fundamental control gap.

---

## Lessons and Recommendations

TSB's migration failure was not caused by technical incompetence. It was caused by the same pattern that causes most major IT project failures: insufficient testing at production scale, inadequate integration testing, and a governance process that did not prevent a risky go-live decision.

**Test at production scale before you go live.** If your test environment can only support 20 percent of production traffic, you will not discover the failures that occur at 100 percent of production traffic until production. The cost of a realistic load test environment is a small fraction of the cost of a production failure.

**Include all integrations in your test scope.** The integrations connected to a migrating application are frequently omitted from test scope because they are difficult to test in a non-production environment. That difficulty is the reason to invest in a realistic test environment, not a reason to accept untested integrations.

**Test the rollback before you need it.** A rollback plan that has not been timed and executed in a practice run is a theoretical document. The migration weekend is not the time to discover that rollback takes four hours when the window is two.

**Make the go/no-go decision in advance.** The governance decision on whether to proceed with a high-risk migration is best made before the migration weekend, when there is time to evaluate options. A decision made under time pressure on a Saturday night, with teams committed to a migration that is already underway, is not a governed decision.

---

## Assess Your Application Change Management Controls

The MarcoWeb ITGC Tool covers Application Change Management across Group G, with structured assessment templates for testing completeness, rollback planning, and go/no-go governance.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
