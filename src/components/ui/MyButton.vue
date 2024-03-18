<script setup>
const { type, customClass } = defineProps(['type', 'customClass'])

const emit = defineEmits(['click'])

const types = {
    danger: 'bg-red-500 text-white',
    primary: 'bg-blue text-white',
}
</script>

<template>
  <button
    :class="['py-2 px-4', customClass, types[type]]"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<style scoped></style>
