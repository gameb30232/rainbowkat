import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { WagmiProvider, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CONFIG } from "./utils/constants"; // Import CONFIG instead of WALLET_CONNECT

// Configure wagmi & rainbowkit
const config = getDefaultConfig({
  appName: CONFIG.wallet.appName,
  projectId: CONFIG.wallet.projectId,
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-4xl font-bold text-center mb-8">
                {CONFIG.wallet.appName}
              </h1>
              <div className="flex justify-center">
                <ConnectButton />
              </div>
            </div>
          </div>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
