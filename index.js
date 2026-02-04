const bodyContainer = document.getElementsByClassName("body-container")[0]
// console.log(bodyContainer)
function createBoard() {
    for (let i = 1; i <= 25; i++) {
        for (let j = 1; j <= 40; j++) {
            if ( i <= 8) {
                const sky = document.createElement("div")
                sky.classList.add("sky")
                // console.log(sky)
                bodyContainer.appendChild(sky)
            } else if (i === 9) {
                if ([6, 7, 17, 18, 25, 26].includes(j)) {
                    const leaves = document.createElement("div");
                    leaves.classList.add("leaves-gr")
                    console.log(leaves);
                    bodyContainer.appendChild(leaves)
                } else {
                    const sky = document.createElement("div");
                    sky.classList.add("sky");
                    bodyContainer.appendChild(sky);
                }
            } else if (i === 10) {
                if ([5, 6, 7, 8, 16, 17, 18, 19, 24, 25, 26, 27].includes(j)) {
                    const leaves = document.createElement("div");
                    leaves.classList.add("leaves-gr");
                    bodyContainer.appendChild(leaves);
                } else {
                    const sky = document.createElement("div");
                    sky.classList.add("sky");
                    bodyContainer.appendChild(sky);
                }
            } else if (i === 11) {
                if (
                    [4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28].includes(j)) {
                    const leaves = document.createElement("div");
                    leaves.classList.add("leaves-gr");
                    bodyContainer.appendChild(leaves);
                } else if ([32, 34].includes(j)) {
                    const creeperFace = document.createElement("div");
                    creeperFace.classList.add("creeperFace");
                    bodyContainer.appendChild(creeperFace);
                } else {
                    const sky = document.createElement("div");
                    sky.classList.add("sky");
                    bodyContainer.appendChild(sky);
                }
            } else if (i === 12) {
                if ([17, 18, 25, 26].includes(j)) {
                    const wood = document.createElement("div");
                    wood.classList.add("wood")
                    console.log(wood)
                    bodyContainer.appendChild(wood)
                } else if ([4, 5, 6, 7, 8, 9, 13].includes(j)) {
                    const leaves = document.createElement("div");
                    leaves.classList.add("leaves-gr");
                    bodyContainer.appendChild(leaves)
                } else if ([32, 34].includes(j)) {
                    const creeperBody = document.createElement("div");
                    creeperBody.classList.add("creeperBody");
                    bodyContainer.appendChild(creeperBody);
                } else if ([37].includes(j)) {
                    const creeperFace = document.createElement("div");
                    creeperFace.classList.add("creeperFace");
                    bodyContainer.appendChild(creeperFace)
                } else {
                    const sky = document.createElement("div");
                    sky.classList.add("sky");
                    bodyContainer.appendChild(sky)
                }

            } else if (i === 13) {
                if ([6, 7, 17, 18, 25, 26].includes(j)) {
                    const wood = document.createElement("div");
                    wood.classList.add("wood");
                    bodyContainer.appendChild(wood);
                } else if ([12, 13, 14].includes(j)) {
                    const leaves = document.createElement("div");
                    leaves.classList.add("leaves-gr");
                    bodyContainer.appendChild(leaves);
                } else if ([32, 34, 37].includes(j)) {
                    const creeperBody = document.createElement("div");
                    creeperBody.classList.add("creeperBody");
                    bodyContainer.appendChild(creeperBody);
                } else {
                    const sky = document.createElement("div");
                    sky.classList.add("sky");
                    bodyContainer.appendChild(sky);
                }

            } else if (i === 14) {
                if ([6, 7, 13, 17, 18, 25, 26].includes(j)) {
                    const wood = document.createElement("div");
                    wood.classList.add("wood");
                    bodyContainer.appendChild(wood);
                } else if ([32, 34, 37].includes(j)) {
                    const creeperBody = document.createElement("div");
                    creeperBody.classList.add("creeperBody");
                    bodyContainer.appendChild(creeperBody);
                } else {
                    const sky = document.createElement("div");
                    sky.classList.add("sky");
                    bodyContainer.appendChild(sky);
                }
            } else if (i === 15) {
                if ([6, 7, 13, 17, 18, 25, 26].includes(j)) {
                    const wood = document.createElement("div");
                    wood.classList.add("wood");
                    bodyContainer.appendChild(wood);
                } else if ([32, 34, 36, 38].includes(j)) {
                    const creeperBody = document.createElement("div");
                    creeperBody.classList.add("creeperBody");
                    bodyContainer.appendChild(creeperBody);
                } else {
                    const sky = document.createElement("div");
                    sky.classList.add("sky");
                    bodyContainer.appendChild(sky);
                }
            } else if (i === 16) {
                if ([6, 7, 13].includes(j)) {
                    const wood = document.createElement("div");
                    wood.classList.add("wood");
                    bodyContainer.appendChild(wood);
                } else if (j >= 16) {
                    const grass = document.createElement("div");
                    grass.classList.add("grass");
                    bodyContainer.appendChild(grass)
                } else {
                    const sky = document.createElement("div");
                    sky.classList.add("sky");
                    bodyContainer.appendChild(sky);
                } 
            } else if (i >= 17 && i <= 19) {
                    const soil = document.createElement("div");
                    soil.classList.add("soil");
                    bodyContainer.appendChild(soil);
            } else if (i === 20) {
                if (j <= 5) {
                    const soil = document.createElement("div");
                    soil.classList.add("soil");
                    bodyContainer.appendChild(soil);
                } else {
                    const stone = document.createElement("div");
                    stone.classList.add("stone");
                    bodyContainer.appendChild(stone);
                }
            } else {
                const stone = document.createElement("div");
                stone.classList.add("stone");
                bodyContainer.appendChild(stone);
            }
        }
    }
}


function LotteryOfStones() {
    const stons = document.getElementsByClassName("./stone")
}



createBoard()