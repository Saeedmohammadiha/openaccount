
interface BasicInfoFormValues {
  mobileNumber: string;
  nationalId: string;
  cartSerial: string;
  accountType: string;
  birthdate: string;
}
interface ConfirmMobileFormValues {
  password: string;
}

interface CreateAuthRequestBody {
  nationalCode: string;
  mobile: string;
  nationalCodeSerial: string;
  birthDate: string;
  accountTypeId: string;
  requestTypeId: string;
}

interface VerificationOTPBody {
  nationalCode: string | undefined;
  mobile: string | undefined;
  verifyCode: string;
}
interface ObligationBody {
  token: string;
}

interface CountDownRendererArgs {
  minutes: Number;
  seconds: Number;
}

interface AccountTypeSelectProps {
  register: UseFormRegister;
  setValue: UseFormSetValue;
}

interface AccountType {
  id: string;
  title: string;
  hasCard: boolean;
  isCurrency: boolean;
}
