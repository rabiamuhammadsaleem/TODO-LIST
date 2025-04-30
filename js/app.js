let input = document.getElementById("input-box")
let btn = document.getElementById("btnadd")
let todolist = document.getElementById("list")

let editItem = null;

function addTodo(){
    let text = input.value.trim();
     if(text.length<=0){
     alert("Enter a Todo");
      return false;
     }
    
    if(btn.value === "Update"){
        editItem.querySelector("p").innerText = text;
        btn.value = "Add";
        input.value = "";
    }
    else{ 
    // create p
    let li = document.createElement("li")
    let p = document.createElement("p")
    p.innerHTML = text;
    li.appendChild(p);

     // create edit btn
    let editbtn = document.createElement("button")
    editbtn.innerText = "Edit";
    editbtn.classList.add("btn","editbtn")
       // edit list item
       editbtn.addEventListener("click",function(){
        input.value = p.innerText;
        btn.value = "Update";
        editItem = li;
    })
    li.appendChild(editbtn);

    // create delete btn
    let delbtn = document.createElement("button")
    delbtn.innerText = "Delete";
    delbtn.classList.add("btn","deletebtn")
    // remove list item
    delbtn.addEventListener("click",function(){
        li.remove();
    })
    li.appendChild(delbtn);
      
    todolist.appendChild(li);
    input.value="" 
    }    
}

btn.addEventListener("click",addTodo)