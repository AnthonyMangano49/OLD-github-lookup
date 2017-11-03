import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { User, BaseResponse, Api, handleError, GuestCredentials as Guest } from './auth.utilities';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


@Injectable()
export class UsersService {
  guest: User;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   };

  fetchGuest(): User{
    //should call api...
    return new User(Guest.login, Guest.password);
  }

  //should overload these functions
  register(user: User) {
    return this.http.post(Api.register, {login: user.login, password: user.password})
      .map((response: Response) : BaseResponse => {
        return {
          isSuccess: true,
          message: 'successfully registered'
        }
      })
      .catch(response => handleError(response));
  };

  login(user: User) {
    return this.http.post(Api.login, {login: user.login, password: user.password})
      .map((response: Response) : BaseResponse => {
        return {
          isSuccess: true,
          message: 'success'
        }
      })
      .catch(response => handleError(response));
  };
}
