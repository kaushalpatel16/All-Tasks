function addProduct(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get form input values
    const productId = document.getElementById("ProductId").value;
    const productName = document.getElementById("ProductName").value;
    const price = document.getElementById("ProductPrice").value;
    const productDescription = document.getElementById("productDescription").value;
  
    // Get the selected image file from the input field
    const imageInput = document.getElementById("productImage");
    const selectedImage = imageInput.files[0]; // Get the selected file
  
    if (selectedImage) {
      // If an image is selected, perform image compression
      const maxWidth = 800;
      const maxHeight = 800;
  
      // Create a FileReader to read the selected image
      const reader = new FileReader();
  
      // When the FileReader finishes reading the image
      reader.onload = function () {
        // Create a new Image element
        const img = new Image();
  
        // When the image is loaded
        img.onload = function () {
          // Create a canvas element to perform image resizing
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
  
          let width = img.width;
          let height = img.height;
  
          // Calculate new dimensions while maintaining the aspect ratio
          if (width > maxWidth || height > maxHeight) {
            const aspectRatio = width / height;
  
            if (width > height) {
              width = maxWidth;
              height = width / aspectRatio;
            } else {
              height = maxHeight;
              width = height * aspectRatio;
            }
          }
  
          // Set canvas dimensions
          canvas.width = width;
          canvas.height = height;
  
          // Draw the image on the canvas with the new dimensions
          ctx.drawImage(img, 0, 0, width, height);
  
          // Convert the canvas content to a base64 data URL with JPEG format and 70% quality
          const compressedImageData = canvas.toDataURL("image/jpeg", 0.7);
  
          // Create a product object with the compressed image data and other details
          const product = {
            productId,
            productName,
            price,
            productDescription,
            compressedImageData,
          };
  
          // Store the product object in localStorage with the productId as the key
          localStorage.setItem(productId, JSON.stringify(product));
  
          // Reset the form to clear input fields
          document.getElementById("product-form").reset();
  
          // Log the product data to the console
          console.log("Product added with compressed image data:", product);
        };
  
        // Set the source of the image element to the result of the FileReader (the selected image)
        img.src = reader.result;
      };
  
      // Read the selected image file as a data URL
      reader.readAsDataURL(selectedImage);
    } else {
      // If no image is selected, create a product object without image data
      const product = {
        productId,
        productName,
        price,
        productDescription,
      };
  
      // Store the product object in localStorage with the productId as the key
      localStorage.setItem(productId, JSON.stringify(product));
  
      // Reset the form to clear input fields
      document.getElementById("product-form").reset();
  
      // Log the product data to the console
      console.log("Product added without image data:", product);
    }
  }
  
  // Add a form submit event listener to call the addProduct function when the form is submitted
  document.getElementById("product-form").addEventListener("submit", addProduct);
  