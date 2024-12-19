let button = document.querySelectorAll(".img-label");
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
var form = document.getElementById("form");

for (let i = 0; i < button.length; i++) {
  button[i].onclick = function () {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  };
}

span.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
  form.reset();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    form.reset();
  }
};

form.addEventListener("submit", function () {
  form.reset();
  alert("Форма успешно отправлена");
});
