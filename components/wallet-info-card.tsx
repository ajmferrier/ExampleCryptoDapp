import { View } from "react-native";
import { useAccount, useBalance, useBlockNumber, useEstimateGas } from "wagmi";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export const WalletInfoCard = () => {
  const { address, isConnected, isReconnecting, isConnecting } = useAccount();
  const { data: balanceData } = useBalance({ address });
  const { data: blockNumberData } = useBlockNumber();
  const { data: estimateGasData } = useEstimateGas({ account: address });

  return !isConnecting && !isReconnecting && isConnected ? (
    <ThemedView style={{ padding: 16, marginTop: 16, borderRadius: 8, marginHorizontal: 8 }}>
      <ThemedText>Address: {address}</ThemedText>

      <ThemedText>Balance: {balanceData?.value} {balanceData?.symbol}</ThemedText>
      <ThemedText>Block Number: {blockNumberData}</ThemedText>
      <ThemedText>Estimated Gas: {estimateGasData}</ThemedText>
    </ThemedView>
  ) : null;
};
