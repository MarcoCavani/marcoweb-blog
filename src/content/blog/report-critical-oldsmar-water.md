---
title: "Critical Infrastructure Report: The Oldsmar Water Treatment Attack and the Sodium Hydroxide Near-Miss"
description: "On 5 February 2021, an attacker remotely accessed the control system of the Oldsmar, Florida water treatment plant and raised the sodium hydroxide concentration to 111 times the safe level. An alert operator noticed the cursor moving and reversed the change. This near-miss exposed the open remote access vulnerabilities common in small water utilities across the US."
pubDate: 2026-08-27
heroImage: "/images/report-critical-oldsmar-water.svg"
category: "Digital Report"
industry: "Critical Infrastructure"
author: "Marco Cavani"
tags: ["Critical Infrastructure", "Water Treatment", "Oldsmar", "OT Security", "TeamViewer", "Incident Report"]
readTime: "10 min read"
---

## Executive Summary

On 5 February 2021, an operator at the Oldsmar, Florida water treatment plant noticed their computer mouse moving on its own. The cursor navigated to the control panel for the plant's sodium hydroxide dosing system and raised the concentration setting from 111 parts per million to 11,100 parts per million, a 100-fold increase above the normal operational level. The operator immediately reversed the change.

The sodium hydroxide (NaOH) concentration that the attacker attempted to set was far above safe drinking water standards. At 11,100 ppm, the water would have been caustic and dangerous to consumers. The change was reversed within minutes of being made. It is assessed that secondary safety systems, including pH monitoring, would likely have detected the abnormal concentration before it reached the distribution network, but this assessment depends on the specific safety architecture of the Oldsmar plant and similar systems.

The Oldsmar incident is the canonical example of water infrastructure cyberattack risk: a small public utility with minimal IT security resources, operating with remote access software that had no authentication beyond a shared password, providing internet-accessible control over a chemical dosing system.

---

## Incident Overview

**Date:** 5 February 2021

**Organisation:** City of Oldsmar, Florida water treatment plant (serves approximately 15,000 people)

**System targeted:** SCADA control for sodium hydroxide (NaOH) dosing system

**Mechanism:** Remote access via TeamViewer, a commercial remote access tool; the attacker raised the NaOH setting from 111 to 11,100 ppm

**Authentication:** TeamViewer was protected only by a shared password; no MFA

**Detection:** An alert plant operator noticed the cursor moving and immediately reversed the change

**Safety systems:** Secondary safety monitoring (pH sensors) would likely have detected the abnormal concentration, though this is not confirmed

**Attribution:** Not publicly attributed; investigation conducted by FBI and Secret Service

**Immediate response:** Oldsmar disconnected its systems from the internet; Florida raised the alert to other water utilities

---

## Technical Analysis: The Remote Access Configuration

The attack was enabled by a specific and avoidable technical configuration: TeamViewer, a commercial remote desktop application, was installed on the control system computer at the Oldsmar water treatment plant and was accessible from the internet.

**Why TeamViewer was in use:** Remote access to operational technology systems for support, monitoring, and troubleshooting is a common operational requirement at water utilities. For a small utility like Oldsmar, with limited IT resources, a commercial remote access tool is a practical solution for enabling operators and support staff to access systems outside business hours or from outside the plant.

**The specific vulnerabilities:**

1. TeamViewer was configured to allow incoming connections from the internet without requiring the caller to know which device they were connecting to (the device ID can be discovered or guessed)
2. Authentication relied on a shared password that multiple plant employees used; there was no MFA requirement
3. The same computer used for remote access was also used for regular plant operations, meaning the remote access software had direct access to the operational controls
4. Network traffic monitoring was insufficient to detect or alert on an anomalous incoming TeamViewer session

**The attacker's perspective:** An attacker seeking to access small water utility control systems would know that TeamViewer is commonly used in this sector. Scanning for reachable TeamViewer instances is a known technique; if a TeamViewer ID can be obtained and the shared password is weak or default, access follows. The Oldsmar attack may have been discovered through similar enumeration.

**What prevented harm:** An alert human operator noticed the cursor moving and immediately reversed the change. This is a manual, human detection mechanism, not a technical control. Had the operator been on a break, in another part of the plant, or simply not looking at the screen at the moment of the attack, the change might have remained in place for a longer period.

---

## The Water Sector Vulnerability Profile

Oldsmar is a small city. Its water treatment plant serves approximately 15,000 people. The plant has limited IT budget, limited cybersecurity expertise, and, like most small water utilities, has not historically been subject to the same cybersecurity compliance requirements as large utilities in sectors such as power generation.

This profile is not unique to Oldsmar. The American water sector includes thousands of small utilities with similar resource constraints. The Environmental Protection Agency's assessments of water sector cybersecurity have consistently identified remote access vulnerabilities, use of legacy and unsupported systems, and insufficient monitoring as common findings.

**The regulatory context:** At the time of the Oldsmar attack, the water sector's federal cybersecurity requirements were less prescriptive than those applied to the electricity sector. The America's Water Infrastructure Act of 2018 required large water systems to conduct risk and resilience assessments and develop emergency response plans, but these requirements applied to systems serving 3,300 or more people and focused on physical and chemical risks more than cybersecurity.

Subsequent regulatory activity, including EPA cybersecurity guidance and requirements introduced through 2023 and 2024, has increased the cybersecurity baseline for water utilities. However, the resourcing gap between regulatory requirements and the operational capacity of small utilities remains a structural challenge.

---

## The Chemical Safety Dimension

The Oldsmar attack targeted the chemical dosing system because chemical manipulation represents the most direct physical harm pathway for water infrastructure attacks. Understanding the chemistry is relevant to understanding the risk:

