import { View, Text } from "react-native";
import React from "react";

const FormInput = ({ type, name }) => {
  return (
    <View>
      <input type={type} name={name} />
    </View>
  );
};

export default FormInput;
