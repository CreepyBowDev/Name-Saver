const display = document.querySelector(".display");
const save = document.querySelector(".save");
const remove = document.querySelector(".remove");
const divName = document.querySelector(".saved-box");

document.addEventListener("DOMContentLoaded", updateUI);

save.addEventListener('click', () => {
    localStorage.setItem("saved", display.value);
    updateUI();
});

remove.addEventListener('click', () => {
    localStorage.removeItem("saved");
    updateUI();
});

function updateUI() {
    const savedText = localStorage.getItem("saved");
    if (savedText) {
        divName.innerHTML = `<p><strong>Your name saved is:</strong> ${savedText}</p>`;
    } else {
        divName.innerHTML = "";
    }
}
