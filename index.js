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
  console.log("check");
  var nums = [1,2,3,4,5,6,7,8,9,10,11,12]
  var shufnums = shuffle(nums);
  console.log(shufnums);


}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
