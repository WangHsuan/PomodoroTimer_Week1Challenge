const todo = document.querySelector('.hsuan');


let Todolist = ['hsuan','jenny'];

function ShowTodoList(){
    let str = '';
    Todolist.map((item)=>
      str+=`<li>${item}</li>`
    );
   todo.innerHTML = `list<ul>${str}</ul>`;
}


todo.addEventListener('click',ShowTodoList,false);

