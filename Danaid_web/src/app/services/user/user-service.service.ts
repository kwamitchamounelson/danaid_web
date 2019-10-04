import { Injectable } from '@angular/core';
import { UserDAO } from './UserDAO';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements UserInterface {

  constructor(private userDao: UserDAO) { }
}
