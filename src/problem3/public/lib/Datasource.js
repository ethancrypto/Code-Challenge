class Price {
    constructor(obj) {
        this.id = obj.id;
        this.pair = obj.pair;
        this.buy = Number(obj.buy);
        this.sell = Number(obj.sell);
        this.timestamp = obj.timestamp;
    }
    mid() {
        return (this.buy + this.sell) / 2
    }
    quote() {
        return this.pair.slice(-3);
    }
}

class Datasource {
    constructor(url) {
            this.url = url;
        }
        // function to get prices
    getPrices() {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}/prices`).then(response => response.body)
                .then(rb => {
                    const reader = rb.getReader();

                    return new ReadableStream({
                        start(controller) {
                            // The following function handles each data chunk
                            function push() {
                                // "done" is a Boolean and value a "Uint8Array"
                                reader.read().then(({ done, value }) => {
                                    // If there is no more data to read
                                    if (done) {
                                        console.log('done', done);
                                        controller.close();
                                        return;
                                    }
                                    // Get the data and send it to the browser via the controller
                                    controller.enqueue(value);
                                    // Check chunks by logging to the console
                                    console.log(done, value);
                                    push();
                                })
                            }

                            push();
                        }
                    });
                })
                .then(stream => {
                    // Respond with our stream
                    return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
                })
                .then(result => {
                    // Do things with result
                    var res = [];
                    var prices = JSON.parse(result).data.prices;
                    prices.map(price => {
                        var priceObj = new Price(price);
                        res.push(priceObj);
                    })
                    resolve(res);
                });
        })

    }
}