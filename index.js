const input = require('readline-sync');
let str = "LaunchCode";

console.log(str);
newstr = str.replace('Lau','');
newstr1 = newstr+'Lau';
console.log(newstr1);
//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
for(let i=0;i<=str.length;i++){
 // console.log(str);
}
let info = input.question("Question text... ");
console.log(info);
if(info.length<=str.length){
  console.log("Right input");
}else{
  console.log('wrong input');
}
//Use a template literal to print the original and modified string in a descriptive phrase.
//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
