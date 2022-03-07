import { baseUrl } from "../data";
import axios from "axios";

export const getClients = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/verifications.json`);
    return data;
  } catch (errorObj) {
    return {
      error: true,
      errorObj
    };
  }
};
