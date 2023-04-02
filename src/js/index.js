import { getAPI } from "./modules/API/getWeatherAPI";
import "../css/reset.css";
import "../css/style.css";
import { getValidAPIData } from "./modules/API/getValidData";
import { createLayouts } from "./modules/createLayout";
import {
  changeConversion,
  setConversionOnStartup,
} from "./modules/changeConversion";

import {
  createLoadingScreen,
  removeLoadingScreen,
} from "./modules/layout/loadingScreen";

async function getData(location) {
  const data = await getAPI(location);
  createLayouts(data);
}

function changeTemperatureConversionBtn() {
  changeConversion();

  const currentLocation = document.getElementById("location-name");
  getData(currentLocation.textContent);
}

function searchBtnHandler(e) {
  e.preventDefault();

  const location = document.getElementById("search");
  getData(location.value);

  location.value = "";
}

// Start up
async function start() {
  createLoadingScreen();
  setConversionOnStartup();
  await getData("london");
  removeLoadingScreen();
}

start();

const conversionBtn = document.getElementById("change-temp-conversion");
conversionBtn.addEventListener("click", () => changeTemperatureConversionBtn());

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", (e) => searchBtnHandler(e));
