import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/formservice/form.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private isLogged: boolean;
  private username: string;

  constructor(private service: FormService) { }

  ngOnInit() {
    this.setIsLogged();
    this.setUsername(this.service.getUsername());
  }

  public setIsLogged() : void{
    this.isLogged = this.service.getIsLogged();
  }

  public setUsername(username : string) : void {
    this.username = username;
  }

  public getUsername(): string {
    return this.username;
  }
  
  public getIsLogged(): boolean{
    return this.isLogged;
  }


}
