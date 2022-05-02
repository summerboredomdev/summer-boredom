import { Injectable } from '@angular/core';
import { UserData } from '../interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): Promise<UserData> {
    return Promise.resolve({});
  }
  setLastEntryPoint(entrypoint: string){}
}
