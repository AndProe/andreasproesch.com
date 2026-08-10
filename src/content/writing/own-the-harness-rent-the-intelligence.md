---
title: "Own the Harness. Rent the Intelligence"
description: "A short reflection on where agentic AI is going — what gives a company a competitive advantage from AI vs. what should be an outsourcing decision."
date: 2026-07-24
tags: ["AI", "Agents", "Strategy", "Agentic AI"]
---

*Want essays like this delivered straight to your inbox? [Subscribe to my Substack newsletter](https://proesch.substack.com/) to receive the latest essays as they're published.*

## How important is your choice of AI model?

Let's imagine a coding agent sitting around 30th on a hard AI benchmark. Now, don't touch the model, no fine-tuning, no prompt-engineering, nothing bigger. Change only the harness (which is the software wrapped around the model) and it climbs into the top five.

The same intelligence, but with a very different outcome.

This is not a hypothetical: [LangChain published exactly this on Terminal Bench](https://x.com/Vtrivedy10/status/2023805578561060992) quite recently (worth checking the link).

Wherever you look, people seem to still be spending a lot of attention these days on the model: a new Kimi model, the latest GPT, Claude, Gemini, the new shining thing.

If only I had a dollar for every time someone in the room has asked:

Are we using the best model at the top of the leaderboard right now?

But the model is becoming a commodity very quickly here. Everyone essentially rents the same few frontier models through the same few APIs, or runs the same open source models.

The layer that decides whether your agent finishes the job in the way that YOU want it, receives still far less attention in most companies.

## The Agentic Harness Layer

Let's take a quick step back first: what is an Agent?

This is a question that you first want to make sure everyone actually using agents should be able to answer. Very simply:

> Agent = Model + Harness

This is the easiest way I can explain it.

The model is the intelligence. The harness is everything else. And "everything else" is where almost all the engineering, and the MAGIC, really lives.

E.g. if you've used Claude Code, that uses a Claude Model (whichever you chose to run) + a harness specifically built for coding.

That's why Claude Code and Claude Cowork are separate options — they have different harnesses.

Let's picture a horse: it's a lot of raw power, but it can be pretty wild and nearly useless until you add reins to steer, training, maybe blinders to focus, a saddle to carry weight etc.

A raw frontier model is like that horse. It has a lot of power, but not a lot of direction.

*"But that's not what you feel when Claude Code builds a new app for you from scratch,"* you might say?

Exactly!

What you feel there is the loop: read state, decide, act, check, repeat → until the job is done.

And one of the biggest levers inside that loop is letting the model check its own work.

## Harnesses in Practice

Boris Cherny, who created Claude Code, [recently said that giving a model a way to verify itself can 2–3× the quality of the result](https://x.com/bcherny/status/2007179832300581177). Verification is a harness feature, not a model feature. So is memory. So is nearly everything that separates a demo from a product.

If you strip a harness down, it's the loop plus about seven parts:

1. Tools (without them the model can only talk)
2. Memory (otherwise it would forget everything between sessions)
3. Context management (the recent context you've been building)
4. A sandbox (a safe room to run and break things before it ships anything)
5. Guardrails (what runs freely, and what needs your okay)
6. Orchestration (effectively delegating to "specialists")
7. Interface (where you actually interact)

## The Harness is the Moat

The evidence that the harness itself is the moat is becoming increasingly clear right now.

When OpenAI shipped Codex, they were very open about one thing: the hardest problems had almost nothing to do with the model. The really hard stuff to get right was the orchestration part.

How do you assemble prompts from a dozen sources, manage conversations that grow quadratically, and build a new protocol to carry a complex agent conversation?

The model is an important component, sure.

But the agent is the system around it that actually coordinates all of this.

I think we're seeing a reflection of all of this through which startups and companies are charging ahead right now: [Harvey](https://www.harvey.ai/) in legal, [Abridge](https://www.abridge.com/) in medicine, [Cursor](https://cursor.com/) in coding.

The product of all of these companies is the harness. The model underneath is increasingly interchangeable.

## So What? What does this mean for me and my company?

If the model is rented and roughly the same for everyone, your durable advantage is the layer you own around it.

Owning the harness is owning the thing that makes your AI yours: its tools, its memory of your business, its guardrails, its "[taste](https://www.youtube.com/watch?v=jg1WUOxY6Cg)".

Two products can call the exact same model and feel worlds apart because their harnesses are worlds apart.

That doesn't mean you should start building your company harness from scratch tomorrow.

A harness becomes its own product with its own maintenance.

And trust me, it can be a lot of work to maintain a good harness. That's why billion-dollar companies are built around harnesses.

However, the middle path I think fits most organizations is to customize a strong existing harness through skills and MCP servers, and put their effort into the parts that encode their specific domain.

The question isn't *can you build a harness*, but rather *which layer is worth owning for you and your team?*

## What's Next?

"*Won't the models just absorb all this?*" Probably, but only partially.

As models themselves get better at planning and verification natively, some harness code gets deleted as the models themselves can reason increasingly well. But prompt engineering was supposed to disappear too, and it's still valuable years later.

Harnesses don't only patch limitations of the models; they engineer a system around intelligence to make it effective in a particular context.

The horse keeps getting stronger.

You still want specialized reins for your specific work.

I think the next decade of software won't be about "an app with AI bolted on". It'll be harnesses.

And the build-versus-buy decision when it comes to Harness Ownership is one of the most consequential calls you'll make in this new world.

So, stop asking only which model to use.

Start asking which layer of your AI stack you want to own yourself when a new and better model comes along.

A new and better model will probably be released tomorrow, and you will want to have the reins ready to wield it to your specific purpose — always.

---

*This essay was first published on my Substack newsletter. If you'd like to receive the latest essays directly in your inbox, [subscribe here](https://proesch.substack.com/).*
