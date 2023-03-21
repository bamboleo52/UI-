const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", todoAdd);

function todoAdd(e) {
    e.preventDefault();

    const todoValue = todoForm.firstElementChild.value;
    const li = document.createElement("li");
    
    const check = document.createElement("input");
    check.type = "checkbox";
    const text = document.createTextNode(todoValue);
    const button = document.createElement("button");
    button.innerHTML = "X"
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(button);

    document.querySelector("#todolist").appendChild(li);

    todoForm.firstElementChild.value ="";

    check.addEventListener("click",todoCheck);
    button.addEventListener("click", todoDelete);

    document.querySelector("#todo-form").classList.remove("hidden");
    document.querySelector("#todolist").classList.remove("hidden");
    
}
let num1=0;
let totalCount=0;
function todoCheck(e) {
    const check = e.target;
    const li = check.parentNode;
    totalCount+=1;
    

    if(check.checked) {
        num1+=1;
        li.style.color = "lightgray";
    }else {
        check.parentNode.style.color = "";
    }
    document.getElementById('total').innerHTML= `전체 한일${totalCount} / 완료한 할일${num1}`;
            
}
document.write("h1")
function todoDelete (e) {
    const button = e.target;
    const li = button.parentNode;
    li.remove();
}
