---
title: "Go Forth and Measure: Evaporation Rate"
date: 2026-09-25
categories:
  - Research
math: true
toc: true
---

## Project Overview

For my Go Forth and Measure project in 2.671 (Measurement and Instrumentation), I am studying how temperature and relative humidity affect how quickly water evaporates in a closed environment. This project is in its early stages, and I will add results here as the work progresses.

### Objective Question

How do temperature and relative humidity affect the drying rate of water?

### Motivation

Controlling how fast water evaporates matters in many designs. Slow drying leads to rust, rot and mold in buildings, storage and equipment, while fast, efficient drying is the goal of food dehydration and many manufacturing processes. Evaporation data is commonly reported for open water surfaces like pans and pools exposed to wind, but it is less clear how temperature and humidity each affect evaporation in a small, enclosed space with little airflow.

This project also supports my research on an [indirect solar dehydrator](/posts/indirect-solar-dehydrator/). Knowing how much each variable changes the drying rate will help choose operating conditions that shorten drying time and reduce energy use.

## Planned Experiment

![Sketch of the planned experimental setup](/assets/images/evaporation-setup-sketch.png){: w="500" }
_Planned setup: a heater (HR), temperature sensor (STS) and humidity sensor (RH) inside a sealed box, with the water sample on a precision scale_

A small, fixed volume of water sits on a glass plate on a precision scale inside a sealed box. A temperature-controlled heater sets the air temperature, and desiccant or humidity-control salts set the relative humidity. The scale logs how much mass the water loses over time, while sensors next to the sample record the actual temperature and humidity.

The plan is to test a 5×5 grid of conditions: five temperatures (about 25 to 50 °C) and five relative humidity levels (about 10 to 90%), with three runs of each.

## Expected Results

I expect water to evaporate faster at higher temperatures and lower humidity. Evaporation is driven by the difference between the water vapor pressure at the water's surface and in the surrounding air, so:

- **Lower humidity** should increase the evaporation rate roughly linearly.
- **Higher temperature** should increase it more steeply, because the saturation vapor pressure of water rises roughly exponentially with temperature.

From each run I will fit an evaporation rate and a characteristic drying time, then map them across all the temperature and humidity conditions to see which variable has the larger effect.
