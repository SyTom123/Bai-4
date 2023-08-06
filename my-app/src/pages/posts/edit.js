/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import Banner from "../../components/banner";
import { edit, get } from "../../api/post";

const AdminEditPost = {
    async render(id) {
        const { data } = await get(id);

        return /* html */ `
        <div class ="max-w-5xl mx-auto">
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                <form action="" id ="formEditPost">
                    <input type="text" class ="border border-black " placeholder = "Title post" id ="title-post" value = "${data.title}"/> <br/>
                    <img src="${data.thumbnail}" alt="" />
                    <input type="file" class ="border border-black " placeholder = "Title post" id= "img-post"  /> <br/>
                    <textarea name="" class ="border border-black " id="desc-post" cols="30" rows="6">${data.desc}</textarea> <br/>
                    <button class ="bg-blue-500 inline-block py-2 px-3 rounded text-white" type = "submit">Update</button>
                </form>
            </div>
        </div>
        `;
    },
    afterRender(id) {
        const CLOUDINARY_PRESET = "ml_default";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/di8pyfpnb/image/upload";
        const formEditPost = document.querySelector("#formEditPost");
        formEditPost.addEventListener("submit", async (e) => {
            e.preventDefault();
            const file = document.querySelector("#img-post").files[0];

            // Gắn vào object form data
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call api cloudinary, để upload ảnh lên
            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call api update bài viết
            const res = await edit({
                id,
                title: document.querySelector("#title-post").value,
                desc: document.querySelector("#desc-post").value,
                thumbnail: data.url,
            });

            if (res) {
                alert("Update thanh cong");
                // chuyển trang
                document.location.href = "/admin/news";
            }
        });
    },
};
export default AdminEditPost;