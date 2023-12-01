export const validate = {
  mobileNumber: {
    required: "لطفا تلفن همراه را وارد کنید",
    pattern: {
      value: /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
      message: "تلفن  همراه نامعتبر است.",
    },
  },
  nationalId: {
    required: "لطفا کد ملی را وارد کنید",
    pattern: {
      value: /^[0-9]{10}$/,
      message: "کد ملی باید 10 رقم باشد.",
    },
  },
  cartSerial: {
    required: "لطفا سریال کارت ملی را وارد کنید.",
  },
};
