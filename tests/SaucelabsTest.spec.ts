

import test from '@playwright/test';
// If 'resolveJsonModule' is enabled in tsconfig.json:
import testData from '../Utils/testData.json';
const testData1 = JSON.parse(JSON.stringify(testData));
import {customtest} from '../Utils/base.spec'; 
import PageObjectManager from '../PageObjects/PageObjectManager.spec.ts';

//commit comment
for (const data of testData1) {

    test(`login_And_saveCredentials ${data.user}`, async ({ page }) => {
        //const po = new loginPO(page);
        const poManager = new PageObjectManager(page);
        const loginpage = poManager.getLoginWithCredsPO();
        await loginpage.goToLoginPage();
        await loginpage.login(data.username, data.password);
        const dashboardPO = poManager.getDashBoardPO();
        await dashboardPO.checkAllTitles();
        await dashboardPO.selectFromDropdown();
        await dashboardPO.checkAllFooterLinks();
        await dashboardPO.checkAddToCart();
    });

}

customtest('login_And_saveCredentials', async ({ page, testDataOrder }) => {
        //const po = new loginPO(page);
        const poManager = new PageObjectManager(page);
        const loginpage = poManager.getLoginWithCredsPO();
        await loginpage.goToLoginPage();
        await loginpage.login(testDataOrder.username, testDataOrder.password);
        const dashboardPO = poManager.getDashBoardPO();
        await dashboardPO.checkAllTitles();
        await dashboardPO.selectFromDropdown();
        await dashboardPO.checkAllFooterLinks();
        await dashboardPO.checkAddToCart();
    });