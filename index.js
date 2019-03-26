var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push("Ralph");
  }

function destructivelyPrependKitten(name){
  kittens.splice(0,0, "Bob");
}
 function destructivelyRemoveLastKitten(arr){
   kittens.pop()
  return kittens;
 }
 
 function destructivelyRemoveFirstKitten(name){
  kittens.splice(0,1);
 }
 
 function  appendKitten(name){
   return [...kittens, name];
 }
 
 function prependKitten(name) {
  return [name, ...kittens];
}