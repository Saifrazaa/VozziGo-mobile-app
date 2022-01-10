import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Loader from "../../components/loader";

class DynamicFields extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: [
        {
          field: "{Name}",
          detail: "contact name on file",
        },
        {
          field: "{My Name}",
          detail: "contact name on file",
        },
        {
          field: "{Balance}",
          detail: "contact name on file",
        },
      ],
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
    return (
      <View
        style={{
          height: "100%",
          backgroundColor: "#0d0d0d",
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
                Dynamic Fields
              </Text>
            </View>
          </View>
          <ScrollView style={{ flex: 1, width: "100%" }}>
            {this.state.fields &&
              this.state.fields.map((field, index) => {
                return (
                  <Collapse style={styles.collapseItem} key={index}>
                    <CollapseHeader style={styles.collapseHeaderStyle}>
                      <View>
                        <Text style={{ fontSize: 20 }}>{field.field}</Text>
                      </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.collapseBodyStyle}>
                      <Text>{field.detail}</Text>
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
});
export default DynamicFields;
