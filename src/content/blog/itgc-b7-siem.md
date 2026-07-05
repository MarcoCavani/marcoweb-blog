---
title: "Uber Paid $100,000 to Cover Up a Breach That a SIEM Should Have Caught"
description: "In 2016, attackers accessed Uber's GitHub, found AWS credentials in plain text, and downloaded 57 million user records. The entire attack was detectable. The signals existed. No system was watching and correlating them. That is what a SIEM is for."
pubDate: 2026-09-13
heroImage: "/images/itgc-b7-siem.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["SIEM", "ITGC", "Security Monitoring", "Uber Breach", "Threat Detection", "IT Audit"]
readTime: "8 min read"
---

In late 2016, two attackers accessed Uber's private GitHub repositories, discovered AWS access keys embedded in source code, used those keys to access an AWS S3 bucket containing a backup of Uber's rider and driver database, and downloaded the personal information of 57 million Uber users and 600,000 driver's licence numbers for US-based drivers.

Uber did not detect the breach through any security monitoring system. The company discovered what had happened only when the attackers made contact and demanded payment. Uber's then-Chief Security Officer, Joe Sullivan, authorised a USD $100,000 payment to the attackers, framed as a bug bounty, and arranged for them to sign NDAs. The breach was concealed from regulators and the public for more than a year.

When the concealment became public in 2017 under a new Uber leadership team, the consequences were severe: USD $148 million in regulatory settlements, Sullivan's criminal conviction for obstruction and concealment, and lasting reputational damage.

At no point during the attack, from the initial GitHub access to the AWS download of 57 million records, did a SIEM generate an alert that triggered a security response. The logs existed. The correlation did not.

---

## The Risk

A Security Information and Event Management (SIEM) system is the platform that ingests, normalises, correlates, and analyses log data from across the technology environment to detect threats in real time or near real time. Where Event Logging (B.6) is about capturing and retaining events, SIEM is about making those events actionable.

Without SIEM:

- Logs from individual systems exist in isolation, impossible to correlate across the attack chain
- Threat detection depends on manual log review, which is slow, inconsistent, and unscalable
- Mean Time to Detect (MTTD) increases significantly, giving attackers more time to complete their objectives
- Organisations cannot demonstrate proactive security monitoring to auditors or regulators

The Uber case illustrates the specific SIEM failure mode of missing API credential abuse: an attacker uses legitimate credentials obtained from a compromised source to access cloud resources. The individual API calls look, in isolation, like legitimate activity. SIEM correlation, detecting that the credentials are being used from an unusual IP address, at an unusual time, to download an unusually large volume of data, is what distinguishes the attack from legitimate access.

---

## The Uber Attack Chain

The attack involved several discrete stages, each of which generated log evidence:

**Stage 1: GitHub reconnaissance.** The attackers accessed Uber's private GitHub repositories, which were misconfigured to permit external access with valid GitHub credentials. GitHub access logs would have recorded the authentication events and the repositories accessed.

**Stage 2: Credential discovery.** Within the repositories, the attackers found AWS access key IDs and secret access keys embedded in source code. This is a well-known, widespread vulnerability: developers hardcode credentials into code and commit them to source control.

**Stage 3: AWS access.** Using the discovered credentials, the attackers authenticated to Uber's AWS environment. AWS CloudTrail would have logged the authentication events, including the source IP address, which would not match any known Uber corporate IP range.

**Stage 4: Data exfiltration.** The attackers listed S3 buckets, identified the relevant backup data store, and downloaded approximately 57 million records. AWS S3 access logs and CloudTrail data events would have recorded every ListBuckets and GetObject call.

A SIEM with appropriate rules and context would have correlated several anomalies:

- AWS authentication from an external, non-Uber IP address using production credentials
- Bulk S3 access (thousands of GetObject calls) immediately following authentication from that IP
- Data volume downloaded (the backup was large) in a single session

Any one of these signals, in context, should have triggered an alert.

---

## What Failed

**No SIEM correlation rules for credential misuse from unexpected sources:** AWS CloudTrail records source IP for every API call. A rule that alerts when production credentials are used from an IP address not in a known corporate or bastion range is a standard SIEM use case.

**No GitHub monitoring integrated into the SIEM:** GitHub audit logs were not forwarded to or correlated by Uber's security tooling. The initial unauthorised repository access was invisible to the security team.

