document.addEventListener('DOMContentLoaded', () => {
    const ftList = document.getElementById('ft_list');
    const newTodoBtn = document.getElementById('newTodoBtn');

    // Load existing todos from cookies
    loadTodos();

    newTodoBtn.addEventListener('click', () => {
        const todoText = prompt('Enter a new TO DO:');
        if (todoText) {
            addTodo(todoText);
            saveTodos();
        }
    });

    function addTodo(text) {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.textContent = text;
        todoItem.addEventListener('click', () => {
            if (confirm('Do you want to remove this TO DO?')) {
                todoItem.remove();
                saveTodos();
            }
        });
        ftList.prepend(todoItem);
    }

    function saveTodos() {
        const todos = [];
        document.querySelectorAll('.todo-item').forEach(todo => {
            todos.push(todo.textContent);
        });
        document.cookie = `todos=${JSON.stringify(todos)};path=/`;
    }

    function loadTodos() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.split('=').map(c => c.trim());
            if (name === 'todos') {
                const todos = JSON.parse(value);
                todos.forEach(todo => addTodo(todo));
            }
        }
    }
});