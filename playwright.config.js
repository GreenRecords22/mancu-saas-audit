const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 20000, // Har click ko 20 second ka time
  },
  reporter: [['html', { open: 'never' }]],
});
