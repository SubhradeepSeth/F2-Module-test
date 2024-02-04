// Selecting form and button elements
let form = document.querySelector(".input-btn");
let btn = document.querySelector(".add");

// Adding an event listener to the form to handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask();
  form.reset();
});

// Variables to keep track of task counts based on priority

let totalTaskCount = 0,
  lowCount = 0,
  mediumCount = 0,
  highCount = 0;

// Selecting text elements for displaying counts

let tdTxt = document.querySelector(".td-txt");
let lowTxt = document.querySelector(".low-txt");
let medTxt = document.querySelector(".med-txt");
let highTxt = document.querySelector(".high-txt");

function taskCount() {
  if (priority.value === "Low") lowCount++;
  else if (priority.value === "Medium") mediumCount++;
  else highCount++;
  textfn(lowTxt, medTxt, highTxt, tdTxt);
}
// Function to update the displayed counts

function textfn(a, b, c, d) {
  a.innerText = lowCount;
  b.innerText = mediumCount;
  c.innerText = highCount;
  d.innerText = totalTaskCount;
}

// Selecting input elements for task details

let task = document.querySelector("#task");
let date = document.querySelector("#date");
let priority = document.querySelector(".priority");
let imgTxt = document.querySelector(".imgtxt1");

// Function to add a new task
console
function addTask() {
  imgTxt.style.display = "none";
  let works2 = document.querySelector(".works-2");
  let addTask1 = document.createElement("div");
  addTask1.classList.add("add-task");
  let toDoEdit = document.createElement("div");
  let filterTask = document.createElement("div");
  let taskFilt = document.createElement("select");
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");
  option1.value = "To-Do";
  option1.innerText = "To-Do";
  option2.value = "In-Progress";
  option2.innerText = "In-Progress";
  option3.value = "Done";
  option3.innerText = "Done";
  option1.selected = "true";
  option1.disabled = "true";
  option3.disabled = "true";
  filterTask.className = "filter-task";
  taskFilt.classList.add("task-filt");
  taskFilt.value = "";
  taskFilt.append(option1, option2, option3);
  filterTask.appendChild(taskFilt);
  taskFilt.setAttribute("onchange", "startDone(this)");
  let showTaskLabel = document.createElement("div");
  let frmEdit = document.createElement("div");
  toDoEdit.classList.add("to-do-edit");
  showTaskLabel.classList.add("show-task-label");
  frmEdit.classList.add("frm-edit");
  toDoEdit.classList.add("flex");
  showTaskLabel.classList.add("flex");
  frmEdit.classList.add("flex");
  let checkComplete = document.createElement("input");
  checkComplete.classList.add("check-complete");
  checkComplete.type = "checkbox";
  checkComplete.value = "";
  checkComplete.disabled = true;

  let dateTxt = document.createElement("p");
  let priorityTxt = document.createElement("p");
  dateTxt.classList.add("date-txt");
  priorityTxt.classList.add("priority-txt");
  dateTxt.innerText = date.value;
  priorityTxt.innerText = priority.value;
  if (priority.value === "High") priorityTxt.style.color = "red";
  toDoEdit.append(checkComplete, dateTxt, priorityTxt);
  let showTask = document.createElement("input");
  showTask.id = "show-task";
  showTask.type = "text";
  showTask.value = "";
  // showTask.required=true;
  showTask.setAttribute("required", "true");
  let editLabel = document.createElement("label");
  editLabel.htmlFor = "show-task";
  editLabel.classList.add("edit-label");
  editLabel.innerText = task.value;
  showTaskLabel.append(showTask, editLabel);
  let editBtn = document.createElement("button");
  let saveBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");
  editBtn.innerHTML = `<i
    class="fa-regular fa-pen-to-square fa-2xl"
    style="color: #808080"
  ></i>`;
  editBtn.setAttribute("onclick", "edit(this)");
  saveBtn.innerHTML = `<i
  class="fa-regular fa-floppy-disk fa-2xl"
  style="color: #808080"
  ></i>`;
  deleteBtn.innerHTML = `<svg
xmlns="http://www.w3.org/2000/svg"
width="25"
height="25"
viewBox="0 0 13 14"
fill="none"
>
<path
  d="M8.20214 4.98548H6.87158V10.5073H8.20214V4.98548Z"
  fill="#808080"
/>
<path
  d="M5.46239 4.98548H4.13184V10.5073H5.46239V4.98548Z"
  fill="#808080"
/>
<path
  d="M12.478 2.16712C12.4754 2.03061 12.4295 1.89846 12.3469 1.78975C12.2642 1.68104 12.1492 1.6014 12.0184 1.56232C11.9596 1.53782 11.8974 1.52252 11.8339 1.51696H8.28678C8.1525 1.07791 7.88082 0.693554 7.51174 0.420471C7.14265 0.147388 6.69564 0 6.23651 0C5.77738 0 5.33038 0.147388 4.96129 0.420471C4.5922 0.693554 4.32053 1.07791 4.18625 1.51696H0.639107C0.580679 1.51814 0.522686 1.52729 0.46674 1.54418H0.45162C0.313182 1.58701 0.193338 1.67547 0.11163 1.79515C0.0299214 1.91483 -0.00883041 2.05866 0.00169348 2.20319C0.0122174 2.34771 0.071396 2.48441 0.169579 2.59099C0.267763 2.69757 0.399158 2.76774 0.542339 2.79006L1.25298 12.5334C1.26382 12.9127 1.41693 13.2741 1.68191 13.5458C1.94688 13.8175 2.30435 13.9797 2.68332 14H9.78668C10.1662 13.9804 10.5244 13.8186 10.79 13.5468C11.0556 13.2751 11.2092 12.9132 11.22 12.5334L11.9277 2.79914C12.0802 2.77797 12.22 2.70232 12.3212 2.58615C12.4223 2.46999 12.478 2.32116 12.478 2.16712ZM6.23651 1.21456C6.3661 1.21458 6.49427 1.24146 6.61294 1.29351C6.73161 1.34556 6.8382 1.42164 6.92598 1.51696H5.54704C5.63459 1.42135 5.74114 1.34507 5.85986 1.29299C5.97859 1.24092 6.10687 1.21421 6.23651 1.21456ZM9.78668 12.7904H2.68332C2.60168 12.7904 2.47467 12.6573 2.45955 12.4457L1.75798 2.81123H10.715L10.0135 12.4457C9.99836 12.6573 9.87135 12.7904 9.78668 12.7904Z"
  fill="#808080"
/>
  </svg>`;
  deleteBtn.setAttribute("onclick", "deleteTask(this)");

  deleteBtn.type = "button";
  editBtn.classList.add("edit");
  editBtn.type = "button";
  saveBtn.classList.add("save");
  saveBtn.type = "button";
  deleteBtn.classList.add("delete");
  frmEdit.append(editBtn, saveBtn, deleteBtn);

  // Appending elements to the task container
  addTask1.append(toDoEdit, filterTask, showTaskLabel, frmEdit);
  works2.appendChild(addTask1);
  totalTaskCount++;
  taskCount();
}
let taskFilter123=document.getElementById("taskfilter");
taskFilter123.addEventListener("change",search);
let searchoninput=document.querySelector(".searchtask");
searchoninput.addEventListener("input",(e)=>{
  let searchTask1=document.querySelectorAll(".add-task");
  searchTask1.forEach((item)=>{
    if(item.children[2].children[1].innerText.toLowerCase().includes(searchoninput.value.toLowerCase())){
      item.style.display="flex";
    }
    else{
      item.style.display="none";
    }
  });
  
});

