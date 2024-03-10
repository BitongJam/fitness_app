import { StyleSheet, Text, View, Image } from 'react-native';
const logoImg = require("../assets/adaptive-icon.png")



export default function App() {
  return (
    <View style={styles.container}>
        
        <View style={{alignItems:"center"}}>
            <Image source={logoImg} style={{ width: 200, height: 200 }} />  
            <Text style={styles.headerText}>FitNess App</Text>
        </View>
            
       
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1d1f',
    justifyContent: "center",
    alignItems: "center"
  },headerText:{
    color: "#d1fd3f",
    fontSize: 100,
    fontWeight: "bold",
    textAlign:"center"
  }
});
