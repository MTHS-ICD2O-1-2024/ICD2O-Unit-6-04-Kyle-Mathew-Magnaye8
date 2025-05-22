// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

function calculateVolume() {
  const radius = parseFloat(document.getElementById("radius-of-a-sphere").value)

  if (isNaN(radius)) {
    document.getElementById("user-info").innerText =
      "Please enter a valid number."
    return
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  document.getElementById("user-info").innerText =
    "Volume: " + volume.toFixed(2) + " cm³"
}
