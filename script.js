function select(string) {
  return document.getElementById(`${string}`);
}

function loadAllCategories() {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories));
}

function displayCategories(categoriesArray) {
  categoriesArray.forEach((category) => {
    const newButton = document.createElement("button");
    newButton.innerHTML = `
    <button id="categoryBtn${category.id}" onclick="loadCategoryData(${category.id})" class="btn btn-neutral btn-outline hover:bg-[#15803d] text-[#1f2937] hover:text-white categoryBtns border-none w-full flex justify-start categoryBtns">
        ${category.category_name}
    </button>
    `;
    select("categoriesContainer").appendChild(newButton);
  });
}

function loadCategoryData(id) {
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((response) => response.json())
    .then((data) => {
      displayCategoryData(data.plants);
    });

  const categoryBtns = document.querySelectorAll(".categoryBtns");
  categoryBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  select(`categoryBtn${id}`).classList.add("active");
}

function loadAllPlantData() {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((response) => response.json())
    .then((data) => {
      displayCategoryData(data.plants);
    });

  const categoryBtns = document.querySelectorAll(".categoryBtns");
  categoryBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  select("categoryBtn0").classList.add("active");
}

function displayCategoryData(dataArray) {
  select("cardContainer").innerHTML = "";
  dataArray.forEach((plant) => {
    const newCard = document.createElement("div");
    newCard.innerHTML = `
        <div class="bg-white p-4 shadow-sm rounded-md h-full flex flex-col justify-between gap-3 items-center">
            <div class="space-y-3">
                <img src="${plant.image}" class="w-full rounded-sm ">
                <div class="font-bold">${plant.name}</div>
                <div class="text-[#1f2937]">
                    ${plant.description}
                </div>
            </div>
            <div class="space-y-3 w-full">
                <div class="flex items-center justify-between">
                    <div class="p-3 bg-[#DCFCE7] rounded-[20px] text-[#15803D]">
                        ${plant.category}
                    </div>
                    <div class="font-semibold">৳${plant.price}</div>
                </div>
              <button id="addToCartBtn${plant.id}" onclick="addToCart(${plant.id})"
                class="btn bg-[#15803d] text-white w-full rounded-[30px] border-none"
              >
                Add to Cart
              </button>
            </div>
        </div>
    `;

    select("cardContainer").appendChild(newCard);
  });
}

let price = 0;

function addToCart(id) {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((response) => response.json())
    .then((plant) => {
      addToCartFunctionality(plant.plants);
    });
}

function addToCartFunctionality(plant) {
  const newItem = document.createElement("div");

  if (select("cartContainer").contains(select(`cartItem${plant.id}`))) {
    select(`itemCount${plant.id}`).innerText =
      Number(select(`itemCount${plant.id}`).innerText) + 1;

    price += plant.price;
    select("displayPrice").innerText = price;
    return;
  }

  newItem.innerHTML = `
            <div id="cartItem${plant.id}"
              class="flex justify-between items-center p-3 bg-[#F0FDF4] rounded-md"
            >
              <div>
                <h3 class="font-semibold">${plant.name}</h3>
                <h3 class="text-[#8c8c8c]">৳${plant.price} x <span id="itemCount${plant.id}">1</span></h3>
              </div>
              <div class="cursor-pointer">
                <i onclick="crossBtn(${plant.id})" class="fa-solid fa-xmark" style="color: #8c8c8c"></i>
              </div>
            </div>
  `;

  select("cartContainer").appendChild(newItem);

  price += plant.price;
  select("displayPrice").innerText = price;
}

function crossBtn(id) {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((response) => response.json())
    .then((plant) => {
      crossBtnFunctionality(plant.plants);
    });
}

function crossBtnFunctionality(plant) {
  select(`cartItem${plant.id}`).classList.add("hidden");

  price =
    price - plant.price * Number(select(`itemCount${plant.id}`).innerText);
  select("displayPrice").innerText = price;
}

loadAllCategories();
