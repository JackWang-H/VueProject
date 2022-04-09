import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'

export default[
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