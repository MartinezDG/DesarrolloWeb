import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos = [
    new TodoItem(1, "Buy Flowers"), 
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), 
    new TodoItem(4, "Call Joe", true)
];

let collection = new TodoCollection("Adam", todos);

function renderTodos(): void {
    const list = document.getElementById("todoList")!;
    list.innerHTML = ""; 

    collection.getTodoItems(true).forEach(item => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            ${item.task} 
            <span class="badge ${item.complete ? 'bg-success' : 'bg-warning'}">
                ${item.complete ? "Completado" : "Pendiente"}
            </span>
        `;
        list.appendChild(li);
    });
}

renderTodos();
