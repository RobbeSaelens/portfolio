import {
    createRouter,
    createWebHistory,
    Router,
    RouteRecordRaw,
  } from 'vue-router'
  
  const routes: RouteRecordRaw[] = [
    {
      path: '/',
      component: () => import('../components/holders/AppHolder.vue'),
      children: [
        {
          path: '', // Eigenlijk zal de / altijd hiernaar resolven
          component: () => import('../screens/Index.vue'),
        },
  
        {
          path: 'contact',
          component: () => import('../screens/Contact.vue'),
        },
      ],
    },
  
    {
      path: '/:pathMatch(.*)*',
      name: 'ClientError',
      component: () => import('../screens/generic/ClientError.vue'),
    },
  ]
  
  const router: Router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router