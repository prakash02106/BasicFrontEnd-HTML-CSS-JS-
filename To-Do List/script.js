function addTask() {
    const taskinput = document.getElementById("taskinput");
    const taskText = taskinput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const taskList = document.getElementById("taskList");
  
    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Optional: Add a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = function () {
      taskList.removeChild(li);
    };
  
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  
    // Clear input
    taskInput.value = "";
  }
  