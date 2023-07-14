// 对axios二次封装
import axios from 'axios'
import { message } from 'ant-design-vue';
import { removeToken } from '@/utils/token';
//创建一个axios实例
const requests = axios.create({
    //配置对象
    //基础路径，发送请求时，路轻中会出现'api'
    baseURL: '/api',
    // baseURL: '',
    //请求超时的时间    
    timeout: 50000
})

//请求拦截器，在发起请求之前可以被拦截器检测到，可以在请求发出去之前做一些处理。
requests.interceptors.request.use((config) => {
 
    if (localStorage.getItem("Authorization")) {
        config.headers.Authorization = localStorage.getItem("Authorization");
            setTimeout(() => {
                //两小时后删除
                removeToken()
            }, 2*60*60*1000);
      }
    return config
})

//响应拦截器，
requests.interceptors.response.use((req) => {
    //c成功就返回数据,返回前可以做处理
    // console.log("rq:",req.data.code);
    if (req.data.code===200) {
        return req.data
    }else{
        message.error(req.data.msg);
    }
   
}, (error) => {
    //响应失败
    message.error(error);
    // error.response.data && message.error(error.response.data)
    // return Promise.reject(new Error('??'+error.response.data))
   
    
})

export default requests