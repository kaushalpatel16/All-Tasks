function displayProducts() {
    const productList = document.getElementById("productList");
    const filterByIdSelect = document.getElementById("filterById");
    const sortSelect = document.getElementById("sort");
  
    const filterById = filterByIdSelect.value;

  // Get the selected sorting option from the user interface
  const sortCriteria = sortSelect.value;

  const products = Object.keys(localStorage).map(key => JSON.parse(localStorage[key]));

  const filteredProducts = filterById ? products.filter(product => product.productId === filterById) : products;

  // Ensure that sortCriteria is a valid property of the product object
  if (sortCriteria in filteredProducts[0]) {
    filteredProducts.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
  }

  productList.innerHTML = '';

  
    // Create a container div for the product cards
    const productContainer = document.createElement("div");
    productContainer.className = "product-container";
  
    // Iterate through the products and create a card for each
    filteredProducts.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
  
      const productHtml = `
          <div class="product-image">
              <img src="${product.compressedImageData}" alt="Product Image">
          </div>
          <div class="product-details">
              <p>Product ID: ${product.productId}</p>
              <p>Product Name: ${product.productName}</p>
              <p>Price: ${product.price}</p>
              <p>Product Description: ${product.productDescription}</p>
              <a href="update.html?paramId=${product.productId}">Edit</a>
              <button class="delete-button" data-product-id="${product.productId}">Delete</button>
          </div>
      `;
  
      productCard.innerHTML = productHtml;
      productContainer.appendChild(productCard);
  
      // Add click event listener to the delete button
      const deleteButton = productCard.querySelector(".delete-button");
      deleteButton.addEventListener("click", () => {
        const productIdToDelete = deleteButton.getAttribute("data-product-id");
        // Call a function to delete the product with productIdToDelete
        deleteProduct(productIdToDelete);
      });
    });
    // Append the product container to the productList element
    productList.appendChild(productContainer);
  }
  
  // Call the displayProducts function when the page loads and when filter or sort options change
  window.addEventListener("load", displayProducts);
  document.getElementById("filterById").addEventListener("change", displayProducts);
  document.getElementById("sort").addEventListener("change", displayProducts);
  
  function deleteProduct(productId) {
    // Remove the product data with the specified productId from localStorage
    localStorage.removeItem(productId);
    // Re-display the updated product list
    displayProducts();
  }
  