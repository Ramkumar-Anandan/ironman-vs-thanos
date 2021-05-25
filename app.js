const spiderMan = document.getElementById("spider-man");
const blackPanther = document.getElementById("black-panther");
const ironMan = document.getElementById("iron-man");
const thanos = document.getElementById("thanos");
const black = document.getElementById("black");
const ronan = document.getElementById("ronan");
const resultText = document.getElementById("result-text");
const body = document.querySelector("body");

thanos.onclick = () => {
    spiderMan.style.opacity = 0;
    blackPanther.style.opacity = 0;
    ironMan.style.opacity = 0.5;
    thanos.style.opacity = 1;
    black.style.opacity = 1;
    ronan.style.opacity = 1;
    body.style.backgroundColor = "black";
    resultText.innerHTML = "I am Inevitable";
    resultText.style.color = "white";
}

ironMan.onclick = () => {
    spiderMan.style.opacity = 1;
    blackPanther.style.opacity = 1;
    ironMan.style.opacity = 1;
    thanos.style.opacity = 0.5;
    black.style.opacity = 0;
    ronan.style.opacity = 0;
    body.style.backgroundColor = "white";
    resultText.innerHTML = "I am Iron Man";
    resultText.style.color = "black";
}