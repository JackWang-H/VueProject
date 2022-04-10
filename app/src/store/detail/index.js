import{ reqGoodsInfo ,reqAddOrUpdateShopCart} from '@/api'
import {getUUID} from '@/utils/uuid_token'
const state = {
    goodInfo: {},
    // 游客的临时身份
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state,goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    // 获取产品信息
    async getGoodInfo({commit},skuid) {
        let result =await reqGoodsInfo(skuid)
        if (result.code == 200) {
            commit('GETGOODINFO',result.data)
        }
    },
    // 将产品添加到购物车中
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) { 
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        // 当前这个函数如果执行返回Promise
        if (result.code == 200) {
            return "ok"
        } else {
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters = {
    categoryView(state) {
        // 这里是为了防止state.goodInfo.categoryView初始空对象状态，空对象的属性值undefined
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }

}
export default {
    state,
    mutations,
    actions,
    getters
}