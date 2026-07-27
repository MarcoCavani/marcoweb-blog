---
title: "Development Methodologies: Waterfall, Agile and the Auditor"
description: "Waterfall gives neat control checkpoints; agile moves faster but the evidence looks different. The exam tests that agile does not mean uncontrolled, and that the control objectives never change."
course: "cisa-domain-3"
module: "Domain 3: IS Acquisition, Development and Implementation"
domain: 3
order: 3
minutes: 8
gated: false
taskStatement: "Evaluate the control implications of the chosen development methodology and locate the control evidence each one produces."
objectives:
  - "Contrast the control characteristics of sequential and iterative methodologies."
  - "Explain why an agile approach still requires controls, documentation and testing."
  - "Recognise the specific risks of prototyping and rapid development."
trap: "Accepting that agile means there is nothing to audit. The control objectives are unchanged; only the artefacts that evidence them differ."
quiz:
  - question: "Compared with a sequential (waterfall) approach, what is the MAIN control risk an IS auditor associates with agile development?"
    options:
      - "Agile produces no working software to review"
      - "Reduced formal documentation and fewer fixed control checkpoints, so control evidence must be found in different artefacts"
      - "Agile makes testing impossible"
      - "Agile removes the need for user involvement"
    answer: 1
    explanation: "Agile trades heavy up-front documentation and rigid phase gates for speed and adaptability. The control objectives remain, but the evidence is distributed across sprint artefacts, backlogs, definitions of done, automated test results, rather than concentrated in signed phase documents. The auditor's task is to locate that evidence, not to conclude it is absent."
    whyWrong:
      - "Agile produces working software early and often; that is one of its defining features, not a gap."
      - ""
      - "Agile relies heavily on testing, frequently automated and continuous; it does not prevent testing."
      - "Agile increases user involvement through continuous feedback; it does not remove it."
  - question: "A developer tells an IS auditor, 'We work in agile, so there is no documentation or control evidence to audit.' What is the auditor's BEST response?"
    options:
      - "Accept the statement and rely on interviews alone"
      - "Explain that the control objectives are unchanged, and seek evidence in the backlog, definitions of done, sprint reviews and test results"
      - "Report that the project is uncontrolled and cannot be audited"
      - "Insist the team switch to waterfall so it can be audited"
    answer: 1
    explanation: "Agile changes the form of the evidence, not the need for control. Backlogs, acceptance criteria, definitions of done, sprint review records and automated test outputs are all auditable artefacts. The auditor adapts the approach to where the evidence lives rather than declaring the project uncontrolled or dictating its methodology."
    whyWrong:
      - "Interviews alone are the weakest evidence; agile in fact generates many concrete artefacts to corroborate them."
      - ""
      - "Declaring it uncontrolled without looking for the agile artefacts is a failure to audit, not a finding."
      - "Dictating the methodology exceeds the auditor's role; the auditor assesses controls, it does not choose how the team develops."
  - question: "An organisation builds a prototype to confirm requirements, then puts the prototype straight into production. What is the GREATEST risk?"
    options:
      - "Prototypes are always slower than final systems"
      - "The prototype may go live without the design rigour, controls and testing a production system needs"
      - "Users will not understand the prototype"
      - "Prototyping cannot capture requirements"
    answer: 1
    explanation: "A prototype is built to explore requirements quickly, not to production standards. Promoting it directly to production skips the design, control and testing discipline a real system requires, so controls may be missing and quality unproven. Prototyping is valuable for clarifying requirements, but the prototype should inform the build, not become the product unvetted."
    whyWrong:
      - "Speed is not the issue; prototypes are usually quicker to produce, which is exactly why they cut corners."
      - ""
      - "Users generally engage well with prototypes; that is their strength, and not the production risk."
      - "Prototyping is an effective way to capture requirements; the risk is in shipping the prototype, not in using it."
---

## The situation

Two projects, two methods. One runs waterfall: a thick requirements document signed off, then design, then build, then a formal test phase, each gate with a signature you can put your finger on. The other runs agile: two-week sprints, a backlog, working software every fortnight, and not a phase-gate document in sight. The agile team tells you there is nothing to audit.

Both statements are wrong in the same way, and this lesson is about why.

## Two shapes of the same objective

**Waterfall** is sequential. Each phase completes and is signed off before the next begins. Its strength for an auditor is obvious: clear checkpoints, heavy documentation, a signature at every gate. Its weakness is rigidity, change late in the project is expensive, and a requirements error discovered at testing is costly to unwind.

**Agile** and other iterative methods deliver in small increments. Working software appears early and often, and the plan adapts to feedback each cycle. Its strength is responsiveness; its cost, from a control point of view, is that the neat phase documents are replaced by many smaller, faster artefacts, and the control checkpoints are continuous rather than fixed.

The mistake is to read that difference as "waterfall is controlled and agile is not." The **control objectives are identical**: requirements are understood, controls are built in, changes are authorised, testing proves the system, and someone accepts it. What changes is where the evidence lives.

## Agile is not uncontrolled

In an agile project, the control evidence is distributed rather than absent:

- The **product backlog** and acceptance criteria are the requirements, written incrementally.
- The **definition of done** is a control gate applied to every increment, often including testing and review.
- **Sprint reviews** and demonstrations are where the business accepts working software, the continuous form of user acceptance.
- **Automated test suites** and continuous integration produce test evidence on every change.
- Version control and the change history record who changed what and when.

So when a team says "we are agile, there is nothing to audit," the auditor's answer is not to accept it, and not to declare the project uncontrolled, and certainly not to order the team back to waterfall. It is to find the evidence where an agile project keeps it. Dictating the methodology is beyond the auditor's role; assessing whether the control objectives are met, in whatever artefacts the method produces, is exactly the role.

## The prototyping trap

Prototyping, building a quick, working model to clarify what users actually want, is a legitimate and useful technique, and it appears in the exam with a specific risk attached. A prototype is built for speed, not to production standard: light on design rigour, controls and testing. The danger is that the prototype works well enough that someone decides to ship it, promoting straight to production a thing that never went through proper design, control specification or testing.

Used well, a prototype *informs* the build. Used badly, it *becomes* the build, carrying its missing controls and unproven quality into production. The same caution applies to rapid development approaches generally: speed is the benefit and the risk, and the control objectives cannot be traded away for it.

## Where practitioners go wrong

The instinct that costs marks is accepting "agile means there is nothing to audit," and either walking away or writing the project up as uncontrolled. Neither is right: the control objectives are unchanged, and the evidence is there in different clothes. The second instinct is to over-trust a prototype, treating a requirements experiment as a finished system. Judge the methodology by whether the control objectives are met and evidenced, not by whether it produces the documents waterfall trained you to expect.
