interface AuthentificationInterface {
  createNewUser(email: string, password: string);
  signInUser(email: string, password: string);
  signOutUser();
  getUserConnected();
}