function search(){
  let boss=document.querySelector(".boss");
  let searchTask=document.querySelectorAll(".add-task");
  searchTask.forEach((e)=>{
    if(e.children[0].children[2].innerText===taskFilter123.value){
      e.style.display="flex";
    }
    else{
      if(taskFilter123.value==="All"){
        e.style.display="flex";
      }
      else{

        e.style.display="none";
      }
    }
  });

}

// Function to handle task editing

function edit(k) {
  let addtask2 = k.parentNode.parentNode;

  let showTaskInp = addtask2.children[2];
  let showTaskEdit = showTaskInp.children[0];
  let showtasklabel1 = showTaskInp.children[1];
  let saveBtn1 = addtask2.children[3].children[1];
  showTaskEdit.style.display = "flex";
  showTaskEdit.setAttribute("required", "true");
  showtasklabel1.style.display = "none";
  saveBtn1.style.display = "flex";
  k.style.display = "none";

  saveBtn1.addEventListener("click", function () {
    if (showTaskEdit.value !== "") {
      showtasklabel1.innerText = showTaskEdit.value;
      showTaskEdit.style.display = "none";
      showtasklabel1.style.display = "flex";
      saveBtn1.style.display = "none";
      k.style.display = "flex";
    } else {
      alert("Please fill task");
    }
  });
}

