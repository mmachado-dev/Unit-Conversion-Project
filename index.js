const convertBtn = document.getElementById("convert-btn")
const lengthP = document.getElementById("length-p")
const volumeP = document.getElementById("volume-p")
const massP = document.getElementById("mass-p")
const modal = document.getElementById("modal")
const modalChoiceBtns = document.getElementById("modal-choice-btns")
const modalBtn = document.getElementById("modal-btn")
const declineBtn = document.getElementById("decline-btn")

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

function impossible() {
    modalChoiceBtns.classList.toggle("modal-choice-btns-reverse")
}

function showModal() {
    modal.style.display = "flex"
}

function hideModal() {
    modal.style.display = "none"
}

declineBtn.addEventListener("mouseenter",impossible)
setTimeout(showModal,3000)
setTimeout(hideModal,13000)