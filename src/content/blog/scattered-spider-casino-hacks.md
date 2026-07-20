---
title: "Scattered Spider: The Casino Hacks"
description: "In 2023, a hacking group known as Scattered Spider or UNC3944 made headlines for its sophisticated cyberattacks on two of the largest casino companies in the United States: Caesars Entertainment and MGM Resorts International."
pubDate: 2024-09-03
updatedDate: 2024-09-14
heroImage: "/images/scattered-spider-cover.svg"
category: "Digital Report"
industry: "Gaming & iGaming"
author: "Marco Cavani"
tags: ["Cybersecurity", "Ransomware", "Social Engineering", "Threat Intelligence", "Casino Security"]
readTime: "14 min read"
---

## Summary

In 2023, a hacking group known as Scattered Spider or UNC3944 made headlines for its sophisticated cyberattacks on two of the largest financial companies operating in the casino and gambling industry in the United States: Caesars Entertainment and MGM Resorts International.

This report delves into the modus operandi of Scattered Spider, their methods, and the implications of their actions, analysing the threat posed by the hacking group for large enterprises operating in the entertainment and the hospitality industry in Australia, the United States, Europe & India.

The report is based primarily on the exploration conducted by the Federal Bureau of Investigation (FBI) and Cybersecurity & Infrastructure Security Agency (CISA) on Scattered Spider activity as far as November 2023.

---

## Scatter Spider Background Information

**Country of origin:** Undefined

**Affiliation:** Scattered Spiders shares their tactics and techniques with various cyber criminal groups such as Octo Tempest, Roasted Okctapus and Storm-0875 and they have been working closely with the BlackCat ransomware gang in the 2023 MGM Resorts incident.

**Targeted countries:** US, Europe, Australia, and India

**Targeted Industries:** Finance, Healthcare, Technology, Government, Energy, and Retail

*(MITRE ATT&CK® – Scattered Spiders, n.d.)*

---

## Capability

Scattered Spiders are a sophisticated hacking group composed of well-trained, young, and native English speakers (Brewer, 2023).

These cybercriminals possess expertise in several areas, including:

- Phishing and social engineering
- Credential theft and abuse
- Living off the Land (LotL) techniques
- Data exfiltration and impact
- Evasion techniques

Initially, they specialized in smishing (SMS phishing), SIM swapping, and social engineering attacks. However, they have recently expanded their operations to include data encryption ransomware, further increasing the threat they pose.

Another concerning aspect of Scattered Spiders is their potential for escalation to physical violence. In previous campaigns, they have used life-threatening messages to intimidate their victims purposely to gain targeted credentials.

Additionally, this group has demonstrated a capability for advanced persistent threats (APT), posing significant risks to their targets, which can include high-profile organizations and critical infrastructure (Microsoft Incident Response, Microsoft Threat Intelligence, 2023).

---

## Intents

Scattered Spider targets valuable data in cloud enterprise environments through traditional and hybrid attacks. Their ransomware strategy involves:

1. Encrypting systems to disrupt operations
2. Exfiltrating data for extortion
3. Demanding payment, threatening to release or misuse the stolen data if not compensated

They are therefore **financially motivated**.

*(Mandiant, 2023)*

---

## Modus Operandi

Mandiant, a cybersecurity entity and subsidiary of Google, has observed a rise in attack frequency and a greater potential for impact among the Scattered Spider and its affiliates in the past few years.

Typically, Scattered Spiders gain initial access to their targets using **SMS spear phishing** and impersonating the victim administrator.

After obtaining initial access, they perform a **SIM swap** to bypass Multi-Factor Authentication (MFA), thereby authenticating themselves as legitimate users on the victim environment using the stolen token.

Once granted access, the unauthorized user gains global privileges, enabling information harvesting using **Azure diagnostic extensions**.

