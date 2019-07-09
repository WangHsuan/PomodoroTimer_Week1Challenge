const todo = document.querySelector('.hsuan');
const createTodo = document.querySelector('.CreateToDoList');


let Todolist = [];

function ShowTodoList(){
    let str = '';
    Todolist.map((item)=>
      str+=`<li class='listItem'>${item}</li>`
    );
   todo.innerHTML = `list<ul>${str}</ul>`;
}


function AddNewMission(e){
    e.preventDefault();
    let InputValue = document.getElementById('NewMission');
    Todolist.push(InputValue.value);
    console.log(InputValue.value);
    ShowTodoList();
}


// todo.addEventListener('click',ShowTodoList,false);
createTodo.addEventListener('click',AddNewMission,false);

