let btcValue = document.querySelector('.bitcoin-info');
let ethValue = document.querySelector('.eth-info');
let cardanoValue = document.querySelector('.cardano-info');
let polValue = document.querySelector('.polkadot-info');
let tetValue = document.querySelector('.tet-info');
let dogeValue = document.querySelector('.doge-info');
let time = document.querySelector('.nav-left h2');

var request = new XMLHttpRequest()

request.open('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cdogecoin%2Ctether%2Cethereum%2Ccardano%2Cpolkadot&order=market_cap_desc&per_page=100&page=1&sparkline=false', true)
request.onload = function () {

  
  
  if (request.status >= 200 && request.status < 400) {
      displayCrypto(JSON.parse(this.response));
     
    }
   else {
    console.log('error');
  }
}

request.send();



function updateClock() {
  let h;
  let m;
  let s;
  
   h = new Date().getHours();
   m = new Date().getMinutes();;
   s = new Date().getSeconds();

   
   if(h < 10) {
     h = `0${h}`;
    } else {
      h;
    };
    if(m < 10) {
      m = `0${m}`;
    } else {
      m;
    }; if(h < 10) {
      s = `0${s}`;
    } else {
      s;
    };
    
    time.innerHTML = `${h}:${m}:${s}`
  

  setTimeout(() =>{
       updateClock() },1000 );
}

updateClock();


function displayCrypto(data) {
  btcValue.innerHTML = `<div class="info">
                        <h3>${data[0].id}</h3><br>
                        <h3>Value: ${data[0].current_price}$</h3><br>
                        <h3>Last 24h max: ${data[0].high_24h} $</h3><br>
                        <h3>Last 24h min: ${data[0].low_24h} $</h3>
                        </div>`;

                        
                        
                          ethValue.innerHTML = 
                                              `<div class="info">
                                                <h3>${data[1].id}</h3><br>
                                                <h3>Value: ${data[1].current_price}$</h3><br>
                                                <h3>Last 24h max: ${data[1].high_24h} $</h3><br>
                                                <h3>Last 24h min: ${data[1].low_24h} $</h3>
                                                </div>`;

                      cardanoValue.innerHTML = `<div class="info">
                                                <h3>${data[3].id}</h3><br>
                                                <h3>Value: ${data[3].current_price}$</h3><br>
                                                <h3>Last 24h max: ${data[3].high_24h} $</h3><br>
                                                <h3>Last 24h min: ${data[3].low_24h} $</h3>
                                                </div>`;

                        polValue.innerHTML = `<div class="info">
                                              <h3>${data[5].id}</h3><br>
                                              <h3>Value: ${data[5].current_price}$</h3><br>
                                              <h3>Last 24h max: ${data[5].high_24h} $</h3><br>
                                              <h3>Last 24h min: ${data[5].low_24h} $</h3>
                                              </div>`;


                        tetValue.innerHTML = `<div class="info">
                                                  <h3>${data[2].id}</h3><br>
                                              <h3>Value: ${data[2].current_price}$</h3><br>
                                              <h3>Last 24h max: ${data[2].high_24h} $</h3><br>
                                              <h3>Last 24h min: ${data[2].low_24h} $</h3>
                                              </div>`;


                        dogeValue.innerHTML = `<div class="info">
                                                <h3>${data[4].id}</h3><br>
                                              <h3>Value: ${data[4].current_price}$</h3><br>
                                              <h3>Last 24h max: ${data[4].high_24h} $</h3><br>
                                              <h3>Last 24h min: ${data[4].low_24h} $</h3>
                                              </div>`;
                                              
                                              setTimeout(() =>{
                                               displayCrypto() },1000 );
                                         }
                                                   

displayCrypto();