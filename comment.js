// Create web server (server.js) is a comment that describes the purpose of the file server.js. It is not a function or a variable. Therefore, it is not a member of the comments module. It is a member of the server module. When we import the server module, we can access this comment using the server object.

// To export a variable or function from a module, we use the module.exports object.
// Let's export the comments array from comments.js by adding the following line at the end of the file:
module.exports = comments;
// The module.exports object is a free variable that is available in all Node.js modules. It is a reference to the object that is returned when a file is imported using the require() function. By default, this object is an empty object.

// To import a variable or function from a module, we use the require() function. The require() function is a built-in Node.js function that imports a module. We can import the comments array from comments.js by adding the following line to the top of server.js:
const comments = require('./comments.js');
// The require() function returns the module.exports object from the comments.js file. We can access the comments array by using the comments object.

// The require() function is a built-in Node.js function that imports a module. It takes a file path as an argument and returns the module.exports object from the file.

// When the require() function is called with a file path:
// Node.js first looks for a core module with that name.
// If a core module with that name is not found, Node.js then looks for a file with the specified name in the same directory as the file that called require().
// If a file with the specified name is not found, Node.js then looks for a directory with the specified name containing a package.json file. If a package.json file is found, Node.js follows the steps outlined in the "Loading from node_modules Folders" section. If a package.json file is not found, Node.js looks for an index.js file in the specified directory.
// If a file with the name from the require() function is not found, Node.js throws an error.
// The require() function returns the module.exports object from the file. If the file is a JavaScript file, the module.exports object is the object that is defined in the file. If the file is a directory, the module.exports object is the object that is defined in the index.js file in that directory