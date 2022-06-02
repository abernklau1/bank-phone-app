import { View, SafeArea, Text, Image } from "react-native";
import { useState } from "react";

import { FormInput } from "../components";

const Login = () => {
  const [isMember, setIsMember] = useState(true);

  const handleClick = () => {
    setIsMember(!isMember);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SafeArea className="content-container">
      <View className="logo">
        <Image />
        <Text>{isMember ? "Login" : "Register"}</Text>
      </View>
      <View className="form-container">
        <form>
          {!isMember && <FormInput type="name" name="name" labelText="Name" />}
          <FormInput type="email" name="email" labelText="Email" />
          <FormInput type="password" name="password" labelText="Password" />
          <button type="submit" onClick={handleSubmit}>
            {isMember ? "Login" : "Register"}
          </button>
        </form>
        <button onClick={handleClick}>{isMember ? "Register" : "Login"}</button>
      </View>
    </SafeArea>
  );
};

export default Login;
