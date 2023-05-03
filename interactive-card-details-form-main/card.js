//DECLARATION
const container = document.querySelector(".container");
 const confirmBtn = document.querySelector(".confirm-btn");
 const outputName = document.getElementById("card-name");
 const outputNumber = document.getElementById("card-front-number");
 const outputMonth = document.getElementById("card-month");
 const outputYear = document.getElementById("card-year");
 const outputcvc = document.getElementById("card-back-number");
 const inputName = document.getElementById("input-name");
 const inputNumber = document.getElementById("input-number");
 const inputMonth = document.getElementById("month");
 const inputYear = document.getElementById("year");
 const inputcvc = document.getElementById("cvc");
 const alertOne = document.querySelector(".alert1");
 const alertTwo = document.querySelector(".alert2");
 const alertThree = document.querySelector(".alert3");
 const alertFour = document.querySelector(".alert4");
 const overlay = document.querySelector(".overlay");
 const continueBtn = document.querySelector(".continue-btn");

 
//DISPLAY NAME
 inputName.addEventListener("keyup", function(){
 outputName.textContent = inputName.value;  
 })

 //DISPLAY NUMBER
inputNumber.addEventListener("keyup", function(){
  let number = inputNumber.value;
 outputNumber.textContent = format(number);
 })
//add a space after every 4 numbers
 function format(x){
  return x.replace(/(.{4})/g, "$1 ");
 }

 //DISPLAY MONTH
inputMonth.addEventListener("keyup", function(){
  if(inputMonth.value < 10){
    let number = inputMonth.value;
    let result = number.toString().padStart(2, '0');
    outputMonth.textContent = result; 
  }  
  else{
    outputMonth.textContent = inputMonth.value;
  }
  
 })

//DISPLAY YEAR
inputYear.addEventListener("keyup", function(){
  outputYear.textContent = inputYear.value;
})

//DISPLAY CVC
inputcvc.addEventListener("keyup", function(){
  outputcvc.textContent = inputcvc.value;
})

//SUBMIT BUTTON

confirmBtn.addEventListener("click", function(e){
e.preventDefault();
  let blankPage;
  let wrong;
  blankPage = false;
  wrong = false;
  const newArray = [inputName, inputNumber, inputMonth, inputYear, inputcvc];
  //console.log(newArray[1].value);
  for(let i = 0; i <= newArray.length-1; i++){
    //console.log(newArray[i].value);
    if(newArray[i].value == ""){
      blankPage = true;
    }
    if(isNaN(newArray[0].value)){
      wrong = false;
    }
     if(isNaN(newArray[1].value)){
       wrong = true;
    }
    if(isNaN(newArray[2].value)){
      wrong = true;
   }
   if(isNaN(newArray[3].value)){
    wrong = true;
   }
   if(isNaN(newArray[4].value)){
   wrong = true;
   }
  }

  if(blankPage === false && wrong === false){
    overlay.classList.add("show-overlay");
  }
  else{

       let letters = /^[A-Za-z\s]+$/;

  if (inputName.value == ""){
    alertOne.classList.add("show-alerts");
    alertOne.textContent = "Can't be blank";
    inputName.classList.add("alert-input");
   }
   else if(!inputName.value.match(letters)){
    alertOne.classList.add("show-alerts");
    alertOne.textContent = "Wrong format. Letters only.";
    inputName.classList.add("alert-input");
   }
   else{
    inputName.classList.add("active-input");
   } 

   if (inputNumber.value == ""){
    alertTwo.classList.add("show-alerts");
    alertTwo.textContent = "Can't be blank";
    inputNumber.classList.add("alert-input");
   }
   else if(isNaN(inputNumber.value)){
    alertTwo.classList.add("show-alerts");
    alertTwo.textContent = "Wrong format, numbers only.";
    inputNumber.classList.add("alert-input");
   }
   else{
    inputNumber.classList.add("active-input");
   } 

   if (inputMonth.value == ""){
    alertThree.classList.add("show-alerts");
    alertThree.textContent = "Can't be blank";
    inputMonth.classList.add("alert-input");
   }

   if (inputYear.value == ""){
    alertThree.classList.add("show-alerts");
    alertThree.textContent = "Can't be blank";
    inputYear.classList.add("alert-input");
   }
   else if(isNaN(inputYear.value) && isNaN(inputMonth.value)){
    alertThree.classList.add("show-alerts");
    alertThree.textContent = "Wrong format.";
    inputYear.classList.add("alert-input");
    inputMonth.classList.add("alert-input");
   }
   else{
    inputMonth.classList.add("active-input");
    inputYear.classList.add("active-input");
   } 
  
  if (inputcvc.value == ""){
    alertFour.classList.add("show-alerts");
    alertFour.textContent = "Can't be blank";
    inputcvc.classList.add("alert-input");
   }
   else if(isNaN(inputcvc.value)){
    alertFour.classList.add("show-alerts");
    alertFour.textContent = "Wrong format, numbers only.";
    inputcvc.classList.add("alert-input");
   }
   else{
    inputcvc.classList.add("active-input");
   }   
  }
})



// //CONTINUE BUTTON
continueBtn.addEventListener("click", function(){
  container.reset();
})

