---
title: "Samsung Engineers Sent Proprietary Source Code to ChatGPT. Three Times."
description: "In April 2023, Samsung discovered that employees had pasted confidential source code, test sequences, and internal meeting notes into ChatGPT in three separate incidents. The data cannot be retrieved. AI Controls exist to prevent exactly this scenario."
pubDate: 2026-07-29
heroImage: "/images/itgc-b9-ai-controls.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["AI Controls", "ITGC", "Generative AI", "Data Security", "Samsung", "ChatGPT", "IT Audit"]
readTime: "7 min read"
---

In March 2023, Samsung Electronics lifted its internal ban on ChatGPT for semiconductor engineers, responding to pressure from staff who wanted access to generative AI tools for productivity. The policy change came with instructions to use the tool carefully with company information.

Within three weeks, three separate incidents were reported internally:

In the first, an engineer pasted source code from a database into ChatGPT and asked the AI to identify bugs. In the second, another engineer entered confidential source code related to Samsung's equipment and requested code optimisation. In the third, an employee recorded a confidential internal meeting and used an AI tool to generate summary notes, uploading the audio or transcript to an external AI service.

Samsung could not retrieve any of the data. Under OpenAI's terms of service at the time, user inputs could be used to train future models. The proprietary semiconductor code and internal meeting content had been transmitted to an external service operated by a third party in the United States, outside Samsung's control.

Samsung subsequently reimposed a ban on generative AI tools on corporate devices. The AI market had effectively outpaced Samsung's governance framework for a critical three-week window, with consequences that cannot be fully quantified.

This is the defining case for why IT General Controls now include an AI Controls category.

---

## The Risk

Generative AI tools introduce a category of risk that did not exist at meaningful scale before 2023. The core risk is data exfiltration through AI input: employees using legitimate AI tools for legitimate productivity purposes inadvertently, or deliberately, transmit confidential organisational data to external third-party platforms.

The secondary risks include:

**Hallucinated output used as fact:** AI tools generate plausible-sounding but incorrect information. If employees rely on AI-generated legal, financial, or technical content without verification, they may act on false information.

**AI-assisted social engineering:** Threat actors use generative AI to craft more convincing phishing emails, deepfake audio for vishing attacks, and synthetic identity documents for fraud.

**Shadow AI:** Employees using AI tools that are not approved, not monitored, and not subject to organisational data handling policies create uncontrolled data flows to external platforms.

**Accountability and explainability:** AI-assisted decisions in regulated functions (credit, hiring, fraud detection) raise legal and regulatory concerns about explainability, bias, and accountability that require specific governance.

**IP and competitive intelligence leakage:** Proprietary code, product roadmaps, client data, and strategic plans entered into AI tools become training data for models that may surface that information in future responses to other users.

---

## The Samsung Incidents in Context

The three Samsung incidents share a common structure: an employee identified a legitimate productivity use case for an AI tool, used the tool as intended, and in doing so, transmitted confidential information outside the organisation's control boundary.

None of the three employees appear to have intended to breach data handling policy. The first engineer wanted to find bugs in code. The second wanted cleaner code. The third wanted a useful meeting summary. In each case, the productivity gain was achieved; the data protection loss was invisible until the incidents were reported internally.

This is the defining characteristic of AI data risk: it does not look like a security incident at the time it occurs. It looks like efficient work. The control failure was not the individual employees' behaviour; it was the absence of organisational controls that either prevented the transmission of confidential data or established clear boundaries about what could and could not be shared.

Samsung's three-week window between lifting the ban and reimposing it was sufficient for three material incidents to occur. In a larger organisation with more permissive AI policies, the same pattern repeats continuously across thousands of employees.

---

## What Failed

**No AI usage policy before access was granted:** The decision to allow ChatGPT access was made without a corresponding policy defining what categories of information could and could not be submitted to external AI tools. "Use carefully" is not a policy.

**No technical controls on AI input:** Samsung's network and endpoint controls did not include mechanisms to detect or block the submission of confidential data to AI platforms. DLP rules for AI platform destinations were not in place.

**No employee training on AI data risks:** The productivity imperative was communicated. The data risk was communicated only as general caution. Specific examples of what constitutes confidential data that must not be shared with external AI tools were not provided.

