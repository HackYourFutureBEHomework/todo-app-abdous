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
        
        
     
 // Toggle button
        const $toggle = document.createElement("input");
        $toggle.className = "toggle";
        $toggle.setAttribute("type", "checkbox");
        if (item.done) {
        $toggle.setAttribute("checked", "checked");
}
        $toggle.addEventListener("change", onToggleTodo.bind(null, item.id));
        $li.appendChild($toggle);
       

        


        

    // label
    const $label= document.createElement('label');
    $label.innerHTML = item.title;
    $li.appendChild($label);

    // delete butun
    const $button = document.createElement('button');
    $button.className =" destroy";
    $li.appendChild($button);
    $button.addEventListener("click", onDeleteItem.bind(null, item.id));
    //$li.appendChild($toggle);


    ///Step 2 of the homwwork: filter
    // going to show the number of item done or not.

    const $notDoneTodo = TODOS.filter(item => !item.done).length;
    const $todoCount = document.querySelector('.todo-count');
    if ($notDoneTodo === 1) {
        $todoCount.innerHTML = $notDoneTodo + ' item left';
    } else 
        {
    
        $todoCount.innerHTML = $notDoneTodo + ' items left';
    }
}

/// Step 3: Todo app: Deleting items: but still not working correctly?
    if (TODOS.length === 0){
        document.querySelector(".main").style.display = "none";    
    }
    else {
    document.querySelector(".main").style.display = "block";
}
}



    function onToggleTodo(id){
    const todo=TODOS.find(todo=> todo.id===id);
    //TODOS.find(function(todo){return todo.id===id});
        todo.done = !todo.done;
    update();
   
}
function onDeleteItem(id){
    TODOS = TODOS.filter(item=> !item.done);
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
        done: false
    });
    update();
    e.target.value = '';
    
}






// select the new to do input field
const $newTodo = document.querySelector('.new-todo');
$newTodo.addEventListener('change', onNewTodo);