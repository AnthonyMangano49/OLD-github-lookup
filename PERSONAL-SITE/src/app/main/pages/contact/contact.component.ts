import { Component, OnInit } from '@angular/core';
import { TempApiService } from './temp-api.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [TempApiService]
})
export class ContactComponent implements OnInit {
  //should have : types;
  form;
  message;
  canSubmit;

  constructor(private tempApi: TempApiService) { }
  ngOnInit() {
    this.init();
  }

  init(){
    this.form = {
      category: '',
      name: '',
      message: '',
      email: '',
      phone: ''
    }
    this.message = 'Hello'
    this.canSubmit = true;
  }

  submit(){
    if(!this.canSubmit)
      return;
    if(this.form.email.length || this.form.phone.length){
      this.canSubmit = false;
      this.message = 'Thank You';
      this.tempApi.sendEmail(this.form);
      setTimeout(() => this.init(), 2000);
    } else {
      this.message = 'Phone or Email Required'
    }
  }

}
