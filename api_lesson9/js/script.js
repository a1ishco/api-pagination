
let startNum;
let endNum;
let btn = document.querySelectorAll("#page button");
btn.forEach(x => {
    x.addEventListener("click", function () {
        console.log(x.getAttribute("start"))
        console.log(x.getAttribute("end"))
        startNum = x.getAttribute("start");
        endNum = x.getAttribute("end");


        const row = document.querySelector(".row");
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((country) => {
                let col = "";

                country.splice(startNum, endNum).map((item) => {
                    col += `<div class="col-12 col-sm-6 col-md-4">
                <div class="card" >
                <img src="${item.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.name.official}</h5>
                  <p class="card-text">Capital: ${item.capital}</p>
                  <p class="card-text">Area: ${item.area} km<sup>2</sup></p>
                  <p class="card-text">Continent: ${item.region} - ${item.subregion}</p>
                  
                  <a href="${item.maps.googleMaps}" class="btn btn-primary">Map</a>
          </div>
                </div>
                </div>`;
                });
                row.innerHTML = col;
            });


    })
})

