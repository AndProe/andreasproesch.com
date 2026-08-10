---
title: "How Claude Became My Data-Driven Personal Trainer"
description: "A short example of how to use AI to optimize your personal health — or just if you want to build something with AI that could have some real personal benefits."
date: 2026-07-03
tags: ["AI", "Health", "Personal AI", "Agents"]
---

*Want essays like this delivered straight to your inbox? [Subscribe to my Substack newsletter](https://proesch.substack.com/) to receive the latest essays as they're published.*

I have a drawer of dead workout trackers built up over years.

Old heart rate straps. A sleep tracker that I had to keep under my bedsheets (that lasted about a month). Old "smart" watches.

A lot of people I know have a version of this drawer. You buy the thing, it impresses you for maybe 3–4 weeks, and then you kind of lose the excitement.

The trackers themselves are fine. The problem is that a single data point rarely tells you anything you can act on.

I did not really need a ring to tell me I slept badly last night. I already knew that when I woke up. My resting heart rate is a metric I track, but in isolation it doesn't give me much insight either.

There's actually a name for this failure mode: it's called Goodhart's law:

> A system watching one metric optimizes the metric, not the thing you care about.

A tracker watching only your resting heart rate can make you obsess over resting heart rate. That doesn't make you any healthier.

So the novelty of your new gizmo wears off, the data piles up in an app that's hard to export from, and the device ends up in the infamous drawer.

The vendors, however, have happily collected a lot of data. The vendors basically give away the sensor and lock up the data. Satya Nadella recently said that with AI you "pay for intelligence twice: once with money, and again with the proprietary knowledge you must reveal." That's exactly the deal you make when you pour six years of sleep data into someone else's app.

However, I kept on buying the new health trackers anyway.

I like data.

And my current stack looks like this:

- Oura Ring for sleep tracking, HRV, resting heart rate, movement
- Garmin Watch for activity, workouts, steps
- Withings Scale for body weight and body composition
- Withings Blood Pressure Monitor for blood pressure, EKG, resting heart rate
- Abbott CGM for blood glucose

Now, I've always had this plan that eventually, one day, ***one* day**, I would get all the data into a single place so I could do some real analytics on it.

I finally got around to that day a few months ago.

## Value of data lives in contextualization

Ask any doctor, and they will tell you that any health assessment is more an art of triangulation between data points than very deterministic science.

Very rarely does a single test or result tell you the full picture of how someone's body is doing.

So you triangulate.

Now, if you're using different wearables and health trackers, what you actually want is that triangulation between all the stuff you track. Between sleep, workouts, diet, weight, blood pressure, blood tests, all that stuff.

You want to know something like what a week of poor sleep does to your running pace if you are preparing to run a marathon.

Or you want to understand what lifting four days a week does to your deep sleep (and your restitution). Does it improve your sleep? Does it matter if you lift in the morning or evening?

You would want to know whether a high-stress month shows up in your glucose response (oh, yes indeed it does for me at least).

Those questions need data from across multiple sensors, and no single app or tracker holds all the data you need.

Once I framed it that way, the goal stopped being "track more" and became more about "connecting what I track".

I wanted to move from reading metrics to building a model of myself. A "digital twin" of myself, if you will.

What I started building was basically a *reasoning layer*: something that sits between the raw data and my own conclusions, then holds a continuous hypothesis about what's going on in my body, and then revises that hypothesis when new data breaks it.

Now, before we move on: there are already tools out there for doing this. [Perplexity Health](https://www.perplexity.ai/hub/blog/introducing-perplexity-health) recently launched, enabling users to simply add their different wearable accounts into a smart interface for analytics.

That's great if you just want a bit more insight.

But I wanted to build something for myself. To control my data, and to fully personalise my analytics.

So if you are excited by the idea of combining your health data in a single interface, you might stop here and check out what companies like Perplexity are doing.

However — if you're also interested in building your own "Health Operating System" and keep building your own digital twin — read on.

## Building the Health OS

I had quite a lot of data when I started.

Close to six years of continuous sleep and recovery data from my Oura ring.

I've been using a Garmin for workouts for years.

I have a Withings scale for weight and body composition, and a Withings monitor for blood pressure.

I also use continuous glucose monitors (CGMs) from time to time.

Over the years, I've also made sure to keep a record of my blood panels and doctor visits in various Excel sheets, PDFs, and emails.

What's powerful these days is that most of these sensors expose quite user-friendly APIs.

The data is there — if you just bother to go and get it.

So Claude and I sat down and mapped it out.

"We" mapped out what my actual health goals are.

What is worth tracking against them. What can be ignored.

"We" designed a simple schema, a lightweight knowledge graph for a personal health OS, and pulled everything into one place.

One technical decision was more important than others though: define the schema *once*, and make both sides of the system use it.

By that, I mean having the code that ingests from the APIs write against it, and the LLM that reads my data reason against it.

Skip this and the machine happily creates `deep_sleep`, `Deep Sleep`, and `deep-sleep` as three different things, and your "unified" data fragments right away. Also worth knowing: health data is *state*, not concepts. This means that trends, events, plans shift, so what you want is a graph of typed entities, not a folder of summaries.

One dashboard, every source, finally in the same coordinate system.

## What it actually revealed

With everything in one place, I could finally ask questions that used to be basically impossible for me to ask previously.

With some small data-science routines on top of the dashboard (regressions, trend detection etc.) I could start generating weekly and monthly reports written by an LLM reading my own data back to me.

The results were unsurprising at first:

Long-term sleep tracks my physical performance, and the relationship runs both ways.

Good training improves my sleep depth. Good sleep, sustained over weeks rather than a single night, improves how fast I can run long distances or perform on the rowing machine.

The single-night correlation doesn't matter as much as the multi-week trends.

The glucose data from my CGM were probably the most interesting.

Worn alongside everything else, it gave me a read on insulin sensitivity and an early sign of the metabolic drift that runs ahead of prediabetes.

As a guy in his late thirties, these things start to really matter. Too many of my friends are already pre-diabetic.

And this is where the reasoning-layer design starts to become important, because there's a real dilemma here: when does one bad week *change the model*, and when is it noise?

I borrowed a pattern from production AI memory systems: confidence bands.

High-confidence signal gets absorbed automatically, obvious noise gets discarded, and the ambiguous middle gets highlighted to me directly. The system proposes its insights, and I then decide whether my model should actually change.

The most fun I've had with all of this so far is watching how small habits actually change my physiology — and how I can see it directly in the data.

We all make resolutions.

Almost none of us measure whether they worked.

When a minor change in routine shows up in your biomarkers six weeks later (e.g. my blood glucose response to meals or workouts based on my sleep patterns), the habit stops being an act of willpower and becomes an experiment with a readout.

## The accountability loop

The system I'm building also keeps me honest.

I do not log workouts by hand. I record on my watch, and talk to my phone.

Mid-session I might drop a voice note.

That feeds a plan for the following week. I benchmark myself on a fixed set of tests on a regular cadence:

- a test of Norwegian 4x4 for VO2 max
- a handful of tracked lifts
- timed runs
- simple rep counts

The same tests, run often enough to become a real time series.

The fixed tests are doing more work than it looks like.

In agent-system design there's a principle that a network of AI loops stays honest only through *anchors*. Anchors are measurements the system is never allowed to change or tune, because they're exactly what an optimizer would weaken.

My list of standard tests is the "anchor layer". The AI can reinterpret my sleep data all it wants; it cannot argue with a timed run.

A set of agents then run over all of it and reports back. How this week compares to last week? To five weeks ago? Am I on track for the race, or the PR I want to achieve?

"We" go through it like a training review with a coach who has read every data point. And when I miss workouts etc., it shows — and I feel it when I test myself next time — but I also see it in data.

## The real lesson

None of this worked just because the different AI models got particularly smarter recently (although it did help, of course).

I've been deploying AI solutions for enterprises and governments for several years now, and it's always the data that is the first obstacle.

The playbook: take data trapped in silos, put it in one place, contextualize it, and rewire the workflow around it so the insight actually becomes accessible.

The model was never the constraint.

There's a benchmark result I keep coming back to from LangChain: even if you change *nothing* about a model and only improve the system around it, a coding agent can jump from ~30th place to top-five.

Same intelligence, different plumbing.

The constraints I originally had were based on two things: getting good data into one system, and changing my own habits / workflows so the system had something to act on.

That second part matters more than it sounds.

Good data with no workflow change ends up in the drawer.

The health trackers only became useful when I changed how I set goals, how I logged, and how I reviewed.

Same lesson I keep running into at work, just running on different data sets.

---

*This essay was first published on my Substack newsletter. If you'd like to receive the latest essays directly in your inbox, [subscribe here](https://proesch.substack.com/).*
