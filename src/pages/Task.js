import React,{useState} from "react";
import {SafeAreaView,View,Text,StyleSheet,Image, TouchableOpacity, ScrollView,FlatList} from "react-native";
import MapView from "react-native-maps";
import data from "./data.json";
import TaskComponent from "./Taskcomponent";
const Login = ({navigation}) => {
    function goToLogin() {
        navigation.navigate('Login');
       }
       const [list, setList] = useState(data);
       const handleProductSelect = item => {
         navigation.navigate('Detail', {item: item});
       };
       const dataTask = ({item}) => (
         <TaskComponent product={item} onSelect={() => handleProductSelect(item)} />
       );
    return(
            <SafeAreaView style= {{backgroundColor:'#D9E0EA',}}>
                <View >
            <Image
        style={styles.header}
        source={require('../assets/logo.png')}
      />
      <TouchableOpacity onPress={goToLogin}>
               <Image
        style={{alignSelf:'flex-start',height:40,width:40,top:-40}}
        source={require('../assets/left.png')}
      />
      </TouchableOpacity>
      <View>   
          <View style={styles.text}>
      <Text style={{color:'white',alignSelf:'center',fontSize:25}} >Görevler</Text>
            </View>
      </View> 
      </View> 
      <FlatList
data={list}
renderItem={dataTask}
keyExtractor={item => item.id}
/>
<MapView   provider="google" style ={{flex:0.450}} />
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
    }
})

export default Login;
