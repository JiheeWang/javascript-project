const colors = ["blue", "pink", "yellow"];
const types = ["_p","_s","_t"];
const pair = [];
const list_part = document.querySelector("#list");

let i ;
let k ;

function clear(){
    const lli = document.querySelectorAll("li");
    for (element of lli){
        element.remove();
    }
}

function listup(){
    clear();
    for(i=0; i<colors.length; i++){
        for(k=0; k<types.length; k++){
            pair.push(colors[i]+types[k]);
            const li = document.createElement('li');
            const name = pair[pair.length-1];
            li.innerHTML = "<img src= imgs/"+name+".png>"+name;
            list_part.appendChild(li);
            
        }
    }
}

function hidelist(num){
    clear();
    for(i=0; i<colors.length; i++){
        pair.push(colors[i]+types[num]);
        const li = document.createElement('li');
        const name = pair[pair.length-1];
        li.innerHTML = "<img src= imgs/"+name+".png>"+name;
        list_part.appendChild(li);
           
    }
    console.log("help");
}

listup();
