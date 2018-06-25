var color = prompt("choisissez votre couleur de font en tapant sur votre clavier: bleu ou rouge ");

if ( color == "bleu"){
    document.getElementById("couleurFond").style.backgroundColor="blue";
}
else if ( color == "rouge"){
    document.getElementById("couleurFond").style.backgroundColor="red";
}