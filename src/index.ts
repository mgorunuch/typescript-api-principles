import {App} from "./app";
import {UserServiceFactory} from "./factories/user-service-factory";

const service = UserServiceFactory.NewUserService('https://name.com/');
const app = new App(service);

const fakeService = UserServiceFactory.NewFakeUserService();
const fakeApp = new App(fakeService);

fakeApp.userService.getUser(1).then(item => {
  console.log(`Fake user: ${item.responseBody.id}: ${item.responseBody.firstName}`)
});

app.userService.getUser(1).then(item => {
  console.log(`Fake user: ${item.responseBody.id}: ${item.responseBody.firstName}`)
});
