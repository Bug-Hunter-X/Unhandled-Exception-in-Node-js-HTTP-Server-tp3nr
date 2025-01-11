# Unhandled Exception in Node.js HTTP Server

This example demonstrates an unhandled exception within a Node.js HTTP server and provides a solution for gracefully handling such errors.

## Bug
The `bug.js` file showcases a server that throws an unhandled exception. This leads to the server crashing and terminating without any indication to clients or logs.

## Solution
The `bugSolution.js` file presents an improved version with error handling using a `try...catch` block to prevent crashes.  The error is logged to the console, and the client receives an appropriate error response.

This improved error handling makes the application more robust and prevents unexpected shutdowns.