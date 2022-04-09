//对于axios进行二次封装
import axios from 'axios'
// 引进精度条，还得引入精度条样式
import nprogress from 'nprogress'
// 引入样式
import "nprogress/nprogress.css"
// 可以在nprogress.css里的#nprogress .bar里修改精度条样式

// 1.利用axios的对象方法create创建一axios实例
// 2.requests就是axios，只不过稍微配置一下
const requests = axios.create({
    // 基础路径
    baseURL: '/mock',
    // 代表请求事件为5s
    timeout: 5000
})

// 请求拦截器：
requests.interceptors.request.use((config) => {
    // config配置对象，里面有一个很重要的属性，headers请求头
    // 精度条开始动
    nprogress.start()
    return config;
})

// 响应拦截器：
requests.interceptors.response.use((res) => {
    // 成功的回调函数
    // 精度条结束
    nprogress.done()
    return res.data;
}, (error) => {
    // 失败的回调函数
    return Promise.reject(new Error('faile'));
})


export default requests;