import { prefersCelcius } from "../API/preferedTemp";

export function createFirstLayout(data) {
  const type = document.getElementById("weather-type");
  const icon = document.querySelector(".weather-type-container > img");

  const location = document.getElementById("location-name");
  const country = document.getElementById("country");

  const date = document.getElementById("date");
  const currentTemp = document.getElementById("current-temp");

  type.textContent = data.type;
  icon.src = data.typeIcon;

  location.textContent = data.location;
  country.textContent = data.country;

  date.textContent = data.localTime;
  currentTemp.replaceWith(getTemperatureValue(data.temperature));
}

function getTemperatureValue(temperature) {
  const smallO = document.createElement("span");
  smallO.classList.add("up");
  smallO.textContent = "o";

  const tempEl = document.createElement("p");
  tempEl.setAttribute("id", "current-temp");
  tempEl.classList.add("temperature");
  tempEl.textContent = temperature;
  tempEl.appendChild(smallO);
  if (prefersCelcius) {
    tempEl.append("C");
  } else {
    tempEl.append("F");
  }

  return tempEl;
}
