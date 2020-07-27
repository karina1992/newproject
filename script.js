window.addEventListener("load", (event) => {
    getCoinsFromAPI(Baseurl);
});

var coins = [];
var coin = {};
var result = [];
var coinsHtml = "";
Baseurl = "https://api.coingecko.com/api/v3/coins/list";

//Get The Coins From API
function getCoinsFromAPI(url) {
    $.ajax({
        type: "GET",
        datatype: "json",
        url: url,
        success: function(data) {
            coins = data;
            showAllCoins(coins);
            // console.log(coins);
        },
        error: function(error) {
            console.log("error : ", error);
        },
    });
}

//Search Coin By Name
function searchCoins() {
    var textToSearch = document.querySelector("#search-country-by-name").value;
    result = coins.filter(({ name }) => name.includes(`${textToSearch}`));
    console.log(result);
    showAllCoins(result);
}

$("#home-tab").on("click", function(e) {
    getCoinsFromAPI(Baseurl);
    e.preventDefault();
    $(this).tab("show");
});

//Show all Coins - HTML
function showAllCoins(arr2) {
    coinsHtml = "";
    coinsHtml += `<div class='row'>`;

    for (i = 0; i < arr2.length; i++) {
        if (i <= 100) {
            createSingleCoin(arr2);
            console.log(arr2[i]);
        }
    }
    coinsHtml += `</div>`;

    $("#main-div").html(coinsHtml);
}

//Create Single Coin
function createSingleCoin(arr) {
    coinsHtml += `<div class='col-md-3'>`;
    coinsHtml += `<div class="card">`;
    coinsHtml += `<div class="card-body">`;
    coinsHtml += `<div class='row'>`;
    coinsHtml += `<h5 class='col-md-6'>${arr[i].symbol}</h5>`;
    coinsHtml += `<div class="custom-control custom-switch col-md-6">`;
    coinsHtml += `<input type="checkbox" class="custom-control-input" id="customSwitch${i}">`;
    coinsHtml += `<label class="custom-control-label" for="customSwitch${i}"></label>`;
    coinsHtml += `</div>`;
    coinsHtml += `</div>`;
    coinsHtml += `<p class="card-text">${arr[i].name}</p>`;
    coinsHtml += `<button class="btn colbtn btn-outline-success my-2 my-sm-0" data-toggle="collapse" data-target="${i}panel"
    aria-expanded="false" id='collapse' aria-controls="collapseExample" type="button">More Info</button>`;
    coinsHtml += `<div class="collapse" id="collapse${i}">Heloooo`;
    coinsHtml += `<div class="mt-3">`;
    coinsHtml += `</div>`;
    coinsHtml += `</div>`;
    coinsHtml += `</div>`;
    coinsHtml += `</div>`;
    coinsHtml += `</div>`;
}

$("#collapse").on("click", function() {});

/**
 <div class="collapse" id="collapseExample">
  <div class="mt-3">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
    keffiyeh helvetica,
    craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
  </div>


 */

//Show About Page
$("#about-tab").on("click", function(e) {
    coinsHtml = "";
    e.preventDefault();
    $(this).tab("show");
    coinsHtml += "<div> Hello World</div>";
    $("#main-div").html(coinsHtml);
});