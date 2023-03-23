import dotenv from 'dotenv';
import path from 'path';

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  const env = dotenv.config({ path: path.join(__dirname, '../../.env') }).parsed;

  config.env = {
    ...config.env,
    ...env,
  };

  return config;
};