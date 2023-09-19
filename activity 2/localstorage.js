// LocalStorage is a data storage type of web storage.
//  This allows the JavaScript sites and apps to store and access the data without any expiration date. 
// This means that the data will always be persisted and will not expire. 
// data stored in the browser will be available even after closing the browser window.

// localStorage has no data protection and can be accessed using any code. So, it is quite insecure.
// You can store only maximum 5MB data on the browser using localStorage.

// localStorage Methods


// Methods	Description
// setItem()	This method is used to add the data through key and value to localStorage.
// getItem()	It is used to fetch or retrieve the value from the storage using the key.
// removeItem()	It removes an item from storage by using the key.
// clear()	It is used to gets clear all the storage.


// setItem()

localStorage.setItem("city", "Noida");  

// getItem()

const res = localStorage.getItem("city");  


// removeItem()

localStorage.removeItem("city");  

// clear()

localStorage.clear()  
