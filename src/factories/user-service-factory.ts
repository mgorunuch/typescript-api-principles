import {ApiService} from "../services/api-service";
import {UserApiService} from "../services/user-service/user-api-service";
import {UserService} from "../services/user-service/user-service";
import {FakeUserApiService} from "../services/user-service/fake-user-api-service";

export class UserServiceFactory {
  static NewUserService(baseUrl: string): UserService {
    const apiService = new ApiService(baseUrl);
    const userApiService = new UserApiService(apiService);
    return new UserService(userApiService);
  }

  static NewFakeUserService(): UserService {
    const userApiService = new FakeUserApiService();
    return new UserService(userApiService);
  }
}
