# HNG Stage 1a - Advanced Todo Card

## Overview
This project is a single interactive Todo Card built as part of the HNG Frontend Wizards Stage 1a task.

It demonstrates a fully functional, stateful UI component with editing, status control, expand/collapse behavior, time tracking, and accessibility support.

---

## 🚀 Features

### ✔ Core Todo Card
- Displays task title and description
- Shows priority (Low, Medium, High)
- Displays status (Pending, In Progress, Done)
- Shows due date and live time remaining
- Displays overdue state when applicable

---

### ✏️ Edit Mode
- Edit task title
- Edit description
- Change priority
- Update due date
- Save or cancel changes

---

### 🔁 Status & Interaction
- Status controlled via dropdown
- Checkbox syncs with status
- Marking as done updates UI automatically
- Fully synchronized state (checkbox, status, title style)

---

### 📦 Expand / Collapse
- Description can be expanded or collapsed
- Automatically collapses long content
- Accessible via keyboard
- Uses ARIA attributes for accessibility

---

### ⏱ Time Handling
- Live countdown to due date
- Shows:
  - "Due in X days / hours / minutes"
  - "Overdue by X hours"
  - "Completed" when task is done
- Updates every 60 seconds

---

## ♿ Accessibility Features
- Proper semantic HTML structure
- ARIA attributes (`aria-expanded`, `aria-controls`, `aria-live`)
- Keyboard navigable controls
- Labels correctly linked to inputs
- Screen reader friendly structure

---

## 📱 Responsiveness
- Mobile-first design
- Works across 320px – 1024px+
- Flexible layout with no overflow issues
- Tags wrap properly on small screens

---

## 🧪 Test IDs (Required by HNG)

All required test IDs are implemented exactly as specified:

- `test-todo-card`
- `test-todo-title`
- `test-todo-description`
- `test-todo-priority`
- `test-todo-status`
- `test-todo-status-control`
- `test-todo-due-date`
- `test-todo-time-remaining`
- `test-todo-overdue-indicator`
- `test-todo-complete-toggle`
- `test-todo-tags`
- `test-todo-tag-work`
- `test-todo-tag-urgent`
- `test-todo-edit-button`
- `test-todo-delete-button`
- `test-todo-edit-form`
- `test-todo-edit-title-input`
- `test-todo-edit-description-input`
- `test-todo-edit-priority-select`
- `test-todo-edit-due-date-input`
- `test-todo-save-button`
- `test-todo-cancel-button`
- `test-todo-expand-toggle`
- `test-todo-collapsible-section`
- `test-todo-priority-indicator`

---

## 🛠 Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript (ES6)

---

## 📂 How to Run Locally

```bash
git clone https://github.com/your-username/hng-stage-1a.git
cd hng-stage-1a
open index.html