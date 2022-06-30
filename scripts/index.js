const buttons = document.querySelectorAll(".drum")

function animate(char) {
    const activeButton = document.querySelector("." + char);
    activeButton.classList.add("pressed")

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

for (let i = 0; i < buttons.length; i++) {
    // detecting button press
    buttons[i].addEventListener("click", function () {
        playSound(this.innerText);
        animate(this.innerText);
    });

    // detecting keyboard press
    buttons[i].addEventListener("keydown", function (event) {
        playSound(event.key);
        animate(event.key);
    });
}

function playSound(char) {
    switch (char) {
        case "w":
            new Audio("../sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("../sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("../sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("../sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("../sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("../sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("../sounds/tom-4.mp3").play();
    }
}