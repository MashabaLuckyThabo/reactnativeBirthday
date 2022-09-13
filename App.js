import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

const img = require('./assets/you.jpg')
export default function App() {
  return (
    <View style={{
      width: 640, height: 400, position: 'absolute', margin: 'auto', left: 0,
      right: 0, top: 0, bottom: 0, WebkitPerspective: 1200, perspective: 1200, transition: '1s',width:'90%',
    }}>
      <ImageBackground source={img} style={{size:'cover',width:'100%',height:'100%'}}>
      <View style={{alignContent:'center',margin:'auto',marginLeft:'45%'}}>
        <View style={{color:'gold',marginTop:'30%',fontSize:20,marginLeft:'-40%'}} >

          <Text style={{color:'rgb(206, 188, 84)',fontSize:16,}}>Wishing you  </Text>
          <Text style={{color:'rgb(206, 188, 84)',fontSize:16,}}>a very happy birthday</Text>
          <Text style={{color:'rgb(206, 188, 84)',fontSize:16,}}>and a splendid year ahead.</Text>
          {/* <Text style={{color:'rgb(206, 188, 84)',fontSize:16,marginLeft:'20%'}}>splendid year ahead. </Text> */}
        </View>

        <marquee style={{color:'rgb(252, 189, 30)',fontSize:32,marginLeft:'-30%'}} behavior="slide" direction="left">Have a blessed day</marquee>

        <View style={{color:'rgb(206, 188, 84)',marginLeft:'-20%',marginTop:10,fontSize:22}}>

          <marquee style={{color:'rgb(206, 188, 84)',}} behavior="slide" direction="right">Happy birthday Tumi,  </marquee>
          <marquee style={{color:'rgb(206, 188, 84)',marginLeft:'-10%'}} behavior="slide" direction="right">wishing you ,Joy and</marquee>
          <marquee style={{color:'rgb(206, 188, 84)',marginLeft:'-20%'}} behavior="slide" direction="right">Happiness </marquee>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
