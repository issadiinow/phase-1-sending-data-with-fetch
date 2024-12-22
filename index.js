// Add your code here
// Function to send data using POST request
function submitData(name, email) {
    // Sending POST request to the server
    return fetch("http://localhost:3000/users", {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Send data in JSON format
        "Accept": "application/json" // Expect a JSON response
      },
      body: JSON.stringify({ name, email }) // Convert the object to a JSON string
    })
      .then(function(response) {
        return response.json(); // Parse the JSON response
      })
      .then(function(object) {
        // Extract the 'id' from the response object and append it to the DOM
        const newId = object.id;
        document.body.append(`New user ID: ${newId}`);
      })
      .catch(function(error) {
        // If an error occurs, append the error message to the DOM
        document.body.append(`Error: ${error.message}`);
      });
  }
  
  // Example of using the function (you can test this in the browser console)
  submitData("John Doe", "john@example.com");
  