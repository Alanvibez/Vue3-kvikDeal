<script setup>
const { title, isOpen } = defineProps(['title', 'isOpen'])
const emit = defineEmits(['close'])
</script>

<template>
  <div
    v-if="isOpen"
    class="flex items-center justify-center fixed w-full h-full left-0 top-0 bg-black bg-opacity-45"
  >
    <div class="relative bg-white p-4 rounded-lg min-w-[400px]">
      <button @click="() => emit('close')" class="absolute right-4 top-4">
        X
      </button>
      <div>
        <h1>{{ title }}</h1>
      </div>
      <hr class="my-2" />
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
