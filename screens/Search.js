import {React, useState} from "react";
import { Text, View, Image, TextInput, StyleSheet,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Search = () => {
  const [sRequest, setRequest] = useState('');
return (
	<View style={{ flex: 1, alignItems: "center", justifyContent: "Top" }}>
  <Text style ={{marginTop:20}}> Search for users or groups: </Text>
	<TextInput 
  value = {sRequest}
  onChangeText={(sRequest) => setRequest(sRequest)}
  style= {{
  backgroundColor: 'gray',
  marginTop: 20,
  width: 200,
  height:30
  }}/>
  {sRequest!= ''? <Text>
  Find results for: {sRequest}
  </Text>:null}

	</View>
);
};

export default Search;
