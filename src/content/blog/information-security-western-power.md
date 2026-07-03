---
title: "Information Security Analysis for Western Power"
description: "A comprehensive assessment and strategic roadmap for Western Power, addressing key challenges in cybersecurity, insider threats, and climate change resilience for one of Australia's largest electricity distributors."
pubDate: 2024-02-20
updatedDate: 2024-09-03
heroImage: "https://marcoweb.org/wp-content/uploads/2024/02/wpCover.jpg"
category: "Digital Report"
author: "Marco Cavani"
tags: ["Cybersecurity", "Critical Infrastructure", "Information Security", "Australia", "Energy Sector"]
readTime: "25 min read"
---

## Executive Summary

This document presents a comprehensive assessment and strategic roadmap for Western Power, addressing key challenges and enhancing resilience in the face of evolving threats. It commences with an exploration of the company's background, providing insights into its history, mission, and operational framework.

A central aspect of this analysis is the examination of Western Power's stakeholders. Through meticulous identification and analysis, we uncover key influencers and stakeholders with varying levels of interest in the company's operations. The Power & Interest Grid offers a visual representation of stakeholder dynamics, guiding strategic engagement efforts.

Furthermore, the examination extends to information management, where we evaluate Western Power's data assets, information flow, and prioritization practices to ensure effective leverage of information assets for informed decision-making.

In response to prevailing threats, including cyberattacks, insider risks, and climate change impacts, we underscore the critical importance of information security. By explaining the connection between robust cybersecurity measures and organisational resilience, we aim to equip Western Power to fortify its defences against emerging threats.

Moreover, a series of strategic recommendations are designed to reinforce Western Power's operational framework and enhance its resilience. These recommendations encompass cybersecurity governance, insider threat mitigation, access control enhancement, environmental risk management, and resilience enhancement.

The document investigates specific threats faced by Western Power, including cyberattacks, insider threats, and climate change impacts. It highlights the evolving nature of these threats and the necessity for proactive measures to safeguard critical infrastructure.

Importantly, it underscores the significance of information security for Western Power, emphasising the potential consequences of disruptions to information systems. Given the critical role of information systems in power grid stability, the document stresses the need for robust risk mitigation measures to prevent widespread outages and ensure uninterrupted service delivery.

In conclusion, this document serves as a strategic guide for Western Power, providing insights, recommendations, and actionable steps to navigate challenges, enhance resilience, and safeguard critical infrastructure operations. Through proactive measures and strategic investments, Western Power is well-positioned to address emerging threats and uphold its commitment to reliable service delivery.

---

## Company Background and Stakeholders Analysis

### Company Background Information

Western Power is a state-owned enterprise that operates in Western Australia (WA). Established in 2006 under the Electricity Corporation Act 2005 (Government of Western Australia, 2005). As a government-owned enterprise, Western Power is accountable to the State Government of WA and operates under the supervision of the Minister for Energy (Western Power, 2022).

Western Power has a structured organisation consisting of seven distinct business units. Each of these units is led by an Executive Manager and is further composed of several Heads of Function. These roles collectively operate under the overarching leadership of the Chief Executive (Western Power, 2022).

Western Power is responsible for constructing, up-keeping, and overseeing the electrical infrastructure in the Southwest Interconnect System (SWIS) area that covers a range of approximately 255,000 square kilometres, reaching from Perth to Albany in the south, Kalgoorlie in the east, and Kalbarri in the north — making Western Power the principal licenced distributor in the state (Australian Energy Council, 2018).

Their main goal is to ensure the proper functioning of their distribution network to supply energy continuously to well over 2 million customers, which are heavily relying on their operations and success (Western Power, 2023).

---

### Western Power Stakeholders Analysis

Western Power engages with a diverse array of stakeholders, each with distinct interests and expectations (Western Power, 2022, p. 11). An analysis of these stakeholders can reveal their significance and influence on Western Power's operations and decisions (Smith, 2000).

#### Identification

