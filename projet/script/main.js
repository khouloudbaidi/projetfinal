function resultat(){
    var score = 0;
    if(document.getElementById('correct1').checked)
    {
        score++ ;
    }
    if(document.getElementById('correct2').checked)
    {
        score++ ;
    }
    if(document.getElementById('correct3').checked)
    {
        score++ ;
    }
    if(document.getElementById('correct4').checked)
    {
        score++ ;
    }
    

    alert("Your score is:" +score);
}
