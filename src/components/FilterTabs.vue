<script setup>
import { useTodoStore } from '@/stores'

const store = useTodoStore()
const { tabs } = defineProps(['tabs'])

const filterHandler = (selectedFilter) => {
  store.selectFilter(selectedFilter)
}
</script>

<template>
  <div class="flex">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      :class="store.filter == tab.value ? 'bg-blue text-white' : ''"
      class="border p-2"
      @click="filterHandler(tab.value)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<style scoped></style>
