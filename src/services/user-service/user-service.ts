import {MyResponse} from "../api-service.types";
import {User} from "../../types";
import {UserApiServiceProviderInterface} from "./user-api-service.types";
import {UserServiceProviderInterface} from "./user-service.types";
import {UserTransformer} from "../transformers/user-service/user-transformer";

export class UserService implements UserServiceProviderInterface {
  constructor(
    public apiService: UserApiServiceProviderInterface,
  ){}

  getUser(id: number): Promise<MyResponse<User>> {
    return this.apiService.getUser(id).then(item => {
      const userTransformer = new UserTransformer();

      const newResponse: MyResponse<User> = {
        responseBody: userTransformer.fetch(item.responseBody),
        code: item.code,
        headers: item.headers,
      };

      return newResponse;
    });
  }

  getUserRole(id: number): Promise<MyResponse<string>> {
    return this.apiService.getUserRole(id);
  }

  getUsers(): Promise<MyResponse<User[]>> {
    return this.apiService.getUsers().then(item => {
      const userTransformer = new UserTransformer();

      const transformedResponse: MyResponse<User[]> = {
        responseBody: userTransformer.fetchCollection(item.responseBody),
        headers: item.headers,
        code: item.code,
      };

      return transformedResponse;
    });
  }
}
