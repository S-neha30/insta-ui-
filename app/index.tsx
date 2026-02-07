import React from "react";
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const STORIES = [
  { id: "1", name: "Your story" },
  { id: "2", name: "your_name0" },
  { id: "3", name: "your_name1" },
  { id: "4", name: "your_name2" },
];

const POSTS = [
  {
    id: "1",
    username: "user_name",
    caption: "beautiful nature 1.",
    likes: "1,234 likes",
    time: "2 hours ago",
    image:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
  },
  {
    id: "2",
    username: "another_user",
    caption: "beautiful nature 2.",
    likes: "532 likes",
    time: "Yesterday",
    image:
      "https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_hybrid&w=740&q=80",
  },
];

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerLeft}>+</Text>

        <Text style={styles.headerTitle}>Instagram</Text>

        <View style={styles.headerRight}>
          <Text style={styles.headerIcon}>❤️</Text>
          <Text style={styles.headerIcon}>✉️</Text>
        </View>
      </View>

      {/* Stories */}
      <View style={styles.storiesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {STORIES.map((story) => (
            <View key={story.id} style={styles.storyItem}>
              <View style={styles.storyRing}>
                <View style={styles.storyCircle} />

                {story.id === "1" && (
                  <View style={styles.storyPlus}>
                    <Text style={styles.storyPlusText}>+</Text>
                  </View>
                )}
              </View>

              <Text style={styles.storyText} numberOfLines={1}>
                {story.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Feed */}
      <ScrollView
        contentContainerStyle={styles.feed}
        showsVerticalScrollIndicator={false}
      >
        {POSTS.map((post) => (
          <View key={post.id} style={styles.card}>
            {/* Top row */}
            <View style={styles.topRow}>
              <View style={styles.topLeft}>
                <View style={styles.avatar} />
                <Text style={styles.username}>{post.username}</Text>
              </View>

              <Text style={styles.more}>⋯</Text>
            </View>

            {/* Post Image */}
            <Image source={{ uri: post.image }} style={styles.postImage} />

            {/* Actions row */}
            <View style={styles.actionsRow}>
              <View style={styles.actionsLeft}>
                <Text style={styles.actionIcon}>❤️</Text>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionIcon}>🔁</Text>
              </View>

              <Text style={styles.actionIcon}>⭐</Text>
            </View>

            {/* Likes */}
            <Text style={styles.likes}>{post.likes}</Text>

            {/* Caption */}
            <Text style={styles.caption}>
              <Text style={styles.captionUser}>{post.username} </Text>
              {post.caption}
            </Text>

            {/* Time */}
            <Text style={styles.time}>{post.time}</Text>
          </View>
        ))}

        {/* Space so last content isn't hidden behind the button */}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Bottom Alert Button */}
      <View style={styles.bottomBar}>
        <Pressable
          style={styles.alertButton}
          onPress={() => Alert.alert("Alert Button pressed")}
        >
          <Text style={styles.alertText}>Alert</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /* Header */
  header: {
    height: 56,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    fontSize: 24,
    width: 28,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  headerIcon: {
    fontSize: 18,
  },

  /* Stories */
  storiesContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingLeft: 10,
  },
  storyItem: {
    alignItems: "center",
    marginHorizontal: 8,
    width: 76,
  },
  storyRing: {
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 3,
    borderColor: "#ff2d55",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  storyCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#ddd",
  },
  storyPlus: {
    position: "absolute",
    right: -2,
    bottom: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#2f80ed",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  storyPlusText: {
    color: "#fff",
    fontWeight: "700",
    lineHeight: 18,
  },
  storyText: {
    fontSize: 12,
    color: "#222",
  },

  /* Feed */
  feed: {
    padding: 14,
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ededed",
    borderRadius: 14,
    padding: 12,
    marginBottom: 14,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  topLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    height: 34,
    width: 34,
    borderRadius: 17,
    backgroundColor: "#ddd",
    marginRight: 10,
  },
  username: {
    fontWeight: "700",
    fontSize: 14,
  },
  more: {
    fontSize: 22,
    color: "#666",
    paddingHorizontal: 6,
  },

  postImage: {
    height: 220,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#dcdcdc",
  },

  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    marginBottom: 6,
  },
  actionsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionIcon: {
    fontSize: 18,
    marginRight: 14,
  },

  likes: {
    fontWeight: "700",
    paddingHorizontal: 6,
    marginBottom: 6,
  },

  caption: {
    color: "#222",
    paddingHorizontal: 6,
    lineHeight: 18,
  },
  captionUser: {
    fontWeight: "700",
  },
  time: {
    color: "#777",
    fontSize: 12,
    paddingHorizontal: 6,
    marginTop: 6,
  },

  /* Bottom button */
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 14,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  alertButton: {
    backgroundColor: "#111",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },
  alertText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
