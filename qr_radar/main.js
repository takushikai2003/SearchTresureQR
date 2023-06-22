import { GetGeolocation } from "../lib/Geolocation.js"
import { SPOT_GEOLOCATIONS } from "../data/spot_geolocations.js";

const radius = 30;//[m]

document.getElementById("scan")
.addEventListener("click", async()=>{
    GetGeolocation()
    .then((coords)=>{
        console.log(coords);
        const nearSpots = getNearSpots(coords, radius, SPOT_GEOLOCATIONS);
        document.getElementById("loupe_amount").innerHTML = nearSpots.length;
    })
    .catch((e)=>{
        window.alert(e);
        console.log(e);
    });
    
});


// 位置情報、半径
function getNearSpots(coords, radius, spots){
    const nearSpots = [];

    for(let i=0; i<spots.length; i++){
        const spot = spots[i];
        if(
            Math.pow(spot.latitude - coords.latitude, 2) + Math.pow(spot.longitude - coords.longitude, 2) < Math.pow(radius + coords.accuracy, 2)
        ){
            nearSpots.push(spot);
        }
    }

    return nearSpots;
}