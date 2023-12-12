---
title:  "Visual Effects Programming"
layout: post
categories: media
permalink: /projects/visualfx
---

![Graphics Image](https://raw.githubusercontent.com/andrewscott02/andrewscott02.github.io/master/_posts/Images/GraphicsImages.png)


[View code on Github](https://github.com/andrewscott02/Graphics-Programming)

## Details

Year 2 University Project | Game Engine - Unity | 2021

<p>
  In this project, I developed two visual effects using custom shaders and procedural mesh elements.

  The first effect was a cartoon water effect that generates vertices and layers multiple sine waves to adjust the height of each vertex, which create a wave effect. The height of each vertex is also used to make small adjustments to the shader to provide a basic reflection effect, where the highest waves appear to have a brighter sheen than the lowest ones. There are other shaders layered over this colour adjustment that add an edge glow (composed of intersection glow and fresnel effect subgraphs) a foam effect and a foam effect, which makes a frothy effect on the surface and adds sparkles via a specs subgraph. There are public properties on the graphs that allow for changes, which I used to develop other liquid effects, such as lava and mud. This custom shader was used in our group project Corruption of Arcana.

  The second effect was a sword trail, that generates vertices and adjusts their position using a quadratic lerp function that generates a smooth curve behind the sword upon which the trail mesh is generated. There are shaders that make an uneven colouring and add specs along the sword trail and a tiling effect, which alters the opacity of the trail.
</p>
