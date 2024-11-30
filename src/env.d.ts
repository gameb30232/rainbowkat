/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WALLET_CONNECT_PROJECT_ID: string;
  // Add other env variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
