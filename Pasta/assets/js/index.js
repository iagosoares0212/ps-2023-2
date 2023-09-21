$(document).ready(function() {
  $.datepicker.setDefaults($.datepicker.regional['pt-BR']); // Define o idioma para português

  $(".datepicker").datepicker({
    prevText: '<i class="fa fa-fw fa-angle-left"></i>',
    nextText: '<i class="fa fa-fw fa-angle-right"></i>'
  });
});

const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("popup");

openPopupButton.addEventListener("click", () => {
    popup.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
});

const openPopup1Button = document.getElementById("openPopup1");
const closePopup1Button = document.getElementById("closePopup1");
const popup1 = document.getElementById("popup1");

openPopup1Button.addEventListener("click", () => {
    popup1.style.display = "block";
});

closePopup1Button.addEventListener("click", () => {
    popup1.style.display = "none";
});

