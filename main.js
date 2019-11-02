let firstrow = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'];
let secondrow = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\'];
let third = ['CapsLock','a','s','d','f','g','h','j','k','l',';',"'",'Enter'];
let fourth = ['Shift','z','x','c','v','b','n','m',',','.','/','up','Shift'];
let fifth = ['Ctrl','Win','Alt'," ",'Alt','left','dn','right','Ctrl'];

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
    divnum.className = "num";
    divnum.id = `${firstrow[i]}`;
    divnum.innerHTML = firstrow[i];
    div.append(divnum);
}

let divv = document.createElement("div");
divv.id = 'row';
main.append(divv);
for(let i = 0; i < secondrow.length; i++){
    let divnum = document.createElement("div");
    divnum.className = "num";
    divnum.id = `${secondrow[i]}`;
    divnum.innerHTML = secondrow[i];
    divv.append(divnum);
}

let divvv = document.createElement("div");
divvv.id = 'row';
main.append(divvv);
for(let i = 0; i < third.length; i++){
    let divnum = document.createElement("div");
    divnum.className= "num";
    divnum.id = `${third[i]}`;
    divnum.innerHTML = third[i];
    divvv.append(divnum);
}

let divvvv = document.createElement("div");
divvvv.id = 'row';
main.append(divvvv);
for(let i = 0; i < fourth.length; i++){
    let divnum = document.createElement("div");
    divnum.className = "num";
    divnum.id = `${fourth[i]}`;
    divnum.innerHTML = fourth[i];
    divvvv.append(divnum);
}

let divvvvv = document.createElement("div");
divvvvv.id = 'row';
main.append(divvvvv);
for(let i = 0; i < fifth.length; i++){
    let divnum = document.createElement("div");
    divnum.className = "num";
    divnum.id = `${fifth[i]}`;
    divnum.innerHTML = fifth[i];
    divvvvv.append(divnum);
}


window.addEventListener("keydown", function(event) {
    //let str = 'event.key: [' + event.key + '] event.code: [' + event.code + ']';
    let inp = this.document.getElementById(`${event.key}`);
    inp.style.background = "grey";
  }, true);
  window.addEventListener("keyup", function(event) {
    let inp = this.document.getElementById(`${event.key}`);
    inp.style.background = null;
  }, true);