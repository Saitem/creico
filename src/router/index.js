import Vue from 'vue'
import VueRouter from 'vue-router'
import FormCreate from '@/components/main/FormCreate'
import mainshell from '@/components/mainshell'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FormCreate',
    component: FormCreate
  },
  {
    path: '/drawpad',
    name: 'DrawPad',
    component: mainshell
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
