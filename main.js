let firstrow = [['~', '`'],["!", '1'],['@','2'],['#','3'],['$','4'],['%','5'],['^','6'],['&','7'],['*','8'],['(','9'],[')','0'],['_','-'],['+','='],'Backspace'];
let secondrow = [['Tab'],['Q', 'q'],['W', 'w'],['E', 'e'],['R', 'r'],['T', 't'],['Y', 'y'],['U', 'u'],['I', 'i'],['O', 'o'],['P', 'p'],['{', '['],['}', ']'],['|', '\\']];
let third = [['CapsLock'],['A','a'],['S','s'],['D','d'],['F','f'],['G','g'],['H','h'],['J','j'],['K','k'],['L','l'],[':',';'],['"',"'"],['Enter']];
let fourth = [['Shift'],['Z','z'],['X','x'],['C','c'],['V','v'],['B','b'],['N','n'],['M','m'],['<',','],['>','.'],['?','/'],[`up`],['Shift']];
let fifth = ['Ctrl','Win','Alt'," ",'Alt','lt','dn','rt','Ctrl'];

let row1 = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0", "Minus", "Equal", "Backspace"];
let row2 = ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"];
let row3 = ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"];
let row4 = ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight"];
let row5 = ["ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];

//draw input
let inp = document.createElement("textarea");
inp.id = "inp";
document.body.appendChild(inp); 

// draw keyboard
let main = document.createElement("main");
main.id = "keyboard";
document.body.appendChild(main);

// draw 1r
let div = document.createElement("div");
div.id = 'row';
main.append(div);

for(let i = 0; i < firstrow.length; i++){
    let divnum = document.createElement("div");
    divnum.className = "num";
    divnum.id = `${row1[i]}`;
    div.append(divnum);

    if(row1[i]==="Backspace"){
        let span = document.createElement("span");
        span.id = `${firstrow[i]}`;
        span.className = "word";
        span.innerHTML = firstrow[i];
        divnum.append(span);
    }
    else {
        for(let j = 0; j < firstrow[i].length; j++){
            let span = document.createElement("span");
            if(j === 0)
                span.className = "up";
            else 
                span.className = "down";
            span.id = `${firstrow[i][j]}`;
            span.innerHTML = firstrow[i][j];
            divnum.append(span);
        }
    }
}

//draw 2r
let divv = document.createElement("div");
divv.id = 'row';
main.append(divv);

for(let i = 0; i < secondrow.length; i++){
    let divnum = document.createElement("div");
    divnum.className = "num";
    divnum.id = `${row2[i]}`;
    divv.append(divnum);

    if(row2[i]==="Tab"){
        let span = document.createElement("span");
        span.id = `${secondrow[i]}`;
        span.className = "word";
        span.innerHTML = secondrow[i];
        divnum.append(span);
    }
    else {
        for(let j = 0; j < secondrow[i].length; j++){
            let span = document.createElement("span");
            if(j === 0)
                span.className = "up";
            else 
                span.className = "down";
            span.id = `${secondrow[i][j]}`;
            span.innerHTML = secondrow[i][j];
            divnum.append(span);
        }
    }
}

//draw 3r
let divvv = document.createElement("div");
divvv.id = 'row';
main.append(divvv);

for(let i = 0; i < third.length; i++){
    let divnum = document.createElement("div");
    divnum.className= "num";
    divnum.id = `${row3[i]}`;
    divvv.append(divnum);

    if(row3[i]==='CapsLock' || row3[i]==='Enter'){
        let span = document.createElement("span");
        span.id = `${third[i]}`;
        span.className = "word";
        span.innerHTML = third[i];
        divnum.append(span);
    }
    else {
        for(let j = 0; j < third[i].length; j++){
            let span = document.createElement("span");
            if(j === 0)
                span.className = "up";
            else 
                span.className = "down";
            span.id = `${third[i][j]}`;
            span.innerHTML = third[i][j];
            divnum.append(span);
        }
    }

}

//draw 4r
let divvvv = document.createElement("div");
divvvv.id = 'row';
main.append(divvvv);

for(let i = 0; i < fourth.length; i++){
    let divnum = document.createElement("div");
    divnum.className = "num";
    divnum.id = `${row4[i]}`;
    divvvv.append(divnum);

    if(row4[i]==='ShiftLeft' || row4[i]==='ShiftRight' || row4[i]==="ArrowUp"){
        let span = document.createElement("span");
        span.id = `${fourth[i]}`;
        span.className = "word";
        span.innerHTML = fourth[i];
        divnum.append(span);
    }
    else {
        for(let j = 0; j < fourth[i].length; j++){
            let span = document.createElement("span");
            if(j === 0)
                span.className = "up";
            else 
                span.className = "down";
            span.id = `${fourth[i][j]}`;
            span.innerHTML = fourth[i][j];
            divnum.append(span);
        }
    }
}


//draw 5r
let divvvvv = document.createElement("div");
divvvvv.id = 'row';
main.append(divvvvv);
for(let i = 0; i < fifth.length; i++){
    let divnum = document.createElement("div");
    divnum.className = "num";
    divnum.id = `${row5[i]}`;
    divvvvv.append(divnum);

    let span = document.createElement("span");
    span.id = `${fifth[i]}`;
    span.className = "word";
    span.innerHTML = fifth[i];
    divnum.append(span);
}

//lighting key in ketboard
window.addEventListener("keydown", function(event) {
    let inp = this.document.getElementById(`${event.code}`);
    inp.style.background = "grey";
  }, true);

window.addEventListener("keyup", function(event) {
    let inp = this.document.getElementById(`${event.code}`);
    inp.style.background = null;
  }, true);


window.addEventListener( 'keydown', function( event ) {
    let cl = document.getElementById('CapsLock');
    let up = document.getElementsByClassName('down');
    if(event.getModifierState( 'CapsLock' )){
        for(let i = 0; i < up.length; i++){
            up[i].style.display = 'none';
        }
        cl.style.color = "blue";
    }else{
        for(let i = 0; i < up.length; i++){
            up[i].style.display = null;
        }
        cl.style.color = null;
    }
}, true);

window.addEventListener( 'keydown', function( event ) {
    let e = document.getElementsByClassName('down');
    if(event.shiftKey === true){
        for(let i = 0; i < e.length; i++){
            e[i].style.display = 'none';
        }
    } 
}, true);

window.addEventListener( 'keyup', function( event ) {
    let e = document.getElementsByClassName('down');
    if(event.shiftKey === false && !event.getModifierState('CapsLock')){
        for(let i = 0; i < e.length; i++){
            e[i].style.display = null;
        }
    } 
}, true);


//click case
window.addEventListener("click", function(event) {
    let textarea = this.document.getElementById("inp");
    if(event.target.parentNode.className === "num"){
        if(event.target.innerHTML === "Backspace"){
            textarea.value = textarea.value.replace(/.$/, '');
        } 
        else if(event.target.className === "word"){
            //console.log(event.target.className);
        }
        else {
            textarea.value += event.target.innerHTML;
        }
    //console.log(event.target.parentNode, event.target.parentNode.className, event.target.innerHTML);//event.target.parentNode.id);
    }
    console.log(textarea.value);
}, true);