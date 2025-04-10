const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.getElementById('input-box').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
})

function addTask(){
  if(inputBox.value  === ''){
    alert("You have to write something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span")
    span.className = "delete";
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    let span2 = document.createElement("span");
    span2.className = "edit";
    span2.innerHTML = "✎"
    li.appendChild(span2);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.className === "delete"){
    e.target.parentElement.remove();
    saveData();
  }
  else if(e.target.className === "edit"){
    let li = e.target.parentElement;
    let taskText = li.childNodes[0].nodeValue.trim();
    inputBox.value = taskText;
    li.remove();
    inputBox.focus();
    saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);

}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();