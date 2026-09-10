// playwright.config.js

import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  retries: 1,

  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list']
  ],

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry'
  }

});