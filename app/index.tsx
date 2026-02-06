import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.icon}>♡</Text>
          <Text style={styles.icon}>✉️</Text>
        </View>
      </View>

      {/* Feed */}
      <ScrollView
        contentContainerStyle={styles.feed}
        showsVerticalScrollIndicator={false}
      >
        {/* Post 1 */}
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.avatar} />
            <Text style={styles.username}>user_name</Text>
          </View>

          <View style={styles.imagePlaceholder} />

          <Text style={styles.caption}>
            <Text style={styles.username}>user_name </Text>
            This is a sample caption for the post.
          </Text>
        </View>

        {/* Post 2 */}
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.avatar} />
            <Text style={styles.username}>another_user</Text>
          </View>

          <View style={[styles.imagePlaceholder, { height: 240 }]} />

          <Text style={styles.caption}>
            <Text style={styles.username}>another_user </Text>
            Another post caption. Keeping it simple.
          </Text>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <Pressable
          style={styles.alertBtn}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertBtnText}>Alert</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    paddingTop: 56,
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
  },
  icon: {
    fontSize: 18,
  },

  feed: {
    padding: 16,
    paddingBottom: 110, // space for footer button
    gap: 14,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#ddd",
  },
  username: {
    fontWeight: "700",
    fontSize: 14,
  },
  imagePlaceholder: {
    height: 220,
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
    marginBottom: 10,
  },
  caption: {
    color: "#222",
    lineHeight: 18,
  },

  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: "rgba(255,255,255,0.96)",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  alertBtn: {
    height: 48,
    borderRadius: 12,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  alertBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
