// *applet l'input dans la partie 1
let input1 = document.querySelector(".input1");
// *appeler le boutton
let buttonList = document.querySelector(".lister");
// *applet la balise ul
let all_list = document.querySelector(".all-list");

// *la function qui vas verifier si l'input est vide 
// *si il n'a pas vide il vas ajouter l'input.value dans une liste

const ajouterText = () =>{
    if (input1.value == "") {
       alert("veuiller remplir le champ")
    }else{
        all_list.innerHTML += `<li class="selection"> <div>${input1.value}</div> <div class="icones">
        <i class="fa-solid fa-check fa-2xl valide"style="color: #58d747;  "></i> 
        <i class="fa-solid fa-trash-can fa-2xl delete"style="color: #c72929;"></i>
        <i class="fa-solid fa-pen fa-2xl modifie"></i>
    </div>
    </li>`
    input1.value = ""
    };
}

// !les tableau qui  vas prendre la case selected ou not selected
tab_green = [];
tab_red = [];

document.addEventListener("click", e => {
    if(e.target.className.includes("valide")){
        e.target.parentElement.parentElement.classList.toggle("li-style-green");
        tab_green.push(e.target.parentElement.previousElementSibling.textContent)
    }
})

document.addEventListener("click", f => {
    if(f.target.className.includes("delete")){
        f.target.parentElement.parentElement.classList.toggle("li-style-red");
        tab_red.push(f.target.parentElement.previousElementSibling.textContent)
    }
})

document.addEventListener("click", a => {
    if(a.target.className.includes("modifie")){
        let askmodifie = prompt("qu'est ce tu veux modifier ")
        a.target.parentElement.previousElementSibling.textContent = askmodifie
    }
})

buttonList.addEventListener("click" , ajouterText);








