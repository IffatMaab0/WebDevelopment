import { stockdata } from "./fakeStockAPI.js"

const nameEl = document.getElementById("name")
const symbolEl = document.getElementById("sym")
const priceEl = document.getElementById("price")
const timeEl = document.getElementById("time")

let previousPrice = 0

setInterval(function(){

    const data = stockdata()


    nameEl.textContent = `Name: ${data.name}`
    symbolEl.textContent = `Symbol: ${data.sym}`
    // priceEl.textContent = `Price: ${data.price}`
    timeEl.textContent = `Time: ${data.time}`
  
    if (data.price > previousPrice){
        priceEl.textContent = `Price: ${data.price} 📈`
    }else if (data.price < previousPrice){
        priceEl.textContent = `Price: ${data.price} 📉`
    }else{
        priceEl.textContent = `Price: ${data.price} ⏩`
    }
    previousPrice = data.price


}, 1500)


