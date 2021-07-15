import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Button as BT,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, List, Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";

const CreateQuote = (props) => {
  const [text, setText] = React.useState("");
  const [expanded, setExpanded] = React.useState(true);
  const [chosenCategory, setChosenCategory] = useState("Select");
  const handlePress = () => setExpanded(!expanded);

  //date states
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <View style={styles.create}>
          <Text style={styles.createText}>Create Quote</Text>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.inputContainer}>
            <TextInput
              label="Name"
              underlineColor="#F84726"
              theme={{ colors: { primary: "#F84726" } }}
              value={text}
              style={styles.inputText}
              onChangeText={(text) => setText(text)}
            />
            <TextInput
              label="Description"
              underlineColor="#F84726"
              theme={{ colors: { primary: "#F84726" } }}
              multiline={true}
              style={styles.inputText}
              onChangeText={() => {}}
            />

            <List.Section
              title="Category"
              theme={{ colors: { primary: "#F84726" } }}
              style={styles.categoryTab}
            >
              <List.Accordion
                title={chosenCategory}
                theme={{ colors: { primary: "#F84726" } }}
                expanded={!expanded}
                underlineColor="#F84726"
                onPress={handlePress}
              >
                <List.Item
                  title="First item"
                  onPress={() => {
                    setChosenCategory("First item");
                    handlePress();
                  }}
                />
                <List.Item
                  title="Second item"
                  onPress={() => {
                    setChosenCategory("Second item");
                    handlePress();
                  }}
                />
              </List.Accordion>
            </List.Section>
            <View style={styles.avail}>
              <Text style={styles.availText}>Availability</Text>
              <View style={styles.boader}></View>
            </View>
            <View>
              <View>
                <TextInput
                  label="Start Date"
                  theme={{ colors: { primary: "#F84726" } }}
                  mode="outlined"
                  outlineColor="#F84726"
                  style={styles.inputText}
                  onChangeText={() => {}}
                />
              </View>
              <View>
                <TextInput
                  label="End Date"
                  theme={{ colors: { primary: "#F84726" } }}
                  mode="outlined"
                  outlineColor="#F84726"
                  style={styles.inputText}
                  onChangeText={() => {}}
                />
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
            <Button style={styles.button} mode="contained" color="#F3F3F3">
              Add Images or Video
            </Button>
          </View>
        </ScrollView>
        <View style={styles.postContainer}>
          <TouchableOpacity
            style={styles.postButton}
            onPress={props.createPost}
          >
            <Text style={styles.postText}>POST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: "center",
    justifyContent: "space-between",
  },
  scroll: {
    width: "100%",
  },
  categoryTab: {
    backgroundColor: "#0000000B",
  },
  create: {
    backgroundColor: "white",
    paddingTop: 50,
    paddingBottom: 20,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,

    elevation: 9,
    width: "100%",
    alignItems: "center",
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  avail: {
    flexDirection: "row",
    marginTop: 15,
  },
  availText: {
    fontWeight: "bold",
  },
  boader: {
    borderBottomColor: "#EAEAEA",
    borderBottomWidth: 1,
    width: "80%",
    marginBottom: 8,
    marginLeft: 5,
  },

  createText: {
    fontSize: 16,

    color: "black",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 25,
  },
  inputText: {
    marginVertical: 15,
  },

  postButton: {
    backgroundColor: "#F84726",
    padding: 20,
    borderRadius: 2,
    alignItems: "center",
  },
  postText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  postContainer: {
    width: "100%",
    padding: 20,
  },

  button: {
    padding: 12,
    borderStyle: "dotted",
    borderWidth: 2,
    marginVertical: 5,
    borderColor: "#707070",
  },
});

export default CreateQuote;
