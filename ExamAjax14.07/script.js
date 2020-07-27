var countries = [];
var strCountry = "";
Baseurl =
    "https://restcountries.eu/rest/v2/all";

//Get The Countrie From API
function getCountriesFromAPI(url) {
    $.ajax({
        type: "GET",
        datatype: "json",
        url: url,
        success: function (data) {
            countries = data;
            showAllCountries(countries);
            console.log(countries);
        },
        error: function (error) {
            console.log("error : ", error);
        },
    });
}

//Show All Countries
function getAll() {
    getCountriesFromAPI(Baseurl);
}

//Search Country By Name
function searchCountry() {
    let searchCountry = document.querySelector("#myVal").value;
    let url = `https://restcountries.eu/rest/v2/name/${searchCountry}`;
    getCountriesFromAPI(url);
}

//Show All Countries - HTML
function showAllCountries(countries) {
    strCountry = "";
    strCountry += `<div class='row'>`;
    for (i = 0; i < countries.length; i++) {
        createSingleCountry();
    }
    strCountry += `</div>`;
    $("#main-div").html(strCountry);
}

//Create Single Country
function createSingleCountry() {
    strCountry += `<div class="col-md-6">`;
    strCountry += `<div class="card mb-3">`;
    strCountry += `<div class="row no-gutters">`;
    strCountry += `<div class="col-md-6 myImage">`;
    strCountry += `<img src="${countries[i].flag}" class="card-img" alt="...">`;
    strCountry += `</div>`
    strCountry += `<div class="col-md-6">`;
    strCountry += `<div class="card-body">`;
    strCountry += `<h3 class="card-title"> ${countries[i].name} </h3>`;
    strCountry += `<p class="card-text">`;
    strCountry += `<div class='card-text'>Capital: ${countries[i].capital} </div>`;
    strCountry += `<div class='card-text'>Top Level Domain: ${countries[i].topLevelDomain} </div>`;
    strCountry += `<hr>`;
    strCountry += `<h6 class='card-text'>currencies: </h6>`;
    for (j = 0; j < countries[i].currencies.length; j++) {
        strCountry += `<div class='card-text'>Code: ${countries[i].currencies[j].code}</div>`;
        strCountry += `<div class='card-text'>Name: ${countries[i].currencies[j].name}</div>`;
        strCountry += `<div class='card-text'>Symbol: ${countries[i].currencies[j].symbol}</div>`;
    }

    if (countries[i].borders.length > 0) {
        strCountry += `<hr>`;
        strCountry += `<h6 class='card-text'>borders: </h6>`;
        strCountry += `<div class='card-text'>`
        for (k = 0; k < countries[i].borders.length; k++) {

            strCountry += `"${countries[i].borders[k]}"`;


        }
        strCountry += `</div>`;
    }

    strCountry += `</p>`;
    strCountry += `</div>`;
    strCountry += `</div>`;
    strCountry += `</div>`;
    strCountry += `</div>`;
    strCountry += `</div>`;

}
