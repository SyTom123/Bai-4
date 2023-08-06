/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import Banner from "../../components/banner";
import { getAll } from "../../api/post";

const AdminPost = {
    async render() {
        const res = await getAll();
        return /* html */ `
        <div class ="max-w-5xl mx-auto">
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                <table class = "w-full mt-5 text-center">
                    <thead>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Hình ảnh</th>
                        <th>Hành động</th>
                    </thead>
                    <tbody>
                        ${res.data.map((item, index) => `
                        <tr class="border p-3">
                            <td>${index + 1}</td>
                            <td >
                                <img class=" h-[50px] w-[50px]" src="${item.thumbnail}" alt="" />
                            </td>
                            <td>
                                <h3 class="my-3"><a class="font-semibold text-lg text-orange-500 my-4" href="/news/${item.id}" >${item.title}</a></h3>
                            </td>
                            <td>
                                <a class ="bg-blue-500 text-white inline-block py-1 px-2 rounded" href="/admin/news/${item.id}/edit">Edit</a>
                                <button data-id = "${item.id}" class ="btn bg-red-500 text-white inline-block py-1 px-2 rounded">Delete</button>
                            </td>
                        </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn không");
                if (confirm) {
                    axios.delete(`https://64cdb4760c01d81da3ee3c3b.mockapi.io/api/posts/${id}`);
                }
            });
        });
    },
};
export default AdminPost;