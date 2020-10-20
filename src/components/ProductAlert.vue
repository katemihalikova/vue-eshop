<template>
  <p v-if="product.price > 700">
    <button @click="$emit('notify')">Notify Me</button>
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Product } from '@/types';

@Component
export default class ProductAlert extends Vue {
  @Prop() private product!: Product;
}
</script>
