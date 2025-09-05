const todoList = [
  { name:'i',
    date: '2025-04-22'
  },
  { name:'love',
    date: '2025-04-22'
  },
  { name:'flowers',
    date: '2025-04-22'
  }
];

renderTodo();

function renderTodo(){
  let todoListHTML = '';
  todoList.forEach((todoObject, index) =>{
    // const name = todoObject.name;
    // const date = todoObject.date;
    // shortcut of the above two lines
    const {name, date} = todoObject;
    const HTML = `
      <div class="todo-name">${name}</div>
      <div class="todo-date">${date}</div>
      <button
        class="delete-button js-delete-button">
      Delete</button>
    `;
    todoListHTML += HTML;
  });

  //we used for each for this loop and it works the same
  /*
  for(let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const date = todoObject.date;
    // shortcut of the above two lines
    const {name, date} = todoObject;
    const HTML = `
      <div class="todo-name">${name}</div>
      <div class="todo-date">${date}</div>
      <button onclick = "
        todoList.splice(${i}, 1);
        renderTodo();
      " class="delete-button">Delete</button>
    `;
    todoListHTML += HTML;
  }
  // console.log(todoListHTML);
  */

  document.querySelector('.js-todo-list-div')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button')   //querySelectorAll selects all the buttton elements and saves it into an array. that's why we can use for each loop to render all the elements of it.
    .forEach((deleteButton, index)=>{
      deleteButton.addEventListener('click', ()=>{
        todoList.splice(index, 1);
        renderTodo();
      });
    });
}


document.querySelector('.js-add-button')
  .addEventListener('click', ()=>{
    addTodo();
  });
document.body
  .addEventListener('keydown', (event)=>{
    if(event.key==='Enter'){
      addTodo();
    }
});

function addTodo(){
  const inputElement = document.querySelector('.js-input');
  let name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date');
  let date = dateInputElement.value;
  
  todoList.push({
    // name: name,
    // date: date
    name,
    date
  });
  // console.log(todoList);

  inputElement.value =" ";

  renderTodo();
  // just tried another way of showing the array on the website
  // let stringTodoList = todoList.join(", ");
  // document.querySelector('.js-p').innerHTML = stringTodoList;
}