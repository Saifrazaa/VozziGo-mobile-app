import React from "react";
import { Login } from "../../components"
class Loginscreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Login navigation={this.props.navigation} />
        )
    }
}
export default Loginscreen;