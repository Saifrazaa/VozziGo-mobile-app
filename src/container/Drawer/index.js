import React from "react";
import { Drawer } from "native-base";
import { SideBar } from "../../components";
import RootStack from "../../routes";
import { drawerInitialize } from "../../services";
import { NavigationService, closeDrawer } from "../../services";

class DrawerContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  componentDidMount() {
    drawerInitialize(this.drawer);
  }
  handleLogOut = () => {
    NavigationService.navigate("LoginScreen", { transition: "SlideFromRight" });
    closeDrawer();
  };
  render() {
    return (
      <Drawer
        ref={(ref) => {
          this.drawer = ref;
        }}
        content={<SideBar />}
        onClose={() => this.closeDrawer()}
      >
        <RootStack />
      </Drawer>
    );
  }
}
export default DrawerContainer;
