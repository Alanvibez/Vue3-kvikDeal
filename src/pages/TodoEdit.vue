<script setup>
import Modal from '@/components/Modal.vue'
import TodoForm from '@/components/form/TodoForm.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const closeModal = () => {
    router.push('/todo')
}
</script>

<template>
    <Modal @close="closeModal" :isOpen="true" :title="'Редактировать задачу'">
        <TodoForm @close="closeModal" :todoId="$route.params.id"/>
    </Modal>
</template>

<style scoped>

</style>
