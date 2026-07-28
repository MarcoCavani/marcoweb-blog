---
title: "Endpoint, Mobile and Cloud Security"
description: "Moving to the cloud does not move the accountability for your data. The exam tests the shared responsibility model, the risk of data on personal devices, and why a misconfigured bucket is your fault."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 13
minutes: 8
gated: false
taskStatement: "Evaluate whether endpoints, mobile devices and cloud services are secured, with responsibility clearly understood."
objectives:
  - "Explain the cloud shared responsibility model."
  - "Identify the risk of organisational data on personal mobile devices."
  - "Recognise that cloud adoption does not transfer accountability for data."
trap: "Assuming the cloud provider secures everything. Under shared responsibility, the customer is responsible for their own data, configuration and access, and a misconfiguration is the customer's failure."
quiz:
  - question: "Under the cloud shared responsibility model, who is responsible for securing the customer's data and its access configuration?"
    options:
      - "The cloud provider is responsible for everything"
      - "The customer, while the provider secures the underlying cloud infrastructure"
      - "Neither party; cloud data secures itself"
      - "The provider, unless the customer opts out"
    answer: 1
    explanation: "In the shared responsibility model, the provider secures the cloud infrastructure (the physical facilities, hardware and core services), while the customer is responsible for security IN the cloud: their data, its classification, access management, and configuration. The split varies by service model, but responsibility for the customer's own data and access always stays with the customer."
    whyWrong:
      - "The provider secures the infrastructure, not the customer's data, configuration and access."
      - ""
      - "Cloud data does not secure itself; responsibility is shared, not absent."
      - "There is no opt-out that shifts data-and-configuration responsibility onto the provider."
  - question: "What is the GREATEST security risk of allowing organisational data on employees' personal mobile devices (BYOD)?"
    options:
      - "Personal devices have smaller screens"
      - "Organisational data sits on a device the organisation does not fully control, risking loss, leakage, or exposure if the device is lost or compromised"
      - "Employees will use more mobile data"
      - "Personal devices cannot run business applications"
    answer: 1
    explanation: "With BYOD, corporate data resides on a device the organisation neither owns nor fully controls, so it can be lost with the device, mixed with personal apps, or exposed if the device is compromised, often with no ability to enforce controls or wipe the data. Mobile device management and containerisation exist to mitigate exactly this."
    whyWrong:
      - "Screen size is a usability matter, not a security risk."
      - ""
      - "Data usage is a cost concern, unrelated to protecting organisational information."
      - "Personal devices can run business applications; the risk is the data on an uncontrolled device."
  - question: "An organisation moves sensitive data to a cloud service and leaves a storage bucket publicly accessible, exposing the data. Who is accountable?"
    options:
      - "The cloud provider, because it hosts the data"
      - "The organisation, because securing its data and configuration in the cloud is its responsibility"
      - "No one, since cloud misconfigurations are unavoidable"
      - "The individual employee who uploaded the file"
    answer: 1
    explanation: "A publicly exposed bucket is a customer configuration failure, squarely within the customer's half of the shared responsibility model. Moving data to the cloud does not transfer accountability for protecting it, exactly as outsourcing did not transfer accountability in Domain 2. The provider secured the infrastructure; the organisation misconfigured its own access."
    whyWrong:
      - "The provider secures the infrastructure; it does not set the customer's access configuration."
      - ""
      - "Misconfigurations are preventable through proper configuration management and review; they are not unavoidable."
      - "Accountability rests with the organisation, not one individual; the org owns its cloud configuration and oversight."
---

## The situation

The company has moved its customer data to a cloud platform and considers security handled, "the provider takes care of that." Staff access it from personal phones with no controls, and a storage bucket has been left open to the internet for months. When the exposure is found, the first instinct is to blame the cloud provider. But the provider secured the building and the hardware. The open door was the organisation's own.

Endpoints, mobile devices and the cloud are where data now lives, and each carries a responsibility that is easy to misplace.

## Endpoints

**Endpoints**, laptops, desktops, servers, are where users and data meet, and they are a primary target. Protecting them combines several controls: **anti-malware and endpoint detection**, timely **patching** (from Domain 4), **hardening** (removing unnecessary services and default accounts), **disk encryption** so a lost device does not leak its data, and a **host firewall**. Endpoints are not low-risk background devices; they are frequently where an attack begins, as the phishing lessons showed.

## Mobile and BYOD

Mobile devices extend the endpoint problem to hardware the organisation may not own. **Bring your own device (BYOD)** is the sharp case: organisational data sitting on an employee's **personal** phone, a device the organisation does not fully control. The data can be lost with the device, mixed with personal apps, or exposed if the phone is compromised, often with no way to enforce controls or remove the data.

**Mobile device management (MDM)** and **containerisation** mitigate this: separating corporate data into a managed container, enforcing encryption and passcodes, and enabling **remote wipe** of the corporate data if the device is lost. The risk to weigh is always the **organisational data on an uncontrolled device**, not the device itself.

## The cloud shared responsibility model

The most tested cloud concept is the **shared responsibility model**, and the open bucket is its textbook failure. Responsibility is **split**:

- The **provider** secures the cloud **infrastructure**: the physical facilities, hardware, and core platform, security **of** the cloud.
- The **customer** is responsible for security **in** the cloud: their **data**, its classification, **access management**, and **configuration**.

The exact line shifts with the service model, but the customer's own **data, access and configuration** are **always** the customer's responsibility. A publicly exposed storage bucket is a **customer configuration failure**, not a provider one. When a question asks who is responsible for the customer's data and access in the cloud, it is the customer.

## Cloud adoption does not move accountability

Underneath the shared responsibility model is a principle straight from Domain 2's third-party lesson: **moving to the cloud does not transfer accountability for your data.** You can outsource the infrastructure and the running of the platform, but the obligation to classify, protect and correctly configure access to your own data stays with you. "The provider takes care of security" is the same wrong answer as "we outsourced it, so the risk is theirs." The provider secures the cloud; you remain accountable for what you put in it and how you configure it.

## Where practitioners go wrong

Two instincts cost marks. The first is assuming the cloud provider secures everything; under shared responsibility the customer owns their data, access and configuration, and a misconfiguration like an open bucket is the customer's failure. The second is treating personal mobile devices as harmless; organisational data on a device the organisation cannot control is the risk, and MDM, containerisation and remote wipe are how it is managed. In both, the accountability for the data does not move just because the hardware or platform does.
