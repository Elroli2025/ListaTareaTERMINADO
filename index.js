// Obtener los elementos necesarios del HTML
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const list = document.querySelector('#list');

// Agregar un listener de evento submit al formulario
form.addEventListener('submit', (e) => {
  // Prevenir el comportamiento de envío de formulario predeterminado
  e.preventDefault();

  // Crear un nuevo elemento de elemento de lista
  const listItem = document.createElement('li');

  // Establecer el contenido de texto del elemento de lista en el valor de entrada
  listItem.textContent = input.value;

  // Crear un botón de eliminar elemento
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'Eliminar';

  // Crear un botón de completar elemento
  const completeButton = document.createElement('button');
  completeButton.classList.add('complete-button');
  completeButton.textContent = 'Completar';

  // Agregar los botones de eliminar y completar al elemento de lista
  listItem.appendChild(deleteButton);
  listItem.appendChild(completeButton);

  // Agregar el elemento de lista a la lista
  list.appendChild(listItem);

  // Limpiar el valor de entrada
  input.value = '';
});

// Agregar un listener de evento click a los botones de eliminar
list.addEventListener('click', (e) => {
  if (e.target.matches('.delete-button')) {
    // Remover el elemento de lista padre cuando se hace click en un botón de eliminar
    e.target.parentElement.remove();
  }
});

// Agregar un listener de evento click a los botones de completar