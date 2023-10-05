let buttonSubmit = document.getElementById("forSubmit");
buttonSubmit.addEventListener("click", submit);

function submit(event) {
  event.preventDefault();

  let weight = document.getElementById("inputWeight").value;
  let height = document.getElementById("inputHeight").value;
  let Result = document.getElementById("forResult");

  if (weight !== "" && height !== "") {
    let rumusBMI = weight / (height / 100) ** 2;
    let theCategories;
    if (rumusBMI >= 30) {
      theCategories = "Obesity";
    } else if (rumusBMI >= 25 && rumusBMI <= 29.9) {
      theCategories = "Overweight";
    } else if (rumusBMI >= 18.5 && rumusBMI <= 24.9) {
      theCategories = "Normal Weight";
    } else if (rumusBMI <= 18.5) {
      theCategories = "Underweight";
    } else {
      console.log("Something Wrong");
    }

    Result.innerHTML = `Your BMI is <b>${rumusBMI.toFixed(
      1
    )}</b> which means you are <b>${theCategories}</b>`;
  } else {
    alert("Put weight and height first");
  }
}
