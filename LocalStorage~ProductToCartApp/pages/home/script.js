const tableContent = document.querySelector(".table-content");
const cartLengthElement = document.querySelector("#cart-length");

function fillTable() {
  products.forEach((product) => {
    //console.log(product);

    const rowElement = document.createElement("div");
    rowElement.className = "table-row";

    rowElement.innerHTML = `
            <div class="table-data">${product.id}</div>
            <div class="table-data">${product.title}</div>
            <div class="table-data">${product.description}</div>
            <div class="table-data">${product.price}</div>
            <div class="table-data"><img width="30" src="../../assets/icons/add-to-cart.svg" alt="Add to cart"></div>
        `;

        rowElement.querySelector("img").addEventListener("click", () => addToCart(product) )

        tableContent.append(rowElement);
  });
}

function addToCart(product){
  const cart = getCartItmes();
  cart.push(product);
  setCart(cart)
}

function getCartItmes() {
  return JSON.parse(localStorage.getItem("cart")) ?? [];
}

function setCart(cart){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function countCartItems(){
  const count = getCartItmes().length;
  const hasAnyItems = count > 0;

  cartLengthElement.style.display = hasAnyItems ? "flex" : "none";
  cartLengthElement.textContent = hasAnyItems ? count : 0;
}


countCartItems();

fillTable();