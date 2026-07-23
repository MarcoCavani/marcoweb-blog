---
title: "Sample Size and Evaluating Exceptions"
description: "What actually moves sample size, and what to do with the exception you found, which is a harder question than most auditors treat it as."
course: "cisa-domain-1"
module: "Domain 1: The IS Audit Process"
domain: 1
order: 9
minutes: 8
gated: false
videoId: "1uVtckkgcLM"
taskStatement: "Determine an appropriate sample size and evaluate the effect of exceptions on the audit conclusion."
objectives:
  - "Predict the direction in which each sampling parameter moves sample size."
  - "Distinguish tolerable deviation rate from expected deviation rate."
  - "Determine the correct response to an exception before treating it as isolated."
trap: "Writing off an exception as a one-off because management explains it. An exception is a deviation until the auditor establishes its cause, and the cause determines whether more testing is needed."
quiz:
  - question: "An IS auditor decides to increase the confidence level from 90% to 95% for a controls test. All else equal, the required sample size will:"
    options:
      - "Decrease"
      - "Increase"
      - "Remain unchanged"
      - "Depend on the population size"
    answer: 1
    explanation: "A higher confidence level means the auditor accepts less sampling risk, and reducing the risk of an incorrect conclusion requires more evidence. Confidence level and sample size move in the same direction."
    whyWrong:
      - "This inverts the relationship. Greater certainty cannot be obtained from less evidence."
      - ""
      - "Confidence level is a direct driver of sample size, so it cannot leave it unchanged."
      - "For large populations, population size has very little effect on sample size, which surprises candidates. The parameters that matter are confidence, tolerable rate and expected rate."
  - question: "During testing of 40 change records, the auditor finds one change deployed without approval. Management explains that the change was an emergency fix and that the approval was obtained verbally. What should the auditor do NEXT?"
    options:
      - "Accept the explanation and treat the item as compliant"
      - "Determine whether the emergency change process permits verbal approval and whether it was followed"
      - "Extend the sample by another 40 records"
      - "Report a control failure in change management"
    answer: 1
    explanation: "The auditor evaluates the exception against the control as designed. If an emergency path exists and was followed, this may be compliant with a different route. If it does not exist, or was not followed, it is a genuine deviation. Either way the cause must be established before deciding anything else."
    whyWrong:
      - "Accepting an explanation without testing it against the documented process substitutes management's assertion for audit evidence."
      - ""
      - "Extending the sample may become appropriate, but not before the auditor understands whether this is a deviation at all and what caused it."
      - "Reporting a failure before establishing whether the emergency process was legitimately used risks a finding that does not survive management review."
  - question: "Which of the following would result in the LARGEST required sample size?"
    options:
      - "High tolerable deviation rate, low expected deviation rate"
      - "Low tolerable deviation rate, high expected deviation rate"
      - "High tolerable deviation rate, high expected deviation rate"
      - "Low tolerable deviation rate, low expected deviation rate"
    answer: 1
    explanation: "Sample size grows as the gap between tolerable and expected rates narrows. A low tolerable rate with a high expected rate is the narrowest gap, meaning the auditor needs the most evidence to distinguish an acceptable control from an unacceptable one."
    whyWrong:
      - "A high tolerable rate with a low expected rate is the widest gap, and produces the smallest sample."
      - ""
      - "Both being high leaves a moderate gap, so the sample is larger than option one but smaller than the narrow-gap case."
      - "Both being low also leaves a moderate gap, and does not produce the largest requirement."
---

## The situation

You need a sample size. The population is four thousand changes. Your instinct says take more than you would from four hundred.

That instinct is close to wrong, and the exam likes testing it.

## What actually drives sample size

Three parameters do most of the work.

**Confidence level.** How certain you want to be that the sample supports the conclusion. Higher confidence means accepting less sampling risk, and that requires more items. Confidence and sample size move together.

**Tolerable deviation rate.** The maximum rate of deviation you could accept and still conclude the control is effective. A lower tolerable rate means less room for error, so the sample grows. Tolerable rate and sample size move in opposite directions.

**Expected deviation rate.** The rate you anticipate finding, based on prior audits or the control environment. A higher expected rate means you need more evidence to distinguish an acceptable control from an unacceptable one, so the sample grows. Expected rate and sample size move together.

The relationship candidates most often miss: **sample size depends on the gap between tolerable and expected rates**. As those two converge, sample size rises sharply. If you expect a four per cent deviation rate and can tolerate five, you need a great deal of evidence to tell the difference.

**Population size** has very little effect once the population is reasonably large. Doubling the population from four thousand to eight thousand barely changes the sample. This is counter-intuitive and appears regularly as a distractor.

## Precision and sampling risk

**Precision**, or the allowance for sampling risk, is the range around the sample result within which the true population value is expected to lie. Narrower precision needs a larger sample.

Two sampling risks matter, and the exam distinguishes them:

**Risk of over-reliance**, or the risk of incorrect acceptance, is concluding the control is effective when it is not. This is the dangerous one, because it leads to unwarranted reliance and insufficient substantive work.

**Risk of under-reliance**, or incorrect rejection, is concluding the control is ineffective when it is not. This is inefficient rather than dangerous: it produces unnecessary additional testing and possibly an unjustified finding.

If asked which risk matters more to the effectiveness of the audit, it is over-reliance. Under-reliance affects efficiency.

## Evaluating exceptions

Finding an exception is the beginning of the analysis, not the end.

**Establish what the control actually required.** An item that looks like a deviation may have followed a legitimate alternative path, such as a documented emergency change route.

**Establish the cause.** A deviation caused by a person being unaware of the procedure is a training issue affecting potentially everything they touched. A deviation caused by a system permitting an unapproved deployment is a design issue affecting the whole population. The cause determines the scope of the problem.

**Do not classify an exception as isolated without evidence.** "Isolated" is a conclusion requiring support, usually by targeted additional testing to demonstrate the cause could not have affected other items. Management's assurance is not that evidence.

**Project the rate** where the sample was statistical, and compare the projected rate plus the allowance for sampling risk against the tolerable rate. If the upper limit exceeds tolerable, the control cannot be relied upon.

**Consider extending the sample** where results are near the boundary, but only after the cause is understood. Extending first is a common instinct and it answers nothing.

## Where practitioners go wrong

The single most common failure is accepting a plausible explanation and moving on. Management explains the exception, it sounds reasonable, and the auditor marks it resolved. The exam treats this as substituting representation for evidence, and options that accept an explanation without verifying it against the documented process are reliably wrong.

The second is treating one exception as automatically immaterial because the rate is low. One deviation in forty is 2.5 per cent, and whether that is acceptable depends entirely on the tolerable rate set during planning, not on it feeling small.
