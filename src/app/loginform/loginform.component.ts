import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/formservice/form.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  
  private loginForm:FormGroup;

  constructor(
    private formService: FormService,
    private router: Router,
    private formBuilder: FormBuilder 
  ) { }

  ngOnInit() { 
    this.loginForm = this.formBuilder.group({
      username:'',
      password:''
    });
  }

  onSubmit(loginData) {
    this.formService.setIsLogged(true);
    this.formService.setUsername(loginData.username);
    this.router.navigate(['details/patients']);
    console.log(loginData.username, loginData.password);
  }

}
