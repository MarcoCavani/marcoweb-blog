---
title: "Standards, Ethics and the Audit Charter"
description: "What gives an IS auditor the authority to demand evidence, and what obliges them to hand back work they are not competent to perform."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 2
minutes: 8
gated: false
videoId: "J7cvRu26O-k"
taskStatement: "Evaluate whether an audit engagement is being conducted in accordance with professional standards and an approved audit charter."
objectives:
  - "Distinguish between standards, guidelines and procedures and state which are mandatory."
  - "Identify the elements an audit charter must establish for the audit function to operate."
  - "Determine the correct response when an engagement conflicts with the code of professional ethics."
trap: "Treating the charter as paperwork. On the exam it is the source of the auditor's authority, and the first thing to check when access to evidence is refused."
quiz:
  - question: "An IS auditor is refused access to a system's configuration files by the infrastructure manager, who says the files are commercially sensitive. What should the auditor do FIRST?"
    options:
      - "Escalate to the audit committee for a ruling"
      - "Refer to the audit charter to confirm the right of access"
      - "Accept the restriction and note a scope limitation in the report"
      - "Obtain the files from a different administrator"
    answer: 1
    explanation: "The audit charter is what grants the audit function its right of access to records, personnel and systems. Before escalating or conceding, the auditor confirms what the charter actually authorises, because that determines whether this is a genuine restriction or a misunderstanding."
    whyWrong:
      - "Escalation may become necessary, but going to the audit committee before confirming your own mandate is premature and wastes the committee's authority on a question you can answer yourself."
      - ""
      - "Accepting a scope limitation without first establishing whether the restriction is legitimate concedes access the charter may already grant, and a scope limitation weakens the engagement."
      - "Routing around the manager to get the same files elsewhere is a serious professional failure. It substitutes evasion for authority and damages the audit relationship."
  - question: "Which of the following is MOST important to include in an IS audit charter?"
    options:
      - "The methodology to be used for risk assessment"
      - "The audit function's reporting line and right of access"
      - "The annual audit plan for the coming year"
      - "The qualifications required of audit staff"
    answer: 1
    explanation: "The charter exists to establish the audit function's independence and authority. Its reporting line, typically to the audit committee, and its right of access to records, systems and personnel are what make the function able to operate at all. Everything else follows from that."
    whyWrong:
      - "Methodology belongs in audit procedures, which are expected to change as practice develops. Putting it in the charter would require board approval to update a working method."
      - ""
      - "The annual plan is approved separately and changes every year. A charter is a standing document."
      - "Staff qualifications matter, but they are a resourcing matter for the audit function, not the source of its authority."
  - question: "An IS auditor is assigned to review a blockchain implementation and has no knowledge of the technology. According to the code of professional ethics, what should the auditor do?"
    options:
      - "Perform the review and disclose the limitation in the report"
      - "Decline or arrange for the necessary competence to be obtained"
      - "Rely entirely on management's representations about the technology"
      - "Limit the scope to the general controls surrounding the implementation"
    answer: 1
    explanation: "The code requires members to undertake only those activities in which they can reasonably expect to be competent. The auditor must either decline the engagement or obtain the competence, through training, or by involving a specialist."
    whyWrong:
      - "Disclosing a limitation does not cure the lack of competence. The work would still have been performed without the ability to perform it properly, and readers would be relying on a review that has no basis."
      - ""
      - "Relying on management's representations is not auditing. Representations are a weak form of evidence and cannot substitute for the auditor's own competence."
      - "Narrowing the scope to what you can already do may be a legitimate outcome after discussion, but as an immediate response it silently changes the engagement management asked for without addressing the competence gap."
---

## The situation

An infrastructure manager tells you the configuration files you have asked for are commercially sensitive and cannot be shared with audit. You have never been refused before. What actually gives you the right to insist?

The answer is not your job title. It is a document most auditors read once and never think about again.

## Standards, guidelines and procedures

ISACA's framework for IS audit and assurance separates three things, and the exam expects you to know which are mandatory.

**Standards are mandatory.** They state what an IS auditor must do. Compliance is not optional, and a departure has to be justified and disclosed.

**Guidelines provide guidance on applying standards.** They are not mandatory, but an auditor who ignores relevant guidance should be able to say why.

**Tools and techniques provide examples of procedures.** They are informational. Nobody is obliged to use a particular technique.

The distinction matters in questions phrased as "the auditor must" versus "the auditor should consider". If an option describes departing from a standard without justification, it is wrong regardless of how sensible it sounds operationally.

## The audit charter

The charter is approved at the highest level, normally by the board or audit committee, and it is what establishes the audit function's existence and authority. For the exam, it must cover:

- **Purpose, responsibility and authority** of the audit function.
- **Reporting line**, which should be to the audit committee or board rather than to the management being audited. This is the structural guarantee of independence.
- **Right of access** to records, personnel, systems and physical premises.
- **Scope** of audit activity.
- **Accountability**, including how the function reports on its own performance.

When a question involves access being refused, resources being withheld, or management disputing audit's remit, the charter is almost always the correct first reference. It is also the reason the reporting line question is so heavily tested: an audit function reporting to the CIO cannot independently audit the CIO.

## The code of professional ethics

Three provisions produce most of the exam questions.

**Competence.** Undertake only activities you can reasonably expect to complete with professional competence, and maintain that competence through continuing education. The exam response to an engagement beyond your competence is to decline it or obtain the competence, never to proceed and disclaim.

**Due care and objectivity.** Perform duties with objectivity, due diligence and professional care, and serve in the interest of stakeholders in a lawful manner.

**Confidentiality.** Maintain the privacy and confidentiality of information obtained, and do not use it for personal benefit or disclose it to inappropriate parties. Note the limit: confidentiality does not override a legal obligation to disclose.

## Where practitioners go wrong

Experienced auditors under-use the charter because in practice access disputes get resolved with a phone call. On the exam, "refer to the audit charter" is frequently the correct first step precisely because it establishes whether there is a dispute at all.

The other common error is answering competence questions pragmatically. In real engagements people learn on the job constantly. The exam does not accept that: undertaking work you are not competent to perform is an ethics breach, and disclosing it afterwards does not repair it.
