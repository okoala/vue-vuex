import { setDocTitle } from '../util'

export function configRouter (router) {
  router.map({
    '/': {
      component: {
        template: require('../views/Home.vue').default
      },
      title: '首页'
    },
    '*': {
      component: require('../views/NotFound.vue').default
    }
  })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
    setDocTitle(transition.to.title)
    transition.next()
  })
}
