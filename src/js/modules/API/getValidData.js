import { getFirstSection } from "./firstAPISet";
import { getSecondSection } from "./secondAPISet";

export function getValidAPIData(data) {
  const firstSection = getFirstSection(data);
  console.log(firstSection);
  const secondSection = getSecondSection(data);
  console.log(secondSection);
}
