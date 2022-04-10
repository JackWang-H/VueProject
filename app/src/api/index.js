// 当前模块：对所有的API进行管理
import requests from './ajax'
import mockRequests from './mockAjax'

// 三级联动
//   /api/product/getBaseCategoryList   GET  参数无

// 发请求：axios发请求返回结果是Promise对象
// export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'})
export const reqGetCategoryList = ()=>requests.get(`/product/getBaseCategoryList`)


// 获取banner（home首页轮播图） 
export const reqGetBannerList = ()=> mockRequests.get('/banner')

// 获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floor')

// 获取搜索模块数据  地址：/api/list 参数：需要参数
// 参数
/* 
    {
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
 */
// 当前这个接口，给服务器传递的参数params，至少是一个空对象，所以有一个默认参数是空对象
export const reqGetSearchInfo = (params={}) => requests({
    url: '/list',
    method: 'post',
    data:params
})

// 获取产品详细信息的接口 ： URL：/api/item/{ skuId } 请求方式 GET
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:'get'})


// 将产品添加到购物车中
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

// 获取购物车数据
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'})
