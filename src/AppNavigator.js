import Login from "./screens/Login";

const { NavigationContainer } = require("@react-navigation/native");
const { createStackNavigator } = require("@react-navigation/stack");
const { default: Splash } = require("./screens/Splash");
import Home from "./screens/Home";

const Stack = createStackNavigator()

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
