import { Component} from '@angular/core';
import {LoginModel} from '../login-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private http: HttpClient) {}
    user = new LoginModel();

onSubmit(){
   console.log(this.user);
 this.http.post<LoginModel>('http://localhost:3000/test', this.user).subscribe(data => {
   console.log(data);
  });
}
}