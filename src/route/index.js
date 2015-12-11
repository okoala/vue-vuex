
export function configRouter (router) {
  router.map({
    '/': {
      component: require('../components/Home.vue')

    },
    '*': {
      component: require('../components/NotFound.vue')
    }
  })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
    transition.next()
  })
}
