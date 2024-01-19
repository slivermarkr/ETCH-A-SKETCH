const container = document.querySelector('.container');
const section = document.querySelector('.section');
const button = document.querySelector('.button');

let size;
button.addEventListener('click',() => {
    do{
     size =  parseInt(prompt("Enter size up to 100 : "))
    } while (
        size > 100
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
    console.log(e.target)
    e.target.classList.add('hover')
})