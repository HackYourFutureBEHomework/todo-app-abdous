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
        
        
     /// try id but not wotking stop for today    
        // var  $todoCount = document.querySelector('todo-list');
        // function todocount($todoCount){
        //     if (item.done === item.done) 
        //         return $todoCount;
            
        // }
        // function myFunction(){
        //     document.getElementsByClassName('todo-count').footer =$todoCount.filter(todocount);
        // }
        

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

    ///to be done for the filter part

    const $notDoneTodo = TODOS.filter(item => !item.done).length;
    // Output on singular || prular !done TODOS 
    const $todoCount = document.querySelector('.todo-count');
    if ($notDoneTodo === 1) {
        $todoCount.innerHTML = $notDoneTodo + ' item left';
    } else if ($notDoneTodo === 0 || $notDoneTodo > 1) {
        $todoCount.innerHTML = $notDoneTodo + ' items left';
    }
}


    
    document.querySelector(".main").style.display = "block";
}



    function onToggleTodo(id){
    const todo=TODOS.find(todo=> todo.id===id);
    //TODOS.find(function(todo){return todo.id===id});
        todo.done = !todo.done;
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