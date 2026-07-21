const convertBtn = document.getElementById("convert-btn")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")

convertBtn.addEventListener("click",calculations)

function calculations() {
    const numberInput = document.getElementById("number-input").value
    const numberValue = Number(numberInput)

    const lengthMeters = (numberValue * 3.281).toFixed(3)
    const lengthFeet = (numberValue / 3.281).toFixed(3)

    const volumeLiters = (numberValue * 0.264).toFixed(3)
    const volumeGallons = (numberValue / 0.264).toFixed(3)

    const massPound = (numberValue * 2.204).toFixed(3)
    const massKilogram = (numberValue / 2.204).toFixed(3)

    lengthP.textContent = `${numberValue} meters = ${lengthMeters} | ${numberValue} feet = ${lengthFeet}`
    volumeP.textContent = `${numberValue} liters = ${volumeLiters} | ${numberValue} gallons = ${volumeGallons}`
    massP.textContent = `${numberValue} kilos = ${massPound} | ${numberValue} pounds = ${massKilogram}`

}