import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View ,StyleSheet} from 'react-native'
import Colors from '../constants/Colors';

export default function SettingsPageComponent({children,style}) {
  return (
      <TouchableOpacity
          style={{}}
		>
			<View  style={[{flex:1, flexDirection: 'row', backgroundColor:Colors.background, justifyContent:'space-between' ,marginLeft:20,padding:20,marginRight:20, marginTop:5},style]}>
				{children}
				<Ionicons name="chevron-forward-sharp" size={24} color={Colors.white} />
			</View>
		</TouchableOpacity>
	);
}
