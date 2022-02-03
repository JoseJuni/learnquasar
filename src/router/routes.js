
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {name:'index', path: '', component: () => import('pages/Index.vue') },
      {name:'categorias', path: 'categorias', component: () => import('pages/Categorias.vue') },
      {name:'encomendas', path: 'encomendas', component: () => import('pages/Encomendas.vue') },
      {name:'produtos', path: 'produtos', component: () => import('pages/Produtos.vue') },
      {name:'stock', path: 'stock', component: () => import('pages/Stock.vue') },
      {name:'vendas', path: 'vendas', component: () => import('pages/Vendas.vue') },
      {name:'perfil', path: 'perfil', component: () => import('pages/Perfil.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
