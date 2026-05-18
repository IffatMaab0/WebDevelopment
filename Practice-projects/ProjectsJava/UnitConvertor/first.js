const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const lengthPara = document.getElementById("length")
const volumePara = document.getElementById("volume")
const massPara = document.getElementById("Mass")



function lengthConversionFeet(){
    return inputEl.value*3.281
}
function lengthConversionMeter(){
    return inputEl.value / 3.281
}
function volumeConversionGallons(){
    return inputEl.value / 3.785 
}
function volumeConversionLiters(){
    return inputEl.value * 3.785  
}
function massConversionKg(){
    return inputEl.value /2.205
}
function massConversionPounds(){
    return inputEl.value * 2.205
}




btnEl.addEventListener("click", function(){
    let lengthFeet = lengthConversionFeet()
    let lengthMeter = lengthConversionMeter()
    let volumeGallon = volumeConversionGallons()
    let volumeLiter = volumeConversionLiters()
    let massKg = massConversionKg()
    let massPounds = massConversionPounds()

    lengthPara.textContent = `${inputEl.value} Meters: ${lengthFeet.toFixed(3)} Feet | 
    ${inputEl.value} feet: ${lengthMeter.toFixed(3)} meters`
    volumePara.textContent = `${inputEl.value} Liters: ${volumeGallon.toFixed(3)} Gallons | 
    ${inputEl.value} Gallons: ${volumeLiter.toFixed(3)} Liters`
    massPara.textContent = `${inputEl.value} Kg: ${massPounds.toFixed(3)} Pounds | 
    ${inputEl.value} pounds: ${massKg.toFixed(3)} Kg`
})