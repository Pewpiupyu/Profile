const unsentStateElem = document.querySelector(".unsent-state");
const successStateElem = document.querySelector(".success-state");
const sendBtn = document.querySelector(".sendBtn");

sendBtn.addEventListener("click", (event) => {
    event.preventDefault();

    unsentStateElem.classList.toggle("hidden")
    successStateElem.classList.toggle("hidden")
});