// Function to handle task deletion
function deleteTask(k) {
  startDone(k);
  let addtask3 = k.parentNode.parentNode;
  addtask3.remove();
  totalTaskCount--;
  let taskPriority = addtask3.children[0].children[2].innerText;

  if (taskPriority === "Low") lowCount--;
  else if (taskPriority === "Medium") mediumCount--;
  else highCount--;
  textfn(lowTxt, medTxt, highTxt, tdTxt);
  let imgrec = document.querySelectorAll(".add-task");
  if (imgrec.length === 0) {
    imgTxt.style.display = "flex";
  }
}

// Variables to keep track of task counts in different states (start, in-progress, done)

let alow = 0,
  amed = 0,
  ahigh = 0,
  aall = 0;
let blow = 0,
  bmed = 0,
  bhigh = 0,
  ball = 0;

// Function to update counts based on task state (start, in-progress, done)
function startDone(k) {
  let worksMain = k.parentNode.parentNode.parentNode.parentNode;
  let box1 = worksMain.children[3].children[0].children[1];
  let box2 = worksMain.children[3].children[1].children[1];
  let box3 = worksMain.children[3].children[2].children[1];
  let box4 = worksMain.children[3].children[3].children[1];
  let box5 = worksMain.children[4].children[0].children[1];
  let box6 = worksMain.children[4].children[1].children[1];
  let box7 = worksMain.children[4].children[2].children[1];
  let box8 = worksMain.children[4].children[3].children[1];
  let opt1 = k.children[1];
  let opt2 = k.children[2];
  let strike = k.parentNode.parentNode.children[2].children[1];
  let disedit = k.parentNode.parentNode.children[3].children[0];
  let dcheck = k.parentNode.parentNode.children[0].children[0];
  if (
    k.value === "In-Progress" ||
    (k.className === "delete" &&
      k.parentNode.parentNode.children[1].children[0].value === "In-Progress")
  ) {
    if (k.className === "delete") {
      aall--;
      if (k.parentNode.parentNode.children[0].children[2].innerText === "Low") {
        alow--;
      } else if (
        k.parentNode.parentNode.children[0].children[2].innerText === "Medium"
      ) {
        amed--;
      } else {
        ahigh--;
      }
    } else {
      opt1.disabled = true;
      opt2.disabled = false;
      aall++;
      if (k.parentNode.parentNode.children[0].children[2].innerText === "Low") {
        alow++;
      } else if (
        k.parentNode.parentNode.children[0].children[2].innerText === "Medium"
      ) {
        amed++;
      } else {
        ahigh++;
      }
    }
    box1.innerText = aall;
    box2.innerText = alow;
    box3.innerText = amed;
    box4.innerText = ahigh;
  } else if (
    k.value === "Done" ||
    (k.className === "delete" &&
      k.parentNode.parentNode.children[1].children[0].value === "Done")
  ) {
    // opt2.disabled=false;
    if (k.className === "delete") {
      ball--;
      if (k.parentNode.parentNode.children[0].children[2].innerText === "Low") {
        blow--;
      } else if (
        k.parentNode.parentNode.children[0].children[2].innerText === "Medium"
      ) {
        bmed--;
      } else {
        bhigh--;
      }
    } else {
      ball++;
      aall--;
      box1.innerText = aall;
      dcheck.checked = true;
      strike.style.textDecoration = "line-through";
      strike.style.color = "#707070";
      disedit.style.display = "none";
      if (k.parentNode.parentNode.children[0].children[2].innerText === "Low") {
        blow++;
        alow--;
      } else if (
        k.parentNode.parentNode.children[0].children[2].innerText === "Medium"
      ) {
        bmed++;
        amed--;
      } else {
        bhigh++;
        ahigh--;
      }
    }
    box5.innerText = ball;
    box6.innerText = blow;
    box7.innerText = bmed;
    box8.innerText = bhigh;
    box2.innerText = alow;
    box3.innerText = amed;
    box4.innerText = ahigh;
  }
}
