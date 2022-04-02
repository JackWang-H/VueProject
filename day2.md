犯的错误:
1:项目阶段，左侧菜单目录，只能有项目文件夹
2:联想电脑安装node_modules依赖包的时候，经常丢包。npm install --save axios --force
3：单词错误
4：路由理解
KV：K--->URL  V---->相应的组件
配置路由：
     ------路由组件
     -----router--->index.js
                  import Vue  from 'vue';
                  import VueRouter from 'vue-router';
                  //使用插件
                  Vue.use(VueRouter);
                  //对外暴露VueRouter类的实例
                  export default new VueRouter({
                       routes:[
                            {
                                 path:'/home',
                                 component:Home
                            }
                       ]
                  })
    ------main.js   配置项不能瞎写


$router:进行编程式导航的路由跳转
this.$router.push|this.$router.replace
$route:可以获取路由的信息|参数
this.$route.path
this.$route.params|query
this.$route.meta


1)编程式导航路由跳转到当前路由(参数不变), 多次执行会抛出NavigationDuplicated的警告错误?
注意:编程式导航（push|replace）才会有这种情况的异常，声明式导航是没有这种问题，因为声明式导航内部已经解决这种问题。
这种异常，对于程序没有任何影响的。
为什么会出现这种现象:
由于vue-router最新版本3.5.2，引入了promise，当传递参数多次且重复，会抛出异常，因此出现上面现象,
第一种解决方案：是给push函数，传入相应的成功回调函数和失败回调函数，可以捕获到当前的错误
    通过底部的代码，可以实现解决错误
        this.$router.push({name:"search", params:{(keyword:this.keyword} , query:{k:this.keyword.toupperCase()}},()=>{},()=>{});
        这种写法:治标不治本，
        this:当前组件实例(search）
        this.$router属性:当前的这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router| $route属性
        push:VueRouter类的一个实例,它是VueRouter原型对象的方法
    所以我们需要重写push函数，在VueRouter引入的文件中(index.js)


2)将Home组件的静态组件拆分
2.1静态页面（样式）
2.2拆分静态组件
2.3发请求获取服务器数据进行展示
2.4开发动态业务
拆分组件：结构+样式+图片资源
一共要拆分为七个组件

---三级联动组件完成
    由于三级联动，在Home、Search、Detail，把三级联动注册为全局组件，
        好处：只需要注册一次，就可以在全局的任意地方使用








3)axios二次封装
    为什么需要二次封装？
        请求拦截器：可以再发请求之前处理一些业务。
        响应拦截器：当服务器数据返回后，可以处理一些事情·

    在项目中api文件夹用来放axios请求

接口统一管理
    项目小：完全可以在组件的生命周期发请求
    项目大：

跨域问题
    什么是跨越：协议、域名、端口号不同请求，称为跨域
    跨域的解决方案： JSONP\CROS\代理

nprogress 进度条的使用
    需要下载：cnpm i --save nprogress
    // 引进精度条，还得引入精度条样式
    import nprogress from 'nprogress'
    // 引入样式
    import "nprogress/nprogress.css"
    nprogress.start()  代表精度条开始
    nprogress.done()   代表精度条结束


AJAX:客户端可以'敲敲的'向服务器端发请求，在页面没有刷新的情况下，实现页面的局部更新。
XMLHttpRequest、$、fetch、axios
跨域:如果多次请求协议、域名、端口号有不同的地方，称之为跨域
JSONP、CROS、代理
2.1:工作的时候src目录下的API文件夹，一般关于axios二次封装的文件
2.2进度条：nprogress模块实现进度条功能
工作的时候，修改进度条的颜色，修改源码样式.bar类名的




4)vuex:今晚务必vuex复习一下
vuex:Vue官方提供的一个插件，插件可以管理项目共用数据。
vuex：书写任何项目都需要vuex？
项目大的时候，需要有一个地方‘统一管理数据’即为仓库store
Vuex基本使用:

    