---
title: "The Casino Hack: How Scattered Spider Took Down MGM Resorts"
description: "MGM Resorts International suffered a $100M cyberattack in 2023 — slot machines went dark, room keys failed, booking systems crashed. Here's exactly how Scattered Spider did it."
pubDate: 2024-09-03
heroImage: "/images/casino-hack-cover.svg"
category: "Cybersecurity"
author: "Marco Cavani"
tags: ["Scattered Spider", "MGM Resorts", "Ransomware", "Social Engineering", "BlackCat", "Okta", "Vishing"]
readTime: "6 min read"
---

MGM Resorts International is a Nevada-based gaming and hospitality company listed on the S&P 500, operating globally. In the previous year, MGM generated approximately **$16.16 billion** in global revenue — a substantial growth curve over the past 15 years (Statista Research Department, 2024).

The scale of the enterprise and the size of its attacking surface made MGM a prime target for **Scattered Spider** (UNC3944), who in 2023 breached through the company network.

---

## The Attack: Step by Step

### 1. Reconnaissance
Scattered Spider gathered publicly accessible information on **LinkedIn** about MGM personnel, targeting employees with high Okta privileges.

### 2. Vishing (Voice Phishing)
The adversary engaged in a **vishing campaign** — impersonating personnel to lure IT help desk employees into resetting the MFA of targeted accounts.

### 3. Identity Provider Takeover
Scattered Spider gained access to Okta and configured a **new Identity Provider (IdP)** in MGM's Okta Tenant, securing permanent access within the company system. The new IdP granted highly privileged access to MGM's **Azure environment**.

### 4. Detection and Response
MGM's cybersecurity team detected the malicious activity and shut down the Okta Tenant. However, it was not enough to prevent the group from:
- **Exfiltrating** a significant amount of data
- **Encrypting** several MGM ESXi servers hosting VMs supporting hospitality systems using **BlackCat ransomware** TTPs

*(Mandiant, 2023)*

---

## Impact of the Cyberattack

MGM systems were shut down to prevent further intrusion. While this protected customers' bank details from leaking, the operational impact was severe:

- Hotel **room keys stopped working**
- **Booking and payment systems** went offline
- **Slot machines** became unusable
- Significant revenue loss and reputational damage

On **September 12th, 2023**, MGM announced the breach in a [K-8 SEC filing](https://www.sec.gov/Archives/edgar/data/789570/000119312523233855/d502352dex991.htm):

> Estimated losses of **$100 million** in disruption costs, plus an additional **$10 million** to adjust their cybersecurity posture and restore systems. **MGM did not pay the ransom** (McMillan & Sayre, 2023).

---

## Read the Full Report

For a comprehensive deep-dive into Scattered Spider's tactics, techniques, and procedures — including their attack on Caesars Entertainment — read the full intelligence report:

→ [Scattered Spider: The Casino Hacks — Full Report](/blog/scattered-spider-casino-hacks)

---

## References

- Mandiant. (2023). *UNC3944: SMS Phishing and SIM Swapping in the Wild*.
- McMillan, R., & Sayre, K. (2023). *MGM Resorts Says Cyberattack Will Cost It $100 Million*. The Wall Street Journal.
- UNITED STATES SECURITIES AND EXCHANGE COMMISSION & MGM RESORTS INTERNATIONAL. (2023). *Form 8-K Filing*.
- Statista Research Department. (2024). *MGM Resorts International revenue worldwide*.
