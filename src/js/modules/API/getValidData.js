import { getFirstSection } from "./firstAPISet";
import { getSecondSection } from "./secondAPISet";
import { getThirdSection } from "./thirdAPISet";

export function getValidAPIData(data) {
  return {
    firstSet: getFirstSection(data),
    secondSet: getSecondSection(data),
    thirdSet: getThirdSection(data),
  };
}
