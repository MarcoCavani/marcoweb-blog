---
title: "LastPass Proves That Penetration Testing Must Cover Your Cloud Environment"
description: "LastPass was breached twice in 2022. The second breach exploited a DevOps engineer's home computer to reach cloud backups that held encrypted vaults for 33 million users. Periodic security assessments of the cloud environment should have identified the path. They did not."
pubDate: 2026-07-27
heroImage: "/images/itgc-b8-periodic-security-assessment.svg"
category: "IT Audit"
control: "B.8"
author: "Marco Cavani"
tags: ["Periodic Security Assessment", "ITGC", "Penetration Testing", "LastPass", "Cloud Security", "IT Audit"]
readTime: "8 min read"
youtubeId: "j5_3SMaXw58"
---

In August 2022, LastPass, the widely used password management company, disclosed that an attacker had accessed a developer's account and stolen source code and proprietary technical information. The company stated that no customer data had been accessed and no passwords were compromised.

Three months later, in December 2022, LastPass disclosed a far more serious breach. Using technical information obtained in the August incident, an attacker had identified and targeted one of four LastPass DevOps engineers with access to shared cloud backups. The attacker compromised the engineer's home computer, exploiting a vulnerability in a third-party media software package to install keylogger malware. The keylogger captured the engineer's master password for the corporate password vault, granting the attacker access to the decryption keys for the cloud backup environment.

The cloud backup contained encrypted copies of customer vaults, as well as critical secrets and API credentials for LastPass's cloud infrastructure. The company later confirmed that threat actors were using the stolen encrypted vaults in offline brute-force attacks against customer master passwords.

For 33 million LastPass customers, the security of their entire digital life depends on whether their master password is strong enough to resist cracking. The attack chain would have been visible in a thorough security assessment of the cloud environment. The question of whether such an assessment was conducted, and whether its findings were actioned, is exactly what Control B.8 is designed to answer.

---

## The Risk

Periodic Security Assessment covers the structured, independent evaluation of an organisation's security controls through methods such as penetration testing, red team exercises, vulnerability assessments, and control reviews. These assessments test whether controls that are designed to work actually work in practice, against a skilled, motivated adversary.

The risk of inadequate periodic assessment is deceptively simple: you do not know what you do not know. Controls may appear functional in documentation and configuration but fail under realistic attack conditions. Specific risks include:

**Unknown attack paths:** A penetration tester following the same methodology as a real attacker may identify attack chains that neither the security team nor the system designers considered.

**Configuration drift:** Systems that were securely configured at deployment may have had their configurations changed over time, opening vulnerabilities that neither vulnerability scans nor internal reviews detect.

**Third-party risk in the home environment:** LastPass's case introduced a new dimension. The targeted engineer's home computer, outside the corporate security perimeter, became an attack vector into production systems. Assessing the full attack surface, including how privileged access is protected in remote work scenarios, requires a holistic security assessment approach.

**Compensating control gaps:** Controls that appear adequate in isolation may be inadequate when tested as part of a realistic attack sequence.

---

## The LastPass Attack Chain

The August 2022 incident gave the attacker source code and technical documentation about LastPass's infrastructure. This information enabled them to understand how the backup environment was structured and who had access to it.

The attacker identified that only four DevOps engineers had access to shared cloud backups protected by the Plex Media Server software, which was installed on the targeted engineer's home computer. A known, unpatched vulnerability in Plex (CVE-2020-5741, a 2020 vulnerability that the engineer had not patched) allowed remote code execution. The attacker exploited this vulnerability to install keylogger malware.

The keylogger captured the engineer's credentials to the corporate LastPass environment. The attacker used these credentials to access S3 buckets containing customer vault backups and infrastructure secrets. The attack bypassed corporate security controls entirely because it originated from the engineer's personal device, which had network access to corporate cloud systems via a privileged access mechanism.

A thorough security assessment of the cloud environment, following the logic of: who has access to the most sensitive cloud backups, from where, and under what conditions, would have surfaced the personal device risk. Assessment recommendations would likely have included: require privileged access to sensitive cloud resources from corporate-managed devices only, via a privileged access workstation (PAW).

---

## What Failed

**No assessment of the remote privileged access attack surface:** The access path, a personal home computer used to access production cloud backups, was outside the scope of any penetration test or security assessment of the corporate environment.

