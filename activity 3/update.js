function updateprod(event) {
    event.preventDefault();

    const newproductId = document.getElementById("ProductId").value;
    const newProductName=document.getElementById("ProductName").value;
    const newPrice=document.getElementById("ProductPrice").value;
    const newproductDescription=document.getElementById("productDescription").value;
    
    console.log(newproductId);
    console.log(newProductName)
    console.log(newPrice)
    console.log(newproductDescription)

   
    const currentValue = JSON.parse(localStorage.getItem(newproductId));
        currentValue.productId = newproductId;
        currentValue.ProductName = newProductName;
        currentValue.Price = newPrice;
        currentValue.productDescription = newproductDescription;

        
        localStorage.setItem(newproductId, JSON.stringify(currentValue));
        window.location.href = "display.html";
}

document.getElementById('product-form').addEventListener('submit',updateprod);