The **Minister for Energy**, serving as Western Power's exclusive owner and shareholder, maintains control over the organisation (Western Power, 2022, p. 88). Simultaneously, **customers** hold a central position in Western Power's operations. Residential, commercial, and industrial consumers rely on a continuous and reliable electricity supply. Their feedback and demands influence service quality, rates, and energy efficiency initiatives (Deloitte, 2016, p. 8).

Likewise, the **communities** served by Western Power possess a vested interest in uninterrupted electricity supply. Community sentiment, expectations regarding sustainable energy practices, and concerns about infrastructure impact collectively shape the company's relationship with the public (Western Power, 2022, p. 7).

Conversely, **mining companies, manufacturers, and businesses** emerge as critical stakeholders. Their dependence on an uninterrupted power supply drives their collaboration with Western Power to ensure operational continuity and competitiveness (Western Power, 2022, p. 7). In fact, Western Power could decide to source energy to critical entities such as The Water Corporation directly.

Moreover, Western Power's **workforce** plays a fundamental role in its day-to-day operations. Additionally, hospitals, transportation systems, and emergency services rely on reliable power supply. Western Power's responsibility for fulfilling the energy needs of **critical infrastructure** profoundly impacts public safety and the provision of essential services.

Furthermore, **equipment, technology, and service suppliers** contribute significantly to Western Power's operations. Effective partnerships with suppliers and contractors considerably influence service reliability and innovation (Western Power, 2021).

Additionally, **stakeholders focused on environmental sustainability** advocate for responsible energy practices and the integration of renewable energy sources. Their perspectives wield influence over Western Power's endeavours to balance energy needs with environmental considerations (Western Power, 2018).

#### Analysis

The table below shows the list of Western Power stakeholders along with the relative values based on their given level of influence (power) and interest in the company. Each stakeholder is assigned a score on a scale from 1 to 4 for both power and interest, where 1 indicates the lowest level and 4 indicates the highest level:

| Stakeholder | Power (1–4) | Interest (1–4) | Engagement Strategy |
|-------------|-------------|----------------|---------------------|
| Minister for Energy | 4 | 4 | Manage closely |
| Customers (Residential & Industrial) | 3 | 4 | Keep satisfied |
| Mining & Industrial Companies | 3 | 3 | Keep satisfied |
| Suppliers & Contractors | 3 | 2 | Keep informed |
| Communities | 2 | 3 | Keep informed |
| Workforce / Employees | 2 | 4 | Keep informed |
| Critical Infrastructure (hospitals, transport) | 2 | 4 | Keep informed |
| Environmental Advocacy Groups | 2 | 3 | Monitor |
| General Public | 1 | 2 | Monitor |

#### Power & Interest Grid

The Power & Interest Grid categorises stakeholders into four quadrants:

- **Manage Closely (High Power / High Interest):** Minister for Energy — primary decision-maker with full oversight
- **Keep Satisfied (High Power / Low Interest):** Suppliers, industrial customers — critical for operations, engaged on specific issues
- **Keep Informed (Low Power / High Interest):** Workforce, communities, critical infrastructure — directly affected, require regular communication
- **Monitor (Low Power / Low Interest):** General public, environmental groups — secondary stakeholders requiring periodic engagement

#### Summary

The stakeholder analysis reveals that Western Power operates within a complex ecosystem of interdependencies. The Minister for Energy, as sole shareholder, exercises ultimate governance authority. However, the operational continuity of the organisation depends critically on the satisfaction of customers, the reliability of suppliers, and the safety of the communities it serves. This creates a governance environment in which information security is not merely a technical concern but a strategic imperative.

---

## Information Analysis

### Information Held by Western Power

Western Power manages a broad and sensitive portfolio of information assets. These can be categorised into four primary domains:

**Operational Technology (OT) Data:**
- SCADA (Supervisory Control and Data Acquisition) system data governing power grid operations
- Distribution Management System (DMS) data
- Real-time network telemetry from substations, transformers, and switching equipment
- Smart meter data from residential and commercial customers

**Customer Information:**
- Customer personal information (names, addresses, contact details)
- Energy consumption data and billing records
- Payment information
- Contractual agreements and service records

