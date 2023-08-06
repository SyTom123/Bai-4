/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}
export const addToCart = (newProduct, next) => {
    const existProduct = cart.find((item) => item.id === +newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity += newProduct.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const increaseQuantity = (id) => {
    cart.find((item) => item.id === id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
};
export const decreaseQuantity = (id, next) => {
    const currentQuantiy = cart.find((item) => item.id === +id);
    currentQuantiy.quantity--;
    if (currentQuantiy.quantity < 1) {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không");
        if (confirm) {
            console.log(+id);
            cart = cart.filter((item) => item.id !== +id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const removeItemCart = (id, next) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không");
    if (confirm) {
        console.log(+id);
        cart = cart.filter((item) => item.id !== +id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};