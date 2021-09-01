// JavaScript source code
window.addEventListener('load', () => {
    let long;
    let lat;
    let loc = document.querySelector(".Location-timezone");
    let temperature = document.querySelector(".temp");
    const tempU = document.querySelector(".unit");
    const tempD = document.querySelector(".temperature-description");
    const changeSec = document.querySelector(".temperature");
    const iconsrc = document.querySelector(".icon");
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
               // const proxy = "https:.//cor-anywhere.herokvapp.com/"; <-not needed
                const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=99bcfc88161396182ad5bbe72e615149`; //only with ` `quote because im passing info in? 
                fetch(api)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                        const { temp } = data.main;
                        temperature.textContent = Math.floor(temp - 273);
                        const { description } = data.weather["0"];
                        tempD.textContent = description;
                        loc.textContent = data.name;
                        const { icon } = data.weather["0"];
                        iconsrc.innerHTML = `<img src="icons/${icon}.png"></img>`;
                        changeSec.addEventListener("click", () => {
                            if (tempU.textContent === "F") {
                                tempU.textContent = "C";
                                let x = temperature.textContent;
                                temperature.textContent = Math.floor(temp-273);
                            }
                            else if (tempU.textContent === "C") {
                                tempU.textContent = "F";
                                temperature.textContent = Math.floor((9/5)*(temp-273)+32);
                            }
                        });
                    });


            });
    }

  
})

