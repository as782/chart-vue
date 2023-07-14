import VueRouter from "vue-router";
const routes = [
    {
        path: '/',
        component: ()=>import('@/view/Login.vue'),
        meta: {
            isAuth: false,
            title: '登录'
        },
    },
    {
        path: "/login",
        name: "login",
        component: ()=>import('@/view/Login.vue'),
        meta: {
            isAuth: false,
            title: '登录'
        },
    },
    {
        path: "/mylayout",
        name: 'mylayout',
        component: ()=>import('@/view/MyLayout.vue'),
        meta: {
            isAuth: true,
            title: '主页'
        },
        children: [
            {
                path: 'analysis',
                name: 'analysis',
                component: ()=>import('@/view/AnalysisForAi.vue'),
                meta: {
                    isAuth: true,
                    title: '智能分析'
                }
            },
            {
                path: 'asyncanalysis',
                name: 'asyncanalysis',
                component: ()=>import('@/view/AnalysisAsync.vue'),
                meta: {
                    isAuth: true,
                    title: '异步分析图表'
                }
            },
            {
                path: 'mycharts',
                name: 'mycharts',
                component: ()=>import('@/view/MyCharts.vue'),
                meta: {
                    isAuth: true,
                    title: '我的图表'
                }
            }
        ]
    }
]
const router = new VueRouter({
    routes
})
// 全局路由守卫
router.beforeEach((to, form, next) => {
   
    if (to.meta.isAuth) {

        if (localStorage.getItem('Authorization')  ) {
            next()
        } else {
            
            next('/login')
        }
    } else {
        next();
    }
});
router.afterEach((to, from) => {
    document.title = to.meta.title;
})

// 编程式路由导航 重复点击问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
 
export default router;