import {reqGetCategoryList,reqGetBannerList,reqGetFloorList} from '@/api'
// home
// 仓库存储数据的地方
const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
}
// 修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList =floorList
    }
}
// 处理actions，可以书写自己的业务逻辑，也可以处理异步
const actions = {
    async categorylist({commit}) {
        let result = await reqGetCategoryList();
        // console.log(result);
        if (result.code == 200) {
            commit('CATEGORYLIST',result.data)
        }
    },
    async getBannerList({commit}) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit('GETBANNERLIST',result.data)
        }
    },
    // 获取floor数据
    async getFloorList({ commit }) {
        let result = await reqGetFloorList();
        if (result.code == 200) {
            commit('GETFLOORLIST',result.data)
        }
    }
}
// 理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}