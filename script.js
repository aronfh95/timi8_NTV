function sayHallo() {
  console.log("User pressed button");
  let name = document.getElementById("nameInput").value;
  console.log("nafnið er:", name);
  if (name === "") {
    document.getElementById("nameOutput").innerText =
      "skrifaðu nafnið þitt fyrst";
    return;
  }

  document.getElementById("nameOutput").innerText = `Halló ${name}!`;
}

function chackAge() {
  let age = Number(document.getElementById("ageInput").value);
  console.log("Aldurinn er:", age);
  console.log(isNaN(age));
  if (isNaN(age) || age === 0) {
    document.getElementById("ageOutput").innerText = "Sláðu inn aldur!";
    return;
  }

  let messege = "";
  if (age > 18) {
    messege = "Þú ert Fullorðinn!";
  } else messege = "Þú ert barn!";
  console.log(messege);

  document.getElementById("ageOutput").innerText = messege;
}

function alculator() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let opurator = document.getElementById("opurator").value;
  console.log("Tala 1:", num1, "Tala 2:", num2, opurator);
  let result;
  if (opurator === "+") {
    result = num1 + num2;
  } else result = num1 - num2;

  console.log("Nuðurstaða: ", result);
  document.getElementById("cardOutput").innerText = result;
}
