import {MyResponse} from "../api-service.types";
import {User} from "../../types";

export interface UserServiceProviderInterface {
  getUsers(): Promise<MyResponse<User[]>>;
  getUser(id: number): Promise<MyResponse<User>>;
  getUserRole(id: number): Promise<MyResponse<string>>;
}
