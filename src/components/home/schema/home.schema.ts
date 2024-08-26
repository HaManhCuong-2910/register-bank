import * as yup from "yup";
import { EReason } from "~/src/services/constant";

export const schemaHome = () => {
  return yup.object({
    name: yup.string().required("Họ và tên là bắt buộc"),
    phoneNumber: yup
      .string()
      .required("Số điện thoại là bắt buộc")
      .test("is_valid_phone", "Số điện thoại không hợp lệ", (value) => {
        const regexPhoneNumber = /(0[3|5|7|8|9])+([0-9]{8})\b/g;

        return !!value.match(regexPhoneNumber);
      }),
    accountNumber: yup.string().required("Số tài khoản là bắt buộc"),
    branch: yup.string().required("Chi nhánh đăng ký là bắt buộc"),
    otherReason: yup
      .string()
      .test(
        "is_valid_otherReason",
        "Lý do khác là bắt buộc",
        (value, context) => {
          const checkList = context.parent.checkList as string[];
          const isValid = checkList.includes(EReason.OTHER_REASON);
          return isValid ? !!value : true;
        }
      ),
  });
};
