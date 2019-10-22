import {MyResponse} from "../api-service.types";
import {ApiUser} from "../api-types/user";
import {UserApiServiceProviderInterface} from "./user-api-service.types";

export class FakeUserApiService implements UserApiServiceProviderInterface {
  private generateUser(): ApiUser {
    return {
      first_name: "first_name",
      id: 1,
    };
  }

  private generateArrayOfModels<T>(count: number, method: () => T): T[] {
    const arr: T[] = [];
    for (let i = 0; i < count; i++) {
      arr.push(method())
    }
    return arr;
  }

  private packResponse<T>(data: T, code: number): MyResponse<T> {
    return {
      responseBody: data,
      code: code,
      headers: [],
    }
  }

  getUser(id: number): Promise<MyResponse<ApiUser>> {
    return new Promise<MyResponse<ApiUser>>((resolve) => {
      // Вместо генерации можно делать require('file.json');
      const responseData = this.generateUser();

      resolve(this.packResponse(responseData, 200));
    });
  }

  getUserRole(id: number): Promise<MyResponse<string>> {
    // Вместо генерации можно делать require('file.json');
    return new Promise<MyResponse<string>>((resolve) => {
      resolve(this.packResponse('admin', 200));
    });
  }

  getUsers(): Promise<MyResponse<ApiUser[]>> {
    return new Promise<MyResponse<ApiUser[]>>((resolve) => {
      // Вместо генерации можно делать require('file.json');
      const responseData = this.generateArrayOfModels(10, this.generateUser);

      resolve(this.packResponse(responseData, 200));
    });
  }
}