**No approved internal alternative:** The ban on external AI was lifted without a corresponding deployment of an approved internal AI environment (e.g., a corporate deployment of an LLM with no external data sharing). Employees had only the choice between productivity with external tools or no AI access.

---

## What Good Looks Like

**AI usage policy:** A documented policy defines approved AI tools, prohibited uses (submission of confidential, personal, or regulated data to external tools), and personal accountability. The policy is updated as the AI tool landscape evolves.

**Data classification integration:** AI usage policy is integrated with the organisation's data classification scheme. Employees understand that Confidential and Restricted data must not be submitted to external AI tools, and the policy is enforced technically where possible.

**Technical controls on AI platforms:** DLP rules detect and block (or alert on) the submission of data matching confidential patterns to known AI platform domains. Network proxy policies block access to unapproved AI tools. These controls are imperfect but reduce the risk.

**Approved AI environment:** The organisation deploys an approved AI environment for sensitive use cases. This may be a corporate tenant of a major AI provider (e.g., Microsoft Copilot for M365 with enterprise data protection), an on-premises or private cloud LLM, or a managed API-level integration that does not permit model training on organisational data.

**AI inventory and oversight:** A register of AI tools in use across the organisation, including both approved tools and tools identified through shadow IT discovery, is maintained. AI tools processing sensitive data are subject to vendor assessment (similar to third-party management, A.2).

**Training and incident reporting:** Employees receive training on AI data risks with specific examples. Clear guidance is provided for the employee's role and the data they handle. A reporting mechanism exists for employees who believe they may have submitted confidential data to an external AI tool.

---

## How Auditors Test It

When auditing AI Controls (Control B.9), an IT auditor will typically:

**Request the AI usage policy:** Confirm that a documented policy exists, defines approved and prohibited uses, addresses data classification, and has been communicated to employees. Assess currency, given the pace of change in AI tools.

**Assess the approved AI tool register:** Request a list of AI tools that have been formally approved for use. For each, confirm that a vendor assessment has been completed addressing data handling, training data practices, and data residency.

**Test technical controls:** Assess whether DLP rules address AI platform destinations. Request evidence that unapproved AI tool access is blocked or monitored by the web proxy.

**Review incident history:** Request any AI-related data incidents reported during the period. Assess whether the organisation has a mechanism for employees to report potential AI data incidents and whether reports are investigated.

**Assess training:** Confirm that AI-specific training has been delivered to relevant employee populations. For the Samsung scenario, priority populations are engineering, legal, finance, and strategy teams who handle sensitive proprietary information.

**Review the AI governance structure:** Assess whether AI oversight is embedded in a governance body (e.g., IT Steering Committee) or whether an AI governance committee exists. The pace of AI adoption requires governance structures that can respond to new tool categories within weeks, not annual policy cycles.

---

## Lessons and Recommendations

Samsung's situation was not unique. In the same period, legal firm partners were submitting client documents to AI tools for contract summarisation, financial analysts were entering client portfolio data for AI-assisted analysis, and HR teams were submitting employee personal data for performance review drafting. The Samsung incidents were notable because they were disclosed. The broader pattern is widespread.

**Establish AI governance before enabling access.** The Samsung reversal, granting access then reimposing a ban, was more disruptive than establishing a policy framework before enabling access. Governance first, access second.

**DLP rules must include AI platform destinations.** Existing DLP coverage is based on email, web upload, and removable media. AI platforms represent a new exfiltration vector. DLP rules must be extended to cover AI tool domains.

**Deploy an approved enterprise AI environment.** Blanket bans on AI tools create competitive disadvantage and are unlikely to be enforced consistently. An approved enterprise AI environment that provides productivity without external data sharing is the sustainable solution.

**Review your AI tool landscape regularly.** The list of AI tools available to employees changes monthly. Shadow IT discovery, combined with a quarterly AI tool review, identifies tools that require policy governance before widespread employee adoption occurs.

**Consider AI as a third-party risk.** AI platforms are third parties processing your data. They require the same vendor assessment, contractual controls, and ongoing monitoring that any other significant third party receives under A.2.

---

## Assess Your AI Controls

The MarcoWeb ITGC Tool covers AI Controls as part of the Group B control set, with structured assessment templates for AI usage policy, approved tool governance, and technical control review.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
