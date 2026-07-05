---
title: "Lapsus$ Bypassed MFA. Cloudflare Did Not Let Them. Here Is the Difference."
description: "In 2022, the Lapsus$ group compromised Microsoft, Okta, Samsung, and Nvidia by spamming push MFA notifications until tired users approved. Cloudflare was also targeted. Their FIDO2 hardware keys made the attack irrelevant. Authentication is the control that decides which outcome you get."
pubDate: 2026-10-04
heroImage: "/images/itgc-c1-authentication.svg"
category: "IT Audit"
author: "Marco Cavani"
tags: ["Authentication", "ITGC", "MFA", "Lapsus$", "FIDO2", "Identity Security", "IT Audit"]
readTime: "8 min read"
---

In the first half of 2022, a threat group known as Lapsus$ (tracked by Microsoft as DEV-0537) compromised a remarkable list of large organisations in rapid succession: NVIDIA, Samsung, Ubisoft, Okta, Microsoft, T-Mobile, and Uber. The group's members were largely teenagers and young adults. Their primary technique was not a zero-day vulnerability. It was not advanced malware. It was a telephone call and a notification.

Lapsus$ operated on two main techniques. The first was MFA fatigue: bombarding a target's phone with authentication push notifications, late at night if necessary, until the target approved one out of frustration, confusion, or a desire to stop the alerts. The second was social engineering IT helpdesks and telecom carriers to reset accounts or perform SIM swaps, bypassing MFA tied to a phone number.

On 7 August 2022, Cloudflare disclosed that they had also been targeted by Lapsus$, using the same technique. Three Cloudflare employees received voice phishing calls, followed by multiple MFA push notifications. The employees, trained and aware of the threat, reported the calls to the security team. The MFA push notifications went unapproved. No access was gained.

The reason Cloudflare's employees could not approve the notifications even accidentally was that their authentication was not based on push notifications at all. Cloudflare had implemented FIDO2 hardware security keys for all employee authentication. FIDO2 keys are phishing-resistant: they cryptographically bind the authentication to the legitimate domain, making them impossible to bypass via push spam, SIM swapping, or real-time phishing.

The same attack methodology that compromised Microsoft breached Cloudflare zero times. Authentication design determined the outcome.

---

## The Risk

Authentication is the process by which a system verifies that a user is who they claim to be. It is the first and most fundamental control in any access management framework. If authentication fails, every downstream control, authorisation, audit logging, and access review, operates on a false premise.

Authentication risk has evolved significantly with the widespread adoption of MFA. The assumption that "we have MFA so our accounts are protected" is demonstrably false for most MFA implementations:

**SMS-based MFA:** Vulnerable to SIM swapping. A social engineer contacts the victim's mobile carrier and convinces them to transfer the phone number to an attacker-controlled SIM.

**Voice call MFA:** Vulnerable to vishing (voice phishing). Attackers spoof caller ID, impersonate company IT, and convince users to read back OTPs or approve requests.

**Push notification MFA:** Vulnerable to MFA fatigue. Flooding a user with push notifications, particularly out-of-hours, causes many users to approve the notification to make it stop.

**TOTP apps (Google Authenticator, Authy):** Better than SMS, but still vulnerable to real-time phishing. A fake login page captures the user's credentials and OTP simultaneously and replays them to the real site before the OTP expires.

**FIDO2/WebAuthn hardware keys and passkeys:** Phishing-resistant. The device cryptographically signs an authentication challenge that includes the origin (the website URL). Responses are valid only for the legitimate site. Cannot be intercepted or replayed.

---

## The Lapsus$ Campaign

Between late 2021 and mid-2022, Lapsus$ conducted one of the most disruptive cybercriminal campaigns in recent history, achieving a conviction rate against major organisations that far exceeded any APT group in the same period.

**Okta (January 2022):** Lapsus$ compromised a third-party customer support contractor for Okta, gaining access to Okta's internal systems for approximately five days. Because Okta is an identity provider used by thousands of organisations, this breach had potential downstream implications for every Okta customer. Approximately 2.5% of customers were estimated to have been affected.

**Microsoft (March 2022):** Lapsus$ obtained partial source code for Bing, Cortana, and Bing Maps from Microsoft's internal Azure DevOps repositories. Microsoft's announcement confirmed the breach and attributed it to Lapsus$.

**Nvidia (February 2022):** Lapsus$ claimed to have stolen 1TB of data from Nvidia, including proprietary GPU driver source code and employee credentials. Nvidia confirmed a cybersecurity incident.

In each case, the authentication control that failed was MFA based on push notifications or easily bypassable alternatives. In each case, the attacker combined social engineering with credential theft to obtain the initial access, then used MFA fatigue or helpdesk manipulation to bypass the second factor.

