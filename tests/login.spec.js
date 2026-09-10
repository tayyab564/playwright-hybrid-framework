import { test, expect } from '../fixtures/baseFixture.js';
import loginData from '../test-data/login.json' with { type: 'json' };

test('Valid Login', async ({ loginPage }) => {

  await loginPage.navigate();

  await loginPage.login(
    loginData.validUser.username,
    loginData.validUser.password
  );

  await loginPage.verifyDashboard();

});