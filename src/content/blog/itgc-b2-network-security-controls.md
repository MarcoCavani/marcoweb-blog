---
title: "SolarWinds and the Firewall Rules Nobody Reviewed"
description: "The SolarWinds SUNBURST attack compromised 18,000 organisations. The malware called home for months. Egress filtering and network security controls should have caught it. Here is what was missing and what auditors check."
pubDate: 2026-08-09
heroImage: "/images/itgc-b2-network-security-controls.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Network Security Controls", "ITGC", "Firewall", "SolarWinds", "Egress Filtering", "IT Audit"]
readTime: "8 min read"
---

In December 2020, cybersecurity firm FireEye discovered that its own network had been compromised. The investigation led to a startling finding: the attackers had entered through a software update for SolarWinds Orion, an IT monitoring platform used by tens of thousands of organisations globally, including multiple US federal agencies.

The attackers, later attributed to SVR, a Russian foreign intelligence service, had embedded malicious code into a legitimate SolarWinds software update. That update, distributed to approximately 18,000 organisations between March and June 2020, installed a backdoor called SUNBURST. Once installed, SUNBURST quietly communicated with command-and-control servers operated by the attackers.

For months, in tens of thousands of environments, a piece of malware was sending data out of the network and receiving instructions from an external server. In most cases, nothing stopped it. Egress filtering, had it been properly implemented and reviewed, was one of the controls that could have.

---

## The Risk

Network Security Controls govern the active enforcement mechanisms that inspect, filter, and control traffic flowing into and out of the organisation's network. While Network Architecture (B.1) defines how the network is structured, Network Security Controls define the rules and tools that enforce policy within and across that structure.

The key components include:

**Perimeter firewalls:** Inspect and filter traffic at the boundary between the organisation's network and external networks. Inbound and outbound rules define what is permitted.

**Intrusion Detection and Prevention Systems (IDS/IPS):** Monitor traffic for signatures and behavioural patterns consistent with known attacks or policy violations. IDS alerts; IPS can also block.

**Egress filtering:** Controls on outbound traffic. Many organisations invest heavily in filtering inbound traffic (stopping attackers from entering) but apply almost no controls to outbound traffic (stopping data from leaving or malware from calling home).

**Web proxies:** Route outbound web traffic through an inspection layer that can block connections to malicious or uncategorised domains.

**DNS filtering:** Block resolution of known malicious domains before a connection is even established.

The SolarWinds case is the definitive argument for egress filtering. The malware worked precisely because outbound connections to external servers were not subject to adequate inspection or restriction.

---

## The SUNBURST Mechanism

SUNBURST was designed by sophisticated attackers who understood enterprise security controls well enough to evade most of them.

After installation, SUNBURST went dormant for two weeks. This delay was deliberate: security sandbox tools typically run a program for a few minutes to observe behaviour. SUNBURST waited longer than most sandboxes operate.

After the dormancy period, SUNBURST initiated outbound DNS queries to a subdomain of avsvmcloud.com, the attacker's command-and-control domain. Critically, the subdomain encoded information about the victim environment. This allowed attackers to identify and prioritise high-value targets among the 18,000 infected organisations.

The DNS lookups resolved to IP addresses, and SUNBURST then established HTTPS connections to those addresses to receive instructions and exfiltrate data.

**What would have caught it?**

- DNS filtering that blocked or alerted on queries to newly registered or uncategorised domains
- Egress filtering rules requiring all outbound web traffic to pass through an authenticated proxy
- Firewall rules blocking direct outbound connections from servers (not just workstations) to the internet
- Network traffic anomaly detection, noting that an IT monitoring platform was initiating outbound HTTPS connections to external infrastructure

Most organisations had none of these controls applied specifically to the infrastructure running SolarWinds Orion, because that infrastructure was trusted internal tooling.

---

## What Failed

**No egress filtering on server-initiated traffic:** In most affected environments, servers running SolarWinds Orion were permitted to initiate outbound connections without inspection. Network security rules were designed for workstation users, not server processes.

