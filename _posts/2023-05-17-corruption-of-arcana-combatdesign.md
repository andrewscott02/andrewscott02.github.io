---
title:  "Corruption of Arcana - Combat System Design"
layout: post
categories: media
permalink: /projects/corruption-of-arcana/combatdesign
---

I worked closely with one of the designers on our team to create the core concepts of our combat system. This is my breakdown for how we designed the spells for our combat system inspired by Tarot cards.


The main way players complete combat encounters is by using the Tarot cards to cast spells. We looked at the interpretations for these cards and translated them into game mechanics. I am going to use the Strength card as an example of our process.

Our first consideration when designing a spell is how the Major Arcana is interpreted in Tarot readings. The Strength card relates to courage, energy and action. It is as much about mental fortitude as it is about physical prowess, essentially the mind drives the body to be stronger.

Some of our initial ideas followed on from this idea of energy and action, and we considered that it would deal some damage to a target and apply haste to the caster. However, this wasn't interesting and didn't provide enough to be taken over other spells. So we had another look at the interpretation and iterated upon our design.

Our next consideration is the fantasy of using the cards, and what the player feels. This idea of haste and a small amount of damage didn't quite feel impressive enough, and didn't really change the playstyle enough to provide a core fantasy for the player when they put this card in their deck. Having a high amount of damage would also be too basic, and wouldn't offer interesting strategy.

The core fantasy of a strength-focused in other games is a slow, but heavy hitting character, and this is something that we thought we could implement here. The new fantasy was it may take some time to set up, but when the stars align, the player can absolutely one-shot most enemies with a powerful spell. As a result, we decided to remove the haste, as this effect was something that built up other combos, when we wanted this card to be the final nail in the coffin.

Now we needed something the player can do to build up the damage. The Strength card is depicted with a lion; a symbol of courage, but more importantly, it shows a woman taming the lion, which is an act of courage. We latched on to this idea of courage and action in our next iteration, and decided upon a risk/reward approach.

We also consider synergies when making spells. After researching card design in other games, I really wanted to avoid explicit synergies where card x makes card y better, and instead go for more open-ended synergies, where multiple cards can help to build up others. These would make the player feel smarter for figuring these out on their own, rather than being told "this card makes another card more powerful". Taking this approach to the Strength card, we decided to have the card use shield as a resource that increases its damage. This results in a playstyle where the player builds up shield with other cards, and then plays the Strength card to one-shot an enemy.

This version of the spell emphasized the need for courage as this can be risky for the player as they might take a lot of damage if they sacrifice their shield. However, this is an act of courage on the part of the player, and also results in an incredible single target attack that relates to a feat of strength. This feels more along the lines of what the strength fantasy is in other games, and also offers synergies with cards like the Emperor and Hanged Man that allow the player to build up shield very quickly.
