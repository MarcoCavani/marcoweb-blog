---
title: "Project Governance, the Business Case and Feasibility"
description: "Before a line of code is written, who owns the project, what justifies it, and what the auditor may and may not do. The exam tests the sponsor's ownership and the auditor's independence."
course: "cisa-domain-3"
module: "Domain 3: IS Acquisition, Development and Implementation"
domain: 3
order: 1
minutes: 8
gated: false
taskStatement: "Evaluate whether an IT project has the governance, an approved business case and a feasibility basis to proceed, and determine the IS auditor's proper role in it."
objectives:
  - "Identify who owns a project's business case and the realisation of its benefits."
  - "Distinguish the roles of the sponsor, the steering committee and the project manager."
  - "Determine what the IS auditor may and may not do on a project without losing independence."
trap: "Treating the IS auditor as a project team member whose job is to make the project succeed. The auditor reviews and reports; the sponsor and steering committee own the decisions and the benefits."
quiz:
  - question: "Who is PRIMARILY responsible for a project's business case and the realisation of its benefits?"
    options:
      - "The project manager"
      - "The project sponsor, from the business"
      - "The IT department that builds the system"
      - "The IS auditor reviewing the project"
    answer: 1
    explanation: "The project sponsor, a business owner, owns the business case and is accountable for the benefits the project is meant to deliver. The project manager runs delivery day to day, IT builds the solution, and the auditor reviews it, but none of them owns the benefits."
    whyWrong:
      - "The project manager delivers to time, cost and scope; they do not own the business benefits that justify the project."
      - ""
      - "IT builds the system; the reason for building it, and its benefits, belong to the business sponsor."
      - "The auditor provides independent assurance; owning the business case would destroy that independence."
  - question: "An IS auditor is asked to join the project team and design the new application's controls. What is the auditor's BEST response?"
    options:
      - "Accept, since the auditor understands controls best"
      - "Advise on control requirements but not take ownership of designing or building them"
      - "Decline any involvement until the project is complete"
      - "Design the controls and audit them later to confirm they work"
    answer: 1
    explanation: "The auditor may advise on control requirements during development, early involvement makes controls stronger and cheaper, but must not own the design or build. Auditing controls you designed yourself destroys independence, the same principle as reporting a finding rather than remediating it."
    whyWrong:
      - "Expertise is not the issue; owning the design of controls the auditor must later assess compromises independence."
      - ""
      - "Waiting until completion forfeits the cheapest, most effective time to influence controls, at requirements and design."
      - "Designing controls then auditing your own work is the exact independence conflict the profession forbids."
  - question: "A project is about to begin construction, but no approved business case or feasibility study exists. What is the IS auditor's GREATEST concern?"
    options:
      - "The project may use the wrong development methodology"
      - "There is no approved basis to justify the investment or to measure whether it succeeds"
      - "The project manager may be too junior for the work"
      - "The steering committee may meet too infrequently"
    answer: 1
    explanation: "Without an approved business case and feasibility study, the organisation has committed resources with no documented justification, no confirmation the project is viable, and no benchmark against which a later post-implementation review can judge success. That missing foundation is the primary concern."
    whyWrong:
      - "The methodology matters, but it is a detail next to the absence of any approved justification to proceed at all."
      - ""
      - "The project manager's seniority is a staffing question, not the governance gap an unjustified project represents."
      - "Meeting frequency is a governance refinement; the deeper problem is that there is no approved basis for the project to govern."
---

## The situation

A project is already staffed and building. You ask for the approved business case and the feasibility study, and there is neither. The system has a budget and a deadline, but nothing on record says why the organisation is spending the money, or how anyone will later know it worked.

The code may turn out fine. The governance gap is the finding, and it is where Domain 3 begins.

## Three roles, kept distinct

The exam separates who *delivers* a project from who *owns* it, and questions turn on that line.

- **The sponsor** is a business owner. They own the business case, secure the funding, and are accountable for the benefits the project exists to deliver. When a question asks who owns the benefits, it is the sponsor.
- **The steering committee** provides governance and oversight. It resolves cross-functional issues, keeps the project aligned with strategy, and approves progression at stage gates. It governs; it does not do the day-to-day work.
- **The project manager** runs delivery: managing scope, schedule and cost, and reporting progress. They deliver the project; they do not own the business benefits that justify it.

Confusing delivery with ownership is the reliable trap. IT and the project manager build and deliver; the business sponsor owns the reason and the result.

## The business case and feasibility

Two documents justify a project before it consumes resources.

The **business case** sets the expected costs against the expected benefits and shows how the project supports the organisation's strategy. It is not written once and filed. It is revisited at each stage gate, so that a project whose costs have ballooned or whose benefits have evaporated can be stopped rather than finished out of momentum.

The **feasibility study** asks whether the project is actually viable, across several dimensions: economic (does it pay back), technical (can it be built with available technology and skills), operational (will the organisation adopt and run it), and scheduling and legal (can it be done in time and within the law). A project that fails feasibility should not proceed regardless of how attractive the business case looks.

Together they are also the benchmark for the end of the domain: without them, the post-implementation review has nothing to measure success against.

## The auditor's role, and its limit

The IS auditor's place in a project is independent review: of the governance, the controls being designed in, and the decisions being made. Early involvement is valuable, controls specified at requirements are cheaper and stronger than controls bolted on later, so the auditor may **advise** on what controls the system needs.

What the auditor may not do is **own** any of it. Managing the project, making the go or no-go decision, or designing and building the controls all cross from assurance into doing. An auditor who designs a control cannot later give an independent opinion on whether it works, which is the same discipline as reporting a finding rather than fixing it in Domain 1, and evaluating a risk response rather than making it in Domain 2.

Advisory, yes. Ownership, no.

## Where practitioners go wrong

The instinct that costs marks is to treat the auditor as the person who makes the project succeed, or who takes charge of its risks. The auditor reviews and reports; the sponsor and the steering committee own the decisions and the benefits. The second instinct is to let the business case belong to IT because IT is building the system. The business case belongs to the business, because the benefits, and the accountability for them, do too.
