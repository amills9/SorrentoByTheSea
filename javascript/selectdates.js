"use strict";

let firstDay, lastDay;
let days = document.getElementsByClassName("days")[0].children;

for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("click", () => {
      let day = days[i].innerHTML;

      if (firstDay == undefined || lastDay == undefined) {
        if (firstDay == undefined) {
          firstDay = day;
          console.log(firstDay + " is your first day")
        } else {
          lastDay = day;
          console.log(lastDay + " is your second day")
        }
      }
    })
}