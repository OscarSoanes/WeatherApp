export function createLoadingScreen() {
  const loadingScreen = document.createElement("div");
  loadingScreen.setAttribute("id", "loading-screen");
  loadingScreen.textContent = "Loading...";
  const main = document.querySelector("main");
  main.append(loadingScreen);
}

export function removeLoadingScreen() {
  const loadingScreen = document.getElementById("loading-screen");
  const main = document.querySelector("main");
  main.removeChild(loadingScreen);
}
