const inputField = document.getElementById('myInput');
const editButton = document.getElementById('editBtn');
const deleteButton = document.getElementById('deleteBtn');

editButton.addEventListener('click', () => {
  inputField.focus(); 
});

deleteButton.addEventListener('click', () => {
  inputField.value = "";
});
