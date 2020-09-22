// console.log("Bitcoin Live Update")



axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
.then(result=>{
     var data = document.getElementById("data")

     data.innerHTML = `<div class="d-flex flex-row justify-content-between mt-3">
                        <div class="d-flex flex-column">
                            <p class="text-muted mb-0">${result.data.bpi.EUR.symbol + result.data.bpi.EUR.rate}</p><small class="text-muted">${result.data.bpi.EUR.description}</small>
                        </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between mt-3">
                        <div class="d-flex flex-column">
                            <p class="text-muted mb-0">${result.data.bpi.GBP.symbol + result.data.bpi.GBP.rate}</p><small class="text-muted">${result.data.bpi.GBP.description}</small>
                        </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between mt-3">
                        <div class="d-flex flex-column">
                            <p class="text-muted mb-0">${result.data.bpi.USD.symbol + result.data.bpi.USD.rate}</p><small class="text-muted">${result.data.bpi.USD.description}</small>
                        </div>
                        </div>`
    // console.log(result.data)
}).catch(function (error) {
    // handle error
    window.location.reload()
    console.log(error);
})
