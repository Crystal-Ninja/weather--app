const apikey="586707573de1452591374442251202";
const btn=document.getElementById("btn");
const cityname=document.getElementById("cityname");
const result=document.getElementById("result");

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
    }catch(error){
        result.innerHTML=`<p "color:red;">${error.meessage}</p>`
    }
}
function displayweather(data) {
    console.log(data);
    
    const { current , location  , condition } = data;
    result.textContent= ` ${location.name}
     ${current.temp_c}°C ${current.condition.text}
   `

}