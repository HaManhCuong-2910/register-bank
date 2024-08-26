<template>
  <nav>
    <div class="container mx-auto lg:grid grid-cols-2 h-14">
      <div class="flex lg:justify-normal justify-between">
        <img src="/imgs/logo.png" class="self-center" alt="logo" />
        <ul class="flex">
          <li
            class="lg:text-base uppercase font-medium cursor-pointer lg:px-4 px-2 text-xs"
          >
            Sản phẩm
            <client-only>
              <font-awesome-icon
                :icon="['fas', 'caret-down']"
                :class="'text-xs'"
              />
            </client-only>
          </li>
          <li
            class="lg:text-base uppercase font-medium cursor-pointer lg:px-4 px-2 text-xs"
          >
            Công cụ
            <client-only>
              <font-awesome-icon
                :icon="['fas', 'caret-down']"
                :class="'text-xs'"
              />
            </client-only>
          </li>
          <li
            class="lg:text-base uppercase font-medium cursor-pointer lg:px-4 px-2 text-xs"
          >
            Ưu đãi
            <client-only>
              <font-awesome-icon
                :icon="['fas', 'caret-down']"
                :class="'text-xs'"
              />
            </client-only>
          </li>
        </ul>
      </div>
      <div class="items-center space-x-6 justify-end h-full hidden lg:flex">
        <input-common
          id="name"
          name="name"
          v-model:value="value"
          :placeholder="'Tìm kiếm'"
        />
        <div
          class="h-[35.6px] w-[180px] py-4 button-custom uppercase text-sm cursor-pointer flex items-center justify-center text-white"
        >
          Ngân hàng số
          <client-only>
            <font-awesome-icon
              :icon="['fas', 'caret-down']"
              :class="'text-xs text-white ml-2'"
            />
          </client-only>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const value = ref("");
</script>

<style scoped lang="scss">
@import "~/assets/scss/responsive.scss";
img {
  height: 37.3px;
  width: 90px;
}

@include mediaMobileTo640 {
  img {
    height: 22px;
    width: 51px;
  }
}

ul {
  li {
    line-height: 56px;
  }
}

.button-custom {
  background: rgb(160, 210, 255);
  border-radius: 2px;
}
</style>
