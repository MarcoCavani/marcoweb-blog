---
title: "User Access Provisioning and Review"
description: "Granting access is easy to get right and easy to forget to undo. The exam tests the leaver who keeps access, and the periodic review that catches what provisioning missed."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 7
minutes: 7
gated: false
taskStatement: "Evaluate whether access is granted, changed and removed in step with employment and periodically recertified by owners."
objectives:
  - "Describe the joiner, mover and leaver access lifecycle."
  - "Identify delayed removal of a leaver's access as the critical risk."
  - "Explain the purpose of periodic access recertification and who performs it."
trap: "Focusing on granting access and neglecting to remove it. The terminated user who still has access, especially after an involuntary exit, is the classic finding."
quiz:
  - question: "Which stage of the user access lifecycle carries the GREATEST risk if handled poorly?"
    options:
      - "Granting access to a new joiner"
      - "Removing access when someone leaves, especially after an involuntary termination"
      - "Documenting the access request"
      - "Notifying the user their access is ready"
    answer: 1
    explanation: "Access not removed promptly when someone leaves means a former employee, or an attacker using their still-active credentials, retains access they should no longer have. This is most acute for involuntary terminations, where the person may be motivated to cause harm. Timely deprovisioning, ideally triggered by HR, is the critical control."
    whyWrong:
      - "Granting access to a joiner is important but self-correcting; the person is present and access is expected."
      - ""
      - "Documentation matters for the trail but is not where the substantive access risk lies."
      - "Notification is administrative and carries none of the risk of leaving access active after departure."
  - question: "What is the PRIMARY purpose of a periodic user access review (recertification)?"
    options:
      - "To reset everyone's passwords on a schedule"
      - "To confirm that each user's access is still appropriate and remove access that is no longer justified"
      - "To increase access for long-serving employees"
      - "To archive old user accounts for reporting"
    answer: 1
    explanation: "A periodic access review has owners re-confirm that each person's access is still appropriate for their current role, catching privilege creep, orphaned accounts, and access that provisioning granted but never removed. It is the detective control that backstops the provisioning and deprovisioning process, stripping back anything no longer justified."
    whyWrong:
      - "Password resets are a separate control; recertification is about the appropriateness of access, not credentials."
      - ""
      - "Reviews remove unjustified access; they do not reward tenure with more."
      - "Archiving for reporting is not the purpose; confirming and correcting access is."
  - question: "Who is BEST placed to confirm, during an access review, that a user's access to a system is still appropriate?"
    options:
      - "The IT team that administers the system"
      - "The business or data owner and the user's manager, who understand what the role requires"
      - "The user themselves"
      - "The external auditor"
    answer: 1
    explanation: "Whether access is appropriate is a business judgement about what the role needs, so the data owner and the user's manager are best placed to confirm or revoke it. IT can execute the changes and provide the access listing, but it does not know what each person's role should permit. A user reviewing their own access has an obvious conflict."
    whyWrong:
      - "IT administers access but does not know what each role should be permitted; it executes the owner's decision."
      - ""
      - "Users approving their own access is a conflict of interest and not an independent check."
      - "The external auditor evaluates the review process; it does not perform the business recertification."
---

## The situation

A review of active accounts turns up three people who left the company months ago and can still log in, one of them dismissed. It also finds a contractor whose engagement ended in spring. Every one of these accounts was created properly, with an approval and a ticket. The failure was never in granting the access. It was in nobody ever taking it away.

Provisioning gets attention because someone is waiting for it. Deprovisioning gets forgotten because no one is.

## The access lifecycle: joiner, mover, leaver

Access tracks employment through three events:

- **Joiner**: a new person is granted the access their role needs, ideally provisioned from an approved request tied to HR.
- **Mover**: someone changes role, and their access should change with it, gaining what the new role needs and, critically, **losing what the old role needed**. Skipping the removal is how privilege creep, from the previous lesson, sets in.
- **Leaver**: someone departs, and **all** their access must be promptly revoked.

The joiner step is self-correcting, the person is present and expecting access. The mover and leaver steps are where control fails quietly, because nothing is blocked when access lingers, so no one notices until a review, or a breach, finds it.

## The leaver is the critical risk

The most acute risk in the whole lifecycle is a **leaver whose access is not removed**. A former employee retaining active credentials, or an attacker using them, has legitimate-looking access they should no longer hold. This is sharpest for an **involuntary termination**, where the person may be aggrieved and motivated to cause harm, and where access should be cut at, or before, the moment of departure.

So deprovisioning is treated as a time-critical control, ideally **triggered automatically by HR** when employment ends, not left to someone remembering to raise a ticket. When a question asks which stage of the access lifecycle carries the greatest risk, it is the removal of a leaver's access.

## The periodic access review

Because provisioning and deprovisioning will miss things, a **periodic access review**, or recertification, backstops them. At an interval, the **business or data owner** and the user's **manager** re-confirm that each person's access is still appropriate for their current role, and revoke what is not. It catches the movers who accumulated access, the leavers who slipped through, and orphaned accounts.

The review must be done by someone who knows what the role **should** permit, which is the business owner and manager, not IT. IT provides the access listing and executes the changes; it cannot judge appropriateness. And a user reviewing their own access is no review at all. This is the same independence logic that runs through the course: the person who decides must be positioned to judge, and must not be marking their own homework.

## Where practitioners go wrong

Two instincts cost marks. The first is pouring attention into granting access and neglecting to remove it; the terminated user who still has access is the classic finding, and the leaver, especially an involuntary one, is the highest risk in the lifecycle. The second is treating the access review as an IT task or a rubber stamp. It is a business owner's recertification of what each role should hold, and its whole value is that someone who knows the role, and is not the user, confirms the access is still justified.
