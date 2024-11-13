import { AxiosPromise } from "axios";
import { api } from "../api/axios";

interface IUserHTTPService {
  login: (email: string, password: string) => Promise<AxiosPromise<any>>;
}

const UserHTTPService: IUserHTTPService = {
  login: function (
    email: string,
    password: string
  ): Promise<AxiosPromise<any>> {
    return api.post("auth/login", {
      email: email,
      password: password,
    });
  },
};

export default UserHTTPService;
