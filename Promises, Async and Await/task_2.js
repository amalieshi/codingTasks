document.getElementById('fetch-cat-gif').addEventListener('click', fetchCatGif);

async function fetchCatGif() {
    const url = 'https://api.thecatapi.com/v1/images/search?mime_types=gif';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        displayCatGifUrl(data[0].url);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

function displayCatGifUrl(url) {
    console.log(url);
}