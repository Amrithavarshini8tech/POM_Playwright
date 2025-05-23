import { test as base } from '@playwright/test';

type TestDataOrder = {
    user: string;
    username: string;
    password: string;
};

export const customtest = base.extend<{ testDataOrder: TestDataOrder }>({
    testDataOrder: async ({}, use) => {
        await use({
            user: "user1",
            username: "standard_user",
            password: "secret_sauce"
        });
    }
});