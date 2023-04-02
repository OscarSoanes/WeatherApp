import { getAPI } from "./modules/API/getWeatherAPI";
import "../css/reset.css";
import "../css/style.css";
import { getValidAPIData } from "./modules/API/getValidData";
import { createLayouts } from "./modules/createLayout";

async function getData(location) {
  const data = await getAPI(location);
  createLayouts(data);
}

getData("lon");
