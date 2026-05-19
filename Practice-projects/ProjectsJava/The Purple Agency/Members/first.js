const imgs = ["img1.avif", "img2.avif", "img3.avif"]
const imageBoxes = [
    document.getElementById("img1"),
    document.getElementById("img2"),
    document.getElementById("img3")
]
for(let i=0; i<imgs.length; i++){
    imageBoxes[i].innerHTML = `<img src= " ${imgs[i]} " >`
}