<template>
  <div>
    <img src="/imgs/tin-tuc-banner.png" alt="tin-tuc" />
    <div class="pt-8 container mx-auto grid lg:grid-cols-12 grid-cols-1 gap-4">
      <div class="lg:col-span-9">
        <body-home-screen-component />
      </div>
      <div class="lg:col-span-3">
        <other-news-component />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
