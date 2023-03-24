import { prefersCelcius } from "./preferedTemp";

export function getFirstSection(data) {
  return {
    type: data.current.condition.text,
    typeIcon: data.current.condition.icon,
    location: data.location.name,
    country: data.location.country,
    localTime: getDateTime(data.location.localtime),
    temperature: getCurrentTemperature(data.current),
    buttonDisplay: prefersCelcius(),
  };
}

function getDateTime(date) {
  const index = date.indexOf(" ") + 1;
  return date.substring(index);
}

function getCurrentTemperature(data) {
  if (prefersCelcius()) {
    return data.temp_c;
  } else {
    return data.temp_f;
  }
}
