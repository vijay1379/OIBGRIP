const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];


function renderTodos() {

	todoList.innerHTML = '';

	
	for (let i = 0; i < todos.length; i++) {
		const todo = todos[i];

	
		const li = document.createElement('li');
		li.innerHTML = `
			<input type="checkbox" id="todo-${i}" ${todo.completed ? 'checked' : ''}>
			<label for="todo-${i}">${todo.text}</label>
			<button class="delete" data-index="${i}">Delete</button>
		`;

	
		todoList.appendChild(li);

	
		const checkbox = li.querySelector(`#todo-${i}`);
		checkbox.addEventListener('click', toggleTodo);

		const deleteButton = li.querySelector('.delete');
		deleteButton.addEventListener('click', deleteTodo);
	}
}


function addTodo() {

	const text = todoInput.value.trim();


	if (text === '') {
		return;
	}

	const todo = {
		text,
		completed: false
	};


	todos.push(todo);
	renderTodos();
	todoInput.value = '';
}


function toggleTodo(event) {

	const index = parseInt(event.target.id.replace('todo-', ''));


	todos[index].completed = !todos[index].completed;

	
	renderTodos();
}


function deleteTodo(event) {

	const index = parseInt(event.target.dataset.index);


	todos.splice(index, 1);

	
	renderTodos();
}


todoForm.addEventListener('submit', event => {
	event.preventDefault();
	addTodo();
});

renderTodos();
