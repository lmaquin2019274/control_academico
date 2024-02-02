document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");
  
    window.addTask = function() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <span>${taskText}</span>
          <button onclick="toggleTask(this)">✔️</button>
          <button onclick="deleteTask(this)">🗑️</button>
        `;
  
        taskList.appendChild(listItem);
        taskInput.value = "";
      }
    };
  
    window.toggleTask = function(button) {
      const listItem = button.parentNode;
      listItem.classList.toggle("completed");
    };
  
    window.deleteTask = function(button) {
      const listItem = button.parentNode;
      taskList.removeChild(listItem);
    };
  });
  