---
title: "730,000 Client Records on a Home Server: The Morgan Stanley DLP Failure"
description: "A Morgan Stanley financial adviser downloaded the details of 730,000 clients to a personal device over 18 months. Data Loss Prevention controls should have caught it. When they did not, the cost was a $1 million regulatory fine and a breach affecting nearly a million people."
pubDate: 2026-07-19
heroImage: "/images/itgc-b4-data-loss-prevention.svg"
category: "IT Audit"
control: "B.4"
author: "Marco Cavani"
tags: ["Data Loss Prevention", "ITGC", "DLP", "Insider Threat", "Morgan Stanley", "IT Audit"]
readTime: "8 min read"
---

Between 2011 and 2014, Galen Marsh, a financial adviser at Morgan Stanley Wealth Management, used his legitimate access to client accounts to download the account details of approximately 730,000 clients to a personal laptop and home server. The data included client names, account numbers, investment data, and account balances.

In early 2015, a portion of the stolen data appeared on an online forum. Morgan Stanley discovered the breach not through its own monitoring systems, but through a third-party notification. The firm notified regulators and approximately 900 affected clients were contacted due to the online posting of a subset of the stolen records.

FINRA fined Morgan Stanley USD $1 million for failing to protect confidential client data. The case became one of the definitive examples of the insider threat scenario that Data Loss Prevention controls are specifically designed to detect and prevent.

---

## The Risk

Data Loss Prevention (DLP) refers to the tools and processes that monitor, detect, and prevent the unauthorised transfer or exfiltration of sensitive data, whether by malicious insiders, compromised accounts, or accidental disclosure.

The risk profile for DLP includes:

**Insider threat:** Employees with legitimate access to sensitive data who use that access to exfiltrate information, either for personal gain, competitive advantage, or to cause harm.

**Credential compromise:** An external attacker who obtains legitimate user credentials and uses them to access and exfiltrate data, mimicking the behaviour of a trusted insider.

**Accidental disclosure:** Employees who inadvertently email sensitive data externally, upload it to personal cloud storage, or attach it to incorrect recipients.

**Removable media:** USB devices and other portable storage used to copy large volumes of data outside the organisation's control boundary.

In the Marsh case, the exfiltration occurred gradually, over an 18-month period. At no point did the volume of data transferred on any single day trigger an alert that resulted in investigation. This is a DLP detection failure: the control existed in principle but not in practice.

---

## The Morgan Stanley Case

Marsh's access was entirely legitimate. As a financial adviser, he had valid business reasons to access client account data. The method of exfiltration, downloading data to a personal device, was the anomaly that a DLP control should have detected.

The failure had several dimensions:

**Volume:** 730,000 client records is an extraordinary volume of data for any single adviser to access. Transaction-level monitoring of data volumes accessed, particularly bulk downloads, should have been a core DLP detection rule.

**Destination:** Data downloaded to a non-corporate device or transmitted to a personal email address or cloud storage service is the quintessential DLP alert scenario. If Marsh transferred data to his personal laptop, the transmission should have been monitored.

**Time pattern:** Exfiltration over 18 months implies either that individual transfer volumes were small enough to avoid thresholds, or that thresholds were not configured correctly, or that alerts were generated but not reviewed and investigated.

The online posting was what triggered discovery. Had the data not appeared publicly, the breach might never have been detected internally.

Morgan Stanley subsequently invested significantly in enhancing its DLP program, including real-time monitoring of large data access events and data movement to external devices.

---

## What Failed

**Insufficient monitoring of bulk data access:** A DLP program that monitors outbound data transfer but not internal bulk data access misses the first half of the insider exfiltration chain. Downloading 730,000 records, regardless of where they went next, should have been an alert.

**No effective removable media or personal device controls:** Morgan Stanley's controls at the time did not prevent or alert on data transfer to personal devices. This is a fundamental DLP gap.

**Alert thresholds set too high or not monitored:** Whether alerts were generated and not acted upon, or never generated due to misconfigured thresholds, the outcome was the same: 18 months of exfiltration without intervention.

**Discovery was reactive, not proactive:** Detection came from an external notification, not from internal monitoring. A functioning DLP program generates internal alerts that trigger investigation before data appears online.

---

## What Good Looks Like

**Data classification:** Data is classified at creation or ingestion, using labels such as Public, Internal, Confidential, and Restricted. Classification drives DLP policy: more sensitive data is subject to stricter transfer controls.

**Endpoint DLP:** Agents on managed endpoints monitor and control file transfers to removable media, personal cloud storage, and personal email. Transfers of classified data to unapproved destinations are blocked or alerted.

**Network DLP:** Content inspection on outbound network traffic detects patterns consistent with sensitive data (e.g., bulk account numbers, Social Security numbers, health records) leaving the organisation via email, web upload, or other channels.

**User behaviour analytics:** DLP is complemented by tools that establish baseline behaviour for each user and alert on deviations, such as a financial adviser accessing 100 times more records than their weekly average.

**Insider threat program:** DLP tools are integrated into a broader insider threat program that includes cross-functional investigation (HR, Legal, Security) and defined procedures for acting on alerts.

**Periodic DLP policy review:** DLP rules and thresholds are reviewed and tested regularly. Alert response rates, false positive rates, and closed investigations are metrics used to assess whether the program is effective.

---

## How Auditors Test It

When auditing Data Loss Prevention (Control B.4), an IT auditor will typically:

**Request the DLP policy documentation:** Confirm that a written DLP policy exists, is current, and covers all relevant data categories and channels (email, web, removable media, cloud).

**Assess technical deployment:** Confirm that DLP tools are deployed on endpoints and/or at network egress points. Review coverage, including whether all sensitive data systems are within scope.

**Test alert configuration:** Review a sample of DLP rules for key sensitive data categories. Assess whether thresholds are configured at a level that would detect the Morgan Stanley scenario (e.g., bulk data access or transfer of more than a defined record count).

**Test alert response:** Request a sample of DLP alerts generated during the period. For each, trace the alert to a documented investigation outcome. Assess timeliness and quality of response.

**Assess removable media controls:** Test whether USB device controls are enforced on a sample of endpoints. Attempt to write a test file to a personal USB device on a managed endpoint, or review configuration evidence.

**Review data classification:** Assess whether the organisation has a working data classification scheme and whether classification is applied to sensitive data repositories.

---

## Lessons and Recommendations

The Morgan Stanley case remains instructive because it is not primarily a technology failure. It is a program design failure: DLP tools existed, but were not configured or monitored to detect the specific exfiltration pattern that occurred.

**Monitor internal access volumes, not just outbound transfers.** An insider exfiltration begins with internal access to more data than is needed. Bulk access events are the first detectable signal.

**Configure removable media controls with blocking, not alerting only.** For sensitive data categories, blocking transfer to unapproved external devices is preferable to alerting. Alerts that are not reviewed provide no protection.

**Integrate DLP alerts into a reviewed queue.** Alerts that go to a mailbox that nobody monitors are not controls. DLP effectiveness depends on the human response to alerts.

**User behaviour analytics supplements, but does not replace, DLP.** Baseline behavioural anomaly detection catches patterns that rule-based DLP misses. Both are needed.

**Test your DLP program.** Red team exercises that simulate insider exfiltration test whether DLP rules, thresholds, and alert response actually work. Do not assume that configured controls are effective controls.

---

## Assess Your DLP Controls

The MarcoWeb ITGC Tool covers the full Group B control set including Data Loss Prevention, with structured assessment templates for DLP policy, technical deployment, and alert review.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
