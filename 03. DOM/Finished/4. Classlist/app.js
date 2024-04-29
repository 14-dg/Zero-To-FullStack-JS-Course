// classlist
// add()
// remove()
// toggle()

const h1 = document.querySelector("h1");
// BROWSER CONSOLE
console.log(h1.classList);
// console.log((h1.style.color = "skyblue"));
// console.log((h1.style.fontWeight = "normal"));

// In EDITOR
h1.classList.add("strong");
console.log(h1.classList);
h1.classList.remove("styles");
console.log(h1.classList);
h1.classList.toggle("styles");
console.log(h1.classList);

h1.style.color = "purple";
h1.style.backgroundColor = "skyblue";
h1.style.fontSize = "100px";