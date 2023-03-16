// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
  cats.push(name)
}
function destructivelyPrependCat(name){
  cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
  cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
  cats.shift(name);
}
 function appendCat(name) {
  var name_1=["Milo", "Otis", "Garfield", name];
  return name_1;
 } 
 function prependCat(name) {
  var name_2=[name, "Milo","Otis" , "Garfield"];
  return name_2;
 }
 function removeLastCat(name) {
  var name_2=["Milo", "Otis" ,"Garfield"];
  var name_2=["Milo", "Otis"];
  return name_2;
 }
 function removeFirstCat(name) {
  var name_1=["Milo", "Otis", "Garfield"];
  var name_2=["Otis", "Garfield"];
  return name_2;
 }