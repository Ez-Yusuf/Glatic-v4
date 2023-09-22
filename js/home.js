var says = 
[
    "Made by students, Played by students",
    "Made by Yusef & Xordas tehe",
    "dsc.gg/offical-glaitc-games | thats our discord",
    "WELCOME TO VERSION 4 BOI'S" 
]

function pageLoad() {
    makemebus()
}

function makemebus(){
    document.getElementById('randomy').innerHTML = says[Math.floor(Math.random() * says.length)]
}


