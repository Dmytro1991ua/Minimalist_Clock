function runClock() {
   const hourHand = document.querySelector("[data-hour-hand]"),
      minuteHand = document.querySelector("[data-minute-hand]"),
      secondHand = document.querySelector("[data-second-hand]");

   setInterval(setClock, 1000);

   //function get a current date
   function setClock() {
      const currentDate = new Date(),
         secondsRatio = currentDate.getSeconds() / 60, 
         minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60, 
         hoursRatio = (minutesRatio + currentDate.getHours()) / 12; 
      
      setRotation(secondHand, secondsRatio);
      setRotation(minuteHand, minutesRatio);
      setRotation(hourHand, hoursRatio);

   }

   //set a values for a rotation of a different hands (hours, minutes, seconds).
   function setRotation(element, rotationRatio) { 
      element.style.setProperty("--rotation", rotationRatio * 360);
   };

   setClock();
}


//function to change a body color mode on click
function changeBodyColorMode() {
   const body = document.querySelector("body");
   body.classList.toggle("light-mode");
}


runClock();
changeBodyColorMode();