import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Instagram</Text>

      {/* Feed Card */}
      <View style={styles.card}>
        <Text style={styles.username}>user_name</Text>
        <View style={styles.imagePlaceholder} />
        <Text style={styles.caption}>This is a sample caption.</Text>
      </View>

      {/* Alert Button */}
      <View style={styles.buttonWrap}>
        <Button
          title="Alert"
          onPress={() => Alert.alert("Alert Button pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  header: {
  fontSize: 26,
  fontWeight: "700",
  textAlign: "center",
  marginBottom: 16,
},


  card: {
  backgroundColor: "#fff",
  borderRadius: 14,
  padding: 12,
  borderWidth: 1,
  borderColor: "#e6e6e6",
  shadowColor: "#000",
  shadowOpacity: 0.06,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 3 },
  elevation: 2,
},


  username: {
    fontWeight: "bold",
    marginBottom: 8,
  },

  imagePlaceholder: {
    height: 200,
    backgroundColor: "#ddd",
    borderRadius: 8,
    marginBottom: 8,
  },

  caption: {
  color: "#333",
  marginTop: 4,
  lineHeight: 18,
},


  buttonWrap: {
    marginTop: 20,
  },
});
