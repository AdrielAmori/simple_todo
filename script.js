const botao = document.querySelector("#add")
botao.addEventListener("click", addTask)

function addTask() {
    const tarefa = document.getElementById("task").value


    const li = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    li.appendChild(checkbox)
    li.append(" " + tarefa)

    const ul = document.querySelector("#lista")
    ul.appendChild(li)
}




