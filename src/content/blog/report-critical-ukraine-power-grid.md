---
title: "Critical Infrastructure Report: The Ukraine Power Grid Attack, the First Confirmed Cyberattack to Cut Electricity"
description: "On 23 December 2015, a coordinated cyberattack by the Sandworm group cut power to approximately 225,000 customers in western Ukraine. It was the first confirmed cyberattack to cause an electricity outage. This report examines the attack chain, the operational technology vulnerabilities it exploited, and what it established for the security of power grid infrastructure globally."
pubDate: 2026-08-25
heroImage: "/images/report-critical-ukraine-power-grid.svg"
category: "Digital Report"
industry: "Critical Infrastructure"
author: "Marco Cavani"
tags: ["Critical Infrastructure", "Ukraine", "Power Grid", "Sandworm", "ICS Security", "Incident Report"]
readTime: "11 min read"
---

## Executive Summary

On 23 December 2015, at approximately 3:30 PM local time, operators at three electricity distribution companies in western Ukraine lost control of their control systems. Breakers across the distribution network began opening. Power was cut to approximately 225,000 customers. Some control centres were also subjected to a telephone denial-of-service attack that flooded their customer service lines, preventing customers from reporting outages.

The outages lasted between 1 and 6 hours. Operators were able to restore power relatively quickly because they could operate the substation equipment manually, on site. However, several of the company's control systems were intentionally damaged to prevent remote operation: the uninterruptible power supplies at the control centres were wiped, SCADA (Supervisory Control and Data Acquisition) systems were rendered inoperable, and firmware on serial-to-ethernet converters was overwritten with corrupted firmware designed to prevent device operation.

This was the first attack in history to be confirmed as having caused an electricity outage through a cyberattack. It was attributed to Sandworm, a threat group assessed to be operating within the GRU, Russian military intelligence. Ukraine has been the target of multiple subsequent power grid attacks, including a December 2016 attack, and repeated cyberattacks during the Russian military invasion that began in 2022.

---

## Incident Overview

**Date:** 23 December 2015

**Organisations affected:** Three Ukrainian electricity distribution companies: Prykarpattyaoblenergo, Chernivtsioblenergo, and Kyivoblenergo

**Customers affected:** Approximately 225,000

**Outage duration:** 1 to 6 hours depending on location

**Attack type:** Multi-stage cyberattack including IT network compromise, SCADA manipulation, destructive payload deployment, and telephone denial-of-service

**Tools used:** BlackEnergy 3 malware (initial access), KillDisk destructive component, customised malware for SCADA interaction

**Attribution:** US government and cybersecurity research firms including iSIGHT Partners (now Mandiant) attributed the attack to Sandworm, assessed to be a GRU unit

**Subsequent attacks:** December 2016 Ukraine grid attack (Industroyer/Crashoverride malware); multiple grid attacks during 2022 Russian military invasion

---

## Technical Analysis: The Three-Phase Attack Chain

The Ukraine power grid attack was not a sudden event but the culmination of a multi-month operation. Researchers who analysed the attack identified three distinct phases.

**Phase 1: Initial compromise and reconnaissance (months before the attack)**

The attackers used spear-phishing emails sent to electricity company employees to deliver BlackEnergy 3 malware. BlackEnergy is a modular malware platform originally developed as a crimeware tool but repurposed and modified by Sandworm for targeted operations.

Over the months following the initial compromise, the attackers used their access to conduct extensive reconnaissance: mapping the electricity companies' network architecture, understanding the SCADA systems in use, identifying the specific substations and breakers that could be remotely operated, and staging their subsequent attack components.

**Phase 2: Simultaneous multi-target attack execution**

The attack was executed simultaneously across all three electricity companies and across multiple substations within each company. This coordination demonstrates significant operational planning: the attackers had pre-positioned their access across all three targets and their components were ready to be activated on a common trigger.

The attackers remotely operated the SCADA systems to open breakers at the targeted substations, using the legitimate remote access capabilities of the utilities' own control systems. This is a critical detail: the attackers did not need to deploy sophisticated ICS-specific exploit code to open the breakers. They used the legitimate remote control functionality of the SCADA systems, after establishing access to those systems through the IT network.

At the same time, a telephone denial-of-service tool flooded the utilities' customer service telephone lines, preventing customers from reaching the companies and preventing operators from being alerted by the pattern of customer reports.

**Phase 3: Destructive payload deployment to impede recovery**

After initiating the outages, the attackers deployed destructive payloads designed to impede recovery:

- KillDisk was used to wipe SCADA servers and workstations, destroying the control system software and configuration data
- Firmware on serial-to-ethernet converters was overwritten with corrupted firmware, rendering these devices inoperable and requiring hardware replacement
- Uninterruptible power supplies at control centres were wiped, cutting power to the control centre equipment itself

The intent of these destructive payloads was to prevent the utilities from resuming remote operation of their grids after the outages. The fact that operators could restore power relatively quickly was due to their ability to operate substations manually, on site. If the substations had not been operable manually, the outages could have lasted significantly longer.

---

## The IT to OT Pathway: How Corporate Networks Reach Control Systems

The Ukraine power grid attack exploited a pathway that exists in many industrial control system environments: the IT corporate network and the OT control system network were not fully separated. The attackers moved from the corporate IT network, where they initially compromised through phishing, to the OT network where the SCADA systems resided.