The Scattered Spiders do not rely on traditional malware attacks that use signature files. Instead, they have been observed using **Living Off the Land (LOTL) attacks**, which are fileless. This means that LOTL attacks do not require the attacker to install any code or scripts within the target system. Instead, the attacker uses tools that are already present in the environment. For example, the hacking group used the Azure diagnostic extension for information-gathering purposes.

Once the adversary manipulates the environment, they might install a **remote access tool** to create a covert tunnel for entry. This allows them to avoid detection by the endpoint security system and remain unnoticed on the network. Through this hidden access, they can potentially exfiltrate and/or encrypt data, remaining completely covered throughout the process.

---

## Activity Summary

Between June 2023 and November 2023, Scattered Spider conducted numerous high-impact attacks targeting large enterprises, with a particular focus on the hospitality, entertainment, and gaming sectors. Their campaign during this period is characterised by:

- **Escalating sophistication**: Early attacks focused on credential theft; later attacks incorporated full ransomware deployment in partnership with BlackCat/ALPHV
- **High-value targeting**: Organisations with large customer databases, loyalty programs, and significant online infrastructure
- **Speed of execution**: Attackers moved from initial access to ransomware deployment in hours, not days
- **Cross-sector impact**: Disruptions extended beyond direct targets to third-party vendors, payment processors, and reservation systems

The FBI and CISA jointly published a Cybersecurity Advisory (CSA) in November 2023 outlining the group's indicators of compromise (IOCs) and recommended mitigations following the surge in attack activity.

---

## Adversary Tactics & Techniques

The following table maps Scattered Spider's known tactics to the MITRE ATT&CK® framework:

| Tactic | Technique ID | Description |
|--------|-------------|-------------|
| Initial Access | T1566.002 | Phishing: Spearphishing via SMS |
| Initial Access | T1078 | Valid Accounts |
| Initial Access | T1621 | MFA Request Generation (Fatigue) |
| Execution | T1059.001 | PowerShell |
| Execution | T1059.003 | Windows Command Shell |
| Persistence | T1098.001 | Account Manipulation: Additional Cloud Credentials |
| Persistence | T1136 | Create Account |
| Defense Evasion | T1562.001 | Impair Defenses: Disable or Modify Tools |
| Defense Evasion | T1036 | Masquerading |
| Credential Access | T1110 | Brute Force |
| Credential Access | T1606 | Forge Web Credentials |
| Discovery | T1087 | Account Discovery |
| Discovery | T1082 | System Information Discovery |
| Discovery | T1135 | Network Share Discovery |
| Lateral Movement | T1550.001 | Application Access Token |
| Exfiltration | T1567 | Exfiltration Over Web Service |
| Exfiltration | T1041 | Exfiltration Over C2 Channel |
| Impact | T1486 | Data Encrypted for Impact (Ransomware) |
| Impact | T1490 | Inhibit System Recovery |

*(FBI & CISA Cybersecurity Advisory, 2023)*

---

## Tooling

Scattered Spider has been observed leveraging both legitimate and malicious tooling to carry out their attacks:

**Remote Access & Tunnelling:**
- **Ngrok** – A tunnelling tool used to create encrypted tunnels that bypass network security controls and provide persistent backdoor access
- **Fleetdeck.io** – A legitimate remote monitoring and management (RMM) tool repurposed for persistent access
- **AnyDesk** – Legitimate remote desktop software used to maintain access while evading endpoint detection

**Credential Access:**
- **Mimikatz** – A widely used post-exploitation tool for credential dumping from Windows systems
- **Oktapus phishing kit** – A purpose-built kit designed to harvest Okta single sign-on credentials via convincing phishing pages

**Persistence & Lateral Movement:**
- **Cobalt Strike** – A commercial adversarial simulation tool commonly used for command and control (C2) operations
- **Azure Diagnostic Extensions** – Legitimate cloud tooling repurposed for environment reconnaissance and data gathering

---

## Malware Used

**BlackCat / ALPHV Ransomware**

