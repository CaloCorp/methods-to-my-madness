/******************
 * YOUR CODE HERE *
 ******************/
function slice (str, num1, num2){
  let finalString=''
  
if (num1 === undefined && num2 === undefined){

  return str
}
if (num1>=0 && num2 === undefined){

  for(let i=num1; i< str.length; i++){
    finalString += str[i]
  } 

  return finalString
}

if(num1 >=0 && num2>=0){
  for(let i=num1; i< num2; i++){
    finalString += str[i]
}
return finalString
}
}

function repeat (str, num){

let output = ''

if (str &&num>=0){

while (num>0){

  output+=str;
  num--;
}
}
return output 
}

function startsWith (str1,str2){

if (slice(str1,0,str2.length)===slice(str2,0)){
  return true
}

if (slice(str1,0,str2.length)!==slice(str2,0)){
  return false
}
}

function endsWith (str1, str2){
  // if(slice(str1,str1.length-str2.length)===str2)
  //   return true
  //   if(slice(str1,str1.length-str2.length)!==str2)
  //   return false

    return slice(str1,str1.length-str2.length)===str2;
  
}

function includes(arr, item/*aBeamOfSunLight, mote*/){
  
}




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
