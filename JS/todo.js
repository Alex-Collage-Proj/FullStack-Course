let btntoDo=document.getElementById('clickbtn');
const toDo1=document.getElementById('whaToDo');
const outPuts=document.getElementById('outPuts');
const toDo2=[];
let i=0;


var toDo=()=>
{
    const todoListItem=document.createElement("li")
    todoListItem.innerText=toDo1.value;
    outPuts.appendChild(todoListItem);

    toDo2[i]=document.getElementById('whaToDo').value;
    i++;
    window.alert(toDo2);
}

// function toDo() {
//     const todoListItem=document.createElement("li")
//     todoListItem.innerText=toDo1.value;
//     outPuts.appendChild(todoListItem);

//     toDo2[i]=document.getElementById('whaToDo').value;
//     i++;
//     window.alert(toDo2);
// }
 
btntoDo.addEventListener("click", toDo);