BlackCat, also known as ALPHV, is a sophisticated ransomware-as-a-service (RaaS) operation. Written in Rust, it is highly customisable and capable of targeting both Windows and Linux environments, including VMware ESXi hypervisors.

Key characteristics:
- Encrypts both local and network-mapped drives
- Exfiltrates data prior to encryption for double extortion
- Provides a dark web victim portal for ransom negotiation
- Capable of deleting volume shadow copies to prevent recovery

Scattered Spider acted as an affiliate of the BlackCat RaaS program, deploying the ransomware after establishing persistent access in victim environments.

---

## Domains Used by Scattered Spiders

Scattered Spider has been observed registering typosquatted domains impersonating legitimate corporate identity providers and IT services. Common patterns include:

- `okta-sso-[company].com` – Impersonating Okta SSO portals
- `sso-[company]-helpdesk.com` – Fake help desk portals to harvest credentials
- `[company]-it-support.com` – Impersonating corporate IT support portals
- `[company]-okta-portal.com` – Spoofed authentication pages

These domains are used to host phishing pages that closely replicate the target company's internal authentication systems. Employees directed to these pages unknowingly provide their credentials and MFA tokens to the attackers.

---

## Full Report Available on Request

This post is a summary of the full **Scattered Spider: The Casino Hacks** digital report, which includes:

- Complete threat actor profile and TTP breakdown (MITRE ATT&CK mapped)
- Detailed timeline of both the Caesars Entertainment and MGM Resorts incidents
- Full kill chain analysis with evidence from FBI/CISA advisories
- Strategic recommendations for large enterprises in hospitality and entertainment
- Applicability assessment for Australian organisations

**To request the full report, contact me directly:**

📧 [marco@marcoweb.org](mailto:marco@marcoweb.org?subject=Request%3A%20Scattered%20Spider%20Full%20Report&body=Hi%20Marco%2C%0A%0AI%20would%20like%20to%20request%20a%20copy%20of%20the%20full%20Scattered%20Spider%3A%20The%20Casino%20Hacks%20report.%0A%0AName%3A%20%0AOrganisation%3A%20%0APurpose%3A%20)

*(FBI & CISA, 2023)*

---

## The Casino Hacks

### Case 1: MGM Resorts International

**Date of Attack:** September 2023

**Attack Vector:** Social engineering via LinkedIn reconnaissance followed by a telephone call to the MGM IT help desk

**Execution:**

The attack on MGM Resorts International is widely regarded as one of the most impactful social engineering attacks in recent history. The initial breach required nothing more than a 10-minute phone call.

The attackers identified an MGM employee through LinkedIn and called the MGM IT help desk, impersonating that employee to request a Multi-Factor Authentication reset. The help desk, following standard IT procedures without adequate identity verification, complied. This gave Scattered Spider a foothold in MGM's Okta environment.

From there, they escalated privileges to Okta super-administrator level, granting access to MGM's broader IT infrastructure. The attackers then deployed BlackCat/ALPHV ransomware across MGM's systems, encrypting critical servers and exfiltrating significant volumes of customer data.

**Impact:**
- Slot machines across multiple Las Vegas properties went offline
- ATMs and credit card processors ceased functioning
- Hotel room digital keys stopped working
- Restaurant point-of-sale systems failed
- Online booking and reservation systems were taken down
- Loyalty program data for approximately 6 million customers was compromised, including names, addresses, phone numbers, email addresses, dates of birth, driver's licence numbers, passport numbers, and Social Security numbers for some customers
- MGM's shares fell approximately 6% in the days following the attack
- MGM reported losses of approximately USD $100 million in Q3 2023 as a direct result of the cyberattack
- System disruptions persisted for over 10 days

**MGM's Response:** MGM Resorts International chose **not to pay** the ransom, instead engaging cybersecurity incident response teams to remediate the attack. MGM disclosed the attack publicly and notified affected customers.

---

### Case 2: Caesars Entertainment

**Date of Attack:** August 2023

**Attack Vector:** Social engineering targeting a third-party IT support vendor contracted by Caesars Entertainment

