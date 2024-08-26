<template>
  <div>
    <h1 class="text-3xl font-medium">
      Thông báo Cập nhật sinh trắc học khuôn mặt theo Quy định của Ngân hàng Nhà
      nước từ 01/07/2024
    </h1>
    <div class="flex space-x-1 mt-4">
      <client-only>
        <font-awesome-icon
          :icon="['far', 'calendar']"
          :class="'text-xl text-gray-500'"
        />
      </client-only>
      <p class="text-base text-gray-500">04.07.2024</p>
    </div>

    <div class="mt-9">
      <detail-news-component />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
