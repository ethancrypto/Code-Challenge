var endpoint = "https://static.ngnrs.io/test";

var ds = new Datasource(endpoint);

function getPrice() {
    document.getElementById("result").innerHTML = "";
    ds.getPrices()
        .then(prices => {
            prices.forEach(price => {
                document.getElementById("result").innerHTML +=
                    `Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }. <br />`;
            });
        }).catch(error => {
            console.log(error);
        });
}