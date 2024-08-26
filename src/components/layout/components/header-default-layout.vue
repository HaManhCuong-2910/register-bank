<template>
  <header class="lg:h-10 bg-primary py-2 lg:py-0 relative">
    <div class="container mx-auto lg:grid grid-cols-12 h-full">
      <div class="col-span-8 h-full hidden lg:block">
        <ul class="flex h-full">
          <li class="text-sm uppercase h-full text-white px-3 active">
            Cá nhân
          </li>
          <li class="text-sm uppercase h-full text-white px-3">
            Doanh nghiệp vừa và nhỏ
          </li>
          <li class="text-sm uppercase h-full text-white px-3">
            Doanh nghiệp lớn
          </li>
          <li class="text-sm uppercase h-full text-white px-3">
            Khách hàng định chế
          </li>
          <li class="text-sm uppercase h-full text-white px-3">MB PRIORITY</li>
        </ul>
      </div>
      <div class="col-span-4 h-full hidden lg:block">
        <ul class="flex h-full justify-end">
          <li class="text-sm h-full text-white px-3">Về MB</li>
          <li class="text-sm h-full text-white px-3">Nhà đầu tư</li>
          <li class="text-sm h-full text-white px-3">Tin tức</li>
          <li class="text-sm h-full text-white px-3">Tuyển dụng</li>
          <li class="self-center">
            <img src="/imgs/vi.png" alt="vi icon" />
          </li>
        </ul>
      </div>

      <div class="flex justify-between items-center lg:hidden">
        <client-only>
          <font-awesome-icon
            :icon="['fas', 'bars']"
            class="text-xl text-white"
            @click="isShowMobile = !isShowMobile"
          />
        </client-only>

        <input-common
          id="name"
          name="name"
          v-model:value="value"
          :placeholder="'Tìm kiếm'"
        />
      </div>
    </div>

    <div
      class="menu-mobile bg-white absolute top-full w-full p-2"
      v-if="isShowMobile"
    >
      <ul>
        <li class="text-sm uppercase">Cá nhân</li>
        <li class="text-sm uppercase">Doanh nghiệp vừa và nhỏ</li>
        <li class="text-sm uppercase">Doanh nghiệp lớn</li>
        <li class="text-sm uppercase">Khách hàng định chế</li>
        <li class="text-sm uppercase">MB PRIORITY</li>
        <li class="text-sm uppercase">Về MB</li>
        <li class="text-sm uppercase">Nhà đầu tư</li>
        <li class="text-sm uppercase">Tin tức</li>
        <li class="text-sm uppercase">Tuyển dụng</li>
        <li>
          <img src="/imgs/vi.png" alt="vi icon" class="w-6" />
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
const value = ref("");
const isShowMobile = ref(false);
</script>

<style scoped lang="scss">
ul {
  li {
    line-height: 40px;

    &.active {
      background-color: #fff;
      color: #000;
    }

    &:hover {
      transition: 0.3s;
      background-color: #fff;
      color: #000;
      cursor: pointer;
    }
  }
}
</style>
