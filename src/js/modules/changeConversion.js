import { prefersCelcius } from "./API/preferedTemp";

export function changeConversion() {
  // Switches the preferred celcius varaible
  if (prefersCelcius()) {
    localStorage.setItem("prefers-celcius", "false");
  } else {
    localStorage.setItem("prefers-celcius", "true");
  }
}
