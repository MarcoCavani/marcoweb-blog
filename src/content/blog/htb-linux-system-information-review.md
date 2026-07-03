---
title: "HTB Linux Fundamentals: System Information Review"
description: "A walkthrough of the HackTheBox Linux Fundamentals module covering essential system information commands — whoami, id, hostname, uname, ifconfig, ip, netstat, ps, env, lsblk, and more."
pubDate: 2023-12-31
heroImage: "/images/htb-linux-cover.svg"
category: "Tutorial"
author: "Marco Cavani"
tags: ["HackTheBox", "Linux", "Tutorial", "CTF", "Penetration Testing", "System Administration"]
readTime: "5 min read"
---

This tutorial covers understanding and working with Linux systems, particularly focusing on **system information commands and tools**. It includes essential commands to gather information about the system, processes, network configurations, and more.

---

## Key Commands Covered

| Command | Purpose |
|---------|---------|
| `whoami` | Current logged-in user |
| `id` | User and group identity |
| `hostname` | System hostname |
| `uname` | Kernel and OS information |
| `pwd` | Current working directory |
| `ifconfig` / `ip` | Network interface configuration |
| `netstat` / `ss` | Network connections |
| `ps` | Running processes |
| `who` | Logged-in users |
| `env` | Environment variables |
| `lsblk` | Block devices |
| `lsusb` | USB devices |
| `lsof` | Open files |
| `lspci` | PCI devices |

---

## Tasks

1. Find out the machine hardware name and submit it as the answer.
2. What is the path to htb-student's home directory?
3. What is the path to the htb-student's mail?
4. Which shell is specified for the htb-student user?
5. Which kernel version is installed on the system? (Format: 1.22.3)
6. What is the name of the network interface that MTU is set to 1500?

## Walkthrough

{{< youtube -tsrsieR0Qc >}}

*Full exercise walkthrough available on YouTube.*

---

## Solutions

1. `x86_64`
2. `/home/htb-student`
3. `/var/mail/htb-student`
4. `/bin/bash`
5. `4.15.0`
6. `ens192`
