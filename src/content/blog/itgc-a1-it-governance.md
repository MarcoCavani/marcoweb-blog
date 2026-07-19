---
title: "Why IT Governance Is the Control That Governs All Controls"
description: "IT Governance sets the tone from the top. When boards and executives treat cybersecurity as someone else's problem, attackers treat your organisation as their next target. The Colonial Pipeline breach proved it."
pubDate: 2026-07-12
heroImage: "/images/itgc-a1-it-governance.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["IT Governance", "ITGC", "COBIT", "Board Accountability", "Colonial Pipeline", "IT Audit"]
readTime: "8 min read"
youtubeId: "dCmt4S8f7as"
---

In May 2021, a ransomware group called DarkSide shut down the largest fuel pipeline in the United States. Colonial Pipeline, supplying roughly 45% of the East Coast's fuel, paid USD $4.4 million in ransom and halted operations for six days. Petrol stations ran dry. States declared emergencies.

The breach was not technically sophisticated. Attackers used a single compromised VPN password, on an account with no multi-factor authentication enabled. The pipeline kept flowing, but Colonial shut it down anyway out of fear that their billing system had been compromised. The technical failure was real. But the deeper failure was structural: nobody with authority over both the IT and OT environments had been asking the right governance questions.

That is what IT Governance is supposed to prevent.

---

## The Risk

IT Governance is the first control in the ITGC framework for good reason. It establishes whether an organisation treats IT as a strategic asset or an operational afterthought. Without board-level accountability, formal oversight structures, and a documented IT strategy aligned to business objectives, every control downstream operates without a mandate.

The risk is not a missing firewall rule. The risk is that nobody has defined who is responsible for ensuring firewall rules exist, who reviews them, who receives escalated alerts, and who authorises exceptions. Governance provides that accountability scaffolding.

Without it:

- IT decisions are made reactively, not strategically
- Security investment is determined by convenience, not risk
- Incidents are managed in isolation, not reported upward
- No one individual or committee owns the oversight of information risk

Auditors classify poor IT Governance as a material weakness because it undermines the reliability of every other control in the environment.

---

## The Colonial Pipeline Case

Colonial Pipeline had IT policies. They had security teams. They had an IT function. What they lacked was an effective governance structure that brought those elements together under clear board accountability.

The DarkSide group gained initial access through a legacy VPN account. That account was still active despite the employee who used it having likely moved on. It had no MFA. Nobody had reviewed legacy access. The account was in scope of the billing system, which Colonial's leadership was not confident they could isolate safely from the OT network controlling the pipeline itself.

That lack of confidence, that absence of a clear IT/OT governance boundary, is what caused the shutdown. Not the ransomware itself. Colonial's board and executive team had not established clear ownership of the intersection between business IT and operational technology. When the crisis hit, the governance vacuum created the operational crisis.

The FBI recovered approximately USD $2.3 million of the ransom payment. The reputational and regulatory cost was significantly higher.

---

## What Failed

Colonial Pipeline's governance gaps included:

**No active oversight of legacy accounts.** Access provisioning and termination fell outside the scope of regular governance review cycles.

**No clear IT/OT boundary ownership.** The board and executive team had not defined who was responsible for the integration of business IT systems and industrial control systems.

**No board-level cyber risk reporting.** Without a formal governance structure, there was no mechanism for cybersecurity risk to reach the board with sufficient context for meaningful oversight.

**Policy without enforcement.** Policies existed but governance mechanisms to verify compliance were absent.

---

## What Good Looks Like

Organisations with mature IT Governance demonstrate several characteristics that auditors look for:

**Board-level accountability:** The board receives regular reporting on IT risk, including key risk indicators, significant incidents, and the status of the IT security program. A board-level risk or audit committee formally oversees IT governance.

**Documented IT strategy:** A current IT strategic plan, reviewed and approved by executive leadership, links technology investment to business objectives. It is not a project list. It is a risk-informed roadmap.

**Governance frameworks:** The organisation applies a recognised framework such as COBIT, ISO 27001, or NIST CSF to structure its IT governance activities. Maturity is assessed periodically.

**Clear accountability structures:** An IT Steering Committee or equivalent body meets regularly. Minutes are recorded. Decisions are documented. Risk exceptions require formal approval.

**IT policies:** A suite of IT policies covers all material areas (acceptable use, access control, change management, incident response, business continuity). Policies are reviewed annually and approved at the appropriate level.

---

## How Auditors Test It

When auditing IT Governance (Control A.1), an IT auditor typically performs the following procedures:

**Documentation review:** Request and inspect the IT strategic plan, IT governance framework documentation, and IT policy suite. Assess currency (last review date), coverage (all material IT risk areas), and approval authority.

**Committee structure:** Obtain evidence that an IT governance committee or equivalent body exists. Review meeting minutes from the audit period. Assess whether agenda items include risk reporting and whether decisions are documented.

**Board reporting:** Review samples of IT risk reports presented to the board or audit committee during the period. Assess whether reporting covers security posture, material incidents, and control exceptions.

**Policy completeness:** Map the policy suite against a standard framework (COBIT, ISO 27001 Annex A). Identify gaps. Assess whether policies address all high-risk areas.

**Roles and responsibilities:** Review the IT organisational chart. Confirm that roles with accountability for key controls (CISO, IT Director, risk owner) are filled by named individuals. Assess segregation of duties at the governance level.

**Exception management:** Request a log of IT policy exceptions approved during the period. Assess whether exceptions are formally approved, time-limited, and subject to compensating controls.

---

## Lessons and Recommendations

The Colonial Pipeline breach taught the industry that governance failures are not abstract. They translate directly into operational consequences.

For organisations building or maturing their IT Governance:

**Start with accountability.** Define who owns IT risk at the board level. It does not need to be a board member with deep technical knowledge. It needs to be someone with authority to ask hard questions and demand answers.

**Review your IT strategy annually.** An IT strategy that was current three years ago does not reflect today's threat landscape. Build a review cycle into your governance calendar.

**Treat IT/OT boundaries as a governance problem, not a technical one.** In any organisation with operational technology, the governance of that boundary must be explicit, documented, and owned.

**Do not confuse having policies with having governance.** Policies without monitoring, enforcement, and board visibility are documentation exercises.

**Include cybersecurity in board reporting.** Boards cannot govern what they cannot see. A quarterly security risk report, even a brief one, creates accountability that changes organisational behaviour.

---

## Assess Your IT Governance Controls

The MarcoWeb ITGC Tool maps all 38 controls across Groups A through I, including IT Governance. Use it to assess your current control posture, identify gaps, generate workpapers, and track evidence collection across your audit cycle.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
