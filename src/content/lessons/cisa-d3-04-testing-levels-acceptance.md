---
title: "Testing: From Unit to User Acceptance"
description: "Testing proves a system meets its requirements, and acceptance belongs to the users, not the developers. The exam tests who signs off, and why live data has no place in a test environment."
course: "cisa-domain-3"
module: "Domain 3: IS Acquisition, Development and Implementation"
domain: 3
order: 4
minutes: 8
gated: false
videoId: "wYpPhUMeWQk"
taskStatement: "Evaluate whether testing gives assurance that a system meets its requirements and whether acceptance rests with the users."
objectives:
  - "Order the levels of testing from unit to user acceptance."
  - "Explain why users, not developers, own user acceptance testing."
  - "Recognise the risk of testing with live production data."
trap: "Accepting developer sign-off as acceptance of the system. User acceptance testing belongs to the business, and it is the acceptance decision the exam looks for."
quiz:
  - question: "Who should perform and sign off user acceptance testing (UAT)?"
    options:
      - "The developers who built the system"
      - "The users, or the business function that will operate the system"
      - "The IS auditor"
      - "The infrastructure team"
    answer: 1
    explanation: "User acceptance testing is the business confirming that the system meets its requirements and is fit for use. It must be owned and signed off by the users, because they are the ones the system is built for. Developers verify the system works as built; only the users can accept that it does what the business needs."
    whyWrong:
      - "Developers testing their own work confirm it runs, not that it meets the business need; they cannot be the acceptance authority."
      - ""
      - "The auditor provides independent assurance over the process; performing acceptance would make the auditor a participant, not a reviewer."
      - "The infrastructure team confirms the platform, not that the application satisfies business requirements."
  - question: "What is the MOST significant risk of using live production data in a test environment?"
    options:
      - "Test results will be less realistic"
      - "Confidential or personal data may be exposed in an environment with weaker controls"
      - "The tests will run more slowly"
      - "Developers may become too familiar with the data"
    answer: 1
    explanation: "Test environments are typically less controlled than production, with broader developer and tester access. Copying live data into them exposes confidential and personal information to people and controls that would never be permitted in production, a confidentiality and data-protection breach. Where realistic data is needed, it should be masked or anonymised first."
    whyWrong:
      - "Realism is why teams are tempted to use live data; the exposure of that data is the risk that outweighs the benefit."
      - ""
      - "Performance is not the concern; the volume of live data is not the issue, its sensitivity is."
      - "Familiarity with data is trivial next to exposing real personal or confidential records in a weakly controlled environment."
  - question: "System testing has passed and the developers are satisfied. Why is user acceptance testing still required before go-live?"
    options:
      - "To repeat the same tests the developers ran"
      - "To confirm, from the users' perspective, that the system meets business requirements and is fit for purpose"
      - "To give the developers more time to fix defects"
      - "Because regulators mandate a second round of identical testing"
    answer: 1
    explanation: "System testing confirms the system works as designed and built. User acceptance testing answers a different question: does the system do what the business actually needs, judged by the people who will use it. A system can pass every developer test and still fail to meet the business requirement, which is precisely what UAT is there to catch."
    whyWrong:
      - "UAT is not a repeat of developer tests; it validates business fitness, a distinct objective."
      - ""
      - "UAT is acceptance by users, not extra defect-fixing time for developers."
      - "The reason is the different purpose of the test, not a regulatory demand for duplicate testing."
---

## The situation

A new system has passed system testing. The developers are happy, the defect list is short, and the project wants to go live this weekend. You ask who signed the user acceptance and the answer is "the development lead did, the users were busy." Then you notice the test environment was loaded with a full copy of last month's live customer data so the tests would be realistic.

Two things are wrong here, and both are reliable exam points.

## The levels build on each other

Testing runs from the small and specific to the whole and business-facing:

- **Unit testing** checks the smallest pieces, individual programs or modules, in isolation.
- **Integration testing** checks that those pieces work together and pass data correctly between them.
- **System testing** checks the complete system against its technical specification: does it work as designed, end to end.
- **User acceptance testing (UAT)** checks the system against the business requirements, judged by the people who will use it.
- **Regression testing** runs after changes, confirming that what worked before still works.

Each level assumes the one below it has passed. And the last level answers a different question from the rest, which is the heart of the lesson.

## Acceptance belongs to the users

Unit, integration and system testing all ask "does the system work as built." Only user acceptance testing asks "does the system do what the business needs," and only the users can answer it. UAT is therefore owned and signed off by the **business**, not the developers.

The reason is the same independence logic that runs through the course: developers testing their own work can confirm it runs, but they cannot be the authority that accepts it meets a need they did not define. A system can pass every developer test and still be the wrong system, because system testing checks it against the specification, and the specification itself might have missed the business need. UAT is the point where the business says "yes, this is what we asked for and it works for us." Accepting a developer's sign-off in place of the users' is accepting the wrong signature.

The auditor's role, as ever, is to review that acceptance happened properly, not to perform it. An auditor who runs the acceptance test becomes a participant and loses the independent position.

## Keep live data out of test

Test environments exist to be poked at. Access is broader, change is looser, and the controls that guard production are relaxed so testing can move quickly. That is fine for test data. It is a breach for live data.

Copying real customer or employee records into a test environment exposes confidential and personal information to developers, testers and tools that would never be allowed near it in production. The risk is not that the tests are unrealistic; it is that real personal data is now sitting in a weakly controlled place. Where realistic data is genuinely needed, it should be **masked or anonymised** first, so the shape of the data is preserved without exposing the individuals in it. When a question weighs realism against exposure, exposure wins.

## Where practitioners go wrong

The first instinct that costs marks is treating any completed testing as acceptance, and taking the developers' sign-off as the system being accepted. Acceptance is the users' decision, made through UAT. The second is reaching for live data because it is the easiest way to make a test realistic. The convenience is real and the exposure is worse; mask the data or use a manufactured set. Testing proves the system meets its requirements, and the users are the ones who get to say it does.