---

## What Failed

**Push-based MFA without anomaly detection:** Push notifications sent from an IP address not associated with the legitimate user, at an unusual time, or following a suspicious helpdesk interaction, are high-confidence indicators of an attack. Monitoring and blocking based on these signals would have reduced susceptibility to MFA fatigue.

**SIM swap-vulnerable MFA:** Where phone-based MFA was the only option, SIM swapping created a complete bypass. Phone-based MFA should not be the sole second factor for high-risk accounts.

**Helpdesk without identity verification:** Lapsus$ successfully manipulated helpdesk staff at multiple organisations to reset accounts or bypass MFA. The helpdesk is the weakest link in any authentication framework if identity verification procedures are inadequate.

**No phishing-resistant MFA for privileged accounts:** Even where general users had push MFA, administrators with access to sensitive systems often had the same level of MFA protection, despite presenting a significantly higher risk profile.

---

## What Good Looks Like

**FIDO2/passkey authentication for high-risk accounts:** All accounts with access to sensitive systems, production environments, identity platforms, and cloud management consoles, use phishing-resistant authentication. This is the Cloudflare standard and the standard increasingly mandated by CISA (Binding Operational Directive 22-02 requires phishing-resistant MFA for US federal agencies).

**Number matching for push MFA:** For organisations not yet at FIDO2, number matching in push notifications requires the user to type a number displayed on the authentication screen into the push notification, preventing blind approval.

**Conditional access policies:** Authentication is contextual. Logins from unexpected geographies, unusual times, or unfamiliar devices trigger additional verification or are blocked pending review.

**Helpdesk identity verification procedures:** MFA resets, account unlocks, and password changes initiated via helpdesk require multi-factor identity verification, such as video call with government ID, manager attestation, or security code provided at onboarding.

**Password policy:** Passwords meet minimum complexity and length requirements. Password reuse is prohibited. Compromised password databases are checked against corporate account passwords regularly.

---

## How Auditors Test It

When auditing Authentication (Control C.1), an IT auditor will typically:

**Assess MFA deployment:** Confirm that MFA is enforced for all in-scope user accounts, particularly remote access (VPN, cloud), privileged access, and email. Request evidence of MFA enrollment rates and exceptions.

**Assess MFA type:** Determine what MFA methods are in use. Evaluate whether phishing-resistant MFA is deployed for high-risk accounts. Document the risk associated with any phone-based or push-only MFA deployments.

**Test helpdesk procedures:** Review the documented procedure for MFA reset and account unlock requests. Assess whether the procedure requires identity verification that cannot be satisfied by a social engineer with knowledge of the target's name and role.

**Review conditional access policies:** Request evidence of conditional access or risk-based authentication policies. Confirm that high-risk sign-in conditions (new location, legacy authentication protocol, suspicious IP) trigger enhanced verification.

**Test password policy enforcement:** Confirm that password policy is technically enforced (length, complexity, history, lockout). Assess whether compromised credential monitoring is in place.

**Assess service accounts:** Confirm that service accounts also use strong authentication where feasible. Service account passwords should meet or exceed the complexity and rotation standards applied to user accounts.

---

## Lessons and Recommendations

The Lapsus$ campaign is the clearest possible demonstration that push-based MFA, while better than no MFA, is not adequate for protecting sensitive systems in the current threat environment.

**Migrate to phishing-resistant MFA for all privileged and remote access.** This is not aspirational. CISA mandates it for federal agencies. Commercial organisations should treat it as the baseline for accounts with access to sensitive data or critical systems.

**Enable number matching on push MFA today.** If FIDO2 deployment is not immediate, number matching is a low-cost, high-impact improvement that dramatically reduces MFA fatigue effectiveness.

**Train helpdesk staff specifically on social engineering.** The helpdesk is the most exploited vector in MFA bypass attacks. Staff who understand that they will be targeted, and who have clear procedures that remove the ability to make exceptions, are significantly more resilient.

**Monitor for MFA anomalies.** Multiple failed MFA attempts, push notifications sent at unusual hours, and authentication from unexpected geographies are detectable signals. Alerting on these signals creates a detection layer that does not depend on a user making the right decision.

**Audit your authentication exceptions.** Almost every organisation has accounts that are excluded from MFA enforcement. Review the exception list. Every exception is a target.

---

## Assess Your Authentication Controls

The MarcoWeb ITGC Tool covers Authentication as part of the Group C control set, with structured assessment templates for MFA deployment, helpdesk procedures, and conditional access.

[Open the ITGC Audit Tool](https://marcoweb-itgc-saas.netlify.app/)
