/* eslint-disable no-plusplus */
/* eslint-disable no-console */
let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart").json());
}
const addToCart = (newProduct) => {
    const existProduct = cart.find((item) => item.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity += newProduct.quantity;
    }
    console.log(cart);
};
export default addToCart;