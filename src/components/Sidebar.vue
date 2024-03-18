<script setup></script>

<template>
  <div class="w-[250px] border-r-2 border-[#EEF2F6]">
    <div class="sticky top-0">
      <div
        class="h-[88px] border-b-2 border-[#EEF2F6] flex items-center p-5 text-[26px] font-bold"
      >
        Kvikdeal-Test
      </div>
      <div class="p-[24px]">
        <div class="flex flex-col gap-5 capitalize">
          <router-link to="/" class="text-secondary">Home</router-link>
          <router-link to="/todo" class="text-secondary">todo</router-link>
        </div>
        <hr class="my-[24px]" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
