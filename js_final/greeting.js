

const button = document.querySelector("#loginbox button");
const input = document.querySelector("#loginbox input");
const loginform = document.querySelector("#loginbox");

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME ="hidden";
const USER_NAME_KEY = "username:";

/* function buttonSensor(){
    const value = input.value;
    console.log("clicked");
    console.log("You are here" + input.value);
} */
function submitSensor(info){ 
    //info에 아무말이나 넣어도 됨. 
    //계속 새로고침 되는 걸 막기위해 만든 매개단어임
    info.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
    const username = input.value;
    localStorage.setItem(USER_NAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username){
    //greeting.innerText = "hello, " + username;
    greeting.innerText = `hello, ${username}. welcome!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//button.addEventListener("click", buttonSensor);


const savedUser = localStorage.getItem(USER_NAME_KEY);
if(savedUser === null){
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit", submitSensor);
    
}else{
    paintGreeting(savedUser);
}

/* 
const link = document.querySelector("a");
function linkSensor(tomato){
    tomato.preventDefault();
    console.log("prevented");
}
link.addEventListener("click", linkSensor); */


//*참고* form의 button의 디폴트는 submit하고 새로고침하는 거고, 
// anchor는 click하고 다른 페이지로 넘어가는 것.