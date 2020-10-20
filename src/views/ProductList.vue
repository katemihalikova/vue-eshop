<template>
  <div>
    <h2>Products</h2>

    <div v-for="(product, productId) in products" :key="productId">

      <h3>
        <router-link :to="`/products/${productId}`" :title="product.name + ' details'">
          {{ product.name }}
        </router-link>
      </h3>

      <p v-if="product.description">
        Description: {{ product.description }}
      </p>

      <button @click="share()">
        Share
      </button>

      <ProductAlert :product="product" @notify="onNotify()"></ProductAlert>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ProductAlert from '@/components/ProductAlert.vue';
import products from '@/products';

@Component({
  components: {
    ProductAlert,
  },
})
export default class ProductList extends Vue {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
</script>
