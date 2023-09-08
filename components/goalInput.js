import {
  View,
  Button,
  StyleSheet,
  Image,
  Modal,
  TextInput,
} from "react-native";
import { useState } from "react";

const GoalInput = ({ addGoalHandler, toggleGoalModal, visible }) => {
  const [text, setText] = useState("");

  const goalHandler = () => {
    addGoalHandler(text);
    setText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.textInput}
          placeholder="Your course goal"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button color="#5e0acc" title="Add Goal" onPress={goalHandler} />
          </View>
          <View style={styles.button}>
            <Button onPress={toggleGoalModal} color="#f31282" title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    paddingBottom: 24,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flex: 1,
    padding: 15,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    width: "100%",
    padding: 8,
    marginRight: 10,
    color: "#120438",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 5,
    padding: 10,
  },
  button: {
    width: "45%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
