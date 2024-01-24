const inpBox = document.getElementById("inp-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if(inpBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inpBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inpBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if(e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();