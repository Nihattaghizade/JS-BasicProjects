const tableContent = document.querySelector(".table-content");

function fillTable() {
  const products = getCartItmes();

  products.forEach((product) => {
    console.log(product);

    const rowElement = document.createElement("div");
    rowElement.className = "table-row";

    rowElement.innerHTML = `
            <div class="table-data">${product.id}</div>
            <div class="table-data">${product.title}</div>
            <div class="table-data">${product.description}</div>
            <div class="table-data">${product.price}</div>
            <div class="table-data">
              <img width="20" src="../../assets/icons/remove.svg" alt="Remove from cart">
            </div>
        `;

    rowElement.querySelector("img").addEventListener("click", () => {
      removeFromCart(product);
      rowElement.remove();
    });
    tableContent.append(rowElement);
  });
}

fillTable();


function removeFromCart(product){
  const cart = getCartItmes();
  const productIdx = cart.findIndex((p) => p.id === product.id);
  if (productIdx !== -1) {
    cart.splice(productIdx, 1);
    setCart(cart);
  }
}


function getCartItmes() {
  return JSON.parse(localStorage.getItem("cart")) ?? [];
}

function setCart(cart){
  localStorage.setItem("cart", JSON.stringify(cart));
}