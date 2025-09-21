import "@walletconnect/react-native-compat";
import { AppKitButton, AppKit } from "@reown/appkit-wagmi-react-native";
import { StatusBar, View, Text } from "react-native";
import { WagmiProvider } from "wagmi";
import { wagmiConfig, setUpAppKit } from "@/configs/wagmi-config";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/configs/react-query-config";
import { SignMessageButton, WalletInfoCard } from "@/components";

setUpAppKit();

export default function Entry() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle={"default"} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          {/* sign a message */}

          {/* send test tokens to another address */}
          <AppKitButton />
          <WalletInfoCard />
          <SignMessageButton />
        </View>
        <AppKit />
      </QueryClientProvider>
    </WagmiProvider>
  );
}
