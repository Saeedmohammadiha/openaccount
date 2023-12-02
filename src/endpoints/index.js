import { axiosInstance } from "../utils/axiosInstance";

export const getAccountType = async () => {
  const res = await axiosInstance.post("/api/AccountType/List", {
    requestTypeId: 0,
  });
  return res;
};

export const createAuthRequest = async (data) => {
  const res = await axiosInstance.post("/api/BancsLink/CreateAuthRequest", data);
  return res;
};
