// Project : Calculator

let commands = document.querySelector(".commands");
let result = document.querySelector(".result");
let clear = document.querySelector(".clear");
let de = document.querySelector(".de");
let equal = document.querySelector(".equal");

let nums = [],
  opearation = [];
let memory;
/////////////////

commands.addEventListener("click", (e) => {
  let bContent = e.target.textContent;
  let bName = e.target;

  bName.style.cssText = "animation-name:clicking";
  setTimeout(() => {
    bName.style.removeProperty("animation-name");
  }, 300);

  // opearation
  if (
    bContent == "+" ||
    bContent == "-" ||
    bContent == "*" ||
    bContent == "/"
  ) {
    if (result.textContent.includes("=")) {
      result.textContent = memory;
    }
    if (isNaN(result.textContent[result.textContent.length - 1])) {
      result.textContent = result.textContent.slice(0, -1) + bContent;
      console.log("The operation is Changed to " + bContent);
      return;
    }

    result.textContent += bContent;
    console.log("the operation of " + bContent + " is occured ");
  }

  // number
  if (!isNaN(Number(bContent)) || bContent === ".") {
    if (result.textContent.includes("=")) {
      result.textContent = "";
    }
    result.textContent += bContent;
    console.log(bContent + " is Clicked");
  }

  // Clear
  if (bName === clear) {
    result.textContent = "";
    console.clear();
    console.log("We have cleard the screen");
  }

  // delete
  if (bName === de) {
    if (result.textContent.includes("=")) {
      result.textContent = memory;
    }
    result.textContent = result.textContent.slice(0, -1);
  }
  // Equal
  if (bName === equal) {
    let numRe = /\d+(\.\d+)?/g;
    nums = result.textContent.match(numRe);
    console.log(nums);

    let operRe = /\+|\-|\*|\//g;
    opearation = result.textContent.match(operRe);
    console.log(opearation);

    console.log("Equal button is pressed");

    let finalResult = nums.reduce(function (total, currentValue, currentIndex) {
      return calc(
        opearation[currentIndex - 1],
        parseFloat(total),
        parseFloat(currentValue)
      );
    });
    memory = finalResult;
    console.log(finalResult);
    result.textContent = "= " + finalResult;
  }
});

function calc(operation, num1, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;

    case "*":
      return num1 * num2;

    case "-":
      return num1 - num2;

    case "/":
      return num1 / num2;
  }
}

let darkBody = document.querySelector(".dark");
let modeControl = document.querySelector(".controlMode span");

modeControl.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    modeControl.style.cssText = "translate:100px;transition:0.5s";
  } else {
    modeControl.style.cssText = "translate:0px;transition:0.5s";
  }
};
