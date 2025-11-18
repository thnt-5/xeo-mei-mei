const character = document.getElementById("character");
const characterVideo = document.getElementById("characterVideo");
const countText = document.getElementById("count");
const bestText = document.getElementById("best");
const sound = document.getElementById("sound");

let count = Number(localStorage.getItem("count")) || 0;
let best = Number(localStorage.getItem("best")) || 0;

countText.innerText = count;
bestText.innerText = best;

function handleClick() {
    character.style.display = "none";
    characterVideo.style.display = "block";

    sound.currentTime = 0;
    sound.play();

    characterVideo.currentTime = 0;
    characterVideo.play().catch(err => {
        console.log("V", err);
    });

    characterVideo.onended = () => {
        characterVideo.style.display = "none";
        character.style.display = "block";
    };

    count++;
    countText.innerText = count;
    localStorage.setItem("count", count);

    if (count > best) {
        best = count;
        bestText.innerText = best;
        localStorage.setItem("best", best);
    }
}

character.addEventListener("click", handleClick);
characterVideo.addEventListener("click", handleClick);



