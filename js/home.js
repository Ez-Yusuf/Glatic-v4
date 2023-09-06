var says = 
[
    "Made by students, Played by students",
    "Why racist in discord?",
    "discord.gg/skool",
    "WELCOME TO VERSION 4 BOI'S" 
]

function pageLoad() {
    makemebus()
}

function makemebus(){
    document.getElementById('randomy').innerHTML = says[Math.floor(Math.random() * says.length)]
}
