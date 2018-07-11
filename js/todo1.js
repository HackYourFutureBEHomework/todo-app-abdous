console.log("test");


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("input");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


// // creation of an empty array which is going to be my TODO List
// let TODO = [];

// // creation of the toddolist and updating
// function update(){
//     const $todoList = document.querySelector('.todo-list');
//     $todoList.innerHTML= '';
//     for (const item of TODO){
//         const $li =document.createElement('li');
//         if (item.done){
//             $li.classList.add('completed');
//         }
//         $todoList.appendChild($li);
//     }
// }



//  // Toggle button
//  const $toggle = document.createElement("input");
//  $toggle.className = "toggle";
//  $toggle.setAttribute("type", "checkbox");
//  if (item.done) {
//  $toggle.setAttribute("checked", "checked");
// }
//  $toggle.addEventListener("change", onToggleTodo.bind(null, item.id));
//  $li.appendChild($toggle);


//     // label
//     const $label= document.createElement('label');
//     $label.innerHTML = item.title;
//     $li.appendChild($label);


