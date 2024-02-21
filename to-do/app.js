const taskInputField = document.getElementById("taskInputField");
const task_btn = document.getElementById("task_btn");
const task_container = document.getElementById("task_container");

const addTask = () => {
    if (taskInputField.value) {
        let addedTask = document.createElement("li");
        let iconContainer = document.createElement("div")
        let iconSuccess = document.createElement("span");
        let iconDelete = document.createElement("span");

        iconSuccess.classList.add("material-symbols-outlined", "iconSuccess");
        iconSuccess.textContent = "check";

        iconDelete.classList.add("material-symbols-outlined", "iconDelete");
        iconDelete.textContent = "delete";
        //Inicio Prueba
        // const addedTaskText = task.value;
        //Fin Prueba
        addedTask.textContent = taskInputField.value;
        // addedTaskText.style.textTransform = "capitalize";
        addedTask.classList.add("task")
        iconContainer.append(iconSuccess, iconDelete)
        // task_container.append(addedTask, iconContainer);
        addedTask.appendChild(iconContainer);
        task_container.appendChild(addedTask);

        iconSuccess.addEventListener("click", (e) => {
            const targetNodeOffSuccess = e.target.parentNode.parentNode
            targetNodeOffSuccess.classList.toggle("done");
            // console.log("funciona");
        });

        iconDelete.addEventListener("click", (e) => {
            const targetNodeOffDelete = e.target.parentNode.parentNode
            targetNodeOffDelete.remove();
        });




    } else {
        alert("Por favor ingrese una tarea");
    }
}



task_btn.addEventListener("click", () => {
    addTask();
    taskInputField.value = "";
});

taskInputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
        taskInputField.value = "";
    }

    // console.log(e)
})

console.log(task.style);


/*
<span class="material-symbols-outlined">
    check
</span>
*/

//TODO: convertir texto de la tarea a capitalize