import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newsList";

const HomePage = {
    async render() {
        return /* html */ `
        <div class ="max-w-5xl mx-auto">
            <div id = "header">
                ${Header.render()}
            </div>
           
            <div class="banner">
                ${Banner.render()}
            </div>
            <div class="news">
                ${await NewList.render()}
            </div>
            ${Footer.render()}
        </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default HomePage;