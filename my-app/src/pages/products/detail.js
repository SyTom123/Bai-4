import { get } from "../../api/products";
import addToCart from "../../ultils/cart";

const ProductDetailPage = {
    async render(id) {
        const { data: product } = await get(id);
        return /* html */`
        <div >
        <h2 class="font-semibold text-2xl uppercase my-4">Tin tức sản phẩm</h2>
        <div class="flex align-center justify-center">
            <div class="border p-3 max-w-500 text-center"
                <a href="/products/${product.id}">
                    <img class=" h-[250px]" src="${product.thumbnail}" alt="" />
                </a>
                <h3 class="font-semibold text-lg text-orange-500 mt-2 ">${product.title}</h3>
                <p> ${product.desc}</p>
                <p>Giá:  ${product.price} $</p> 
                <button data-id="${product.id}" id ="btnAddToCart">Add to cart</button>
            </div>
        </div>
    </div>
        `;
    },
    afterRender() {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const { id } = btnAddToCart.dataset;
        btnAddToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            console.log(data);
            addToCart({ ...data, quantity: 1 });
        });
    },
};
export default ProductDetailPage;