/* eslint-disable no-console */
import data from "../data";

const DetailNewPage = {
    render(id) {
        const found = data.find((item) => item.id === +id);
        return /* html */ `
            <div class="max-w-4xl mx-auto text-center">
                <h2 class = "font-semibold text-2xl uppercase my-4">${found.title}</h2>
                <div class = "w-[300px] mx-auto">
                    <img src="${found.thumbnail}"  class="w-full ">
                </div>
                <p class="font-semibold text-lg  my-4">${found.description}</p>
            </div>
        `;
    },
};
export default DetailNewPage;