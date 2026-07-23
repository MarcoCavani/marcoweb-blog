---
title: "Laws, Regulations and Compliance Management"
description: "The final Domain 2 lesson. How an organisation knows which obligations apply, proves it meets them, and why the auditor reports non-compliance rather than fixing it."
course: "cisa-domain-2"
module: "Domain 2: Governance and Management of IT"
domain: 2
order: 11
minutes: 8
gated: false
taskStatement: "Evaluate whether an organisation identifies its legal and regulatory obligations and manages compliance with them on an ongoing basis."
objectives:
  - "Explain why identifying applicable obligations is the first compliance control."
  - "Distinguish the auditor's role from management's in achieving compliance."
  - "Recognise compliance treated as a one-off event rather than an ongoing process."
trap: "Treating compliance as a point-in-time certificate. The exam treats it as a continuous process, and treats identifying what applies as the control that comes first."
quiz:
  - question: "What is the FIRST step in managing regulatory compliance for IT?"
    options:
      - "Implementing controls to meet common regulations"
      - "Identifying which laws and regulations actually apply to the organisation"
      - "Scheduling an annual compliance audit"
      - "Purchasing a compliance management tool"
    answer: 1
    explanation: "You cannot comply with obligations you have not identified. Determining which laws and regulations apply, by jurisdiction, industry, and the data and services involved, is the first control. Everything else, controls, audits, tooling, depends on knowing the actual obligations first."
    whyWrong:
      - "Implementing controls before knowing which regulations apply risks meeting the wrong requirements and missing the ones that matter."
      - ""
      - "An annual audit checks compliance but presupposes you already know what you must comply with."
      - "A tool supports compliance management but does not tell you which obligations apply to your organisation."
  - question: "During an audit, an IS auditor discovers the organisation is not complying with a data protection regulation. What is the auditor's PRIMARY responsibility?"
    options:
      - "Implement the controls needed to bring the organisation into compliance"
      - "Report the non-compliance to management and those charged with governance"
      - "Report the organisation directly to the regulator"
      - "Ignore it if the risk of detection is low"
    answer: 1
    explanation: "The auditor identifies and reports the non-compliance to management and those charged with governance, then evaluates their response. Fixing it is management's job, doing so would compromise independence, and reporting directly to a regulator is not the auditor's default route absent a specific legal duty."
    whyWrong:
      - "Implementing the fix makes the auditor the doer and destroys independence over the very control they would later assess."
      - ""
      - "Going straight to the regulator bypasses management and governance and is not the standard responsibility absent a legal obligation."
      - "Ignoring a known non-compliance because detection is unlikely is an ethics breach, not a judgement call."
  - question: "An organisation achieved a compliance certification two years ago and has not reassessed since, though its systems and the regulations have both changed. What is the MAIN concern?"
    options:
      - "The certification was probably issued in error"
      - "Compliance is an ongoing process, and a two-year-old certificate does not show the organisation is compliant today"
      - "The organisation should hold certifications from multiple bodies"
      - "The certification should have been more expensive to be credible"
    answer: 1
    explanation: "Compliance is continuous, not a one-off event. Systems change, regulations change, and controls degrade. A certificate from two years ago is point-in-time evidence about a state that no longer exists. The concern is that current compliance is unknown, which mirrors the point-in-time evidence trap in Domain 1."
    whyWrong:
      - "There is no reason to assume the original certification was wrong; the problem is its age, not its validity when issued."
      - ""
      - "Multiple certifications do not address whether compliance is maintained over time."
      - "Cost has no bearing on whether compliance is current."
---

## The situation

The organisation proudly shows you a compliance certificate. It is framed, it is genuine, and it is two years old. In those two years the systems have been rebuilt and the regulation itself has been amended. The certificate proves the company was compliant once. It says nothing about today.

Compliance treated as a trophy rather than a process is the failure this lesson is about, and it is the last piece of Domain 2.

## Identifying obligations comes first

You cannot comply with what you have not identified. The first compliance control is **determining which laws and regulations actually apply**, driven by:

- **Jurisdiction**, where the organisation operates and where its data subjects are.
- **Industry**, sector-specific rules such as those for finance, health or payments.
- **Data and services**, what the organisation holds and does, which triggers obligations like data protection or breach notification.

Everything downstream, designing controls, scheduling audits, buying tools, depends on this. Implementing common controls before knowing your actual obligations risks meeting requirements that do not apply while missing the ones that do. When a question asks for the first step in compliance management, it is identifying what applies.

## The auditor reports, management fixes

When an auditor finds non-compliance, the response is the same discipline as every finding in Domain 1: **report it to management and those charged with governance, and evaluate their response.** The auditor does not implement the fix, doing so would make them the doer of a control they must independently assess, destroying objectivity.

Nor does the auditor, by default, report the organisation straight to the regulator. That bypasses management and governance and is not the standard responsibility absent a specific legal duty to disclose. And ignoring a known non-compliance because the chance of detection is low is not a judgement call, it is an ethics breach.

So the auditor's line on compliance is narrow and clear: find it, report it, assess the response, respect the authority of management to decide, escalate within governance if the response is inadequate.

## Compliance is continuous

The deepest point in this lesson, and a favourite exam theme, is that compliance is an **ongoing process, not a one-off event.** Systems change, regulations change, and controls degrade over time. A certification is point-in-time evidence, and like the current access listing in Domain 1's evidence lesson, it describes a state that may no longer exist.

An organisation that certified two years ago and never reassessed cannot demonstrate it is compliant now. The concern is not that the original certificate was wrong, but that current compliance is simply unknown. Effective compliance management builds in continuous monitoring and periodic reassessment, so that "are we compliant" can be answered about today, not about a moment in the past.

## Where practitioners go wrong

Two instincts cost marks. The first is treating a certificate or a past audit as proof of present compliance; the exam wants ongoing monitoring, and treats stale evidence as no evidence of the current state. The second is having the auditor step in to fix the non-compliance they found; the auditor reports and evaluates, and leaves the remediation, and the accountability for it, with management.

---

That completes Domain 2. You now have the governance and management half of the exam: how IT is directed and held accountable, how risk is owned and decided, how third parties and performance are controlled, and how the organisation stays on the right side of the law. Sit the Domain 1 practice exam to keep those retrieval muscles working while the Domain 2 question bank is built.
