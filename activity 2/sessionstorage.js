

// Session Storage is similar to Local Storage but has a shorter lifespan.
//  Data stored in Session Storage is only available for the duration of the page session.
//  It gets cleared when the user closes the tab or the browser.



// methods


// setItem(): it works to set the information for the session storage element.
// getItem(): it is worked for retrieving and displaying the session storage element.
// removeItem(): it displays to delete a specific session storage element.
// clear(): it is displayed to remove or clear entire items of the session storage element.


// setItem():

sessionStorage.setItem("key", "value");


// getItem():

const storedValue = sessionStorage.getItem("key");

// removeItem(): 

const removeItem = sessionStorage.removeItem("key");

// clear():
sessionStorage.clear();  
