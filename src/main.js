
const musicPlay = document.getElementById("musica");
const buttonPlay = document.getElementById("button-inicial");
const playBtn = document.getElementById("playBtn");
const form = document.getElementById("container-formulario");
const formId = document.getElementById("formId");
const benVindo = document.getElementById("benVindo");
const hidden = document.getElementById("hidden");
const but1 = document.getElementById("button-1");
const but2 = document.getElementById("button-2");
const escO = document.getElementById("escolherO");
const escX = document.getElementById("escolherX");
const entrar = document.getElementById("entrar");
const gamerTela = document.getElementById("gamer");
const matriz = document.getElementById("matriz");
const matriz1 = document.getElementById("matriz-1");
const matriz2 = document.getElementById("matriz-2");
const matriz3 = document.getElementById("matriz-3");
const matriz4 = document.getElementById("matriz-4");
const matriz5 = document.getElementById("matriz-5");
const matriz6 = document.getElementById("matriz-6");
const matriz7 = document.getElementById("matriz-7");
const matriz8 = document.getElementById("matriz-8");
const matriz9 = document.getElementById("matriz-9");
const user = document.getElementById("user");
const user2 = document.getElementById("user-2");
const buttonSong = document.getElementById("buttonSom");
const vencedor = document.getElementById("vencedor")

const array = [];
const svgO = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>`;
const svgX = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                            class="bi bi-0-circle" viewBox="0 0 16 16">
                            <path
                                d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895" />
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
             </svg>`;
let mudo = true;
let nome;
let nome2;
let arrayObj = [];
let nomes = "";
let stat = false;
let obejeto = "";

let obj1 = {
    id: 1,
    nome: nomes,
    prenchido: stat,
    obejeto: obejeto,

}

let obj2 = {
    id: 2,
    nome: "",
    prenchido: false,
    obejeto: "",

}

let obj3 = {
    id: 3,
    nome: "",
    prenchido: false,
    obejeto: "",

}

let obj4 = {
    id: 4,
    nome: "",
    prenchido: false,
    obejeto: "",

}

let obj5 = {
    id: 5,
    nome: "",
    prenchido: false,
    obejeto: "",

}

let obj6 = {
    id: 6,
    nome: "",
    prenchido: false,
    obejeto: "",

}

let obj7 = {
    id: 7,
    nome: "",
    prenchido: false,
    obejeto: "",

}

let obj8 = {
    id: 8,
    nome: "",
    prenchido: false,
    obejeto: "",

}

let obj9 = {
    id: 9,
    nome: "",
    prenchido: false,
    obejeto: "",

}

arrayObj.push(null, obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9)

let updateUser = true;

function SongButton() {
    buttonSong.play();
}


buttonPlay.addEventListener("click", () => {
    musicPlay.play();
    SongButton()
    buttonPlay.style.display = "none";
    function teste() {
        let a = true
        buttonPlay.style.display = "none";
        return a
    }

    const result = teste()
    if (result) {
        form.style.visibility = "visible"
        console.log("testando")
    }
})


playBtn.addEventListener("click", () => {
    musicPlay.muted = !musicPlay.muted;
    if (mudo) {
        playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" color="black" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16"><path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/></svg>`;;
        mudo = false
        SongButton()


    } else {
        playBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="black" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/><path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/></svg>`;;
        mudo = true
        SongButton()
    }

})


formId.addEventListener("submit", (event) => {
    event.preventDefault()
    SongButton()

    const dados = new FormData(formId);
    nome = dados.get("user")
    user.style.display = "none";
    user2.style.display = "block"
    nome2 = dados.get("user-2")

    hidden.style.visibility = "visible"
    benVindo.innerHTML = `Bem-vindo ${nome}, ${nome2}`;
    console.log(nome)
})

let X
let O

but1.addEventListener("click", () => {
    if (escX.innerHTML === "") {
        escX.innerHTML = `${nome}`
        escO.innerHTML = `${nome2}`
        SongButton()

        X = nome2
        O = nome

        Entrar()
    }
});

