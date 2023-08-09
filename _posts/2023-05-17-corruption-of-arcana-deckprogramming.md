---
title:  "Corruption of Arcana - Deckbuilding System Programming"
layout: post
categories: media
permalink: /projects/corruption-of-arcana/deckprogramming
---

Using the existing card drag and drop system for combat, we made a deckbuilding system that allows the player to build their deck by dragging cards from their collection into their deck. I was responsible for how the data from each deck gets used and updates the player's cards in combat.

[View source code](https://github.com/andrewscott02/Corruption-of-Arcana/tree/main/Assets/Scripts/Combat)


Additionally in our second year, we decided to give the player the ability to upgrade their cards, and I was responsible for implementing this. In the upgrade menu, when the player drags 3 cards of the same type, they can combine them into the same card of a higher power level.

I also worked on the rewards in our game. At the start, the rewards were completely random, but now they use loot pools loot pools, which segment rewards allowing for more regulated experience. If a quest offers multiple rewards, the player will typically be rewarded with a few items from each pool to ensure they get a mixture of cards, potions and weapons.
