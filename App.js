import { useState } from "react";
import { StyleSheet, Image, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const toggleGoalModal = () => {
    setIsVisible(!isVisible);
  };

  const addGoalHandler = (text) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: courseGoals.length + 1, text },
    ]);
    toggleGoalModal();
  };

  const deleteGoalItem = (id) => {
    setCourseGoals((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          onPress={toggleGoalModal}
          color="#5e0acc"
          title="Add New Goal"
        />

        <GoalInput
          toggleGoalModal={toggleGoalModal}
          visible={isVisible}
          addGoalHandler={addGoalHandler}
        />

        <View style={{ flex: 5 }}>
          <FlatList
            data={courseGoals}
            renderItem={(item) => {
              return (
                <GoalItem onDeleteItem={deleteGoalItem} item={item.item} />
              );
            }}
            alwaysBounceHorizontal={true}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
});
