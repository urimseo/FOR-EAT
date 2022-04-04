import { instance, fileInstance } from "../api/Axios";

export const getMember = async (member_seq) => {
  const response = await instance.get(`/members/${member_seq}`);
  return response.data;
};

export const editMember = async (member_seq, formData) => {
  const response = await fileInstance.patch(`/members/${member_seq}`, formData);
  return response.data;
};

export const getMypage = async (member_seq) => {
  const response = await instance.get(`/members/${member_seq}/mypage`);
  return response.data;
};

export const getWish = async (page, member_seq) => {
  const response = await instance.get(`/members/${member_seq}/mypage/likes`, {
    params: {
      limit: 12,
      offset: 12 * (page - 1),
    },
  });
  return response.data;
};

export const getReview = async (page, member_seq) => {
  const response = await instance.get(`/members/${member_seq}/mypage/reviews`, {
    params: {
      limit: 12,
      offset: 12 * (page - 1),
    },
  });
  return response.data;
};

export const getSurvey = async (member_seq) => {
  const response = await instance.get(`/members/${member_seq}/survey`);
  return response.data;
};

export const editSurvey = async (member_seq, formData) => {
  const response = await fileInstance.patch(`/members/${member_seq}/survey`, formData);
  return response.data;
};

export const createSurvey = async (member_seq) => {
  const response = await fileInstance.post(`/members/${member_seq}/survey`);
  return response.data;
};


export const getReportDetail = async (member_seq) => {
  const response = await instance.get(`/members/${member_seq}/mypage/report`);
  return response.data;
}