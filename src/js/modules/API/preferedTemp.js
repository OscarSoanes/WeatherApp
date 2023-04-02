export function prefersCelcius() {
  const result = localStorage.getItem("prefers-celcius");

  if (result === "false") {
    return false;
  } else if (result === "true") {
    return true;
  } else {
    // TODO SET
    return true;
  }
}
