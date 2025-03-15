# Cloudflare Worker to fetches external API

# overview
 Cloudflare Workers function  fetches data from an external API (https://jsonplaceholder.typicode.com/todos/1) and returns it as a response with the correct content-type header.


# Features
 The worker Fetches data from https://jsonplaceholder.typicode.com/todos/1.

It Determines the content type of the response.

Formats JSON responses properly.

Maintains correct response headers.

Serves both JSON and plain text responses correctly.

# Workflow
The worker Receives a request and The fetch function is triggered upon an HTTP request.

# Fetches data from an external API: 
It makes a request to https://jsonplaceholder.typicode.com/todos/1.

# Processes the response:

Extracts headers.

Identifies if the response is JSON.

Formats the JSON response properly.

If not JSON, retrieves the response as plain text.

Finally it Returns the response with correct headers
