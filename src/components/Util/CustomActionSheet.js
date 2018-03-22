

import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem, ActionSheet, Root } from "native-base";

var BUTTONS = [
    { text: "Home", route : 'Home', icon: "home", iconColor: "#2c8ef4" },
    { text: "About Us", route : 'About', icon: "people", iconColor: "#2c8ef4" },
    // { text: "Vista Land",  route : 'About', icon: "analytics", iconColor: "#f42ced" },
    { text: "Buyer's Guide",  route : 'BuyersGuide', icon: "book", iconColor: "#ea943b" },
    // { text: "Calculator",  route : 'About', icon: "calculator", iconColor: "#fa213b" },
  ];
  var DESTRUCTIVE_INDEX = 3;
  var CANCEL_INDEX = 5;

const CustomActionSheet = (props) => {
    return (
        ActionSheet.show(
            {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                // destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "More"
            },
            buttonIndex => {
            //   this.setState({ clicked: BUTTONS[buttonIndex] });
                if (buttonIndex != CANCEL_INDEX) {
                    const clickedButton = BUTTONS[buttonIndex];
                    props.navigation.navigate(clickedButton.route)
                }
                // props.navigation.navigate("DrawerOpen");
                // props.navigation.navigate("About")
            //   alert(buttonIndex);
            }
            )
    );
}

export default CustomActionSheet;