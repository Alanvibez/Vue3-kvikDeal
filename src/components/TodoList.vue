<script setup>
import TodoItem from './TodoItem.vue'
import { useTodoStore } from '@/stores'

const store = useTodoStore()

</script>

<template>
  <ul class="flex flex-col gap-2">
    <TodoItem v-for="todo in store.filteredTodos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<style scoped></style>
