const betuk = document.getElementById("betuk");
const jatekmezo = document.getElementById("jatekmezo");
let letters = ['A','B','C','D','E','F','G','H','I',"J",'K','L','M','N','O','P','Q','R','S','T','U', 'V', "W", "X", "Y", "Z"];
const elemek = document.getElementById("elemek");


    for (let i = 0; i< 35; i++){
        var betu = document.createElement("div");
        let random = Math.floor(Math.random()* letters.length)
        betu.innerText = letters[random];
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
            
                    event.dataTransfer.setData('text/plain', event.target.innerText);
                })
            })
        
            const mezoresz = document.querySelectorAll('.mezo')
            mezoresz.forEach(mezo =>{
                mezo.addEventListener("dragover", (event) =>{
                    event.preventDefault();
                });
            });
        
            mezoresz.forEach(mezo => {
                mezo.addEventListener("drop", (event) =>{
                    event.preventDefault();
                    const id = event.dataTransfer.getData('text/plain');
                    const div = document.createElement("div");
                    div.innerText = id;
                    div.className = "betuim";
                    div.draggable = true
                    div.style.border = "none"
                    mezo.appendChild(div);
                });
            });
             
        }





palya();

