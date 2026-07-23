---
title: "Enterprise Architecture"
description: "Enterprise architecture is the map that keeps IT aligned with the business as both change. Auditors test whether the map is followed, not whether it is beautiful."
course: "cisa-domain-2"
module: "Domain 2: Governance and Management of IT"
domain: 2
order: 5
minutes: 7
gated: false
taskStatement: "Evaluate whether enterprise architecture is used to keep IT investment aligned with business direction and to control technical complexity."
objectives:
  - "State the purpose of enterprise architecture in governance terms."
  - "Explain how EA controls redundancy, risk and misalignment."
  - "Recognise when architecture exists on paper but does not govern decisions."
trap: "Judging enterprise architecture as a technical diagram. The exam treats it as a governance control over how IT investment is directed."
quiz:
  - question: "From a governance perspective, what is the PRIMARY purpose of enterprise architecture?"
    options:
      - "To document the current network topology for support staff"
      - "To keep IT investment and systems aligned with business direction as both evolve"
      - "To select the vendors for new infrastructure"
      - "To define the coding standards developers must follow"
    answer: 1
    explanation: "Enterprise architecture is a governance instrument: it provides a structured view of business and IT so that investment and systems stay aligned with business direction over time. It controls drift, redundancy and complexity as the organisation changes."
    whyWrong:
      - "Network topology documentation is one narrow technical artefact, not the purpose of EA."
      - ""
      - "Vendor selection is a procurement decision that architecture may inform but does not exist to make."
      - "Coding standards are a development-level control, well below the enterprise view EA provides."
  - question: "An organisation has a detailed enterprise architecture, but new systems are routinely approved without reference to it, and duplicate capabilities keep appearing. What is the MOST significant issue?"
    options:
      - "The architecture is too detailed to be useful"
      - "The architecture is not being used to govern investment decisions, so it provides no control"
      - "The architecture should be updated more frequently"
      - "The duplicate systems should be consolidated by IT"
    answer: 1
    explanation: "Architecture only delivers value when decisions are actually made through it. If systems are approved without reference to the EA and duplication results, the EA is a document rather than a control. The failure is that it does not govern investment, which is its entire point."
    whyWrong:
      - "Detail is not the problem; an unused simple architecture would fail the same way."
      - ""
      - "More frequent updates do not help if no decision consults the architecture at all."
      - "Consolidating duplicates treats a symptom while the governance gap that produced them remains."
  - question: "How does effective enterprise architecture BEST help an IS auditor assess IT risk?"
    options:
      - "It lists every device connected to the network"
      - "It reveals dependencies and redundancies that concentrate or duplicate risk across systems"
      - "It records the license cost of each application"
      - "It defines the escalation path for incidents"
    answer: 1
    explanation: "A good architecture makes dependencies and overlaps visible: which systems rely on a shared component, where the same capability is duplicated, where a single point of failure sits. That view lets the auditor see how risk is concentrated or spread, which a per-system inventory cannot."
    whyWrong:
      - "A device list is an inventory, not a view of how systems depend on one another."
      - ""
      - "License costs are a financial detail, not a risk-dependency map."
      - "An escalation path is an operational procedure, not an architectural view of risk."
---

## The situation

The company has a beautiful enterprise architecture: layered diagrams, a target-state model, principles on every page. It also has three separate systems that do customer onboarding, two overlapping data warehouses, and a new tool just approved that duplicates a capability it already owns.

The architecture is excellent. It is also being ignored, and that is the finding.

## Architecture is a governance control

The exam does not treat enterprise architecture (EA) as a technical drawing. It treats it as a **governance instrument**: a structured view of the business and its IT that keeps investment and systems aligned with business direction as both change over time.

Organisations drift. New systems get bought to solve today's problem, duplicating capabilities that already exist, adding dependencies nobody tracks, and slowly turning the estate into something no one understands. EA is the control against that drift. It gives decision-makers a map so that each new investment can be judged against where the organisation is trying to go, not just against the immediate need in front of them.

## What good architecture controls

Used properly, EA controls three things the exam cares about:

- **Alignment.** New systems are assessed against the target architecture, so investment moves the estate toward business direction rather than away from it.
- **Redundancy.** Duplicate capabilities are visible and avoidable, so the organisation stops paying twice for the same function.
- **Risk.** Dependencies and single points of failure become visible. When you can see that six systems rely on one shared component, you can see where risk is concentrated. A per-system inventory never shows you that.

That last point is why EA helps an auditor directly: it reveals how risk is spread or concentrated across systems, which no device list or asset register can.

## Paper architecture governs nothing

The common failure is an architecture that exists but does not decide anything. If new systems are approved without reference to the EA, and duplication keeps appearing, the architecture is a document, not a control. Its detail and elegance are irrelevant; what matters is whether investment decisions actually pass through it.

So the auditor's real test is not "is there an architecture" but "is it used". Ask to see recent investment decisions and look for the EA in them. If it is absent, the governance gap is the finding, and consolidating the duplicate systems only treats the symptom that gap produced.

## Where practitioners go wrong

The instinct that costs marks is grading the architecture as a technical deliverable, admiring the diagrams. The exam asks a governance question: does this architecture govern how IT investment is directed. A plain architecture that every decision consults is worth more than a magnificent one that sits on a shelf.
