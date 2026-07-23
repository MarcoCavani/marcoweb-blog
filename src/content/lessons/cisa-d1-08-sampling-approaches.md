---
title: "Choosing a Sampling Approach"
description: "Statistical or judgemental, attribute or variable. The choice determines what you are allowed to say about the population when you are finished."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 8
minutes: 8
gated: false
videoId: "xPBh0rRnkE4"
taskStatement: "Select a sampling approach appropriate to the audit objective and the conclusion required."
objectives:
  - "Distinguish statistical from non-statistical sampling by what each permits you to conclude."
  - "Select attribute or variable sampling according to whether the question is about rate or amount."
  - "Identify when stop-or-go and discovery sampling are appropriate."
trap: "Projecting a judgemental sample to the population. If the selection was not random, the result describes the sample only, however large it was."
quiz:
  - question: "An IS auditor wants to conclude on the rate at which change approvals were missing across the whole population of changes. Which sampling approach is MOST appropriate?"
    options:
      - "Judgemental sampling of the highest-risk changes"
      - "Statistical attribute sampling"
      - "Variable sampling"
      - "Discovery sampling"
    answer: 1
    explanation: "Attribute sampling concludes on the rate of occurrence of a condition, which is exactly what a deviation rate is. Making it statistical is what permits the result to be projected to the population with a measurable confidence level."
    whyWrong:
      - "Judgemental selection of high-risk items produces useful findings but cannot be projected, because the sample was deliberately not representative."
      - ""
      - "Variable sampling estimates a monetary amount or quantity. The question asks about a rate of occurrence, not an amount."
      - "Discovery sampling is designed to find at least one instance of a rare and critical condition, typically fraud. It does not estimate a rate."
  - question: "An IS auditor suspects that a small number of fraudulent payment records may exist in a large population and wants to find at least one if any exist. Which approach is MOST appropriate?"
    options:
      - "Attribute sampling"
      - "Discovery sampling"
      - "Stratified variable sampling"
      - "Stop-or-go sampling"
    answer: 1
    explanation: "Discovery sampling is designed for exactly this situation: a critical condition expected to occur at a very low rate, where the objective is to find at least one occurrence rather than to estimate how often it occurs."
    whyWrong:
      - "Attribute sampling estimates a deviation rate. When the expected rate approaches zero and any single instance is critical, it is the wrong tool."
      - ""
      - "Stratification helps when the population contains items of widely differing value, but the objective here is detection of a rare event, not estimation of an amount."
      - "Stop-or-go is designed to minimise sample size when the auditor expects few errors and wants to stop early once the control is supported. It is not aimed at finding rare critical items."
  - question: "An IS auditor selects 30 records by choosing those with the largest transaction values. What is the PRIMARY limitation of the results?"
    options:
      - "The sample size is too small to be meaningful"
      - "The results cannot be statistically projected to the population"
      - "The sample will contain too many exceptions"
      - "The approach requires management approval"
    answer: 1
    explanation: "Selecting by value is a judgemental, non-random selection. It may be an excellent way to obtain coverage of monetary value, but because every item did not have a known chance of selection, the result cannot be projected to the untested remainder."
    whyWrong:
      - "Thirty items may be perfectly adequate. The limitation is the selection method, not the count."
      - ""
      - "There is no reason to expect more exceptions in high-value items, and even if there were, that would be a finding rather than a limitation of the method."
      - "Sampling method is an auditor's professional judgement. It does not require the auditee's approval."
---

## The situation

You test thirty changes. All thirty had approvals. Your report says change management is operating effectively across the four thousand changes in the period.

Whether that sentence is defensible depends entirely on how those thirty were chosen, and the exam cares about this more than almost any other aspect of sampling.

## Statistical or non-statistical

**Statistical sampling** uses random selection, so every item in the population has a known, non-zero chance of being selected. This is what permits **projection**: you can state a conclusion about the whole population with a measurable confidence level and a quantified sampling risk.

**Non-statistical, or judgemental, sampling** selects items by auditor judgement: the largest, the riskiest, the ones from the month the new team took over. It is legitimate, often efficient, and frequently finds more than a random sample would. What it cannot do is support a projected conclusion. The result describes the items tested.

The exam's test of this is blunt: if a question describes a judgemental selection and an option projects the result to the population, that option is wrong. Sample size does not fix it. A thousand judgementally selected items still cannot be projected.

## Attribute or variable

**Attribute sampling** answers questions of **rate**: how often does this condition occur? Deviation rates, exception rates, compliance rates. Almost all controls testing is attribute sampling, because "did the control operate" is a yes or no property of each item.

**Variable sampling** answers questions of **amount**: what is the total value, or the average, or the misstatement? It estimates a quantity rather than a frequency, and it belongs to substantive testing.

The shortcut: compliance testing tends toward attribute sampling, substantive testing toward variable sampling.

## Specialised approaches worth recognising

**Stop-or-go sampling** is used when the auditor expects very few errors. It permits stopping early once enough clean items support the conclusion, minimising sample size. It reduces effort when controls are believed to be working.

**Discovery sampling** is used when the condition is rare and critical, typically fraud, and the objective is to find at least one instance if any exist. It does not estimate a rate.

**Stratified sampling** divides a population into sub-populations of similar characteristics, usually value bands, and samples each. It reduces the sample size needed for a given precision when the population contains items of widely varying value.

**Cell or systematic sampling** selects every nth item after a random start. It is statistical provided the start is random and the population has no periodic pattern that aligns with the interval.

## Where practitioners go wrong

The dominant error is quiet projection. An auditor selects the twenty five most significant items, finds two exceptions, and writes that eight per cent of changes lacked approval. That sentence is not supported, and on the exam it is the trap in nearly every judgemental sampling question.

The second error is choosing variable sampling for a controls question because money is involved. The presence of a monetary amount in the scenario does not make the question about amount. If you are asking how often a control failed, that is a rate, and it is attribute sampling regardless of what the transactions are worth.
