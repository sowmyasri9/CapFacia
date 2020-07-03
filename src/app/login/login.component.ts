import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = [];
  error:String="";
  success: boolean = false;
  public loginObj = {
    email: '',
    password: ''
  };

  constructor(private routes: Router) { }

  ngOnInit(): void {
    
  }
  onLogin(email, password) {


   
      if (email === "admin@gmail.com" && password === "admin") {
        sessionStorage.setItem('username', "admin");
        this.success = true;
        this.routes.navigate(['/recognition']);
        }
        if (this.success !== true) {
          this.error="Incorrect credentials";
                this.routes.navigate(['/login']);
              }
      
    }
   

  }
 
