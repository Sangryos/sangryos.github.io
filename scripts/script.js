
//Initialiser les variables de jeu (argent, nombre de lemons etc ...)

let nbCurrency = parseInt(localStorage['nbCurrency'] || '0')
let nbAutoclick = parseInt(localStorage['nbAutoclick'] || '0')
let nbLemon = parseInt(localStorage['nbLemon'] || '0')

let tps = nbAutoclick + nbLemon*3

const mainButton = document.querySelector("#mainButton")
mainButton.addEventListener('click',mainButtonClicked)

const saveButton = document.querySelector("#saveButton")
saveButton.addEventListener('click',save)

const autoclickButton = document.querySelector('#autoclickButton')
autoclickButton.addEventListener('click',buyAutoclick)

const lemonButton = document.querySelector('#lemonButton')
lemonButton.addEventListener('click',buyLemon)

//Set ou ReSet le nombre de thune, de lemons etc...

document.querySelector("#nbCurrency").textContent = parseInt(nbCurrency)
document.querySelector("#tps").textContent = parseInt(tps)
document.querySelector("#nbAutoclick").textContent = parseInt(nbAutoclick)
document.querySelector("#nbLemon").textContent = parseInt(nbLemon)

document.querySelector("#prixAutoclick").textContent = parseInt(nbAutoclick*3 + 25)
document.querySelector("#prixLemon").textContent = parseInt(nbLemon*10 + 100)

function mainButtonClicked() {
    nbCurrency = nbCurrency+1
    document.querySelector("#nbCurrency").textContent = nbCurrency
}

function save(){

    localStorage['nbCurrency'] = nbCurrency
    localStorage['nbAutoclick'] = nbAutoclick
    localStorage['nbLemon'] = nbLemon
}

function updateTps(){
    tps = nbAutoclick + nbLemon*3
    document.querySelector("#tps").textContent = tps
}

function buyAutoclick(){
    let prix = nbAutoclick*3 + 25
    if (nbCurrency>=prix){
        nbCurrency -= prix
        nbAutoclick += 1
        document.querySelector("#nbAutoclick").textContent = nbAutoclick
        prix += 3
        document.querySelector("#prixAutoclick").textContent = prix
        document.querySelector("#nbCurrency").textContent = nbCurrency
        updateTps()
    }
}

function buyLemon(){
    let prix = nbLemon*10 + 100
    if (nbCurrency>=prix){
        nbCurrency -= prix
        nbLemon += 1
        document.querySelector("#nbLemon").textContent = nbLemon
        prix += 10
        document.querySelector("#prixLemon").textContent = prix
        document.querySelector("#nbCurrency").textContent = nbCurrency
        updateTps()
    }
}

function autoclickMoney(){
    nbCurrency = parseInt(nbCurrency + (nbAutoclick))
}

function lemonMoney(){
    nbCurrency = parseInt(nbCurrency + (3*nbLemon))
}

let thuneChaqueSeconde = setInterval(function(){
    autoclickMoney()
    lemonMoney()
    document.querySelector("#nbCurrency").textContent = nbCurrency
},1000)

let autoSave = setInterval(save,10000)


