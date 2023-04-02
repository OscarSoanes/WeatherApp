import { getTemperatureValue } from "./createTemperature";

export function createSecondLayout(data) {
  const feelsLike = document.getElementById("feels-like");
  feelsLike.replaceWith(getTemperatureValue(data.feelsLike, "feels-like"));

  const humidity = document.getElementById("humidity");
  humidity.textContent = `${data.humidity}%`;

  const chanceOfRain = document.getElementById("chance-of-rain");
  chanceOfRain.textContent = `${data.chanceOfRain}%`;

  const windSpeed = document.getElementById("wind-speed");
  windSpeed.textContent = `${data.windSpeed}km/h`;

  const windDirection = document.getElementById("direction");
  windDirection.style.transform = `rotate(${data.windRotation}deg)`;
}
