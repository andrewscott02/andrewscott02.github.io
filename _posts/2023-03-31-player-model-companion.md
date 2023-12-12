---
title:  "Player Modelling Companion AI"
layout: post
categories: media
permalink: /projects/playermodelai
---

{% include embed.html url="https://www.youtube.com/embed/lme6oJXwc10" %}


## Details

[View code on Github](https://github.com/andrewscott02/Action-Game)

Dissertation | Game Engine - Unity | 2022-2023

<p>
  In my dissertation, I created an companion AI that uses player modelling techniques to adapt to player actions and respond with synergistic behaviour to better collaborate with them.
</p>

## Concept

<p>
  This was inspired by the first developer conference I attended at Rezzed a few years ago, where Guild Wars developers talked about the techniques they used to build up the relationship between the player and a companion ally. One of the things that stuck out to me was that they decided to not allow the player to command their ally because it made them feel like a pet and ruined their agency.
</p>
​
<p>
I decided to focus my dissertation on this, and developed an AI that could collaborate with the player, but could not be explicitly commanded. I decided to use a player modelling approach, which allows the AI to analyse the actions a player takes and choose actions that synergize with those actions.
</p>

## Player Modelling Technique

<p>
  I found that the player modelling technique is used mostly in strategy-focused games, so in this project, I applied it to a real-time action game.
</p>
​
<p>
This technique allows the companion to analyse the player's actions, and create a model that describes their play style. Then, the companion can use this information in its decision-making algorithm.
</p>
​
<p>
In this project, I used a behaviour tree, which changes states depending on the playstyle.
</p>

## Behaviours

<p>
I wanted to keep the behaviours generic such that this AI could be used as a template for other action games. As such, the AI presented in my dissertation has behaviours that mostly focus on positioning as opposed to special abilities like healing the player.
</p>
​
<p>
The companion tends to use more supportive actions when the player is performing well; they are being aggressive or are successfully countering their enemies' attacks. As the player starts to be more defensive, or is struggling, the companion will intervene in a more obvious way. Most of the actions are designed in a way to try to get the player to be more aggressive.

### Aggressive

{% include embed.html url="https://www.youtube.com/embed/DoBMMB33CXE?si=qw5Yr9Ghendjw4EO" %}

<p>
When the player is being aggressive, the companion will leave them to keep playing as they are and not intervene. In this state, they will focus on enemies the player is not targeting.
</p>


### Countering

{% include embed.html url="https://www.youtube.com/embed/aN-fx0GVZY4?si=V_CwQXcejaBtVcJk" %}

<p>
When the player only attacks after parrying or dodging an attack, the companion will attempt to attack the player's target to give them more openings to go on the offensive
</p>

### Defensive

{% include embed.html url="https://www.youtube.com/embed/rP8KgW5zFdM?si=bIVrfMrv7glPvnk3" %}

<p>
When the player is performing lots of parries, but are not countering, the companion will rush towards the player and attack nearby enemies to give them some breathing room.
</p>
  
### Mobile

{% include embed.html url="https://www.youtube.com/embed/swvzDrPDw1U?si=-WQL1PHOlGq2lB-I" %}

<p>
When the player is dodging and moving around a lot, the companion will try to draw enemies away from the player so that they can focus on a smaller number of enemies and start being more aggressive
</p>
  
### Panicking

{% include embed.html url="https://www.youtube.com/embed/VmrLbL3tL3Q?si=rd7f1nc7DvxeglQr" %}

<p>
The most extreme state is entered when the player is missing lots of attacks, parrying or dodging when no enemies are attacking or they are getting hit by enemies. In this state, the companion will forcefully interject themselves between the player and nearby enemies, acting as a shield for the player so they can reposition and regain their composure.
</p>
