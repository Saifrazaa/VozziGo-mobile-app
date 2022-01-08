import React from "react";
import { HomeComponent } from "../../components";

class HomeScreen extends React.Component {
  render() {
    return <HomeComponent navigation={this.props.navigation} />;
  }
}
export default HomeScreen;
