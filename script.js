const container = document.querySelector('.container');
for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        let box = document.createElement('div');
        box.classList.add('grids');
        container.appendChild(box);    }

    let box = document.createElement('div');
    box.classList.add('grids');
    container.appendChild(box);
    
}

// window.addEventListener('mouseover',(e) =>{
//     e.target.style.border = "red 2px solid";
//     console.log(e.target)
// })


container.addEventListener('mouseover',(e)=>{
    if(!e.target.classList.contains('grids')) return;
    e.target.style.backgroundColor = 'red';
})
