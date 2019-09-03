import React, {Component} from "react"
import {View,Text, TextInput, StyleSheet,TouchableOpacity} from "react-native"

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            color : "",
            buttonCOlor: ""
        }
    }

    randomColorGenerator = () => {
      return(   
        "rgb("
        + Math.floor(Math.random()*256)
        + "," 
        + Math.floor(Math.random()*256)
        + "," 
        + Math.floor(Math.random()*256)
        + ")"
      );
    };

    changeBackground = () => {
      this.setState( {color: this.randomColorGenerator() });
      this.setState( {buttonCOlor: this.randomColorGenerator() });

    } 

    render(){
        return( 
            <View style= {[styles.container,{backgroundColor: this.state.color }]}>
              <TouchableOpacity              
                onPress={this.changeBackground }>
                <Text
                style= {[styles.button, {color: this.state.buttonCOlor}]}
                > button + {this.state.color} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
      borderColor: "white",
      fontSize: 10,
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,

    }

})