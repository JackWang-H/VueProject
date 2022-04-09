import{ reqGoodsInfo } from '@/api'

const state = {
    goodInfo:{},
}
const mutations = {
    GETGOODINFO(state,goodInfo) {
        state.goodInfo = goodInfo
    }
}
const actions = {
    async getGoodInfo({commit},skuid) {
        let result =await reqGoodsInfo(skuid)
        if (result.code == 200) {
            commit('GETGOODINFO',result.data)
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