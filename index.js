//Making title and map
const mymap = L.map('mapid').setView([28.3949, 84.1240], 7);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl,{ attribution });

//add tile to map
tiles.addTo(mymap);

//customize icon

const  myIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [28, 34],
    iconAnchor: [25, 16]
})
L.marker([28.3949, 84.1240], {icon: myIcon}).addTo(mymap);

const button = document.getElementById("button");
const input = document.getElementById("input");

input.addEventListener("change",(e) => {
    input.value = e.target.value ;
    console.log("input",input.value);
})

input.addEventListener("keydown", (e) => {
    if(e.keyCode == 13) {
        getData();
    }
})


button.addEventListener("click", () => {
    getData();
})



  function getData() {
    
    var requestOptions = {
      method: 'GET',

      redirect: 'follow'
    };
    
    fetch("https://geo.ipify.org/api/v1?apiKey=at_iwdBQ5HY260IAeybxRiWsbiYisIbI&ipAddress=192.168.215.12", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

}




