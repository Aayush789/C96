import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MyHeader from '../components/MyHeader';
import DropdownMenu from 'react-native-dropdown-menu';

import firebase from 'firebase';

export default class InventoryScreen extends Component{
    render(){

        var data= [[ "Select", "HDFC", "Adwiz"]]
        
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

<View style ={{marginTop: 150}}>

<DropdownMenu
    style={{flex: 0.5}}
    bgColor={'grey'}
    tintColor={'#000000'}
    activityTintColor={'red'}
    handler={(selection, row) => this.setState({text: data[selection][row]})}
    data={data}
    >
</DropdownMenu>

</View>
            </View>
            
        )
    }
} 