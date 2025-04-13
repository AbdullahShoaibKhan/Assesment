<script setup>
import ProductCard from './ProductCard.vue'
import { defineProps, ref } from 'vue'
import ViewModal from '@/components/@components/ViewModal.vue'
import ProductDetailModal from './ProductDetailModal.vue'

defineProps({
    products: {
        type: Array,
        required: true,
        default: []
    }
})
const item = ref(null)
const OpenProductDetailModal = ref(false);

const ViewProduct = (product) => {
    item.value = product
    OpenProductDetailModal.value = true
}
</script>

<template>
    <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-x-3 md:gap-x-4 gap-y-4 md:gap-y-5 px-4 sm:px-5 md:px-8 lg:px-10">
        <div class="w-full" v-for="product in products" :key="product?.id">
            <ProductCard :item="product" @click="ViewProduct(product)" />
        </div>
    </div>
    <ViewModal maxWidth="4xl" class="!bg-white" :openModal="OpenProductDetailModal"
        @close="OpenProductDetailModal = false">
        <ProductDetailModal :item="item" />
    </ViewModal>
</template>
