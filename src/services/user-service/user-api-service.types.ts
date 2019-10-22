import {MyResponse} from "../api-service.types";
import {ApiUser} from "../api-types/user";

export interface UserApiServiceProviderInterface {
  getUsers(): Promise<MyResponse<ApiUser[]>>;
  getUser(id: number): Promise<MyResponse<ApiUser>>;
  getUserRole(id: number): Promise<MyResponse<string>>;
}
