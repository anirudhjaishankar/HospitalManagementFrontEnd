import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/formservice/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  private username: String;
  private password: String;
  constructor(
    private formService: FormService,
    private router: Router
  ) { }

  ngOnInit() { }

  onSubmit() {
    this.formService.setIsLogged(true);
    this.formService.setUsername(this.username);
    this.router.navigate(['details/doctors']);
    console.log(this.username, this.password);
  }

}