**DNS queries were not monitored for anomalous patterns:** DNS is frequently overlooked as an exfiltration and C2 channel because it is considered basic infrastructure. SUNBURST exploited this blind spot.

**Firewall rulesets were not reviewed for outbound permissiveness:** Many organisations had accumulated broad outbound firewall rules over years of operation. Rules that were added for specific purposes were never removed. "Any-to-any" outbound rules on internal segments were common.

**Third-party software was implicitly trusted:** Code from a legitimate vendor was assumed to be safe. Network controls did not distinguish between traffic initiated by SolarWinds Orion and traffic initiated by any other process.

---

## What Good Looks Like

**Egress filtering by default:** Outbound traffic requires explicit allowance. Unknown destinations are blocked. Servers cannot initiate direct internet connections without going through a proxy.

**DNS monitoring:** All DNS queries are logged. Queries to newly registered domains, uncategorised domains, or domains generating unusual query volumes trigger alerts. DNS-over-HTTPS is controlled to prevent bypassing of DNS monitoring.

**Firewall ruleset review:** Firewall rules are reviewed periodically (at least annually) against a documented policy. Rules without a business justification are removed. Broad rules (any-to-any) on internal segments are prohibited unless explicitly authorised and compensated.

**Proxy for all web traffic:** Outbound HTTP and HTTPS traffic routes through a web proxy that enforces URL categorisation and logs destinations. Traffic that bypasses the proxy is blocked or alerted.

**IDS/IPS with current signatures:** Intrusion detection systems run current signature sets and are tuned to reduce false positives without suppressing true positive alerting.

---

## How Auditors Test It

When auditing Network Security Controls (Control B.2), an IT auditor will typically:

**Request firewall rulesets** for key perimeter firewalls. Review for broad permissive rules (any-to-any, any outbound), rules without documented business justification, and rules that have not been reviewed within the defined review period.

**Assess evidence of ruleset review:** Request documentation of the most recent firewall rule review. Confirm that reviews occur at least annually, results are documented, and any rules identified as unnecessary were removed.

**Test IDS/IPS:** Confirm that IDS/IPS devices are deployed, that signature updates are applied regularly, and that alert logs are reviewed. Request a sample of alerts from the period and assess whether they were actioned.

**Assess egress controls:** Test whether outbound traffic from key servers is subject to filtering or proxying. A practical test involves reviewing whether firewall rules permit direct outbound connections from server zones to the internet without inspection.

**Review DNS monitoring:** Confirm that DNS query logs are retained and reviewed. Assess whether controls exist to alert on queries to malicious or uncategorised domains.

**Test patch currency of network security devices:** Firewall firmware, IDS/IPS engines, and proxy software should be on supported, patched versions.

---

## Lessons and Recommendations

The SolarWinds attack changed how the security industry thinks about trusted software. Its enduring lesson for network security controls is specific:

**Assume that trusted processes will be compromised.** Network security controls should inspect all outbound traffic, including traffic initiated by IT tools, monitoring platforms, and vendor software. Trust is earned at each network transaction, not assumed from the source.

**Egress filtering is as important as ingress filtering.** Most data breaches involve data leaving the network. Most C2 activity involves malware calling home. Inbound filtering without egress filtering is half a control.

**Review firewall rules regularly.** Firewall rulesets grow organically over years of operational changes. Without a regular review cycle, they accumulate broad, unnecessary rules that reduce the effectiveness of the entire control.

**Log DNS.** DNS is a low-cost, high-value telemetry source. If you are not logging DNS queries and alerting on anomalous patterns, you are missing one of the most reliable signals for C2 and exfiltration activity.

**Test your controls from the inside.** Internal penetration testing, specifically testing whether a process running on a server can make arbitrary outbound internet connections, reveals egress control gaps that external testing will never find.

---

## Assess Your Network Security Controls

The MarcoWeb ITGC Tool covers the full Group B control set including Network Security Controls, with firewall review templates and structured workpapers for auditors.

[Open the ITGC Audit Tool](https://marcoweb-itgc-saas.netlify.app/)
