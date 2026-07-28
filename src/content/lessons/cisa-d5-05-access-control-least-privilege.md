---
title: "Access Control Models and Least Privilege"
description: "Give people the minimum access their job needs, and no more. The exam tests least privilege, the access-control models, and how privilege quietly creeps beyond what a role requires."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 5
minutes: 7
gated: false
taskStatement: "Evaluate whether access is granted on least privilege and need-to-know, using an appropriate access-control model."
objectives:
  - "State the principle of least privilege and need-to-know."
  - "Distinguish role-based, discretionary and mandatory access control."
  - "Recognise privilege creep as excessive access to be removed."
trap: "Granting broad access for convenience, and letting access accumulate as people change roles. Least privilege is the baseline, and privilege creep is a standard access-review finding."
quiz:
  - question: "What does the principle of least privilege require?"
    options:
      - "Giving users access to everything they might one day need"
      - "Granting each user only the minimum access required to perform their role, and no more"
      - "Giving all users the same standard level of access"
      - "Granting access based on how senior the user is"
    answer: 1
    explanation: "Least privilege means each user, process or account is granted only the access necessary to perform its function, and nothing beyond that. Combined with need-to-know, it limits the damage a compromised or misused account can do. Access anticipating what someone might need, or based on seniority rather than function, breaches it."
    whyWrong:
      - "Granting access for what someone might one day need is over-provisioning, the opposite of least privilege."
      - ""
      - "A uniform standard level ignores what each role actually requires; access should fit the function."
      - "Seniority is not a basis for access; need, driven by the role, is."
  - question: "Under which access-control model is access determined by a user's assigned job role?"
    options:
      - "Discretionary access control (DAC)"
      - "Role-based access control (RBAC)"
      - "Mandatory access control (MAC)"
      - "No model assigns access by role"
    answer: 1
    explanation: "Role-based access control grants permissions to roles, and users receive access by being assigned to a role that matches their job function. It scales well and makes reviews easier. Discretionary access control lets the data owner grant access at their discretion; mandatory access control enforces access centrally through security labels, used in high-security environments."
    whyWrong:
      - "DAC grants access at the owner's discretion, not automatically by job role."
      - ""
      - "MAC enforces access through system-assigned security labels, not by job role."
      - "Access by role is precisely what RBAC provides; the model exists."
  - question: "An employee has moved through three departments and retains all the access from each. What does an access review MOST likely identify?"
    options:
      - "That the employee is due for promotion"
      - "Privilege creep: accumulated access that exceeds what the current role requires and should be removed"
      - "That the access-control model is unnecessary"
      - "That the employee should be given even more access for flexibility"
    answer: 1
    explanation: "Access accumulated across role changes, but never removed, is privilege creep: the employee now holds far more than their current role needs, breaching least privilege. A periodic access review is designed to detect exactly this and strip the access back to what the present role requires."
    whyWrong:
      - "Accumulated access is a control problem, not a signal about promotion."
      - ""
      - "Privilege creep demonstrates why access control and review matter, not that they are unnecessary."
      - "Adding access compounds the breach; the fix is to remove what the current role does not need."
---

## The situation

An analyst who has moved from sales to procurement to finance over five years can still do all three jobs in the systems, because each move added access and none ever took any away. On paper they are one of the most powerful users in the company, not by design, but by accumulation. No one decided they should have this reach; it just built up.

Reliable authentication, from the previous lesson, proves who someone is. This lesson is about what they should then be allowed to do.

## Least privilege and need-to-know

The governing principle is **least privilege**: every user, and every process or account, is granted **only the minimum access required** to perform its function, and nothing more. Alongside it sits **need-to-know**: access to specific information is limited to those who require it for their work.

The point of both is **containment**. If an account is compromised or misused, the damage is bounded by how little it could do. Broad access "to be efficient" or "in case they need it" inverts this, turning every account into a large blast radius. Access should track **function**, not convenience and not seniority, and the default posture is **deny**: no access unless a need justifies it.

## The access-control models

The exam expects you to recognise how access decisions are made:

- **Role-based access control (RBAC)**: permissions attach to **roles**, and users get access by being assigned a role matching their job. It scales and simplifies review, and it is the most common model in business systems.
- **Discretionary access control (DAC)**: the **data owner** grants access at their discretion, common in file systems.
- **Mandatory access control (MAC)**: access is enforced **centrally through security labels** (such as classification levels), used in high-security and military environments where users cannot override the rules.

When a question describes access granted **by job role**, that is RBAC; **by the owner's choice**, DAC; **by system-enforced labels**, MAC.

## Privilege creep

The analyst is a textbook case of **privilege creep**: access accumulated across role changes and never removed. Each move was reasonable in isolation; the sum is an account that holds far more than the current role needs, breaching least privilege badly.

Privilege creep is one of the most common findings a **periodic access review** exists to catch (the next lesson covers the review itself). The remedy is not to add or tidy around the excess but to strip access back to what the **present** role requires. When a scenario describes someone retaining access from former roles, the answer is that their access is excessive and should be removed, not that they are versatile or due more.

## Where practitioners go wrong

Two instincts cost marks. The first is provisioning generously, granting broad access up front so no one is ever blocked; least privilege wants the minimum the role needs, because every excess permission is extra risk if the account is compromised. The second is treating accumulated access as harmless because each grant was once justified. Privilege creep is a real finding: access must be reduced when it is no longer needed, back to what the current role, and need-to-know, actually require.
