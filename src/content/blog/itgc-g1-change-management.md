---
title: "Knight Capital Lost $440 Million in 45 Minutes Because One Server Was Not Updated"
description: "On 1 August 2012, a software deployment error at Knight Capital Group triggered an automated trading loop that generated $440 million in losses before humans could stop it. The failure was not in the code. It was in the change management process that allowed eight production servers to be updated without confirming all eight had been updated."
pubDate: 2026-09-04
heroImage: "/images/itgc-g1-change-management.svg"
category: "IT Audit"
control: "G.1"
author: "Marco Cavani"
tags: ["Change Management", "ITGC", "Knight Capital", "IT Change Control", "Deployment Controls", "IT Audit"]
readTime: "8 min read"
---

At 9:30 AM on 1 August 2012, Knight Capital Group activated a new feature in its trading systems called SMARS (Smart Market Access Routing System). The activation was triggered by a repurposing of an existing feature flag called "Power Peg," which had previously been used for a discontinued trading strategy.

The deployment team had updated seven of Knight's eight production servers with the new SMARS code. On the eighth server, the "Power Peg" flag still pointed to the old logic: a piece of code that had been decommissioned for years. When SMARS was activated across all eight servers, seven servers executed the new strategy correctly. One server began executing the old Power Peg logic.

The old Power Peg code was designed to send child orders until it had acquired a parent order's full position. Without the quantity constraints of the new code, it sent and resent orders continuously. Within 45 minutes, that one server had generated approximately 4 million erroneous orders in 154 different stocks, causing Knight Capital to accumulate a net long position of approximately $3.5 billion.

By the time trading was halted, Knight Capital had lost $440 million. The firm was effectively bankrupt. It was acquired by Getco LLC several months later.

The change management failure was simple: there was no deployment verification step that confirmed the new code had been successfully applied to all eight servers before the activation flag was set.

---

## The Risk

IT Change Management controls govern the process by which changes to systems, infrastructure, and applications are planned, approved, tested, deployed, and verified. The control exists because uncontrolled changes are the leading cause of production outages, data integrity failures, and security incidents.

The risk profile of inadequate change management includes:

**Deployment completeness failures:** As the Knight Capital case demonstrates, a deployment that is applied to most but not all production systems leaves the environment in a split-brain state where different servers are executing different logic. This is particularly dangerous in distributed systems where the incomplete server processes real transactions.

**Insufficient pre-deployment testing:** Changes that are deployed without adequate testing in a representative non-production environment carry unknown defect risk into production.

**No rollback capability:** Changes deployed without a tested rollback plan leave operations with no recovery path when a deployment fails. The only options are forward remediation (which requires time that may not be available) or extended outage.

**Bypassed approval processes:** Emergency changes and time-pressured deployments frequently bypass the approval controls that exist to ensure a second set of eyes reviews the change before it goes live. Bypass creates a systematic gap in the change control environment.

**Cumulative undocumented changes:** Environments where small or "trivial" changes are made without formal change records accumulate technical debt and configuration drift that is invisible to the change management process and to auditors.

---

## The Knight Capital Case in Detail

The forensic reconstruction of the Knight Capital incident, documented in the US Securities and Exchange Commission's administrative proceeding, identified the following sequence:

**No deployment checklist:** Knight Capital did not have a formal process to verify that each step of a software deployment had been successfully completed on every server before proceeding. The deployment team believed all eight servers had been updated. They had not confirmed it.

**No automated deployment verification:** An automated deployment process would have verified the code version on each server against the expected version after deployment and halted activation if a mismatch was detected. Knight Capital relied on manual deployment processes without this verification step.

**Repurposed feature flags:** The "Power Peg" flag had been used for a decommissioned strategy. When it was repurposed for SMARS activation, the team did not confirm that the old Power Peg code had been removed from all production servers. On one server, it had not been.

**45 minutes to detection:** Knight Capital received alerts from market participants about unusual activity in certain stocks within minutes of the trading day opening. However, the time to identify the source of the problem, make the decision to stop trading, and halt the affected server was approximately 45 minutes.

**No automated circuit breaker:** A position limit or loss limit that would have automatically halted trading when Knight Capital's exposure exceeded a defined threshold was not in place on the affected system.

