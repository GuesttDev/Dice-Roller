const textbox = document.getElementById("num");
const button = document.getElementById("msb");
const result = document.getElementById("status");
const imgcontainer = document.getElementById("imgcontainer");

let dices = [];
let images = [];

button.onclick = function() {
    let num = Number(textbox.value);
    
    if (!(isNaN(num)) && num > 0 && num < 10**5) {
        for (let i = 0; i < num; i++) {
            let randomnum = Math.floor(Math.random() * 6) + 1;

            dices.push(randomnum);
            images.push(`<img src="Images/${randomnum}.png" alt="Dice ${randomnum}" />`)
        }

        result.textContent = `Dice: ${dices.join(', ')}`;
        imgcontainer.innerHTML = images.join(' ');
        dices = [];
        images = [];
    }
}