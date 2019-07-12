import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  //FIXME: not sure what router mode history...
  // https://router.vuejs.org/guide/essentials/history-mode.html 
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
