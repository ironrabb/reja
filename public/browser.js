console.log("frontend java script ishlayapti");
function itemTemplate(item) {
  return `<li 
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
              EDIT
            </button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">DELETE</button>
          </div>
        </li>`;
}
let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (createField.value.trim() === "") {
    alert("iltimos reja matnini kiriting");
    return;
  }

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("iltmos qayta urinib koring");
    });
});
document.addEventListener("click", function (e) {
  // delete button bosilganda
  if (e.target.classList.contains("delete-me")) {
    if (confirm("siz rostdan ham ochirmoqchimisiz?")) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("iltmos qayta urinib koring");
        });
    }
  }

  // edit button bosilganda
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Yangi reja matnini kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text")
        .innerHTML,
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          reja: userInput,
        })
        .then((response) => {
          e.target.parentElement.parentElement.querySelector(
            ".item-text",
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("iltmos qayta urinib koring");
        });
    }
  }
});
// delete all button bosilganda
document.querySelector("#clean-all").addEventListener("click", function () {
  if (!confirm("siz rostdan ham barcha rejalarni ochirmoqchimisiz?")) {
    return;
  }
  axios
    .post("/delete-all", { deleteAll: true })
    .then((response) => {
      console.log(response.data);
      document.getElementById("item-list").innerHTML = "";
    })
    .catch((err) => {
      console.log("iltmos qayta urinib koring");
    });
});