The SEC's administrative order found that Knight Capital had violated the Market Access Rule by failing to have controls in place to manage the financial exposure of its algorithmic trading systems.

---

## What Failed

**No deployment verification step:** The deployment process did not include a step to confirm that the new code version was running on all production servers before activation. This single gap was the immediate cause of the incident.

**No pre-activation consistency check:** Before activating a feature flag across all production servers, the system should have verified that all servers were running identical code. No such check existed.

**Decommissioned code not removed from all servers:** The old Power Peg logic had not been removed from the server it was eventually discovered on. The change management process for decommissioning the old strategy had been incomplete.

**Human deployment process without verification:** Manual software deployments without automated verification are inherently error-prone. The absence of an automated deployment tool that would confirm successful application on each server was a process weakness.

**No automated position or loss limits:** The trading system had no automated circuit breaker that would halt trading when loss or position thresholds were exceeded.

---

## What Good Looks Like

**Automated deployment with post-deployment verification:** Deployment pipelines verify that the deployed code version matches the expected version on every target server after deployment. Mismatches halt the deployment and prevent activation.

**Infrastructure as code with configuration management:** System configuration is managed through code (Ansible, Puppet, Chef, Terraform) that ensures every server in a fleet has identical configuration. Drift from the expected configuration is detected automatically.

**Mandatory rollback plan for every change:** Every change in the change advisory board or change management system includes a tested rollback plan. Changes without a tested rollback plan are not approved for production deployment.

**Feature flag verification before activation:** Activating a feature flag across a production fleet is a change event that requires the same verification as a code deployment: confirm all servers are in the expected state before activating.

**Dual approval for high-risk changes:** Changes to systems where an error could have material financial or operational impact require approval from two independent reviewers before deployment proceeds.

---

## How Auditors Test It

When auditing Change Management controls, an IT auditor will typically:

**Review the change management policy and procedure:** Confirm that a formal change management policy exists, that it defines the categories of change, the required approvals for each category, and the process for emergency changes.

**Test change approval for a sample of changes:** Select a sample of changes deployed during the audit period. For each change, confirm that a formal change request was raised, that the required approvals were obtained, and that testing was completed before deployment.

**Test for changes without change requests:** Review system and deployment logs for changes applied in the production environment. Compare against the change management system. Identify changes that were made without a corresponding approved change request. This identifies the bypass rate.

**Assess deployment verification controls:** Confirm that the deployment process includes a post-deployment verification step that confirms the change was successfully applied to all target systems. Assess whether this verification is automated or manual.

**Test rollback capability:** For a sample of changes, confirm that the change record includes a tested rollback plan. For significant changes, confirm that the rollback plan was tested in a non-production environment.

**Review emergency change handling:** Identify emergency changes applied during the period. Confirm that each was followed by a post-implementation review and retrospective approval within the defined period.

---

## Lessons and Recommendations

Knight Capital's failure was not a technology failure in the conventional sense. The code did what it was designed to do. The failure was in the process that deployed code to a production fleet without verifying that the deployment was complete.

**Automate deployment verification.** Manual software deployments where engineers confirm completion by checking server responses are error-prone at scale. Deployment pipelines that verify the expected code version on every server before activation eliminate this entire class of error.

**Never activate a feature flag without confirming all servers are in the expected state.** A split-brain production environment, where some servers are on the new code and others are on old code, is not a safe state. Activation should be an automated, verified step.

**Treat decommissioning as a change event.** Removing old code, feature flags, and deprecated configurations from production systems requires the same change management discipline as adding new code. Incomplete decommissioning leaves the environment in an unknown state.

**Define and test rollback plans before deployment.** A deployment that goes wrong in a live financial system requires a sub-minute decision on whether to roll back or remediate forward. That decision cannot be made in real time without a pre-tested rollback plan.

**Implement automated circuit breakers in any system that can affect financial position at machine speed.** A trading system, a payment platform, or a batch processing job that can generate financial exposure at machine speed must have automated limits that halt processing when exposure exceeds a defined threshold.

---

## Assess Your Change Management Controls

The MarcoWeb ITGC Tool covers Change Management across Group G, with structured assessment templates for change approval, deployment verification, and emergency change handling.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
