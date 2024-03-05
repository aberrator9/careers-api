const dotenv = require('dotenv')

dotenv.config();

console.log(process.env.MAPS_API_KEY);

async function getPlaces() {
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?
        location=-33.8670522,151.1957362
        &radius=500
        &types=food
        &key=${process.env.MAPS_API_KEY}`
    );

    const places = await response.json();
    console.log(places);
}

getPlaces();
