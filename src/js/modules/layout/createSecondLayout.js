export function createSecondLayout(data) {
  console.log(data);
  currentTemp.replaceWith(getTemperatureValue(data.temperature));
}
