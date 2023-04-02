import { prefersCelcius } from "./preferedTemp";

export function getThirdSection(data) {
  const startingTime = getStartingTime(data.location.localtime);
  const hourlyForecast = getForecast(data, startingTime);
  return hourlyForecast;
}

function getStartingTime(time) {
  const index = time.indexOf(" ") + 1;
  const currentHour = parseInt(time.substr(index, 2));
  return currentHour;
}

function getForecast(data, time) {
  let hourlyIndex = time;
  let dailyIndex = 0;

  let forecast = [];

  //   Loops until there is 24 hours of weather stored in the forecast
  while (forecast.length < 24) {
    const weather = data.forecast.forecastday[dailyIndex].hour[hourlyIndex];

    let temperature;
    if (prefersCelcius) {
      temperature = weather.temp_c;
    } else {
      temperature = weather.temp_f;
    }

    const hourlyData = {
      time: `${hourlyIndex}:00`,
      temperature: temperature,
      icon: weather.condition.icon,
    };

    // If its the 23rd hour, change to midnight of next day else, do not.
    if (hourlyIndex >= 23) {
      dailyIndex++;
      hourlyIndex = 0;
    } else {
      hourlyIndex++;
    }

    forecast.push(hourlyData);
  }

  return forecast;
}
