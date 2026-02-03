const main = document.getElementById("main");

function createSky() {
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j ++) {
            const newSky = document.createElement("div");
            newSky.classList("sky");
            main.appendChild(newSky)
        }
    }
}
createSky();