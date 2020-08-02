import React, { useState,useEffect,useRef }from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity,Animated,Dimensions} from 'react-native';
import beok from "../json/json.json"
import { Audio } from 'expo-av';
import LottieView from "lottie-react-native";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const RedButton  = ({navigation}) => {
    // console.log(navigation)
    const [count, setCount] = useState(0);

    const position = new Animated.ValueXY(0, 0);
    useEffect(() => {
      Animated.spring(position, {
        toValue: { x: 350, y: 500 },
      }).start();
    }, []);

    const PlayAudio = async () => {
      const soundObject = new Audio.Sound();
      try {
          await soundObject.loadAsync(require('../img/btn3.mp3'));
          await soundObject.playAsync();
          // Your sound is playing!
      } catch (error) {
          // An error occurred!
      };
      setCount((count+1));
      animation.current.play();
    };

    const animation = useRef(null);

    if(count<=15)
    return (
        <ScrollView style={styles.container}>
          <Image style={styles.bp} source={{url:beok[0].backgr}}/>
        <View style={styles.ph}>
        <Text style={styles.w}>{count}</Text>
        
        <LottieView
        ref={animation}
        source={require("../json/rbtn1.json")}
        loop={false}
        style={styles.lo}
      />
      <TouchableOpacity  onPress={()=>{PlayAudio()}} ><View style={styles.btnt}></View></TouchableOpacity>
      </View>
      <View style={styles.bottombtn}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}><Image style={styles.backbtn} source={{url:beok[0].backbtn}}/></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Redsave")}><Image style={styles.okbtn} source={{url:beok[0].okbtn}}/></TouchableOpacity>
      </View>
    </ScrollView>
    );
      else
      return (
        <ScrollView style={styles.container}>
          <Image style={styles.bp} source={{url:beok[0].backgr}}/>
        <View style={styles.ph}>
        <Text style={styles.w}>{count}</Text>
        <LottieView
        ref={animation}
        source={require("../json/rbtn2.json")}
        loop={false}
        style={styles.lo2}
      />
      <TouchableOpacity  onPress={()=>{PlayAudio()}} ><View style={styles.btnt}></View></TouchableOpacity>
      </View>
      <View style={styles.bottombtn}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}><Image style={styles.backbtn} source={{url:beok[0].backbtn}}/></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Redsave")}><Image style={styles.okbtn} source={{url:beok[0].okbtn}}/></TouchableOpacity>
      </View>
    </ScrollView>
    );
  };
  
  
  const styles = StyleSheet.create({
    container:{
      backgroundColor:"#05495D",
    
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "powderblue"
  },
  ph:{
      alignItems: 'center'
    },
  rbtn:{
      width:219,
      height:247,
      marginTop:180
  },
  w:{
      color:"#fff",
      fontSize:85,
      fontWeight:"bold",
      opacity:0.5,
      marginTop:screenHeight*0.08
  },
  btn:{
    // position:"absolute",
    width:200,
    height:226,
    marginRight:100
  },
  bp:{
    position:"absolute",
    width:"100%",
    height:screenHeight*0.9,
  },
  bottombtn:{
    flexDirection:"row",
    justifyContent:'space-between',
    marginTop:screenHeight*0.05
  },
  backbtn:{
    width:60,
    height:50,
  },
  okbtn:{
    width:60,
    height:50,
  },
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "red",
  },
  btnt:{
    width:200,
    height:200,
    borderRadius:999,
    backgroundColor:"#000",
    opacity:0,
    marginTop:screenHeight*0.35
  },
  lo:{
    marginTop:screenHeight*0.15,
    width:300,
    height:300,
    position:"absolute"
  },
  lo2:{
    marginTop:screenHeight*0.1585,
    width:278.5,
    height:278.5,
    position:"absolute"
  },
    
  });

export default RedButton;