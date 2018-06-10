
function submit(){
  console.log("check");
  var nums = [1,2,3,4,5,6,7,8,9,10,11,12]
  var shufnums = shuffle(nums);
  console.log(shufnums);

  update(shufnums);
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

function update(kk){
  console.log(document.getElementById('text').innerHTML);
  document.getElementById('text').innerHTML= kk;
}
