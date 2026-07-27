---
title: "System Resilience and High Availability"
description: "Resilience keeps a system running through a component failure; recovery brings it back after a disaster. The exam tests that distinction, and the crucial point that RAID and redundancy are not a backup."
course: "cisa-domain-4"
module: "Domain 4: IS Operations and Business Resilience"
domain: 4
order: 13
minutes: 7
gated: false
taskStatement: "Evaluate whether systems are designed to withstand component failure, and distinguish resilience from recovery."
objectives:
  - "Explain how redundancy and failover eliminate single points of failure."
  - "Explain why RAID and redundancy are not a substitute for backup."
  - "Distinguish resilience from disaster recovery."
trap: "Treating redundancy such as RAID or replication as a backup. It protects against hardware failure, but deletion, corruption and ransomware propagate to the redundant copy instantly."
quiz:
  - question: "What is the PRIMARY purpose of redundancy and failover in a high-availability design?"
    options:
      - "To reduce the cost of hardware"
      - "To eliminate single points of failure, so the system keeps operating when a component fails"
      - "To replace the need for a disaster recovery plan"
      - "To speed up software development"
    answer: 1
    explanation: "High availability is achieved by removing single points of failure through redundancy, duplicate components, clustering, failover, load balancing, so that if one component fails, another takes over and the service keeps running. The goal is continuity of operation through component failures, minimising downtime."
    whyWrong:
      - "Redundancy adds cost rather than reducing it; the benefit is availability, not cheaper hardware."
      - ""
      - "Resilience reduces the need to invoke recovery but does not replace a DR plan for larger disasters."
      - "Availability design has nothing to do with development speed."
  - question: "Why is a RAID array or real-time replication NOT a substitute for backups?"
    options:
      - "Because RAID is slower than backup"
      - "Because it protects against hardware failure, but data deletion, corruption or ransomware are replicated to the redundant copy immediately"
      - "Because RAID cannot store large volumes of data"
      - "Because replication is only for databases"
    answer: 1
    explanation: "Redundancy protects against a component failing, a disk dies and its mirror carries on. But it does not protect the data itself: if a file is deleted, corrupted, or encrypted by ransomware, that change is faithfully mirrored or replicated to the redundant copy at once. A backup captures a separate point-in-time copy that a live change cannot reach, which is why the two solve different problems."
    whyWrong:
      - "Speed is irrelevant; the issue is that redundancy copies bad changes as faithfully as good ones."
      - ""
      - "Capacity is not the point; even unlimited redundancy still propagates corruption and deletion."
      - "Replication is not database-only, and regardless of scope it still mirrors destructive changes."
  - question: "How does system resilience differ from disaster recovery?"
    options:
      - "They are the same thing"
      - "Resilience keeps a system operating through component failures; disaster recovery restores service after a disruption that resilience could not absorb"
      - "Resilience applies only to software, disaster recovery only to hardware"
      - "Disaster recovery happens before an incident, resilience after"
    answer: 1
    explanation: "Resilience is built-in tolerance: redundancy and failover that keep the system running when something fails, so many incidents never become outages. Disaster recovery is what restores service after a disruption large enough to overwhelm that tolerance, a site loss, a major failure. Resilience reduces how often recovery is needed; it does not remove the need for it."
    whyWrong:
      - "They are complementary but distinct: withstanding failure versus recovering from disaster."
      - ""
      - "Both span hardware and software; the split is tolerate-in-place versus recover-after, not equipment type."
      - "The timing is reversed: resilience acts continuously in advance, recovery acts after the disruption."
---

## The situation

The infrastructure team is proud of the new setup: mirrored disks, clustered servers, real-time replication to a second array. When you ask about backups, the answer is that they are not really needed anymore, everything is replicated, so nothing can be lost. A week later a user deletes a critical folder, and the deletion replicates to the mirror in seconds. There is nothing to restore it from.

Resilience and recovery are both here, and the team has confused one for the other. This lesson keeps them apart.

## Resilience: keep running through failure

**System resilience**, and its goal of **high availability**, is about keeping a system operating **through** component failures. It is achieved by removing **single points of failure**:

- **Redundancy**: duplicate components, power supplies, network paths, disks, so no single one stops the system.
- **Failover and clustering**: a standby component or node takes over automatically when its partner fails.
- **Load balancing**: work is spread across multiple servers, and the loss of one is absorbed by the rest.
- **RAID**: disk redundancy, so a failed drive does not lose the data or stop the system.

The result is that many failures never become outages: a disk dies and its mirror carries on, a server fails and the cluster picks up the load. Resilience reduces both the likelihood and the impact of an incident, which is why it belongs alongside recovery in this domain.

## Redundancy is not backup

Here is the point the proud infrastructure team missed, and the exam loves it. **Redundancy protects against a component failing. It does not protect the data.**

Redundancy and replication faithfully copy **whatever happens** to the data, good or bad. If a file is deleted, the deletion replicates. If data is corrupted, the corruption mirrors. If ransomware encrypts the files, the encryption is dutifully written to the redundant copy too, often within seconds. RAID keeps you running when a disk dies; it does nothing when the problem is the data itself.

A **backup** is different in kind: it is a **separate, point-in-time copy** that a live change cannot reach. That is exactly what lets you go back to before the deletion or the corruption. So resilience and backup solve different problems, and one never substitutes for the other. When a scenario proposes replacing backups with RAID or replication, the deletion-and-corruption gap is the answer.

## Resilience is not recovery

The domain pairs resilience with disaster recovery because they are complementary, and the exam checks that you distinguish them:

- **Resilience** is built-in tolerance that keeps the system running *through* a failure, so many incidents never become outages.
- **Disaster recovery**, the next lesson, is what *restores* service after a disruption large enough to overwhelm that tolerance, a site loss, a fire, a major failure.

Resilience reduces how often you need to invoke recovery; it does not remove the need for it. A resilient system still needs a DR plan for the disaster that redundancy cannot absorb, and it still needs backups for the data that redundancy cannot protect.

## Where practitioners go wrong

The costly instinct is treating redundancy as if it were backup, "it's all replicated, so we can't lose anything." Replication copies destruction as faithfully as it copies data; deletion, corruption and ransomware reach the mirror instantly, and only a separate backup can undo them. The second slip is conflating resilience with recovery. Building failure-tolerance in is excellent and reduces incidents, but it is not a disaster recovery plan, and the two are tested as distinct ideas.
