import {Api, ErrorCodes, GuestCredentials} from './auth-config'
import { Observable } from 'rxjs/Observable';

class User  {
    constructor(_login: string, _password: string) {
        this.login = _login;
        this.password = _password;
    }
    login: string;
    password: string;
}

interface BaseResponse {
    isSuccess: boolean,
    message: string
}

let handleError = (response) : Observable<BaseResponse> => {
    let error;
    try {
        error = JSON.parse(response.error).code;
        error = ErrorCodes[error] ? ErrorCodes[error] : "Error";
    }
    catch(e) {
        error = "Error";
    }

    return Observable.of<BaseResponse>({
        isSuccess: false,
        message: error
    })
}

export {User, Api, BaseResponse, handleError, GuestCredentials}