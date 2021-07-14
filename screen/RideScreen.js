import React,{Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions'

export default class RideScreen extends Component{
    constructor(){
        super()
        this.state = {
            domState:'normal',
            hasCameraPermission:null,
            scanned:false,
            scannedData:''
        }
    }

    getCameraPermisson = async(domState)=>{
      const{status} = await Permissions.askAsync(Permissions.CAMERA)
      this.setState({
          hasCameraPermission:status === "granted",
          domState:domState,
          scanned:false
      })
    }

    handleBarcodeScanned =async({type,data})=>{
      this.setState({
          domState:"normal",
          scanned:true,
          scannedData:data
      })
    }
    render(){
       const{domState,hasCameraPermission,scanned,scannedData} = this.state
          if(domState === "scanner"){
              return(
                  <BarCodeScanner
                    onBarCodeScanned = {scanned?undefined:this.handleBarcodeScanned}
                  />
              )
          }
        return(
         <View style = {styles.container}>
             <Text style = {styles.textStyle}>{hasCameraPermission?scannedData:"request for permission"}</Text>

             <TouchableOpacity
             style = {styles.ButtonStyle}
             onPress = {()=>this.getCameraPermisson("scanner")}
             >
              <Text style = {styles.ButtonTextStyle}>scan QR code</Text>
             </TouchableOpacity>
         </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffcc00",
        alignitem:"center",
        justifyContent:"'center"
    },
    textStyle:{
        color:"purple",
        marginLeft:560,
        marginTop:50,
        fontSize:20,
    },
    ButtonTextStyle:{
      color:"orange",
      fontSize:25,
      alignItems:"center"
    },
    ButtonStyle:{
      alignItems:"center",
      marginLeft:560,
      marginTop:200,
      width:200,
      height:50,
      backgroundColor:"yellow",
      borderWidth:5,
      borderRadius:20
    },

})