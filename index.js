const betuk = document.getElementById("betuk");
const jatekmezo = document.getElementById("jatekmezo");
let letters = ['A','B','C','D','E','F','G','H','I',"J",'K','L','M','N','O','P','Q','R','S','T','U'];


for (let i = 0; i<letters.length; i++){
    const betu = document.createElement("div");
    betu.innerText = letters[i];
    betu.className = "betuim";
    betu.draggable = true;
    betu.style.width = '45px'
    betu.style.height = '45px'
    betuk.appendChild(betu);
    };

function palya(){
    for (let i = 0; i< 10; i++){
        var sor = document.createElement('div');
        for (let j = 0; j< 10; j++){
            var mezo = document.createElement("div");
            mezo.className = "mezo";
            sor.appendChild(mezo);
            sor.className = "sor";
        };
        jatekmezo.appendChild(sor);

    };
    const huzhato = document.querySelectorAll('.betuim')
    huzhato.forEach(huzhato => {
        huzhato.addEventListener("dragstart", (event) =>{
            event.dataTransfer.setData('text/plain', event.target.id);
            event.target.style.backgroundColor = "aqua";
        })
    })
    const mezoresz = document.querySelectorAll('.mezo')
    mezoresz.forEach(mezo =>{
        mezo.addEventListener("dragover", (event) =>{
            event.preventDefault();
            mezo.style.backgroundColor = "red";
        });
        /*mezo.addEventListener("dragleave", (event) =>{
            event.preventDefault();
            mezo.style.backgroundColor = "black";
        });*/
        mezo.addEventListener("drop", (event) =>{
            event.preventDefault();
            const id = event.dataTransfer.getData('text/plain');
            const dragelement = document.getElementsByClassName('.betuim')
            mezo.appendChild(dragelement);
        })
    });
    
    
    
}

palya();


