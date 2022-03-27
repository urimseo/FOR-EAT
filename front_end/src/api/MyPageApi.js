import { instance, fileInstance } from '../api/Axios';

export const getMember = async (member_seq) => {
  const response = await instance.get(`/members/${member_seq}`);
  return response.data;
}

export const editMember = async (member_seq) => {
    const response = await instance.patch(`/members/${member_seq}`);
    return response.data;
  }

export const getMypage = async (member_seq, formData) => {
    const response = await fileInstance.post(`/members/${member_seq}/mypage`, formData);
    return response.data;
  }

  export const getSurvey = async (member_seq) => {
    const response = await instance.get(`/members/${member_seq}/survey`);
    return response.data;
  }

  export const editSurvey = async (member_seq) => {
    const response = await instance.patch(`/members/${member_seq}/survey`);
    return response.data;
  }
  
  export const createSurvey = async (member_seq) => {
    const response = await fileInstance.post(`/members/${member_seq}/survey`);
    return response.data;
  }
