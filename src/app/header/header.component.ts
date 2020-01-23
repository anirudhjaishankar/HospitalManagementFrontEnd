import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/formservice/form.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private isLogged : boolean;
  private username : String;

  constructor(private service: FormService) { }

  ngOnInit() {
    this.setIsLogged();
    this.setUsername(this.service.getUsername());
  }

  public setIsLogged() : void{
    this.isLogged = this.service.getIsLogged();
  }

  public setUsername(username : String) : void {
    this.username = username;
  }

  public getUsername() : String {
    return this.username;
  }


}
