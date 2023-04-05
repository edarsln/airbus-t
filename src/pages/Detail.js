import React from "react";
import {SafeAreaView,View,Text,Image,StyleSheet,TouchableOpacity} from "react-native";
import MapView from "react-native-maps";

const Detail = ({navigation}) => {
 
    function goToTask() {
        navigation.navigate('Task');
       }
       function goToDetail4() {
        navigation.navigate('Detail4');
       }

    return(
            <SafeAreaView style= {{backgroundColor:'#D9E0EA',flex:1}}>
   
                <View >
                
            <Image
        style={styles.header}
        source={require('../assets/logo.png')}
      />
      <TouchableOpacity  onPress={goToTask}>
               <Image
        style={{alignSelf:'flex-start',height:40,width:40,top:-40}}
        source={require('../assets/left.png')}
      />
      </TouchableOpacity>
      
      <View>   

          <View style={styles.text}>
      <Text style={{color:'white',alignSelf:'center',fontSize:25}} >Detaylar</Text>
            </View>
      </View> 
      
      </View> 
      <MapView   provider="google" style ={{flex:0.9}} />
    
    <View style={styles.detay}>
        <Text style={{fontSize:21,color:'#3A5BA0',fontWeight:'bold'}}>DetaylarTitle</Text>
        <Text style={{fontSize:17,fontWeight:'400',}}>Detaylar</Text>
    </View>
    <TouchableOpacity
                      style={styles.buttonK}
                      onPress={goToDetail4}>
                      
                      
                       
          <Text style={styles.buttonText} >Kabul Et</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonR} onPress={goToTask}>
          <Text style={styles.buttonText}>Reddet</Text>
        </TouchableOpacity>
      </SafeAreaView>
      
    )
};
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        height:50,
        width:50,
      alignSelf:'center',
      top:10
        
    },
    text: {
        backgroundColor:'#3A5BA0',
        top:-20,
        padding:17,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    detay:{
    padding: 10,
    width: 350,
    height: 170,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 30,
    marginRight: 15,
    marginBottom: 5,
    top:30
    },
    buttonK: {
        backgroundColor:'#41D461',
        width: 150,
        height: 50,
        borderRadius: 10,
       alignSelf:'flex-start',
        margin: 10,
        top:70,
        justifyContent:'center',
        alignItems:'center',
      },
      buttonR: {
        backgroundColor:'#D3402C',
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center',
  
      alignSelf:'flex-end',
        margin: 10,
      },
      buttonText: {
        color: 'white',
        textAlign:'center',
        justifyContent:'center',
     fontWeight:'bold',
     fontSize:17,
   



      },
   
    
})
export default Detail;