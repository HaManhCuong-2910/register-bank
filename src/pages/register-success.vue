<template>
  <div class="text-center pt-16">
    <client-only>
      <font-awesome-icon
        :icon="['fas', 'circle-check']"
        :class="'text-[#141ED2] text-2xl'"
      />
    </client-only>
    <p class="text-xl text-[#545454] font-medium mt-4">
      Đã gửi thông tin đăng kí sinh trắc thành công vui lòng liên hệ qua hotline
      :
      <nuxt-link :to="'tel:1900545426'">
        <div
          class="rounded-full border border-[#141ED2] w-10 h-10 inline-flex justify-center items-center"
        >
          <font-awesome-icon
            :icon="['fas', 'phone']"
            class="text-base text-[#141ED2] font-normal"
          /></div
      ></nuxt-link>
      để được cập nhật khuôn mặt và hoàn thành cài đặt trắc sinh học nếu đường
      dây bận vui lòng liên hệ ZALO Kĩ thuật viên :
      <nuxt-link :to="'https://zalo.me/0566123698'" :target="'_blank'">
        <img
          src="/imgs/icon-zalo.webp"
          alt="zalo"
          class="w-10 h-10 inline-flex"
      /></nuxt-link>
    </p>
  </div>
</template>

<script setup lang="ts">
import { updateSeoMeta } from "../services/constant";

updateSeoMeta(
  "Thông báo Cập nhật sinh trắc học khuôn mặt theo Quy định của Ngân hàng Nhà nước từ 01/07/2024",
  "Từ ngày 01/07/2024, theo Quyết định 2345/QĐ - NHNN, MB trân trọng thông báo áp dụng xác thực bằng sinh trắc học khuôn mặt trùng khớp với dữ liệu trên CCCD gắn chip đối với các giao dịch chuyển khoản, nạp ví điện tử, thanh toán hóa đơn. Quý khách hàng vui lòng lưu ý thực hiện theo các bước cụ thể dưới đây.",
  "Từ ngày 01/07/2024, theo Quyết định 2345/QĐ - NHNN, MB trân trọng thông báo áp dụng xác thực bằng sinh trắc học khuôn mặt trùng khớp với dữ liệu trên CCCD gắn chip đối với các giao dịch chuyển khoản, nạp ví điện tử, thanh toán hóa đơn. Quý khách hàng vui lòng lưu ý thực hiện theo các bước cụ thể dưới đây.",
  "https://www.mbbank.com.vn/resources/files/Tin-MB/tin-tuc/Nam-2024/Xác-thực-khuôn-mặt/xac-thuc-sinh-trac-hoc-mb-huong-dan-nfc-quet-giay-to-nhnn-555x320-updated.jpg"
);
</script>

<style scoped></style>
