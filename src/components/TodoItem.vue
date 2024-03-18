<script setup>
import { useTodoStore } from '@/stores'

const { todo } = defineProps(['todo'])
const { deleteTodo } = useTodoStore()

const deleteHandler = () => {
  deleteTodo(todo.id)
}
</script>

<template>
  <li class="flex justify-between border p-4">
    <div>
      <h3 class="font-bold">{{ todo.title }}</h3>
      <p class="text-sm text-gray-400">{{ todo.description }}</p>
    </div>
    <div>
      <button
        @click="() => $router.push(`todo/${todo.id}`)"
        class="text-blue-600 p-2 rounded-lg"
      >
        <v-icon name="md-modeeditoutline-outlined" scale="1.2" />
      </button>
      <button @click="deleteHandler" class="text-red-600 p-2 rounded-lg">
        <v-icon name="md-deleteforever-outlined" scale="1.2" />
      </button>
    </div>
  </li>
</template>

<style scoped></style>
