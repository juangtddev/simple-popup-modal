const btnOpenPopup = document.getElementById("btnopenpop")
const btnClosePopup = document.getElementById("btnclosepop")
const popup = document.getElementById("popup")

btnOpenPopup.addEventListener("click", openPopup)
btnClosePopup.addEventListener("click", closePopup)

function openPopup() {
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup")
}
