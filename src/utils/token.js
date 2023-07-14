export const setToken = (token) => {
    localStorage.setItem("Authorization", token);
}
// 获取本地token
export const getToken = () => {
    return localStorage.getItem("Authorization");
}
//清除本地的token
export const removeToken = () => { 
    localStorage.removeItem("Authorization");
}