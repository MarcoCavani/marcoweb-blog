---
title: "British Airways Stranded 75,000 Passengers Because a Power Unit Was Switched Off Incorrectly"
description: "In May 2017, a power supply failure at British Airways' data centre in Heathrow triggered a cascading IT failure that grounded all flights for 30 hours, affected 75,000 passengers, and cost the airline approximately 185 million pounds. The failure was not in the power system. It was in the disaster recovery architecture that was supposed to make a single power failure survivable."
pubDate: 2027-02-28
heroImage: "/images/itgc-h2-disaster-recovery.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Disaster Recovery", "ITGC", "British Airways IT Failure", "RTO", "Business Continuity", "IT Audit"]
readTime: "7 min read"
---

On the morning of 27 May 2017, the UK bank holiday Saturday before the Whitsun half-term school holiday, a power supply to British Airways' data centre in Heathrow was interrupted. The specific cause was subsequently reported as a third-party IT contractor incorrectly disconnecting and reconnecting a power supply unit, causing an uncontrolled power surge that damaged servers.

What followed was not simply a power outage. The power event triggered a cascading failure of the IT systems that controlled British Airways' check-in, departure boards, crew rostering, and baggage handling. The airline's backup systems, which were intended to maintain operations when primary systems failed, did not absorb the load.

The result was total operational failure. Every British Airways flight was grounded. Passengers at Heathrow, Gatwick, and around the world could not be checked in. Crew could not be assigned to flights. Baggage handling stopped. The airline cancelled all flights for 27 May and many on 28 May.

Approximately 75,000 passengers were affected. The airline faced compensation claims, hotel costs, and rebooking costs. The CAA later opened an enforcement investigation into the airline's passenger rights response. The combined financial impact was estimated at approximately 185 million pounds.

The IT investigation found that British Airways' disaster recovery architecture had not been tested adequately for the specific failure mode encountered, and that the recovery of systems took substantially longer than the RTO that had been assumed in the airline's business continuity planning.

---

## The Risk

Disaster Recovery controls address the risk that, following a significant disruptive event, the organisation can restore IT systems and business operations within an acceptable timeframe, achieving the recovery objectives defined in the business continuity and disaster recovery plan.

The risk profile of inadequate disaster recovery includes:

**Untested recovery plans:** A disaster recovery plan that has not been tested against realistic failure scenarios is a theoretical document. Recovery procedures that appear logical on paper may fail due to dependencies, configuration mismatches, or skill gaps that are only discovered during an actual recovery.

**Single points of failure not identified:** Many organisations have disaster recovery plans that protect against specific failure modes but have unidentified single points of failure that, when activated, produce failures the plan does not cover. The British Airways case illustrated a specific failure mode (power surge causing hardware damage) that the recovery architecture had not been tested against.

**Recovery Time Objective gaps:** An organisation may have defined an RTO of four hours but have never tested whether systems can actually be restored in four hours. The gap between assumed and actual recovery time is often not discovered until an incident occurs.

**Incomplete failover testing:** Organisations with primary and secondary data centres frequently test failover in one direction but not the other, or test failover at low load without testing the ability to sustain production traffic volumes at the secondary site.

**Human recovery skill gaps:** Disaster recovery procedures that depend on staff performing unfamiliar tasks under pressure, without recent practice, produce delays and errors. Recovery is a skill that degrades without practice.

---

## The British Airways Failure

The specific technical sequence at British Airways is reported to have involved the following:

**Power event:** A third-party contractor caused an uncontrolled power event that damaged physical servers in the primary data centre.

**Failed automatic failover:** The backup infrastructure did not automatically absorb the production workload following the primary system failure, either because the automatic failover mechanisms did not activate correctly or because the damage was beyond what the automated failover was designed to handle.

**Extended manual recovery:** The recovery from the initial event to restoration of sufficient system capability to resume operations took approximately 28 to 30 hours. During this period, the airline had no ability to process check-ins, assign crew, or manage baggage for any of its flights.

**No tested recovery scenario for this failure mode:** British Airways' disaster recovery testing had not specifically tested the scenario of physical hardware damage at the primary data centre resulting in the failure of automatic failover. The recovery team encountered procedures and dependencies that had not been validated.

The airline's CEO, Alex Cruz, stated that the failure was not caused by a cyberattack and was the result of an IT failure caused by a power supply issue. The Civil Aviation Authority later confirmed it had opened an enforcement investigation into BA's compliance with EU Regulation 261/2004, which requires airlines to provide assistance to stranded passengers.

---

## What Failed

