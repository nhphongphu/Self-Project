let cartTemp = [{ name: "Iphone 12", price: 120000, quanity: 2 }, { name: "Iphone 1", price: 888, quanity: 2 }, { name: "Iphone 10", price: 999, quanity: 2 }]

let productList = document.getElementById("sortProduct");

// Tao the Li 
function addItem(Item) {

    let addProduct = document.createElement("li");
    //con cua Li
    let productName = document.createElement("h2");
    let productPrice = document.createElement("p");
    let productQuantity = document.createElement("p");
    let deleteButton = document.createElement("button");

    productList.appendChild(addProduct);
    //
    addProduct.appendChild(productName);
    addProduct.appendChild(productPrice);
    addProduct.appendChild(productQuantity);
    addProduct.appendChild(deleteButton);

    productName.innerHTML = Item.name;
    productPrice.innerHTML = Item.price;
    productQuantity.innerHTML = Item.quanity;
    deleteButton.innerHTML = "DELETE";

    deleteButton.onclick = () => {
        productList.removeChild(addProduct);
    };

    addProduct.id = "item-card"
}

let addButton = document.getElementById("addButton");

addButton.onclick = () => {
    let newItem = { name: prompt("Nhap ten san pham can mua"), quanity: prompt("Nhap vao so luong: "), price: 45000 }
    cartTemp.push(newItem);
    addItem(newItem);
}



for (let i = 0; i < cartTemp.length; i++) {
    addItem(cartTemp[i]);
}
