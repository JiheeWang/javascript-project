const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let todoArray =[];
function saveTodo(){
    localStorage.setItem("todo list",JSON.stringify(todoArray));
}

function deleteTodo(event){
    //어떤 버튼이 눌렸는지 알아야 한다.parentElement를 활용
    const buttonParent = event.target.parentElement;
    buttonParent.remove();
    //this.parentElement.remove();
    todoArray = todoArray.filter((item) => item.id !== parseInt(buttonParent.id));
    saveTodo();
}

//todoArray.filter(filterF);
//.filter는 각 항목 반환값이 True면 살리고 False면 지운다.

function paintTodo(addedTodo){
    const li = document.createElement("li");
    li.id = addedTodo.id;
    const span = document.createElement("span"); 
    span.innerText = addedTodo.text; //idNtodo가 오브젝트 형태이므로 .text
    const button = document.createElement("button");
    
    //나중에 li아래에 삭제 button도 만들거라 바로 li에 넣지않고 span으로 만듬
    li.appendChild(span);
    li.appendChild(button);
 
    button.innerText ="X";
    button.addEventListener("click", deleteTodo);

    //li를 ul"const todoList"에 넣는다.
    todoList.appendChild(li);

}

function todoSubmitSensor(event){
    event.preventDefault();
    const addedTodo = todoInput.value;
    todoInput.value = "";

    const idNtodo = {
        text : addedTodo, 
        id : Date.now(),
    };

    todoArray.push(idNtodo);
    paintTodo(idNtodo);
    saveTodo();

}

todoForm.addEventListener("submit", todoSubmitSensor);

const savedTodo = localStorage.getItem("todo list");

if (savedTodo !== null){
    const parsedTodo = JSON.parse(savedTodo);
    todoArray = parsedTodo;
    parsedTodo.forEach(paintTodo);  
    //paintTodo(item)으로 적지 않는 것은
    //.forEach라는 기능 자체때문에. ()값을 알아서 입력해주는 거나 다름없음
}
//array.forEach(F) 안에는 펑션이 들어가야함. 
//function hello(item){
//    console.log("item number--"+item);

//JSON.stringify 는 ""를 붙여서 스트링화
//JSON.parse 는 자바 스크립트 형태로 실행 
