import React, { useEffect } from "react";
import { SafeAreaView, View, Image, Text } from "react-native";
import GlobalStyles from "../../helpers/GlobalStyles";
import logo from "../../assets/logo.png";

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("login"); // replace so user can't go back
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup timer on unmount
  }, [navigation]);

  return (
    <SafeAreaView style={[GlobalStyles.Bodycontainer, GlobalStyles.Center]}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={logo}
          style={{ width: 150, height: 150, marginBottom: 20 }}
          resizeMode="contain"
        />
        <Text
          style={[
            GlobalStyles.textSize,
            { fontWeight: "bold", textAlign: "center" },
          ]}
        >
          Welcome to Your Personal Assistant
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
