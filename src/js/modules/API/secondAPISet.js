import { prefersCelcius } from "./preferedTemp";

export function getSecondSection(data) {
  return {
    feelsLike: getFeelsLike(data),
    humidity: data.current.humidity,
    chanceOfRain: getChanceOfRain(data),
    windSpeed: data.current.wind_kph,
    windRotation: data.current.wind_degree,
  };
}

function getFeelsLike(data) {
  if (prefersCelcius) {
    return data.current.feelslike_c;
  }
  return data.current.feelslike_f;
}

function getChanceOfRain(data) {
  const currentTime = data.location.localtime;
  const index = currentTime.indexOf(" ") + 1;
  const currentHour = parseInt(currentTime.substr(index, 2));

  const currentWeather = data.forecast.forecastday[0].hour[currentHour];
  return currentWeather.chance_of_rain;
}
