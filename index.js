const numberEl = document.getElementById("number-el")
const convertBtn = document.getElementById("convert-btn")
const lengthTxt = document.getElementById("length-txt")
const volumeTxt = document.getElementById("volume-txt")
const massTxt = document.getElementById("mass-txt")


convertBtn.addEventListener("click", function(){
    const value = numberEl.value;
    lenghtConvert(value)
    volumeConvert(value)
    massConvert(value)
})


function lenghtConvert(data){
    const meterToFeet = 3.281
    lengthTxt.innerHTML = `
    ${data} meters = ${(data*meterToFeet).toFixed(2)} feet
    <br> ${data} feet = ${(data/meterToFeet).toFixed(2)} meters
    `
}

function volumeConvert(data){
    const gallonToLiter = 3.785
    volumeTxt.innerHTML = `
    ${data} liters = ${(data/gallonToLiter).toFixed(2)} gallons
    <br> ${data} gallons = ${(data*gallonToLiter).toFixed(2)} liters
    `
}

function massConvert(data){
    const kiloToPound = 2.204
    massTxt.innerHTML = `
    ${data} kilos = ${(data*kiloToPound).toFixed(2)} pounds
    <br> ${data} pounds = ${(data/kiloToPound).toFixed(2)} kilos
    `
}