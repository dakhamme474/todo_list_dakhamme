

let inp = document.getElementById("input");
let btn = document.getElementById("btn");
let boxes = document.querySelectorAll(".box");
let drag = null;

const items_add = () => {
    if (inp.value == "") {
        alert("Veuillez remplir le champ");
    } else {
        boxes[0].innerHTML += `<div class="items" draggable="true"><p >${inp.value}</p><i class="fa-solid fa-pen fa-large pencel"></i> <i class="fa-solid fa-xmark fa-xl remove" style="color: #ff0000;"></i></div>`;
        inp.value = "";
    }
    dragItems();
};

btn.addEventListener("click", items_add);

const dragItems = () => {
    let items = document.querySelectorAll(".items");
    for (let index = 0; index < items.length; index++) {
        let element = items[index];
        element.addEventListener("dragstart", () => {
            drag = element;
            element.style.opacity = "0.5";
        });

        element.addEventListener("dragend", () => {
            drag = null;
            element.style.opacity = "1";
        });

        for (let idx = 0; idx < boxes.length; idx++) {
            let box = boxes[idx];
            box.addEventListener("dragover", function (e) {
                e.preventDefault();
                box.style.background = "grey";
                box.style.color = "white";
            });
            box.addEventListener("dragleave", () => {
                box.style.background = "white";
                box.style.color = "black";
            });
            box.addEventListener("drop", () => {
                box.append(drag);
                box.style.background = "white";
                box.style.color = "black";
            });
        }
    };
}
document.addEventListener("click" , b => {
if (b.target.className.includes("pencel")) {
    let askchange = prompt("what's the change")
    b.target.previousElementSibling.textContent = askchange
}
})
document.addEventListener("click" , c => {
if (c.target.className.includes("remove")) {
    c.target.previousElementSibling.previousElementSibling.classList.add("part-3-close-i")
}
})
    
    


