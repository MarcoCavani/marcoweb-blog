---
title: "Cryptography Fundamentals"
description: "Encryption hides data, hashing proves it has not changed, and they are not the same thing. The exam tests symmetric versus asymmetric keys, what hashing provides, and where non-repudiation comes from."
course: "cisa-domain-5"
module: "Domain 5: Protection of Information Assets"
domain: 5
order: 11
minutes: 8
gated: false
videoId: "DMQMM6XKFT8"
taskStatement: "Evaluate whether cryptography is used appropriately for confidentiality, integrity, authentication and non-repudiation."
objectives:
  - "Distinguish symmetric from asymmetric encryption."
  - "Explain what hashing provides and why it is not encryption."
  - "Identify the source of non-repudiation."
trap: "Treating hashing as encryption. Hashing is one-way and provides integrity, not confidentiality; encryption is reversible and provides confidentiality. The exam relies on this confusion."
quiz:
  - question: "What is the key difference between symmetric and asymmetric encryption?"
    options:
      - "Symmetric is more secure than asymmetric"
      - "Symmetric uses a single shared secret key for both encryption and decryption; asymmetric uses a public/private key pair"
      - "Symmetric is used only for hashing"
      - "Asymmetric does not use keys"
    answer: 1
    explanation: "Symmetric encryption uses one shared secret key to both encrypt and decrypt; it is fast but creates a key-distribution problem, since the secret must be shared safely. Asymmetric encryption uses a mathematically linked public/private key pair, which solves distribution (the public key can be shared openly) at the cost of being slower. Systems often combine both."
    whyWrong:
      - "Neither is simply more secure; they solve different problems, and strength depends on the algorithm and key length."
      - ""
      - "Symmetric encryption is for encryption, not hashing; hashing is a separate one-way function."
      - "Asymmetric encryption is defined by its key pair; it very much uses keys."
  - question: "What does a cryptographic hash function PRIMARILY provide?"
    options:
      - "Confidentiality, by hiding the contents of data"
      - "Integrity, by producing a fixed value that changes if the data changes, without being reversible"
      - "A faster way to encrypt large files"
      - "A way to recover the original data from the hash"
    answer: 1
    explanation: "A hash is a one-way function that turns data into a fixed-length value; the same input always gives the same hash, and any change to the input changes the hash. This lets you detect whether data has been altered, which is integrity. It is not encryption: you cannot reverse a hash to recover the data, and it provides no confidentiality."
    whyWrong:
      - "Hashing does not hide data or provide confidentiality; the hash is not a concealed version of the input."
      - ""
      - "Hashing is not a form of encryption and does not produce recoverable ciphertext."
      - "Hashing is one-way by design; the original data cannot be recovered from the hash."
  - question: "Which cryptographic mechanism provides non-repudiation, so a sender cannot later deny having sent a message?"
    options:
      - "Symmetric encryption with a shared key"
      - "A digital signature created with the sender's private key"
      - "A hash of the message alone"
      - "A firewall rule permitting the traffic"
    answer: 1
    explanation: "A digital signature is created with the sender's private key, which only they hold, and verified with their public key. Because only the sender could have produced it, they cannot credibly deny sending the message, that is non-repudiation, and it also confirms the message's authenticity and integrity. A shared symmetric key cannot provide it, since both parties hold the same key."
    whyWrong:
      - "With a shared symmetric key, either party could have produced the result, so neither can be uniquely bound to it."
      - ""
      - "A hash alone shows integrity but is not tied to a specific sender's identity, so it cannot prove who sent it."
      - "A firewall rule controls traffic flow and has nothing to do with proving who sent a message."
---

## The situation

A developer tells you the passwords in the database are "encrypted", and that the same system provides message integrity and proves who sent what, all with one shared key everyone has. Three different cryptographic ideas have been blurred into one, and the blurring is exactly what the exam probes. Passwords should be **hashed**, not reversibly encrypted; integrity and sender-proof come from different mechanisms; and a key everyone shares cannot prove who did anything.

Cryptography is a heavily tested area, and most of the marks come from keeping a few distinctions straight.

## What cryptography provides

Cryptography delivers four things, and it helps to name them:

- **Confidentiality**: keeping data secret, through **encryption**.
- **Integrity**: detecting whether data has changed, through **hashing**.
- **Authentication** and **non-repudiation**: proving who sent something and stopping them denying it, through **digital signatures**.

No single mechanism provides all of these, which is why the developer's "one thing does everything" is wrong.

## Symmetric versus asymmetric

Encryption comes in two forms:

- **Symmetric** encryption uses **one shared secret key** to both encrypt and decrypt. It is **fast**, which suits bulk data, but it has a **key-distribution problem**: the secret has to be shared with every party securely, and anyone who has it can both encrypt and decrypt.
- **Asymmetric** encryption uses a **public/private key pair**. What one key locks, only the other can unlock. This **solves distribution**, the public key can be published openly, while the private key stays secret, but it is **slower**.

In practice systems combine them: asymmetric to exchange a key securely, then symmetric for the bulk of the data. When a question contrasts them, symmetric is one shared key, asymmetric is a key pair.

## Hashing is not encryption

The most reliable trap in this area is treating **hashing** as encryption. A hash is a **one-way** function: it turns any input into a fixed-length value, the same input always produces the same hash, and any change to the input changes the hash. That lets you **detect alteration**, which is **integrity**.

But a hash is **not** encryption. You cannot reverse it to recover the original data, and it provides **no confidentiality**, the hash is not a hidden version of the input. This is precisely why **passwords are hashed, not encrypted**: the system never needs to recover the password, only to check whether a login attempt hashes to the same value. When a question asks what hashing provides, it is integrity, and the giveaway that it is not encryption is that it cannot be reversed.

## Where non-repudiation comes from

**Non-repudiation**, a sender being unable to deny they sent something, comes from a **digital signature** created with the **sender's private key**. Because only the sender holds that key, only they could have produced the signature, so they cannot credibly deny it, and the recipient, verifying with the sender's **public** key, also confirms the message is authentic and unaltered.

A **shared symmetric key cannot** provide non-repudiation, because both parties hold the same key, so either could have produced the result and neither is uniquely bound to it. This is why the developer's single shared key fails at proving who sent what. Private-key signatures, covered further in the next lesson on PKI, are what tie an action to one identity.

## Where practitioners go wrong

Two instincts cost marks. The first is calling hashing "encryption"; hashing is one-way and gives integrity, encryption is reversible and gives confidentiality, and passwords are hashed precisely because they should never be recoverable. The second is expecting one mechanism, or one shared key, to deliver everything. Confidentiality, integrity and non-repudiation come from different tools, and non-repudiation in particular needs a private key only one party holds.
