import {ApiTransformer} from "../api-transformer";
import {ApiUser} from "../../api-types/user";
import {User} from "../../../types";

export class UserTransformer extends ApiTransformer<void, void, ApiUser, User> {
  send() {}

  fetch(response: ApiUser): User {
    return {
      id: response.id,
      firstName: response.first_name,
    }
  }
}
