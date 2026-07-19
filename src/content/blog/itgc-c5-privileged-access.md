---
title: "Twitter's God Mode: How Privileged Access Became a $120,000 Bitcoin Scam"
description: "In July 2020, a teenager convinced Twitter employees to hand over access to an internal admin tool that could control any account on the platform. Obama, Biden, Musk, and Apple were among the victims. Privileged access management is the control that limits the blast radius when an insider is compromised."
pubDate: 2026-08-10
heroImage: "/images/itgc-c5-privileged-access.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Privileged Access", "ITGC", "PAM", "Twitter Breach", "Admin Access", "Insider Threat", "IT Audit"]
readTime: "8 min read"
---

On 15 July 2020, Twitter users watching their timelines witnessed something unusual. In rapid succession, the verified accounts of Joe Biden, Barack Obama, Elon Musk, Bill Gates, Apple, Uber, Kanye West, and dozens of other high-profile entities began posting variations of the same message: "I am giving back to the community. All Bitcoin sent to the address below will be sent back doubled."

Within hours, the scam had earned approximately USD $120,000 in Bitcoin from thousands of users who believed they were receiving an offer from a trusted public figure.

The attack did not involve breaking through Twitter's network perimeter. It did not require advanced malware or a zero-day vulnerability. It required a phone call, a convincing story, and a Twitter employee who had access to an internal administrative tool.

That tool, informally known inside Twitter as "God Mode," allowed its user to reset any account's email address, disable two-factor authentication, and take effective control of the account. Access to this tool was not limited to a small number of privileged staff with formal oversight. A sufficient number of Twitter employees had access to it, through a social engineering attack against a small number of them, the attackers were able to carry out one of the most visible security incidents in social media history.

---

## The Risk

Privileged Access Management (PAM) governs the accounts and users that have elevated access to systems, applications, and infrastructure: system administrators, database administrators, cloud platform owners, network engineers, and, in Twitter's case, anyone with access to powerful internal operational tools.

Privileged access is inherently high-risk because:

**Privileged accounts can bypass normal controls.** A system administrator can disable logging, modify security policies, add users, and access any data on the systems they manage. These capabilities, when misused or compromised, allow attackers to cause damage at a scale unavailable to regular user accounts.

**Privileged accounts are high-value targets.** Attackers and insider threats specifically seek privileged access because it multiplies what they can do. The Twitter attackers sought operator-level access specifically because it allowed them to take over any account on the platform without needing to compromise each target individually.

**Standing privileged access increases the impact window.** If privileged access is always available, a compromised or coerced user is dangerous at any moment. Just-in-time privilege, where elevated access is granted for a specific task and then revoked, limits the window of exposure.

**Privileged activity is high-value for attribution.** When privileged accounts are properly managed through a PAM solution, every action is recorded and attributed to the individual who requested access. This is essential for both security monitoring and post-incident investigation.

---

## The Twitter Attack

Graham Ivan Clark, 17, coordinated the attack with two associates, Mason Sheppard and Nima Fazeli. Clark used a combination of social engineering targeting Twitter employees, including a vishing call impersonating Twitter IT support, to obtain credentials for the internal administrative tool.

The tool, available to Twitter's customer support and operations teams, allowed modification of account credentials and two-factor authentication settings without the account holder's involvement. Clark and his associates used this access to compromise 130 accounts, posted fraudulent Bitcoin messages on the profiles of the most prominent 45, and directly messaged the private inboxes of an additional 36 accounts.

The attack chain was short and entirely predicated on privileged access:

1. Identify Twitter employees likely to have admin tool access, through LinkedIn research
2. Vish (phone phish) those employees, impersonating Twitter IT support and creating a false urgency around a credential reset
3. Obtain access to the admin tool via the socially engineered credentials
4. Use the tool to take over high-profile accounts
5. Post Bitcoin scam messages and harvest funds

The USD $120,000 earned was modest compared to the reputational and regulatory consequences. The SEC examined whether Twitter's security posture represented a material risk to investors, and the FTC strengthened its oversight of Twitter under an existing consent order.

Clark was sentenced to three years in juvenile prison. Sheppard received three years' probation. Fazeli received three years' probation.

---

## What Failed

**Excessive number of users with admin tool access:** The attack was possible because enough Twitter employees had access to the God Mode tool that a social engineering attack targeting a small number of them was sufficient to succeed. The number of users with access to high-impact tools should be the minimum operationally necessary.

