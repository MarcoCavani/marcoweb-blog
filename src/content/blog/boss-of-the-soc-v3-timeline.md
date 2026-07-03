---
title: "Boss of The SOC V3 Timeline"
description: "A chronological account of the BOTSv3 security incident on 20 August 2018, categorised by MITRE ATT&CK tactics — from initial access and phishing through to exfiltration and a Memcached DDoS attack."
pubDate: 2023-05-28
heroImage: "/images/botsv3-cover.svg"
category: "Tutorial"
author: "Marco Cavani"
tags: ["MITRE ATT&CK", "BOTSv3", "Incident Response", "Blue Team", "SIEM", "Splunk", "CTF"]
readTime: "6 min read"
---

The Boss of The SOC (BOTS) V3 timeline offers a chronological account of security events that occurred on **20 August 2018**, between 0900 and 1600. The timeline categorises events according to the **MITRE ATT&CK framework**, a widely used framework for analysing adversarial tactics and techniques.

---

## Initial Access

- **09:16:12** — `AKIAJOGCDXJ5NW5PXUPA/web_admin` attempts to access IAM resources.
- **09:16:12** — `web_admin` attempts to create `nullweb_admin`.
- **09:16:22** — `web_admin` attempts to launch a Xenial Xerus instance.
- **09:16:55** — Email sent noting that `AKIAJOGCDXJ5NW5PXUPA/web_admin` credentials were detected on GitHub.

## Execution

- **09:55:14** — Malicious attachment `Frothly-Brewery-Financial-Planning-FY2019-Draft.xlsm` delivered via phishing.
- **09:55:52** — Sysmon detects `HxTsr.exe` launched from the malicious attachment.
- **09:56:39** — Symantec detects `HxTsr.exe`.

## Collection

- **09:57:17** — `stout.png`, `stout-2.png`, `morebeer.jpg` uploaded to OneDrive.
- **09:57:33** — `BRUCE BIRTHDAY HAPPY HOUR PICS.lnk` uploaded to OneDrive.

## Command and Control

- **10:01:44** — C2 server contacted.
- **10:07:07** — C2 server contacted.
- **10:11:02** — C2 server contacted.
- **10:15:28** — C2 server contacted.

## Lateral Movement

- **10:43:10** — `hdoor.exe` scans the network.
- **10:47:16** — Attack tools `logos.png` downloaded from `45.77.53.176:3333`.
- **10:48:28** — Search for `"cromdale OR beer OR financial OR secret"`.

## Execution (Remote Code)

- **11:05:40** — First remote code execution using `iexeplorer.exe` (**CVE-2017-9791**).
- **11:08:36** — File named `"colonel"` streamed using `iexeplorer.exe`.
- **11:08:48** — File `"definitelydontinvestigatethisfile.sh"` streamed using `iexeplorer.exe`.
- **11:34:01** — Last remote code execution via `iexeplorer.exe` (CVE-2017-9791).
- **11:34:49** — `tomcat8` runs `./colonelnew` — privilege escalation to root (**CVE-2017-16995**).

## Persistence

- **11:24:28** — `tomcat7` Linux account created.

## Defense Evasion

- **11:48:38** — `root` runs `rm /usr/share/tomcat8/.bash_history`.

## Discovery

- **11:31:54** — `netcat` listening on port `1337` starts.
- **11:32:14** — C2 server contacted.
- **11:55:34** — `netcat` on port `1337` ends.
- **11:21:40** — BCC rule to `hyunki1984@naver.com` added.

## Exfiltration

- **13:01:46** — `frothlywebcode` S3 bucket made public.
- **13:02:44** — `OPEN_BUCKET_PLEASE_FIX.txt` uploaded to `frothlywebcode`.
- **13:04:17** — `frothly_html_memcached.tar.gz` uploaded to `frothlywebcode`.

## Impact

- **15:11:35** — Memcached attack starts.
- **15:27:09** — Memcached attack ends.
- **15:15:00** — Email bragging about customer data exfiltration.

---

## Lessons Learned: Memcached Attack

One particular incident that provided valuable insights was the **Memcached attack**. It emphasised the importance of securing and properly configuring Memcached instances to prevent unauthorized access and abuse.

This incident highlighted the need for:
- Constant monitoring
- Vulnerability patching
- Strong access controls for widely-used services

---

This timeline provides an overview of events categorised by their respective MITRE ATT&CK phases, aiding in incident response and strengthening defence strategies.
