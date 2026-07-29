---
title: "Information Security Governance and Frameworks"
description: "Security is a governance responsibility, not just an IT task. The exam tests who is ultimately accountable, and the difference between a policy, a standard and a procedure."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 1
minutes: 7
gated: false
videoId: "WlN9Gno8Z5I"
taskStatement: "Evaluate whether information security is governed through a program with defined accountability, a policy hierarchy, and a recognised framework."
objectives:
  - "Identify who is ultimately accountable for information security."
  - "Distinguish a policy from a standard and a procedure."
  - "Explain the purpose of a security framework such as ISO 27001."
trap: "Treating information security as purely an IT or technical matter. Accountability sits with senior management, and the exam tests the policy hierarchy, not just the existence of documents."
quiz:
  - question: "Who is ULTIMATELY accountable for information security in an organisation?"
    options:
      - "The IT department, because it runs the systems"
      - "Senior management and the board, as a governance responsibility"
      - "The security operations team"
      - "Every individual employee equally"
    answer: 1
    explanation: "Information security is a governance responsibility. Senior management and the board are ultimately accountable: they set the tone, approve the policy, and provide the resources. A security function and IT implement and operate controls, but the accountability, like risk appetite in Domain 2, rests at the top."
    whyWrong:
      - "IT operates and implements controls but does not hold the enterprise's accountability for security."
      - ""
      - "The security team executes the programme; it is not where ultimate accountability sits."
      - "Employees have responsibilities, but ultimate accountability is a governance role, not evenly distributed."
  - question: "What is the difference between a security policy and a standard?"
    options:
      - "They are the same document"
      - "A policy states high-level intent and direction; a standard specifies mandatory, measurable requirements that implement the policy"
      - "A standard is optional guidance; a policy is a step-by-step guide"
      - "A policy is technical; a standard is written for executives"
    answer: 1
    explanation: "A policy expresses management's high-level intent and direction, for example that data must be protected according to its classification. A standard translates that into specific, mandatory requirements, such as a minimum encryption algorithm or password length. Procedures then give the step-by-step how, and guidelines offer optional advice."
    whyWrong:
      - "They are distinct layers of the policy hierarchy, not the same document."
      - ""
      - "A standard is mandatory, not optional; the step-by-step how is a procedure, not a policy."
      - "The audience is reversed and oversimplified; the real distinction is intent versus mandatory requirement."
  - question: "What is the primary purpose of adopting a framework such as ISO 27001?"
    options:
      - "To pass a one-time certification and then move on"
      - "To provide a structured, repeatable information security management system that is maintained and improved over time"
      - "To replace the need for a security team"
      - "To guarantee the organisation cannot be breached"
    answer: 1
    explanation: "A framework such as ISO 27001 provides a structured, repeatable information security management system: a way to identify risks, apply controls, and continually monitor and improve. Like compliance in Domain 2, it is an ongoing process, not a one-off certificate, and no framework guarantees immunity from breach."
    whyWrong:
      - "A framework is an ongoing management system, not a one-time certificate to obtain and forget."
      - ""
      - "A framework structures the work of a security team; it does not remove the need for one."
      - "No framework can guarantee no breach; it manages risk, it does not eliminate it."
---

## The situation

You ask who owns information security, and the answer is "IT does, it's their systems." The security policy is a two-year-old document nobody has read, there is no distinction between what is mandatory and what is advice, and when a control is missing, each team assumes another was handling it. Security here is treated as a technical chore, not something the organisation governs.

Domain 5 is the largest on the exam and the most technical, but it opens where Domain 2 did: with governance, because protection without direction is just a pile of tools.

## Security is governed, not just operated

Information security is a **governance responsibility**. Senior management and the board are **ultimately accountable**: they set the tone from the top, approve the security policy, and allocate the resources. A security function, often led by a CISO, and the IT teams *implement and operate* the controls, but they do so within a mandate management owns.

This is the same shape as risk appetite in Domain 2. When a question asks who is ultimately accountable for security, the answer is not IT and not the security team; it is senior management. Treating security as purely IT's problem is the governance failure that leaves gaps no one owns.

## The policy hierarchy

The exam expects you to tell the layers apart, because they do different jobs:

- A **policy** states management's high-level **intent and direction**: "information must be protected in line with its classification." It is the mandate.
- A **standard** turns intent into **mandatory, measurable requirements**: a minimum encryption strength, a password length, an approved configuration. Standards are not optional.
- A **procedure** gives the **step-by-step** instructions to meet a standard.
- A **guideline** offers **optional** advice and good practice.

A policy without standards is aspiration with nothing to test against; standards without a policy are rules with no authority behind them. When a question describes "high-level intent," that is a policy; "mandatory specific requirement" is a standard; "step by step" is a procedure.

## Frameworks give it structure

Organisations do not invent security from scratch; they adopt recognised **frameworks**. ISO 27001 defines an **information security management system (ISMS)**; NIST's Cybersecurity Framework and COBIT are others. Their value is a **structured, repeatable** way to identify risks, select and apply controls, and monitor and improve them.

The exam's angle here mirrors compliance in Domain 2: a framework is an **ongoing management system, not a one-off certificate**. Achieving ISO 27001 certification once and never maintaining the ISMS is the same stale-certificate problem in new clothes. And no framework guarantees the organisation cannot be breached; it manages risk, it does not abolish it.

## Where practitioners go wrong

Two instincts cost marks. The first is treating security as a technical matter that belongs entirely to IT; it is governed by senior management, who are accountable for it, exactly as they are for risk. The second is blurring the policy hierarchy, so intent, mandatory requirement, and step-by-step guidance all read as "the security documentation." Keep them distinct: policy is intent, standards are mandatory, procedures are the how, and a framework is the ongoing system that holds it all together.
