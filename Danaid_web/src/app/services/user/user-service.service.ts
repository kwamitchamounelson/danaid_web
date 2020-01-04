import { Injectable } from '@angular/core';
import { UserDAO } from './UserDAO';
import { User } from "src/app/entities/user.model";
import { UserInterface } from './UserInterface';

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
