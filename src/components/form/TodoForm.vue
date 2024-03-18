<script setup>
import MyInput from './MyInput.vue'
import MyButton from '@/components/ui/MyButton.vue'
import { ref } from 'vue'
import { useTodoStore } from '@/stores'
import { onMounted } from 'vue'

const { addTodo, updateTodo, getTodoById } = useTodoStore()

const { todoId } = defineProps(['todoId'])
const emit = defineEmits(['close'])

const formData = ref({
  title: '',
  description:  ''
})

const performAction = () => {
  if (todoId) {
    updateTodo(formData.value)
  } else {
    addTodo(formData.value)
  }

  emit('close')
}

onMounted(() => {
  if (todoId) {
    const fetchedTodo = getTodoById(todoId)
    formData.value = { ...fetchedTodo }
  }
})
</script>

<template>
  <form @submit.prevent="performAction" class="flex flex-col gap-2">
    <MyInput id="title" label="Название" v-model="formData.title" />
    <MyInput id="description" label="Описание" v-model="formData.description" />
    <hr class="my-4" />
    <div class="flex justify-center">
      <MyButton type="primary">Добавить</MyButton>
    </div>
  </form>
</template>

<style scoped></style>
