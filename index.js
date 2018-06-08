function select(ev) {
  //console.log(ev.srcElement.id);
  var str = ev.srcElement.id
  var res = str.substring(0,2);
  var ress = str.substring(2,3);
  //console.log(ress);
  if(res == 'cb') {
    noHighlightCredit(ress);
  }
  else{
    noHighlightGrade(ress);
  }
  document.getElementById(ev.srcElement.id).style.background = "#DAA520";
}

function noHighlightCredit(row){
  document.getElementById("cb"+row+"1").style.background = "#4CAF50";
  document.getElementById("cb"+row+"2").style.background = "#4CAF50";
  document.getElementById("cb"+row+"3").style.background = "#4CAF50";
  document.getElementById("cb"+row+"4").style.background = "#4CAF50";
  document.getElementById("cb"+row+"5").style.background = "#4CAF50";
}

function noHighlightGrade(row){
  document.getElementById("gb"+row+"1").style.background = "#4CAF50";
  document.getElementById("gb"+row+"2").style.background = "#4CAF50";
  document.getElementById("gb"+row+"3").style.background = "#4CAF50";
  document.getElementById("gb"+row+"4").style.background = "#4CAF50";
  document.getElementById("gb"+row+"5").style.background = "#4CAF50";
  document.getElementById("gb"+row+"6").style.background = "#4CAF50";
  document.getElementById("gb"+row+"7").style.background = "#4CAF50";
  document.getElementById("gb"+row+"8").style.background = "#4CAF50";
  document.getElementById("gb"+row+"9").style.background = "#4CAF50";
  document.getElementById("gb"+row+"10").style.background = "#4CAF50";
  document.getElementById("gb"+row+"11").style.background = "#4CAF50";
  document.getElementById("gb"+row+"12").style.background = "#4CAF50";

}

function submit(){
  var numClass = 0;
  var totalcreds = 0;
  for(var i = 1; i<=6; i++){
    for(var k = 1; k<=5; k++){
      if(document.getElementById("cb" + i +""+k).style.background == "rgb(218, 165, 32)"){
        numClass++;
        switch(k) {
          case 1:
              totalcreds += 2;
              break;
          case 2:
              totalcreds += 3;
              break;
          case 3:
              totalcreds += 4;
              break;
          case 4:
              totalcreds += 5;
              break;
          case 5:
              totalcreds += 6;
              break;
        }
      }
    }
  }

  var sum = 0;

  for(var j = 1; j<=numClass; j++){
    for(var k = 1; k<=5; k++){
      if(document.getElementById("cb" + j +""+k).style.background == "rgb(218, 165, 32)"){
        for(var q = 1; q<=12; q++){
          if(document.getElementById("gb" + j +""+q).style.background == "rgb(218, 165, 32)"){
            var tmp = k+1;
            switch(q) {
              case 1:
                  sum += (tmp*4);
                  break;
              case 2:
                  sum += (tmp*3.75);
                  break;
              case 3:
                  sum += (tmp*3.25);
                  break;
              case 4:
                  sum += (tmp*3);
                  break;
              case 5:
                  sum += (tmp*2.75);
                  break;
              case 6:
                  sum += (tmp*2.25);
                  break;
              case 7:
                  sum += (tmp*2);
                  break;
              case 8:
                  sum += (tmp*1.75);
                  break;
              case 9:
                  sum += (tmp*1.25);
                  break;
              case 10:
                  sum += (tmp*1);
                  break;
              case 11:
                  sum += (tmp*.75);
                  break;
              case 12:
                  sum += (tmp*0);
                  break;
            }
          }
        }
      }
    }
  }


  var answer = sum/totalcreds.toFixed(2);
  document.getElementById("gpa").innerHTML = answer;


}
