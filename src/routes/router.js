import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homeView',
      component: Home
    },
    {
      path: '/about',
      name: 'aboutView',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "aboutView" */ '@/components/views/About.vue'
        ),
      children: [
        {
          path: 'company',
          name: 'aboutCompany',
          component: () =>
            import(
              /* webpackChunkName: "aboutView" */ '@/components/commons/about/AboutCompany.vue'
            )
        },
        {
          path: 'alumni',
          name: 'aboutAlumni',
          components: {
            default: () =>
              import(
                /* webpackChunkName: "aboutView" */ '@/components/commons/about/AboutAlumni.vue'
              ),
            alumniRouterView: () =>
              import(
                /* webpackChunkName: "aboutView" */ '@/components/commons/about/AboutAlumniHelp.vue'
              )
          }
        }
      ]
    },
    {
      path: '/products',
      name: 'productsView',
      // route level code-splitting
      // this generates a separate chunk (Products.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "productsView" */ '@/components/views/Products.vue'
        )
    },
    {
      path: '/products/:id',
      name: 'singleProductView',
      // route level code-splitting
      // this generates a separate chunk (ProductSingle.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "singleProductView" */ '@/components/views/ProductSingle.vue'
        )
    },
    {
      path: '*',
      component: Home
    }
  ]
})
