//Making title and map
const mymap = L.map('mapid').setView([28.3949, 84.1240], 14);
const  myIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [28, 34],
    iconAnchor: [25, 16]
})
const marker = L.marker([28.3949, 84.1240], {icon: myIcon}).addTo(mymap);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl,{ attribution });

//add tile to map
tiles.addTo(mymap);

//customize icon

const button = document.getElementById("button");
const input = document.getElementById("input");
const ipAddress = document.getElementById("ipAddress");
const Location = document.getElementById("location");
const timeZone = document.getElementById("timeZone");
const isp = document.getElementById("isp");

input.addEventListener("change",(e) => {
    input.value = e.target.value ;
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

    const re = /^(([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)\.){3}([1-9]?\d|1\d\d|2[0-5][0-5]|2[0-4]\d)$/;

    if(re.test(input.value)){
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_iwdBQ5HY260IAeybxRiWsbiYisIbI&ipAddress=${input.value}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result);
            isp.innerText = data.isp
            ipAddress.innerText = data.ip
            Location.innerText = `${data.location.city},${data.location.region}, ${data.location.postalCode}`
            timeZone.innerText = `UTC-${data.location.timezone}`
              mymap.setView([data.location.lat,data.location.lng])
              marker.setLatLng([data.location.lat,data.location.lng])
        })
        .catch(error => console.log('error', error));
  
    }else {
        alert("Invalid IP-Address!")
    }
    
}