**Untested failover for this specific failure mode:** The DR plan and testing had not covered the specific scenario of physical hardware damage in the primary data centre causing automatic failover to fail. The gap was discovered during the incident.

**Recovery time dramatically exceeding the assumed RTO:** The assumption in BA's business continuity planning was a recovery time substantially shorter than the 28 to 30 hours actually experienced. The gap between assumed and actual RTO was not discovered until the incident.

**Third-party contractor risk in critical infrastructure:** A third-party contractor was performing work on power infrastructure in a live data centre without adequate controls to prevent an uncontrolled power event. Contractor activity in critical data centre environments must be controlled and supervised.

**Business continuity plan not tested at scale:** While BA would have had some DR testing, the scale and specific failure mode of the May 2017 event was not represented in recent testing. A recovery that takes 28 hours when the RTO is 4 hours represents a substantial gap in testing coverage.

---

## What Good Looks Like

**Regular and realistic DR testing:** The DR plan is tested at least annually with a test scenario that reflects realistic failure modes: primary data centre failure, primary and secondary site loss of connectivity, and critical system loss. Tests are conducted at realistic production load levels.

**RTO validation in testing:** DR test results are compared against the defined RTO for each critical system. Systems whose tested recovery time exceeds the RTO are subject to remediation before the next test cycle.

**Single point of failure identification:** DR architecture is reviewed to identify single points of failure that would result in failures outside the plan's scope. Physical power infrastructure, network connectivity, and human dependency points are assessed.

**Contractor controls in critical environments:** Third-party contractors performing work in or near data centre power, cooling, and network infrastructure are supervised, limited in scope, and required to follow formal procedures. Work affecting power supply to production systems requires change control approval.

**Business continuity test that exercises the response, not just the technical recovery:** DR tests include the business response: communication to customers, invocation of manual procedures for critical processes, and escalation to executive level. Recovery is not only a technical activity.

---

## How Auditors Test It

When auditing Disaster Recovery controls, an IT auditor will typically:

**Review the disaster recovery plan:** Confirm that a current DR plan exists that covers the key failure scenarios for the organisation. Assess whether the plan is specific to the organisation's architecture or is a generic document. A DR plan that has not been updated to reflect the current production environment is not reliable.

**Test DR test coverage and frequency:** Obtain evidence of the most recent DR test. Confirm that the test covered realistic failure scenarios and that it was conducted within the defined testing cycle. Assess the scope of the test: was it a failover of specific systems or of the full production environment?

**Test RTO compliance:** From the DR test results, determine the actual recovery time achieved. Compare against the defined RTO for each critical system. Identify systems where the tested recovery time exceeded the defined RTO.

**Assess DR infrastructure architecture:** Review the DR architecture for single points of failure not covered by the plan. Assess whether the secondary site can sustain production load. Assess whether failover is automated or manual and the dependencies of each.

**Review contractor and third-party controls in data centre environments:** Assess the controls on third-party access to data centre infrastructure. Confirm that physical work in the data centre requires a formal change request and supervisor oversight.

**Test recovery procedure accuracy:** For a sample of recovery procedures in the DR plan, assess whether the procedures are current and accurate. Procedures that reference systems, credentials, or configurations that no longer exist will fail during an actual recovery.

---

## Lessons and Recommendations

British Airways' 2017 IT failure illustrated that disaster recovery failures are not unusual events. The airline had invested in IT infrastructure and had DR architecture in place. The failure was in the gap between the assumed recovery capability and the actual capability, which was not discovered until an incident exposed it.

**Test the failure modes that would most hurt your business.** The worst time to discover that your DR plan does not cover a specific failure mode is during that failure. Identify the two or three scenarios that would be most damaging and test specifically for those.

**Test at production load.** A DR test that runs at 10 percent of production load does not confirm that the DR infrastructure can sustain production traffic. Test the capacity, not just the procedure.

**Know your actual RTO, not your assumed RTO.** If your last DR test produced a recovery time that exceeded your defined RTO, you have an open finding. Close it before the next test cycle.

**Control what happens in your data centre.** A contractor who disconnects a live power supply in a production data centre without supervision and without following a tested procedure is an uncontrolled risk. Physical access and work controls in data centres are DR controls.

**Exercise the whole response, not just the technical recovery.** A DR test that recovers the systems but does not exercise customer communication, executive escalation, or manual fallback procedures will find gaps in those areas only when an incident exposes them.

---

## Assess Your Disaster Recovery Controls

The MarcoWeb ITGC Tool covers Disaster Recovery across Group H, with structured assessment templates for DR plan currency, RTO testing, and failover architecture review.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
