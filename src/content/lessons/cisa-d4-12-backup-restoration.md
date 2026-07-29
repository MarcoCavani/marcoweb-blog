---
title: "Data Backup and Restoration"
description: "A backup that has never been restored is a hope, not a control. The exam tests that restoration testing, not the backup job, is what proves recoverability, and that backups must be stored away from what they protect."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 12
minutes: 8
gated: false
videoId: "fSKg7h474E8"
taskStatement: "Evaluate whether backups are complete, stored separately from the source, and proven recoverable by restoration testing."
objectives:
  - "Explain why restoration testing, not a successful backup job, proves recoverability."
  - "State why backups must be stored offsite or geographically separate."
  - "Distinguish full, incremental and differential backups."
trap: "Assuming a backup that runs successfully is a backup that can be restored. Only a test restoration proves recoverability; the backup job completing proves only that it ran."
quiz:
  - question: "What is the MOST important control for ensuring backups will actually protect the organisation?"
    options:
      - "Confirming the backup job completes without an error message"
      - "Periodically performing a test restoration to prove the data can actually be recovered"
      - "Encrypting the backup media"
      - "Running backups as frequently as possible"
    answer: 1
    explanation: "A backup job completing tells you it ran; it does not tell you the data is complete, uncorrupted and restorable. Only a test restoration proves recoverability, that the backup can actually rebuild a working system. Untested backups routinely fail when finally needed, so periodic restoration testing is the control that matters most."
    whyWrong:
      - "A completed job with no error is necessary but not sufficient; backups can complete and still be unrestorable."
      - ""
      - "Encryption protects confidentiality of the media but says nothing about whether the data can be restored."
      - "Frequency is driven by the RPO and does not prove that any given backup can actually be recovered."
  - question: "Why should backups be stored offsite or in a geographically separate location?"
    options:
      - "To make them easier for staff to access"
      - "So that a disaster affecting the primary site does not also destroy the backups"
      - "To reduce the cost of storage media"
      - "Because backups run faster when stored remotely"
    answer: 1
    explanation: "A backup stored next to the system it protects shares the system's fate: a fire, flood, or site loss destroys both, leaving nothing to recover from. Offsite or geographically separate storage ensures that a disaster at the primary site does not also take out the means of recovery. Separation is the whole point."
    whyWrong:
      - "Ease of access is a convenience that actually argues against separation; recoverability, not accessibility, is the goal."
      - ""
      - "Remote storage is not chosen to cut media cost; it is chosen so the backups survive a site disaster."
      - "Location does not make backups run faster; the reason is survivability, not speed."
  - question: "How does a differential backup differ from an incremental backup?"
    options:
      - "They are identical"
      - "A differential backs up all changes since the last full backup; an incremental backs up only changes since the last backup of any kind"
      - "A differential backs up nothing; an incremental backs up everything"
      - "A differential is only used for databases"
    answer: 1
    explanation: "A differential backup captures everything changed since the last full backup, so it grows each day but a restore needs only the last full plus the latest differential. An incremental captures only what changed since the last backup of any type, so it is smaller each day but a restore needs the last full plus every incremental since. The trade-off is backup size against restore complexity."
    whyWrong:
      - "They are different strategies with different restore implications; treating them as identical misses the trade-off."
      - ""
      - "Both back up data; the difference is the reference point, since the last full versus since the last backup."
      - "Differential backups are not database-specific; both types apply to files and systems generally."
---

## The situation

The backups had been running green every night for two years. The reports said success, every time. Then a server was lost and the team went to restore, and found the backups were of the wrong volume, missing the database that mattered, and the last usable copy was months old. Two years of successful backup jobs, and nothing to recover. Nobody had ever tried to restore one.

This is the most common, and most preventable, resilience failure there is, and the lesson turns on a single word: restoration.

## The backup job is not the control. The restore is.

A backup job completing successfully tells you one thing: it **ran**. It does not tell you the data is complete, that it is uncorrupted, that it captured the right systems, or that it can actually rebuild a working environment. Those are only proven by doing the thing you are keeping the backup for: a **test restoration**.

This is the central point of the whole lesson, and a favourite of the exam. **Restoration testing** is the control that proves recoverability. Backups that have never been restored fail with dispiriting regularity, wrong scope, silent corruption, missing dependencies, expired media, and the failure is discovered at the worst possible moment. So the question an auditor asks is never "do the backups run?" but "when did you last successfully restore one?" A green backup report is a hope; a successful test restore is evidence.

## Store them away from what they protect

A backup exists to survive whatever destroys the original. So storing it next to the system it protects defeats the purpose: a fire, flood, power event or site loss takes out both the system and its only backup at once.

Backups are therefore stored **offsite** or in a **geographically separate** location, far enough that a disaster at the primary site cannot reach them. This might be physical media taken to a distant vault, or replication to a remote data centre or cloud region. The principle is the same one behind keeping the old system as a fallback in Domain 3: the safety net must not share the fate of the thing it is protecting. Convenience of access argues the other way, and convenience is not the goal; survivability is.

## Full, incremental, differential

Three backup strategies trade off backup size against restore effort:

- A **full backup** copies everything. Simplest to restore, one copy, but the largest and slowest to take.
- An **incremental backup** copies only what changed **since the last backup of any kind**. Smallest and fastest each day, but a restore needs the last full plus **every** incremental since, in order.
- A **differential backup** copies everything changed **since the last full backup**. It grows each day, but a restore needs only the last full plus the **latest** differential.

The exam tests the distinction directly: incremental is "since the last backup", differential is "since the last full". The practical consequence is restore complexity, incrementals are cheaper to take and costlier to restore, and how much data a failure of one link in the chain loses. Backup **frequency**, meanwhile, is set by the **RPO** from the previous lesson: the less data you can afford to lose, the more often you back up.

## Where practitioners go wrong

Two instincts cost marks. The first, and the costly one, is trusting a successful backup report as proof of recoverability. It proves the job ran, nothing more; only a test restoration proves you can actually recover, which is why untested backups are treated as unproven. The second is storing backups where the disaster can reach them, onsite, beside the server, for convenience. A backup that dies with the system it protects is no backup at all.