**No just-in-time access for high-impact operations:** Admin tool access should not be standing, persistent access. It should be provisioned on request for specific operational tasks, session-recorded, and revoked when the task is complete.

**No session monitoring or anomaly alerting:** The actions taken by Clark (resetting two-factor on dozens of high-profile accounts in rapid succession, posting identical messages) were deeply anomalous compared to any legitimate operator activity pattern. SIEM correlation of privileged tool usage should have generated an alert.

**Social engineering vulnerability of credential reset process:** The process by which Twitter employees' credentials to the admin tool were reset was not adequately resistant to social engineering. Caller ID spoofing and a convincing script should not be sufficient to trigger a credential reset for a high-impact operational tool.

---

## What Good Looks Like

**Minimum necessary access to privileged tools:** The number of users with access to any high-impact internal tool is minimised. Access is role-defined, formally approved, and reviewed at least quarterly.

**Just-in-time (JIT) privilege:** Where operational needs permit, privileged access is granted dynamically for a defined session, rather than held persistently. The user requests elevation, receives time-limited access, completes the task, and access is revoked. This is standard in mature PAM implementations.

**Session recording and monitoring:** All privileged sessions are recorded. Actions taken during privileged sessions are logged and, for high-risk operations, reviewed. Anomalous patterns, such as bulk account modifications, trigger automatic alerts.

**Multi-party approval for high-impact actions:** Changes that are irreversible or that affect a high number of accounts require approval from a second person before execution. This is known as dual control and is standard for high-risk privileged operations.

**PAM vault for credential management:** A PAM solution brokers access to privileged accounts, checking credentials out on behalf of users without exposing the password, and enforcing rotation. Users cannot share or reuse privileged credentials.

**Privileged access for operational tools defined in policy:** Internal tools with broad capabilities (any tool that can modify many accounts without their owners' involvement) are classified as privileged systems and governed under the PAM framework.

---

## How Auditors Test It

When auditing Privileged Access (Control C.5), an IT auditor will typically:

**Obtain a list of privileged accounts:** Request all accounts with administrative privileges across key systems, including servers, databases, cloud management consoles, and internal operational tools. Assess whether the list of privileged users is documented, current, and proportionate to operational need.

**Test privileged access provisioning:** For a sample of privileged users, confirm that a formal approval process was followed when privileged access was granted. Assess whether business justification was documented.

**Assess PAM tool implementation:** Confirm whether a PAM solution is deployed and covers the key privileged account types. For each covered system, confirm that privileged access is brokered through the PAM tool rather than directly using shared credentials.

**Test privileged account review:** Confirm that privileged access is reviewed periodically (at least quarterly for systems holding sensitive data). Assess whether the review results in access being revoked where it is no longer justified.

**Assess session recording:** Confirm that session recording is enabled for privileged sessions on critical systems. Test that recordings are retained for the defined period.

**Test separation of duties:** Privileged users should not be able to both execute changes and approve them, both access data and manage the audit logs that record that access. Assess whether key separation of duties obligations are enforced.

---

## Lessons and Recommendations

Twitter's God Mode was well-named. Unconstrained privileged access over a large population of accounts, accessible to a significant number of employees, is inherently ungovernable at scale. The attack used nothing more sophisticated than a phone call.

**Count your privileged users and minimise the number.** Every person with access to a high-impact system is a target. Reducing that number is the single most effective control against the Twitter-style attack.

**Implement JIT privilege for all high-impact operations.** Standing persistent privileged access should be the exception, not the norm. JIT privilege eliminates the always-on attack window.

**Record and alert on privileged session anomalies.** Bulk account modifications, configuration changes outside business hours, and access from unexpected locations are all detectable signals for privileged session monitoring.

**Require dual approval for high-impact, irreversible actions.** No single person should be able to take an action that affects thousands of accounts without a second person's approval. This is the most effective control against both insider threats and compromised privileged accounts.

**Treat internal tools with broad capabilities as privileged systems.** Any tool that can modify accounts, extract data, or change configurations at scale is a privileged system, regardless of how it is categorised internally. Govern it as one.

---

## Assess Your Privileged Access Controls

The MarcoWeb ITGC Tool covers Privileged Access as part of the Group C control set, with structured assessment templates for PAM implementation, JIT access, session recording, and privileged user review.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
