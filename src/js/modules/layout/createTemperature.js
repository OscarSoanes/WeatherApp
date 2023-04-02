import { prefersCelcius } from "../API/preferedTemp";

export function getTemperatureValue(temperature, id) {
  const smallO = document.createElement("span");
  smallO.classList.add("up");
  smallO.textContent = "o";

  const tempEl = document.createElement("p");
  tempEl.setAttribute("id", id);
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
