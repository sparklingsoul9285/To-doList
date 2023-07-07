document.getElementById('add-button').addEventListener('click', function() {
    var input = document.getElementById('todo-input');
    var newTodo = input.value;
    if (newTodo !== '') {
      var listItem = document.createElement('li');
      listItem.classList.add('todo-item');
      listItem.innerHTML = '<input type="checkbox" class="checkbox">' + newTodo;
      document.getElementById('todo-list').appendChild(listItem);
      input.value = '';
    }
  });
  
  document.getElementById('todo-list').addEventListener('click', function(event) {
    if (event.target.tagName === 'INPUT') {
      var checkbox = event.target;
      var listItem = checkbox.parentNode;
      if (checkbox.checked) {
        listItem.classList.add('completed');
      } else {
        listItem.classList.remove('completed');
      }
    }
  });