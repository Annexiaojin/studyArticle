import { createRouter, createWebHistory } from 'vue-router'
import LayoutVue from '../views/Layout.vue'
import ArticleManage from "@/views/article/ArticleManage.vue";
import UserAvatar from "@/views/user/UserAvatar.vue";
import UserResetPassword from "@/views/user/UserResetPassword.vue";
import UserInfo from "@/views/user/UserInfo.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/',
      name: '',
      component: LayoutVue,
      redirect:'/article/category',/*访问该路径‘/’时，重定向至/article/category*/
      children:[
        {
          path: '/article/category',
          component: () => import('../views/article/ArticleCategory.vue')
        },
        {
          path: '/article/manage',
          component: ArticleManage
        },
        {
          path: '/user/userInfo',
          component: UserInfo
        },
        {
          path: '/user/updateAvator',
          component: UserAvatar
        },
        {
          path: '/user/updatePwd',
          component: UserResetPassword
        }
      ]
    }
  ]
})

export default router
