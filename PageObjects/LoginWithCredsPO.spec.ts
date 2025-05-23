import { expect } from "@playwright/test";
import { Page } from "@playwright/test";
class LoginWithCredsPO{
    // import { Page } from "@playwright/test";
    page: Page;
    password: any;

    constructor(page){
     this.page = page;
     this.password = page.locator("input[name='password']");  
    }
    async goToLoginPage(){
        return await this.page.goto('https://www.saucedemo.com/');    
    }
    
    async login(username, password){
    await this.page.getByPlaceholder('Username').fill(username);
    await this.password.fill(password);
    await this.page.getByRole('button', { name: 'login' }).click();
    }


}
export { LoginWithCredsPO };