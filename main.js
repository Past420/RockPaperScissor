var playerchoice;
var computerchoice;
var arr=["rock","paper","scissor"];
var playerscore = 0;
var computerscore = 0
function getchoice()
{
    var index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

function winner(p,c)
{
    document.getElementById("bruh").innerHTML="";
    if(p===c)
    {
        return 0;
    }
    else if((p==="paper" && c==="rock")||(p==="scissor" && c==="paper")||(p==="rock" && c==="scissor"))
    {
        playerscore++;
        document.getElementById("p").innerHTML = playerscore;
    }
    else
    {
        computerscore++;
        document.getElementById("c").innerHTML = computerscore;
    }
}
function check(event)
{
    playerchoice=event;
    computerchoice = getchoice();
    winner(playerchoice,computerchoice)
    if(playerscore===5)
    {
        document.getElementById("bruh").innerHTML="You Win";
        playerscore = 0;
        computerscore = 0;
        document.getElementById("c").innerHTML = computerscore;
        document.getElementById("p").innerHTML = playerscore;
    }
    else if(computerscore==5)
    {
        document.getElementById("bruh").innerHTML="You Lose";
        playerscore = 0;
        computerscore = 0;
        document.getElementById("c").innerHTML = computerscore;
        document.getElementById("p").innerHTML = playerscore;
    }
}