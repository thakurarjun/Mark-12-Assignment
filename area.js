const sidesInput = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function calculateInputOfSides(base, height) {
  const multiOfSides = base * height;
  return multiOfSides;
}

function calculateAreaOfTriangle() {
  const multiOfSides = calculateInputOfSides(
    Number(sidesInput[0].value),
    Number(sidesInput[1].value)
  );
  const areaOfTriangle = multiOfSides / 2;
  output.innerText =
    "The Area Of Triangle is " + areaOfTriangle + " square centimeter.";
}

areaBtn.addEventListener("click", calculateAreaOfTriangle);
