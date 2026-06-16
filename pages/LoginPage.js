class LoginPage {

 constructor(page){

   this.page = page;

   this.username =
   page.locator('#user-name');

   this.password =
   page.locator('#password');

   this.loginButton =
   page.locator('#login-button');

   this.errorMessage =
   page.locator('[data-test="error"]');
 }

 async login(user, pass){

   await this.username.fill(user);

   await this.password.fill(pass);

   await this.loginButton.click();
 }

 async getErrorMessage(){

   return await this.errorMessage.textContent();
 }

}

module.exports = LoginPage;