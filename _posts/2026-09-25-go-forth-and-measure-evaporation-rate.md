---
title: "Go Forth and Measure: Evaporation Rate"
date: 2026-09-25
categories:
  - Research
image:
  path: /assets/images/Revised_SetUp.png
  alt: Revised evaporation experiment setup
math: true
toc: true
---

## Project Overview

For my Go Forth and Measure project in 2.671 (Measurement and Instrumentation), I am studying how the temperature of the surface holding the water and the relative humidity of the surrounding air affect how quickly water evaporates in a closed environment. This project is in progress, and I will add results here as the work continues.

### Objective Question

How do the temperature of a water-supporting surface and ambient relative humidity influence the rate of water evaporation?

### Motivation

Controlling how fast water evaporates matters in many designs. Slow drying leads to rust, rot and mold in buildings, storage and equipment, while fast, efficient drying is the goal of food dehydration and many manufacturing processes. Evaporation data is commonly reported for open water surfaces like pans and pools exposed to wind, but it is less clear how temperature and humidity each affect evaporation in a small, enclosed space with little airflow.

This project also supports my research on an [indirect solar dehydrator](/posts/indirect-solar-dehydrator/). Knowing how much each variable changes the drying rate will help choose operating conditions that shorten drying time and reduce energy use.

## Experimental Setup

A small sample of water sits in a metal measuring cup on a variable hot plate, which rests on a precision scale inside a sealed container. A temperature probe at the hot plate and water interface measures the surface temperature, and saturated salt solutions set the relative humidity, which a humidity sensor records. The scale logs how much mass the water loses over time.

### Changes from the Original Plan

![Sketch of the original experimental setup](/assets/images/evaporation-setup-sketch.png){: w="500" }
_Original plan: a heater (HR), temperature sensor (STS) and humidity sensor (RH) inside a sealed box, with the water sample on a precision scale_

My original plan was to heat the air in the box with a resistive heater under closed-loop control. I changed the setup for a few reasons:

- **Drying times:** Pilot tests showed that reaching a wide range of air temperatures was difficult and made experiments longer. Heating the surface under the water produced a more readily measurable change in evaporation rate.
- **Equipment:** The 2.671 lab had a variable hot plate in stock, while a closed-loop space heater would have needed to be purchased.
- **Same question:** Controlling the surface temperature still answers which conditions have the greatest effect on evaporation.

I briefly considered isopropyl alcohol as the working fluid because it evaporates faster, but went back to water to avoid the fire risk of heating alcohol.

## Data Analysis

For each trial, I set the temperature and humidity, add the water sample and log its mass against time. After cutting off the initial transient from adding the water, I fit a line to the remaining data, and the slope gives the evaporation rate.

In a pilot run, the mass dropped roughly linearly over about 15 minutes, giving a fitted rate of about 0.0015 g/s (0.092 g/min). The plan is to repeat this at multiple surface temperatures and humidity levels, with repeated trials at each condition, and build a surface plot of evaporation rate as a function of temperature and relative humidity.

## Challenges So Far

- **Scale accuracy:** The scale struggles to register small changes in mass and gives inconsistent readings. I plan to test another sensor, such as a dual-range force sensor.
- **Humidity control:** The saturated salt solutions buffer the humidity but can't hold it steady, since the evaporating water itself raises the humidity noticeably in a small container. A larger chamber and more salt should help.
- **Water container:** The plastic containers I first used melted on the heater, so I switched to a metal measuring cup, which also conducts heat better.
- **Temperature control:** The surface temperature drops when water is added, so I measure the temperature with the water already in the container.

## Expected Results

I expect water to evaporate faster at higher temperatures and lower humidity. Evaporation is driven by the difference between the water vapor pressure at the water's surface and in the surrounding air, so:

- **Lower humidity** should increase the evaporation rate roughly linearly.
- **Higher temperature** should increase it more steeply, because the saturation vapor pressure of water rises roughly exponentially with temperature.

## Progress Report

<object data="/assets/pdf/2.671-progress-report.pdf" type="application/pdf" width="100%" height="600">
  <p>Your browser can't display the presentation here. <a href="/assets/pdf/2.671-progress-report.pdf">Download the Progress Report Slideshow (PDF)</a>.</p>
</object>

[Open the Progress Report Slideshow in a new tab](/assets/pdf/2.671-progress-report.pdf){: target="_blank" }
