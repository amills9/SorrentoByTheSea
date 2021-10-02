"use strict";

/** 
 * Task 3
 * Based on the Sorrento by the Sea Extras 
 * @author Andrew Mills 
 * Created for TAFE NSW Australia
 * Cert IV Programming
 * ICTPRG414 - Programming Skills
 * @license MIT This project is licensed under the MIT License
 */

/**
 * 
 */

let activeIndex = 0;
let photosArr = [
  {location:"images/apartment_front.jpg", text:"Front of the apartment"},
  {location:"images/ocean_beach.jpg", text:"The Ocean Beaches"},
  {location:"images/ocean_beach3.jpg", text:"More views of the beach"},
  {location:"images/apartment_garden.jpg", text:"The gardens for your apartment"},
  {location: "images/ocean_beach_2.jpg", text:"View of the Beach"},
  {location: "images/sorrento_from_jetty.jpg", text:"Looking back towards Sorrent from our Jetty"}
];

let grandFatherDiv = document.getElementsByClassName("container");
let fatherDiv = document.createElement("div");
fatherDiv.classList.add("row");
grandFatherDiv[0].appendChild(fatherDiv);

for (let i = 0; i < photosArr.length; i++) {
  let div = document.createElement("div");
  div.classList.add("column2");
  
  let img = document.createElement("img");
  img.src = photosArr[i].location;
  img.alt = photosArr[i].text;
  img.classList.add("demo");
  img.classList.add("cursor");
  img.style.width = "100%";
  img.onclick = function() {
    setActiveImage(i);
  }

  div.appendChild(img);
  fatherDiv.appendChild(div);
}

setActiveImage(0);

function setActiveImage(index) {
  let img = document.getElementById("image");
  let text = document.getElementById("imageText")

  img.src = photosArr[index].location;
  text.innerHTML = photosArr[index].text;

  activeIndex = index;
}

function shiftImage(bool) {
  if (bool) {
    if (activeIndex == photosArr.length - 1) {
      setActiveImage(0);
    } else {
      setActiveImage(activeIndex + 1);
    }
  } else {
    if (activeIndex == 0) {
      setActiveImage(photosArr.length - 1);
    } else {
      setActiveImage(activeIndex - 1);
    }
  }
}