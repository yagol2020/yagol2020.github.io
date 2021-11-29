import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from '../components/BaseLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'yagol',
      component: BaseLayout
    },
    {
      path: '/blog',
      name: 'blog',
      redirect: {
        path: '/',
        query: {
          item: 'blog'
        }
      }
    }, {
      path: '/project',
      name: 'project',
      redirect: {
        path: '/',
        query: {
          item: 'project'
        }
      }
    }, {
      path: '/research',
      name: 'research',
      redirect: {
        path: '/',
        query: {
          item: 'research'
        }
      }
    }, {
      path: '/about',
      name: 'about',
      redirect: {
        path: '/',
        query: {
          item: 'about'
        }
      }
    }
  ]
})
