/* eslint-disable import/no-extraneous-dependencies */
import Navigo from "navigo";
import HomePage from "./pages/home";
import About from "./pages/about";
import Product from "./pages/products";
import AdminPost from "./pages/posts";
import "toastr/build/toastr.min.css";
import AdminAddPost from "./pages/posts/add";
import AdminEditPost from "./pages/posts/edit";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import ProductDetailPage from "./pages/products/detail";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    // document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
    // document.getElementById("footer").innerHTML = Footer.render();
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        }
        // done()
    },
});
router.on({
    "/": () => print(HomePage),
    "/about": () => print(About),
    "/products": () => print(Product),
    "/products/:id/": ({ data }) => print(ProductDetailPage, data.id),
    "/admin/posts": () => print(AdminPost),
    "/admin/posts/add": () => print(AdminAddPost),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    "/signup": () => print(SignUp),
    "/signin": () => print(SignIn),
});
router.resolve();