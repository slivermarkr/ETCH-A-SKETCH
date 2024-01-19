const container = document.querySelector('.container');
const section = document.querySelector('.section');
const button = document.querySelector('.button');

let size = 64;
// button.addEventListener('click',() => {
//      size =  parseInt(prompt("Enter size: "))
//      console.log(typeof size);
// })


console.log(container.clientWidth)
console.log(container.clientHeight)




createGrid();
function createGrid(){
    
    //for row
    for(let i = 0; i < size; i++){
    //for column
        for(let j = 1; j < size; j++){
            let box = document.createElement('div');
            box.classList.add("grid");
            container.appendChild(box);
            box.style.width = `${960 / size}px`;
            box.style.height = `${960 / size}px`;
        }
    let box = document.createElement('div');
    box.classList.add("grid");
    container.appendChild(box);
    box.style.width = `${960 / size}px`;
    box.style.height = `${960 / size}px`;
}};

container.addEventListener('mouseover',(e) => {
    if(!e.target.classList.contains('grid')) return;
    console.log(e.target)
    e.target.classList.add('hover')
})