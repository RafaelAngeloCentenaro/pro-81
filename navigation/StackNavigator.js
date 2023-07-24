import * as React from "react"
import PostScreen from "../screens/PostScreen"
import TabNavigator from "./TabNavigator"
import { createStackNavigator } from "@react-navigation/stack"

const Stack=createStackNavigator()

const StackNavigator=()=>{
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="Tela Inicial" component={TabNavigator}/>
            <Stack.Screen name="Tela De Post" component={PostScreen}/>
        </Stack.Navigator>
    )
}
export default StackNavigator;