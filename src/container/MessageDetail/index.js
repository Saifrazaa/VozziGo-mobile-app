import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Picker,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

class MessageDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedValue: "ST",
      template: "",
      loader: false,
    };
  }
  loaderCom = () => {
    this.props.navigation.navigate("HomeScreen", {
      transition: "SlideFromTop",
    });
  };
  render() {
    const templateArray = [
      {
        template:
          "Thanks for reaching out {name} You can find those packs here https://getvozzi.com?id=123 Thanks for reaching out {name} You can find those packs here https://getvozzi.com?id=123",
        value: "template-1",
      },
      {
        template:
          "Thanks for reaching out {Vozzi Go Admin} You can find those packs here https://getvozzi.com?id=124",
        value: "template-2",
      },
      {
        template:
          "Thanks for reaching out {name} You can find those packs here https://getvozzi.com?id=123",
        value: "template-1",
      },
      {
        template:
          "Thanks for reaching out {Vozzi Go Admin} You can find those packs here https://getvozzi.com?id=124",
        value: "template-2",
      },
    ];
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#0d0d0d",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.innerWrapper}>
          <View style={styles.respondHeader}>
            <TouchableOpacity onPress={this.loaderCom.bind(this)}>
              <Icon name="action-undo" color="#afff00" size={60} />
            </TouchableOpacity>
            <View style={styles.respondHeaderText}>
              <Text
                style={{ fontSize: 24, color: "#ffffff", textAlign: "center" }}
              >
                Respond
              </Text>
            </View>
          </View>
          <View style={styles.messageWrapper}>
            <View style={styles.msgInfo}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "#c1c1c1", fontSize: 12 }}>From:</Text>
                <Text
                  style={{
                    color: "#c1c1c1",
                    fontWeight: "bold",
                    fontSize: 12,
                  }}
                >
                  Ben
                </Text>
              </View>
              <View>
                <Text style={{ color: "#c1c1c1", fontSize: 12 }}>
                  Friday 22 Jan,2020 06:21pm
                </Text>
              </View>
            </View>
            <View style={styles.originalMsg}>
              <Text style={styles.originalmsgText}>
                Hey i had a qouestion on where i can purchase a family ticket
                package.
              </Text>
            </View>
          </View>
          <View style={styles.selectedTemplate}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({ template: text })}
              value={this.state.template}
              placeholder="Enter Message or Select Template"
              placeholderTextColor="#aba9a9"
              numberOfLines={4}
              multiline={true}
            />
          </View>
          <View style={styles.bottomRespond}>
            <View style={styles.pickerStyle}>
              <Picker
                selectedValue={this.state.selectedValue}
                style={styles.pickerInnerStyle}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({
                    selectedValue: itemValue,
                    template:
                      itemValue !== "ST"
                        ? templateArray[itemIndex - 1].template
                        : "",
                  })
                }
              >
                <Picker.Item label="Select Template" value="ST" />
                {templateArray &&
                  templateArray.map((template, index) => {
                    return (
                      <Picker.Item
                        label={template.template}
                        value={template.value}
                        key={index}
                      />
                    );
                  })}
              </Picker>
            </View>
            <TouchableOpacity
              style={styles.sendBtnStyle}
              onPress={() => {
                this.props.navigation.navigate("HomeScreen", {
                  transition: "SlideFromRight",
                });
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500" }}>SEND</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  innerWrapper: {
    width: "85%",
  },
  respondHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  respondHeaderText: {
    flex: 1,
  },
  messageWrapper: {
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: 15,
  },
  msgInfo: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 6,
    paddingRight: 6,
  },
  originalMsg: {
    padding: 10,
  },
  originalmsgText: {
    fontSize: 20,
  },
  selectedTemplate: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#afff00",
    marginTop: 15,
    padding: 8,
  },
  templateText: {
    fontSize: 20,
    color: "#ffffff",
  },
  pickerStyle: {
    height: 40,
    width: 150,
    borderRadius: 15,
    backgroundColor: "#ffffff",
  },
  pickerInnerStyle: {
    height: "100%",
    width: "100%",
  },
  bottomRespond: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sendBtnStyle: {
    borderRadius: 10,
    height: 40,
    width: 100,
    backgroundColor: "#afff00",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: "100%",
    fontSize: 20,
    color: "#ffffff",
    textAlignVertical: "top",
  },
});
export default MessageDetails;
