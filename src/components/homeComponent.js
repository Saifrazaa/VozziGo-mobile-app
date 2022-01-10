import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import Loader from "./loader";

const MessageList = [
  {
    msg: "Hey i Had a question about the new place",
    from: "Curtis",
    date: "Friday, Nov 6, 2021",
    time: "02:03pm",
    read: false,
  },
  {
    msg: "What time is the game will be resumed",
    from: "801.212.12321",
    date: "Thursday, Nov 5, 2021",
    time: "01:23pm",
    read: true,
  },
  {
    msg: "Where can i go to buy the grocery",
    from: "Ben",
    date: "Wednesday, Nov 4, 2021",
    time: "11:23pm",
    read: true,
  },
  {
    msg: "Awesome game yesterday i love",
    from: "Dave",
    date: "Tuesday, Nov 3, 2021",
    time: "01:51pm",
    read: true,
  },
  {
    msg: "Do you have any of these a",
    from: "555.123.3232",
    date: "Monday, Nov 2, 2021",
    time: "03:22pm",
    read: true,
  },
];

class HomeComponent extends React.Component {
  constructor() {
    super();
    this.state = {
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
          flex: 1,
          backgroundColor: "#0d0d0d",
          justifyContent: "center",
        }}
      >
        {this.state.loader && <Loader />}

        <View style={styles.msgsWrapper}>
          <TouchableOpacity
            style={styles.fabBtn}
            onPress={() => {
              this.setState({ loader: true });
              setTimeout(() => {
                this.setState({ loader: false });
                this.props.navigation.navigate("SendText", {
                  transition: "SlideFromRight",
                });
              }, 1500);
            }}
          >
            <Icon name="add" />
          </TouchableOpacity>
          {MessageList &&
            MessageList.length > 0 &&
            MessageList.map((msg, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.msgListItem,
                    { backgroundColor: msg.read ? "#dfdfdf" : "#ffffff" },
                  ]}
                  onPress={() => {
                    this.setState({ loader: true });
                    setTimeout(() => {
                      this.setState({ loader: false });
                      this.props.navigation.navigate("MessageDetail", {
                        transition: "SlideFromRight",
                      });
                    }, 1500);
                  }}
                >
                  <View style={styles.msgInfo}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{ color: "#c1c1c1", fontSize: 12 }}>
                        From:
                      </Text>
                      <Text
                        style={{
                          color: "#c1c1c1",
                          fontWeight: "bold",
                          fontSize: 12,
                        }}
                      >
                        {msg.from}
                      </Text>
                    </View>
                    <View>
                      <Text style={{ color: "#c1c1c1", fontSize: 12 }}>
                        {msg.date}
                        {msg.time}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={[
                      styles.msgText,
                      { fontWeight: msg.read ? "normal" : "500" },
                    ]}
                    numberOfLines={1}
                  >
                    {msg.msg}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fabBtn: {
    height: 50,
    width: 50,
    backgroundColor: "#afff00",
    marginBottom: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  msgsWrapper: {
    width: "85%",
    alignSelf: "center",
  },
  msgListItem: {
    height: 55,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
  msgInfo: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingLeft: 6,
    paddingRight: 6,
  },
  msgText: {
    alignSelf: "center",
    maxWidth: "80%",
    fontSize: 20,
    marginTop: 4,
  },
});

export default HomeComponent;
