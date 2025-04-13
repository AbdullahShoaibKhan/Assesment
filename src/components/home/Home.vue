<script setup>
import ProductList from './Partials/ProductList.vue'
import GetAllProducts from '../api/Products.js'
import Loader from '../@components/Loader.vue'
import { ref, onMounted } from 'vue'
import SecondaryButton from '../@components/buttons/SecondaryButton.vue'

const products = ref(null)
const loading = ref(false)
const errors = ref(null)
const AllProducts = async (_props) => {
  loading.value = true
  if (_props == 'products?limit=0') {
    products.value = []
    loading.value = false
    return
  }
  try {
    products.value = null
    errors.value = null

    const data = await GetAllProducts(_props)

    products.value = data
  } catch (error) {
    errors.value = error
    console.log(errors.value, "value")
    console.error('Error while fetching data:', error)
  } finally {
    loading.value = false
  }
}


onMounted(() => {
  AllProducts('products')
})
</script>

<template>
  <div class="w-full h-full items-center justify-center flex flex-col">
    <header class="text-[50px] leading-[50px] font-black mb-10 text-center">
      Super Store
    </header>
    <div class="flex w-full justify-end gap-3 mb-4">
      <SecondaryButton class="bg-[#228B22] " @click="AllProducts('products')">Success State </SecondaryButton>
      <SecondaryButton class="bg-[#0000CD] " @click="AllProducts('products?limit=0')">Empty State </SecondaryButton>
      <SecondaryButton class="bg-[#B22222] " @click="AllProducts('products?limit=abcd')">Error State </SecondaryButton>
    </div>
    <div v-if="loading" class="h-[500px]">
      <Loader class="h-full w-full flex-col justify-center items-center" />
    </div>
    <ProductList v-else-if="products?.length > 0" :products="products" />
    <div v-else-if="products?.length === 0"
      class="h-[500px] w-[70%]  text-[50px] font-bold text-center text-[#0000CD] flex flex-col items-center justify-center capitlize">
      <div class="border-2 border-[#0000CD] shadow-md px-4 py-3 rounded-lg">
        There is no data to show here
      </div>
    </div>
    <div v-else-if="errors"
      class="h-[500px] w-[70%]  text-[50px] font-bold text-center text-red-400 flex flex-col items-center justify-center capitlize">
      <div class="border-2 border-[#B22222] shadow-md px-4 py-3 rounded-lg">
        {{ errors }}
      </div>
    </div>
  </div>
</template>
