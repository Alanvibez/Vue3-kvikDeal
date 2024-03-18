<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="flex w-full min-h-screen">
    <Sidebar />
    <div class="flex-1">
      <header class="h-[88px] border-b-2 border-[#EEF2F6]"></header>
      <main class="p-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
