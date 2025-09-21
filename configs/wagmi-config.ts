import "@walletconnect/react-native-compat";
import { arbitrum, mainnet, polygon, polygonMumbai } from "wagmi/chains";
import {
  createAppKit,
  defaultWagmiConfig,
} from "@reown/appkit-wagmi-react-native";
import { APP_METADATA } from "@/configs/app-metadata";

// project ID from reown dashboard
const projectId = process.env
  .EXPO_PUBLIC_WALLETCONNECT_CLOUD_PROJECT_ID as string;

// polygonMumbai is included for testing purposes
const chains = [mainnet, polygon, polygonMumbai, arbitrum] as const;

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: APP_METADATA,
});

const setUpAppKit = () => {
  createAppKit({
    projectId,
    metadata: APP_METADATA,
    wagmiConfig,
  });
};

export { wagmiConfig, setUpAppKit };
