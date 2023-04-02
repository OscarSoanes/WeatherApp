import { getAPI } from "./modules/API/getWeatherAPI";
import "../css/reset.css";
import "../css/style.css";
import { getValidAPIData } from "./modules/API/getValidData";
import { createLayouts } from "./modules/createLayout";
import {
  changeConversion,
  setConversionOnStartup,
} from "./modules/changeConversion";

async function getData(location) {
  setConversionOnStartup();
  const data = await getAPI(location);
  createLayouts(data);
}

getData("lon");
const conversionBtn = document.getElementById("change-temp-conversion");
conversionBtn.addEventListener("click", () => {
  changeConversion();

  const currentLocation = document.getElementById("location-name");
  getData(currentLocation.textContent);
});
