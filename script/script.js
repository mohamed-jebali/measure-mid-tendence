const arrayEsempio = [1,3,4,5,6,7,7,8,8,7,7,7,8,8,8,8,8];

const mediaRisultato = "ecco la media dell'array: " + media(arrayEsempio)

const medianaRisultato = "ecco la mediana dell'array: " + mediana(arrayEsempio);

const modaRisultato = "ecco la moda dell'array: " + moda(arrayEsempio);

console.log(mediaRisultato);

console.log(medianaRisultato);

console.log(modaRisultato);




// BOTTONI

let mediaButton = document.querySelector(".mid-button");

let medianButton = document.querySelector(".median-button");

let frequencyButton = document.querySelector(".frequency-button");

const selectedMethod = document.querySelector(".selected-method");

let numberLenghtButton = document.querySelector(".number-lenght");

let inputLenghtNumbers = document.querySelector("#lenghtNumber");

let inputMessage = document.querySelector(".number-lenght-message");



inputLenghtNumbers.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        getInput()
    }
})


numberLenghtButton.addEventListener("click", getInput)


function getInput() {    
    if(inputLenghtNumbers.value == 0 || isNaN(inputLenghtNumbers.value)){
        inputMessage.classList.add("alert-danger")
        inputMessage.classList.remove("alert-primary")
        inputMessage.textContent = "Error insert valid value"
    }
    else if(inputLenghtNumbers.value > 10){
        inputMessage.classList.add("alert-danger")
        inputMessage.classList.remove("alert-primary")
        inputMessage.textContent = "You have exceed the Limit of numbers"
    }
    else{
        inputMessage.classList.add("alert-primary")
        inputMessage.classList.remove("alert-danger")
        inputMessage.textContent = "you have selected " + inputLenghtNumbers.value + " numbers"

        let containerInputGenerated = document.querySelector(".input-generated");
        containerInputGenerated.innerHTML = ""; // Pulisci i campi input esistenti


        let titleInput = document.createElement("h1");
        titleInput.textContent = "Insert Numbers Value in the Input"
        titleInput.classList.add("text-center")
        titleInput.classList.add("mb-4")

        containerInputGenerated.appendChild(titleInput)

        for (let i = 0; i < inputLenghtNumbers.value; i++) {
            let numberValue = document.createElement("input");
            containerInputGenerated.appendChild(numberValue);
            numberValue.classList.add("form-control");
            numberValue.classList.add("mb-3");
        }


        let buttonCalculate = document.createElement("button");
        buttonCalculate.innerHTML = "Get Statistic Value"
        buttonCalculate.classList.add("btn");
        buttonCalculate.classList.add("btn-primary");
        containerInputGenerated.appendChild(buttonCalculate)

    }
}



mediaButton.addEventListener("click", function(){
    console.log("hai premuto media!")
    selectedMethod.innerHTML = "Mid method has been selected"
})

medianButton.addEventListener("click", function(){
    console.log("hai premuto mediana!")
    selectedMethod.innerHTML = "Median method has been selected"
})

frequencyButton.addEventListener("click", function(){
    console.log("hai premuto moda!")
    selectedMethod.innerHTML = "Trend Statistical method has been selected"
})





// FUNZIONI


   function media(arrayMedia){

       let sum = 0
       let resultMedia = 0

       for (let i = 0; i < arrayMedia.length; i++) {
           result = arrayMedia[i];
           sum += result
       }

       return resultMedia = sum / arrayMedia.length
   }

   function mediana(arrayMediana){

       let lenghtArray = 0;
       
       for (let j = 0; j < arrayMediana.length; j++) {
           lenghtArray = arrayMediana.length;
           
       }
       
       if(lenghtArray % 2 == 0){
           let firstMid = 0;
           let secondMid = 0;
           for (let tmp = 0; tmp < arrayMediana.length / 2; tmp++) {
               firstMid = arrayMediana[tmp];
               secondMid = arrayMediana[tmp + 1];
           }
           let resultMidElements = firstMid + secondMid;

           let mediumResultMid = resultMidElements / 2

           return mediumResultMid;
       }
       else{
           let medianaNumber = 0;
           for (let i = 0; i < arrayMediana.length / 2; i++) {
               const resultMediana = arrayMediana[i];
               medianaNumber = resultMediana   
           }
           return medianaNumber;
       }
   }

   function moda(arrayEsempio){
       let maxFrequency = 0;

       for (let tmx = 0; tmx < arrayEsempio.length; tmx++) {
           for (let tpp = 0; tpp < tmx; tpp++) {
               if(arrayEsempio[tmx] == arrayEsempio[tpp]){
                   maxFrequency = arrayEsempio[tmx];
               }
               
           } 
       }

       return maxFrequency;
   }