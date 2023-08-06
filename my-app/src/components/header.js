/* eslint-disable import/no-extraneous-dependencies */
import toastr from "toastr";
import reRender from "../ultils";

const Header = {
    render() {
        return /* html */ `<div class ="max-w-5xl mx-auto bg-orange-600 mb-2 flex items-center justify-between">
            <ul class = "flex ">
                <li><a href="/" class ="block px-4 py-3 hover:bg-blue-500 hover:text-white">Home Page</a></li>
                <li><a href="/about" class ="block px-4 py-3 hover:bg-blue-500 hover:text-white">About Page</a></li>
                <li><a href="/product" class ="block px-4 py-3 hover:bg-blue-500 hover:text-white">Product Page</a></li>
            </ul>
            ${localStorage.getItem("user") ? `
                <ul class = "flex ">
                    <li class="flex items-center">Xin chào: <a href="" class ="block px-4 py-3 hover:bg-blue-500 hover:text-white" id="email"></a></li>
                    <li class="flex items-center"><a class ="block px-4 py-3 hover:bg-blue-500 hover:text-white" id ="logout" >Logout</a></li>
                </ul>
            ` : ""} 
           
        </div>`;
    },
    afterRender() {
        const email = document.querySelector("#email");
        const logout = document.querySelector("#logout");
        if (email) {
            email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        if (logout) {
            logout.addEventListener("click", () => {
                localStorage.removeItem("user");
                reRender(Header, "#header");
                toastr.success("Logout thành công");
            });
        }
    },
};
export default Header;