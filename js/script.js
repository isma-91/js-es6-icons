const arrIcons = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "orange",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "blue",
  },
];
const eleContainerCards = document.querySelector(".cards-container");
const eleSelector = document.querySelector("select");
// console.log(eleSelector.value);

eleSelector.options.add(new Option("All", "all"));
eleSelector.options.add(new Option("animal", "animal"));
eleSelector.options.add(new Option("vegetable", "vegetable"));
eleSelector.options.add(new Option("user", "user"));
// const animal = arrIcons.filter((obj) => {
//   if (obj.type === "animal") {
//     return true;
//   }
//   return false;
// });
// console.log(animal.type);

for (let i = 0; i < arrIcons.length; i++) {
  objIcons = arrIcons[i];
  const eleCard = document.createElement("div");
  eleCard.classList.add("card");
  eleCard.classList.add("visible");
  eleContainerCards.append(eleCard);
  eleCard.innerHTML += `
  <i class= "fa-solid ${objIcons.prefix}${objIcons.name}"></i>`;
  // Generiamo i colori random
  let r, g, b;
  r = Math.round(Math.random() * 255);
  g = Math.round(Math.random() * 255);
  b = Math.round(Math.random() * 255);
  // applichiamo i colori random
  eleCard.style.color = `rgb(${r},${g},${b})`;
  const eleName = document.createElement("div");
  eleName.classList.add("name");
  eleName.innerHTML = `${objIcons.name}`;
  eleCard.append(eleName);
}

const cardList = document.querySelectorAll(".card");
// console.log(cardList);

eleSelector.onchange = function () {
  // console.log("ho cambiato");
  for (let i = 0; i < arrIcons.length; i++) {
    cardList[i].classList.remove("visible");
    if (eleSelector.value === "animal" && arrIcons[i].type === "animal") {
      cardList[i].classList.add("visible");
    } else if (
      eleSelector.value === "vegetable" &&
      arrIcons[i].type === "vegetable"
    ) {
      cardList[i].classList.add("visible");
    } else if (eleSelector.value === "user" && arrIcons[i].type === "user") {
      cardList[i].classList.add("visible");
    } else if (eleSelector.value === "all") {
      cardList[i].classList.add("visible");
    }
  }
};
