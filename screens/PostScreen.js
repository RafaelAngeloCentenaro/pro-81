import * as React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import Icon from 'react-native-ionicons'
import Component from 'react-native-paper/lib/typescript/src/components/Typography/Text'
import PostScreen from './PostScreen'
import { RFValue } from 'react-native-responsive-fontsize'
export default class PostCard extends Component(){
    constructor(props){
        super(props)
        this.state={
            postId:this.props.post.key,
            like:this.props.post.value.likes,
            data:this.props.post.value
        }
    }
    render(){
        return(
                <View>
                    <View>
                        <View>
                            <View>
                                <Image
                                    source={require("../assets/profile_img.png")}

                                ></Image>
                            </View>
                            <View>
                                <Text>{this.props.post.author}</Text>
                            </View>
                        </View>
                        <Image source={require("../assets/post.jpeg")}/>
                        <View>
                            <Text>
                                {this.props.post.caption}
                            </Text>
                        </View>
                        <View>
                            <View>
                                <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                                <Text>12k</Text>
                            </View>
                        </View>
                    </View>
                </View>
            )
        }
    }