but2.addEventListener("click", () => {
    if (escX.innerHTML === "") {
        escX.innerHTML = `${nome}`
        escO.innerHTML = `${nome2}`
        SongButton()

        X = nome2
        O = nome

        Entrar()
    }
})



function Entrar() {
    if (escO.innerHTML !== "" && escO.innerHTML !== "") {
        entrar.style.display = "block"
        console.log("entrar")
        SongButton()
    }
}


const EntrarInGame = () => {
    gamerTela.style.display = "grid"
    gamerTela.style.visibility = "visible"
    form.style.display = "none"
    entrar.style.display = "none"
    hidden.style.display = "none"
    SongButton()

    console.log("teste", form, gamerTela)

}


entrar.addEventListener("click", () => {
    EntrarInGame()
});


function LogicaGameOver() {
    if (obj1.obejeto == "bolinha" && obj2.obejeto == "bolinha" && obj3.obejeto == "bolinha" || obj1.obejeto == "xis" && obj2.obejeto == "xis" && obj5.obejeto == "xis" || obj4.obejeto == "bolinha" && obj5.obejeto == "bolinha" && obj6.obejeto == "bolinha" || obj4.obejeto == "xis" && obj5.obejeto == "xis" && obj6.obejeto == "xis" || obj7.obejeto == "bolinha" && obj8.obejeto == "bolinha" && obj9.obejeto == "bolinha" || obj7.obejeto == "xis" && obj8.obejeto == "xis" && obj9.obejeto == "xis" || obj1.obejeto == "bolinha" && obj2.obejeto == "bolinha" && obj3.obejeto == "bolinha" || obj1.obejeto == "xis" && obj2.obejeto == "xis" && obj3.obejeto == "xis" || obj1.obejeto == "bolinha" && obj4.obejeto == "bolinha" && obj7.obejeto == "bolinha" || obj1.obejeto == "xis" && obj4.obejeto == "xis" && obj7.obejeto == "xis" || obj2.obejeto == "bolinha" && obj5.obejeto == "bolinha" && obj8.obejeto == "bolinha" || obj2.obejeto == "xis" && obj5.obejeto == "xis" && obj8.obejeto == "xis" || obj3.obejeto == "bolinha" && obj6.obejeto == "bolinha" && obj9.obejeto == "bolinha" || obj3.obejeto == "xis" && obj6.obejeto == "xis" && obj9.obejeto == "xis" || obj1.obejeto == "bolinha" && obj5.obejeto == "bolinha" && obj9.obejeto == "bolinha" || obj3.obejeto == "xis" && obj5.obejeto == "xis" && obj7.obejeto == "xis" || obj3.obejeto == "bolinha" && obj5.obejeto == "bolinha" && obj7.obejeto == "bolinha") {
        alert("vencedor")
        SongButton();
    }
}

let result
function ArrayObj(obejeto, posisao) {
    arrayObj.splice(posisao, 1, obejeto)
    console.log(arrayObj)

    result = arrayObj.filter(obj => {
        return [1, 2, 3].includes(obj.id) && obj.nome === X || [1, 2, 3].includes(obj.id) && obj.nome === O
    }).map(obj => obj.nome);

    console.log("Vencedor", result)
}


matriz1.addEventListener("click", () => {

    if (updateUser) {
        matriz1.innerHTML = svgX;
        updateUser = false
        obj1.prenchido = true
        obj1.obejeto = "bolinha"
        obj1.nome = O
        ArrayObj(1, obj1)


    } else {
        matriz1.innerHTML = svgO;
        updateUser = true
        obj1.prenchido = true
        obj1.obejeto = "xis"
        obj1.nome = X
        ArrayObj(1, obj1)

    }

    LogicaGameOver()

})


