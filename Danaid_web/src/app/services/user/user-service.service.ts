import { Injectable } from '@angular/core';
import { UserDAO } from './UserDAO';
import { UserInterface } from './UserInterface';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements UserInterface {

  constructor(private userDao: UserDAO) { }

  getAllUser() {
    return this.userDao.getUsersDocuments();
  }
  creatUser(user: User) {
    return this.userDao.addUserDocument(user);
  }
  updateUser(user: User) {
    return this.userDao.updateUserDocument(user);
  }
  deleteUser(userPhoneNumber: string) {
    return this.userDao.deleteUserDocument(userPhoneNumber);
  }
}
