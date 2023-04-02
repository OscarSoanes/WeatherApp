import { getValidAPIData } from "./getValidData";

export async function getAPI(location) {
  try {
    const weather = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a59cfd9ae00f4e31900141334232403&q=${location}&days=2&aqi=no&alerts=no`,
      { mode: "cors" }
    );
    const data = await weather.json();
    return getValidAPIData(data);
  } catch (error) {
    console.log(error);
  }
}
