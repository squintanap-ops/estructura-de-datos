// Seleccionamos los elementos del DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const pendingCount = document.getElementById('pending-count');

// Variable para llevar el conteo de las tareas pendientes
let taskCount = 0;

// Función para actualizar el contador de tareas
function updateTaskCount() {
    pendingCount.textContent = taskCount;
}

// Función para eliminar una tarea
function deleteTask(event) {
    const taskItem = event.target.parentElement; // Seleccionamos el <li>
    taskList.removeChild(taskItem); // Elimina el <li> de la lista
    taskCount--; // Disminuimos el contador de tareas
    updateTaskCount(); // Actualizamos el contador
}

// Función para agregar una nueva tarea
function addTask(event) {
    event.preventDefault(); // Evita que el formulario se recargue

    const taskText = taskInput.value.trim(); // Obtenemos el texto de la tarea

    if (taskText === '') return; // Si no hay texto, no agregamos nada

    // Crear el elemento <li> para la tarea
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Crear el botón "Eliminar"
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', deleteTask); // Asociamos la función de eliminación

    // Añadir el botón de eliminar a la tarea
    taskItem.appendChild(deleteButton);

    // Añadir la tarea a la lista
    taskList.appendChild(taskItem);

    // Aumentamos el contador de tareas pendientes
    taskCount++;

    // Actualizamos el contador en la UI
    updateTaskCount();

    // Limpiamos el input de la tarea
    taskInput.value = '';
}

// Evento para agregar la tarea al presionar el botón
taskForm.addEventListener('submit', addTask);