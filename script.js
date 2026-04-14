const title = document.getElementById("title");
const desc = document.getElementById("desc");
const status = document.getElementById("status");
const statusControl = document.getElementById("statusControl");
const checkbox = document.getElementById("checkbox");

const timeEl = document.getElementById("time");
const overdueEl = document.getElementById("overdue");
const dueDateEl = document.getElementById("dueDate");

const priorityEl = document.getElementById("priority");
const priorityIndicator = document.getElementById("priorityIndicator");

const editBtn = document.getElementById("editBtn");
const editForm = document.getElementById("editForm");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");

const editTitle = document.getElementById("editTitle");
const editDesc = document.getElementById("editDesc");
const editPriority = document.getElementById("editPriority");
const editDate = document.getElementById("editDate");

const expandBtn = document.getElementById("expandBtn");
const descBox = document.getElementById("descBox");

// state
let dueDate = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

// PRIORITY UI
function updatePriorityUI() {
  const value = priorityEl.textContent.trim().toLowerCase();

  priorityIndicator.classList.remove("low", "medium", "high");

  if (value === "low") priorityIndicator.classList.add("low");
  else if (value === "medium") priorityIndicator.classList.add("medium");
  else priorityIndicator.classList.add("high");
}

updatePriorityUI();

// time
function updateTime() {
  if (status.textContent === "Done") {
    timeEl.textContent = "Completed";
    overdueEl.textContent = "";
    return;
  }

  const diff = dueDate - new Date();

  const mins = Math.floor(diff / 60000);
  const hrs = Math.floor(mins / 60);
  const days = Math.floor(hrs / 24);

  if (diff < 0) {
    overdueEl.textContent = "Overdue";
    timeEl.textContent = `Overdue by ${Math.abs(hrs)} hour(s)`;
    return;
  }

  overdueEl.textContent = "";

  if (days > 0) timeEl.textContent = `Due in ${days} day(s)`;
  else if (hrs > 0) timeEl.textContent = `Due in ${hrs} hour(s)`;
  else timeEl.textContent = `Due in ${mins} minute(s)`;
}

setInterval(updateTime, 60000);
updateTime();

dueDateEl.textContent = dueDate.toLocaleString();

// status sync
function syncStatus() {
  const val = statusControl.value;

  status.textContent = val;

  if (val === "Done") {
    checkbox.checked = true;
    title.classList.add("completed");
  } else {
    checkbox.checked = false;
    title.classList.remove("completed");
  }
}

statusControl.addEventListener("change", syncStatus);

checkbox.addEventListener("change", () => {
  statusControl.value = checkbox.checked ? "Done" : "Pending";
  syncStatus();
});

// expand/collapse description
descBox.classList.add("collapsed");

expandBtn.addEventListener("click", () => {
  const isCollapsed = descBox.classList.contains("collapsed");

  descBox.classList.toggle("collapsed");

  expandBtn.textContent = isCollapsed ? "Collapse" : "Expand";
  expandBtn.setAttribute("aria-expanded", isCollapsed);
});

// edit task
editBtn.addEventListener("click", () => {
  editForm.hidden = false;

  editTitle.value = title.textContent;
  editDesc.value = desc.textContent;
  editPriority.value = priorityEl.textContent.trim();
});

/* CANCEL EDIT */
cancelBtn.addEventListener("click", () => {
  editForm.hidden = true;
});

/* SAVE EDIT */
saveBtn.addEventListener("click", () => {
  title.textContent = editTitle.value;
  desc.textContent = editDesc.value;
  priorityEl.textContent = editPriority.value;

  if (editDate.value) {
    dueDate = new Date(editDate.value);
    dueDateEl.textContent = dueDate.toLocaleString();
  }

  updatePriorityUI();
  editForm.hidden = true;
});