**How this pathway typically forms:**

Energy companies collect operational data from their control systems for billing, reporting, and operational analytics. This requires some form of data transfer between OT systems and IT systems. In many organisations, this data pathway is implemented in ways that create bidirectional connectivity between the IT and OT networks, even when the intent was to create only a unidirectional data flow from OT to IT.

**Why full air-gapping is difficult in practice:**

A fully air-gapped OT network, with no connectivity to the IT network, eliminates the IT-to-OT lateral movement pathway. However, a fully air-gapped network creates operational challenges: remote access for vendor support, software updates, and data collection all require either physical presence or a connection. The security benefits of air-gapping must be balanced against the operational requirement for some level of managed connectivity.

**The security architecture response:**

A data diode (a hardware device that enforces unidirectional data flow at the physical layer) can transfer data from OT to IT without creating a pathway from IT to OT. Firewalls and demilitarised zones (DMZ) between IT and OT networks, with strict rules that allow only specific data types to flow in each direction, approximate this separation at lower cost.

---

## ITGC Control Failures

**IT and OT Network Separation:** The most fundamental control failure was the connectivity between the corporate IT network (where the phishing compromise occurred) and the OT SCADA network (where the breakers could be operated). A data diode or strict firewall architecture that prevented lateral movement from IT to OT would have prevented the attackers from reaching the SCADA systems even after compromising the corporate network.

**Phishing-Resistant Authentication:** BlackEnergy 3 reached the electricity companies' corporate networks through spear-phishing. MFA, particularly phishing-resistant hardware tokens for accounts with access to OT-connected systems, would have reduced the value of the initial phishing compromise.

**SCADA Access Logging and Anomaly Detection:** The attackers remotely operated the SCADA systems to open breakers. SCADA access should be logged to an immutable central log store, and access from unexpected sources or at unexpected times should trigger alerts. The simultaneous breaker-opening events across multiple substations represent an anomalous pattern that SCADA monitoring should detect.

**Remote Access Controls for OT Systems:** The SCADA systems had remote access capability that the attackers used. Remote access to OT systems should require strong authentication, should be limited to specific authorised operators, and should be monitored. The use of remote access from an unrecognised or unexpected source should trigger real-time alerting.

**Incident Response and Recovery Planning for Grid Attacks:** The utilities' ability to restore power relatively quickly by operating substations manually was fortuitous: manual operation capability existed and staff were available. A power grid operator whose substations cannot be manually operated, or whose staff is not trained to do so, would have faced a longer outage. Recovery planning should specifically address manual operation procedures as a fallback for control system failure.

---

## The Escalation Pattern: From 2015 to the 2022 Invasion

The 2015 Ukraine power grid attack was not an isolated event but part of a pattern of escalating cyberattacks against Ukrainian infrastructure:

**December 2016:** A second attack using the Industroyer (also known as Crashoverride) malware targeted the Ukrenergo high-voltage transmission company, causing an outage in the Kyiv area. Industroyer represented a significant advancement over the 2015 attack: it included modules specifically designed to interact with industrial control system protocols (IEC 104, IEC 61850, and others), allowing it to operate ICS equipment directly rather than relying on the legitimate SCADA remote access functionality.

**2022:** During the Russian military invasion, Ukraine's power grid was subjected to multiple cyberattacks in coordination with missile and drone strikes targeting physical power infrastructure. The cyberattacks used both Industroyer 2.0 (a more advanced version of the 2016 malware) and wiper malware designed to maximise recovery time.

The escalation demonstrates that the 2015 attack was not an endpoint but a proof of concept. Each subsequent operation incorporated lessons from the previous one and introduced more sophisticated capabilities.

---

## Lessons and Recommendations

**Implement hardware data diodes or strict unidirectional gateways between IT and OT networks.** The fundamental architectural lesson from the 2015 Ukraine attack is that an IT-to-OT lateral movement pathway transforms a corporate phishing compromise into a potential grid attack. Data diodes enforce this separation at the physical layer.

**Require phishing-resistant MFA for all accounts with access to OT-connected systems.** Spear-phishing was the entry point for the 2015 attack. FIDO2 hardware security keys provide phishing-resistant authentication that cannot be bypassed by credential-harvesting phishing pages.

**Deploy anomaly detection specifically calibrated for SCADA environments.** SCADA environments have defined operational patterns: which operators access which systems, at which times, from which locations. Anomaly detection calibrated to these baselines can identify attacker use of legitimate SCADA functionality.

**Train operators on manual substation operation and rehearse it.** The Ukraine utilities' ability to restore power manually was the control that limited outage duration. Manual operation capability must be maintained through regular practice, not assumed from documentation.

**Conduct a tabletop exercise specifically modelling a simultaneous multi-substation cyberattack.** The specific scenario of simultaneous remote breaker-opening across multiple substations, combined with destruction of control system infrastructure, should be the basis for incident response exercises at power grid operators.

---

## Assessment Framework for Power Grid and Energy Distribution Operators

The ITGC controls most directly implicated in this incident map to the following audit testing areas:

- IT and OT network separation: data flow controls, data diode implementation, and pathway review
- Phishing-resistant MFA for OT-connected accounts and remote access
- SCADA access logging, anomaly detection, and alert configuration
- Remote access controls for operational technology systems
- Manual operation capability and rehearsal frequency for substations
- Incident response plan covering coordinated multi-site attack scenarios

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
