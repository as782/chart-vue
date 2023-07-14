import requests from "./request";


//登入账号的接口
// /user/login  方式post
// 参数： "userName": "admin","userPassword": "123456"
export const rqLoginAccount = (info) => {
    return requests({ url: '/user/login ', data: info, method: 'post' });
}


// 获取用户数据
export const rqUserInfoData = ()=>{
    return requests({url:'/user/getUserInfo',method:'get'});
}

// 退出登录
export const reqLogout = () => {
    return requests({ url: '/user/logout', method: 'post' });
}
// 请求数据
export const reqChartData = (fromdata) => {
    return requests({ url: '/chart/gen', method: 'post',data:fromdata });
}
// 请求分页数据
export const reqChartPageData = (data) => {
    // console.log(info);
    return requests({ url: '/chart/page', method: 'post',data:data });
}

