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
    .then((data) => displayCategoryData(data.plants));

  const categoryBtns = document.querySelectorAll(".categoryBtns");
  categoryBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  select(`categoryBtn${id}`).classList.add("active");
}

function loadAllPlantData() {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((response) => response.json())
    .then((data) => displayCategoryData(data.plants));

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
              <button
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

loadAllCategories();
