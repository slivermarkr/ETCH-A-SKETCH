//need a restart function
//need a color picker
//different way of filling color
//maybe another way of asking for size input...button is buggy




const container = document.querySelector('.container');
const section = document.querySelector('header-section');
const button = document.querySelector('.button');
const colorPane = document.querySelector('.header-section input');


let size;
button.addEventListener('click',() => {
    do{
     size =  parseInt(prompt("Enter size up to 100 : "))
    } while (
        size > 100 || size < 1 || isNaN(size)
    );
     createGrid();
})

function createGrid(){
    //for row
    for(let i = 0; i < size; i++){
    //for column
        for(let j = 1; j < size; j++){
            let box = document.createElement('div');
            box.classList.add("grid");
            container.appendChild(box);
            box.style.width = `${container.clientWidth / size}px`;
            box.style.height = `${container.clientHeight / size}px`;
        }
    let box = document.createElement('div');
    box.classList.add("grid");
    container.appendChild(box);
    box.style.width = `${container.clientWidth/ size}px`;
    box.style.height = `${container.clientHeight / size}px`;
}};

container.addEventListener('mouseover',(e) => {
    if(!e.target.classList.contains('grid')) return;
    // e.target.classList.add('hover')
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);
    const r = random1;
    const g = random2;
    const b = random3;
    console.log(r);
    console.log(g);
    console.log(b);
    e.target.style.backgroundColor = `rgba(${r},${g},${b},${Math.random()})`;
   
})

// colorPane.addEventListener('change',updateChanges);
// function updateChanges() {
//     document.documentElement.style.setProperty(`--${this.name}`,this.value);
// }