// VARIABILI

let mediaButton = document.querySelector(".mid-button");

let medianButton = document.querySelector(".median-button");

let frequencyButton = document.querySelector(".frequency-button");

const selectedMethod = document.querySelector(".selected-method");

let numberLenghtButton = document.querySelector(".number-lenght");

let inputLenghtNumbers = document.querySelector("#lenghtNumber");

let inputMessage = document.querySelector(".number-lenght-message");

let resultStat = document.querySelector(".result-stat")


let mediaButtonClicked = false

let medianButtonClicked = false

let frequencyButtonClicked = false


// BOTTONI


mediaButton.addEventListener("click", function(){
    mediaButtonClicked = true;
    selectedMethod.innerHTML = "Mid method has been selected"
})

medianButton.addEventListener("click", function(){
    medianButtonClicked = true;
    selectedMethod.innerHTML = "Median method has been selected"
})

frequencyButton.addEventListener("click", function(){
    frequencyButtonClicked = true
    selectedMethod.innerHTML = "Trend Statistical method has been selected"
})



inputLenghtNumbers.addEventListener("keyup", function(event){
    if(event.key === "Enter"){
        getInput()
    }
})


numberLenghtButton.addEventListener("click", getInput)

// FUNZIONI


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
        containerInputGenerated.innerHTML = "";


        let titleInput = document.createElement("h1");
        titleInput.textContent = "Insert Numbers Value in the Input"
        titleInput.classList.add("text-center")
        titleInput.classList.add("mb-4")

        containerInputGenerated.appendChild(titleInput)

        let numberValue = null

        for (let i = 0; i < inputLenghtNumbers.value; i++) {
            numberValue = document.createElement("input");
            numberValue.setAttribute("type", "number");
            containerInputGenerated.appendChild(numberValue);
            numberValue.classList.add("form-control");
            numberValue.classList.add("input-selected");
            numberValue.classList.add("mb-4");
        }
        
        


        let buttonCalculate = document.createElement("button");
        buttonCalculate.innerHTML = "Get Statistic Value"
        buttonCalculate.classList.add("btn");
        buttonCalculate.classList.add("btn-primary");
        containerInputGenerated.appendChild(buttonCalculate)        


        buttonCalculate.addEventListener("click",getStat)

        numberValue.addEventListener("keyup", function(event){
            if(event.key === "Enter"){
                getStat()
            }
        })

        

    }
}


function getStat() {
    let inputNumberUser = [];
    let valueInput = document.querySelectorAll(".input-selected");

    valueInput.forEach(Singleinput => {
        let inputValues = parseInt(Singleinput.value);
        if (!isNaN(inputValues)) {
            inputNumberUser.push(inputValues);
        }
    });

    if (inputNumberUser.length === 0) {
        resultStat.innerHTML = "Insert at least one numeric value";
        resultStat.classList.add('alert-warning');
    } else if (mediaButtonClicked) {
        resultStat.innerHTML = "Here is your Statistic Value: " + media(inputNumberUser).toFixed(2);
        resultStat.classList.remove('alert-warning');
        resultStat.classList.add('alert-success');
    } else if (medianButtonClicked) {
        resultStat.innerHTML = "Here is your Statistic Value: " + mediana(inputNumberUser).toFixed(2);
        resultStat.classList.remove('alert-warning');
        resultStat.classList.add('alert-success');
    } else if (frequencyButtonClicked) {
        resultStat.innerHTML = "Here is your Statistic Value: " + moda(inputNumberUser).toFixed(2);
        resultStat.classList.remove('alert-warning');
        resultStat.classList.add('alert-success');
    } else {
        resultStat.innerHTML = "You have to select the method to get the statistic value";
        resultStat.classList.add('alert-warning');
        resultStat.classList.remove('alert-success');
    }
}



// FUNZIONI DI TENDENZA STATISTICA

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