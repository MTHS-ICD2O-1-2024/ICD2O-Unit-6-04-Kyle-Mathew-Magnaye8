// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

// Redirect if "radius" is not in the URL
const params = new URLSearchParams(window.location.search);
if (!params.has("radius")) {
    window.location.href = window.location.pathname + "?radius=5";
}

// Main logic after redirect check
window.onload = function () {

    const radius = parseFloat(params.get("radius"));

    const userInfo = document.getElementById("user-info");

    if (isNaN(radius) || radius <= 0) {
        userInfo.innerHTML =
            "Please provide a valid, positive radius in the URL, e.g. <code>?radius=5</code>";
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    userInfo.innerHTML = `Given radius = ${radius} cm<br>Volume = ${volume.toFixed(
        2
    )} cm³`;
};
