<template>
  <footer class="mt-[60px]">
    <div class="bg-[#f1f1f1] py-14">
      <h2 class="lg:text-4xl text-2xl text-center font-bold text-[#141ED2]">
        Trung tâm dịch vụ khách hàng 24/7
      </h2>

      <div
        class="lg:mt-[60px] mt-[30px] container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-4"
      >
        <div class="flex lg:justify-center items-center space-x-7">
          <div
            class="rounded-full border border-[#141ED2] w-16 h-16 flex justify-center items-center"
          >
            <font-awesome-icon
              :icon="['fas', 'phone']"
              class="text-3xl text-[#141ED2] font-normal"
            />
          </div>
          <div>
            <h4 class="text-sm font-bold">Hotline</h4>
            <nuxt-link :to="'tel:1900545426'" :class="'text-sm'"
              >1900 545426</nuxt-link
            >
            <br />
            <nuxt-link
              :to="'https://www.mbbank.com.vn/resources/files/TT-247/smart-ivr/hdsd-a4.pdf'"
              :class="'text-sm text-[#141ED2]'"
              :target="'_blank'"
              >Hướng dẫn sử dụng Tổng đài (Tại đây)</nuxt-link
            >
          </div>
        </div>
        <div class="flex lg:justify-center items-center space-x-7">
          <div
            class="rounded-full border border-[#141ED2] w-16 h-16 flex justify-center items-center"
          >
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              class="text-3xl text-[#141ED2] font-normal"
            />
          </div>
          <div>
            <h4 class="text-sm font-bold">Email cho chúng tôi</h4>
            <nuxt-link
              :to="'https://www.mbbank.com.vn/Contact'"
              :class="'text-sm text-[#141ED2]'"
              >mb247@mbbank.com.vn</nuxt-link
            >
          </div>
        </div>
        <div class="flex lg:justify-center items-center space-x-7">
          <div
            class="rounded-full border border-[#141ED2] w-16 h-16 flex justify-center items-center"
          >
            <font-awesome-icon
              :icon="['fas', 'globe']"
              class="text-3xl text-[#141ED2] font-normal"
            />
          </div>
          <div>
            <h4 class="text-sm font-bold">Liên hệ MB247</h4>
            <nuxt-link
              :to="'https://www.mbbank.com.vn/Contact'"
              :class="'text-sm text-[#141ED2]'"
              >https://www.mbbank.com.vn/Contact</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#ebebeb] py-14">
      <div
        class="container mx-auto flex lg:flex-row flex-col lg:space-x-10 space-y-6 lg:space-y-0"
      >
        <div>
          <h1 class="text-base text-[#545454] font-bold uppercase">Sản phẩm</h1>
          <ul class="mt-4 flex flex-col space-y-2">
            <li class="text-[#7c7c7c] text-sm font-bold">
              Ngân hàng số khách hàng cá nhân
            </li>
            <li class="text-[#7c7c7c] text-sm font-bold">Tiền gửi</li>
            <li class="text-[#7c7c7c] text-sm font-bold">
              Cho vay khách hàng cá nhân
            </li>
            <li class="text-[#7c7c7c] text-sm font-bold">Dịch vụ thẻ</li>
            <li class="text-[#7c7c7c] text-sm font-bold">
              Chuyển tiền, thanh toán khách hàng cá nhân
            </li>
            <li class="text-[#7c7c7c] text-sm font-bold">
              Dịch vụ khác cho khách hàng cá nhân
            </li>
            <li class="text-[#7c7c7c] text-sm font-bold">
              Bảo hiểm nhân thọ cho khách hàng cá nhân
            </li>
          </ul>
        </div>

        <div>
          <h1 class="text-base text-[#545454] font-bold uppercase">Công cụ</h1>
          <ul class="mt-4 flex flex-col space-y-2">
            <li class="text-[#7c7c7c] text-sm font-bold">Tài liệu biểu mẫu</li>
            <li class="text-[#7c7c7c] text-sm font-bold">Công cụ tính toán</li>
            <li class="text-[#7c7c7c] text-sm font-bold">Tra cứu</li>
          </ul>
        </div>

        <div>
          <h1 class="text-base text-[#545454] font-bold uppercase">Ưu đãi</h1>
          <ul class="mt-4 flex flex-col space-y-2">
            <li class="text-[#7c7c7c] text-sm font-bold">Ưu đãi tại MBBank</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-[#141ED2] py-4">
      <div
        class="container mx-auto flex lg:flex-row flex-col lg:justify-between space-y-4 lg:space-y-0"
      >
        <p class="text-xs font-bold text-white">
          Bản quyền © 2024 thuộc về Ngân hàng Quân đội. Bảo lưu mọi quyền.
        </p>

        <ul class="flex space-x-4">
          <li class="text-xs font-bold text-white">Điều khoản sử dụng</li>
          <li class="text-xs font-bold text-white">An toàn bảo mật</li>
          <li class="text-xs font-bold text-white">Kết nối với chúng tôi</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
