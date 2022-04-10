import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

export default [
    {
        path: '/shopcart',
        name: ShopCart,
        component: ShopCart,
        meta: {
            showFooter:true
        }
    },
    {
        path: '/addcartsuccess',
        name:'addcartsuccess',
        component: AddCartSuccess,
        meta: {
            showFooter:true
        }
    },
    {
        path: '/home',
        component: Home,
        meta: {
            showFooter:true
        }
    },
    {
        name:'search',
        path: '/search/:keyword?',
        component: Search,
        meta: {
            showFooter:true
        },
        props: true
    },
    {
        path: '/login',
        component: Login,
        meta: {
            showFooter:false
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            showFooter:false
        }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            showFooter:true
        }
    },
    {
        path: '*',
        redirect: '/home'
    }
]