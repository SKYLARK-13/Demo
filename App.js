import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import Home from "./Screens/Home";
import CreateQuote from "./Screens/CreateQuote";

export default function App() {
  const [add, setAdd] = useState(false);

  const createPostHandler = () => {
    setAdd(true);
  };
  let content = <Home createPost={createPostHandler} />;
  if (add) {
    content = (
      <CreateQuote
        createPost={() => {
          setAdd(false);
        }}
      />
    );
  }
  return <PaperProvider>{content}</PaperProvider>;
}

const styles = StyleSheet.create({});
