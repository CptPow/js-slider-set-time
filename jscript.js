import oggetto from "./oggetto.js";
const imgSlider = document.querySelector(".img-slider");
const imgPrincipale = document.querySelector(".img-principale");
const btnUp = document.querySelector("#up");
const btnDown = document.querySelector("#down");
let array = 0;
let selectedImageIndex = null;
let index = 0;
let creoImg = document.createElement("img");
let background = document.createElement("img");
let backImage = document.querySelector("#back");
const titolo = document.querySelector(".titolo");
const subtitolo = document.querySelector(".subtitolo");

//mostra immagine e title
let mostraImmagine = (i) => {
  let immagine = oggetto[i].image;
  creoImg.src = immagine;
  imgPrincipale.appendChild(creoImg);
  let title = oggetto[i].title;
  titolo.innerHTML = title;
  let titlesub = oggetto[i].location;
  subtitolo.innerHTML = titlesub;
};

//mostra immagine background
let mostraImmagineBack = (i) => {
  let immagineBack = oggetto[i].image;
  background.src = immagineBack;
  backImage.appendChild(background);
};
//foreach
oggetto.forEach((element) => {
  let imgElem = document.createElement("img");
  imgElem.classList.add("bordo");
  imgElem.src = element.image;
  imgSlider.appendChild(imgElem);

  // click bordo style
  imgElem.addEventListener("click", () => {
    let images = document.querySelectorAll(".img-slider img");
    images.forEach((img) => img.classList.remove("selected"));
    imgElem.classList.add("selected");
    selectedImageIndex = index;
  });
  //click
  document.addEventListener("click", (e) => {
    let images = document.querySelectorAll(".img-slider img");
    if (e.target.matches(".img-slider img")) {
      selectedImageIndex = Array.from(images).indexOf(e.target);
      mostraImmagine(selectedImageIndex);
      mostraImmagineBack(selectedImageIndex);
    }
  });
});

//preload
window.addEventListener(
  "DOMContentLoaded",
  mostraImmagine(array),
  mostraImmagineBack(array)
);
//BottoneSU
let bottone = function(){
  array--;
  if (array < 0) {
    array = oggetto.length - 1;
  }
  //slider
  let images = document.querySelectorAll(".img-slider img");
  images.forEach((img) => img.classList.remove("selected"));
  selectedImageIndex =
    (selectedImageIndex - 1 + oggetto.length) % oggetto.length;
  images[selectedImageIndex].classList.add("selected");

  mostraImmagine(array);
  mostraImmagineBack(array);
}

//BottoneGIU
let bottone2 = function () {
  array++;
  if (array > oggetto.length - 1) {
    array = 0;
  }
  //slider
  let images = document.querySelectorAll(".img-slider img");
  images.forEach((img) => img.classList.remove("selected"));
  selectedImageIndex = (selectedImageIndex + 1) % oggetto.length;
  images[selectedImageIndex].classList.add("selected");

  mostraImmagine(array);
  mostraImmagineBack(array);
}
//btnUp
btnUp.addEventListener("click",function(){
  setInterval(bottone,3000)
});
//btnDown
btnDown.addEventListener("click", function () {
  setInterval(bottone2,3000);
});