**Corporate Information:**
- Financial records and reporting
- Human resources and employee data
- Strategic plans and procurement information
- Contracts with third-party vendors and government agencies

**Regulatory and Compliance Information:**
- Licence documentation under the Electricity Corporations Act 2005
- Compliance reports submitted to the Economic Regulation Authority (ERA)
- Environmental and safety compliance records

### Information Flow

Information flows within Western Power can be characterised along two primary axes:

**Operational Information Flow:** Real-time data from the SWIS grid flows from field devices through SCADA systems to the Energy Management System (EMS), enabling centralized monitoring and control. This operational technology (OT) environment must be isolated from the corporate IT network to prevent lateral movement in the event of a cyberattack.

**Corporate Information Flow:** Business data flows from field operations through enterprise resource planning (ERP) systems to executive reporting, regulatory submissions, and external stakeholders. This includes customer billing, asset management records, and financial reporting to the WA Government.

### Information Prioritisation

Information assets are prioritised based on three factors:

1. **Criticality to Operations:** SCADA and grid control data are the most critical — their compromise or disruption could directly affect power supply to 2 million customers
2. **Regulatory Obligation:** Customer personal information and regulatory compliance records carry significant legal obligations under the Privacy Act 1988 and sector-specific regulations
3. **Commercial Sensitivity:** Financial forecasts, procurement strategies, and vendor contracts carry commercial sensitivity that could be exploited by competitors or bad actors

---

## Threat Analysis and Recommendations

### Threat 1 – Cyberattacks

**Description:** Western Power, as a critical infrastructure operator, represents a high-value target for both nation-state threat actors and financially motivated cybercriminals. The potential consequences of a successful cyberattack extend far beyond Western Power itself — a disruption to the SWIS power grid could affect hospitals, water treatment facilities, transport networks, and millions of Western Australian residents.

**Key Attack Vectors:**

*Ransomware:* Ransomware gangs increasingly target critical infrastructure. A successful ransomware deployment targeting Western Power's corporate IT systems could encrypt billing systems, customer records, and operational databases, causing service disruption and significant financial losses.

*OT/SCADA Intrusion:* The most severe scenario involves adversaries breaching the operational technology environment. Malware such as Industroyer (used against Ukrainian power infrastructure in 2016) demonstrates that threat actors have the capability to interfere with industrial control systems, potentially causing physical damage to grid equipment or triggering widespread outages.

*Phishing and Social Engineering:* As demonstrated by the Scattered Spider attacks on MGM and Caesars, social engineering remains highly effective. Employees with access to sensitive systems may be targeted through spear-phishing emails, SMS phishing, or voice phishing (vishing) attacks designed to harvest credentials.

**Risk Level:** High — the combination of high-value target profile, expanding digital attack surface (smart meters, cloud integration), and potential for cascading societal impact places this threat at the highest priority tier.

---

### Threat 2 – Insiders

**Description:** Insider threats — whether malicious, negligent, or compromised — represent a persistent and difficult-to-detect risk for any large organisation. Western Power's distributed workforce, including contractors and third-party vendors with system access, amplifies this risk.

**Categories of Insider Threat:**

*Malicious Insiders:* Employees or contractors who deliberately misuse their access for financial gain, sabotage, or espionage. This includes individuals who may be recruited by external threat actors or who act on personal grievances.

*Negligent Insiders:* Staff who inadvertently create security risks through careless behaviour — such as falling victim to phishing attacks, using weak passwords, sharing credentials, or connecting unauthorised devices to corporate networks.

*Compromised Insiders:* Legitimate employees whose credentials have been stolen by external attackers, who then operate within the organisation under the guise of a trusted identity.

**Risk Indicators:**
- Unusual system access outside of business hours
- Large file downloads or data transfers to external media
- Repeated failed login attempts followed by successful access
- Accessing systems or data outside the scope of normal role requirements

**Risk Level:** Medium-High — difficult to detect, can bypass perimeter controls, and may have access to both IT and OT environments.

---

### Threat 3 – Climate Change

