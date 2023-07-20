import * as React from 'react'
import {View,Text,Image} from 'react-native'
import Icon from 'react-native-ionicons'
import Component from 'react-native-paper/lib/typescript/src/components/Typography/Text'
import { RFValue } from 'react-native-responsive-fontsize'
export default class PostCard extends Component(){
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