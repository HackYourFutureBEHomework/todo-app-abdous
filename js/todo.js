// test worked
console.log('test');

// Your code goes here!
let TODOS =[]
function update(){
    const $todoList = document.querySelector('.todo-list');
    $todoList.innerHTML= '';
    for (const item of TODOS){
        const $li =document.createElement('li');
        if (item.done){
            $li.classList.add('completed');
        }
        $todoList.appendChild($li);


// toggle button
    const  $toggle = document.createElement('input');
    //$toggle.setAttribute('class','toggle');does the same as below line
    $toggle.classname = "toggle"; 
    $toggle.setAttribute('type', 'checkbox');
    //if (item.done){
      //  $toggle.setAttribute('checked', "checked");
    //}
 //   $toggle.addEventListener('change', onToggleTodo.bin(null, item.id));
  //  $li.appendChild($toggle);

    // label
    const $label= document.createElement('label');
    $label.innerHTML = item.title;
    $li.appendChild($label);

    // delete butun
    const $button = document.createElement('button');
    $button.className =" destroy";
    $li.appendChild($button);


    }
    document.querySelector(".main").style.display = "block";
}

function onToggleTodo(id){
    const todo=TODOS.find(todo=> todo.id===id);
    todo = !todo.done;
    update();
}


function onNewTodo(e){

    const title= e.target.value;
    

    // same as  this line
    //const title = document.querySelector('.new-todo');

    console.log(title);
    TODOS.push({
        id: Date.now(),
        title,
        done: true
    });
    update();
    e.target.value = '';
    
}


// select the new to do input field
const $newTodo = document.querySelector('.new-todo');
$newTodo.addEventListener('change', onNewTodo);