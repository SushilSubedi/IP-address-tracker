const mymap = L.map('mapid').setView([51.505, -0.09], 13);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';


const tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl,{ attribution });

tiles.addTo(mymap);

