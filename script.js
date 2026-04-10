const checkbox = document.getElementById("checkbox");
const title = document.getElementById("title");
const status = document.getElementById("status");
const timeEl = document.getElementById("time");

const dueDate = new Date("2026-03-01T18:00:00Z");

// ---------- TIME REMAINING ----------
function getTimeRemaining() {
  const now = new Date();
  const diff = dueDate - now;

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // overdue
  if (diff < 0) {
    const absMinutes = Math.abs(minutes);
    const absHours = Math.abs(hours);
    const absDays = Math.floor(absHours / 24);

    if (absDays >= 1) return `Overdue by ${absDays} day(s)`;
    if (absHours >= 1) return `Overdue by ${absHours} hour(s)`;
    return `Overdue by ${absMinutes} minute(s)`;
  }

  // upcoming
  if (days >= 2) return `Due in ${days} days`;
  if (days === 1) return "Due tomorrow";
  if (hours >= 1) return `Due in ${hours} hour(s)`;
  if (minutes >= 1) return `Due in ${minutes} minute(s)`;

  return "Due now!";
}

function updateTime() {
  timeEl.textContent = getTimeRemaining();
}

updateTime();
setInterval(updateTime, 60000);

// ---------- CHECKBOX TOGGLE ----------
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    title.style.textDecoration = "line-through";
    status.textContent = "Done";
  } else {
    title.style.textDecoration = "none";
    status.textContent = "Pending";
  }
});

// ---------- BUTTONS ----------
document
  .querySelector('[data-testid="test-todo-edit-button"]')
  .addEventListener("click", () => {
    console.log("edit clicked");
  });

document
  .querySelector('[data-testid="test-todo-delete-button"]')
  .addEventListener("click", () => {
    alert("Delete clicked");
  });