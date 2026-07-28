---
title: "Security Testing and Monitoring"
description: "A scan lists the weaknesses; a penetration test proves what they'd cost you. The exam tests that distinction, and why logs no one reads are not a detective control at all."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 15
minutes: 7
gated: false
taskStatement: "Evaluate whether security weaknesses are tested for and whether monitoring can actually detect an attack."
objectives:
  - "Distinguish vulnerability scanning from penetration testing."
  - "Explain the purpose of centralised log monitoring and a SIEM."
  - "Recognise that collecting logs no one reviews is not detection."
trap: "Confusing a vulnerability scan with a penetration test, and treating log collection as monitoring. A scan finds known weaknesses broadly; a pen test exploits them to prove impact; and logs give no detection unless someone, or something, reviews them."
quiz:
  - question: "What is the difference between a vulnerability scan and a penetration test?"
    options:
      - "They are the same activity"
      - "A vulnerability scan automatically identifies known weaknesses broadly; a penetration test attempts to exploit weaknesses to demonstrate real, achievable impact"
      - "A vulnerability scan is done by attackers; a penetration test is done by software"
      - "A penetration test only checks passwords"
    answer: 1
    explanation: "A vulnerability scan is largely automated and breadth-first: it enumerates known vulnerabilities across many systems and reports them. A penetration test is deeper and often manual: a skilled tester attempts to actually exploit weaknesses, and chain them, to demonstrate what an attacker could really achieve. Scans find potential issues; pen tests prove exploitable impact."
    whyWrong:
      - "They are distinct in depth and intent: identify broadly versus exploit to prove impact."
      - ""
      - "A scan is run by the organisation's tools; a pen test is performed by skilled testers, not the reverse."
      - "A penetration test covers far more than passwords; it probes the whole attack surface."
  - question: "What is the primary purpose of a SIEM (security information and event management) system?"
    options:
      - "To encrypt log files so attackers cannot read them"
      - "To aggregate and correlate logs and events across systems, so suspicious activity can be detected and alerted on"
      - "To replace the need for firewalls and access control"
      - "To store logs indefinitely for storage's own sake"
    answer: 1
    explanation: "A SIEM collects logs and events from across the environment, correlates them, and raises alerts on patterns that indicate an attack, giving centralised detection that individual system logs cannot. Detection is what lets an organisation respond; without correlation and alerting, an attack spread across several systems is easy to miss."
    whyWrong:
      - "A SIEM's purpose is detection and correlation, not encrypting logs."
      - ""
      - "A SIEM detects and alerts; it does not replace preventive controls like firewalls and access control."
      - "Storing logs is a means; the purpose is to analyse them for detection, not to hoard them."
  - question: "An organisation collects detailed logs from all its systems, but no one and nothing reviews them. What is the MAIN problem?"
    options:
      - "The logs take up too much disk space"
      - "Logging without review provides no detection: an attack recorded in logs nobody reads goes unnoticed"
      - "The logs should be printed for safekeeping"
      - "There is no problem; collecting logs is sufficient"
    answer: 1
    explanation: "Logs are only a detective control if they are actually monitored and acted upon. Collected but unreviewed, they record an attack that no one sees, so detection never happens, the same silent-failure problem as an unmonitored batch job in Domain 4. The value is in the monitoring and response, not merely in generating the logs."
    whyWrong:
      - "Disk space is a minor operational cost next to the absence of any detection."
      - ""
      - "Printing logs does not make them reviewed; the gap is analysis and alerting, not storage medium."
      - "Collecting logs is not sufficient; unreviewed logs detect nothing."
---

## The situation

The security team runs a monthly vulnerability scan and files the report, and calls it their penetration test. Separately, every system ships its logs to a central store that has grown to terabytes, which no one has ever queried. So the organisation believes it both tests and monitors its security, when in truth it does neither as intended: a scan is not a pen test, and logs no one reads are not monitoring.

Testing and monitoring are how an organisation finds its weaknesses before attackers do, and detects them when they try. Both are easy to have in name only.

## Scanning versus penetration testing

The exam draws a firm line between two activities that people conflate:

- A **vulnerability scan** is largely **automated** and **breadth-first**. It enumerates **known** vulnerabilities across many systems, missing patches, weak configurations, exposed services, and reports them. It is fast, repeatable, and good at coverage, but it reports **potential** issues without proving they can be exploited.
- A **penetration test** is **deeper** and often **manual**. A skilled tester attempts to **actually exploit** weaknesses, and chain them together, to demonstrate what a real attacker could achieve. It proves **exploitable impact**, not just presence.

So a scan tells you what weaknesses **might** exist; a pen test shows what an attacker could **do** with them. They are complementary, breadth from scanning, depth from testing, but they are not the same, and a scan report is not a penetration test. When a question contrasts them, scanning is automated identification of known issues, and penetration testing is active exploitation to demonstrate real risk.

## Monitoring and the SIEM

Finding weaknesses is one half; **detecting** attacks as they happen is the other. **Continuous monitoring** watches the environment for signs of compromise, and a **SIEM** (security information and event management) system is the common tool: it **aggregates** logs and events from across the estate, **correlates** them, and **alerts** on patterns that indicate an attack.

Correlation is the point. An attack often shows up as small, unremarkable events on several systems, a failed login here, an odd connection there, that only reveal themselves when brought together. Individual system logs, viewed in isolation, miss this; a SIEM is what turns scattered records into a detection.

## Logs no one reads are not a control

Which brings us to the terabytes no one queries. Logs are a **detective control only if they are actually reviewed and acted upon**, by people, by a SIEM, or both. Collected and never examined, they faithfully record an attack that nobody sees, so **detection never happens**. It is the same **silent-failure** problem as the unmonitored batch job in Domain 4: the event occurred, the record exists, and no one is watching.

So the finding in the scenario is not the storage cost; it is that logging without monitoring provides **no detection**. The value was never in generating the logs. It is in the monitoring and the response that logs make possible.

## Where practitioners go wrong

Two instincts cost marks. The first is treating a vulnerability scan and a penetration test as the same thing; a scan identifies known weaknesses broadly, a pen test exploits them to prove real impact, and one does not substitute for the other. The second is equating collecting logs with monitoring. Logs are only a control when something reviews them and can raise an alarm; unread, they detect nothing, however complete they are.
