import * as React from 'react'
import {View,Text,Switch} from 'react-native'
import firebase from 'firebase'
export default class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isEnabled:false,
            light_theme:true,
            name:""
        }
    }
    componentDidMount(){
        this.fetchUser()
    }
    async fetchUser(){
        let theme,name,image;
        await firebase
            .database
            .ref("/users/" + firebase.auth().currentUser.uid)
            .on("value",function(snapshot) {
                theme =snapshot.val().current_theme;
                name =`${snapshot.val().first_name} ${snapshot.val().last_name}`
            });
        this.setState({
            light_theme:theme==="light"?true:false,
            isEnabled:theme==="light"?false:true,
            name:name
        });
    }
    toggleSwitch(){
        const previous_state=this.state.isEnabled;
        const theme = !this.state.isEnabled?"dark":"light"
        var updates={}
        updates["/users/"+firebase.auth().currentUser.uid+"/current_theme"]=theme
        firebase.database().ref().update(updates);
        this.setState({isEnabled:!previous_state,light_theme:previous_state})
    }
    render(){
        return(
            <View
                style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center"
                }}
            >
                <Text>Perfil</Text>
                <Switch value={this.state.light_theme} onValueChange={this.toggleSwitch()}/>
            </View>
        )
    }
}