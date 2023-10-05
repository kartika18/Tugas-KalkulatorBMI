let buttonSubmit = document.getElementById("forSubmit");
buttonSubmit.addEventListener("click", submit);

function submit(event) {
  event.preventDefault();

  let weight = document.getElementById("inputWeight").value;
  let height = document.getElementById("inputHeight").value;
  //   document.getElementById("forResult").innerHTML = height;

  if (weight !== "" || height !== "") {
    let rumusBMI = (weight / (height / 100)) ^ 2;
    console.log(rumusBMI);
  } else {
    alert("tidak ada isi");
  }
}
