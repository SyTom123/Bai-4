import instance from "./config";

export const signup = (user) => {
    const url = `/signup`;
    return instance.post(url, user);
};

// Đăng nhập
export const signin = (user) => {
    const url = `/signin`;
    return instance.post(url, user);
};