import React from "react";
import { Text, View, Image } from "react-native";
import box from "../assets/box.png";
const Group = () => {
return (
	<View style={{ flex: 1, alignItems: "flex-left", justifyContent: "center", position:"absolute", top : 0 }}>
	<Text style={{ fontSize: 20 }}>New Groups:</Text>
  <View style={{flexDirection: 'row'}}>
	<Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  <Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  <Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  </View>
  <Text style={{ fontSize: 20 }}>Study Groups:</Text>
  <View style={{flexDirection: 'row'}}>
	<Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  <Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  <Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  </View>
  <Text style={{ fontSize: 20 }}>Recreational Groups:</Text>
  <View style={{flexDirection: 'row'}}>
	<Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  <Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  <Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  </View>
  <Text style={{ fontSize: 20 }}>Previous Groups:</Text>
  <View style={{flexDirection: 'row'}}>
	<Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  <Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  <Image source={box} style={{ resizeMode:"contain", width: 100, height: 100 }} />
  </View>
  
	</View>
);
};

export default Group;
