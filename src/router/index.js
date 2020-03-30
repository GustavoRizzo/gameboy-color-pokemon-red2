import Vue from 'vue'
import Router from 'vue-router'
import Gameboy from '../components/Gameboy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Gameboy',
      component: Gameboy
    }
  ]
})
