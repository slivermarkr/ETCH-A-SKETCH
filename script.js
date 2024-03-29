const container = document.querySelector('.container');
const section = document.querySelector('header-section');
const button = document.querySelector('.button');
const clearBtn = document.querySelector('.clear');

let size;
button.addEventListener('click',() => {
    do{
     size =  parseInt(prompt("Enter size up to 100 : "))
    } while (
        size > 100 || size < 1 || isNaN(size)
    );
     clearCanvas();
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
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
   
    e.target.style.backgroundColor = `rgba(${r},${g},${b},1)`;
})

function clearCanvas(){
    container.innerHTML = '';
    createGrid();
}

clearBtn.addEventListener('click',clearCanvas)



// colorPane.addEventListener('change',updateChanges);
// function updateChanges() {
//     document.documentElement.style.setProperty(`--${this.name}`,this.value);
// }