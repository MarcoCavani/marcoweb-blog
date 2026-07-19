---
title: "The Breach That Ran for Three Months Because Nobody Watched the Logs"
description: "Capital One's 2019 breach exposed 100 million customer records. AWS CloudTrail logs captured every step of the attack in real time. Nobody was watching. Event Logging is the control that turns data into detection."
pubDate: 2026-07-22
heroImage: "/images/itgc-b6-event-logging.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Event Logging", "ITGC", "Log Management", "Capital One Breach", "Audit Trail", "IT Audit"]
readTime: "8 min read"
---

On 22 July 2019, Capital One Financial Corporation disclosed that a former Amazon Web Services employee had exploited a misconfigured Web Application Firewall (WAF) to access Capital One's AWS environment and exfiltrate data belonging to approximately 100 million individuals in the United States and 6 million in Canada.

The exposed data included names, addresses, postal codes, phone numbers, email addresses, dates of birth, income information, credit scores, payment history, and for approximately 140,000 individuals, Social Security numbers.

The attacker, Paige Thompson, conducted the breach between 22 March and 23 July 2019, a period of approximately four months. The evidence of the breach, including every API call, every data access event, and every network connection, was recorded in AWS CloudTrail logs in near real time. Capital One received the logs. The logs were not actively monitored in a way that would have detected the anomalous behaviour during the four-month period the breach was underway.

Capital One discovered the breach only after a GitHub repository containing stolen data was reported by an external party on 17 July 2019. The Office of the Comptroller of the Currency fined Capital One USD $80 million. Capital One also paid USD $190 million to settle a class action lawsuit.

The cloud infrastructure logged everything. Detection required someone to look.

---

## The Risk

Event Logging is the systematic collection and retention of records documenting security-relevant activities across an organisation's technology environment. It is the foundational capability that all other detection and response activities depend on.

Without adequate event logging:

- Incidents cannot be detected in real time or near real time
- Post-incident forensic investigation cannot reconstruct what happened
- Audit evidence of access and activity cannot be produced
- Regulatory and compliance obligations relating to record retention cannot be met

Event logging is not the same as SIEM (which is covered in B.7). Logging is the capture and retention of events. SIEM is the analysis and correlation of those events. You cannot run a SIEM without logs. You cannot investigate an incident without logs. You cannot demonstrate compliance without logs.

The Capital One case is instructive precisely because logging was working correctly. CloudTrail captured the events. The failure was in the monitoring and review layer, which means it spans both B.6 (event logging) and B.7 (SIEM). Here, we focus on the logging dimension: what was captured, what should be captured, and how logs must be protected.

---

## The Capital One Attack, Step by Step

Paige Thompson exploited a Server Side Request Forgery (SSRF) vulnerability in Capital One's WAF configuration. The WAF was running on an EC2 instance with an overly permissive IAM role. By sending a crafted HTTP request, Thompson was able to cause the WAF instance to request credentials from the EC2 Instance Metadata Service (IMDS), a cloud-native service that provides temporary credentials to EC2 instances.

Those credentials, intended for the WAF's legitimate operations, had far broader permissions than necessary. Thompson used them to list S3 buckets, identify sensitive data stores, and exfiltrate approximately 30 GB of data.

Every step of this process generated AWS CloudTrail log entries:
- The SSRF-triggered IMDS requests appeared in VPC flow logs
- The credential usage from an unexpected source IP appeared in CloudTrail
- The S3 ListBuckets and GetObject API calls appeared in S3 access logs and CloudTrail

The logs were there. Monitoring that would have detected the anomalous credential usage (legitimate WAF credentials being used from an unexpected external IP address) was not in place.

---

## What Failed

**No real-time alerting on anomalous API usage:** CloudTrail logs credential usage, including the source IP address. Credentials being used from an external IP that does not belong to the credential's expected usage profile is a detectable anomaly that should have triggered an alert.

**Excessive IAM permissions (a logging-adjacent failure):** The WAF's IAM role had permissions to list all S3 buckets and access sensitive stores. This is a least-privilege failure that amplified the impact of the logging monitoring gap. Logging cannot compensate for excessive access, but monitoring would have caught the unusual access volume.

