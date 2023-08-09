---
title:  "Corruption of Arcana - Combat System Programming"
layout: post
categories: media
---

As the combat programmer, I was responsible for the implementation of all the game's combat systems. I started out with paper prototypes to test out initial ideas and then moved onto prototypes in unity to learn how to implement these in a basic way.
[View source code](https://github.com/andrewscott02/Corruption-of-Arcana/tree/main/Assets/Scripts/Combat)


{% include embed.html url="https://www.youtube.com/embed/TzelEoHJmcA" %}

One of the first milestones for the combat was making the classes for the spells. This allowed me to easily create new spells using Unity's scriptable object system. This system was initially complicated with a lot of features, but was iterated on later to become much more simple to use.

Following on from this spell class, I created a similar class for status effects. These include all of the logic for what happens while the effect is active, and can include damage over time, control effects like stun and confusion or hit effects like reflecting damage or taking additional damage when hit. These help to add additional complexity in combat for more advanced players, and most of the interesting synergies come from status effects.

{% include embed.html url="https://www.youtube.com/embed/YcMzL3ZVruw" %}

I also used a lot of techniques to improve how the combat feels to play. Characters shake when hit, a vignette appears when the player is hit and the screen shakes when they casts powerful spells. These really help to make the combat feel punchy. In the second year of development, I also implemented a new drag and drop system that allows the player to drag cards onto their target. This made the combat feel much more tactile and intuitive. I spent a lot of time refining how it feels to drag cards around, using subtle animations like rotation and scaling to make dragging feel nice.

I worked closely with the UI artist to make sure the information on the cards was as readable and concise as possible. I used icons in text to quickly show damage types or status effects. These icons can be hovered over to show a tooltip that details what they do. This helps to quickly convey information at a glance while allowing players to get more information quickly.

{% include embed.html url="https://www.youtube.com/embed/jiBdAU9u8sc" %}

New gameplay features were implemented in this second year, like allowing cards to be redirected to other targets, or allowing the player to empower a deck to increase the effect their cards when played on that deck. However, enemies have also been improved, with access to spells that weaken decks, forcefully draw cards into your hand.

Speaking of enemies, they use a utility-based AI, which allows them to determine what the best spell to cast on which targets. They consider the effect of their spell, and each enemy has different weightings that change how it considers useful spells. This allows them to make smarter decisions about the spells they cast.
