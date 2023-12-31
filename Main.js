let productList = document.getElementById("productList");

let productDataArray = [
  {
    id: "Mya Thandar Item_1",
    productName: "Fender Electric Guitar",
    price: 499,
    desc: "Fender Player Stratocaster HSS Pau Ferro Fingerboard Limited-Edition Electric Guitar",
    image: "images/fender_guitar.jpg",
    qty: 0,
  },
  {
    id: "Mya Thandar Item_2",
    productName: "Yamaha Acoustic Drumset",
    price: 899,
    desc: "Yamaha Stage Custom Hip 4-Piece Shell Pack Natural Wood",
    image: "images/yamaha_drumset.png",
    qty: 0,
  },
  {
    id: "Mya Thandar Item_3",
    productName: "Fender Electric Bass",
    price: 750,
    desc: "Fender Player Plus Active Jazz Bass Pau Ferro Fingerboard 3-Color Sunburst",
    image: "images/fender_bass.jpg",
    qty: 0,
  },
];

// ES6 arrow function
let showProductList = () => {
  return (productList.innerHTML = productDataArray
    .map((x) => {
      return (
        // We will use template literals using back tick!
        `<div id="product-id-${x.id}" class="item">
                <img width="245" height="60%" src="${x.image}" alt="">
                <div class="details">
                    <h3>${x.productName}</h3>
                    <p>${x.desc}</p>
                    <div class="price-qty">
                        <h2>$ ${x.price}</h2>
                        <div class="buttons">
                            <i onclick="removeItem(${x.id})" class="bi bi-dash-square"></i>
                            <div id="${x.id}" class="qty">${x.qty}</div>
                            <i onclick="addItem(${x.id})" class="bi bi-plus-square"></i>
                        </div>
                    </div>
                </div>   
            </div>`
      );
    })
    .join("")); // IMPORTANT TO JOIN othewise, commas showinng from Array.
};
showProductList();

let shoppingCart = []; // Empty Array

let addItem = (clickedItem) => {
  let selectedItem = clickedItem;
  //console.log('addItem = ' + selectedItem.id);
  let searchInCart = shoppingCart.find((x) => x.id === selectedItem.id);
  // Logic or Algorithm for adding item(s) from shopping cart.
  if (searchInCart === undefined) {
    // Not found int the shopping cart, Add to cart.
    shoppingCart.push({
      id: selectedItem.id,
      qty: 1,
    });
  } else {
    // found the item. Just add 1 to qty.
    searchInCart.qty += 1;
  }
  console.log(shoppingCart);
  addAllItemsInCart();
  updateItem(selectedItem.id);
};
let removeItem = (clickedItem) => {
  let selectedItem = clickedItem;
  //console.log('addItem = ' + selectedItem.id);
  let searchInCart = shoppingCart.find((x) => x.id === selectedItem.id);
  // Logic or Algorithm for removing item(s) from shopping cart.
  if (searchInCart.qty === 0) {
    // if the cart has ZERO item, just do nothing and return!!!
    return;
  } else {
    // found the item. Just minus 1 from qty.
    searchInCart.qty -= 1;
  }

  addAllItemsInCart();
  updateItem(selectedItem.id);
};
let updateItem = (id) => {
  let foundItem = shoppingCart.find((x) => x.id === id);
  console.log(id);
  if (foundItem) {
    document.getElementById(id).innerHTML = foundItem.qty;
  }
};

let addAllItemsInCart = () => {
  let total = 0;
  for (i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].qty;
  }
  console.log(total);

  document.getElementById("totalCartQty").innerHTML = total;
};
