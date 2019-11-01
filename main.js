let firstrow = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'];
let secondrow = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\'];
let third = ['Caps Lock','a','s','d','f','g','h','j','k','l',';',"'",'Enter'];
let fourth = ['Shift','z','x','c','v','b','n','m',',','.','/','Shift','up'];
let fifth = ['Ctrl','Win','Alt','space','Alt','Ctrl','left','dn','right'];

//draw input
let inp = document.createElement("textarea");
inp.id = "inp";
document.body.appendChild(inp); 
// draw keyboard
let main = document.createElement("main");
main.id = "keyboard";
document.body.appendChild(main);

let div = document.createElement("div");
div.id = 'row';
main.append(div);

for(let i = 0; i < firstrow.length; i++){
    let divnum = document.createElement("div");
    if(firstrow[i]==='Backspace')
        divnum.id = 'backspace';
    divnum.className = "num";
    divnum.innerHTML = firstrow[i];
    div.append(divnum);
}

let divv = document.createElement("div");
divv.id = 'row';
main.append(divv);
for(let i = 0; i < secondrow.length; i++){
    let divnum = document.createElement("div");
    if(secondrow[i]==='Tab')
        divnum.id = 'tab';
    if(secondrow[i]==='\\')
        divnum.id = 'll';
    divnum.className = "num";
    divnum.innerHTML = secondrow[i];
    divv.append(divnum);
}

let divvv = document.createElement("div");
divvv.id = 'row';
main.append(divvv);
for(let i = 0; i < third.length; i++){
    let divnum = document.createElement("div");
    if(third[i]==='Caps Lock')
        divnum.id = 'capslock';
    if(third[i]==='Enter')
        divnum.id = 'enter';
    divnum.className= "num";
    divnum.innerHTML = third[i];
    divvv.append(divnum);
}

let divvvv = document.createElement("div");
divvvv.id = 'row';
main.append(divvvv);
for(let i = 0; i < fourth.length; i++){
    let divnum = document.createElement("div");
    if(fourth[i]==='Shift')
        divnum.id = 'shift';
    divnum.className = "num";
    divnum.innerHTML = fourth[i];
    divvvv.append(divnum);
}

let divvvvv = document.createElement("div");
divvvvv.id = 'row';
main.append(divvvvv);
for(let i = 0; i < fifth.length; i++){
    let divnum = document.createElement("div");
    if(fifth[i]==='space')
        divnum.id = 'space';
    if(fifth[i]==='Ctrl')
        divnum.id = 'ctrl';
    divnum.className = "num";
    divnum.innerHTML = fifth[i];
    divvvvv.append(divnum);
}


window.addEventListener("keydown", function(event) {
    let str = 'event.key: [' + event.key + '] event.code: [' + event.code + ']';

    //draw input
    let inp = document.getElementById("inp");
    inp.innerHTML = str;
    //document.body.appendChild(inp); 
  }, true);