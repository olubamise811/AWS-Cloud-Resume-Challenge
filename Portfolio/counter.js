// JavaScript Code
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch ("https://joily3cjtnlijffdji5kqhq7u40ovmtj.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();