**Description:** Western Australia is increasingly exposed to the impacts of climate change, including extreme heat events, bushfires, severe storms, and flooding. As the operator of critical electrical infrastructure across 255,000 km², Western Power faces significant physical risks to its assets and operational continuity.

**Climate-Related Security Risks:**

*Physical Infrastructure Damage:* Extreme weather events can damage transmission towers, substations, and distribution lines, causing outages that cannot be rapidly remediated. The January 2022 storm event in Perth caused widespread outages affecting hundreds of thousands of customers.

*Increased Demand Spikes:* Prolonged heatwaves drive extreme peak demand events, stressing the grid and increasing the risk of cascading failures. This creates pressure on control systems and may expose vulnerabilities when systems operate at or near capacity.

*Indirect Cyber Risk:* Emergency response and recovery periods create windows of elevated cybersecurity risk. Staff focus on restoration rather than security monitoring, incident response procedures may be deprioritised, and emergency remote access may be extended without adequate security controls.

*Supply Chain Disruption:* Climate-related disruptions to supply chains can affect the availability of critical spare parts and equipment, extending recovery times following physical infrastructure damage.

**Risk Level:** Medium and growing — climate risk intersects with cybersecurity and operational risk in ways that require integrated planning.

---

## Importance of Information Security

Information security is not a peripheral concern for Western Power — it is foundational to the organisation's ability to fulfil its core mission of reliable energy delivery.

The consequences of information security failures for Western Power are uniquely severe:

**Operational Continuity:** Disruption to SCADA or energy management systems can directly cause power outages affecting millions of customers. Unlike a retail data breach, a grid disruption has immediate and potentially life-threatening consequences for hospitals, emergency services, and vulnerable residents dependent on electrically powered medical equipment.

**Regulatory Compliance:** Western Power operates under a complex regulatory framework. Failure to protect customer data creates exposure under the Privacy Act 1988, while failures in OT security may attract scrutiny from the Australian Energy Market Operator (AEMO) and the Australian Cyber Security Centre (ACSC).

**National Security Implications:** Critical infrastructure attacks are increasingly viewed as acts of geopolitical aggression. The Australian Government's Security of Critical Infrastructure Act 2018 (amended 2021 and 2022) imposes specific obligations on electricity sector operators, including mandatory incident reporting and risk management program requirements.

**Reputational and Financial Impact:** A major cybersecurity incident would significantly damage public trust in Western Power's ability to fulfil its obligations, creating political and financial consequences for the state-owned enterprise and its government shareholder.

---

## Recommendations

### Recommendation 1 – Strengthen Cybersecurity Governance

**Objective:** Establish a robust governance framework that embeds cybersecurity at the board and executive level.

**Actions:**
- Appoint or empower a Chief Information Security Officer (CISO) with direct board reporting lines
- Establish a Cybersecurity Risk Committee at board level to provide oversight of cyber risk appetite and major security investments
- Align Western Power's cybersecurity program with the Australian Cyber Security Centre (ACSC) Essential Eight maturity model, targeting Maturity Level 2 as a minimum
- Implement mandatory cybersecurity training and awareness programs for all staff, with role-specific modules for OT operators, IT administrators, and executive leadership
- Conduct annual third-party cybersecurity risk assessments and penetration tests

**Expected Outcome:** Improved board-level visibility of cyber risk, clearer accountability, and a structured framework for continuous improvement of security controls.

---

### Recommendation 2 – Mitigation of Insider Threats

**Objective:** Reduce the risk of both malicious and negligent insider activity through a combination of technical controls and cultural measures.

**Actions:**
- Implement a User and Entity Behaviour Analytics (UEBA) platform to detect anomalous user activity patterns
- Establish a formal off-boarding procedure that immediately revokes system access upon employee or contractor departure
- Implement Data Loss Prevention (DLP) controls to monitor and restrict unauthorised data transfers
- Create a confidential insider threat reporting mechanism that encourages staff to report suspicious behaviour without fear of retaliation
- Conduct regular background checks for staff with access to critical systems, and mandate security clearance reviews for OT system operators

