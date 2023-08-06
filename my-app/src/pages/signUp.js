/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import toastr from "toastr";
import { signup } from "../api/user";

const SignUp = {
    render() {
        return `
            <form id = "formSignUp">
                <input type = "email" id="email" placeholder = "Your email" class = "border border-black">
                <input type = "password" id ="password" placeholder = "Your password" class = "border border-black">
                <button>Đăng ký</button>
            </form>
        `;
    },
    afterRender() {
        const formSignUp = document.querySelector("#formSignUp");
        formSignUp.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const { data } = await signup({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });
                if (data) {
                    toastr.success("Đăng ký thành công, chuyển trang sau 2 s");
                    setTimeout(() => {
                        document.location.href = "/signin";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};
export default SignUp;