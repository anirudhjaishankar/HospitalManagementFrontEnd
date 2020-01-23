import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  private username: String;
  private isLogged : boolean;

  constructor() { }

  public setUsername(username : String){
    this.username = username;
  }

  public getUsername() : String {
    return this.username;
  }

  public setIsLogged( isLogged : boolean) : void {
    this.isLogged = isLogged;
  }

  public getIsLogged() : boolean {
    return this.isLogged;
  }
}
