let firstrow = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'];
let secondrow = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\'];
let third = ['Caps Lock','a','s','d','f','g','h','j','k','l',';',"'",'Enter'];
let fourth = ['Shift','z','x','c','v','b','n','m',',','.','/','Shift','up'];
let fifth = ['Ctrl','Win','Alt','s  p  a  c  e','Alt','Ctrl','left','dn','right'];
// draw keyboard
let div = document.createElement("div");
div.id = "keyboard";
document.body.appendChild(div);

for(let i = 0; i < 40; i++){
    let divnum = document.createElement("div");
    divnum.id = "num";
    div.append(divnum);
}