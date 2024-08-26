<template>
  <div class="mb-news-details-content">
    <p class="description">
      Từ ngày 01/07/2024, theo Quyết định 2345/QĐ - NHNN, MB trân trọng thông
      báo áp dụng xác thực bằng sinh trắc học khuôn mặt trùng khớp với dữ liệu
      trên CCCD gắn chip đối với các giao dịch chuyển khoản, nạp ví điện tử,
      thanh toán hóa đơn. Quý khách hàng vui lòng lưu ý thực hiện theo các bước
      cụ thể dưới đây.
    </p>
    <div style="text-align: justify">
      <p>
        <img
          src="/imgs/xac-thuc-sinh-trac-hoc-mb-huong-dan-nfc-quet-giay-to-nhnn-2000x2000-updated.jpg"
          alt=""
          style="width: 650px"
        />
      </p>
      <p><strong>1. Các giao dịch cần xác thực sinh trắc học</strong></p>
      <ul>
        <li>
          Giao dịch chuyển tiền, nạp ví (Giá trị trên 10 triệu đồng/lần, trên 20
          triệu đồng/ngày)
        </li>
        <li>
          Thanh toán hóa đơn (Giá trị trên 100 triệu đồng mỗi lần hoặc ngày)
        </li>
      </ul>
      <p>
        Việc yêu cầu xác thực sinh trắc học khuôn mặt giúp tăng cường bảo mật,
        ngăn chặn việc truy cập trái phép và hạn chế tối đa khả năng bị lừa đảo,
        mang lại sự an tâm và tin tưởng cho Quý khách khi sử dụng App ngân hàng.
        Để đảm bảo giao dịch ngân hàng không bị gián đoạn, bảo mật và an toàn từ
        ngày 01/07/2024, Quý Khách vui lòng cài đặt xác thực khuôn mặt như Hướng
        dẫn ở mục 2.
      </p>
      <p><strong>2. Lý do không cài trực tiếp tại quầy</strong></p>
    </div>

    <div class="lg:w-1/2">
      <form-news-component />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.mb-news-details-content p {
  display: block;
  width: 100%;
  margin-bottom: 24px;
  font-size: 16px;
  color: #545454;
  line-height: 26px;
}

.mb-news-details-content img {
  display: block;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 24px;
}

ul {
  list-style: disc;
  margin: auto;
  padding: revert;
  margin-bottom: 10px;
}
</style>
