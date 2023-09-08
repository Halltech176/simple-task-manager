import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ item, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        style={{ padding: 10 }}
        android_ripple={{ color: "#210644" }}
        onPress={() => onDeleteItem(item.id)}
        // style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={{ color: "white" }}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    fontFamily: "monospace",
    borderRadius: 6,
    margin: 8,
    backgroundColor: "#5e0acc",
  },
});
