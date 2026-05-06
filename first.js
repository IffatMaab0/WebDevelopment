let newEl = document.createElement("li");
let old = document.getElementById("list");
let rem = old.firstElementChild

newEl.textContent = "C";
old.append(newEl);
old.remove(rem)
