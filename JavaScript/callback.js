/*Call Back function a function passed as a argument to another function
means a function waits until other function is executing and then executes
sum(1,3,printconsole);
sum(x,y,printconsole){
  let result = x + y;
  printconsole(result) 
}
 In the forEach loop there are 3 arguments which can pass one is element index and array it is called using a callback function
 arrayname.forEach(element => {callback Function});
*/
let myarr = ["sonal", "reshma","renisha","samantha"];

myarr.forEach(captialize);
myarr.forEach(print);

function captialize(element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
  console.log(element);
}