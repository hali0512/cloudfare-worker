# Cloud worker HTML and CSS Loader
This Cloudflare Worker serves an HTML page and a CSS file while optimizing loading performance using Early Hints.

 # Features

Serves an HTML page dynamically.

Serves CSS styles when requested.

Uses Early Hints (rel=preload) to improve loading speed.

# workflow

The Worker checks if the request is for test.css.

If so, it responds with the CSS file.

Otherwise, it serves the HTML and preloads the CSS for better performance.
If a request is made for test.css, the worker responds with CSS content.
