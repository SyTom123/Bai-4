/* eslint-disable import/no-extraneous-dependencies */
import { getAll } from "../api/post";

const NewList = {

    async render() {
        const res = await getAll();
        return /* html */ `
        <div >
            <h2 class="font-semibold text-2xl uppercase my-4">Tin tức học tập</h2>
            <div class="grid grid-cols-3 gap-8">
                ${res.data.map((item) => `
                <div class="border p-3">
                    <a href="/news/${item.id}">
                        <img class=" h-[250px]" src="${item.thumbnail}" alt="" />
                    </a>
                    <h3 class="my-3"><a class="font-semibold text-lg text-orange-500 my-4" href="/news/${item.id}" >${item.title}</a></h3>
                    <p>${item.desc}</p>
                </div>
                `).join("")}
            </div>
        </div>
        `;
    },
};
export default NewList;