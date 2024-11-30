// src/utils/constants.ts

class EnvironmentService {
  private env: ImportMetaEnv;

  constructor() {
    this.env = import.meta.env;
    this.validateEnv();
  }

  private validateEnv() {
    const required = [
      "VITE_WALLET_CONNECT_PROJECT_ID",
      "VITE_APP_NAME",
    ] as const;
    const missing = required.filter((key) => !this.env[key]);

    if (missing.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missing.join(", ")}\n` +
          "Please check your .env file",
      );
    }
  }

  get config() {
    return {
      wallet: {
        projectId: this.env.VITE_WALLET_CONNECT_PROJECT_ID,
        appName: this.env.VITE_APP_NAME,
      },
    } as const;
  }
}

const env = Object.freeze(new EnvironmentService());
export const CONFIG = env.config;
