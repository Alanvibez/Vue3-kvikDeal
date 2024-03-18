<script setup>
import FilterTabs from '@/components/FilterTabs.vue'
import TodoList from '@/components/TodoList.vue'
import MyButton from '@/components/ui/MyButton.vue'
import Modal from '@/components/Modal.vue'
import useModal from '@/composables/useModal'
import TodoForm from '@/components/form/TodoForm.vue'

const tabs = Object.freeze({
  all: {
    label: 'Все',
    value: 'all'
  },
  active: {
    label: 'В процессе',
    value: 'active'
  },
  completed: {
    label: 'Завершенные',
    value: 'completed'
  }
})

const { isOpen, onOpenChange } = useModal()
</script>

<template>
  <div>
    <RouterView />
    <div class="mb-4">
      <MyButton @click="onOpenChange" type="primary">Добавить задачу</MyButton>
    </div>
    <div class="mb-2">
      <FilterTabs :tabs="tabs" />
    </div>
    <TodoList />
    <Modal :isOpen="isOpen" @close="onOpenChange" title="Добавить задачу">
      <TodoForm @close="onOpenChange"/>
    </Modal>
  </div>
</template>

<style scoped></style>
