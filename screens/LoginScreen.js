import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Platform,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
    Text
} from 'react-native'
import firebase from 'firebase'
import * as SplashScreen from 'expo-splash-screen'
SplashScreen.preventAutoHideAsync()
const appIcon=require("../assets/logo.png")
export default class LoginScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
        email: "",
        password: "",
        userSignedIn: false
        };
        }
        signIn = async (email, password) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
        this.props.navigation.replace("Dashboard");
        })
        .catch(error => {
        Alert.alert(error.message);
        });
        };
        render() {
            const { email, password } = this.state;
            return (
            <View style={styles.container}>
            <Text style={styles.appTitleText}>Narração de Histórias</Text>
            <Image source={appIcon} style={styles.appIcon} />
            <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Digite o email"}
            placeholderTextColor={"#FFFFFF"}
            autoFocus
            />
            <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Digite a senha"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
            />
            <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => this.signIn(email, password)}
            >
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate("RegisterScreen")}
            >
<Text style={styles.buttonTextNewUser}>Usuário novo?</Text>
</TouchableOpacity>
</View>
                );
            }
        }   
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c",
        alignItems: "center",
        justifyContent: "center"
    },
    appIcon: {
        resizeMode: "contain",
    },
    appTitleText: {
        color: "white",
        textAlign: "center",
    },
    textinput: {
        borderColor: "#FFFFFF",
        color: "#FFFFFF",
        backgroundColor: "#15193c",
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
    },
    buttonText: {
        color: "#15193c",
    },
    buttonTextNewUser: {
        color: "#FFFFFF",
        textDecorationLine: 'underline'
    }
});