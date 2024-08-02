let activeButton = null;
const rate1 = document.getElementById("1");
const rate2 = document.getElementById("2");
const rate3 = document.getElementById("3");
const rate4 = document.getElementById("4");
const rate5 = document.getElementById("5");
const submit = document.getElementById("submit");
const mainview = document.getElementById("main");
const hidden = document.getElementById("hidden");
const rated = document.getElementById("rated");

function clickActive(button) {
  if (activeButton) {
    activeButton.classList.add("btn");
    activeButton.classList.remove("active");
  }
  button.classList.add("active");
  button.classList.remove("btn");

  activeButton = button;

  rated.textContent = `You selected ${activeButton.id} out of 5`;
}

function clickSubmit() {
  if (activeButton) {
    mainview.classList.add("mainview");
    hidden.classList.remove("hide");
  } else {
    alert("Berikan rating terlebih dahulu!");
  }
}

rate1.addEventListener("click", () => clickActive(rate1));
rate2.addEventListener("click", () => clickActive(rate2));
rate3.addEventListener("click", () => clickActive(rate3));
rate4.addEventListener("click", () => clickActive(rate4));
rate5.addEventListener("click", () => clickActive(rate5));

submit.addEventListener("click", clickSubmit);
