import { StyleSheet, Text, View, Image } from 'react-native';
const logoImg = require("../assets/adaptive-icon.png")



export default function App() {
  return (
    <View style={styles.container}>
        
        <View style={styles.section}>  
            <View style={{position:'absolute',backgroundColor: '#1c1d1f',width:'200%',height: 200,top:-50, transform: [{ rotate: '350deg' }]}}></View>
            <Text style={[styles.text,{fontStyle: 'italic',fontSize:38}]}>CREATE A WORKOUT PLAN</Text>
            <Text style={[styles.text,{fontWeight:"bold"}]}>TO STAY FIT</Text>
            <View style={{width:'100%',flexDirection:"row",justifyContent: 'center',alignItems: 'center',position:"absolute",bottom:200}}>
                 <View style={styles.rectangle}></View>
                 <View  style={[styles.rectangle,{width:50}]}></View>
                <View  style={styles.rectangle}></View>
                
            </View>
        </View>
            
       
      
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle:{width:20,height:5,backgroundColor: '#d1fd3f',marginHorizontal: 10},
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center"
  },
  section:
  {
   
    position: 'absolute',
    bottom: 0,
    alignItems:"center"
  ,backgroundColor: '#1c1d1f'
  ,height:"40%",width:"100%"},
  text:{
    color: "white",
    fontSize: 50,
    textAlign:"center"
  }
});
