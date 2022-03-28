import { toast } from "react-toastify";

export const Alert = (msg) => {
  toast(msg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 1000,
    hideProgressBar : true,
  });
};