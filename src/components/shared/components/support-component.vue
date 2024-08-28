<template>
  <div class="support-container space-y-2">
    <a href="https://zalo.me/0793426001" target="_blank">
      <div
        class="rounded-full border border-[#141ED2] bg-white w-12 h-12 flex justify-center items-center"
      >
        <font-awesome-icon
          :icon="['fas', 'phone']"
          class="text-xl text-[#141ED2] font-normal"
        />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.support-container {
  position: fixed;
  right: 16px;
  top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
