---
title: "Configuration Management"
description: "You cannot control what you cannot see. Configuration management is the authoritative record of what is in production, and the baseline that lets you detect unauthorised change."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 5
minutes: 7
gated: false
taskStatement: "Evaluate whether the configuration of production systems is recorded, controlled against a baseline, and reconciled to authorised changes."
objectives:
  - "State the purpose of a configuration management database and baseline."
  - "Distinguish configuration management from change management."
  - "Recognise an undocumented configuration difference as a potential unauthorised change."
trap: "Confusing configuration management with change management. Change management authorises a change; configuration management records what the system actually is, and the two must reconcile."
quiz:
  - question: "What is the PRIMARY purpose of a configuration management database (CMDB) and configuration baselines?"
    options:
      - "To store the source code of every application"
      - "To maintain an authoritative record of configuration items and their approved state, so deviations can be detected"
      - "To schedule overnight batch jobs"
      - "To approve changes before they are deployed"
    answer: 1
    explanation: "Configuration management maintains an accurate record of the configuration items that make up the IT environment and their authorised baseline state. That record is what lets the organisation know what is actually in production and detect when the real configuration deviates from the approved baseline."
    whyWrong:
      - "Source code is held in version control; the CMDB records configuration items and their state, not application source."
      - ""
      - "Job scheduling is a separate operational function; the CMDB is a record of configuration, not a scheduler."
      - "Approving changes is change management; configuration management records the resulting state, it does not authorise the change."
  - question: "How do change management and configuration management relate?"
    options:
      - "They are the same process under two names"
      - "Change management authorises and controls a change; configuration management records the resulting state, and the two are reconciled"
      - "Configuration management authorises changes; change management stores the records"
      - "Neither has any connection to the other"
    answer: 1
    explanation: "Change management is the process that assesses, authorises and controls a change. Configuration management maintains the record of what the environment actually is. Every authorised change should update the configuration record, and reconciling the two, does the recorded state match the changes that were approved, is how unauthorised change is caught."
    whyWrong:
      - "They are distinct: one controls change, the other records state. Merging them loses the reconciliation that catches unauthorised change."
      - ""
      - "The roles are reversed here: change management authorises; configuration management records."
      - "They are tightly connected; every authorised change should be reflected in the configuration record."
  - question: "An IS auditor finds a production server whose configuration differs from the approved baseline, with no corresponding change record. What does this MOST likely indicate?"
    options:
      - "The baseline is always out of date and can be ignored"
      - "A possible unauthorised change, which should be investigated"
      - "A normal and expected condition requiring no action"
      - "That configuration management is unnecessary"
    answer: 1
    explanation: "A live configuration that differs from the authorised baseline with no change record is the signature of an unauthorised change, exactly what configuration management exists to surface. It must be investigated: either a change was made without going through change management, or the records are not being maintained. Both are findings."
    whyWrong:
      - "Dismissing the baseline as always stale defeats the purpose of configuration management and hides real unauthorised changes."
      - ""
      - "An unexplained deviation from the approved state is not normal; it is precisely the condition that warrants investigation."
      - "The deviation demonstrates why configuration management is needed, not that it is unnecessary."
---

## The situation

You pull the approved change records for a production server and compare them against how the server is actually configured. A firewall rule is open that no change ever authorised. Nobody can say when it was added or by whom. The change records and the live system tell two different stories, and only one of them was approved.

Change management, in the previous lesson, controls how changes are approved. Configuration management is how you know whether the system actually matches what was approved.

## The record of what is

Configuration management maintains an **authoritative record** of the configuration items that make up the IT environment, servers, applications, network devices, their attributes, and the relationships between them, together with their approved **baseline** state. Often this record lives in a **configuration management database (CMDB)**.

Its purpose is not to be an inventory for its own sake. It is to answer two questions the organisation must be able to answer: what is actually in production, and does it match what was authorised. A CMDB is more than an asset list precisely because it records the *approved state*, the baseline, against which the real world can be compared.

## Configuration management is not change management

These two are constantly confused, and the exam relies on it.

- **Change management** is the *process*: it assesses, authorises and controls a change before it happens.
- **Configuration management** is the *record*: it captures what the environment actually is, after changes have happened.

They are designed to work together. Every authorised change should update the configuration record, so the baseline stays current. And reconciling the two, comparing the live configuration against the record of approved changes, is exactly how unauthorised change is detected. Change management says what should have changed; configuration management shows what did.

## Detecting the unauthorised change

This is where the open firewall rule is caught. A production configuration that **differs from the baseline with no corresponding change record** is the signature of an unauthorised change. Either something was altered without going through change management, or the records are not being kept up to date. Both are findings, and both are what configuration management exists to surface.

Without a maintained baseline, the organisation is blind to this: it cannot tell an approved state from a drifted one, cannot detect that a rule was opened without approval, and cannot even reliably say what is running in production. The baseline turns "the server looks fine" into "the server matches its authorised state, or it does not."

## Where practitioners go wrong

Two instincts cost marks. The first is treating configuration management and change management as the same thing; one authorises change, the other records state, and it is the reconciliation between them that catches what slipped through. The second is dismissing a baseline deviation as noise, the baseline is probably just stale. Sometimes it is, but an unexplained difference from the approved state, with no change to account for it, is a potential unauthorised change and must be investigated, not waved away.
