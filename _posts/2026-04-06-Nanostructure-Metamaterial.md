---
title: "Nanostructure Metamaterial Optimization"
date: 2026-05-15
categories:
  - Design
image:
  path: /assets/images/nanostructure-thumbnail.jpg
  alt: Nanostructure Metamaterial Optimization
math: true
toc: true
---

## Project Overview

The goal of this project was to design a nanostructure metamaterial that is as strong and tough as possible while using very little material.

### Objectives

- Maximize **strength**
- Maximize **toughness**

### Design Constraints

- Infill must stay **below 20%**

### Process

1. **Design iteration:** I modeled several candidate unit cells in CAD and ran FEA on each one to compare their performance before settling on a final design.
2. **Tessellation:** I patterned the final unit cell into a 5×5 structure.
3. **Fabrication:** I manufactured the structure at MIT Nanolab using two-photon lithography.
4. **Testing:** I measured its mechanical performance on a nano Instron machine.

## Design Iteration

I iterated on the unit cell in CAD, using FEA to check how each design carried load before committing to a final model.

<div class="image-row">
  <div style="flex-grow: 1.223"><img src="/assets/images/nanolab_iteration_1.png" alt="Early unit cell design" width="302" height="247" loading="lazy"></div>
  <div style="flex-grow: 1.63"><img src="/assets/images/nanolab_FEA.png" alt="FEA of a unit cell design showing von Mises stress" width="1369" height="840" loading="lazy"></div>
</div>
<span class="image-row-caption">Left: an early unit cell design. Right: FEA of a candidate unit cell, showing von Mises stress.</span>

## Fabrication and Testing

After tessellating the final unit cell into a 5×5 structure and printing it with two-photon lithography, I compressed it in a nano Instron.

<div class="image-row">
  <div style="flex-grow: 1.333"><img src="/assets/images/nanolab_before_squish.png" alt="5x5 structure before compression" width="336" height="252" loading="lazy"></div>
  <div style="flex-grow: 1.36"><img src="/assets/images/nanolab_after_squish.png" alt="5x5 structure after compression" width="336" height="247" loading="lazy"></div>
</div>
<span class="image-row-caption">SEM images of my 5×5 structure in the nano Instron, before (left) and after (right) compression.</span>

## Results

![Stress-strain curve of the fabricated sample and the reference sample](/assets/images/Stress_Strain_Nanolab.png)
_Stress-strain curve of my fabricated sample (blue) compared with the class reference sample (orange) we were tasked to outperform._
