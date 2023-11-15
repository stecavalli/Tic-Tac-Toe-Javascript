let player1;
let player2;
let turno = 1;
let count;
let giocatore;
let partite = 0;
let pareggi = 0;
let roundPl1 = 1;
let roundPl2 = 1;
let header;
document.getElementById("but").onclick = function(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    if(player1 == "" || player2 == ""){
         document.getElementById("h3").innerHTML="***** I nomi devono essere inseriti *****";
    }
    else{
        document.getElementById("h3").innerHTML="";
        document.getElementById("player1").remove();
        document.getElementById("player2").remove();
        document.getElementById("but").remove();
        document.getElementById("gamer1").innerHTML=`${player1}` + " - X";
        document.getElementById("gamer2").innerHTML=`${player2}` + " - O";
        CreateTable();
    }
}
function CreateTable(){
    if(turno == 1){
        giocatore = player1;
    }else{
        giocatore = player2;
    }
    let tabella = document.createElement("table");
    tabella.id=`tabella${partite}`;
    let div = document.getElementById("nuovatabella");
    tabella.innerHTML = 
    `<caption id="header">Turno Giocatore: ${giocatore}
    <br><br><br>
    <tr>
        <td id="1" class="bottom right"></td>
        <td id="2" class="bottom"></td>
        <td id="3" class="bottom left"></td>
    </tr>
    <tr>
        <td id="4" class="right"></td>
        <td id="5" class="center"></td>
        <td id="6" class="left"></td>
    </tr>
    <tr>
        <td id="7" class="up right"></td>
        <td id="8" class="up"></td>
        <td id="9" class="up left"></td>
    </tr>`;
    div.insertAdjacentElement("afterend", tabella);
    Game();
}
function Game(){
    let c_1 = document.getElementById("1");
    let c_2 = document.getElementById("2");
    let c_3 = document.getElementById("3");
    let c_4 = document.getElementById("4");
    let c_5 = document.getElementById("5");
    let c_6 = document.getElementById("6");
    let c_7 = document.getElementById("7");
    let c_8 = document.getElementById("8");
    let c_9 = document.getElementById("9");
    count = 0;
    header = document.getElementById("header");
    c_1.onclick = function(){
        if(turno == 1){
            c_1.innerHTML="X";
            turno = 2;
            header.innerHTML=`Turno giocatore: ${player2} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
        else{
            c_1.innerHTML="O";
            turno = 1;
            header.innerHTML=`Turno giocatore: ${player1} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
    }
    c_2.onclick = function(){
        if(turno == 1){
            c_2.innerHTML="X";
            turno = 2;
            header.innerHTML=`Turno giocatore: ${player2} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
        else{
            c_2.innerHTML="O";
            turno = 1;
            header.innerHTML=`Turno giocatore: ${player1} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
    }
    c_3.onclick = function(){
        if(turno == 1){
            c_3.innerHTML="X";
            turno = 2;
            header.innerHTML=`Turno giocatore: ${player2} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
        else{
            c_3.innerHTML="O";
            turno = 1;
            header.innerHTML=`Turno giocatore: ${player1} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
    }
    c_4.onclick = function(){
        if(turno == 1){
            c_4.innerHTML="X";
            turno = 2;
            header.innerHTML=`Turno giocatore: ${player2} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
        else{
            c_4.innerHTML="O";
            turno = 1;
            header.innerHTML=`Turno giocatore: ${player1} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
    }
    c_5.onclick = function(){
        if(turno == 1){
            c_5.innerHTML="X";
            turno = 2;
            header.innerHTML=`Turno giocatore: ${player2} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
        else{
            c_5.innerHTML="O";
            turno = 1;
            header.innerHTML=`Turno giocatore: ${player1} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
    }
    c_6.onclick = function(){
        if(turno == 1){
            c_6.innerHTML="X";
            turno = 2;
            header.innerHTML=`Turno giocatore: ${player2} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
        else{
            c_6.innerHTML="O";
            turno = 1;
            header.innerHTML=`Turno giocatore: ${player1} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
    }
    c_7.onclick = function(){
        if(turno == 1){
            c_7.innerHTML="X";
            turno = 2;
            header.innerHTML=`Turno giocatore: ${player2} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
        else{
            c_7.innerHTML="O";
            turno = 1;
            header.innerHTML=`Turno giocatore: ${player1} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
    }
    c_8.onclick = function(){
        if(turno == 1){
            c_8.innerHTML="X";
            turno = 2;
            header.innerHTML=`Turno giocatore: ${player2} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
        else{
            c_8.innerHTML="O";
            turno = 1;
            header.innerHTML=`Turno giocatore: ${player1} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
    }
    c_9.onclick = function(){
        if(turno == 1){
            c_9.innerHTML="X";
            turno = 2;
            header.innerHTML=`Turno giocatore: ${player2} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
        else{
            c_9.innerHTML="O";
            turno = 1;
            header.innerHTML=`Turno giocatore: ${player1} <br><br><br>`;
            count++;
            CheckWin();
            this.onclick = null;
        }
    }
    function CheckWin(){
        if(c_1.innerHTML == c_2.innerHTML && c_2.innerHTML == c_3.innerHTML && c_1.innerHTML!="")
        {
            if(c_1.innerHTML == "X"){
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player1}` + " - X <br>ha vinto il round " + `${roundPl1}` + " di 3<br><br><br>";
                if(roundPl1 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl1++;
            }
            else{
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player2}` + " - O <br>ha vinto il round " + `${roundPl2}` + " di 3<br><br><br>";
                if(roundPl2 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl2++;
            }
        }
        else if(c_4.innerHTML == c_5.innerHTML && c_5.innerHTML == c_6.innerHTML && c_4.innerHTML!="")
        {
            if(c_4.innerHTML == "X"){
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player1}` + " - X <br>ha vinto il round " + `${roundPl1}` + " di 3<br><br><br>";
                if(roundPl1 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl1++;
            }
            else{
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player2}` + " - O <br>ha vinto il round " + `${roundPl2}` + " di 3<br><br><br>";
                if(roundPl2 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl2++;
            }
        }
        else if(c_7.innerHTML == c_8.innerHTML && c_8.innerHTML == c_9.innerHTML && c_7.innerHTML!="")
        {
            if(c_7.innerHTML == "X"){
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player1}` + " - X <br>ha vinto il round " + `${roundPl1}` + " di 3<br><br><br>";
                if(roundPl1 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl1++;
            }
            else{
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player2}` + " - O <br>ha vinto il round " + `${roundPl2}` + " di 3<br><br><br>";
                if(roundPl2 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl2++;
            }
        }
        else if(c_1.innerHTML == c_4.innerHTML && c_4.innerHTML == c_7.innerHTML && c_1.innerHTML!="")
        {
            if(c_1.innerHTML == "X"){
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player1}` + " - X <br>ha vinto il round " + `${roundPl1}` + " di 3<br><br><br>";
                if(roundPl1 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl1++;
            }
            else{
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player2}` + " - O <br>ha vinto il round " + `${roundPl2}` + " di 3<br><br><br>";
                if(roundPl2 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl2++;
            }
        }
        else if(c_2.innerHTML == c_5.innerHTML && c_5.innerHTML == c_8.innerHTML && c_2.innerHTML!="")
        {
            if(c_2.innerHTML == "X"){
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player1}` + " - X <br>ha vinto il round " + `${roundPl1}` + " di 3<br><br><br>";
                if(roundPl1 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl1++;
            }
            else{
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player2}` + " - O <br>ha vinto il round " + `${roundPl2}` + " di 3<br><br><br>";
                if(roundPl2 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl2++;
            }
        }
        else if(c_3.innerHTML == c_6.innerHTML && c_6.innerHTML == c_9.innerHTML && c_3.innerHTML!="")
        {
            if(c_3.innerHTML == "X"){
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player1}` + " - X <br>ha vinto il round " + `${roundPl1}` + " di 3<br><br><br>";
                if(roundPl1 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl1++;
            }
            else{
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player2}` + " - O <br>ha vinto il round " + `${roundPl2}` + " di 3<br><br><br>";
                if(roundPl2 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl2++;
            }
        }
        else if(c_1.innerHTML == c_5.innerHTML && c_5.innerHTML == c_9.innerHTML && c_1.innerHTML!="")
        {
            if(c_1.innerHTML == "X"){
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player1}` + " - X <br>ha vinto il round " + `${roundPl1}` + " di 3<br><br><br>";
                if(roundPl1 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl1++;
            }
            else{
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player2}` + " - O <br>ha vinto il round " + `${roundPl2}` + " di 3<br><br><br>";
                if(roundPl2 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl2++;
            }
        }
        else if(c_3.innerHTML == c_5.innerHTML && c_5.innerHTML == c_7.innerHTML && c_3.innerHTML!="")
        {
            if(c_3.innerHTML == "X"){
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player1}` + " - X <br>ha vinto il round " + `${roundPl1}` + " di 3<br><br><br>";
                if(roundPl1 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl1++;
            }
            else{
                for(let i=1; i<10; i++){
                    document.getElementById(`${i}`).onclick = null;
                }
                header.innerHTML=`${player2}` + " - O <br>ha vinto il round " + `${roundPl2}` + " di 3<br><br><br>";
                if(roundPl2 < 3 ){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
                roundPl2++;
            }
        }
        else
        {
            if(count == 9){
                pareggi++;
                header.innerHTML=`Pareggio ${pareggi} di 5<br><br><br>`;
                if(pareggi < 5){
                    NuovaPartita();
                }else{
                    NuovoGame();
                }
            }
        }
    } 
    function NuovaPartita(){
        let newTabella = document.getElementById(`tabella${partite}`);
        let button = document.createElement("button");
        button.id="newBtn"
        button.innerHTML = "nuova partita";
        newTabella.insertAdjacentElement("afterend", button);
            button.onclick = function(){
                partite++;
                if(partite % 2 == 0){
                    turno = 1;
                }else{
                    turno = 2;
                }
                CreateTable();
                document.getElementById("newBtn").remove();
            }
            
    }
    function NuovoGame(){
        if(turno == 2){
            giocatore = player1;
        }else{
            giocatore = player2;
        }
        let newTabella = document.getElementById(`tabella${partite}`);
        let button = document.createElement("button");
        let div = document.createElement("div");
        if(pareggi == 5){
            div.innerHTML = "Il gioco è terminato per <br>aver fatto 5 pareggi. <br>Iniziane uno nuovo cliccando <br>sul pulsante qui sotto!";
        }else{
            div.innerHTML = `${giocatore}` +  " ha vinto 3 round. <br>Il gioco è terminato. <br>Iniziane uno nuovo cliccando <br>sul pulsante qui sotto!";
        }
        button.id="newBtn"
        button.innerHTML = "Nuovo Game";
        newTabella.insertAdjacentElement("afterend", button);
        newTabella.insertAdjacentElement("afterend", div);
            button.onclick = function(){
                window.location.href = "index.html";
            }
    }
}
   


    

