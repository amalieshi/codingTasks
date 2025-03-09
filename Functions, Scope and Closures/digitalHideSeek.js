function hide(hiddeLocation) {
  function seek(){
    return hiddeLocation;
  }
  return seek;
}

let startGame = hide('behind the couch');
console.log(startGame()); 