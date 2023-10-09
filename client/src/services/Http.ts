import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_REACT_APP_API_TOKEN}`;


export default class Http {
  static async get(url:string) {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (e) {
      console.error("error axios get", e);
      throw e;
    }
  }

  static async put(url:string, data:any) {
    try {
      return await axios.put(url, data);
    } catch (e) {
      console.error("error axios update", e);
      throw e;
    }
  }
  static async post(url:string, data:any) {
    try {
      return await axios.post(url, data);
    } catch (e) {
      console.error("error axios post", e);
      throw e;
    }
  }
  static async delete(url:string) {
    try {
      const res = await axios.delete(url);
      return res.data;
    } catch (e) {
      console.error("error axios delete", e);
    }
  }
}