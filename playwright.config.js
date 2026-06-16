const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000, // 60 seconds
  reporter: [
    ['list'],
    ['html', { outputFolder: 'audit-report', open: 'never' }]
  ],
  use: {
    headless: true, // GitHub Actions ke liye zaroori hai
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    screenshot: 'on', // Screenshot capture karega
    video: 'on',      // Video record karega
  },
});
