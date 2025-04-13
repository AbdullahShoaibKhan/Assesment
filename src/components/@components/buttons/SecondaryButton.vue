<script setup>

defineProps({
    as: {
        type: String,
        default: "a",
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    large: {
        type: Boolean,
        default: false,
    },
    href: {
        type: String,
        default: "",
    },
    method: {
        type: String,
        default: "get",
    },
});
</script>

<template>

    <button

        :class="`bg-gray-500 text-center font-medium text-gray-100 disabled:opacity-50 ${
            rounded ? 'rounded-full' : 'rounded-md'
        } ${
            large ? 'px-10 py-2.5 text-base' : 'px-4 py-2.5 text-sm sm:py-2'
        } hover:bg-gray-600`"
        type="button"
    >
        <slot />
    </button>
</template>
