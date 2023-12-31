import { createRouter, createWebHistory } from 'vue-router'
import LivroIndexView from '../views/livros/LivroIndexView.vue'
import LivroCreateView from '../views/livros/LivroCreateView.vue'
import LivroEditView from '../views/livros/LivroEditView.vue'
import LivroShowView from '../views/livros/LivroShowView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: LivroIndexView
    },

    {
      path: '/create',
      name: 'create',
      component: LivroCreateView
    },

    {
      path: '/:id/show',
      name: 'show',
      component: LivroShowView,
      props: true
    },

    {
      path: '/:id/edit',
      name: 'edit',
      component: LivroEditView,
      props: true
    }
  ]
})

export default router