**Execution:**

In the weeks prior to the MGM attack, Scattered Spider successfully breached Caesars Entertainment using a similar social engineering playbook. Rather than targeting Caesars' internal help desk directly, the attackers targeted an external IT support contractor who had access to Caesars' systems.

By compromising a third-party vendor, the attackers gained entry to Caesars' environment, subsequently accessing the company's loyalty program database. This database contained the personal information of a significant portion of Caesars' customer base.

**Impact:**
- Customer data from the Caesars Rewards loyalty program was exfiltrated
- Stolen data included driver's licence numbers and Social Security numbers for a large proportion of members
- Unlike MGM, Caesars did not suffer significant operational disruption

**Caesars' Response:** Caesars Entertainment opted to **pay approximately USD $15 million** in ransom, reportedly half of the USD $30 million initially demanded. The payment allowed Caesars to obtain assurances that the stolen data would be deleted, though the verifiability of such assurances in ransomware scenarios is inherently limited. Caesars disclosed the breach in an SEC filing in September 2023.

---

## Recommendations

Based on the analysis of Scattered Spider's tactics and the case studies above, the following recommendations are provided for organisations in the hospitality, entertainment, and critical infrastructure sectors:

**1. Implement Phishing-Resistant MFA**

Replace SMS-based and voice call MFA with phishing-resistant alternatives such as FIDO2 hardware security keys (e.g., YubiKey) or passkeys. These cannot be intercepted via SIM swapping or real-time phishing.

**2. Establish Rigorous Identity Verification for Help Desk Requests**

Introduce mandatory callback verification and manager approval workflows for any MFA reset, password change, or privilege escalation request. Help desk staff should never complete these requests based solely on a phone call or unverified identity.

**3. Adopt Zero Trust Architecture**

Implement a Zero Trust security model that requires continuous verification of all users and devices, regardless of network location. Assume breach and limit the blast radius of any successful intrusion through network micro-segmentation.

**4. Monitor for MFA Fatigue Indicators**

Deploy tooling to detect and alert on unusual MFA push notification patterns, which are indicative of MFA fatigue attacks. Block accounts automatically after a configurable number of unexpected MFA requests within a short period.

**5. Third-Party Vendor Risk Management**

Conduct thorough security assessments of all third-party vendors with access to internal systems. Implement least-privilege access controls for vendors and require them to meet your organisation's security standards.

**6. Security Awareness Training**

Run targeted security awareness training focused on social engineering recognition for all staff, with particular emphasis on IT help desk personnel, system administrators, and anyone with privileged account management capabilities.

**7. Network Segmentation and Least Privilege**

Limit lateral movement opportunities by segmenting networks and applying the principle of least privilege to all user and service accounts. High-value systems (e.g., payment processing, loyalty program databases) should be isolated in separate network segments.

**8. Incident Response Planning**

Develop and regularly test an incident response plan that accounts for ransomware scenarios, including communication protocols, recovery procedures, and decision frameworks for ransom payment decisions.

---

## References

Brewer, R. (2023). *Scattered Spider: Inside the Hacking Group Terrorising US Companies*. Wired.

FBI & CISA. (2023, November 16). *Cybersecurity Advisory: Scattered Spider*. Cybersecurity & Infrastructure Security Agency.

Mandiant. (2023). *UNC3944: SMS Phishing and SIM Swapping Lead to Cloud Intrusions and Ransomware*. Mandiant Threat Intelligence.

Microsoft Incident Response & Microsoft Threat Intelligence. (2023). *Octo Tempest crosses boundaries to facilitate extortion, encryption, and destruction*. Microsoft Security Blog.

MITRE ATT&CK®. (n.d.). *Scattered Spider, G1015*. MITRE ATT&CK.

MGM Resorts International. (2023). *SEC 8-K Filing: Material Cybersecurity Incident*.

Caesars Entertainment. (2023). *SEC 8-K Filing: Cybersecurity Incident*.
