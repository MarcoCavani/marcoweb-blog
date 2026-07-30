---
title: "Physical and Environmental Controls"
description: "Logical controls mean nothing if someone can walk out with the server or the room floods. The exam tests tailgating, and why environmental controls protect the availability of everything else."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 8
minutes: 7
gated: false
videoId: "Cc6VG-GDofo"
taskStatement: "Evaluate whether physical access to facilities and environmental threats to equipment are adequately controlled."
objectives:
  - "Identify the control that prevents tailgating into a secure area."
  - "Explain why physical security is part of protecting information assets."
  - "Recognise the role of environmental controls in protecting availability."
trap: "Assuming logical controls are enough. A badge reader that lets a second person follow through, or a data centre with no fire or power protection, undermines everything built on top."
quiz:
  - question: "A secure data centre uses a badge reader on the door. Which additional control BEST prevents an unauthorised person from tailgating in behind an authorised one?"
    options:
      - "A stronger password on the badge system"
      - "A mantrap or access-control vestibule that admits one authenticated person at a time"
      - "A longer badge number"
      - "More frequent badge reissue"
    answer: 1
    explanation: "Tailgating, an unauthorised person following an authorised one through a door, defeats a simple badge reader. A mantrap or access-control vestibule admits one authenticated person at a time, physically preventing a second person from slipping through. Turnstiles, guards and anti-passback controls address the same gap."
    whyWrong:
      - "A stronger password on the badge system does nothing to stop a person physically following another through the door."
      - ""
      - "The length of the badge number is irrelevant to someone tailgating a valid holder."
      - "Reissuing badges more often does not prevent a second person walking through on someone else's entry."
  - question: "Why is physical security considered part of protecting information assets?"
    options:
      - "It is not; only logical controls protect information"
      - "Because physical access can bypass logical controls entirely, someone with the hardware can steal or destroy data directly"
      - "Because physical controls are cheaper than logical ones"
      - "Because auditors prefer physical evidence"
    answer: 1
    explanation: "Logical controls protect data through the system; physical access goes around them. Someone who can reach the hardware can remove a disk, steal a device, plug in, or destroy equipment, regardless of how strong the passwords and permissions are. Physical security is a layer of defence in depth, and without it the logical layer can be bypassed."
    whyWrong:
      - "Information is not protected by logical controls alone; physical access can defeat them directly."
      - ""
      - "Relative cost is not why physical security matters; the ability to bypass logical controls is."
      - "Auditor preference is irrelevant; the reason is that physical access circumvents logical protection."
  - question: "What is the PRIMARY purpose of environmental controls such as fire suppression, climate control and uninterruptible power?"
    options:
      - "To reduce the electricity bill"
      - "To protect the availability and integrity of systems from environmental threats like fire, heat and power loss"
      - "To improve the appearance of the data centre"
      - "To satisfy the building's insurance paperwork"
    answer: 1
    explanation: "Environmental controls protect equipment, and therefore the availability and integrity of the information it holds, from physical threats: fire, overheating, humidity, water, and power interruption. Appropriate fire detection and suppression, climate control, and uninterruptible power with backup generation keep systems running and undamaged, which is why they belong in protecting information assets."
    whyWrong:
      - "Saving on electricity is not the purpose; protecting systems from environmental harm is."
      - ""
      - "Appearance is irrelevant to the protective function of environmental controls."
      - "Insurance paperwork may benefit, but the purpose is to keep systems available and undamaged."
---

## The situation

The data centre has a badge reader, and access to it is treated as solved. But you watch someone hold the door open for a colleague whose hands are full, and a second person walks in unbadged. Inside, there is no water detection under the raised floor, the air conditioning is a single unit, and the "uninterruptible" power supply has not been tested in years. Every login to those servers is strongly controlled. Getting to the servers is not.

Most of Domain 5 is logical. This lesson is the physical and environmental layer that everything logical sits on.

## Physical access can bypass everything logical

Logical controls, passwords, permissions, encryption, protect data **through the system**. Physical access goes **around** them. Someone who can reach the hardware can remove a disk, walk off with a device, plug into a port, or simply destroy equipment, and none of the logical controls stop them. That is why **physical security is part of protecting information assets**: it is a layer of **defence in depth**, and without it the logical layer can be bypassed entirely.

So secure facilities use layered physical controls: perimeter security, guards and CCTV, badge or biometric access to sensitive areas, visitor logs and escorts, and locked cabinets for the most sensitive equipment.

## Tailgating defeats the badge reader

The scene at the door is the exam's favourite physical-security point. A badge reader authenticates one person, but it does nothing to stop a **second** person **tailgating** (or piggybacking) through on that entry, exactly what you watched happen. The control that addresses this is a **mantrap** or **access-control vestibule**: a small enclosure that admits **one authenticated person at a time**, so a second cannot slip through. Turnstiles, anti-passback rules, and guards serve the same purpose.

When a question describes unauthorised entry behind an authorised person, a stronger password or a longer badge number is never the answer, those do not address a human following another through a door. The mantrap, admitting one person per authentication, does.

## Environmental controls protect availability

Physical threats are not only intruders. Fire, heat, humidity, water and power loss can destroy equipment and take systems down, so **environmental controls** protect the **availability and integrity** of everything the equipment holds:

- **Fire detection and suppression** appropriate to a computer room, so a fire is caught and extinguished without destroying the equipment.
- **Climate control (HVAC)** to keep temperature and humidity within the range hardware tolerates.
- **Uninterruptible power (UPS)** plus backup **generators**, so a power cut does not drop systems, connecting directly to the continuity and availability themes of Domain 4.
- **Water detection**, especially under raised floors, so a leak is caught before it reaches equipment.

The data centre in the scenario fails several of these, and each is a route to an outage or data loss that no logical control would prevent.

## Where practitioners go wrong

Two instincts cost marks. The first is assuming logical controls are the whole of security; physical access bypasses them, so a mantrap against tailgating and controlled facility access are real, necessary controls. The second is overlooking the environmental layer, fire, climate, power, water, as facilities management rather than security. Those controls protect the availability and integrity of the systems, and therefore the information, which is squarely part of protecting information assets.
