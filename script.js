let celciusEl = document.getElementById("cel");
let fahEL = document.getElementById("fah");

celciusEl.addEventListener("input", function () {
  let cel = this.value;
  let fah = (cel * 9) / 5 + 32;
  if (!Number.isInteger(fah)) {
    fah = fah.toFixed(4);
  }
  fahEL.value = fah;
});

fahEL.addEventListener("input", function () {
  let fah = this.value;
  let cel = ((fah - 32) * 5) / 9;
  if (!Number.isInteger(cel)) {
    cel = cel.toFixed(4);
  }
  celciusEl.value = cel;
});
