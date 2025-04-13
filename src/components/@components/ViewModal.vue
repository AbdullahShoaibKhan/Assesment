<script setup>
import Modal from "@/components/@components/Modal.vue";
import SecondaryButton from "@/components/@components/buttons/SecondaryButton.vue";
import Cross from "@/components/@components/icons/Cross.vue";

defineProps({
  openModal: {
    type: Boolean,
    default: false,
  },
  maxWidth: {
    type: String,
    default: "2xl",
  },
  fullHeight: {
    type: Boolean,
    required: false,
    default: true,
  },
  crossBtn: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(["close", "submit"]);

const closeModal = () => {
  emit("close");
};

const submit = () => {
  emit("submit");
};
</script>

<template>
  <Modal :show="openModal" @close="closeModal" :maxWidth="maxWidth" class="bg-white">
    <div :class="fullHeight ? 'h-screen' : 'h-fit'" class="relative md:h-full md:max-h-[680px] md:min-h-[150px]">
      <div v-if="crossBtn" class="absolute top-8 left-4 md:left-4 md:top-4 flex justify-end">
        <div @click="closeModal" class="text-bold text-black bg-white p-1.5 rounded-full shadow-lg cursor-pointer">
          <Cross class="h-4 w-4" />
        </div>
      </div>
      <slot />
    </div>
  </Modal>
</template>
