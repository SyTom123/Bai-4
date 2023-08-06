import { decreaseQuantity, increaseQuantity, removeItemCart } from "../ultils/cart";
import reRender from "../ultils";

const CartPage = {

    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */ `
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Tên sản phẩm</th>
                        <th>Giá sản phẩm</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    ${cart.map((item) => `
                        <tr>
                            <td>${item.title}</td>
                            <td>${item.desc}</td>
                            <td>${item.price}</td>
                            <td>
                                <button data-id ="${item.id}" class = "btn btn-increase">+</button>
                                <button data-id ="${item.id}" class = "btn btn-decrease">-</button>
                            </td>
                            <td>
                                <button data-id ="${item.id}" class = "btn btn-remove">X</button>
                            </td>
                        </tr>
                    `)}
                    
                </tbody>
        </table>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((button) => {
            button.addEventListener("click", () => {
                const { id } = button.dataset;
                if (button.classList.contains("btn-increase")) {
                    increaseQuantity(id);
                } else if (button.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => reRender(CartPage, "#app"));
                } else {
                    removeItemCart(id, () => reRender(CartPage, "#app"));
                }
            });
        });
    },
};
export default CartPage;