const navBar = document.querySelector("nav");
const galleryContainer = document.querySelector(".gallery__container");

let photoArr = [
  "/img/jeffwall_01.jpeg",
  "/img/jeffwall_02.jpg",
  "/img/jeffwall_03.jpg",
  "/img/jeffwall_02.jpg",
  "/img/jeffwall_03.jpg",

  "/img/jeffwall_02.jpg",
  "/img/jeffwall_03.jpg",

  "/img/jeffwall_02.jpg",
  "/img/jeffwall_03.jpg",
];

window.onload = function () {
  let i = 1;
  photoArr.forEach((photo) => {
    let newPhoto = document.createElement("div");
    newPhoto.className = `photo photo${i}`;
    galleryContainer.appendChild(newPhoto);
    i++;
  });
};
