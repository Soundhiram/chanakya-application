import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run appChanakya:serve',
        production: 'nx run appChanakya:preview',
      },
      ciWebServerCommand: 'nx run appChanakya:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
