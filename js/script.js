// Copyright (c) 2025 Kyle Matthew Magnaye
//
// Created by: Kyle Matthew Magnaye
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict";

window.onload = function () {
    const params = new URLSearchParams(document.location.search);
    const radius = parseFloat(params.get("radius"));

    const userInfo = document.getElementById("user-info");

    if (isNaN(radius)) {
        userInfo.innerHTML =
            "Radius is =";
        return;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    userInfo.innerHTML = `Given radius = ${radius} cm<br>  Volume = ${volume.toFixed(
        2
    )} cm³`;
};
