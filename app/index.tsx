import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  SafeAreaView,
  StatusBar,
} from "react-native";

const stories = ["Your story", "your_name0", "your_name1", "your_name2"];

export default function Index() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />

      {/* Top tiny title (optional) */}
      <Text style={styles.topTitle}>index</Text>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>

        <View style={styles.headerIcons}>
          <Text style={[styles.icon, { marginRight: 14 }]}>♡</Text>
          <Text style={styles.icon}>✉</Text>
        </View>
      </View>

      {/* Feed */}
      <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
        {/* Stories */}
        <View style={styles.storiesRow}>
          {stories.map((name) => (
            <View key={name} style={styles.story}>
              <View style={styles.storyCircle} />
              <Text style={styles.storyText} numberOfLines={1}>
                {name}
              </Text>
            </View>
          ))}
        </View>

        {/* Post 1 */}
        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={styles.smallCircle} />
            <Text style={styles.userName}>user_name</Text>
            <View style={{ flex: 1 }} />
            <Text style={styles.more}>⋯</Text>
          </View>

          <View style={styles.postImage} />

          <View style={styles.actionsRow}>
            <Text style={[styles.action, { marginRight: 24 }]}>like</Text>
            <Text style={[styles.action, { marginRight: 24 }]}>comment</Text>
            <Text style={styles.action}>share</Text>
            <View style={{ flex: 1 }} />
            <Text style={styles.actionMuted}>save</Text>
          </View>

          <Text style={styles.likes}>1,234 likes</Text>

          <Text style={styles.caption}>
            <Text style={styles.bold}>user_name </Text>
            This is a sample caption for the post.
          </Text>

          <Text style={styles.time}>2 hours ago</Text>
        </View>

        {/* Post 2 */}
        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <View style={styles.smallCircle} />
            <Text style={styles.userName}>another_user</Text>
            <View style={{ flex: 1 }} />
            <Text style={styles.more}>⋯</Text>
          </View>

          <View style={[styles.postImage, { height: 220 }]} />

          <View style={styles.actionsRow}>
            <Text style={[styles.action, { marginRight: 24 }]}>like</Text>
            <Text style={[styles.action, { marginRight: 24 }]}>comment</Text>
            <Text style={styles.action}>share</Text>
          </View>

          <Text style={styles.likes}>532 likes</Text>

          <Text style={styles.caption}>
            <Text style={styles.bold}>another_user </Text>
            Another clean sample post layout.
          </Text>

          <Text style={styles.time}>Yesterday</Text>
        </View>

        {/* Space so button doesn't cover content */}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Bottom Alert Button */}
      <Pressable
        style={styles.alertBtn}
        onPress={() => Alert.alert("Alert", "Alert Button pressed")}
      >
        <Text style={styles.alertText}>Alert</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f7", // soft light background
  },

  topTitle: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e9e9ee",
    backgroundColor: "#fff",
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: "#111",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    fontSize: 20,
    color: "#111",
  },

  feed: {
    flex: 1,
  },

  storiesRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#e9e9ee",
    backgroundColor: "#fff",
  },

  story: {
    alignItems: "center",
    width: 78,
  },

  storyCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#d7d7db",
    marginBottom: 8,
    borderWidth: 3, // subtle ring
    borderColor: "#ffffff",
  },

  storyText: {
    fontSize: 12,
    color: "#333",
  },

  postCard: {
    marginHorizontal: 14,
    marginTop: 14,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ececf2",
    backgroundColor: "#fff",
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  smallCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#d7d7db",
    marginRight: 10,
  },

  userName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111",
  },

  more: {
    fontSize: 22,
    color: "#777",
    paddingHorizontal: 6,
  },

  postImage: {
    height: 260,
    borderRadius: 12,
    backgroundColor: "#d7d7db",
    marginBottom: 12,
  },

  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  action: {
    fontSize: 15,
    color: "#111",
    fontWeight: "600",
  },

  actionMuted: {
    fontSize: 15,
    color: "#666",
    fontWeight: "600",
  },

  likes: {
    fontSize: 14,
    fontWeight: "800",
    marginBottom: 6,
    color: "#111",
  },

  caption: {
    fontSize: 14,
    color: "#222",
    marginBottom: 8,
  },

  bold: {
    fontWeight: "900",
    color: "#111",
  },

  time: {
    fontSize: 12,
    color: "#777",
  },

  alertBtn: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 18,
    backgroundColor: "#111", // clean black
    paddingVertical: 16,
    borderRadius: 22,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#111",
  },

  alertText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },
});
