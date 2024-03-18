<script setup lang="ts">
const { id, label, modelValue } = defineProps(['id', 'label', 'modelValue'])
const emit = defineEmits(['update:modelValue'])

const inputChangeHandler = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <label :for="id">
    <div class="text-gray-400 mb-2">{{ label }}</div>
    <input class="outline-none border rounded p-2 w-full" :value="modelValue" :id="id" type="text" :name="id" @change="inputChangeHandler" />
  </label>
</template>

<style scoped></style>
