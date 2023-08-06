import { getAll } from "../../api/products";

const Product = {
    async render() {
        const res = await getAll();
        return /* html */`
        <div >
        <h2 class="font-semibold text-2xl uppercase my-4">Tin tức sản phẩm</h2>
        <div class="grid grid-cols-3 gap-8">
            ${res.data.map((item) => `
            <div class="border p-3">
                <a href="/products/${item.id}">
                    <img class=" h-[250px]" src="${item.thumbnail}" alt="" />
                </a>
                <h3 class="my-3"><a class="font-semibold text-lg text-orange-500 my-4" href="/products/${item.id}" >${item.title}</a></h3>
                <p>${item.desc}</p>
            </div>
            `).join("")}
        </div>
    </div>
        `;
    },
};
export default Product;