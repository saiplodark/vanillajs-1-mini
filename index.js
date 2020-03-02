console.log('hello world!')

let count = 0;

let element = document.getElementById("counter")
console.log(element)
function increase(){
    count++
    element.innerText = count;
}

function decrease(){
    count--
    element.innerText = count;
}

function reset(){
    count = 0;
    element.innerHTML = `<mark>${count}</mark>`
}

let body = document.getElementsByTagName('body')
let main = document.getElementsByTagName('main')
let buttons = document.getElementsByTagName('button');

function selectTheme(theme){
    body[0].className = theme
    main[0].className = theme
    for(let i =0; i<buttons.length; i++){
        buttons[i].className = theme
    }
}