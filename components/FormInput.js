import { View, Text } from "react-native";
import React from "react";

const FormInput = ({ type, name, labelText }) => {
  return (
    <View>
      <label for={name}>{labelText || name}</label>
      <input type={type} name={name} />
    </View>
  );
};

export default FormInput;
