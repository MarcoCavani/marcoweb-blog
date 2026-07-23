---
title: "IT Risk Management: Identification, Assessment and Response"
description: "Identify, assess, respond, monitor. The exam tests the order, the vocabulary of the four responses, and who is actually allowed to choose."
course: "cisa-domain-2"
module: "Domain 2: Governance and Management of IT"
domain: 2
order: 6
minutes: 9
gated: false
taskStatement: "Evaluate an organisation's IT risk management process against the identify, assess, respond and monitor lifecycle."
objectives:
  - "Order the risk management lifecycle and state what each stage produces."
  - "Name the four risk responses and match each to a scenario."
  - "Distinguish the roles of the risk owner, the control owner and the auditor."
trap: "Jumping to a control before the risk is assessed. The exam almost always wants assessment before response, mirroring the audit-planning logic in Domain 1."
quiz:
  - question: "An organisation identifies a new IT risk. What should management do NEXT?"
    options:
      - "Implement a control to mitigate it"
      - "Assess its likelihood and impact"
      - "Accept the risk if it seems minor"
      - "Transfer the risk through insurance"
    answer: 1
    explanation: "Identification is followed by assessment. Until likelihood and impact are understood, any response is guesswork, you cannot choose proportionately between mitigating, transferring, accepting or avoiding without knowing the size of the risk. Assessment before response is the same discipline as risk-based audit planning."
    whyWrong:
      - "Implementing a control before assessment risks spending on a minor exposure or under-treating a severe one."
      - ""
      - "Accepting a risk that only 'seems' minor skips the assessment that would confirm whether it is."
      - "Transferring is a response, and choosing any response before assessment is premature."
  - question: "An organisation buys cyber-insurance to cover the financial loss from a potential data breach. Which risk response is this?"
    options:
      - "Risk avoidance"
      - "Risk transfer"
      - "Risk mitigation"
      - "Risk acceptance"
    answer: 1
    explanation: "Buying insurance shifts the financial consequence of the risk to a third party, which is risk transfer. The breach can still occur; what changes is who bears part of the loss. Note that transfer moves financial impact, not the underlying obligation or reputational damage."
    whyWrong:
      - "Avoidance would mean not undertaking the activity that creates the risk at all, for example not holding the data."
      - ""
      - "Mitigation reduces likelihood or impact through controls, which insurance does not do."
      - "Acceptance means bearing the risk with no action, whereas insurance is a deliberate action."
  - question: "Who is PRIMARILY responsible for deciding how to respond to an identified IT risk?"
    options:
      - "The IS auditor who identified it"
      - "The business risk owner who owns the affected process or asset"
      - "The IT security team"
      - "The external regulator"
    answer: 1
    explanation: "The response decision belongs to the risk owner, the person accountable for the process or asset the risk affects. They decide whether to mitigate, transfer, accept or avoid, within the appetite the board has set. The auditor evaluates that decision but does not make it."
    whyWrong:
      - "The auditor identifies and evaluates risk but must not choose the response, or independence is lost."
      - ""
      - "The security team may implement controls, but it does not own the business decision on how to respond."
      - "A regulator sets external requirements; it does not make the organisation's internal response decisions."
---

## The situation

A team spots that a legacy system has no logging. Within a day, someone has bought a logging tool, someone else has written a policy, and a third person has quietly decided the whole thing is "probably fine". Three responses, and not one person has actually worked out how likely a problem is, or how bad it would be.

They skipped assessment, and the exam treats that as the cardinal error.

## The lifecycle, in order

IT risk management runs as a lifecycle, and the order is tested directly:

1. **Identify.** Find the risks: the events that could stop the organisation meeting its objectives.
2. **Assess.** Determine each risk's likelihood and impact, so it can be ranked and treated proportionately.
3. **Respond.** Choose and apply a response appropriate to the assessed size of the risk.
4. **Monitor.** Track the risk and the effectiveness of the response over time, and reassess as things change.

The step candidates skip is assessment. Just as risk-based audit planning demands you assess before you allocate effort, risk management demands you assess before you respond. A control chosen before assessment is guesswork: it may over-spend on a trivial exposure or under-treat a severe one. When a question asks what to do *next* after identifying a risk, the answer is almost always assess it.

## The four responses

Once a risk is assessed, there are exactly four things you can do with it, and the exam expects the vocabulary exactly:

- **Mitigate** (or reduce): apply controls that lower the likelihood or the impact. Most controls are mitigation.
- **Transfer** (or share): shift the financial consequence to a third party, typically through insurance or a contract. The event can still happen; who bears the loss changes. Transfer moves financial impact, not the underlying obligation or the reputational harm.
- **Accept**: bear the risk with no further action, a legitimate choice when the risk sits within appetite and treatment would cost more than it saves.
- **Avoid**: stop doing the activity that creates the risk, for example by not collecting the data at all.

A frequent trap is calling insurance "mitigation". It is transfer. Mitigation changes the risk itself; transfer only moves the financial consequence.

## Who decides

The response decision belongs to the **risk owner**, the person accountable for the process or asset the risk affects. They choose to mitigate, transfer, accept or avoid, within the risk appetite the board has set.

This matters for the auditor's own position. The auditor identifies and evaluates risk and reports on it, but must not choose the response, exactly as in Domain 1: making the management decision destroys independence. The security team may implement a control, but it does not own the business decision either. When a question asks who decides the response, look for the business risk owner.

## Where practitioners go wrong

The instinct that costs marks is reaching for a control the moment a risk appears. It feels responsible, and it is premature. Assess first, then let the risk owner choose a response proportionate to what the assessment found.
