import {ApiServiceProviderInterface} from "../api-service.types";
import {ApiUser} from "../api-types/user";
import {UserApiServiceProviderInterface} from "./user-api-service.types";

// Не забываем наследоваться от интерфейса который мы написали выше
export class UserApiService implements UserApiServiceProviderInterface {
  constructor(
    private api: ApiServiceProviderInterface,
  ){}

  getUser(id: number) {
    return this.api.get<ApiUser>('/user');
  }

  getUserRole(id: number) {
    return this.api.get<string>('/user/role')
  }

  getUsers() {
    return this.api.get<ApiUser[]>('/users')
  }
}
