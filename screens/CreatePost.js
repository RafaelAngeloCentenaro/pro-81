import * as React from 'react'
import {View, Text,Image,Text,SafeAreaView,ScrollView,TextInput} from 'react-native'
import { DropDownPicker } from 'react-native-dropdown-picker'
import { RFValue } from 'react-native-responsive-fontsize'
export default class CreatePost extends React.Component{
    constructor(props){
        super(props)
        this.state={
            previewImage:"image_1.jpg"
        }
    }
    async createPost(){
        let previewImage = {
            "Image_1":require("../assets/image_1.jpg"),
            "Image_2":require("../assets/image_2.jpg"),
            "Image_3":require("../assets/image_2.jpg"),
            "Image_4":require("../assets/image_4.jpg"),
            "Image_5":require("../assets/image_5.jpg")
        }
    }
    render(){
        return(
            <View>
                <SafeAreaView/>
                <View>
                    <View>
                        <Image
                        source={require("../assets/logo.png")}
                        
                        ></Image>
                    </View>
                    <View>
                        <Text>Novo Post</Text>
                    </View>
                </View>
                <View>
                    <ScrollView>
                        <Image
                        source={previewImage[this.state.previewImage]}

                        ></Image>
                        <View style={{height:RFValue(this.state.dropdownHeight)}}>
                            <DropDownPicker
                                items={[
                                    {label:"Image 1",value:"image_1"},
                                    {label:"Image 2",value:"image_2"},
                                    {label:"Image 3",value:"image_3"},
                                    {label:"Image 4",value:"image_4"},
                                    {label:"Image 5",value:"image_5"},
                                    {label:"Image 6",value:"image_6"},
                                    {label:"Image 7",value:"image_7"}
                                ]}
                                defaultValue={this.state.previewImage}
                                containerStyle={{
                                    height:40,
                                    borderRadius:20,
                                    marginBottom:10
                                }}
                                onOpen={()=>{
                                    this.setState({dropdownHeight:170});
                                }}
                                onClose={()=>{
                                    this.setState({dropdownHeight:40});
                                }}
                                style={{backgroundColor:"transparent"}}
                                itemStyle={{
                                    justifyContent:"flex-start"
                                }}
                                dropDownStyle={{backgroundColor:"#2a2a2a"}}
                                labelStyle={{
                                    color:"white"
                                }}
                                arrowStyle={{
                                    color:"white"
                                }}
                                onChangeItem={item=>
                                    this.setState({
                                        previewImage:item.value
                                    })
                                }
                            />
                        </View>
                        <TextInput
                            onChangeText={caption=>this.setState({caption})}
                            placeholder={"Legenda"}
                            placeholderTextColor="white"
                        />
                    </ScrollView>
                </View>
                <View style={{flex:0.08}}/>
            </View>
        )
    }
}