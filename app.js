$(document).ready(function(){
  //Stores the inputs from user to calculate later
  var inputs=[""];
  //String to store current input string
  var totalString;
 //Operators array for validation without .
  var operators1 = ["+","-","/","*"];
 //operators array for validation with .
  var operators2 = ["."];
  //Numbers array for validation
  var nums=[0,1,2,3,4,5,6,7,8,9];
  //Adds value to inputs array and checks validation
function getValue(input){
  if(operators2.includes(inputs[inputs.length-1])===true && input==="."){
    console.log("Duplicate '.'");
  }
  //Validation so it doesn't start with an operator
  else if(inputs.length===1 && operators1.includes(input)===false){
    inputs.push(input);
  }
  //If last character was not an operator add operator to the array
  else if(operators1.includes(inputs[inputs.length-1])===false){
    inputs.push(input);
  }
  //Adds the number to inputs array
  else if(nums.includes(Number(input))){
    inputs.push(input);
  }
update();
}
  function update(){
      totalString= inputs.join("");
    $("#answer").html(totalString);
     $("#history").html(totalString);
  }
  function getTotal(){
     totalString= inputs.join("");
    console.log(totalString + ": " + eval(totalString));
    $("#answer").html(eval(totalString));
     $("#history").html(eval(totalString));
  }
  
  $("button").on("click",function(){
    if(this.id==="deleteAll"){
      inputs = [""];
      update();
    }
    else if(this.id==="backone"){
      inputs.pop();
      update();
    }
    else if(this.id==="total"){
      getTotal();
    }
    else{
      if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
        getValue(this.id);
      }
      else {
        getValue(this.id);
      }
    } 
  });
});