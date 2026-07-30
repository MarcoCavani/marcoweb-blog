---
title: "PKI and Key Management"
description: "Cryptography rarely fails at the algorithm; it fails at the keys. The exam tests the role of a certificate authority, which key signs and which verifies, and why key management is the hard part."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 12
minutes: 8
gated: false
videoId: "mdp0dh2iRgI"
taskStatement: "Evaluate whether public key infrastructure and key management establish and preserve trust in encryption and signatures."
objectives:
  - "State the role of a certificate authority in PKI."
  - "Identify which key signs and which key verifies."
  - "Explain why key management, not algorithm strength, is the usual point of failure."
trap: "Focusing on algorithm strength while ignoring key management. Protecting private keys, and revoking compromised ones, is where cryptographic systems actually fail."
quiz:
  - question: "What is the role of a certificate authority (CA) in a public key infrastructure?"
    options:
      - "To encrypt all of an organisation's data"
      - "To act as a trusted third party that issues digital certificates binding a public key to a verified identity"
      - "To store users' private keys for them"
      - "To detect intrusions on the network"
    answer: 1
    explanation: "A certificate authority is a trusted third party that verifies an identity and issues a digital certificate binding that identity to a public key. Others trust the certificate because they trust the CA that signed it. This is what lets you trust that a public key really belongs to who it claims to, and it makes the CA a critical trust anchor."
    whyWrong:
      - "A CA issues and vouches for certificates; it does not encrypt the organisation's data itself."
      - ""
      - "Private keys must stay with their owner; a CA does not, and should not, hold users' private keys."
      - "Intrusion detection is a network control, unrelated to the CA's role of vouching for identities."
  - question: "To send a message that only the intended recipient can read, which key does the sender use to encrypt it?"
    options:
      - "The sender's private key"
      - "The recipient's public key"
      - "The recipient's private key"
      - "A shared password"
    answer: 1
    explanation: "To ensure only the recipient can read the message, the sender encrypts with the recipient's PUBLIC key; only the matching private key, held solely by the recipient, can decrypt it. (For a signature it is the reverse: the sender signs with their own private key, and anyone verifies with the sender's public key.) Matching the right key to the goal is the exam's focus."
    whyWrong:
      - "The sender's private key is used to sign, not to encrypt for a recipient's eyes only."
      - ""
      - "The recipient's private key is what decrypts; the sender does not have it and cannot encrypt with it."
      - "A shared password is symmetric and not how asymmetric confidentiality to a specific recipient works."
  - question: "In practice, where do cryptographic systems MOST often fail?"
    options:
      - "The encryption algorithm is broken by brute force"
      - "Key management: private keys are poorly protected, not rotated, or not revoked when compromised"
      - "The data is too large to encrypt"
      - "Hashing is used somewhere in the system"
    answer: 1
    explanation: "Modern algorithms with adequate key lengths are not realistically broken by brute force. Systems fail at key management: private keys stored insecurely, shared, never rotated, or not revoked after compromise. A strong algorithm protecting a private key that anyone can copy provides no real security, which is why key management is the discipline that matters."
    whyWrong:
      - "Well-chosen modern algorithms are not the practical weak point; brute-forcing them is infeasible."
      - ""
      - "Data size is an operational consideration, not the source of cryptographic failure."
      - "Using hashing is normal and appropriate; it is not a failure mode in itself."
---

## The situation

An organisation is proud of using strong, modern encryption everywhere. Then you look closer: the private key for its main certificate is sitting in a shared folder several teams can read, a certificate that expired last month is still in use, and there is no process to revoke a key if it is exposed. The algorithm is excellent. Everything around the keys is broken, and that is where the security actually lives.

The previous lesson covered what cryptography does. This one covers the infrastructure that makes it trustworthy, and the part that most often fails.

## PKI and the certificate authority

**Public key infrastructure (PKI)** is the system of certificates, authorities and processes that lets people trust that a public key really belongs to who it claims to. At its centre is the **certificate authority (CA)**: a **trusted third party** that verifies an identity and issues a **digital certificate** binding that identity to a public key.

Trust flows from the CA. You trust a website's or a person's public key because you trust the CA that signed its certificate. That makes the CA a **critical trust anchor**: if a CA is compromised, every certificate it issued becomes suspect, because the attacker could mint trusted certificates for identities they do not own. A CA issues and vouches for certificates; it does not encrypt your data, and it does not, and must not, hold users' **private** keys.

## Which key does what

The exam repeatedly checks that you know which key is used for which purpose, because the two asymmetric operations are mirror images:

- **To encrypt for confidentiality** (only the recipient can read it): the sender encrypts with the **recipient's public** key; only the recipient's **private** key can decrypt.
- **To sign for authenticity and non-repudiation**: the sender signs with **their own private** key; anyone verifies with the sender's **public** key.

The rule of thumb: **you sign with your private key; you encrypt to someone with their public key.** Public keys are shareable and are used to send *to* someone or to *verify* them; private keys are secret and are used to *read* what was sent to you or to *sign* as yourself. Getting the key backwards is a classic wrong answer.

## Key management is the hard part

Here is the lesson's real point, and the scenario's failure. Modern algorithms with adequate key lengths are **not** realistically broken by brute force. Cryptographic systems fail at **key management**: the generation, distribution, **storage**, rotation, revocation and destruction of keys.

- **Protecting private keys** is paramount, a private key anyone can copy, like the one in the shared folder, offers no real security however strong the algorithm.
- **Rotation** replaces keys periodically so a compromise has a limited window.
- **Revocation** invalidates a key or certificate that is compromised or superseded, published through mechanisms like a certificate revocation list, so others stop trusting it. No revocation process, as in the scenario, means a stolen key stays trusted indefinitely.
- **Expiry** must be handled, an expired certificate still in use is a control that has quietly lapsed.

When a question asks where cryptography fails in practice, it is key management, not the algorithm. A strong lock on a door whose key is left under the mat is not secure.

## Where practitioners go wrong

Two instincts cost marks. The first is judging cryptographic security by algorithm strength; the algorithm is rarely the weak point, key management is, so protecting private keys and revoking compromised ones is what actually matters. The second is confusing which key does what: you encrypt to a recipient with their public key and sign with your own private key, and reversing them is the exam's favourite trap.
