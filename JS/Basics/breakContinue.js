for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

const color = "red";

switch (color) {
  case "red":
    console.log("The color is red");
    break;
  case "blue":
    console.log("The color is blue");
    break;
  case "green":
    console.log("The color is green");
    break;
  default:
    console.log("The color is unknown");
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
