// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const a = document.querySelector("a");
console.log(a.getAttribute("href"));

const aTwo = document.querySelector(".a-two");
aTwo.setAttribute("href", "http://example.com");
console.log(aTwo.getAttribute("href"));
console.log(aTwo);