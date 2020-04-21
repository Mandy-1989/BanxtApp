import SplashPage from "@modules/splash/Splash"
import TabNavigatorScreen from "@navigation/TabNavigator";
import { createStackNavigator } from "react-navigation-stack"
import Color from "@styles/colors"

const headerTabStyle = {
    backgroundColor: Color.PRIMARY_COLOR,
    shadowOpacity: 0,
    shadowOffset: {
        height: 0,
        width: 0,
    },
    elevation: 0,
    marginBottom: 0,
    borderBottomWidth: 0,
}

export const RootStack = createStackNavigator(
    {
        Splash: {
            screen: SplashPage,
            navigationOptions: {
                headerShown: false,
            },
        },
        TabNavigator: {
            screen: TabNavigatorScreen,
            navigationOptions: {
                title: 'Home',
                headerShown: false //this will hide the header
            },
        },
    },
    {
        initialRouteName: "Splash",
        defaultNavigationOptions: {
            headerStyle: headerTabStyle,
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
            headerBackTitle: null,
        },
    }
)