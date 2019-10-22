import {UserServiceProviderInterface} from "./services/user-service/user-service.types";

export class App {
  constructor(
    public userService: UserServiceProviderInterface,
  ){}
}
