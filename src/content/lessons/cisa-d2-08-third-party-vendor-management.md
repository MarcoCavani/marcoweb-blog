---
title: "Third-Party and Vendor Management"
description: "You can outsource the work but not the accountability. The exam tests the right to audit, what a contract must fix before signing, and who still owns the risk."
course: "cisa-domain-2"
module: "Domain 2: Governance and Management of IT"
domain: 2
order: 8
minutes: 8
gated: false
taskStatement: "Evaluate whether third-party arrangements preserve the organisation's control, assurance and accountability over outsourced IT."
objectives:
  - "State what must be fixed in a contract before a service is outsourced."
  - "Explain why the right to audit and independent assurance reports matter."
  - "Recognise that accountability for outsourced risk stays with the organisation."
trap: "Assuming outsourcing transfers the risk. It transfers the work; the accountability, and often the regulatory obligation, stays with you."
quiz:
  - question: "When outsourcing a critical IT service, when is the BEST time to establish the organisation's right to audit the provider?"
    options:
      - "During the first annual review after go-live"
      - "In the contract, before it is signed"
      - "When a problem with the provider is first suspected"
      - "It cannot be established once the service is running"
    answer: 1
    explanation: "The right to audit, along with security requirements, service levels and data-handling terms, must be written into the contract before signing. Once the contract is agreed, the organisation's leverage is gone, and a provider is under no obligation to grant access that was not negotiated in."
    whyWrong:
      - "Waiting until the first review is too late; if the right is not in the contract, the provider need not grant it."
      - ""
      - "Establishing it only when a problem is suspected assumes a cooperation the contract never secured."
      - "It can be established later in principle, but only if the provider agrees, which is exactly the leverage you lose after signing."
  - question: "A cloud provider will not grant direct audit access but offers an independent SOC 2 Type II report. How should the IS auditor treat this?"
    options:
      - "Reject it, because only a direct audit is acceptable"
      - "Use it as third-party assurance over the provider's controls, considering its scope and period"
      - "Accept it without examining what it covers"
      - "Treat it as equivalent to the organisation's own control testing"
    answer: 1
    explanation: "An independent assurance report such as SOC 2 Type II is a legitimate and common substitute for direct audit access, especially with large cloud providers. The auditor relies on it but must check its scope, the period it covers, and whether the controls it tests are the ones that matter to this organisation."
    whyWrong:
      - "Direct audit is not the only acceptable form of assurance; independent reports are standard for scaled providers."
      - ""
      - "Accepting it unexamined ignores scope and period, which determine whether it actually covers what matters."
      - "It is third-party assurance, not a replacement for understanding your own controls and complementary user entity controls."
  - question: "After outsourcing payroll processing, an organisation suffers a data breach at the provider. Where does accountability for protecting that data primarily rest?"
    options:
      - "Entirely with the provider, since they processed the data"
      - "With the organisation, which remains accountable for the data it is responsible for"
      - "With the regulator that failed to inspect the provider"
      - "Split equally by contract regardless of the circumstances"
    answer: 1
    explanation: "Outsourcing transfers the work, not the accountability. The organisation remains accountable for data it is responsible for, and typically remains the data controller in regulatory terms. The provider is responsible under the contract, but the organisation cannot outsource its own obligation to protect the data."
    whyWrong:
      - "The provider is responsible for its processing, but accountability to customers and regulators does not leave the organisation."
      - ""
      - "The regulator sets and enforces requirements; it does not assume the organisation's accountability."
      - "Contractual liability may be apportioned, but regulatory accountability for the data stays with the responsible organisation."
---

## The situation

The organisation has moved payroll to a specialist provider, and the CIO tells you the risk now sits with the vendor. Six months later the vendor has a breach, and the regulator's letter arrives on the CIO's desk, not the vendor's.

Outsourcing moved the work. It did not move what the exam wants you to see: the accountability.

## Fix it in the contract or lose it

The single most tested point in third-party management is timing: **the controls you want must be in the contract before it is signed.** Before go-live, the organisation has leverage, the provider wants the deal. After signing, that leverage is gone.

So the contract, not a later review, is where you fix:

- **The right to audit**, or an agreed alternative form of assurance.
- **Security requirements** the provider must meet.
- **Service levels** and the consequences of missing them.
- **Data handling**: location, protection, retention, and return or destruction on exit.
- **Exit terms**, so you are not trapped when the relationship ends.

A right to audit sought only after a problem is suspected is a right you never secured. When a question asks when to establish it, the answer is in the contract, before signing.

## When you cannot audit directly

Large providers, cloud platforms especially, will not grant every customer direct audit access, and the exam accepts this. The standard substitute is an **independent assurance report**, such as a SOC 2 Type II. The auditor relies on it as third-party assurance over the provider's controls.

But relying on it is not accepting it blindly. The auditor checks its **scope** (does it cover the controls that matter here), its **period** (Type II covers a span of operation, not a single point), and the **complementary user entity controls** it assumes the organisation itself performs. An assurance report over the wrong controls, or an expired period, gives comfort it has not earned.

## Accountability does not outsource

The principle underneath all of it: you can outsource the work, but not the accountability. When a provider breaches data the organisation is responsible for, the organisation remains accountable, and in most regimes remains the data controller, regardless of who did the processing. The contract may apportion liability, but the obligation to protect the data stays home.

This is why "we outsourced it, so the risk is theirs" is always the wrong answer. The right framing is that outsourcing changes who performs the control and adds a layer of assurance to obtain, while leaving the organisation answerable for the outcome.

## Where practitioners go wrong

Two instincts cost marks. The first is believing outsourcing transfers risk, it transfers the activity and some financial liability, not the accountability. The second is treating a provider's assurance report as either worthless or as a blank cheque; it is neither. It is usable assurance whose value depends entirely on its scope and period.
