import Axios, { AxiosResponse, AxiosInstance } from "axios";

export class BaseService {

  private axiosInstance: AxiosInstance


  constructor() {
    
    this.axiosInstance = this.createClient()
  }

  createClient() {
    return Axios.create({
      baseURL: "https://jsonplaceholder.typicode.com" 
    })
  }

  public httpGet(url: string): Promise<AxiosResponse> {
    return this.axiosInstance.get(`${url}`);
  }

  public httpPost(url: string, data: any): Promise<AxiosResponse<any>> {
    return this.axiosInstance.post(`${url}`, data);
  }

  public httpPut(url: string, data: any): Promise<AxiosResponse<any>> {
    return this.axiosInstance.put(`${url}`, data);
  }

  public httpDelete(url: string): Promise<AxiosResponse<any>> {
    return this.axiosInstance.delete(`${url}`);
  }
}

export default BaseService;