**No S3 data access alerting:** The volume of S3 GetObject calls from the attacker's session was orders of magnitude higher than normal operational access patterns. Without SIEM correlation of access volume against baseline, this anomaly went undetected.

**No process for acting on alerts (if any existed):** It is possible that individual alerts were generated but went unreviewed. SIEM effectiveness requires both technical detection and human response.

---

## What Good Looks Like

**Broad log ingestion:** A mature SIEM ingests logs from all significant security sources: identity platforms, cloud management APIs (CloudTrail, Azure Activity Log), endpoint detection systems, network devices, web application firewalls, and SaaS application audit logs.

**Use case library:** SIEM detection logic is built around a library of specific threat scenarios, aligned to the MITRE ATT&CK framework. Use cases are documented, tested, and regularly reviewed for continued relevance. Uber's attack maps to several ATT&CK techniques: T1552.001 (credentials in files), T1078 (valid accounts), T1530 (data from cloud storage).

**Baseline and anomaly detection:** Beyond rule-based detection, SIEM platforms with User and Entity Behaviour Analytics (UEBA) build baseline profiles and alert on statistically significant deviations. An employee's credentials being used from a foreign IP at 3am is a deviation from their baseline, detectable without a pre-written rule.

**Alert management and SLA:** Alerts are triaged and investigated within defined timeframes. Critical alerts are investigated within the same business day. A SIEM that generates alerts nobody reviews provides no security value.

**Mean Time to Detect tracking:** MTTD is tracked and reported. Reductions in MTTD over time demonstrate that the SIEM program is becoming more effective. Increases signal that coverage or response capacity needs attention.

---

## How Auditors Test It

When auditing SIEM (Control B.7), an IT auditor will typically:

**Assess SIEM scope:** Request the list of log sources feeding the SIEM. Compare against the in-scope system inventory. Identify significant sources that are not integrated (e.g., cloud management APIs, identity platforms, or SaaS applications). Integration gaps are audit findings.

**Review the use case library:** Request documentation of the SIEM's detection rules or use cases. Assess whether key threat scenarios are covered, including credential misuse, privilege escalation, bulk data access, and lateral movement.

**Test alert response:** Request a sample of SIEM alerts generated during the period. For each alert, trace through to the documented investigation outcome. Assess whether alerts were actioned within the defined SLA and whether outcomes were recorded.

**Assess false positive rates:** A SIEM with an extremely high false positive rate will have its alerts routinely ignored. Request false positive rate metrics and assess whether tuning activities occur to manage alert quality.

**Review MTTD metrics:** Request the MTTD metric for the period and compare against the organisation's target. Assess trends.

**Test GitHub/SaaS integration:** Specifically for organisations with developer environments and SaaS platforms, confirm that audit logs from these sources are integrated into the SIEM. Uber's breach would have been partially visible in GitHub audit logs.

---

## Lessons and Recommendations

Uber's breach did not require advanced persistent threat tools or zero-day exploits. It required a misconfigured GitHub repository, credentials in source code, and the absence of SIEM correlation. All three are controllable.

**Scan your source code repositories for credentials.** Tools like GitHub Advanced Security, GitGuardian, and Trufflesecurity automatically detect secrets in code and alert developers before they are committed or merged. This is the prevention control; SIEM is the detection control when prevention fails.

**Integrate cloud management APIs into your SIEM.** CloudTrail, Azure Activity Log, and Google Cloud Audit Logs are the most valuable security telemetry available in cloud environments. They must be in your SIEM.

**Write a use case for credential use from unexpected locations.** This single detection rule would have identified Uber's attack. It is one of the highest-value SIEM use cases available and applies to almost every organisation.

**Measure and manage MTTD.** If you are not measuring how long it takes to detect a breach, you cannot manage it. The industry benchmark for MTTD ranges from days to weeks for mature organisations. Less mature environments average months.

**Review, do not archive.** A SIEM that generates alerts that nobody reviews is an expensive log archive. Define alert review SLAs, assign ownership, and report on adherence.

---

## Assess Your SIEM Controls

The MarcoWeb ITGC Tool covers the full Group B control set including SIEM, with structured assessment templates for log source integration, use case coverage, and alert management.

[Open the ITGC Audit Tool](https://marcoweb-itgc-saas.netlify.app/)
