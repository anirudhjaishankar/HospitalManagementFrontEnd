import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  private username: string;
  private isLogged : boolean;

  constructor() { }

  public setUsername(username : string){
    this.username = username;
  }

  public getUsername() : string {
    return this.username;
  }

  public setIsLogged( isLogged : boolean) : void {
    this.isLogged = isLogged;
  }

  public getIsLogged() : boolean {
    return this.isLogged;
  }
}
