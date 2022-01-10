import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Loader from "../../components/loader";

class SendText extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedGroup: "SG",
      selectedTemplate: "ST",
      template: "",
      loader: false,
    };
  }
  loaderCom = () => {
    this.setState({ loader: true });
    setTimeout(() => {
      this.setState({ loader: false });
      this.props.navigation.navigate("HomeScreen", {
        transition: "SlideFromTop",
      });
    }, 1500);
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
    const groupArray = [
      {
        name: "Group 1",
        value: "group-1",
      },
      {
        name: "Group 2",
        value: "group-2",
      },
      {
        name: "Group 3",
        value: "group-3",
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
        {this.state.loader && <Loader />}

        <View style={styles.innerWrapper}>
          <View style={styles.respondHeader}>
            <TouchableOpacity onPress={this.loaderCom.bind(this)}>
              <Icon name="action-undo" color="#afff00" size={60} />
            </TouchableOpacity>
            <View style={styles.respondHeaderText}>
              <Text
                style={{ fontSize: 24, color: "#ffffff", textAlign: "center" }}
              >
                Send Text
              </Text>
            </View>
          </View>
          <View style={styles.pickerStyle}>
            <Picker
              selectedValue={this.state.selectedGroup}
              style={styles.pickerInnerStyle}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  selectedGroup: itemValue,
                })
              }
            >
              <Picker.Item label="Select Group" value="SG" enabled={false} />
              {groupArray &&
                groupArray.map((group, index) => {
                  return (
                    <Picker.Item
                      label={group.name}
                      value={group.value}
                      key={index}
                    />
                  );
                })}
            </Picker>
          </View>
          <View style={styles.pickerStyle}>
            <Picker
              selectedValue={this.state.selectedGroup}
              style={styles.pickerInnerStyle}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({
                  selectedGroup: itemValue,
                  template:
                    itemValue !== "ST"
                      ? templateArray[itemIndex - 1].template
                      : "",
                })
              }
            >
              <Picker.Item label="Select Template" value="ST" enabled={false} />
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
          <View style={styles.selectedTemplate}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({ template: text })}
              value={this.state.template}
              placeholderTextColor="#aba9a9"
              placeholder="Enter Message or Select Template"
              numberOfLines={4}
              multiline={true}
            />
          </View>
          <TouchableOpacity
            style={styles.sendBtnStyle}
            onPress={() => {
              this.setState({ loader: true });
              setTimeout(() => {
                this.setState({ loader: false });
                this.props.navigation.navigate("HomeScreen", {
                  transition: "SlideFromRight",
                });
              }, 1500);
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>SEND</Text>
          </TouchableOpacity>
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
  pickerStyle: {
    height: 40,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    marginBottom: 15,
  },
  pickerInnerStyle: {
    height: "100%",
    width: "100%",
  },
  selectedTemplate: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#afff00",
    marginBottom: 15,
    padding: 8,
  },
  sendBtnStyle: {
    borderRadius: 10,
    height: 40,
    width: "100%",
    backgroundColor: "#afff00",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  input: {
    height: "100%",
    fontSize: 20,
    color: "#ffffff",
    textAlignVertical: "top",
  },
});
export default SendText;
