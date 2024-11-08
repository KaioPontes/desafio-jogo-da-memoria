const imagens = [
    "src/img/Hitsugaya.jpg",
    "src/img/Hitsugaya.jpg",
    "src/img/suhei.jpg",
    "src/img/suhei.jpg",
    "src/img/grimmjow.jpg",
    "src/img/grimmjow.jpg",
    "src/img/uruyu.jpg",
    "src/img/uruyu.jpg",
    "src/img/Nnoitra.jpg",
    "src/img/Nnoitra.jpg",
    "src/img/hollow2.jpg",
    "src/img/hollow2.jpg",
    "src/img/ichigo.jpg",
    "src/img/ichigo.jpg",
    "src/img/zaraki.jpg",
    "src/img/zaraki.jpg",
];

let openCards = [];
let shuffleImagens = imagens.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < imagens.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    let img = document.createElement("img");
    img.src = shuffleImagens[i];
    img.className = "image";
    box.appendChild(img);
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    let img1 = openCards[0].querySelector("img").src;
    let img2 = openCards[1].querySelector("img").src;

    if (img1 === img2) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === imagens.length) {
        alert("Você venceu!");
    }
}
