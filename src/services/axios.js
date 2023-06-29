import axios from "axios";

export const getDataAxios = (method, url) => axios({ method:method, url:url }).catch(err => err);