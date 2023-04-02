import { getTemperatureValue } from "./createTemperature";

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
  currentTemp.replaceWith(
    getTemperatureValue(data.temperature, "current-temp")
  );
}
