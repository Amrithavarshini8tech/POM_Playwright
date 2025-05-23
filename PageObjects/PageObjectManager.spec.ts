import { Page } from "@playwright/test";
import { DashBoardPO } from "../PageObjects/DashBoardPO.spec.ts";
import { LoginWithCredsPO } from "../PageObjects/LoginWithCredsPO.spec.ts";

class PageObjectManager {
    page: Page;
    LoginWithCredsPO: LoginWithCredsPO;
    DashBoardPO: DashBoardPO;

    constructor(page: Page) {
        this.page = page;
        this.LoginWithCredsPO = new LoginWithCredsPO(this.page);
        this.DashBoardPO = new DashBoardPO(this.page);
    }

  getLoginWithCredsPO() {
        return this.LoginWithCredsPO;
  }
    getDashBoardPO() {
        return this.DashBoardPO;
    }
}

export default PageObjectManager;