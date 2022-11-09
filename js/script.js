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
const eleSelector = document.querySelector("[name='type']");
// console.log(eleSelector.value);

for (let i = 0; i < arrIcons.length; i++) {
  objIcons = arrIcons[i];
  const eleCard = document.createElement("div");
  eleCard.classList.add("card");
  eleContainerCards.append(eleCard);
  eleCard.innerHTML += `
  <i class= "fa-solid ${objIcons.prefix}${objIcons.name}"></i>`;
  eleCard.style.color = `${objIcons.color}`;
  const eleName = document.createElement("div");
  eleName.classList.add("name");
  eleName.innerHTML = `${objIcons.name}`;
  eleCard.append(eleName);
}

const cardList = document.querySelectorAll(".card");
console.log(cardList);

eleSelector.onchange = function () {
  console.log("ho cambiato");
  for (let i = 0; i < arrIcons.length; i++) {
    if (eleSelector.value === "animal" && cardList[i].type === "animal") {
      cardList[i].classList.add("hidden");
    }
  }
};
