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
import DataTable, { COL_TYPES } from "react-native-datatable-component";
import Loader from "../../components/loader";

class Groups extends React.Component {
  constructor() {
    super();
    this.state = {
      groupsList: [
        {
          name: "Season Tickets",
          members: [
            {
              name: "Sam",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Ben",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Jack",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
          ],
        },
        {
          name: "Single Game",
          members: [
            {
              name: "Sam",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Ben",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Jack",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
          ],
        },
        {
          name: "Merch",
          members: [
            {
              name: "Sam",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Ben",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Jack",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
          ],
        },
        {
          name: "Contest",
          members: [
            {
              name: "Sam",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Ben",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Jack",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
          ],
        },
        {
          name: "Season Tickets",
          members: [
            {
              name: "Sam",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Ben",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Jack",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
          ],
        },
        {
          name: "Single Game",
          members: [
            {
              name: "Sam",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Ben",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Jack",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
          ],
        },
        {
          name: "Merch",
          members: [
            {
              name: "Sam",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Ben",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Jack",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
          ],
        },
        {
          name: "Contest",
          members: [
            {
              name: "Sam",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Ben",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
            {
              name: "Jack",
              phone: "+123",
              age: "25",
              custom1: "s",
              custom2: "s",
              custom3: "s",
            },
          ],
        },
      ],
      loader: false,
    };
  }
  deleteGroup = (index) => {
    var groupsList = this.state.groupsList;
    delete groupsList[index];
    this.setState({
      groupsList,
    });
  };
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
                Groups
              </Text>
            </View>
          </View>
          <ScrollView
            style={{
              width: "100%",
            }}
          >
            {this.state.groupsList &&
              this.state.groupsList.map((group, index) => {
                return (
                  <Collapse style={styles.collapseItem} key={index}>
                    <CollapseHeader style={styles.collapseHeaderStyle}>
                      <View>
                        <Text style={{ fontSize: 20 }}>{group.name}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.deleteIconStyle}
                        onPress={() => this.deleteGroup(index)}
                      >
                        <Icon name="trash" size={20} color="red" />
                      </TouchableOpacity>
                    </CollapseHeader>
                    <CollapseBody style={styles.collapseBodyStyle}>
                      <ScrollView style={styles.tableScroll} horizontal>
                        <DataTable
                          data={group.members} // list of objects
                          colNames={[
                            "name",
                            "phone",
                            "age",
                            "custom1",
                            "custom2",
                            "custom3",
                          ]} //List of Strings
                          colSettings={[
                            { name: "name", type: COL_TYPES.STRING },
                            { name: "phone", type: COL_TYPES.INT },
                            { name: "age", type: COL_TYPES.INT },
                            { name: "name", type: COL_TYPES.STRING },
                            { name: "name", type: COL_TYPES.STRING },
                            { name: "name", type: COL_TYPES.STRING },
                          ]} //List of Objects
                          noOfPages={1} //number
                        />
                      </ScrollView>
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
  input: {
    fontSize: 20,
    color: "#ffffff",
    textAlignVertical: "top",
  },
});
export default Groups;
