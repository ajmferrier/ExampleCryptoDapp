import { Pressable, StyleSheet } from "react-native";
import { useSignMessage } from "wagmi";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

export const SignMessageButton = () => {
  const { signMessage, data: signMessageData, isSuccess } = useSignMessage();

  const pressHandler = () => {
    signMessage({
      message: "ExampleCryptoDapp is asking you to sign this message",
    });
  };

  return (
    <>
      {isSuccess ? (
        <ThemedView style={{ padding: 16, marginTop: 16, borderRadius: 8, marginHorizontal: 8 }}>
          <ThemedText>
            signed hash: {signMessageData}
          </ThemedText>
        </ThemedView>
      ) : null}
      <Pressable style={styles.button} onPress={pressHandler}>
        <ThemedText>Sign Message</ThemedText>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2563eb", // vibrant blue
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 24,
    alignItems: "center",
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4, // for Android shadow
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
});
