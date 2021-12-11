import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Menu from '../components/Menu.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/blog',
      redirect: {
        path: '/',
        query: { choose: 'blog' }
      },
    },
    {
      path: '/smartcontract',
      redirect: {
        path: '/',
        query: { choose: 'smartcontract' }
      },
    },
    {
      path: '/project',
      redirect: {
        path: '/',
        query: { choose: 'project' }
      },
    },
    {
      path: '/about',
      redirect: {
        path: '/',
        query: { choose: 'about' }
      },
    }
  ]
})
export default router