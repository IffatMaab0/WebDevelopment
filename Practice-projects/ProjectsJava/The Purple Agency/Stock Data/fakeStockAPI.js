function stockdata(){
    return {
        name: "The Purple Agency",
        sym: "TPA",
        price: price(),
        time: time()
        
    }
}
function price(){
    return (Math.random() * 3).toFixed(3)
}

function time(){
    return new Date().toLocaleTimeString()
}
export{ stockdata }