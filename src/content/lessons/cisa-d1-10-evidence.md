---
title: "Evidence: Sufficiency and Reliability"
description: "Sufficient is about quantity, appropriate is about quality, and the hierarchy of reliability is the part candidates guess at."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 10
minutes: 8
gated: false
videoId: "SmXv2Fnsm2I"
taskStatement: "Evaluate whether audit evidence obtained is sufficient and appropriate to support the audit conclusion."
objectives:
  - "Distinguish sufficiency from appropriateness and state what each measures."
  - "Rank sources of evidence by reliability and justify the ranking."
  - "Determine when corroboration is required before a conclusion can be drawn."
trap: "Accepting a screenshot as evidence of how a control operated all year. A screenshot shows a moment, and the moment it shows is the one somebody chose."
quiz:
  - question: "Which of the following provides the MOST reliable evidence that a firewall rule set was configured as approved?"
    options:
      - "A screenshot of the rule set provided by the firewall administrator"
      - "A configuration export the auditor extracted directly from the device"
      - "The administrator's written confirmation that the rules match the approved baseline"
      - "The change tickets showing each rule change was approved"
    answer: 1
    explanation: "Evidence obtained directly by the auditor from the source system is the most reliable, because it removes the opportunity for selection or alteration by the auditee. Independence of the source is the primary driver of reliability."
    whyWrong:
      - "A screenshot supplied by the auditee is evidence of what the auditee chose to show, at a moment they chose. It is both selective and easily altered."
      - ""
      - "Written confirmation is a representation. Representations are among the least reliable forms of evidence and cannot substitute for examining the configuration."
      - "Change tickets evidence the approval process, not the resulting configuration. Approved changes can be implemented incorrectly, and unapproved changes leave no ticket."
  - question: "An IS auditor obtains evidence from three sources that all agree. The evidence is BEST described as:"
    options:
      - "Sufficient"
      - "Corroborated"
      - "Relevant"
      - "Competent"
    answer: 1
    explanation: "Corroboration is agreement between independent sources, and it strengthens the reliability of a conclusion because the sources are unlikely to be wrong in the same way. Agreement between sources is specifically what corroborative evidence means."
    whyWrong:
      - "Sufficiency concerns quantity, whether there is enough evidence. Three agreeing sources may or may not be enough depending on what is being concluded."
      - ""
      - "Relevance concerns whether the evidence bears on the objective being tested. Agreement between sources says nothing about relevance."
      - "Competent is a general term for evidence quality and does not specifically describe agreement between sources."
  - question: "An IS auditor is testing whether privileged access was appropriate throughout the year. Management provides a current listing of privileged accounts. What is the PRIMARY limitation of this evidence?"
    options:
      - "It was provided by management rather than extracted by the auditor"
      - "It reflects a point in time and says nothing about the period under review"
      - "It may not include service accounts"
      - "It cannot be reconciled to the approved access matrix"
    answer: 1
    explanation: "The audit objective concerns the whole period. A current listing shows the position on one day, so accounts granted and removed during the year are invisible. Point-in-time evidence cannot support a period conclusion without additional evidence of changes."
    whyWrong:
      - "Provenance is a genuine weakness and reduces reliability, but even a listing the auditor extracted personally would have the same fatal limitation for a period conclusion."
      - ""
      - "Incomplete population is a real risk and worth testing, but it is a secondary concern next to the evidence covering the wrong timeframe entirely."
      - "A current listing can be reconciled to the matrix. The problem is that the reconciliation would only be valid for today."
---

## The situation

You ask for evidence that privileged access was appropriate during the year. You receive a spreadsheet of current privileged accounts, exported yesterday, emailed by the platform team.

Three separate problems, and only one of them is obvious.

## Sufficient and appropriate

The standards phrase is **sufficient and appropriate**, and the two words do different jobs.

**Sufficiency is quantity.** Is there enough evidence to support the conclusion? A sample of three changes is unlikely to be sufficient to conclude on four thousand.

**Appropriateness is quality**, and it has two components:

- **Relevance**: does the evidence bear on the objective being tested? Change approvals are irrelevant to whether the change was technically correct.
- **Reliability**: can the evidence be trusted? This is where the hierarchy applies.

More evidence of the wrong kind does not compensate for poor quality. A thousand screenshots do not become reliable through volume.

## The reliability hierarchy

From most to least reliable, and this ranking is heavily tested:

1. **Obtained directly by the auditor** from the source system. An export the auditor extracts, a configuration read from the device, a recalculation the auditor performs.
2. **From independent external sources.** A third party confirmation, an external system's log.
3. **Produced by a system with effective general controls**, where the auditor has tested those controls.
4. **Produced internally under weak or untested controls.**
5. **Provided by the auditee**, particularly where the auditee selected what to provide.
6. **Oral or written representations** from management.

The principle underneath: reliability rises with the auditor's independence from the person who could benefit from the evidence saying something particular. This is why a screenshot from the administrator sits so low. It shows a moment somebody chose, in a format that is trivial to alter.

## Timing

Evidence has a period of coverage, and matching it to the audit objective is where the spreadsheet above fails. A current listing is **point-in-time** evidence. An objective covering the year needs either evidence spanning the period, such as a change log of grants and revocations, or point-in-time evidence at several points plus evidence of what happened between.

This is one of the most reliable exam traps in Domain 1, because point-in-time evidence is what auditees naturally produce and what auditors routinely accept.

## Corroboration

Corroborative evidence comes from a **different and independent source** and agrees with the evidence already held. Its value is that independent sources are unlikely to be wrong in the same way.

Corroboration matters most where the primary evidence is weak. A management representation supported by nothing is close to worthless; the same representation corroborated by a system-generated log becomes usable.

Two reports from the same system are not corroboration. They share a common source, so a fault in that source affects both.

## Documentation

Working papers must let a competent reviewer with no prior involvement understand what was tested, how items were selected, what was found and what was concluded. The exam's phrasing tends toward whether another auditor could re-perform the work and reach the same conclusion. If they could not, the documentation is insufficient regardless of how good the underlying testing was.

## Where practitioners go wrong

The commonest error is accepting auditee-supplied extracts without considering how they were produced. In practice this is how most evidence arrives, and questioning it feels adversarial. The exam expects the auditor to prefer direct extraction wherever available, and options offering it beat options accepting a provided file.

The second is treating quantity as a cure for quality. If a question describes weak evidence and one option offers more of it while another offers a more reliable source, the more reliable source wins.
