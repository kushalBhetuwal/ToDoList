const input = document.getElementById('input-box');
const button  = document.querySelector("button");
const ul = document.getElementById('list-container')

function addtask(){
    if(input.value===''){
        alert("You need to add a task")
        return
    }
    const li = document.createElement('li');
    const span = document.createElement("span");
    span.innerHTML = '\u00d7'
    li.innerHTML = input.value
    ul.appendChild(li);
    li.appendChild(span)
    input.value=""
    saveItem();
}

ul.addEventListener("click", (e)=>{
  if(e.target.tagName==='LI'){
    e.target.classList.toggle('checked');
    saveItem();
  }
  else if(e.target.tagName='SPAN'){
    e.target.parentNode.remove();
    saveItem();
    }
  return
})

function saveItem(){
  localStorage.setItem('key', ul.innerHTML)
}
function displaydata(){
ul.innerHTML = localStorage.getItem('key');
}
displaydata();