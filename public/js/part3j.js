let inp = document.getElementById("input");
let btn = document.getElementById("btn");
let boxes = document.querySelectorAll(".box");
let drag = null


const items_add = () =>{
    if (inp.value == "") {
        alert("veuiller remplir le champ")
    }else{
        boxes[0].innerHTML += `<p class="items" draggable="true">${inp.value}</p>`
        inp.value = ""
    }
    dragItems()
    }

btn.addEventListener("click" , items_add);

const dragItems = () =>{
    let items = document.querySelectorAll(".items")
    for (let index = 0; index < items.length; index++) {
        let element = items[index];
        element.addEventListener("dragstart" , ()=>{
            drag = element ;
            element.style.opacity = "0.5"
        })

        element.addEventListener("dragend" , ()=>{
            drag = null
            element.style.opacity = "1"
        })

        for (let idx = 0; idx < boxes.length; idx++) {
            let box = boxes[idx];
            box.addEventListener("dragover" , function (e) {
                e.preventDefault
                box.style.background = "grey"
                box.style.color = "white"
            })
            box.addEventListener("dragleave" , ()=>{
                box.style.background = "white"
                box.style.color = "black"
            })
            box.addEventListener("drop" , ()=>{
                box.append(drag)
            })
            
        }
    }
        
    
}
