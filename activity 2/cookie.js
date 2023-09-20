// Cookies are data, stored in small text files, on your computer.



// With JavaScript, a cookie can be created like this:

document.cookie = "username=John Doe";

// You can also add an expiry date . 
// By default, the cookie is deleted when the browser is closed:

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";


// Change a Cookie 
// With JavaScript, you can change a cookie the same way as you create it:

document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";


// Delete a Cookie 

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";