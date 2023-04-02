import { prefersCelcius } from "./API/preferedTemp";

export function changeConversion() {
  let newConversion;

  // Switches the preferred celcius varaible
  if (prefersCelcius()) {
    localStorage.setItem("prefers-celcius", "false");
    newConversion = "C";
  } else {
    localStorage.setItem("prefers-celcius", "true");
    newConversion = "F";
  }

  //   Sets the button's last child ("F", "C") to the other one
  const button = document.getElementById("change-temp-conversion");
  button.lastChild.textContent = newConversion;
}

export function setConversionOnStartup() {
  // Sets it on startup
  let conversion;
  if (prefersCelcius()) {
    conversion = "F";
  } else {
    conversion = "C";
  }

  const button = document.getElementById("change-temp-conversion");
  button.lastChild.textContent = conversion;
}
