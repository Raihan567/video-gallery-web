import { axiosInstance } from "../../Utils/axios";

export const getVideo = async id => {
  const res = await axiosInstance.get(`/videos/${id}`);
  return res.data;
};
