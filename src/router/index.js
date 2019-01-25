import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import magazine from '@/components/magazine/magazine'
import mythis from '@/components/this/mythis'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/magazine',
      name: 'magazine',
      component: magazine
    },
    {
      path: '/mythis',
      name: 'mythis',
      component: mythis
    }
  ]
})
