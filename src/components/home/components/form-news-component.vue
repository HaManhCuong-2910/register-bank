<template>
  <VForm
    ref="FormRef"
    class="flex flex-col space-y-4"
    :validation-schema="schemaHome()"
    :initial-values="data"
    @submit="onSubmit"
  >
    <el-checkbox-group v-model="data.checkList">
      <el-checkbox
        :label="dataReason['LOST_CCCD']"
        :value="EReason.LOST_CCCD"
      />
      <el-checkbox :label="dataReason['NO_CCCD']" :value="EReason.NO_CCCD" />
      <el-checkbox
        :label="dataReason['IN_OTHER_COUNTRY']"
        :value="EReason.IN_OTHER_COUNTRY"
      />
      <el-checkbox
        :label="dataReason['EXPIRED_CCCD']"
        :value="EReason.EXPIRED_CCCD"
      />
      <el-checkbox :label="dataReason['FAIL_APP']" :value="EReason.FAIL_APP" />
      <el-checkbox :label="dataReason['NO_NFC']" :value="EReason.NO_NFC" />
      <el-checkbox
        :label="dataReason['OTHER_REASON']"
        :value="EReason.OTHER_REASON"
      />
    </el-checkbox-group>

    <input-common
      v-show="data.checkList.includes(EReason.OTHER_REASON)"
      id="otherReason"
      v-model:value="data.otherReason"
      :label="labels.otherReason"
      name="otherReason"
      :placeholder="'Nhập lý do khác'"
    ></input-common>

    <input-common
      id="name"
      v-model:value="data.name"
      :label="labels.name"
      name="name"
      :placeholder="'Nhập họ và tên'"
    >
    </input-common>
    <input-common
      id="address"
      v-model:value="data.address"
      :label="labels.address"
      name="address"
      :placeholder="'Nhập địa chỉ cư trú'"
    >
    </input-common>
    <input-common
      id="peopleID"
      v-model:value="data.peopleID"
      :label="labels.peopleID"
      name="peopleID"
      type="number"
      :placeholder="'Nhập số cccd/cmnd (nếu có)'"
    >
    </input-common>
    <input-common
      id="accountNumber"
      v-model:value="data.accountNumber"
      :label="labels.accountNumber"
      name="accountNumber"
      type="number"
      :placeholder="'Nhập số tài khoản cần cài sinh trắc học'"
    >
    </input-common>
    <input-common
      id="branch"
      v-model:value="data.branch"
      :label="labels.branch"
      name="branch"
      :placeholder="'Nhập chi nhánh đăng kí'"
    >
    </input-common>
    <input-common
      id="phoneNumber"
      v-model:value="data.phoneNumber"
      :label="labels.phoneNumber"
      name="phoneNumber"
      type="number"
      :placeholder="'Nhập số điện thoại liên hệ'"
    >
    </input-common>

    <button-common
      :native-type="ENativeTypeButton.submit"
      :text="'Gửi thông tin đăng ký'"
    />
  </VForm>
</template>

<script setup lang="ts">
import {
  dataReason,
  ENativeTypeButton,
  EReason,
} from "~/src/services/constant";
import { schemaHome } from "../schema/home.schema";
import type { FormContext } from "vee-validate";
import { sendPost } from "~/src/composables/useBaseFetch";

const FormRef = ref<FormContext>();
const router = useRouter();

const data = ref({
  checkList: [] as string[],
  name: "",
  address: "",
  peopleID: "",
  accountNumber: "",
  branch: "",
  phoneNumber: "",
  otherReason: "",
});

const labels = ref({
  checkList: "Lý do không cài trực tiếp tại quầy",
  name: "Họ và tên",
  address: "Địa chỉ",
  peopleID: "Số cccd/cmnd",
  accountNumber: "Số tài khoản",
  branch: "Chi nhánh đăng kí",
  phoneNumber: "Số điện thoại",
  otherReason: "Lý do khác",
});

watch(
  () => data.value.checkList,
  () => {
    FormRef.value?.setFieldValue("checkList", data.value.checkList);
  },
  {
    deep: true,
  }
);

const onSubmit = async () => {
  await FormRef.value?.validate();
  FormRef.value?.setTouched(true);
  const isPass = Object.keys(FormRef.value?.errors as object).length === 0;
  if (!isPass) return;

  if (data.value.checkList.length === 0) {
    return ElMessage({
      message: "Vui lòng chọn lý do không cài trực tiếp tại quầy",
      type: "error",
    });
  }

  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });

  try {
    const [res, error] = await sendPost(
      "/vnpay/register-sinh-trac-hoc",
      data.value
    );
    loading.close();
    router.push("/register-success");
  } catch (error) {
    loading.close();
  }
};
</script>

<style scoped lang="scss"></style>
