import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";

class Templates extends React.Component {
  constructor() {
    super();
    this.state = {
      templates: [
        {
          template: "Season Renewel",
          templateBody:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          template: "Team Store",
          templateBody:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        },
        {
          template: "Contest",
          templateBody:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
        {
          template: "Season Renewel",
          templateBody:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          template: "Team Store",
          templateBody:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        },
        {
          template: "Contest",
          templateBody:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
        {
          template: "Season Renewel",
          templateBody:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          template: "Team Store",
          templateBody:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        },
        {
          template: "Contest",
          templateBody:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
        {
          template: "Season Renewel",
          templateBody:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          template: "Team Store",
          templateBody:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        },
        {
          template: "Contest",
          templateBody:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
        {
          template: "Season Renewel",
          templateBody:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          template: "Team Store",
          templateBody:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
        },
        {
          template: "Contest",
          templateBody:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
        },
      ],
    };
  }
  deleteTemplate = (index) => {
    var templates = this.state.templates;
    delete templates[index];
    this.setState({
      templates,
    });
  };
  changeTemplate = (text, index) => {
    var templates = this.state.templates;
    templates[index].templateBody = text;
    this.setState(templates);
  };
  render() {
    return (
      <View
        style={{
          height: "100%",
          backgroundColor: "#0d0d0d",
        }}
      >
        <View style={styles.innerWrapper}>
          <View style={styles.respondHeader}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("HomeScreen", {
                  transition: "SlideFromRight",
                })
              }
            >
              <Icon name="action-undo" color="#afff00" size={60} />
            </TouchableOpacity>
            <View style={styles.respondHeaderText}>
              <Text
                style={{ fontSize: 24, color: "#ffffff", textAlign: "center" }}
              >
                Templates
              </Text>
            </View>
          </View>
          <ScrollView style={{ flex: 1, width: "100%" }}>
            {this.state.templates &&
              this.state.templates.map((template, index) => {
                return (
                  <Collapse style={styles.collapseItem} key={index}>
                    <CollapseHeader style={styles.collapseHeaderStyle}>
                      <View>
                        <Text style={{ fontSize: 20 }}>
                          {template.template}
                        </Text>
                      </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.collapseBodyStyle}>
                      <TextInput
                        style={styles.input}
                        value={template.templateBody}
                        onChangeText={(text) =>
                          this.changeTemplate(text, index)
                        }
                        placeholderTextColor="#000000"
                        placeholder="Enter Message or Select Template"
                        multiline={true}
                        disabled
                      />
                      <View style={styles.templatesAction}>
                        <TouchableOpacity
                          style={styles.actionBtn}
                          onPress={() => this.deleteTemplate(index)}
                        >
                          <Text style={{ color: "#ffffff" }}>Delete</Text>
                        </TouchableOpacity>
                      </View>
                    </CollapseBody>
                  </Collapse>
                );
              })}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  innerWrapper: {
    width: "85%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    paddingBottom: 50,
  },
  respondHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  respondHeaderText: {
    flex: 1,
  },
  collapseItem: {
    width: "100%",
  },
  collapseHeaderStyle: {
    height: 50,
    width: "100%",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  collapseBodyStyle: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  tableScroll: {
    width: "100%",
  },
  deleteIconStyle: {
    position: "absolute",
    right: 15,
  },
  input: {},
  templatesAction: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  actionBtn: {
    height: 30,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginRight: 10,
  },
});
export default Templates;
