import { products } from "./data.js";
import makeList from "./templates/product.hbs";
console.log(makeList({products}));
document.querySelector("div").innerHTML = makeList({products})