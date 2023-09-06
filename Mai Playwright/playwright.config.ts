//playwright.config.ts

import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

  //testDir: './tests',

  timeout: 30 * 1000,

  expect: {

    timeout: 5000

  },

  reporter: 'html',

  use: {
    headless: false,

    actionTimeout: 0,

    trace: 'on-first-retry',

  },

};

export default config;