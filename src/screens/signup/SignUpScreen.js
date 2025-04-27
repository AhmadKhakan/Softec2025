import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider, TextInput } from "react-native-paper";
import axios from "axios";

import GlobalStyles from "../../helpers/GlobalStyles";
import Theme from "../../helpers/Theme";

import logoBlack from "../../assets/logo.png";
import googleLogo from "../../assets/google-logo.png";
// import GoogleLoginButton from "../../components/googleloginbutton/GoogleLoginButton";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailInputHandler = (text) => {
    setEmail(text);
  };
  const usernameInputHandler = (text) => {
    setUsername(text);
  };
  const passwordInputHandler = (text) => {
    setPassword(text);
  };
  const forgotPasswordHandler = () => {
    console.log("forgot password clicked");
  };

  const signUpHandler = async () => {
    console.log("yo");
    try {
      const response = await axios.post(
        `${process.env.EXPO_BASE_URL}/customers/verify-email`,
        {
          name: username,
          email: email,
          password: password,
        }
      );

      if (response.data) {
        console.log("response.data [REGISTER]=>", response.data);

        // Alert on success
        Alert.alert("Login Successful", "You have logged in successfully!");
      }
    } catch (err) {
      console.log("error at login=>", err);

      // Alert on error
      Alert.alert("Login Failed", "Something went wrong. Please try again.");
    }
  };

  const loginHandler = () => {
    navigation.navigate("login");
  };
  return (
    <SafeAreaView style={[GlobalStyles.Bodycontainer, { paddingTop: "15%" }]}>
      <View style={[GlobalStyles.Center]}>
        <Image
          style={{ width: 120, height: 120, marginVertical: "20%" }}
          source={logoBlack}
          resizeMode="contain"
        />
      </View>
      <View>
        <View>
          <Text style={GlobalStyles.LabelText}>email</Text>
          <TextInput
            style={GlobalStyles.TextInput}
            value={email}
            onChangeText={emailInputHandler}
            mode="outlined"
            outlineColor="#EDF1F3"
            activeOutlineColor={Theme.textGray}
          />
        </View>
        <View style={{ marginVertical: "4%" }}>
          <Text style={GlobalStyles.LabelText}>username</Text>
          <TextInput
            style={GlobalStyles.TextInput}
            value={username}
            onChangeText={usernameInputHandler}
            mode="outlined"
            outlineColor="#EDF1F3"
            activeOutlineColor={Theme.textGray}
          />
        </View>
        <View>
          <Text style={GlobalStyles.LabelText}>password</Text>
          <TextInput
            style={GlobalStyles.TextInput}
            value={password}
            onChangeText={passwordInputHandler}
            mode="outlined"
            outlineColor="#EDF1F4"
            activeOutlineColor={Theme.textGray}
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />
        </View>
        {/* <TouchableOpacity onPress={forgotPasswordHandler}>
          <Text
            style={{
              margin: "1%",
              marginBottom: "5%",
              color: Theme.textBlue,
              textAlign: "right",
              fontSize: 13,
              fontWeight: "400",
            }}
          >
            forgot password ?
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={[
            GlobalStyles.ButtonLayout,
            { backgroundColor: Theme.brown, marginTop: "6%" },
          ]}
          onPress={signUpHandler}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>register</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Divider style={{ marginVertical: "2%" }} />
        {/* <TouchableOpacity
          style={[
            GlobalStyles.ButtonLayout,
            {
              flexDirection: "row",
            },
          ]}
        >
          <Image
            source={googleLogo}
            resizeMode="contain"
            style={{ width: 18, height: 18, marginRight: "2%" }}
          />
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            continue with google
          </Text>
        </TouchableOpacity> */}

        {/* <GoogleLoginButton /> */}
        <View
          style={[
            GlobalStyles.Row,
            { justifyContent: "center", marginTop: "15%" },
          ]}
        >
          <Text
            style={{ color: Theme.textGray, fontSize: 14, fontWeight: "500" }}
          >
            already have an account?
          </Text>
          <TouchableOpacity onPress={loginHandler}>
            <Text
              style={{ color: Theme.textBlue, fontSize: 14, fontWeight: "600" }}
            >
              {" "}
              login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
