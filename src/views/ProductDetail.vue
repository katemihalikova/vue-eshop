<template>
  <div>
    <h2>Product Details</h2>

    <h3>{{ product.name }}</h3>
    <h4>${{ product.price.toFixed(2) }}</h4>
    <p>{{ product.description }}</p>

    <button @click="addToCart(product)">Buy</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CartService from '@/services/CartService';
import products from '@/products';
import { Product } from '@/types';

@Component({})
export default class ProductDetail extends Vue {
  product: Product = products[Number(this.$route.params.id)];

  addToCart(product: Product) {
    CartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
</script>
