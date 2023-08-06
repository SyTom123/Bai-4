/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import Banner from "../../components/banner";
import { add } from "../../api/post";

const AdminAddPost = {
    async render() {
        // const res = await axios.get("https://64cdb4760c01d81da3ee3c3b.mockapi.io/api/posts");
        return /* html */ `
        <div class ="max-w-5xl mx-auto">
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                <form action="" id ="formAddPost">
                    <input type="text" class ="border border-black " placeholder = "Title post" id ="title-post" /> <br/>
                    <input type="file" class ="border border-black " placeholder = "Title post" id= "img-post" /> <br/>
                    <textarea name="" class ="border border-black " id="desc-post" cols="30" rows="6"></textarea> <br/>
                    <button class ="bg-blue-500 inline-block py-2 px-3 rounded text-white" type = "submit">Add</button>
                </form>
            </div>
        </div>
        `;
    },
    afterRender() {
        const CLOUDINARY_PRESET = "ml_default";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/di8pyfpnb/image/upload";
        const formAddPost = document.querySelector("#formAddPost");
        formAddPost.addEventListener("submit", async (e) => {
            e.preventDefault();
            // console.log(document.querySelector("#title-post").value);
            // console.log(document.querySelector("#desc-post").value);
            // Lấy giá trị của input file
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
            // call api thêm bài viết
            const res = add({
                title: document.querySelector("#title-post").value,
                desc: document.querySelector("#desc-post").value,
                thumbnail: data.url,
            });
            if (res) {
                alert("them thanh cong");
            }
        });
    },
};
export default AdminAddPost;