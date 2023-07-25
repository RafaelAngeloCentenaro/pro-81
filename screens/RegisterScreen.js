import React,{Component} from "react";
import {
    View,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    TextInput,
    Alert,
    TouchableOpacity,
    Text
    } from "react-native";
import firebase from "firebase";
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();
const appIcon = require("../assets/logo.png");
export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name:"",
            last_name:"",
            email: "",
            password: "",
            confirmPassword: "",
        };
    }
    registerUser = (email, password,confirmPassword,first_name,last_name) => {
        if(password==confirmPassword){
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
            Alert.alert("Usuário registrado.");
            console.log(userCredential.user.uid)
            this.props.navigation.replace("Login");
            firebase.database().ref("/users/" + userCredential.user.uid)
            .set({
                email: userCredential.user.email,
                first_name: first_name,
                last_name: last_name,
                current_theme: "dark"
            })
            })
            .catch(error => {
            Alert.alert(error.message);
            });
        }else{
            Alert.alert("As senhas não são iguais.");
        }
    }
    render() {
        const { email, password, confirmPassword, first_name, last_name } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.appTitleText}>Registrar</Text>
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ first_name: text })}
                    placeholder={"Nome"}
                    placeholderTextColor={"#FFFFFF"}
                />
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ last_name: text })}
                    placeholder={"Sobrenome"}
                    placeholderTextColor={"#FFFFFF"}
                />
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ email: text })}
                    placeholder={"Digite o email"}
                    placeholderTextColor={"#FFFFFF"}
                />
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ password: text })}
                    placeholder={"Digite a senha"}
                    placeholderTextColor={"#FFFFFF"} 
                    secureTextEntry
                />
                <TextInput
                    style={styles.textinput}
                    onChangeText={text => this.setState({ confirmPassword: text })}
                    placeholder={"Digite a senha novamente"}
                    placeholderTextColor={"#FFFFFF"}
                    secureTextEntry
                />
                <TouchableOpacity
                    style={[styles.button, { marginTop: 20 }]}
                    onPress={() => this.registerUser(email, password,
                    confirmPassword,first_name,last_name)}
                >
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>this.props.navigation.replace("Login")}
                >
                    <Text style={styles.buttonTextNewUser}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#15193c",
        alignItems:"center",
        justifyContent:"center"
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