**No review process for anomalous log patterns:** Capital One received CloudTrail logs. The absence of review is the core failure. Logging without review is telemetry that produces no security value.

**Log centralisation gaps:** When logs from multiple services (CloudTrail, VPC flow logs, S3 access logs) are not centralised and correlated, detection of multi-step attacks becomes significantly harder.

---

## What Good Looks Like

**Comprehensive log coverage:** All security-relevant events are logged, including authentication events (success and failure), privilege escalation, access to sensitive data, network connections, system and configuration changes, and administrative actions.

**Centralised log aggregation:** Logs from all sources are forwarded to a central repository, such as a SIEM, log management platform, or security data lake. Centralisation enables correlation across systems and sources.

**Log integrity protection:** Logs must not be modifiable by the systems or users whose activity they record. Logs are forwarded to a separate, independently controlled storage environment. In cloud environments, S3 Object Lock or equivalent prevents log tampering.

**Defined retention period:** Logs are retained for a period defined by the organisation's policy and regulatory obligations. Security event logs are commonly retained for 12 to 24 months. Financial services regulators often require longer retention for specific log categories.

**Log review process:** Logs are actively reviewed. This may be automated (SIEM alerting) or manual (periodic review of specific log categories). The review process produces documented outcomes: alerts investigated, anomalies resolved, clean log review recorded.

**Audit trail for privileged access:** Actions performed by administrators and privileged users are specifically captured and subject to enhanced review. Privileged activity is a high-risk category that warrants dedicated log monitoring.

---

## How Auditors Test It

When auditing Event Logging (Control B.6), an IT auditor will typically:

**Assess log coverage:** Map in-scope systems to the log sources required by policy. Confirm that critical systems (identity platforms, privileged access management tools, databases, firewalls, cloud management consoles) are generating and forwarding logs. Gaps in coverage are a finding.

**Test log centralisation:** Confirm that logs from critical systems are forwarded to a central repository outside the control of the systems that generated them. Review configuration evidence.

**Assess log integrity controls:** Confirm that mechanisms exist to prevent log tampering. In cloud environments, review S3 bucket policies and CloudTrail integrity validation configuration. For on-premises log servers, confirm separation of duties between system administrators and log administrators.

**Test retention:** Confirm that logs are retained for the period specified in policy. Request logs from the earliest date within the retention period and confirm they are retrievable.

**Assess review:** Request evidence that log review occurs. This may include SIEM alert records, daily/weekly log review reports, or email records of review outcomes. The key question is: does someone actually look at the logs?

**Test privileged activity logging:** For a sample of privileged access events during the period, confirm that the event appears in logs and that the log entry contains sufficient information (who, what, when, from where) to support investigation.

---

## Lessons and Recommendations

Capital One's breach is the standard answer to the question: "Why do we need to monitor logs if we're in the cloud and everything is already audited?" The answer is: cloud audit logs are necessary but not sufficient. They require active monitoring to produce security value.

**Turn on all available logging.** In cloud environments, many log sources are opt-in. CloudTrail management events, data events, and VPC flow logs are all separately configured. Enable them all for production environments.

**Centralise before you analyse.** Logs that live only in their originating system are harder to correlate, harder to retain, and easier to tamper with. Centralised log management is the foundation of effective monitoring.

**Protect your logs as carefully as your data.** Attackers who gain access to your environment will often target logs first. An attacker who deletes or modifies logs before you detect the breach significantly complicates forensic investigation. Separate access controls and write-once storage protect log integrity.

**Define what "reviewing logs" means.** A policy that says "logs are reviewed regularly" without defining what is reviewed, by whom, at what frequency, and what constitutes a finding is not a control. Define the process and test its execution.

**Use the cloud provider's anomaly detection.** AWS GuardDuty, Azure Defender for Cloud, and Google Security Command Center use machine learning to detect anomalous API usage, unusual authentication, and network anomalies. These complement but do not replace centralised logging.

---

## Assess Your Event Logging Controls

The MarcoWeb ITGC Tool covers the full Group B control set including Event Logging, with structured assessment templates for log coverage, centralisation, retention, and review.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
