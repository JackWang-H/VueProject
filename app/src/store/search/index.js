import {reqGetSearchInfo} from '@/api'

// search
// 仓库存储数据的地方
const state = {
    searchList: {},
}
// 修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state,searchList) {
        state.searchList = searchList
    }
}
// 处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    async getSearchList({commit},params={}) {
        // params,是当用户派发action的时候，第二个参数传过来的，至少是一个空对象
        let result =  await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST',result.data)
        }
    }
}
// 理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {
    // state是当前仓库的state，不是大仓库的
    goodsList(state) {
        // 这样写是有问题的
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}