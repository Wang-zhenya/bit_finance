import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import HomePage from '@/views/homepage/HomePage'
import Wikipedia from '@/views/wikipedia/Wikipedia'
import Alerts from '@/views/alerts/Alerts'
import Activity from '@/views/activity/Activity'
import Figure from '@/views/figure/Figure'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        {
          name: 'homepage',
          path: '/homepage',
          component: HomePage
        },
        {
          name: 'wikipedia',
          path: '/wikipedia',
          component: Wikipedia
        },
        {
          name: 'alerts',
          path: '/alerts',
          component: Alerts
        },
        {
          name: 'activity',
          path: '/activity',
          component: Activity
        },
        {
          name: 'figure',
          path: '/figure',
          component: Figure
        }
      ]
    }
  ]
})