**Sodium hydroxide (NaOH) in water treatment:** NaOH is used in water treatment to adjust pH levels. Drinking water should be slightly alkaline (pH 7 to 8.5) to prevent corrosion of distribution pipes. NaOH is a caustic chemical; at the concentrations used in water treatment (typically 100 to 200 ppm), it is safe for drinking water. At much higher concentrations, it would be a significant chemical hazard.

**What 11,100 ppm would do:** At the level the attacker set, the water would be highly alkaline, with a pH well above safe drinking water standards. Consumers could experience chemical burns to the mouth, throat, and digestive tract. The water would likely be visually abnormal (cloudiness or deposits) and would taste and smell wrong, creating additional detection pathways.

**Why this attack might not have caused harm even if undetected:** Modern water treatment plants have multiple safety mechanisms between a SCADA control change and the water reaching consumers: pH sensors, turbidity sensors, alarms, and manual inspection points. The probability that a grossly elevated NaOH concentration would pass through all safety checks undetected is low, though not zero, depending on the specific plant's configuration.

**The broader risk:** A more sophisticated attacker with knowledge of the specific plant's safety architecture could potentially identify the sequence of changes necessary to bypass the safety sensors, or could target multiple control points simultaneously to overwhelm the operators' ability to respond.

---

## ITGC Control Failures

**Remote Access Authentication:** TeamViewer accessed with a shared password, with no MFA, is the control failure that most directly enabled the Oldsmar attack. Any remote access pathway to an operational technology system that controls physical processes must require strong authentication. A shared password is insufficient; MFA, ideally with hardware tokens, is the baseline.

**Remote Access Session Monitoring:** An incoming TeamViewer session from an external IP address to a water treatment plant control system is an event that should be logged and monitored. If the session source, time, or duration is anomalous relative to normal operational patterns, it should generate an alert. The absence of monitoring for this access pathway meant that the only detection was an alert human operator.

**Shared Credential Management:** A shared password used by multiple operators is a credential management anti-pattern. Shared credentials cannot be attributed to a specific individual in an audit log, cannot be individually revoked when an operator leaves, and are more likely to be weak and reused. Individual named accounts with individual credentials, monitored through a privileged access management system, is the appropriate architecture.

**Network Segmentation Between Remote Access and Control Systems:** The computer used for TeamViewer remote access was the same computer used to operate the plant controls. A segmented architecture, where remote access is received on a jump server that requires an additional authenticated connection to reach the control system, adds a layer of separation between the remote access endpoint and the operational controls.

**Manual Safety Process Reliability:** Detection of the Oldsmar attack depended on an operator being present and alert at the moment of the attack. Operational procedures that require continuous operator monitoring of control system displays, and that specify what operators should do if they observe unexpected cursor movement or control changes, provide a baseline manual control. This cannot be the primary detection mechanism but is a last-resort catch.

---

## Small Utility Cybersecurity: A Structural Problem

The Oldsmar attack exposed a structural problem that regulatory guidance alone cannot solve: small water utilities lack the internal expertise and resources to implement the cybersecurity controls that the threat requires.

A utility serving 15,000 people may have one or two IT staff responsible for all information technology, including industrial control systems. Those staff are typically not cybersecurity specialists. They may not be aware of the specific risks associated with internet-exposed remote access software on OT systems. They do not have a budget for a SCADA-specific monitoring system or a privileged access management platform.

The practical response to this structural problem operates at three levels:

**Water sector information sharing:** Organisations such as the Water Information Sharing and Analysis Center (WaterISAC) provide threat intelligence and guidance specific to water utilities. Participation in these sharing programs provides small utilities with threat information and recommended controls that they could not generate internally.

**State and federal support programs:** Federal and state programs that provide cybersecurity assessment services and funding to small water utilities reduce the gap between requirements and resources. The EPA's Water Security Initiative and similar state programs provide this support.

**Managed security services calibrated for OT environments:** Commercial managed detection and response services that specialise in operational technology environments can provide monitoring and alerting capabilities to small utilities without requiring them to build internal expertise.

---

## Lessons and Recommendations

**Replace shared remote access passwords with individual accounts protected by MFA.** This is the single highest-impact change for small water utilities. No shared password; no remote access without MFA. Commercial remote access tools support MFA; enabling it is a configuration change, not a significant cost.

**Implement remote access session logging and monitoring.** Every remote access session to a water treatment control system should be logged, including the source IP address, session duration, and any control changes made during the session. Anomalous sessions should trigger alerts.

**Segment remote access from operational control systems.** A jump server architecture that requires a separate authenticated connection to reach the control system from the remote access endpoint adds a layer of separation. This is achievable with basic firewall configuration.

**Engage with WaterISAC and participate in sector threat intelligence sharing.** Threat intelligence specific to the water sector, including known attacker techniques and recommended mitigations, is available through WaterISAC at no cost to utilities.

**Document and test secondary safety system responses to extreme control changes.** Confirm that the plant's secondary safety systems (pH sensors, alarms, automated shutoffs) would detect and respond to a grossly abnormal NaOH concentration before it reaches the distribution network. Document the response chain and test it.

---

## Assessment Framework for Water and Utilities Operators

The ITGC controls most directly implicated in this incident map to the following audit testing areas:

- Remote access authentication: MFA enforcement, shared credential elimination
- Remote access session logging and monitoring for OT systems
- Network segmentation between remote access pathways and operational control systems
- Asset inventory of internet-facing remote access software on OT systems
- Secondary safety system review and testing for extreme control change scenarios

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