**Unpatched critical software on a privileged user's device:** A vulnerability in Plex that was two years old at the time of exploitation had not been remediated on the engineer's home computer. A policy requiring endpoint security controls on devices used for privileged access, including patch management for any internet-facing software, would have reduced this risk.

**Over-reliance on encryption as a compensating control:** LastPass's position that customer vaults were encrypted and therefore safe understated the risk. If the decryption keys and master passwords can be stolen, encryption provides limited protection. A security assessment would have stress-tested the assumption that encryption alone protects the backup environment.

**Privileged access to critical backups from personal devices:** Only four engineers had access to the most sensitive backups. That concentration of access is appropriate. But permitting that access from unmanaged personal devices is not. This is a design risk that a privileged access security assessment would identify.

---

## What Good Looks Like

**Annual penetration testing:** An annual penetration test by a qualified, independent firm covers the external attack surface, internal network, and web applications. The scope is defined to include the environments that are most sensitive and most likely to be targeted.

**Cloud environment assessment:** Cloud environments are specifically included in the penetration testing scope. Cloud-specific attack techniques, including IAM privilege escalation, cross-account trust abuse, and S3 bucket policy weaknesses, are tested by testers with cloud security expertise.

**Red team exercises:** Periodic red team exercises simulate realistic, multi-stage attacks by an adversary with knowledge of the target. These go beyond penetration testing to test detection and response capabilities alongside technical controls.

**Privileged access assessment:** The access paths used by system administrators and DevOps engineers to reach sensitive systems are specifically assessed. Personal devices used for privileged access represent a risk that is often outside standard penetration test scope.

**Findings management:** Assessment findings are tracked to closure. A finding from a penetration test that is not remediated is not a security investment, it is a documented risk. Findings are risk-rated and remediation is tracked against defined deadlines.

---

## How Auditors Test It

When auditing Periodic Security Assessment (Control B.8), an IT auditor will typically:

**Request penetration testing reports** from the period under review. Assess the scope, methodology, and qualifications of the firm that conducted the test. Confirm the assessment covered the most sensitive and internet-facing systems.

**Assess findings remediation:** For the most recent penetration test report, trace each finding to a remediation action. Confirm that critical and high-severity findings were remediated within the defined timeframe. Identify any critical findings that remain open without documented exception and compensating control.

**Assess scope adequacy:** Review whether the scope of periodic assessments covers the full attack surface, including cloud environments, SaaS platforms, and remote access mechanisms. Gaps in scope are a finding.

**Test assessment frequency:** Confirm that penetration testing occurs at least annually, or more frequently for high-risk environments (e.g., internet-facing financial systems). Assess whether the frequency aligns to the organisation's risk profile.

**Review red team or adversarial testing:** For mature organisations, assess whether red team or adversarial simulation exercises have been conducted. Review reports and findings.

**Assess the relationship between assessment findings and risk register:** Findings from security assessments should feed into the organisation's risk register (covered in A.3). Confirm that significant open findings appear as risk register entries.

---

## Lessons and Recommendations

LastPass conducted security assessments of its corporate environment. The attack succeeded because it bypassed the corporate perimeter entirely, targeting a personal device to reach corporate cloud credentials. The lesson is not that penetration testing failed, it is that the scope of penetration testing did not match the actual attack surface.

**Define your full attack surface before scoping assessments.** Every privileged access path to sensitive systems is part of your attack surface, regardless of whether it originates inside the corporate network. Personal devices used for privileged access must be assessed or excluded from use.

**Include cloud environments in penetration testing scope.** Cloud-native attack techniques differ significantly from on-premises techniques. Many penetration test firms do not have cloud security expertise. Verify expertise before engagement.

**Implement privileged access workstations (PAWs).** For access to the most sensitive systems, require that access originates from a dedicated, hardened, managed device. This eliminates the personal device risk that LastPass's attacker exploited.

**Track findings to closure.** A penetration testing program that generates reports but does not enforce remediation is a compliance exercise. Define finding SLAs, assign owners, and report on status in every governance review.

**Test your backups, including backup access controls.** The most valuable data an attacker can steal is often in your backup environment. Backup systems must be assessed with the same rigour as production systems.

---

## Assess Your Periodic Security Assessment Controls

The MarcoWeb ITGC Tool covers the full Group B control set including Periodic Security Assessment, with structured assessment templates for test scope, findings management, and remediation tracking.

[Open the ITGC Audit Tool](https://itgc.marcoweb.org/)
