---
title: "Release and Patch Management"
description: "Code and patches reach production through separated environments and are prioritised by risk. The exam tests why dev, test and production must be kept apart, and how patches are ranked."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 6
minutes: 8
gated: false
taskStatement: "Evaluate whether releases and patches reach production through segregated environments and are prioritised and tested according to risk."
objectives:
  - "Explain why development, test and production environments are kept separate."
  - "Determine how patches should be prioritised."
  - "Recognise the risk of developers holding standing production access."
trap: "Prioritising patches first come first served, or deploying them untested. Patches are ranked by risk and criticality, and even urgent security patches are tested where practical and applied through controlled release."
quiz:
  - question: "Why should development, test and production environments be kept separate?"
    options:
      - "To give each team its own hardware budget"
      - "To ensure only tested, authorised code reaches production and to enforce segregation of duties"
      - "Because regulations require exactly three environments"
      - "To make development run faster"
    answer: 1
    explanation: "Separate environments ensure that code is developed and tested away from live systems, so only tested and authorised releases reach production, and that the people who build changes are not the ones operating production. Mixing them risks untested or unauthorised code running against real data, and collapses segregation of duties."
    whyWrong:
      - "Hardware budgeting is not the reason; the separation is a control over what reaches production and by whom."
      - ""
      - "No rule mandates a fixed number of environments; the principle is separation of build, test and run, however many environments implement it."
      - "Separation is about control, not development speed; if anything it adds discipline that slows careless shortcuts."
  - question: "A vendor releases patches for several systems. How should they be prioritised for deployment?"
    options:
      - "In the order the patches were released"
      - "By the risk and criticality they address, for example a critical flaw in an internet-facing system first"
      - "Alphabetically by system name"
      - "Whichever is smallest to download"
    answer: 1
    explanation: "Patches are prioritised by the risk they address and the criticality and exposure of the affected system. A critical vulnerability on an internet-facing, business-critical system is patched ahead of a low-severity flaw on an isolated internal one. Risk-based prioritisation directs limited effort to where exposure is greatest."
    whyWrong:
      - "Release order ignores severity and exposure; a trivial early patch would outrank a critical later one."
      - ""
      - "Alphabetical order is arbitrary and unrelated to risk."
      - "Download size is an operational triviality, not a measure of the risk the patch addresses."
  - question: "An IS auditor finds that application developers hold standing administrative access to the production environment. What is the GREATEST concern?"
    options:
      - "Developers may accidentally learn how production works"
      - "It allows unauthorised or untested changes to bypass release controls and breaks segregation of duties"
      - "Production storage may fill up faster"
      - "Developers might prefer production to their test environment"
    answer: 1
    explanation: "Standing developer access to production lets changes reach live systems outside the controlled release process, untested and unauthorised, and destroys the segregation between building software and operating it. Access to production should be restricted and changes should flow only through the controlled release path."
    whyWrong:
      - "Familiarity with production is not the risk; unchecked ability to alter it is."
      - ""
      - "Storage consumption is unrelated to the control failure that standing production access represents."
      - "Developer preference is irrelevant; the concern is the bypassing of release controls and segregation."
---

## The situation

A developer needed to fix a bug quickly, so they logged straight into production with the admin access they have always had, edited the live code, and moved on. It worked, this time. There was no separate test of the fix, no release record, and nothing stopping the next edit from taking the system down. The path from a developer's keyboard to live production was a single step.

Release and patch management is about controlling that path: how code and fixes get to production safely, and in the right order.

## Separate the environments

The foundation is **environment separation**: development, test and production are kept apart.

- **Development** is where code is written and changed.
- **Test** (and often a staging environment) is where it is verified, against representative, not live, data, as Domain 3 insisted.
- **Production** is the live system serving the business.

Keeping them separate does two things. It ensures that only **tested, authorised** releases reach production, rather than half-finished code running against real data. And it enforces **segregation of duties**: the people who build changes are not the people who operate production. Release management is the controlled process that packages an approved, tested change and deploys it across that boundary, so the move to production is deliberate and recorded, not a developer editing live code on a whim.

## Prioritise patches by risk

Patch management keeps systems current against known vulnerabilities, and the exam's key point is how patches are **prioritised**. Not by release order, not alphabetically, not by download size, but by **risk and criticality**:

- How severe is the vulnerability the patch fixes?
- How exposed and how critical is the affected system, an internet-facing, business-critical server, or an isolated internal one?

A critical flaw on an internet-facing system is patched first; a low-severity issue on an isolated system can wait. This risk-based ranking directs limited effort where exposure is greatest, and it is the same appetite-and-magnitude thinking from Domain 2 applied to patching.

Patches are still **changes**, so they go through change and release management: tested where practical before deployment, and applied through the controlled path. Even an urgent security patch for an actively exploited vulnerability follows the *emergency* change route, expedited, but authorised and recorded, rather than pushed straight to production untested and untracked.

## Standing production access is the weak point

The developer's permanent admin access to production is the flaw underneath the whole scene. Standing developer access to production lets changes reach live systems **outside the release process**, untested and unauthorised, and collapses the segregation between building and operating. Production access should be restricted, and changes should flow only through the controlled release path. Where developers need occasional production access to investigate, it should be granted narrowly, temporarily, and logged, not held as a standing right.

## Where practitioners go wrong

Two instincts cost marks. The first is prioritising patches by anything other than risk, or deploying them straight to production untested because they came from a trusted vendor; patches are changes, ranked by exposure and tested through the release path. The second is tolerating developer access to production as a convenience. It is the gap through which untested, unauthorised change reaches live systems, and it is both a release-management failure and a segregation-of-duties finding.
