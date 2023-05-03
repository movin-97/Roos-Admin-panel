import BaseService from "../service/BaseService";

const useService = () => {
  const api = new BaseService();

  const getData = async () => {
    const newData = await api.httpGet("/users");
    return newData;
  };

  const postData = async (name: any, email: any) => {
    const newData = await api.httpPost("/users", { name: name, email: email });
    return newData;
  };

  const editData = async (id: any, name: any, email: any) => {
    const newData = await api.httpPut(`/users/${ id }`, { name: name, email: email });
    return newData;
  };

  const deleteData = async (id: any) => {
    const newData = await api.httpDelete(`/users/${ id }`);
    return newData;
  };

  return { getData, postData, editData, deleteData };
};

export default useService;
