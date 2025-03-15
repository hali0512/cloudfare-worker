/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// export default {
// 	async fetch(request, env, ctx) {
// 		return new Response('Hello World!');
// 	},
// };
export default {
	async fetch(request) {
	  const url = new URL(request.url);
  
	  if (url.pathname === "/welcome") {
		return new Response("Welcome to Hussain's Workplace!", {
		  headers: { "content-type": "text/plain" },
		});
	  }
  
	  return new Response("Welcome to my Cloudflare Worker!", {
		headers: { "content-type": "text/plain" },
	  });
	},
  };
  
 
 
