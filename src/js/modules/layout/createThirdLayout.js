import { getTemperatureValue } from "./createTemperature";

export function createThirdLayout(data) {
  console.log(data);
  const hourlyContainer = document.getElementById("hourly-container");
  emptyContainer(hourlyContainer);

  data.forEach((hour) => {
    hourlyContainer.appendChild(createHour(hour));
  });
}

function createHour(hoursData) {
  const hourContainer = document.createElement("section");
  hourContainer.classList.add("hourly-weather");

  const time = document.createElement("p");
  time.textContent = hoursData.time;

  const temperature = getTemperatureValue(hoursData.temperature);

  const image = document.createElement("img");
  image.src = hoursData.icon;
  image.alt = "Weather";

  hourContainer.append(time, temperature, image);
  return hourContainer;
}

function emptyContainer(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
