import {ApiServiceProviderInterface, MyResponse} from "./api-service.types";
import {ApiUser} from "./api-types/user";

const generateUser = (): ApiUser => {
  return {
    first_name: "name",
    id: 1,
  };
};

const generateResponse = (url): MyResponse<any> => {
  let body: any;

  if (url === '/user') {
    body = generateUser();
  } else if (url === '/user/role') {
    body = 'admin';
  } else if (url === '/users') {
    body = [];
    for (let i = 0; i < 10; i++) {
      body.push(generateUser());
    }
  }

  return {
    code: 200,
    headers: [],
    responseBody: body,
  }
};

export class ApiService implements ApiServiceProviderInterface {
  constructor(
    public baseUrl: string,
  ){}

  get<R>(url: string): Promise<MyResponse<R>> {
    return new Promise<MyResponse<R>>(resolve => resolve(generateResponse(url)));
  }

  path<D, R>(url: string, data: D): Promise<MyResponse<R>> {
    return new Promise<MyResponse<R>>(resolve => resolve(generateResponse(url)));
  }

  post<D, R>(url: string, data: D): Promise<MyResponse<R>> {
    return new Promise<MyResponse<R>>(resolve => resolve(generateResponse(url)));
  }

  put<D, R>(url: string, data: D): Promise<MyResponse<R>> {
    return new Promise<MyResponse<R>>(resolve => resolve(generateResponse(url)));
  }
}
