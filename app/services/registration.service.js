import axios from "axios";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";
import qs from "qs";

export class RegistrationService {
  instance;
  constructor(url) {
    this.instance = axios.create({
      baseURL: url,
      // timeout: 30000,
      timeoutErrorMessage: "Time out!",
    });
  }

  publicGetAll = async ( data) => {
    return this.instance
      .post(`/api/v1/publicMaster/mockTest/getMockTest/forPublicPage`, data, {
        
      })
      .then((res) => res.data);
  };

  publicGetOne = async (id) => {
    return this.instance
      .get(`/api/v1/publicMaster/mockTest/getMockTest/publicGetOne/${id}`, {
      })
      .then((res) => res.data);
  };

  getMockWithFilter = async ( data) => {
    return this.instance
      .post(`/api/v1/publicMaster/otherApi/getRegistration/withFilter`, data, {
        headers: getAuthorizationHeader(),
      })
      .then((res) => res.data);
  };
  
  

}
