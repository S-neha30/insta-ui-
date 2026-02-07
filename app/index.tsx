import {
  Alert,
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
    caption: "This is a sample caption for the post.",
    likes: "1,234 likes",
  },
  {
    id: "2",
    username: "another_user",
    caption: "Another post caption. Keeping it simple.",
    likes: "842 likes",
  },
];

export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>

        <View style={styles.headerRight}>
          <Text style={styles.headerIcon}>♡</Text>
          <Text style={styles.headerIcon}>✉️</Text>
        </View>
      </View>

      {/* Stories */}
      <View style={styles.storiesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {STORIES.map((story) => (
            <View key={story.id} style={styles.storyItem}>
              <View style={styles.storyCircle} />
              <Text style={styles.storyText}>{story.name}</Text>
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
              <View style={styles.avatar} />
              <Text style={styles.username}>{post.username}</Text>
            </View>

            {/* Image placeholder */}
            <View style={styles.imagePlaceholder} />

            {/* Actions row */}
            <View style={styles.actionsRow}>
              <View style={styles.actionsLeft}>
                <Text style={styles.actionIcon}>like</Text>
                <Text style={styles.actionIcon}>comment</Text>
                <Text style={styles.actionIcon}> share </Text>
              </View>
              <Text style={styles.actionIcon}>share</Text>
            </View>

            {/* Likes */}
            <Text style={styles.likes}>{post.likes}</Text>

            {/* Caption */}
            <Text style={styles.caption}>
              <Text style={styles.captionUser}>{post.username} </Text>
              {post.caption}
            </Text>
          </View>
        ))}

        {/* Space so the last post isn't hidden behind the button */}
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

  header: {
    height: 56,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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

  storiesContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingLeft: 10,
  },
  storyItem: {
    alignItems: "center",
    marginHorizontal: 8,
    width: 70,
  },
  storyCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ddd",
    marginBottom: 4,
  },
  storyText: {
    fontSize: 12,
  },

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
    marginBottom: 10,
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

  imagePlaceholder: {
    height: 220,
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
    marginBottom: 10,
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
