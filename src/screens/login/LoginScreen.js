import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import GlobalStyles from "../../helpers/GlobalStyles";
import Theme from "../../helpers/Theme";

import logoBlack from "../../assets/logo.png";
// import googleLogo from "../../assets/google-logo.png";
import axios from "axios";
// import GoogleLoginButton from "../../components/googleloginbutton/GoogleLoginButton";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailInputHandler = (text) => {
    setEmail(text);
  };
  const passwordInputHandler = (text) => {
    setPassword(text);
  };
  const forgotPasswordHandler = () => {
    console.log("forgot password clicked");
  };
  const signUpHandler = () => {
    navigation.navigate("signup");
  };

  const loginHandler = async () => {
    console.log("yo", process.env.EXPO_BASE_URL);
    try {
      const response = await axios.post(
        "http://192.168.1.100:3000/customers/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data) {
        console.log("response.data [LOGIN]=>", response.data);

        // Save response.data into AsyncStorage
        await AsyncStorage.setItem("userData", JSON.stringify(response.data));

        // Alert on success
        Alert.alert("Login Successful", "You have logged in successfully!");
      }
    } catch (err) {
      console.log("error at login=>", err);

      // Alert on error
      Alert.alert("Login Failed", "Something went wrong. Please try again.");
    }
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
        <View style={{ marginVertical: "8%" }}>
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
            { backgroundColor: Theme.brown, marginTop: "10%" },
          ]}
          onPress={loginHandler}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>log in</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* <Divider style={{ marginVertical: "2%" }} /> */}
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
            don’t have an account?
          </Text>
          <TouchableOpacity onPress={signUpHandler}>
            <Text
              style={{ color: Theme.textBlue, fontSize: 14, fontWeight: "600" }}
            >
              {" "}
              sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
