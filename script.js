document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
    var player1 = Math.floor(Math.random()*6)+1;
    var player2 = Math.floor(Math.random()*6)+1;

    var player1img = "images/dice" + player1 + ".png";
    var player2img = "images/dice" + player2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src",player1img);
    document.querySelectorAll("img")[1].setAttribute("src",player2img);
    if(player1>player2)
    {
        document.querySelector("h1").innerHTML="player1 Wins";
    }
    else if(player1<player2)
    {
        document.querySelector("h1").innerHTML="player2 Wins";
    }
    else
    {
        document.querySelector("h1").innerHTML="Draw";
    }
}