

document.getElementById("url-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const longUrl = document.getElementById("long-url").value;
  
    // Simulate URL shortening by generating a random short code
    const shortCode = Math.random().toString(36).substring(7);
    const shortUrl = `https://short.url/${shortCode}`;
  
    const shortUrlElement = document.getElementById("short-url");
    shortUrlElement.textContent = shortUrl;
    shortUrlElement.href = shortUrl;
  
    animateOutputBox();




    
  });
  
  function animateOutputBox() {
    const outputBox = document.getElementById("output-box");
    outputBox.style.transform = "scale(1.1)";
    setTimeout(() => {
      outputBox.style.transform = "scale(1)";
    }, 200);
  }
  


//   import axios from 'axios';

// const encodedParams = new URLSearchParams();
// encodedParams.set('url', 'https://google.com/');

// const options = {
//   method: 'POST',
//   url: 'https://url-shortener-service.p.rapidapi.com/shorten',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'X-RapidAPI-Key': '6a666c5c79msheb624cc338b65a9p12e1a9jsn5e78bd33ed42',
//     'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
//   },
//   data: encodedParams,
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }