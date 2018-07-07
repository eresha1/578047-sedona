
var link = document.querySelector(".button-search");
var searchForm = document.querySelector(".search-info");
var dateArrive = searchForm.querySelector("#arrive");
var form = document.querySelector("form");
var dateDepart = searchForm.querySelector("#depart");
var numberAdult = searchForm.querySelector("#adult");
var numberChildren = searchForm.querySelector("#children");

if (searchForm) {
  searchForm.classList.add("modal-close");
}

if (link) {
  link.addEventListener("click", function (event) {
    searchForm.classList.toggle("modal-close");
    searchForm.classList.toggle("modal-show");
    searchForm.classList.remove("modal-error");

    dateArrive.focus();
  });
}

form.addEventListener("submit", function (evt) {
  if (!dateArrive.value || !dateDepart.value ||
    !numberAdult.value || !numberChildren.value) {
    evt.preventDefault();
    searchForm.classList.remove("modal-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (event.keyCode === 27) {

    if (searchForm.classList.contains("modal-show")) {
      event.preventDefault();
      searchForm.classList.remove("modal-show");
      searchForm.classList.remove("modal-error");
    }
  }
});
