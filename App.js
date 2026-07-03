import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ManualScreen from "./screens/ManualScreen";
import StatusScreen from "./screens/StatusScreen";

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Manual"
          component={ManualScreen}
        />

        <Stack.Screen
          name="Status"
          component={StatusScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}