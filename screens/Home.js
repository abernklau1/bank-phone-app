import { View, SafeArea, Text } from "react-native";
import { useState } from "react";

const Home = () => {
  return (
    <SafeArea className="content-container">
      <View className="logo">
        <Text></Text>
      </View>
      <View className="form-container">
        <form>
          <label for="email" />
        </form>
      </View>
    </SafeArea>
  );
};

export default Home;
