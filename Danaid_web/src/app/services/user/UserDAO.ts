import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';

@Injectable()
export class UserDAO {
  constructor(private firebase: FirebaseApp) { }
}
