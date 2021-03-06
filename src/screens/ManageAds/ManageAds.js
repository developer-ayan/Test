import React from 'react'
import { View, Text, TextInput, ScrollView, Image, Button } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';



export default function manageAds() {
  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: '#ffffff',
      paddingLeft: 13,
      paddingRight: 13,
    }}>

      <View style={{

      }}>
        {/* icon back */}
        <View style={{ marginTop: 10 }}>
          <Feather name="arrow-left" size={25} color="black" />
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
        <View style={{ margin: 5, backgroundColor: '#00ae49', borderRadius: 5, padding: 13 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 12, textAlign: 'center' }}>My Ads</Text>
        </View>
        <View style={{ margin: 5, backgroundColor: '#f7f7f7', borderRadius: 5, padding: 13 }}>
          <Text style={{ color: '#7d7d7d', fontWeight: 'bold', fontSize: 12, textAlign: 'center' }}>Pending approval</Text>
        </View>
        <View style={{ margin: 5, backgroundColor: '#f7f7f7', borderRadius: 5, padding: 13 }}>
          <Text style={{ color: '#7d7d7d', fontWeight: 'bold', fontSize: 12, textAlign: 'center' }}>Archived ads</Text>
        </View>
      </View>


      <View style={{ marginTop: 20 }}>
        <View>
          <Text style={{ color: 'black', fontSize: 20 }}>My Ads</Text>
          <Text style={{ color: '#7d7d7d', fontSize: 14, marginTop: 5 }}>Manage your free and premium advertisement</Text>
        </View>
        <View style={{
          padding: 10, borderRadius: 10, marginTop: 20, shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.00,
          
          elevation: 1,
        }}>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
            <Image
              style={{ width: 200, height: 200 }}
              source={require("../../assets/premiumImages/img1.png")}
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ color: 'black', fontSize: 16 }}>Maxi</Text>
            <Text style={{ color: '#7d7d7d', fontSize: 14, marginTop: 2, opacity: 0.5, }}>Clothing</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between', paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 25, color: 'black' }}>$200</Text>
            <View style={{ flexDirection: 'row' }}>
              <AntDesign name="edit" size={22} color="#b1b1b1" style={{ color: 'black', paddingVertical: 2, width: 40 }} />
              <AntDesign name="delete" size={22} color="#b1b1b1" style={{ color: 'black', paddingVertical: 2 }} />
            </View>
          </View>
        </View>

      </View>

      <View style={{
          padding: 10, borderRadius: 10, marginTop: 20, shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.00,
          
          elevation: 1,
        }}>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
          <Image
              style={{ width: 200, height: 200 }}
              source={require("../../assets/premiumImages/img1.png")}
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ color: 'black', fontSize: 16 }}>Maxi</Text>
            <Text style={{ color: '#7d7d7d', fontSize: 14, marginTop: 2, opacity: 0.5, }}>Clothing</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, justifyContent: 'space-between', paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 25, color: 'black' }}>$200</Text>
            <View style={{ flexDirection: 'row' }}>
              <AntDesign name="edit" size={22} color="#b1b1b1" style={{ color: 'black', paddingVertical: 2, width: 40 }} />
              <AntDesign name="delete" size={22} color="#b1b1b1" style={{ color: 'black', paddingVertical: 2 }} />
            </View>
          </View>
        </View>




    </ScrollView>
  )
}