matriz2.addEventListener("click", () => {

    if (updateUser) {
        matriz2.innerHTML = svgX;
        updateUser = false
        obj2.prenchido = true
        obj2.obejeto = "bolinha"
        obj2.nome = O
        ArrayObj(2, obj2)

    } else {
        matriz2.innerHTML = svgO;
        updateUser = true
        obj2.prenchido = true
        obj2.obejeto = "xis"
        obj2.nome = X
        ArrayObj(2, obj2)
    }

    LogicaGameOver()

})


matriz3.addEventListener("click", () => {

    if (updateUser) {
        matriz3.innerHTML = svgX;
        updateUser = false
        obj3.prenchido = true
        obj3.obejeto = "bolinha"
        obj3.nome = O
        ArrayObj(3, obj3)

    } else {
        matriz3.innerHTML = svgO;
        updateUser = true
        obj3.prenchido = true
        obj3.obejeto = "xis"
        obj3.nome = X
        ArrayObj(3, obj3)
    }

    LogicaGameOver()

})

matriz4.addEventListener("click", () => {

    if (updateUser) {
        matriz4.innerHTML = svgX;
        updateUser = false
        obj4.prenchido = true
        obj4.obejeto = "bolinha"
        obj4.nome = O
        ArrayObj(4, obj4)

    } else {
        matriz4.innerHTML = svgO;
        updateUser = true
        obj4.prenchido = true
        obj4.obejeto = "xis"
        obj4.nome = X
        ArrayObj(4, obj4)
    }

    LogicaGameOver()
})

matriz5.addEventListener("click", () => {

    if (updateUser) {
        matriz5.innerHTML = svgX;
        updateUser = false
        obj5.prenchido = true
        obj5.obejeto = "bolinha"
        obj5.nome = O
        ArrayObj(5, obj5)

    } else {
        matriz5.innerHTML = svgO;
        updateUser = true
        obj5.prenchido = true
        obj5.obejeto = "xis"
        obj5.nome = X
        ArrayObj(5, obj5)
    }

    LogicaGameOver()

})

matriz6.addEventListener("click", () => {

    if (updateUser) {
        matriz6.innerHTML = svgX;
        updateUser = false
        obj6.prenchido = true
        obj6.obejeto = "bolinha"
        obj6.nome = O
        ArrayObj(6, obj6)

    } else {
        matriz6.innerHTML = svgO;
        updateUser = true
        obj6.prenchido = true
        obj6.obejeto = "xis"
        obj6.nome = X
        ArrayObj(6, obj6)
    }

    LogicaGameOver()

})

matriz7.addEventListener("click", () => {

    if (updateUser) {
        matriz7.innerHTML = svgX;
        updateUser = false
        obj7.prenchido = true
        obj7.obejeto = "bolinha"
        obj7.nome = O
        ArrayObj(7, obj7)


    } else {
        matriz7.innerHTML = svgO;
        updateUser = true
        obj7.prenchido = true
        obj7.obejeto = "xis"
        obj7.nome = X
        ArrayObj(7, obj7)
    }

    LogicaGameOver()

})

matriz8.addEventListener("click", () => {

    if (updateUser) {
        matriz8.innerHTML = svgX;
        updateUser = false
        obj8.prenchido = true
        obj8.obejeto = "bolinha"
        obj8.nome = O
        ArrayObj(8, obj8)


    } else {
        matriz8.innerHTML = svgO;
        updateUser = true
        obj8.prenchido = true
        obj8.obejeto = "xis"
        obj8.nome = X
        ArrayObj(8, obj8)
    }

    LogicaGameOver()

})

matriz9.addEventListener("click", () => {

    if (updateUser) {
        matriz9.innerHTML = svgX;
        updateUser = false
        obj9.prenchido = true
        obj9.obejeto = "bolinha"
        obj9.nome = O
        ArrayObj(9, obj9)


    } else {
        matriz9.innerHTML = svgO;
        updateUser = true
        obj9.prenchido = true
        obj9.obejeto = "xis"
        obj9.nome = X
        ArrayObj(9, obj9)
    }

    LogicaGameOver()

});
