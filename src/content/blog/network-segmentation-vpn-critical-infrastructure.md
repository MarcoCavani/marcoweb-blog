---
title: "Network Segmentation and VPN for Critical Infrastructure"
description: "In critical infrastructure a network breach is not a data problem, it is a physical one. Here is why segmentation is the control that keeps a compromised laptop away from a turbine, and why the VPN meant to protect the network is so often the way in."
pubDate: 2026-07-30
category: "Cybersecurity"
author: "Marco Cavani"
tags: ["Critical Infrastructure", "Network Segmentation", "VPN", "OT Security", "IEC 62443", "Zero Trust", "ICS", "Cybersecurity"]
readTime: "8 min read"
---

When an attacker breaches an ordinary corporate network, the worst case is stolen data or a ransom. When an attacker breaches the network of a power station, a water utility or a pipeline, the worst case is a physical one: a pump that stops, a valve that opens, a safety system that lies about its own state. Critical infrastructure runs on **operational technology (OT)**, the industrial control systems that move electricity, water and fuel, and the consequences of a compromise are measured in outages and safety, not just records.

That difference reshapes how the network is defended. Two controls carry most of the weight, and they pull in opposite directions: **segmentation**, which keeps the network divided so a breach cannot spread, and the **VPN**, which deliberately opens a hole in the perimeter so people can get in to work. Getting both right is the difference between a contained incident and a headline.

---

## Why a flat network is unacceptable here

Every network benefits from segmentation, but in critical infrastructure a flat network is a genuine hazard. The classic failure is a compromise that begins in the corporate IT network, a phished laptop, a malicious email, and then moves laterally, unopposed, into the OT network that controls physical processes. If there is nothing between the two, an ordinary office breach becomes a threat to the plant.

The **IT and OT worlds are also fundamentally different**, which makes the bridge between them the most dangerous place on the network. IT prizes confidentiality and patches constantly; OT prizes **availability and safety** above all, runs decades-old equipment that cannot be patched or rebooted at will, and often speaks industrial protocols with no authentication. Connecting these worlds without strict control means exposing fragile, unauthenticated systems to the full noise and hostility of the corporate network and the internet beyond it.

> In critical infrastructure a network breach is not a data problem, it is a physical one. Segmentation is what keeps a compromised laptop from ever reaching a turbine.

---

## Segmentation: zones, conduits and the IT/OT boundary

The reference model for industrial segmentation is the **Purdue model** (derived from ISA-95), which arranges a plant into levels, from the physical process and its controllers at the bottom, through supervisory control, up to site operations and the enterprise IT network at the top. The security principle built on it, formalised in the **IEC 62443** standards, is to divide the environment into **zones** of similar trust and to control every path between them, the **conduits** (IEC, 2018).

In practice this means several things:

- **A hardened IT/OT boundary.** The junction between the corporate network and the control network is not a single firewall but a controlled boundary, often an **industrial DMZ**, so that no system in IT talks directly to a controller. Data that must cross, historian records, for instance, passes through brokered, inspected paths rather than open ports.
- **Zones by function and criticality.** Safety systems are separated from control systems, which are separated from supervisory systems, so a compromise in one does not cascade.
- **Unidirectional gateways where it counts.** For the most critical flows, a data diode physically permits information to leave the OT network (for monitoring) while making it impossible for anything to come back in.

The goal throughout is the containment principle in its most literal form: an attacker who gains a foothold should find walls, not open plains. If the network is segmented properly, the phished laptop hits the IT/OT boundary and stops.

---

## The VPN: the door you opened on purpose

Critical infrastructure cannot be a sealed box. Vendors need to service equipment, engineers need to respond out of hours, and operations are increasingly remote. The **VPN** is the usual answer: an encrypted tunnel that lets an authorised person reach the network from outside. It is a necessary tool, and it is also, repeatedly, the way attackers get in.

The reason is simple. A VPN authenticates someone and then places them **inside** the network. If that authentication is weak, or the account is over-privileged, or the VPN drops the user straight into a flat OT network, then a stolen credential is not a nuisance, it is a master key. The 2021 Colonial Pipeline ransomware attack, which shut down a major fuel pipeline, was traced to a single compromised VPN account that had no multi-factor authentication (CISA, 2021). One password, one missing control, one pipeline offline.

So the VPN must be wrapped in controls that assume it will eventually be attacked:

- **Multi-factor authentication, without exception.** A remote-access path protected by a password alone is the Colonial Pipeline failure waiting to repeat.
- **Least privilege and narrow landing zones.** Remote users should arrive in a tightly scoped segment, ideally via a monitored **jump host** in the IT/OT DMZ, not directly onto the control network.
- **Just-in-time vendor access.** Third-party access is granted for the task and the window, then revoked, never left standing.
- **Session logging and monitoring.** Remote sessions into OT are recorded and watched, because this is exactly where a compromise would show itself.

A VPN with MFA, least privilege and monitoring is a controlled door. A VPN without them is a hole with a lock that any stolen key opens.

---

## Zero trust, adapted for OT

The modern direction of travel is **zero trust**: never trust a user or device because of where it sits on the network, and verify every request on its own merits. In critical infrastructure the principle is sound, being inside the network should confer nothing, but it must be applied with OT's constraints in mind. Legacy controllers cannot run agents or modern authentication, and availability cannot be sacrificed for a security check. So zero trust in OT tends to live at the boundaries and access paths, strong verification of every remote session, micro-segmentation around critical assets, rather than in the deep process layer where the equipment simply cannot support it.

---

## What an auditor actually tests

For anyone assessing the security of a critical-infrastructure network, the review turns on evidence, not diagrams:

- **Segmentation as built, not as drawn.** Confirm the IT/OT boundary exists in the live configuration, not just on a slide, by examining firewall rules and traffic flows against the intended zones. Undocumented paths across the boundary are the finding.
- **Remote access reality.** Review who can reach OT via VPN, whether MFA is enforced for every one of them, how vendor access is granted and revoked, and whether sessions are logged and reviewed.
- **The rule base.** Segmentation firewalls accrete "temporary" allow rules; a rule set no one can justify has drifted from its purpose and needs recertifying, exactly as user access does.
- **Monitoring.** Confirm that someone actually watches the boundary and the remote sessions, because detection nobody acts on is no detection at all.

---

## Conclusion

In critical infrastructure the network is where a digital attack becomes a physical event, and two controls decide how far it gets. Segmentation, done as IEC 62443 intends with a hardened IT/OT boundary and zones that contain a breach, keeps a compromise from spreading to the equipment that matters. The VPN, secured with MFA, least privilege and monitoring, lets the right people in without handing attackers the master key that took a pipeline offline. Draw the zones properly, treat every remote-access path as a target, and verify it is all true in the running configuration rather than the documentation, and a corporate-network incident stays a corporate-network incident, which, when the alternative is a turbine, is the whole point.

---

## References

- CISA. (2021). *DarkSide Ransomware: Best Practices for Preventing Business Disruption from Ransomware Attacks* (AA21-131A). Cybersecurity and Infrastructure Security Agency.
- IEC. (2018). *IEC 62443: Security for Industrial Automation and Control Systems*. International Electrotechnical Commission.
- ISA. (1995). *ANSI/ISA-95 Enterprise-Control System Integration (the Purdue Model)*. International Society of Automation.
- NIST. (2023). *Guide to Operational Technology (OT) Security* (SP 800-82 Rev. 3). National Institute of Standards and Technology.
