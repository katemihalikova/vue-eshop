import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import ShippingCosts from '../views/ShippingCosts.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', component: ProductList },
  { path: '/products/:id', component: ProductDetail },
  { path: '/cart', component: Cart },
  { path: '/shipping', component: ShippingCosts },
]

const router = new VueRouter({
  routes
})

export default router
