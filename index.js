const apikey="586707573de1452591374442251202";
const btn=document.getElementById("btn");
const cityname=document.getElementById("cityname");
const result=document.getElementById("result");
const change=document.getElementById("changer");

btn.addEventListener('click',()=>{
    const city=cityname.value;
    if(city){
        getweather(city);
    }else{
        alert('enter city name');
    }
})
async function getweather(city){
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`;


    try{
        const response =await fetch(url);
        if (!response.ok) throw new Error ("city not found");

        const data = await response.json();
        displayweather(data);
        backgrounds(data)
    }catch(error){
        result.innerHTML=`<p "color:red;">${"city not found"}</p>`
    }
}
function displayweather(data) {
    console.log(data);
    const { current , location  , condition } = data;
    if(change.textContent=="C"){
        result.textContent= ` ${location.name}
        ${current.temp_c}°C ${current.condition.text}
      `
    }else{
        result.textContent= ` ${location.name}
        ${current.temp_f}°F ${current.condition.text}
      `
   
    }
}
change.addEventListener('click',()=>{
    if(change.textContent=="C"){
        change.textContent=""
        change.textContent="F"
        console.log(change.textContent)
    }else{
        change.textContent=""
        change.textContent="C"
        console.log(change.textContent)
    }
})

function backgrounds(data){
    const{condition , current} =data;
    let weather=current.condition.text;
    switch(weather){
        case "Clear":
            document.body.style.backgroundColor="lightblue";
            break;
        case "Sunny":
            document.body.style.backgroundColor = "#FF7F50";
            break;
        case "Clouds":
            document.body.style.backgroundColor  = "#808080";
            break;
        case "Rain":
            document.body.style.backgroundColor  = "#4a90e2";
            break;
        case "Thunderstorm":
            document.body.style.backgroundColor  = "#2c3e50";
            break;
        case "Snow":
            document.body.style.backgroundColor  = "#ffffff";
            break;
        case "Fog":
        case "Mist":
            document.body.style.backgroundColor  = "#a0a0a0";
            break;
        case "Haze":
            document.body.style.backgroundColor  = "#d3d3d3";
            break;
        case "Extreme":
            document.body.style.backgroundColor  = "#ff4500";
            break;
        default:
            document.body.style.backgroundColor = "antiquewhite"; 
    }
}