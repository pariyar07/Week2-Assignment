const input = document.querySelector('.chips-input');
const text = document.querySelector('.chip-text');
const container = document.querySelector('.chips-container');

input.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        addNewChip();
    }
});

function addNewChip() {
    let newChips = document.createElement('li');
    container.appendChild(newChips);
    if(input.value == ""){
        return
    } else {
        newChips.innerHTML = `<p class="chip-text">${input.value}</p>
        <i class="fa fas fa-times-circle" id="delete">`
        input.value = "";
        const deleteChips = newChips.querySelector('#delete');
        deleteChips.addEventListener("click", () => {
            newChips.remove();
        })
    }
}

