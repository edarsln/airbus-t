import React from "react";
import {SafeAreaView,View,Text,Image,StyleSheet,TouchableOpacity} from "react-native";
import MapView from "react-native-maps";

const Detail4 = ({navigation}) => {
    function goToDetail() {
        navigation.navigate('Detail');
       }
    return(
            <SafeAreaView style= {{backgroundColor:'#D9E0EA',flex:1}}> 
                <View >
            <Image
        style={styles.header}
        source={require('../assets/logo.png')}
      />
      <TouchableOpacity  onPress={goToDetail}>
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
      <MapView   provider="google" style ={{flex:0.6}} />
   
      <View style={styles.detay}>
        <Text style={{fontSize:21,color:'#3A5BA0',fontWeight:'bold'}}>DetaylarTitle</Text>
        <Text style={{fontSize:17,fontWeight:'400',}}>Detaylar</Text>
    </View>
    <TouchableOpacity style={styles.button}>
    <Text style={{color:'#FFFFFF',textAlign:'center',fontSize:15}}>Sürüşü Başlat</Text>
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
        button:{
            padding:15,
            borderRadius:10,
            marginHorizontal:90,
            marginVertical:20,
            fontSize:17,
            top:80,
            backgroundColor:'#3A5BA0',
            color:'#FFFFFF'
        }
})
export default Detail4;