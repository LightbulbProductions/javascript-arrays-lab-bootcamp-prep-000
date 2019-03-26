var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  }

function destructivelyPrependKitten(name){
  kittens.splice(0,0, "Bob");
}
 function destructivelyRemoveLastKitten(){
   kittens.splice(3,3, "Garfield");
 }