

const musicPlay = document.getElementById("musica");
const buttonPlay = document.getElementById("button-inicial");
const playBtn = document.getElementById("playBtn");
const form = document.getElementById("container-formulario")
const formId = document.getElementById("formId")
const benVindo = document.getElementById("benVindo")
const hidden = document.getElementById("hidden")
const but1 = document.getElementById("button-1")
const but2 = document.getElementById("button-2")
const escO = document.getElementById("escolherO")
const escX = document.getElementById("escolherX")
const entrar = document.getElementById("entrar")
const gamerTela = document.getElementById("gamer")
const matriz = document.getElementById("matriz")
const matriz1 = document.getElementById("matriz-1")
const matriz2 = document.getElementById("matriz-2")
const matriz3 = document.getElementById("matriz-3")
const matriz4 = document.getElementById("matriz-4")
const matriz5 = document.getElementById("matriz-5")
const matriz6 = document.getElementById("matriz-6")
const matriz7 = document.getElementById("matriz-7")
const matriz8 = document.getElementById("matriz-8")
const matriz9 = document.getElementById("matriz-9")

const array = [];
const estado = null
const svgO = `<svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" color="black" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16"><path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/></svg>`;
const svgX = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="black" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16"><path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/><path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/><path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/></svg>`;
let mudo = true;
let nome;

buttonPlay.addEventListener("click", () => {
    musicPlay.play();
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
        playBtn.innerHTML = svgO;
        mudo = false
    } else {
        playBtn.innerHTML = svgX;
        mudo = true
    }

})


formId.addEventListener("submit", (event) => {
    event.preventDefault()

    const dados = new FormData(formId);
    nome = dados.get("user")

    hidden.style.visibility = "visible"
    benVindo.innerHTML = `Bem-vindo ${nome}`;
    console.log(nome)
})


function EscolherO() {
    if (escX.innerHTML === "") {
        escX.innerHTML = `${nome} `
        Entrar()
    }

    console.log("okay")

}

function EscolherX() {
    if (escO.innerHTML === "") {
        escO.innerHTML = `${nome} `
        Entrar()
    }
    console.log("okay")

}


function Entrar() {
    if (escO.innerHTML !== "" && escO.innerHTML !== "") {
        entrar.style.display = "block"
        console.log("entrar")
    }
}


const EntrarInGame = () => {
    gamerTela.style.display = "grid"
    gamerTela.style.visibility = "visible"
    form.style.display = "none"
    entrar.style.display = "none"
    hidden.style.display = "none"

    console.log("teste", form, gamerTela)

}


entrar.addEventListener("click", () => {
    EntrarInGame()
})


function Matriz1(estado){
    if(mudo){
        estado = 0
    }
    return estado
}




const teste = array.push(Matriz1(estado))
console.log(array)