/* eslint-disable no-alert */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import toastr from "toastr";
import { signin } from "../api/user";

const SignIn = {
    render() {
        return `
            <form id = "formSignUp">
                <input type = "email" id="email" placeholder = "Your email" class = "border border-black">
                <input type = "password" id ="password" placeholder = "Your password" class = "border border-black">
                <button>Đăng nhập</button>
            </form>
        `;
    },
    afterRender() {
        const formSignUp = document.querySelector("#formSignUp");
        formSignUp.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    // lưu thông tin vào localStorage
                    localStorage.setItem("user", JSON.stringify(data.user));
                    toastr.success("Đăng ký thành công, chuyển trang sau 1 s");
                    setTimeout(() => {
                        document.location.href = "/";
                    }, 1000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default SignIn;