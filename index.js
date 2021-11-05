/*

This is how an item object should look like

{
  id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/
/*A user can view a selection of items in the store
- From the store, a user can add an item to their cart
- From the cart, a user can view and adjust the number of items in their cart
    - If an item's quantity equals zero it is removed from the cart
- A user can view the current total in their cart*/
const storeItems = [
  {
    id: "001-beetroot", // <- the item id matches the icon name in the assets/icons folder
    name: "beetroot",
    price: 0.35 // <- You can come up with your own prices
  },
  {
    id: "002-carrot", // <- the item id matches the icon name in the assets/icons folder
    name: "carrot",
    price: 0.32 // <- You can come up with your own prices
  },
  {
    id: "003-apple", // <- the item id matches the icon name in the assets/icons folder
    name: "apple",
    price: 0.32 

  },
  {
    id: "004-apricot", // <- the item id matches the icon name in the assets/icons folder
    name: "apricot",
    price: 0.32
  },
  {
    id: "005-avocado", // <- the item id matches the icon name in the assets/icons folder
    name: "avocado",
    price: 0.32
  },
  {
    id: "006-bananas", // <- the item id matches the icon name in the assets/icons folder
    name: "bananas",
    price: 0.32
  },
  {
    id: "007-bell-pepper", // <- the item id matches the icon name in the assets/icons folder
    name: "bell-pepper",
    price: 0.32
  },
  {
    id: "008-berry", // <- the item id matches the icon name in the assets/icons folder
    name: "berry",
    price: 0.32
  },
  {
    id: "009-blueberry", // <- the item id matches the icon name in the assets/icons folder
    name: "blueberry",
    price: 0.32
  },
  {
    id: "010-eggplant", // <- the item id matches the icon name in the assets/icons folder
    name: "eggplant",
    price: 0.32
  }
  ]
 const cartItems = [
    {
      item: {
        id: "010-eggplant",
        name:"eggplant",
        price: 0.32
      },
      quantity:1 
    },
    {
      item: {
        id: "003-apple",
        name:"apple",
        price: 0.32
      },
      quantity: 1
    }
  ]

const store = document.querySelector(".store--item-list");
const cart =  document.querySelector(".cart--item-list");
console.log(cart);
let itemQuantity = 1;

function renderStoreItems(items){
  
  for (let i = 0; i < items.length; i++){
    const listItemEl = document.createElement("li");
    const itemDiv = document.createElement("div");
    const imgEl = document.createElement("img");
    const addToCartButton = document.createElement("button");
    addToCartButton.addEventListener('click', function() {
      cart.innerHTML="";
      cartItems.push({item: {
        id: items[i].id,
        name:"eggplant",
        price: 0.32
      },
      quantity:1 })
      renderCartItems(cartItems)
   
    })

    itemDiv.setAttribute("class","store--item-icon");
    addToCartButton.innerText = "Add to cart";
    addToCartButton.id=items[i].name;
    store.append(listItemEl);
    listItemEl.append(itemDiv, addToCartButton); 
    itemDiv.append(imgEl);
    //(items[i].price);
    imgEl.setAttribute("src", `assets/icons/${items[i].id}.svg`);
    imgEl.setAttribute("alt", `${items[i].name}`);

  } 
}
  renderStoreItems(storeItems);

function renderCartItems(items){
  for (let i = 0; i < cartItems.length; i++){

  
  const listItemEl = document.createElement("li");
  const imgEl = document.createElement("img");
  imgEl.className = "cart--item-icon";
  imgEl.setAttribute("src", `assets/icons/${items[i].id}.svg`);
  imgEl.setAttribute("alt", `${items[i].name}`);
  const itemName = document.createElement("p");
  const increaseButton = document.createElement("button");
  increaseButton.className = "quantity-btn add-btn center";
  increaseButton.innerText = "+"
  const quantityDisplay = document.createElement("span");
  quantityDisplay.className = "quantity-text center";
  quantityDisplay.innerText =itemQuantity;
  const decreaseButton = document.createElement("button");
  decreaseButton.className = "quantity-btn remove-btn center";
  decreaseButton.innerText = "-"
  listItemEl.append(imgEl, itemName, decreaseButton, quantityDisplay, increaseButton );
  cart.append(listItemEl);
  
  
  }


}