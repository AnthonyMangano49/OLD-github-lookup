import { Component, OnInit } from '@angular/core';
import { UsersService } from '../authentication/users.service';
import { User } from '../authentication/auth.utilities';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel: User;
  message: string;
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.userModel = new User('','');
  }

  populateGuest() {
    this.userModel = this.usersService.fetchGuest();
    this.message = 'Sign In To Continue'
  }

  registerUser() {
    if (this.validate())
      this.usersService.register(this.userModel).subscribe(response => this.message = response.message);
  }

  loginUser(){
    if(this.validate()) 
      this.usersService.login(this.userModel).subscribe(response => {
        if(response.isSuccess) 
          this.router.navigate(['quiz/dashboard']);
        else this.message = response.message;
      });
  }

  validate() {
    for(let property in this.userModel){
      if(!this.userModel[property]){
        this.message = "All Fields Required";
        return false;
      }
    }

    return true;
  }
}
