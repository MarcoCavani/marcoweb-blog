---
title: "Exploring Zero-Day Vulnerabilities"
description: "A vendor-based analysis of zero-day vulnerabilities from 2006 to 2023, revealing which companies are most associated with exploitable weaknesses  -  and what organisations can learn from the patterns."
pubDate: 2023-05-17
heroImage: "/images/zero-day-cover.svg"
category: "Cybersecurity"
author: "Marco Cavani"
tags: ["Zero-Day", "Vulnerabilities", "Microsoft", "Threat Intelligence", "NIST", "Patch Management"]
readTime: "5 min read"
---

The National Institute of Standards and Technology (NIST) defines zero-day attacks as the exploitation of previously unknown vulnerabilities in software or hardware. These attacks take advantage of unknown weaknesses before developers can fix them, leaving victims vulnerable to exploitation.

It is important to notice that the majority of total zero-day vulnerabilities between 2006 and 2023 can be associated with **well-established vendors**, as their products are widely used.

## Zero-Day Vulnerabilities by Vendor (2006–2023)

The distribution of zero-day vulnerabilities across vendors reveals which companies are most associated with high-risk exposure:

- **Microsoft  -  39.72%**: The largest share, unsurprising given the widespread use of Microsoft products and the complexity of their software ecosystem.
- **Adobe  -  11.3%**: Adobe's software suite, including Acrobat Reader and Photoshop, accounts for a significant portion.
- **Apple  -  6.75%** and **Google  -  6.59%**: Both attract consistent attention from malicious actors.
- Smaller percentages are attributed to Cisco, Oracle, Mozilla, and JustSystems Corporation.

## Exploitation Example

On 2023-05-09, Microsoft identified and patched a zero-day vulnerability related to the Elevation of Privilege. Prior to the patch, the vulnerability was actively exploited in real-world attacks (Marchuk, 2023).

The vulnerability enabled attackers to escalate privileges by exploiting a boundary error within the Win32k driver. A local user could trigger memory corruption, ultimately allowing arbitrary code execution with **SYSTEM privilege**.

## Lessons Learned

As reported by Google Project Zero (2022), many zero-day vulnerabilities had close associations with previously disclosed weaknesses. This suggests that more thorough investigation and patching efforts could have potentially prevented a significant portion of these exploits.

> Addressing the **root cause** of vulnerabilities  -  not just the symptoms  -  is critical to reducing zero-day exposure.

---

## References

- Google Project Zero. (2022). *Project Zero: 2022 0-day In-the-Wild Exploitation…so far*. https://googleprojectzero.blogspot.com/2022/06/2022-0-day-in-wild-exploitationso-far.html
- Marchuk, V. (2023). *Zero-day vulnerability in Windows*. Zero-Day.cz. https://www.zero-day.cz/database/765/
- SADOWSKI, J. (2022). *Zero Tolerance: More Zero-Days Exploited in 2021 Than Ever Before*. Mandiant.
- zero-day.cz. (n.d.). *Zero-day Vulnerability Database*. https://www.zero-day.cz/database/
