---
title: "How to Start Building Your Own AI-Powered Second Brain"
description: "A short beginner's guide to building your own Second Brain, inspired by Andrej Karpathy's work on \"LLM Wikis\"."
date: 2026-08-07
tags: ["AI", "Second Brain", "Knowledge Management", "Obsidian"]
---

*Want essays like this delivered straight to your inbox? [Subscribe to my Substack newsletter](https://proesch.substack.com/) to receive the latest essays as they're published.*

If you've kept a "Second Brain", or tried to systematically organise your digital contents and thoughts, you know how hard it can be to organize your digital life.

Through the years, I have accumulated thousands of notes across Obsidian, Google Drive, Dropbox, browser bookmarks, and a graveyard of PDFs and files on my laptop.

All captured with the intention of one day organising them. But almost none of which ever came back when I needed them.

The reflex is to blame that it requires too much effort, that you don't have the time, etc.

The actual problem is structural: **capturing digital content is cheap, but maintenance of a knowledge system is where these systems go to die.**

**"But, can't I now just give it to AI?"**

You can, but the basic approaches — like just doing RAG on a bunch of documents — don't fix it.

RAG re-discovers everything from scratch on every question. Nothing accumulates.

A chatbot forgets the moment the session ends, unless you give it specific memories. More context just means re-pasting the same links forever.

Andrej Karpathy sketched the alternative in a short article (really, really worth reading, btw), and it reorganized how I work.

Instead of retrieving raw documents at query time, have the LLM **incrementally build and maintain a persistent, interlinked wiki** between you and your sources. Effectively, you are building a Knowledge Graph of information.

Add a source and the model reads it, extracts what matters, and *integrates* it by updating pages, flagging where new information contradicts old, strengthening the synthesis and insights from your content by automatically drawing parallels between information. Compiled once, kept current.

Karpathy's line: **Obsidian is the IDE, the LLM is the programmer, the wiki is the codebase.** I've been running exactly this.

## How to get started

- Download Obsidian, and install the Obsidian Clipper plugin in your browser
- Set up a "Vault" folder locally on your laptop
- Connect your LLM / Agent tool of choice (I like to use Claude integrated in Cursor, but you can also just give Claude direct access to your local Vault folder)
- Run **Prompt 1** (below) to set up the structure of your Vault
- Populate your Vault with contents in the `raw/` folder
- Run **Prompt 2** (below) on a regular basis
- Start using your Second Brain in your daily life

## The Architecture

The architecture is just folders and basic files, and requires very little maintenance by a human.

`raw/` is my inbox, where I clip articles from the browser. The AI reads it but never edits it.

`wiki/` is the AI's domain, with every topic a folder, every article a structured summary with key takeaways and `[[wiki links]]`, a master index on top; I rarely touch these.

`output/` holds generated reports.

The process for this is all outlined in one Master Instructions file: `CLAUDE.md`.

This file tells the AI how the wiki is structured and what to do when it ingests a source.

That file is the difference between a disciplined librarian and a generic chatbot.

### Prompt 1

```markdown
# Librarian Protocol
This document defines how you curate and maintain this knowledge base in every session.

## Core Principles
- You are the librarian of this vault. The knowledge base is written and
  maintained by you, the LLM — I almost never touch wiki files myself.
- wiki/ belongs to you. Everything inside it is your responsibility to
  create, organize, and keep current.
- raw/ is the intake tray. I drop unprocessed files there; your job is to
  absorb them into the wiki whenever I trigger a "compile".
- output/ holds generated deliverables: query answers, reports, exports.

## Structure
- wiki/_master-index.md is the front door. It must always contain an
  up-to-date list of every topic folder, each with a one-line summary.
- Every topic lives in its own subfolder (e.g., wiki/ai-agents/) and
  carries a _index.md listing that topic's articles with short descriptions.
- Connect ideas across the vault using [[wiki links]] whenever concepts
  relate — the graph matters as much as the pages.

## Compiling raw material
When I say "compile", work through everything in raw/ that hasn't yet been processed:

1. Read the raw file in full.
2. Assign it to an existing topic, or spin up a new topic folder if
   nothing fits.
3. Distill it into a wiki article: key takeaways plus links to related
   concepts.
4. Update that topic's _index.md.
5. Update wiki/_master-index.md.
6. If the material touches multiple topics, write an article in each
   relevant folder and cross-link them.

## Writing style
- Favor brevity: bullet points beat prose.
- Every article must end with (or contain) a ## Key Takeaways section.

## Answering questions
Navigate top-down: start at wiki/_master-index.md, follow it to the relevant topic's _index.md, then open only the specific articles you need. Don't brute-force read the whole vault.

## Maintenance
When I say "audit" or "lint", sweep the wiki for broken [[links]], inconsistencies, duplicated or orphaned content, and coverage gaps, then propose fixes.
```

### Prompt 2

```markdown
Compile everything in raw/ into the wiki. For each file:
1. Read it and identify the core topic
2. Find or create the right topic folder in wiki/
3. Write a wiki article with a clear summary, key takeaways, and create [[wiki links]]
   to any related concepts
4. Update the topic's _index.md
5. Update wiki/_master-index.md

Cross-link between topics wherever relevant.
```

## The Daily Loop

The daily loop has four steps:

**Clip** → one click, into `raw/`; I don't decide where it goes.

**Compile** → I say "compile everything in `raw/`," and the AI reads each source, picks the topic, writes a structured article, cross-links it, and updates the indexes; a single source might touch 10–15 pages.

**Query** → I ask questions and get sourced answers, and good answers get filed back as new pages, so explorations compound instead of vanishing into chat history.

**Audit** → I periodically ask it to health-check the wiki.

## The Second Brain in Practice

What does it feel like? Last week I asked "what did I learn about semiconductors?" and got a real, sourced synthesis in under a minute, from a bunch of articles I'd half-forgotten clipping.

Then I asked for a critical summary across everything I'd read that week, and it connected robotics, economics, and infrastructure in ways I had kind of thought about, but never had time to properly reflect on.

The library isn't just a digital storage anymore. It becomes a thinking partner that reads everything I fed it, and thinks deeply about it.

Now, I never said that this would not require some continuous effort to maintain.

If you just leave a knowledge graph like this alone, it starts to rot. Kind of like how even Wikipedia needs to be constantly maintained in order to stay correct and relevant.

When I ran a real audit on mine last week, it found **a bunch of broken cross-references.** The wiki *looked* beautifully interlinked, but most links silently resolved to nothing, because the titles I was linking to weren't registered the way the system expected.

It looked connected. It wasn't, and I'd never have caught it by eye.

The other ways that this stuff breaks are equally critical. Example: the model merges two similar entities into one muddled explanation, or stays superficial until you push it.

None of this is a reason not to do it, but it's the reason why the audit step exists in the four-step loop above.

The bookkeeping that kills human wikis is exactly the tedious work an LLM does without complaint, fifteen files at a time.

## Disclaimer: Stable vs. Evolving Knowledge

One fork worth knowing: this whole setup works pretty well for *stable* knowledge concepts and relationships.

It needs a lot more effort in an *evolving* state.

A wiki page won't track that a deadline moved in one email thread while the team assumed the original; that needs a knowledge graph of typed entities, not a wiki of summaries. So for that you need to rather run regular direct agentic workflows.

## In Summary

For me, the tedious part of a knowledge base was never the reading, it was the "bookkeeping" and organization.

Humans abandon knowledge bases because that burden grows faster than the value. LLMs don't get bored and can touch a bunch of files in a single pass, so maintenance cost falls toward zero and the knowledge graph stays maintained.

Starting is easy: it's a git repo of markdown and a rulebook.

Hand Karpathy's article to your agent and build a version for your domain. You don't need ten thousand notes; it can pay off if you have twenty notes about a topic that you want to work on.

One last thing:

> How do I continuously improve my Second Brain now?

I constantly read the latest research, but let my Second Brain support and maintain the corpus of knowledge that I collect and work as my research partner to surface the latest best practices, and how to implement them.

Happy building!

---

*This essay was first published on my Substack newsletter. If you'd like to receive the latest essays directly in your inbox, [subscribe here](https://proesch.substack.com/).*
