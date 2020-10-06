import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MyHeader from '../components/MyHeader';

import firebase from 'firebase';

export default class SearchScreen extends Component{
    render(){
        return(
            <View style= {{ justigyContent: 'center',alignItems: 'center'}}>

<MyHeader navigation= {this.props.navigation}/> 

               <Image
          source= {require("../assets/hdfc.png")}
          style= {{width:280, height:50, alignItems: 'center', justifyContent:'center'}}
        />

<Image
          source= {require("../assets/window.jpg")}
          style= {{width:280, height:50, alignItems: 'center', justifyContent:'center'}}
        />

        
            </View>
        )
    }
} 