**Expected Outcome:** Earlier detection of insider threats, reduced attack surface from privileged access misuse, and a security-aware culture where employees actively contribute to threat detection.

---

### Recommendation 3 – Strengthen Access Control

**Objective:** Limit the blast radius of any successful intrusion by enforcing strict access control across IT and OT environments.

**Actions:**
- Implement the principle of **least privilege** across all systems — users should have access only to what is required for their specific role
- Deploy **Privileged Access Management (PAM)** solutions to monitor, record, and control privileged account usage
- Enforce **phishing-resistant Multi-Factor Authentication (MFA)** for all remote access and privileged account logins — preferably using FIDO2 hardware tokens
- Implement **network segmentation** to isolate the OT/SCADA environment from the corporate IT network, with a clearly defined demilitarised zone (DMZ) for any necessary data exchange
- Review and rationalise third-party vendor access, implementing just-in-time access provisioning for contractors

**Expected Outcome:** Significantly reduced risk of lateral movement following initial compromise, and enhanced protection for the most sensitive OT environments.

---

### Recommendation 4 – Strengthen Environmental Risk Management

**Objective:** Integrate climate risk considerations into Western Power's information security and business continuity planning.

**Actions:**
- Conduct a comprehensive climate risk assessment of all critical physical infrastructure, including substations, data centres, and communications nodes
- Develop hardened contingency plans for grid control during extreme weather events, including offline operating procedures for SCADA systems
- Invest in redundant communications infrastructure to maintain control room connectivity during major weather events
- Establish pre-positioned spare parts and equipment caches for rapid recovery following climate-related infrastructure damage
- Integrate climate scenario planning into annual business continuity testing exercises

**Expected Outcome:** Improved operational resilience during climate events, reduced recovery time following extreme weather incidents, and integration of physical and cyber risk management.

---

### Recommendation 5 – Enhance Resilience

**Objective:** Build comprehensive resilience capabilities that enable Western Power to absorb, adapt to, and rapidly recover from major disruptions — whether cyber, physical, or natural.

**Actions:**
- Develop and maintain a **Cyber Incident Response Plan (CIRP)** aligned to the ACSC's Cyber Incident Response Planning Guide, with clearly defined roles, escalation paths, and communication protocols
- Conduct regular **tabletop exercises** simulating ransomware attacks, OT intrusions, and combined cyber-physical scenarios to test and refine response capabilities
- Establish a formal relationship with the **Australian Cyber Security Centre (ACSC)** and participate in sector-specific threat intelligence sharing through the Critical Infrastructure Information Sharing and Analysis Centre (ISAC)
- Implement **immutable backups** for all critical systems, stored offline or in air-gapped environments, to ensure recoverability following ransomware incidents
- Develop a **communications playbook** for managing public, media, and regulatory communications during major incidents, to maintain community confidence and meet statutory reporting obligations

**Expected Outcome:** A resilient organisation capable of responding effectively to major incidents, minimising impact duration, and restoring public confidence in Western Power's operations.

---

## References

Australian Energy Council. (2018). *Electricity Network Regulation in Western Australia*. Australian Energy Council.

Bdaiwi, A. (2019). *Stakeholder Analysis and Power Interest Grid*. Project Management Institute.

Deloitte. (2016). *Customer Engagement in the Electricity Sector*. Deloitte Australia.

Government of Western Australia. (2005). *Electricity Corporation Act 2005*. Government of Western Australia.

Smith, H. (2000). *Project Management: A Systems Approach to Planning, Scheduling and Controlling*. Wiley.

Western Power. (2018). *Environmental Management Framework*. Western Power.

Western Power. (2021). *Supplier and Contractor Management Policy*. Western Power.

Western Power. (2022). *Annual Report 2022*. Western Power, Perth.

Western Power. (2023). *Connecting Our Customers to a Bright Future*. Western Power Strategic Plan 2023–2027.

Australian Cyber Security Centre. (2023). *Essential Eight Maturity Model*. Australian Signals Directorate.

Security of Critical Infrastructure Act 2018 (Cth) (amended 2021, 2022). Commonwealth of Australia.
