import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
import routes from './routes'
// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;


// 重写push|replace

//重写VueRouter.prototype身上的push方法了
VueRouter.prototype.push = function(location, resolve, reject) {
    //第一个形参：路由跳转的配置对象（query|params）
    //第二个参数：undefined|箭头函数（成功的回调）
    //第三个参数:undefined|箭头函数（失败的回调）
    if (resolve && reject) {
      //push方法传递第二个参数|第三个参数（箭头函数）
      //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
     /* call与apply的区别：
        相同点：都可以调用函数一次，都可以篡改函数的上下文一次
        不同点：call和apply传递参数：call用逗号隔开，apply方法执行，传递数组
     */
      originPush.call(this, location, resolve, reject);
    } else {
      //push方法没有产地第二个参数|第三个参数
      originPush.call(this,location,() => {},() => {});
    }
};
  
//重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
      originReplace.call(this, location, resolve, reject);
    } else {
      originReplace.call(this,location,() => {},() => {});
    }
  };

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
      },
})