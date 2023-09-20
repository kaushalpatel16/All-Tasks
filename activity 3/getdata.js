
const urlParams = new URLSearchParams(window.location.search);
const paramValue = urlParams.get("paramId");
const product =JSON.parse(localStorage.getItem(paramValue));
console.log(product)

const id = document.getElementById("ProductId");
const Name = document.getElementById("ProductName");
const price = document.getElementById("ProductPrice");
const desc = document.getElementById("productDescription");


console.log(id);
id.value = product['productId'];
Name.value = product['productName'];
price.value = product['price'];
desc.value = product['productDescription'];



