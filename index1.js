var randomNumber=Math.floor(Math.random()*6)+1;

var randomImage1="dice"+randomNumber+".png";

var randomSource1="images/"+randomImage1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImage2="dice"+randomNumber2+".png";

var randomSource2="images/"+randomImage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src", randomSource2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins ";
}
else if(randomNumber2 > randomNumber){
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins ";
}
else{
    document.querySelector("h1").innerHTML="🏳️ Draw 🏳️";
}
