import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { Button } from "react-native-paper";
import { auth } from "../../helpers/firebaseConfig";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLoginButton() {
  // ✅ Expo's redirect URI (HTTPS, valid for Firebase)
  const redirectUri = AuthSession.makeRedirectUri({
    useProxy: true,
  });

  // ✅ Set up the Google Auth request
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com",
    webClientId: "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com",
    androidClientId: "YOUR_ANDROID_CLIENT_ID.apps.googleusercontent.com",
    redirectUri, // ✅ always use HTTPS redirect with Firebase
  });

  // ✅ On success, sign in with Firebase
  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.authentication;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCred) => {
          const user = userCred.user;
          console.log("✅ Logged in as:", user.displayName);
        })
        .catch((err) => console.error("❌ Firebase login error:", err));
    }
  }, [response]);

  return (
    <Button
      icon="google"
      mode="contained"
      onPress={() => promptAsync()}
      disabled={!request}
      style={{ margin: 20, backgroundColor: "#4285F4" }}
      labelStyle={{ color: "#fff" }}
    >
      Continue with Google
    </Button>
  );
}
