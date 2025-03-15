# Cloudflare Worker - CF Data Fetcher

This Cloudflare Worker retrieves Cloudflare-provided request metadata (`cf` object) and  then returns it as a JSON response.

# Features
 Extracts request metadata from the `cf` object.
 Returns metadata as a JSON response.
 Provides an error message if the `cf` object is unavailable.

# Workflow
If the `cf` object is available in the request, the Worker extracts its data.
If the `cf` object is missing (such as in the preview environment), an error message is returned.
The response is returned in JSON format.
